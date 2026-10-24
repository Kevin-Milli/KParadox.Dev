import type { StackCategory, StackItem } from './types';

/**
 * Stack tecnologico — UNICA fonte per la sezione "Stack".
 *
 * Per aggiornare:
 * - aggiungere/rimuovere una voce in `stack`;
 * - spostarla cambiando `category`;
 * - cambiarne lo stato con `context`:
 *     'professional' = usata in incarichi di lavoro
 *     'personal'     = usata in progetti personali pubblici
 *     'learning'     = studiata o in approfondimento
 * - `evidence` collega la voce a esperienze (`exp:<id>`) o progetti (`proj:<id>`):
 *   un riferimento inesistente fa fallire la build.
 * - aggiornare `stackUpdated` quando si rivede la lista.
 *
 * Nessun livello o percentuale: il contesto d'uso e le evidenze dicono di più.
 */

export const stackUpdated = '2026-10-24';

export const stackCategories = [
  { id: 'languages', label: { it: 'Linguaggi e scripting', en: 'Languages and scripting' } },
  { id: 'data', label: { it: 'Database e tecnologie dati', en: 'Databases and data tooling' } },
  { id: 'platform', label: { it: 'Cloud, container e orchestrazione', en: 'Cloud, containers and orchestration' } },
  { id: 'ai', label: { it: 'AI, machine learning e data science', en: 'AI, machine learning and data science' } },
  { id: 'libraries', label: { it: 'Framework e librerie', en: 'Frameworks and libraries' } },
  { id: 'assistants', label: { it: 'Assistenti AI per lo sviluppo', en: 'AI coding assistants' } },
  { id: 'complementary', label: { it: 'Competenze complementari', en: 'Complementary skills' } },
] as const satisfies readonly StackCategory[];

export type StackCategoryId = (typeof stackCategories)[number]['id'];

