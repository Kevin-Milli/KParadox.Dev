import type { FeaturedProject, MinorProject } from './types';

/** Progetti pubblici in evidenza, in formato case study. */
export const featuredProjects = [
  {
    id: 'resource-allocation',
    title: { it: 'Allocazione delle risorse in PL/SQL', en: 'Resource allocation in PL/SQL' },
    status: { it: 'Progetto di studio · 2024', en: 'Study project · 2024' },
    context: {
      it: 'Un caso tipico dei gestionali: assegnare le persone ai progetti in base alle competenze richieste, tenendo conto di chi è già allocato.',
      en: 'A classic business-system problem: assigning people to projects based on the required skills, taking existing allocations into account.',
    },
    goal: {
      it: 'Una procedura che assegni le risorse in modo automatico e ripetibile, gestisca i progetti già avviati e registri ogni errore.',
      en: 'A procedure that assigns resources automatically and repeatably, handles projects already under way and logs every error.',
    },
    contribution: {
      it: 'Progetto individuale: modello dati, script di installazione, logica PL/SQL e documentazione.',
      en: 'Solo project: data model, setup scripts, PL/SQL logic and documentation.',
    },
    decisions: {
      it: [
        'Procedure ALLOCATE e DEALLOCATE separate, con verifica dell’esistenza del progetto ed errori espliciti.',
        'Cursori ordinati per numero di competenze e data di assunzione, per scegliere le risorse in modo deterministico.',
        'Package PKG_UTILS con una procedura di log su tabella dedicata, riusata in ogni passaggio.',
        'Script numerati (utente e grant → DDL → DML → package → procedure) per un’installazione ripetibile.',
      ],
      en: [
        'Separate ALLOCATE and DEALLOCATE procedures, with a project-existence check and explicit errors.',
        'Cursors ordered by skill count and hire date, so resources are chosen deterministically.',
        'A PKG_UTILS package with a logging procedure writing to a dedicated table, reused at every step.',
        'Numbered scripts (user and grants → DDL → DML → package → procedures) for a repeatable setup.',
      ],
    },
    outcome: {
      it: 'Codice e README pubblici: lo schema e le procedure si installano eseguendo gli script in ordine.',
      en: 'Public code and README: the schema and procedures install by running the scripts in order.',
    },
    flow: {
      it: ['progetti · dipendenti · competenze', 'ALLOCATE / DEALLOCATE', 'assegnazioni', 'log errori'],
      en: ['projects · employees · skills', 'ALLOCATE / DEALLOCATE', 'allocations', 'error log'],
    },
    stack: ['Oracle SQL', 'PL/SQL'],
    repo: 'https://github.com/Kevin-Milli/resource-allocation-plsql',
  },
  {
    id: 'data-validation',
    title: { it: 'Validazione di dati anagrafici in PL/SQL', en: 'Personal-data validation in PL/SQL' },
    status: { it: 'Progetto di studio · 2024', en: 'Study project · 2024' },
    context: {
      it: 'I dati anagrafici in ingresso contengono spesso codici fiscali, email, date e numeri di telefono non validi, che bloccano i processi a valle.',
      en: 'Incoming personal data often contains invalid tax codes, emails, dates and phone numbers that break downstream processes.',
    },
    goal: {
      it: 'Separare i record validi da quelli da scartare, conservando per ciascuno scarto il motivo.',
      en: 'Split valid records from rejected ones, keeping the reason for every rejection.',
    },
    contribution: {
      it: 'Progetto individuale: regole di validazione, struttura delle tabelle, dati di test e documentazione.',
      en: 'Solo project: validation rules, table design, test data and documentation.',
    },
    decisions: {
      it: [
        'Package PKG_CK con una funzione per regola: codice fiscale, nome e cognome, email, data di nascita, telefono.',
        'Tabella degli scarti con una colonna di riepilogo degli errori, così ogni record resta analizzabile.',
        'Log degli eventi con sequence dedicata, per ricostruire ogni esecuzione.',
        'Dati di test che includono di proposito casi non validi.',
      ],
      en: [
        'A PKG_CK package with one function per rule: tax code, first and last name, email, date of birth, phone.',
        'A reject table with an error-summary column, so every record stays analysable.',
        'Event log with its own sequence, to reconstruct every run.',
        'Test data that deliberately includes invalid cases.',
      ],
    },
    outcome: {
      it: 'Script e README pubblici, con dati di esempio validi e non validi.',
      en: 'Public scripts and README, with valid and invalid sample data.',
    },
    flow: {
      it: ['dati grezzi', 'PKG_CK (regole)', 'record scartati + motivo', 'log eventi'],
      en: ['raw data', 'PKG_CK (rules)', 'rejected records + reason', 'event log'],
    },
    stack: ['Oracle SQL', 'PL/SQL'],
    repo: 'https://github.com/Kevin-Milli/convalida-campi-plsql',
  },
  {
    id: 'bash-oracle',
    title: { it: 'Automazione con Bash e Oracle', en: 'Automation with Bash and Oracle' },
    status: { it: 'Esercitazioni · 2024', en: 'Exercises · 2024' },
    context: {
      it: 'Archiviare file, smistare CSV e caricare dati a mano è lento e soggetto a errori.',
      en: 'Archiving files, sorting CSVs and loading data by hand is slow and error-prone.',
    },
    goal: {
      it: 'Tre script Bash che automatizzano questi passaggi, fino al caricamento in un database Oracle.',
      en: 'Three Bash scripts that automate those steps, all the way to loading an Oracle database.',
    },
    contribution: {
      it: 'Progetto individuale: script, tracce degli esercizi e documentazione.',
      en: 'Solo project: scripts, exercise briefs and documentation.',
    },
    decisions: {
      it: [
        'Verifica e creazione delle cartelle di input e output prima di ogni elaborazione.',
        'Smistamento dei CSV in sottocartelle in base alla data letta nella prima riga, con rinomina tramite timestamp.',
        'SQL*Plus richiamato dallo script per creare utente e tabella e popolarla da CSV, saltando l’intestazione.',
      ],
      en: [
        'Input and output folders are checked and created before every run.',
        'CSVs are sorted into sub-folders by the date read from their first line, then renamed with a timestamp.',
        'SQL*Plus is called from the script to create a user and a table and load it from a CSV, skipping the header.',
      ],
    },
    outcome: {
      it: 'Tre esercizi completi di traccia, script e README.',
      en: 'Three exercises, each with its brief, script and README.',
    },
    flow: {
      it: ['file CSV', 'script Bash', 'SQL*Plus', 'tabella Oracle'],
      en: ['CSV files', 'Bash script', 'SQL*Plus', 'Oracle table'],
    },
    stack: ['Bash', 'SQL*Plus', 'Oracle SQL'],
    repo: 'https://github.com/Kevin-Milli/shell-db-practice',
  },
] as const satisfies readonly FeaturedProject[];

