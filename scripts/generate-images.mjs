// Genera public/og.png (1200×630) e public/apple-touch-icon.png (180×180).
// Da rieseguire solo se cambiano nome, ruolo o palette: `node scripts/generate-images.mjs`.
// Usa i font di sistema (Georgia / Consolas o equivalenti) tramite librsvg.
import sharp from 'sharp';

const ink = '#17181c';
const paper = '#f5f2eb';
const accent = '#b3340d';
const muted = '#4a4d55';

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${paper}"/>
  <rect x="0" y="0" width="1200" height="10" fill="${accent}"/>
  <text x="80" y="120" font-family="Consolas, 'DejaVu Sans Mono', monospace" font-size="26" fill="${accent}">SQL&gt; SELECT * FROM profilo;</text>
  <text x="76" y="300" font-family="Georgia, 'DejaVu Serif', serif" font-size="128" fill="${ink}" letter-spacing="-4">Kevin Milli</text>
  <text x="80" y="380" font-family="Georgia, 'DejaVu Serif', serif" font-style="italic" font-size="52" fill="${accent}">Data Engineer</text>
  <text x="80" y="440" font-family="Consolas, 'DejaVu Sans Mono', monospace" font-size="28" fill="${muted}">Oracle SQL · PL/SQL · Bash · Python</text>
  <line x1="80" y1="520" x2="1120" y2="520" stroke="${ink}" stroke-width="2"/>
  <text x="80" y="565" font-family="Consolas, 'DejaVu Sans Mono', monospace" font-size="24" fill="${muted}">kevin-milli.github.io/KParadox.Dev</text>
  <text x="1120" y="565" text-anchor="end" font-family="Consolas, 'DejaVu Sans Mono', monospace" font-size="24" fill="${muted}">1 riga selezionata.</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${ink}"/>
  <text x="90" y="116" text-anchor="middle" font-family="Consolas, 'DejaVu Sans Mono', monospace" font-weight="bold" font-size="78" fill="${paper}">km</text>
</svg>`;

await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og.png');
await sharp(Buffer.from(icon)).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');
console.log('Generati public/og.png e public/apple-touch-icon.png');
