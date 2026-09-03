#!/usr/bin/env node
/**
 * Generates the FitekIN API reference files for the `fitekin-api` skill from OpenAPI snapshots.
 *
 *   node tools/openapi-to-skill/generate.mjs
 *
 * Input:  tools/openapi-to-skill/snapshots/*.json   (see fetch.mjs)
 * Output: skills/fitekin-api/references/<api>/...   (fully regenerated; do not edit by hand)
 *
 * Per API document it writes:
 *   INDEX.md                 one line per endpoint (method, path, request body model, response model)
 *   endpoints/<Tag>.md       endpoints of one controller/tag with parameters and model links
 *   models/<Model>.md        one file per schema: property table (type, format, nullable, max length, enum)
 *   enums.md                 every enum schema with its allowed values
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..');
const snapshotsDir = path.join(here, 'snapshots');
const referencesRoot = path.join(repoRoot, 'skills', 'fitekin-api', 'references');

/** Snapshot file -> output folder + human title + notes shown at the top of INDEX.md. */
const DOCS = [
  {
    file: 'loginapi-v1.json',
    dir: 'loginapi',
    title: 'FitekIN Login API',
    basePath: '{BASE_URL}/LoginApi',
    auth: 'Anonymous. Returns the session token used by the Web API (see ../auth.md).',
  },
  {
    file: 'webapi-v1.json',
    dir: 'webapi',
    title: 'FitekIN Web API',
    basePath: '{BASE_URL}/webapi',
    auth: 'Header `Authorization-Token: <session token>` (see ../auth.md).',
  },
  {
    file: 'dataexchange-import.json',
    dir: 'dataexchange-import',
    title: 'FitekIN DataExchange API — Import',
    basePath: '{BASE_URL}/DataExchangeWebApiCore/api/v3',
    auth: 'Integrator credentials (see ../data-exchange.md). Not the Web API session token.',
  },
  {
    file: 'dataexchange-export.json',
    dir: 'dataexchange-export',
    title: 'FitekIN DataExchange API — Export',
    basePath: '{BASE_URL}/DataExchangeWebApiCore/api/v3',
    auth: 'Integrator credentials (see ../data-exchange.md). Not the Web API session token.',
  },
  {
    file: 'dataexchange-salesinvoice.json',
    dir: 'dataexchange-salesinvoice',
    title: 'FitekIN DataExchange API — Sales invoices',
    basePath: '{BASE_URL}/DataExchangeWebApiCore',
    auth: 'Integrator credentials (see ../data-exchange.md). Not the Web API session token.',
  },
];

const METHODS = ['get', 'post', 'put', 'delete', 'patch'];

/** Optional numeric enum values extracted from the backend source (see extract-enums.mjs). */
const enumValuesFile = path.join(snapshotsDir, 'enum-values.json');
const ENUM_VALUES = fs.existsSync(enumValuesFile) ? JSON.parse(fs.readFileSync(enumValuesFile, 'utf8')) : {};

function enumMemberLabel(enumName, member) {
  const values = ENUM_VALUES[enumName];
  return values && values[member] !== undefined ? `\`${member}\` = ${values[member]}` : `\`${member}\``;
}

function refName(ref) {
  return ref ? ref.split('/').pop() : null;
}

function schemaName(schema) {
  if (!schema) return null;
  if (schema.$ref) return refName(schema.$ref);
  if (schema.type === 'array' && schema.items) {
    const inner = schemaName(schema.items);
    return inner ? `${inner}[]` : 'array';
  }
  if (schema.allOf && schema.allOf.length === 1) return schemaName(schema.allOf[0]);
  return null;
}

