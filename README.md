# KParadox.Dev

Source code of my personal website — **Kevin Milli, Data Engineer** (Oracle SQL & PL/SQL, Python).

🔗 **[kevin-milli.github.io/KParadox.Dev](https://kevin-milli.github.io/KParadox.Dev/)** · available in Italian and [English](https://kevin-milli.github.io/KParadox.Dev/en/)

## About the site

A single-page portfolio covering my current work, experience, selected projects, tech stack and background.

The design takes its cue from my day-to-day work with databases: the profile opens as the result of a SQL query, sections read like tables, and technical metadata is set in a monospaced face.

Things I cared about:

- **Honest stack.** Technologies are grouped by where I've used them (work, personal projects, learning) and link to the experience or project behind them. No skill bars, no percentages.
- **Content separated from presentation.** All text lives in typed data files, so updating the site rarely means touching a component.
- **Light by default.** Static HTML, no client-side framework, self-hosted fonts and about 2 KB of inline JavaScript. Everything still works with JavaScript disabled.
- **Accessible.** Semantic HTML, keyboard navigation, visible focus states, light and dark themes, and support for reduced motion.

## Built with

[Astro](https://astro.build) · TypeScript · plain CSS · GitHub Actions · GitHub Pages

## Run it locally

Requires Node.js 22.23.4 or later.

```bash
npm ci
npm run dev    # http://localhost:4321/KParadox.Dev/
npm test       # type check, production build, internal link check
```

## Project structure

```
src/
  data/        site content (profile, experience, projects, stack, education)
  i18n/        interface strings and helpers
  components/  page sections
  layouts/     page shell, metadata, fonts
  pages/       Italian (/) and English (/en/) home pages, 404
  styles/      design tokens and global styles
public/        static files (icons, Open Graph image, robots.txt)
scripts/       link checker, social image generator
```

- Dario Del Ministro: I extend my thanks to my dear friend Dario for helping me during the initial website publications. He managed to identify a significant number of issues.

- Marco Bucchianeri: I appreciate my dear friend Marco for contributing to the application testing phase. He discovered a bug that kept me glued to the computer for at least 8 hours.
