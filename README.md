# KParadox.Dev

Portfolio personale di **Kevin Milli** — Data Engineer (Oracle SQL & PL/SQL, Python).

Sito: <https://kevin-milli.github.io/KParadox.Dev/> (italiano) · <https://kevin-milli.github.io/KParadox.Dev/en/> (inglese)

Sito statico costruito con [Astro](https://astro.build) e TypeScript, senza
framework JavaScript a runtime, pubblicato su GitHub Pages tramite GitHub Actions.

## Comandi

Richiede Node.js ≥ 22.23.4 (CI: Node 24).

| Comando | Cosa fa |
|---|---|
| `npm ci` | Installa le dipendenze bloccate in `package-lock.json` |
| `npm run dev` | Server di sviluppo su `http://localhost:4321/KParadox.Dev/` |
| `npm run check` | Type check di file `.astro` e `.ts` |
| `npm run build` | Build di produzione in `dist/` |
| `npm run preview` | Serve la build di `dist/` in locale |
| `npm run check:links` | Verifica link interni, ancore e id duplicati in `dist/` (aggiungere `-- --external` per i link esterni) |
| `npm test` | `check` + `build` + `check:links` (lo stesso controllo eseguito in CI) |

## Aggiornare i contenuti

Tutti i contenuti stanno in `src/data/`, separati dai componenti. In genere
non serve toccare altro.

| Cosa | File |
|---|---|
| Nome, ruolo, frase di presentazione, record della hero, contatti, CV | `src/data/profile.ts` (`profile`) |
| Sezione "Ora" e relativa data | `src/data/profile.ts` (`now`) |
| Esperienze e incarichi | `src/data/experience.ts` |
| Progetti in evidenza e altri progetti | `src/data/projects.ts` |
| Stack tecnologico | `src/data/stack.ts` |
| Formazione e certificazioni | `src/data/education.ts` |
| Testi d'interfaccia (titoli, pulsanti, meta) | `src/i18n/ui.ts` |

Ogni testo visibile ha la forma `{ it: '…', en: '…' }`: il type check segnala
le traduzioni mancanti. Dettagli, esempi e scelte progettuali sono in
[`docs/portfolio-rebuild.md`](docs/portfolio-rebuild.md).

### Esempio: aggiungere una tecnologia

```ts
// src/data/stack.ts
{ name: 'dbt', category: 'data', context: 'learning' },
// quando la usi in un incarico: context: 'professional', evidence: ['exp:<id-incarico>']
```

### Pubblicare il CV

Copiare il PDF in `public/cv/` e impostare in `src/data/profile.ts`
`cv: { it: 'cv/nome-file.pdf' }` (opzionale anche `en`). Il pulsante
"Scarica il CV" compare solo quando il campo è valorizzato.

## Struttura

```
src/
  data/        contenuti tipizzati (unica fonte)
  i18n/        testi d'interfaccia e utility (date, lingue, evidenze)
  components/  sezioni della pagina
  layouts/     <head>, metadati SEO/Open Graph, font
  pages/       / (it), /en/, 404
  styles/      token di design e stili globali
public/        favicon, immagine Open Graph, robots.txt, redirect indexIT.html
scripts/       verifica link, generazione immagini OG/icone
docs/          documentazione del rebuild
```

## Deploy

Il workflow `.github/workflows/deploy.yml` esegue `npm test` su ogni push e
pull request e pubblica `dist/` su GitHub Pages dai push su `master`.

Una tantum, prima del primo deploy da `master`: **Settings → Pages → Build and
deployment → Source: GitHub Actions**.

## Ringraziamenti

#### Graphic Department

- Sara Infantino: I thank my dear friend Sara for helping me throughout the project's development. Her creative ability was truly invaluable, and her graphic skills allowed me to maintain consistent layout. The choice of an appropriate font and the countless contributions to graphic details are beyond my counting.

- Antonella Unida Antonietta: I express gratitude to my mother for assisting me with the graphics and being the first tester.

#### Testing Department

- Dario Del Ministro: I extend my thanks to my dear friend Dario for helping me during the initial website publications. He managed to identify a significant number of issues.

- Marco Bucchianeri: I appreciate my dear friend Marco for contributing to the application testing phase. He discovered a bug that kept me glued to the computer for at least 8 hours.