/** Human type for a property: `int32`, `string(50)`, `uuid`, `Model`, `Model[]`, `enum Name`. */
function typeOf(prop, schemas) {
  if (!prop) return '';
  if (prop.$ref) {
    const n = refName(prop.$ref);
    const target = schemas[n];
    return target && target.enum ? `enum [${n}](${safe(n)}.md)` : `[${n}](${safe(n)}.md)`;
  }
  if (prop.allOf && prop.allOf.length === 1) return typeOf(prop.allOf[0], schemas);
  if (prop.type === 'array') return `${typeOf(prop.items, schemas) || 'any'}[]`;
  let t = prop.format || prop.type || 'object';
  if (prop.type === 'string' && prop.maxLength) t += `(${prop.maxLength})`;
  if (prop.additionalProperties) t = `map<string, ${typeOf(prop.additionalProperties, schemas) || 'any'}>`;
  return t;
}

/** Markdown link from an endpoints/ file to a model file. */
const PRIMITIVES = new Set(['array', 'string', 'integer', 'number', 'boolean', 'object']);

/** Markdown link to a model file, relative to `from` ('endpoints' or 'index'); primitives stay plain. */
function modelLink(name, from = 'endpoints') {
  if (!name) return '—';
  const bare = name.replace(/\[\]$/, '');
  if (PRIMITIVES.has(bare)) return `\`${name}\``;
  const prefix = from === 'index' ? 'models/' : '../models/';
  return `[${name}](${prefix}${safe(bare)}.md)`;
}

function pickBodySchema(requestBody) {
  if (!requestBody || !requestBody.content) return { name: null, contentType: null };
  const order = ['application/json', 'multipart/form-data', 'application/x-www-form-urlencoded', 'application/xml', 'text/xml'];
  const types = Object.keys(requestBody.content);
  const ct = order.find((t) => types.includes(t)) || types[0];
  return { name: schemaName(requestBody.content[ct].schema), contentType: ct, schema: requestBody.content[ct].schema };
}

function pickResponseSchema(responses) {
  if (!responses) return null;
  const ok = responses['200'] || responses['201'] || responses.default;
  if (!ok || !ok.content) return null;
  const ct = Object.keys(ok.content).find((t) => t.includes('json')) || Object.keys(ok.content)[0];
  return schemaName(ok.content[ct].schema);
}

function collectOps(doc) {
  const ops = [];
  for (const [p, item] of Object.entries(doc.paths || {})) {
    for (const m of METHODS) {
      if (!item[m]) continue;
      const op = item[m];
      const params = [...(item.parameters || []), ...(op.parameters || [])];
      const body = pickBodySchema(op.requestBody);
      ops.push({
        method: m.toUpperCase(),
        path: p,
        tag: (op.tags && op.tags[0]) || 'Untagged',
        summary: op.summary || op.description || '',
        params,
        body,
        response: pickResponseSchema(op.responses),
        deprecated: !!op.deprecated,
      });
    }
  }
  ops.sort((a, b) => a.tag.localeCompare(b.tag) || a.path.localeCompare(b.path) || a.method.localeCompare(b.method));
  return ops;
}

function paramTable(params, schemas) {
  if (!params.length) return '_No parameters._\n';
  const rows = params.map((p) => {
    const t = typeOf(p.schema, schemas).replace(/\]\(/g, '](../models/');
    return `| \`${p.name}\` | ${p.in} | ${p.required ? 'yes' : 'no'} | ${t} | ${(p.description || '').replace(/\n/g, ' ')} |`;
  });
  return ['| Name | In | Required | Type | Notes |', '|---|---|---|---|---|', ...rows].join('\n') + '\n';
}

function inlineBodyTable(schema, schemas) {
  // multipart/form-data bodies are usually inline object schemas
  if (!schema || !schema.properties) return '';
  const rows = Object.entries(schema.properties).map(([n, p]) => {
    const t = typeOf(p, schemas).replace(/\]\(/g, '](../models/');
    return `| \`${n}\` | ${t} | ${(schema.required || []).includes(n) ? 'yes' : 'no'} |`;
  });
  return ['| Field | Type | Required |', '|---|---|---|', ...rows].join('\n') + '\n';
}

