# AddictingGames.ai

## Product and purpose

AddictingGames.ai is a browser-game arcade focused on games created with AI.
Players discover games through Featured, New Games, genre browsing, and human multiplayer filters.
Games either run in the site's restricted player or open the creator's original site.
The site curates and links games; routine catalog work does not import or execute upstream game source.
New candidates require explicit, game-specific AI-authorship evidence and gameplay acceptance.
Do not retroactively remove existing games unless the owner requests an audit or removal.

## Production and repository

- Website: https://addictinggames.ai
- Canonical repository: https://github.com/iporollo/addictinggames.ai.git
- Production uses the existing Vercel Git integration for `main`; the showcase is a separate preview.
- Verify the chosen checkout's remote, current main, and local changes before editing.
- The surrounding `addictedgames` workspace contains multiple checkouts and historical research.

## How an agent can help

- Discover AI-created browser games through the existing Grok Bot conversation named AI Game Scout.
- Verify authorship, playtest candidates, prepare faithful thumbnails, and publish eligible New Games batches.
- Research or update specific games, artwork, categories, human multiplayer modes, and site behavior within the request.
- Diagnose availability and review evidence without treating discovery, successful builds, or screenshots as gameplay proof.

## One workspace skill

Use [addictinggames-pipeline-pt1](.agents/skills/addictinggames-pipeline-pt1/SKILL.md) for the pipeline or an explicitly requested subset.
The skill combines discovery, testing, A/B artwork, and release instructions; it is specific to this repository.
Defaults: 25 new candidates or 60 minutes of discovery, five GPT-6 Luna workers with max reasoning, one final release.
Browser cap: five pipeline tabs total, one reused tab per tester; the parent uses a freed slot.
Show generated A/B choices; the agent selects during full pipeline runs, while standalone artwork requests use owner selection.
A full-pipeline request authorizes publication; explaining or editing the skill does not start a run.

## Sources of truth

- `game-discovery-bot/owner-decisions.json`: owner exclusions, identity corrections, and gameplay confirmations. Preserve previous test findings separately.
- `game-discovery-bot/runs/`: local resumable runs and raw evidence; commit concise public release evidence under `game-repos/<run-id>/`.
- `lib/catalog.ts`, `lib/direct-games.ts`, `lib/games.ts`: embedded catalog, direct destinations, and listing/verification gates.
- `lib/game-categories.ts`, `docs/GAME-CATEGORIES.md`: genres and separately evidenced human multiplayer modes.
- `components/Arcade.tsx`, `app/globals.css`, `public/games/`: card rendering, geometry, and published covers.
- `app/`, `components/`, `lib/`, `public/`: website source; `tests/` and `.github/workflows/validate.yml`: validation.
- Optional sibling `game-discovery-bot/` and `thumbnail-research/`: legacy evidence and visual references. Inspect only when relevant.

## Working boundaries and checks

Keep owner-approved art and layout. Keep artwork provenance internal, without status labels on public cards.
Distinguish direct play from verified iframe play; preserve the player sandbox and browser security controls.
Newsletter and submission routes use existing Airtable configuration; submissions do not automatically enter the catalog.
Do not send test form records to production without explicit authorization.
For site changes use Node 22, `npm ci`, then lint, tests, build, and typecheck as defined in `package.json`.
For documentation-only changes validate the skill, paths, and instructions; the repository's CI still applies.
Report the actual source, CI, deployment, and live verification states when releasing site changes.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
