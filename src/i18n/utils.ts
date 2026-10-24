import { experience } from '../data/experience';
import { featuredProjects, minorProjects } from '../data/projects';
import type { EvidenceRef, L10n, Locale, PartialDate } from '../data/types';

/** Restituisce il testo nella lingua richiesta; le stringhe semplici valgono per tutte. */
export function localize(value: string | L10n, locale: Locale): string {
  return typeof value === 'string' ? value : value[locale];
}

const intlLocale: Record<Locale, string> = { it: 'it-IT', en: 'en-GB' };

/** "2024-11" → "nov 2024" / "Nov 2024"; "2024" → "2024". */
export function formatPartialDate(date: PartialDate, locale: Locale): string {
  const [year, month] = date.split('-').map(Number);
  if (year === undefined || Number.isNaN(year)) throw new Error(`Data non valida: ${date}`);
  if (month === undefined) return String(year);
  return new Intl.DateTimeFormat(intlLocale[locale], { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)))
    .replace('.', '');
}

/** "2026-10-24" → "24 ottobre 2026" / "24 October 2026". */
export function formatFullDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(intlLocale[locale], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${date}T00:00:00Z`),
  );
}

export function formatRange(start: PartialDate, end: PartialDate | null, presentLabel: string, locale: Locale): string {
  return `${formatPartialDate(start, locale)} – ${end ? formatPartialDate(end, locale) : presentLabel}`;
}

interface ResolvedEvidence {
  label: string;
  href: string;
}

/**
 * Traduce un riferimento `exp:<id>` / `proj:<id>` in etichetta e ancora.
 * Un riferimento sconosciuto interrompe la build: meglio un errore chiaro che un link rotto.
 */
export function resolveEvidence(ref: EvidenceRef, locale: Locale): ResolvedEvidence {
  const [kind, id] = ref.split(':') as ['exp' | 'proj', string];
  if (kind === 'exp') {
    for (const job of experience) {
      if (job.id === id) return { label: job.organization, href: `#exp-${id}` };
      for (const assignment of 'assignments' in job ? job.assignments : []) {
        if (assignment.id === id) return { label: localize(assignment.context, locale), href: `#exp-${id}` };
      }
    }
  } else {
    const project = [...featuredProjects, ...minorProjects].find((p) => p.id === id);
    if (project) return { label: localize(project.title, locale), href: `#proj-${id}` };
  }
  throw new Error(`Evidenza non trovata: "${ref}". Controlla gli id in src/data/.`);
}

/** Percorso della home per lingua, rispettando il `base` di Astro. */
export function homePath(locale: Locale): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return locale === 'it' ? `${base}/` : `${base}/en/`;
}
