#!/usr/bin/env node
// Copy and style lint for the built site.
//
// Scans the built HTML in dist/ (run `npm run build` first) and prints a count
// plus up to five examples for each pattern the Nov 2026 copy cleanup removed:
//
//   real / really            intensifier use (real estate / real time / real-world are skipped)
//   quiet / quietly          overused filler word
//   short sentences          1-2 word sentences inside <p> paragraphs
//   arrows in links          → › » ➜ ➔ ⟶ ↗ in <a> or <button> text
//   dots in main content     · or • between words inside <main>
//   eyebrow elements         class names like eyebrow, kicker, overline
//   border-left accents      colored border-left rules in built CSS
//
// No dependencies. Exits 0 by default so it never blocks a build; pass
// --strict to exit 1 when anything is found. It is not wired into the build.
//
//   npm run lint:copy
//   npm run lint:copy -- --strict
//   node scripts/copy-lint.mjs --dir dist

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const dirArg = args.indexOf('--dir');
const root = dirArg >= 0 ? args[dirArg + 1] : 'dist';

if (!existsSync(root)) {
  console.error(`copy-lint: ${root}/ not found. Run the build first.`);
  process.exit(strict ? 1 : 0);
}

function walk(dir, ext, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, ext, out);
    else if (ext.some((e) => name.endsWith(e))) out.push(p);
  }
  return out;
}

const ENT = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ', '&middot;': '·', '&rarr;': '→', '&raquo;': '»', '&rsaquo;': '›' };
const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&[a-z]+;/gi, (e) => ENT[e.toLowerCase()] ?? e);
const strip = (html) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const dropBlocks = (html) =>
  html.replace(/<(script|style|noscript|svg|template)\b[\s\S]*?<\/\1>/gi, ' ');

const checks = {
  'real / really': [],
  'quiet / quietly': [],
  '1-2 word sentences in paragraphs': [],
  'arrows in link/button text': [],
  'dots between words in main': [],
  'eyebrow-class elements': [],
  'border-left accent rules (CSS)': [],
};
const add = (key, file, sample) => checks[key].push({ file: relative(root, file), sample });

// Abbreviations that end in a period but do not end a sentence.
const ABBR = /(?:\b(?:St|Mt|Dr|Ave|Rd|Wis|Admin|Stat|Code|ch|Inc|Co|Jr|Sr|vs|U\.S|[A-Z])\.)$/;

const htmlFiles = walk(root, ['.html']).filter((f) => !/\b404\b/.test(f));
for (const file of htmlFiles) {
  const raw = readFileSync(file, 'utf8');
  const html = dropBlocks(raw);
  const bodyMatch = html.match(/<body[\s\S]*<\/body>/i);
  const body = bodyMatch ? bodyMatch[0] : html;
  const text = strip(body);

  for (const m of text.matchAll(/.{0,40}\breal(ly)?\b(?![- ](estate|time|world)).{0,30}/gi)) add('real / really', file, m[0]);
  for (const m of text.matchAll(/.{0,40}\bquiet(ly)?\b.{0,30}/gi)) add('quiet / quietly', file, m[0]);

  const mainMatch = body.match(/<main[\s\S]*<\/main>/i);
  const main = mainMatch ? mainMatch[0] : body;

  for (const p of main.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)) {
    const t = strip(p[1]);
    // Split into sentences, then re-join pieces split after an abbreviation.
    const parts = t.split(/(?<=[.!?])\s+/);
    const sents = [];
    for (const part of parts) {
      if (sents.length && ABBR.test(sents[sents.length - 1])) sents[sents.length - 1] += ' ' + part;
      else sents.push(part);
    }
    sents.forEach((s, i) => {
      if (i === 0) return;
      const words = s.match(/[A-Za-z0-9'’-]+/g) || [];
      if (words.length >= 1 && words.length <= 2 && s.endsWith('.') && !/\d/.test(s) && s.length < 30) {
        add('1-2 word sentences in paragraphs', file, `${sents[i - 1].slice(-50)} | ${s}`);
      }
    });
  }

  for (const a of body.matchAll(/<(a|button)\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
    const t = strip(a[2]);
    if (/[→›»➜➔⟶↗]/.test(t)) add('arrows in link/button text', file, t);
  }

  const mainText = strip(main);
  for (const m of mainText.matchAll(/.{0,30}\S\s*[·•]\s*\S.{0,30}/g)) add('dots between words in main', file, m[0]);

  for (const m of body.matchAll(/<(\w+)[^>]*class="([^"]*\b(?:eyebrow|kicker|overline)[^"]*)"[^>]*>([\s\S]*?)<\/\1>/gi)) {
    add('eyebrow-class elements', file, `.${m[2]}: ${strip(m[3]).slice(0, 60)}`);
  }

  for (const s of raw.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) cssScan(s[1], file);
}

function cssScan(css, file) {
  for (const m of css.matchAll(/([^{}]+)\{([^}]*border-left\s*:[^;}]*[^}]*)\}/gi)) {
    const decl = m[2].match(/border-left\s*:\s*([^;}]+)/i)[1].trim();
    // Only flag visible accent bars: a width above 1px with a color.
    const w = decl.match(/(\d*\.?\d+)px/);
    if (/^(0|none)\b/.test(decl) || (w && parseFloat(w[1]) <= 1)) continue;
    add('border-left accent rules (CSS)', file, `${m[1].trim().slice(-60)} { border-left: ${decl} }`);
  }
}
for (const file of walk(root, ['.css'])) cssScan(readFileSync(file, 'utf8'), file);

let total = 0;
console.log(`copy-lint: ${htmlFiles.length} HTML pages in ${root}/\n`);
for (const [name, hits] of Object.entries(checks)) {
  total += hits.length;
  const pages = new Set(hits.map((h) => h.file)).size;
  console.log(`${name}: ${hits.length}${hits.length ? ` on ${pages} file(s)` : ''}`);
  for (const h of hits.slice(0, 5)) console.log(`    ${h.file}: ${h.sample}`);
}
console.log(`\nTotal findings: ${total}`);
process.exit(strict && total > 0 ? 1 : 0);
