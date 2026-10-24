// Verifica la build in dist/:
// - ogni link/asset interno punta a un file esistente;
// - ogni ancora (#id) esiste nella pagina di destinazione;
// - nessuna pagina contiene id duplicati.
// Con `--external` controlla anche i link esterni (richiede rete).
//
// Uso: npm run build && npm run check:links [-- --external]

import { readdir, readFile, stat } from 'node:fs/promises';
import { join, posix, relative, sep } from 'node:path';

const DIST = 'dist';
const BASE = '/KParadox.Dev';
const checkExternal = process.argv.includes('--external');

/** @param {string} dir @returns {Promise<string[]>} */
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((e) => (e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)])));
  return files.flat();
}

const exists = (p) => stat(p).then(() => true, () => false);

/** Da URL del sito a file in dist/ */
function toFile(pathname) {
  let p = decodeURI(pathname);
  if (!p.startsWith(BASE)) return null;
  p = p.slice(BASE.length) || '/';
  if (p.endsWith('/')) p += 'index.html';
  return join(DIST, ...p.split('/').filter(Boolean));
}

const htmlFiles = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const idsByFile = new Map();
const errors = [];
const external = new Set();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) errors.push(`${file}: id duplicato "${id}"`);
    seen.add(id);
  }
  idsByFile.set(file, seen);
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const pageUrl = '/' + [BASE.slice(1), ...relative(DIST, file).split(sep)].join('/');
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g), ...html.matchAll(/\ssrcset="([^"]+)"/g)]
    .flatMap((m) => (m[0].includes('srcset') ? m[1].split(',').map((s) => s.trim().split(/\s+/)[0]) : [m[1]]));

  for (const ref of refs) {
    if (!ref || ref.startsWith('mailto:') || ref.startsWith('data:')) continue;
    if (/^https?:\/\//.test(ref)) {
      if (ref.startsWith('https://kevin-milli.github.io' + BASE)) {
        // URL assoluto verso il sito stesso (canonical, og:image…): va verificato come interno.
        const target = toFile(new URL(ref).pathname);
        if (target && !(await exists(target))) errors.push(`${file}: URL assoluto non trovato ${ref}`);
      } else external.add(ref);
      continue;
    }
    const url = new URL(ref, 'https://x' + pageUrl);
    const target = ref.startsWith('#') ? file : toFile(url.pathname);
    if (!target) {
      errors.push(`${file}: link fuori dal base path ${ref}`);
      continue;
    }
    if (!(await exists(target))) {
      errors.push(`${file}: file non trovato ${ref}`);
      continue;
    }
    if (url.hash && url.hash !== '#') {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!idsByFile.get(target)?.has(id)) errors.push(`${file}: ancora mancante ${ref}`);
    }
  }
}

if (checkExternal) {
  for (const url of [...external].sort()) {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow', headers: { 'user-agent': 'Mozilla/5.0 link-check' } });
      // LinkedIn risponde 999 ai client automatici: non è un link rotto.
      if (res.status === 999) console.warn(`  avviso ${res.status} ${url} (blocco anti-bot)`);
      else if (!res.ok) errors.push(`link esterno ${res.status}: ${url}`);
      else console.log(`  ok ${res.status} ${url}`);
    } catch (err) {
      errors.push(`link esterno irraggiungibile: ${url} (${err.message})`);
    }
  }
}

console.log(`Pagine controllate: ${htmlFiles.length}. Link esterni trovati: ${external.size}${checkExternal ? ' (verificati)' : ''}.`);
if (errors.length) {
  console.error(`\n${errors.length} problemi:\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log('Nessun link interno rotto, nessuna ancora mancante, nessun id duplicato.');
