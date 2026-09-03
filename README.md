# fitek_ai

AI tooling for [FitekIN](https://fitekin.com), Fitek's invoice-processing and AP-automation platform.

| Path | What it is |
|---|---|
| [`skills/fitekin-api/`](skills/fitekin-api/) | An [Agent Skill](https://agentskills.io) that teaches an AI agent (Claude Code, Codex, Cursor, or any skill-aware agent) to work with FitekIN directly through its HTTP APIs: log in, choose a company, search and read invoices, purchase orders, suppliers, dimensions, AutoTransactions, and run imports/exports, with no UI involved. Also covers the FitekIN MCP server for ad-hoc queries and how one OAuth token serves both MCP and the Web API. |
| [`tools/openapi-to-skill/`](tools/openapi-to-skill/) | Scripts that regenerate the skill's endpoint and model reference from the live OpenAPI documents. |

## Install the skill

Agent Skills are plain folders with a `SKILL.md`. Copy or symlink `skills/fitekin-api` into the place your agent reads skills from:

| Agent | Location |
|---|---|
| Claude Code (personal) | `~/.claude/skills/fitekin-api` |
| Claude Code (one project) | `<project>/.claude/skills/fitekin-api` |
| Other skill-aware agents | See the agent's docs; the folder layout is the same |

```bash
git clone https://github.com/Fitek-Global/fitek_ai.git
ln -s "$(pwd)/fitek_ai/skills/fitekin-api" ~/.claude/skills/fitekin-api
```

Then set the environment the agent should talk to (see [`skills/fitekin-api/references/auth.md`](skills/fitekin-api/references/auth.md)):

```bash
export FITEKIN_BASE_URL=https://fitekin.com   # or your test/dev host
export FITEKIN_USERNAME=...
export FITEKIN_PASSWORD=...
```

The agent never needs the credentials in its prompt; it reads them from the environment when it calls the API.

## Regenerate the API reference

The `references/<api>/` folders are generated, not hand-written. To refresh them against a FitekIN environment:

```bash
node tools/openapi-to-skill/fetch.mjs https://<fitekin-host>          # download OpenAPI documents
node tools/openapi-to-skill/extract-enums.mjs <path-to-fitekin-repo>  # optional: numeric enum values from source
node tools/openapi-to-skill/generate.mjs                              # rebuild skills/fitekin-api/references/*
```

Requires Node.js 20 or newer. Hand-written guidance lives in `SKILL.md` and the top-level files under `references/` (`auth.md`, `search.md`, `errors.md`, `data-exchange.md`); edit those directly.

## Contributing

Open a pull request. Keep generated folders untouched in hand edits (regenerate instead), and never commit tokens, credentials, or environment-specific URLs other than the public hosts.
