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

Then tell the agent which host to talk to, and how to authenticate (see [`skills/fitekin-api/references/auth.md`](skills/fitekin-api/references/auth.md)):

```bash
export FITEKIN_BASE_URL=https://fitekin.com   # or your test/dev host
```

**Preferred — OAuth, no stored password.** If your agent runtime speaks MCP (Claude Code, Claude
Desktop, Cursor, VS Code), add the FitekIN MCP server and sign in once in the browser:

```bash
claude mcp add --transport http fitekin https://<host>/AIAgent/mcp
```

The browser sign-in (Microsoft EntraID today) returns an OAuth access token that **is** a FitekIN
session token — the skill uses the same token for the Web API, so there is nothing else to configure.
A runtime without built-in MCP OAuth can drive the same flow by hand (register + PKCE + a loopback
redirect); the steps are in [`references/mcp.md`](skills/fitekin-api/references/mcp.md). No password is stored
anywhere. OAuth is currently enabled on Fitek's dev host; roll-out to the other environments is
tracked by Fitek.

**Fallback — username/password**, for hosts where OAuth is not yet enabled, or agents that cannot do
the browser flow:

```bash
export FITEKIN_USERNAME=...
export FITEKIN_PASSWORD=...
```

Either way the agent reads what it needs from the environment; credentials never go in its prompt, and
it never prints or stores the token.

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