export const stack: readonly (StackItem & { category: StackCategoryId })[] = [
  // Linguaggi e scripting
  { name: 'SQL (Oracle)', category: 'languages', context: 'professional', evidence: ['exp:intesa', 'exp:verti', 'exp:credito'] },
  { name: 'PL/SQL', category: 'languages', context: 'professional', evidence: ['exp:intesa', 'exp:verti', 'proj:resource-allocation', 'proj:data-validation'] },
  { name: 'Bash', category: 'languages', context: 'professional', evidence: ['exp:intesa', 'proj:bash-oracle'] },
  {
    name: 'Python',
    category: 'languages',
    context: 'professional',
    note: {
      it: 'Uso professionale più recente e meno esteso rispetto a SQL e PL/SQL.',
      en: 'Professional use is more recent and narrower than SQL and PL/SQL.',
    },
    evidence: ['exp:verti', 'exp:rd', 'proj:portfolio-simulation'],
  },
  {
    name: 'C# (.NET)',
    category: 'languages',
    context: 'professional',
    note: { it: 'Manutenzione di componenti esistenti.', en: 'Maintenance of existing components.' },
    evidence: ['exp:rd'],
  },
  { name: 'Java', category: 'languages', context: 'learning' },

  // Database e tecnologie dati
  { name: 'Oracle Database 19c / 21c', category: 'data', context: 'professional', evidence: ['exp:intesa', 'exp:verti'] },
  { name: 'SQL*Loader', category: 'data', context: 'professional', evidence: ['exp:intesa'] },
  {
    name: 'Apache Kafka',
    category: 'data',
    context: 'professional',
    note: { it: 'Lato consumo e integrazione con Oracle.', en: 'Consumer side and Oracle integration.' },
    evidence: ['exp:intesa'],
  },
  {
    name: 'Data modeling',
    category: 'data',
    context: 'professional',
    note: { it: 'Oracle Data Modeler, Mermaid.', en: 'Oracle Data Modeler, Mermaid.' },
    evidence: ['exp:verti'],
  },
  { name: 'Oracle Machine Learning', category: 'data', context: 'professional', note: { it: 'Da ottobre 2026.', en: 'Since October 2026.' }, evidence: ['exp:credito'] },
  { name: 'Oracle AI Database 26ai', category: 'data', context: 'professional', note: { it: 'Da ottobre 2026.', en: 'Since October 2026.' }, evidence: ['exp:credito'] },
  { name: 'ChromaDB', category: 'data', context: 'professional', note: { it: 'Vector database.', en: 'Vector database.' }, evidence: ['exp:rd'] },
  { name: 'Redis', category: 'data', context: 'professional', evidence: ['exp:rd'] },

  // Cloud, container e orchestrazione
  { name: 'Docker / Compose', category: 'platform', context: 'professional', evidence: ['exp:rd'] },
  { name: 'Google Cloud Run', category: 'platform', context: 'professional', evidence: ['exp:rd'] },
  { name: 'Amazon S3', category: 'platform', context: 'professional', evidence: ['exp:verti'] },
  { name: 'TWS · cron', category: 'platform', context: 'professional', note: { it: 'Schedulazione dei flussi batch.', en: 'Batch scheduling.' }, evidence: ['exp:intesa'] },
  { name: 'Git', category: 'platform', context: 'professional' },

  // AI, machine learning e data science
  { name: 'RAG', category: 'ai', context: 'professional', note: { it: 'Retrieval-augmented generation, progetto interno.', en: 'Retrieval-augmented generation, internal project.' }, evidence: ['exp:rd'] },
  { name: 'LLM · tool calling (Gemini)', category: 'ai', context: 'professional', evidence: ['exp:rd'] },
  { name: { it: 'Machine learning supervisionato', en: 'Supervised machine learning' }, category: 'ai', context: 'personal', evidence: ['proj:credit-risk'] },
  {
    name: 'Data science',
    category: 'ai',
    context: 'learning',
    note: { it: 'Master e certificazioni 2023 (vedi Profilo).', en: 'Programs and certificates, 2023 (see Profile).' },
  },
  {
    name: 'AI Engineering',
    category: 'ai',
    context: 'learning',
    note: { it: 'Approfondimento in corso.', en: 'Ongoing study.' },
  },

  // Framework e librerie
  { name: 'FastAPI', category: 'libraries', context: 'professional', evidence: ['exp:rd'] },
  { name: 'Pydantic', category: 'libraries', context: 'professional', evidence: ['exp:rd'] },
  { name: 'LangChain', category: 'libraries', context: 'professional', evidence: ['exp:rd'] },
  { name: 'pandas · NumPy', category: 'libraries', context: 'professional', evidence: ['exp:verti', 'proj:credit-risk'] },
  { name: 'scikit-learn · XGBoost', category: 'libraries', context: 'personal', evidence: ['proj:credit-risk'] },
  { name: 'requests · BeautifulSoup', category: 'libraries', context: 'personal', evidence: ['proj:portfolio-simulation'] },
  { name: 'SymPy', category: 'libraries', context: 'personal', evidence: ['proj:function-creator'] },
  {
    name: 'Astro · HTML · CSS',
    category: 'libraries',
    context: 'personal',
    note: { it: 'Questo sito.', en: 'This website.' },
  },

  // Assistenti AI per lo sviluppo (strumenti, non linguaggi)
  {
    name: 'Claude Code',
    category: 'assistants',
    context: 'personal',
    note: { it: 'Supporto allo sviluppo, alla revisione e alla documentazione.', en: 'Support for coding, review and documentation.' },
  },
  {
    name: 'ChatGPT',
    category: 'assistants',
    context: 'personal',
    note: { it: 'Analisi, studio e prototipazione.', en: 'Analysis, study and prototyping.' },
  },

  // Competenze complementari
  { name: { it: 'Inglese (B2)', en: 'English (B2)' }, category: 'complementary', context: 'professional', note: { it: 'Due anni di lavoro a Londra.', en: 'Two years working in London.' }, evidence: ['exp:white-lion'] },
  { name: { it: 'Coordinamento di team', en: 'Team coordination' }, category: 'complementary', context: 'professional', evidence: ['exp:white-lion'] },
  { name: { it: 'Grafica e comunicazione visiva', en: 'Graphic design and visual communication' }, category: 'complementary', context: 'personal', note: { it: 'Diploma in grafica pubblicitaria.', en: 'Diploma in advertising graphic design.' } },
];
