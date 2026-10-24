import type { Experience } from './types';

/**
 * Esperienze professionali, dalla più recente.
 * Fonte: CV del 24/08/2026 + incarico iniziato a ottobre 2026.
 * Le discrepanze con altre fonti sono elencate in docs/portfolio-rebuild.md.
 */
export const experience = [
  {
    id: 'advancia',
    organization: 'Advancia Technology',
    role: {
      it: 'Consulente — Data Engineer / IT Programmer',
      en: 'Consultant — Data Engineer / IT Programmer',
    },
    location: { it: 'Da remoto', en: 'Remote' },
    start: '2024-11',
    end: null,
    summary: {
      it: 'Società di consulenza IT. Gli incarichi qui sotto sono svolti come consulente Advancia presso i clienti indicati.',
      en: 'IT consulting company. The assignments below were carried out as an Advancia consultant for the clients shown.',
    },
    assignments: [
      {
        id: 'credito',
        context: {
          it: 'Consorzio del settore tutela del credito',
          en: 'Credit-protection consortium',
        },
        role: { it: 'Data Engineer', en: 'Data Engineer' },
        start: '2026-10',
        end: null,
        highlights: {
          it: ['Sviluppo su Oracle Database in un progetto che comprende Oracle Machine Learning e Oracle AI Database 26ai.'],
          en: ['Oracle Database development on a project that includes Oracle Machine Learning and Oracle AI Database 26ai.'],
        },
        stack: ['Oracle SQL', 'PL/SQL', 'Oracle Machine Learning', 'Oracle AI Database 26ai'],
      },
      {
        id: 'rd',
        context: {
          it: 'R&D interno — Python e AI Engineering',
          en: 'Internal R&D — Python and AI Engineering',
        },
        role: { it: 'Data Engineer / Python Developer', en: 'Data Engineer / Python Developer' },
        start: '2026-03',
        end: '2026-09',
        highlights: {
          it: [
            'Progetto RAG interno a supporto delle decisioni di allocazione del personale: integrazione dell’LLM Gemini, ingestione di documenti PDF con chunking personalizzato e tool calling.',
            'Backend in Python con FastAPI, Pydantic, LangChain, Redis e ChromaDB; container Docker e deploy su Google Cloud Run.',
            'In parallelo, manutenzione di componenti .NET (C#), script Bash e query Oracle SQL/PL-SQL.',
          ],
          en: [
            'Internal RAG project supporting staffing allocation decisions: Gemini LLM integration, PDF ingestion with custom chunking, and tool calling.',
            'Python backend with FastAPI, Pydantic, LangChain, Redis and ChromaDB; Docker containers deployed to Google Cloud Run.',
            'Alongside it, maintenance of .NET (C#) components, Bash scripts and Oracle SQL/PL-SQL queries.',
          ],
        },
        stack: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Redis', 'Docker', 'Cloud Run', 'C#'],
      },
      {
        id: 'verti',
        context: { it: 'Verti Assicurazioni', en: 'Verti Assicurazioni' },
        role: { it: 'Data Engineer / Python Developer', en: 'Data Engineer / Python Developer' },
        start: '2025-10',
        end: '2026-03',
        highlights: {
          it: [
            'Analisi e modellazione: normalizzazione di JSON complessi in un modello relazionale unificato di 26 tabelle e circa 450 campi.',
            'Tool Python per automatizzare il mapping tra schemi e la validazione incrociata tra JSON, diagrammi Mermaid e DDL Oracle.',
            'DDL e procedure PL/SQL per il caricamento massivo da Amazon S3 verso aree di staging, con elaborazioni parallele (Parallel DML).',
          ],
          en: [
            'Analysis and modelling: normalising complex JSON into a unified relational model of 26 tables and about 450 fields.',
            'Python tools to automate schema-to-schema mapping and cross-validation between JSON, Mermaid diagrams and Oracle DDL.',
            'DDL and PL/SQL procedures for bulk loading from Amazon S3 into staging areas, with parallel processing (Parallel DML).',
          ],
        },
        stack: ['Oracle 21c', 'PL/SQL', 'Python', 'pandas', 'AWS S3'],
      },
      {
        id: 'intesa',
        context: { it: 'Intesa Sanpaolo', en: 'Intesa Sanpaolo' },
        role: { it: 'Data Engineer / IT Programmer', en: 'Data Engineer / IT Programmer' },
        start: '2024-11',
        end: '2025-10',
        highlights: {
          it: [
            'Schemi Oracle, tabelle di staging e procedure PL/SQL per integrare e trasformare flussi dati aziendali.',
            'Parsing di payload JSON da code Kafka (circa un milione di messaggi al giorno), caricamenti massivi con SQL*Loader, orchestrazione con Bash, TWS e cron.',
            'Tuning di procedure e query su batch da 100.000 a un milione di record; sviluppo della procedura principale di smistamento dei messaggi Kafka, rilasciata in produzione.',
          ],
          en: [
            'Oracle schemas, staging tables and PL/SQL procedures to integrate and transform enterprise data flows.',
            'Parsing JSON payloads from Kafka queues (about one million messages a day), bulk loads with SQL*Loader, orchestration with Bash, TWS and cron.',
            'Tuning procedures and queries on batches of 100,000 to one million records; built the core procedure that routes incoming Kafka messages, released to production.',
          ],
        },
        stack: ['Oracle 19c', 'PL/SQL', 'Bash', 'Kafka', 'SQL*Loader', 'TWS'],
      },
    ],
  },
  {
    id: 'white-lion',
    organization: 'White Lion',
    role: { it: 'Team Supervisor', en: 'Team Supervisor' },
    location: { it: 'Londra, Regno Unito', en: 'London, United Kingdom' },
    start: '2019-09',
    end: '2021-12',
    highlights: {
      it: ['Coordinamento di un team operativo di sei persone e supporto alle decisioni logistiche e organizzative della sede, in un contesto internazionale.'],
      en: ['Led an operations team of six and supported the site’s logistics and organisational decisions, in an international environment.'],
    },
  },
] as const satisfies readonly Experience[];
