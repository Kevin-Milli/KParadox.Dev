// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Il sito è pubblicato su GitHub Pages come "project site":
// https://kevin-milli.github.io/KParadox.Dev/
export default defineConfig({
  site: 'https://kevin-milli.github.io',
  base: '/KParadox.Dev',
  trailingSlash: 'ignore',
  // CSS inline (≈6 KB gzip): nessuna richiesta bloccante prima del primo rendering.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'it', locales: { it: 'it-IT', en: 'en-GB' } },
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