function writeEndpointsFile(dir, tag, ops, schemas, docMeta) {
  const lines = [];
  lines.push(`# ${docMeta.title}: ${tag}`);
  lines.push('');
  lines.push(`Base path: \`${docMeta.basePath}\`. ${docMeta.auth}`);
  lines.push('');
  lines.push(`${ops.length} endpoint(s). Models are described under \`../models/\`; enum values under \`../enums.md\`.`);
  lines.push('');
  for (const op of ops) {
    lines.push(`## ${op.method} ${op.path}${op.deprecated ? ' (deprecated)' : ''}`);
    lines.push('');
    if (op.summary) {
      lines.push(op.summary);
      lines.push('');
    }
    lines.push('**Parameters**');
    lines.push('');
    lines.push(paramTable(op.params, schemas));
    lines.push('**Request body**');
    lines.push('');
    if (op.body.name) {
      lines.push(`${modelLink(op.body.name)} as \`${op.body.contentType}\``);
    } else if (op.body.schema && op.body.schema.properties) {
      lines.push(`Inline body as \`${op.body.contentType}\`:`);
      lines.push('');
      lines.push(inlineBodyTable(op.body.schema, schemas));
    } else {
      lines.push('_None._');
    }
    lines.push('');
    lines.push('**Response (200)**');
    lines.push('');
    lines.push(op.response ? modelLink(op.response) : '_No body documented (empty or primitive)._');
    lines.push('');
  }
  fs.writeFileSync(path.join(dir, 'endpoints', `${safe(tag)}.md`), lines.join('\n'));
}

function safe(name) {
  return name.replace(/[^A-Za-z0-9_.-]/g, '_');
}

function writeModelFile(dir, name, schema, schemas, usedBy) {
  const lines = [];
  lines.push(`# ${name}`);
  lines.push('');
  if (schema.description) {
    lines.push(schema.description);
    lines.push('');
  }
  if (schema.enum) {
    lines.push(`Enum (${schema.type || 'string'}). JSON bodies use the member name; search restrictions and numeric query parameters use the number.`);
    lines.push('');
    for (const v of schema.enum) lines.push(`- ${enumMemberLabel(name, v)}`);
    lines.push('');
  } else if (schema.properties) {
    lines.push('| Property | Type | Nullable | Notes |');
    lines.push('|---|---|---|---|');
    const req = new Set(schema.required || []);
    for (const [pn, p] of Object.entries(schema.properties)) {
      const notes = [];
      if (req.has(pn)) notes.push('required');
      if (p.readOnly) notes.push('read-only');
      if (p.maxLength) notes.push(`max ${p.maxLength}`);
      if (p.minimum !== undefined) notes.push(`min ${p.minimum}`);
      if (p.maximum !== undefined) notes.push(`max ${p.maximum}`);
      if (p.description) notes.push(p.description.replace(/\n/g, ' '));
      lines.push(`| \`${pn}\` | ${typeOf(p, schemas)} | ${p.nullable ? 'yes' : 'no'} | ${notes.join('; ')} |`);
    }
    lines.push('');
  } else {
    lines.push(`Type: \`${typeOf(schema, schemas)}\``);
    lines.push('');
  }
  const uses = usedBy.get(name);
  if (uses && uses.size) {
    lines.push('Used by:');
    lines.push('');
    for (const u of [...uses].sort()) lines.push(`- ${u}`);
    lines.push('');
  }
  fs.writeFileSync(path.join(dir, 'models', `${safe(name)}.md`), lines.join('\n'));
}

