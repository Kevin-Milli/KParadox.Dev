import type { Credential } from './types';

/**
 * Formazione e certificazioni verificabili (dai certificati presenti nel
 * vecchio sito e dal CV). Gli URL di verifica sono quelli stampati sui
 * certificati Coursera.
 */
export const credentials = [
  {
    title: 'Master in Data Science',
    issuer: 'Start2Impact University',
    date: '2023-08',
    kind: 'program',
    note: { it: 'Portfolio di 4 progetti individuali.', en: 'Portfolio of 4 individual projects.' },
  },
  {
    title: 'Master in Data Analysis',
    issuer: 'Start2Impact University',
    date: '2023-10',
    kind: 'program',
    note: { it: 'Portfolio di 7 progetti individuali.', en: 'Portfolio of 7 individual projects.' },
  },
  {
    title: 'Master in Data Science',
    issuer: 'Neural Academy',
    date: '2023-10',
    kind: 'program',
  },
  {
    title: 'IBM Data Science Professional Certificate',
    issuer: 'IBM · Coursera',
    date: '2023-10',
    kind: 'certificate',
    verifyUrl: 'https://coursera.org/verify/professional-cert/ZAQ6LFYCBBRY',
  },
  {
    title: 'Machine Learning with Python (with honors)',
    issuer: 'IBM · Coursera',
    date: '2023-10',
    kind: 'certificate',
    verifyUrl: 'https://coursera.org/verify/Y4E3BK3MMA9R',
  },
  {
    title: 'IBM Machine Learning Professional Certificate',
    issuer: 'IBM · Coursera',
    date: '2023-11',
    kind: 'certificate',
    verifyUrl: 'https://coursera.org/verify/professional-cert/268MCFKDN46K',
  },
  {
    title: 'Applied Software Engineering Fundamentals',
    issuer: 'IBM · Coursera',
    date: '2023-12',
    kind: 'certificate',
    verifyUrl: 'https://coursera.org/verify/specialization/Y3GVD8UNM56J',
  },
  {
    title: 'PCEP — Certified Entry-Level Python Programmer',
    issuer: 'OpenEDG Python Institute',
    date: '2024',
    kind: 'certificate',
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    date: '2023-02',
    kind: 'certificate',
  },
  {
    title: { it: 'Diploma in grafica pubblicitaria', en: 'Diploma in advertising graphic design' },
    kind: 'diploma',
  },
] as const satisfies readonly Credential[];

/** Dati aggregati mostrati nel testo (fonte: Kevin, ottobre 2026). */
export const learningTotals = {
  certificates: 30,
  hours: 3000,
  since: 2022,
} as const;
