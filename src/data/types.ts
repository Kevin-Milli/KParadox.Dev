/**
 * Modello dati del portfolio.
 *
 * Tutti i contenuti del sito vivono in `src/data/*.ts` e rispettano questi tipi:
 * i componenti si limitano a presentarli. Un campo mancante o un riferimento
 * sbagliato fa fallire `npm run check` o `npm run build`.
 */

export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];

/** Testo tradotto in ogni lingua del sito. */
export type L10n = Record<Locale, string>;

/** Elenco tradotto (stesso numero di voci non richiesto, ma consigliato). */
export type L10nList = Record<Locale, readonly string[]>;

/** Data a granularità di mese ("2024-11") o di anno ("2024"). */
export type PartialDate = `${number}-${number}` | `${number}`;

export interface Profile {
  name: string;
  /** Ruolo breve, usato in title, hero e footer. */
  role: L10n;
  /** Frase di valore mostrata sotto il nome. */
  tagline: L10n;
  /** Righe del "record" nella hero: etichetta in stile colonna SQL → valore. */
  record: readonly { column: L10n; value: L10n }[];
  email: string;
  links: {
    github: string;
    linkedin: string;
    youtube?: string;
  };
  /**
   * Percorso del CV dentro `public/` (es. "cv/kevin-milli-cv.pdf"), per lingua.
   * `null` nasconde il pulsante: nessun link rotto.
   */
  cv: Partial<Record<Locale, string>> | null;
}

export interface NowEntry {
  label: L10n;
  text: L10n;
}

export interface Now {
  /** Data dell'ultima revisione manuale della sezione (YYYY-MM-DD). */
  updated: `${number}-${number}-${number}`;
  entries: readonly NowEntry[];
}

export interface Assignment {
  /** Usato come ancora (#exp-<id>) e nelle evidenze dello stack. */
  id: string;
  context: L10n;
  role: L10n;
  start: PartialDate;
  /** `null` = in corso. */
  end: PartialDate | null;
  highlights: L10nList;
  stack: readonly string[];
}

export interface Experience {
  id: string;
  organization: string;
  role: L10n;
  location: L10n;
  start: PartialDate;
  end: PartialDate | null;
  summary?: L10n;
  highlights?: L10nList;
  assignments?: readonly Assignment[];
  stack?: readonly string[];
}

export interface FeaturedProject {
  id: string;
  title: L10n;
  status: L10n;
  context: L10n;
  goal: L10n;
  contribution: L10n;
  decisions: L10nList;
  outcome: L10n;
  /** Flusso dati in passi: sorgente → elaborazione → output. */
  flow: L10nList;
  stack: readonly string[];
  repo: string;
}

export interface MinorProject {
  id: string;
  title: L10n;
  year: number;
  summary: L10n;
  stack: readonly string[];
  repo: string;
}

/** Dove è stata usata una tecnologia. */
export type UsageContext = 'professional' | 'personal' | 'learning';

/** Riferimento a un'esperienza (`exp:<id>`) o a un progetto (`proj:<id>`). */
export type EvidenceRef = `exp:${string}` | `proj:${string}`;

export interface StackCategory {
  id: string;
  label: L10n;
}

export interface StackItem {
  /** Nome proprio (stringa) o, se va tradotto, testo localizzato. */
  name: string | L10n;
  /** Deve corrispondere a un `StackCategory.id`. */
  category: string;
  context: UsageContext;
  note?: L10n;
  evidence?: readonly EvidenceRef[];
}

export interface Credential {
  title: L10n | string;
  issuer?: string;
  date?: PartialDate;
  kind: 'diploma' | 'program' | 'certificate';
  note?: L10n;
  verifyUrl?: string;
}
