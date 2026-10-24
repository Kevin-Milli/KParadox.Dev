import type { Now, Profile } from './types';

export const profile = {
  name: 'Kevin Milli',
  role: {
    it: 'Data Engineer',
    en: 'Data Engineer',
  },
  tagline: {
    it: 'Progetto e mantengo flussi dati su Oracle per clienti del settore bancario e assicurativo, con SQL, PL/SQL, Bash e Python. Oggi lavoro anche con Oracle Machine Learning e approfondisco l’AI applicata ai dati.',
    en: 'I design and maintain Oracle data flows for banking and insurance clients, using SQL, PL/SQL, Bash and Python. I now also work with Oracle Machine Learning and I’m deepening my focus on AI applied to data.',
  },
  record: [
    { column: { it: 'ruolo', en: 'role' }, value: { it: 'Data Engineer · consulente', en: 'Data Engineer · consultant' } },
    { column: { it: 'stack', en: 'stack' }, value: { it: 'Oracle SQL · PL/SQL · Bash · Python', en: 'Oracle SQL · PL/SQL · Bash · Python' } },
    { column: { it: 'settori', en: 'sectors' }, value: { it: 'banca · assicurazioni · credito', en: 'banking · insurance · credit' } },
    { column: { it: 'in_corso', en: 'current' }, value: { it: 'Oracle ML · AI Database 26ai', en: 'Oracle ML · AI Database 26ai' } },
    { column: { it: 'sede', en: 'location' }, value: { it: 'Toscana · da remoto', en: 'Tuscany, Italy · remote' } },
  ],
  email: 'kev.dev01001011@gmail.com',
  links: {
    github: 'https://github.com/Kevin-Milli',
    linkedin: 'https://www.linkedin.com/in/kevin-milli/',
    youtube: 'https://www.youtube.com/watch?v=vf4fa6Nwxbk',
  },
  // Per pubblicare il CV: copiare il PDF in public/cv/ e indicare qui il percorso,
  // ad esempio { it: 'cv/kevin-milli-cv.pdf' }.
  cv: null as Profile['cv'],
} as const satisfies Profile;

export const now = {
  updated: '2026-10-24',
  entries: [
    {
      label: { it: 'Lavoro', en: 'Work' },
      text: {
        it: 'Da ottobre 2026 sono in consulenza presso un consorzio del settore della tutela del credito, su un progetto Oracle che include Oracle Machine Learning e Oracle AI Database 26ai.',
        en: 'Since October 2026 I’ve been consulting for a consortium in the credit-protection sector, on an Oracle project that includes Oracle Machine Learning and Oracle AI Database 26ai.',
      },
    },
    {
      label: { it: 'Studio', en: 'Learning' },
      text: {
        it: 'Sto costruendo un percorso strutturato di studio sull’AI Engineering, pensato anche per chi parte da zero. È ancora in fase di elaborazione.',
        en: 'I’m building a structured learning path on AI Engineering, designed to work for beginners too. It’s still being drafted.',
      },
    },
    {
      label: { it: 'Progetti', en: 'Building' },
      text: {
        it: 'Sviluppo un progetto software indipendente. Ne parlerò qui quando sarà pubblico.',
        en: 'I’m developing an independent software project. I’ll share it here once it’s public.',
      },
    },
  ],
} as const satisfies Now;
