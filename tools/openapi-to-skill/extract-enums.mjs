#!/usr/bin/env node
/**
 * Extracts numeric enum values from the FitekIN backend C# sources.
 *
 *   node tools/openapi-to-skill/extract-enums.mjs <path-to-fitekin-backend-repo>
 *
 * Writes tools/openapi-to-skill/snapshots/enum-values.json: { EnumName: { Member: number } }.
 * generate.mjs merges these numbers into enums.md and models/<Enum>.md, because the OpenAPI
 * documents list enum members by name only while several endpoints (search restrictions,
 * status filters) expect the numeric value.
 *
 * Only enums whose name appears in one of the OpenAPI snapshots are kept.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.argv[2];
if (!root || !fs.existsSync(root)) {
  console.error('usage: node extract-enums.mjs <path-to-fitekin-backend-repo>');
  process.exit(1);
}

const here = path.dirname(fileURLToPath(import.meta.url));
const snapshotsDir = path.join(here, 'snapshots');

// Names present in any snapshot's schemas with an `enum` array.
const wanted = new Set();
for (const f of fs.readdirSync(snapshotsDir)) {
  if (!f.endsWith('.json') || f === 'enum-values.json') continue;
  const doc = JSON.parse(fs.readFileSync(path.join(snapshotsDir, f), 'utf8'));
  const schemas = (doc.components && doc.components.schemas) || {};
  for (const [n, s] of Object.entries(schemas)) if (s.enum) wanted.add(n);
}

const SKIP_DIRS = new Set(['bin', 'obj', 'node_modules', '.git', '.claude', 'graphify-out']);
function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!SKIP_DIRS.has(e.name)) yield* walk(path.join(dir, e.name));
    } else if (e.name.endsWith('.cs')) {
      yield path.join(dir, e.name);
    }
  }
}

const enumRe = /\benum\s+([A-Za-z_][A-Za-z0-9_]*)\s*(?::\s*[a-z]+)?\s*\{([^}]*)\}/g;
const result = {};
const seenIn = {};

for (const file of walk(root)) {
  const src = fs.readFileSync(file, 'utf8');
  if (!src.includes('enum ')) continue;
  for (const m of src.matchAll(enumRe)) {
    const name = m[1];
    if (!wanted.has(name)) continue;
    const body = m[2].replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '').replace(/\[[^\]]*\]/g, '');
    const members = {};
    let next = 0;
    for (const raw of body.split(',')) {
      const part = raw.trim();
      if (!part) continue;
      const mm = part.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*(?:=\s*(-?\d+|0x[0-9A-Fa-f]+))?$/);
      if (!mm) continue; // computed member (e.g. A | B): skip
      const value = mm[2] !== undefined ? Number(mm[2]) : next;
      members[mm[1]] = value;
      next = value + 1;
    }
    if (!Object.keys(members).length) continue;
    if (result[name] && JSON.stringify(result[name]) !== JSON.stringify(members)) {
      console.warn(`conflict for enum ${name}: ${seenIn[name]} vs ${path.relative(root, file)} (keeping first)`);
      continue;
    }
    result[name] = members;
    seenIn[name] = path.relative(root, file);
  }
}

const missing = [...wanted].filter((n) => !result[n]);
fs.writeFileSync(path.join(snapshotsDir, 'enum-values.json'), JSON.stringify(result, null, 1));
console.log(`enum-values.json: ${Object.keys(result).length}/${wanted.size} enums resolved`);
if (missing.length) console.log(`unresolved: ${missing.join(', ')}`);
