#!/usr/bin/env node
/**
 * Downloads the FitekIN OpenAPI documents into tools/openapi-to-skill/snapshots/.
 *
 *   node tools/openapi-to-skill/fetch.mjs https://<fitekin-host>
 *
 * Then run generate.mjs to rebuild skills/fitekin-api/references/.
 * The Swagger endpoints are only exposed on non-production environments, so fetch from a
 * dev/test host that runs the release you want to document.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const base = (process.argv[2] || '').replace(/\/$/, '');
if (!base) {
  console.error('usage: node fetch.mjs https://<fitekin-host>');
  process.exit(1);
}

const here = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(here, 'snapshots');
fs.mkdirSync(out, { recursive: true });

const DOCS = {
  'loginapi-v1.json': '/LoginApi/swagger/v1/swagger.json',
  'webapi-v1.json': '/webapi/swagger/v1/swagger.json',
  'dataexchange-import.json': '/DataExchangeWebApiCore/openapi/import.json',
  'dataexchange-export.json': '/DataExchangeWebApiCore/openapi/export.json',
  'dataexchange-salesinvoice.json': '/DataExchangeWebApiCore/openapi/salesinvoice.json',
};

for (const [file, route] of Object.entries(DOCS)) {
  const url = base + route;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`${res.status} ${url}`);
    process.exitCode = 1;
    continue;
  }
  const json = await res.json();
  fs.writeFileSync(path.join(out, file), JSON.stringify(json, null, 1));
  console.log(`saved ${file} (${Object.keys(json.paths || {}).length} paths) from ${url}`);
}