/** Altri progetti pubblici, presentati in forma compatta. */
export const minorProjects = [
  {
    id: 'portfolio-simulation',
    title: { it: 'Google Finance: scraping e simulazione di portafoglio', en: 'Google Finance scraping and portfolio simulation' },
    year: 2024,
    summary: {
      it: 'Estrazione delle quotazioni da Google Finance, strutturazione dei dati con dataclass e simulazione del valore di un portafoglio.',
      en: 'Scrapes quotes from Google Finance, structures the data with dataclasses and simulates the value of a portfolio.',
    },
    stack: ['Python', 'requests', 'BeautifulSoup'],
    repo: 'https://github.com/Kevin-Milli/GF_Scraping_Portfolio_Simulation',
  },
  {
    id: 'credit-risk',
    title: { it: 'Previsione del rischio di credito', en: 'Credit risk prediction' },
    year: 2024,
    summary: {
      it: 'Analisi esplorativa di un dataset pubblico Kaggle e confronto tra modelli ensemble (Random Forest, Gradient Boosting, AdaBoost, XGBoost). Il notebook riporta un’accuratezza del 93% sul set di test.',
      en: 'Exploratory analysis of a public Kaggle dataset and comparison of ensemble models (Random Forest, Gradient Boosting, AdaBoost, XGBoost). The notebook reports 93% accuracy on the test set.',
    },
    stack: ['Python', 'pandas', 'scikit-learn', 'XGBoost'],
    repo: 'https://github.com/Kevin-Milli/Credit_Risk_Prediction',
  },
  {
    id: 'function-creator',
    title: { it: 'Function Creator', en: 'Function Creator' },
    year: 2024,
    summary: {
      it: 'Classe Python orientata agli oggetti che genera funzioni matematiche combinando polinomi e funzioni trascendenti, ne calcola le derivate e le traccia.',
      en: 'An object-oriented Python class that generates mathematical functions from polynomials and transcendental functions, differentiates them and plots them.',
    },
    stack: ['Python', 'SymPy', 'NumPy'],
    repo: 'https://github.com/Kevin-Milli/Function_Creator',
  },
] as const satisfies readonly MinorProject[];

/** Archivio completo dei repository (notebook di studio 2023–2024 inclusi). */
export const projectArchiveUrl = 'https://github.com/Kevin-Milli?tab=repositories';