function generate(docMeta) {
  const file = path.join(snapshotsDir, docMeta.file);
  if (!fs.existsSync(file)) {
    console.warn(`skip ${docMeta.file}: snapshot missing`);
    return;
  }
  const doc = JSON.parse(fs.readFileSync(file, 'utf8'));
  const schemas = (doc.components && doc.components.schemas) || doc.definitions || {};
  const ops = collectOps(doc);
  const dir = path.join(referencesRoot, docMeta.dir);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(path.join(dir, 'endpoints'), { recursive: true });
  fs.mkdirSync(path.join(dir, 'models'), { recursive: true });

  // usedBy: model -> set of "METHOD path (request|response)" and "Model.property"
  const usedBy = new Map();
  const note = (model, by) => {
    if (!model) return;
    const bare = model.replace(/\[\]$/, '');
    if (!usedBy.has(bare)) usedBy.set(bare, new Set());
    usedBy.get(bare).add(by);
  };
  for (const op of ops) {
    note(op.body.name, `${op.method} ${op.path} (request) — [${op.tag}](../endpoints/${safe(op.tag)}.md)`);
    note(op.response, `${op.method} ${op.path} (response) — [${op.tag}](../endpoints/${safe(op.tag)}.md)`);
  }
  for (const [n, s] of Object.entries(schemas)) {
    for (const [pn, p] of Object.entries(s.properties || {})) {
      const target = p.$ref ? refName(p.$ref) : p.items && p.items.$ref ? refName(p.items.$ref) : null;
      if (target) note(target, `[${n}](${safe(n)}.md).${pn}`);
    }
  }

  const byTag = new Map();
  for (const op of ops) {
    if (!byTag.has(op.tag)) byTag.set(op.tag, []);
    byTag.get(op.tag).push(op);
  }
  for (const [tag, tagOps] of byTag) writeEndpointsFile(dir, tag, tagOps, schemas, docMeta);
  for (const [n, s] of Object.entries(schemas)) writeModelFile(dir, n, s, schemas, usedBy);

  // enums.md
  const enums = Object.entries(schemas).filter(([, s]) => s.enum);
  const enumLines = [
    `# ${docMeta.title}: enums`,
    '',
    'JSON request/response bodies carry enum members by name. Search restrictions (`RestrictionItem.Value`) and numeric query parameters carry the number shown after `=` (when known).',
    '',
  ];
  for (const [n, s] of enums) {
    enumLines.push(`## ${n}`, '', s.enum.map((v) => enumMemberLabel(n, v)).join(', '), '');
  }
  fs.writeFileSync(path.join(dir, 'enums.md'), enumLines.join('\n'));

  // INDEX.md
  const idx = [];
  idx.push(`# ${docMeta.title}: endpoint index`);
  idx.push('');
  idx.push(`Base path: \`${docMeta.basePath}\`. ${docMeta.auth}`);
  idx.push('');
  idx.push(`Generated from \`${docMeta.file}\` (OpenAPI ${doc.openapi || doc.swagger}). ${ops.length} endpoints, ${Object.keys(schemas).length} models, ${enums.length} enums.`);
  idx.push('');
  idx.push('Find the endpoint here, then open `endpoints/<Tag>.md` for parameters and `models/<Model>.md` for properties.');
  idx.push('');
  for (const [tag, tagOps] of byTag) {
    idx.push(`## ${tag} — [endpoints/${safe(tag)}.md](endpoints/${safe(tag)}.md)`);
    idx.push('');
    idx.push('| Method | Path | Request body | Response |');
    idx.push('|---|---|---|---|');
    for (const op of tagOps) {
      idx.push(`| ${op.method} | \`${op.path}\` | ${op.body.name ? modelLink(op.body.name, 'index') : op.body.schema ? 'inline' : '—'} | ${op.response ? modelLink(op.response, 'index') : '—'} |`);
    }
    idx.push('');
  }
  fs.writeFileSync(path.join(dir, 'INDEX.md'), idx.join('\n'));
  console.log(`${docMeta.dir}: ${ops.length} endpoints in ${byTag.size} tags, ${Object.keys(schemas).length} models, ${enums.length} enums`);
}

for (const d of DOCS) generate(d);
