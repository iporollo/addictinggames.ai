# AddictingGames.ai

## Product and purpose

AddictingGames.ai is a browser-game arcade focused on games created with AI.
Players discover games through Hot Right Now, New Games, genre browsing, and human multiplayer filters.
Games either run in the site's restricted player or open the creator's original site.
The site curates and links games; routine catalog work does not import or execute upstream game source.
New browser-game candidates require explicit, game-specific AI-creation evidence and responsive guest gameplay (or exact owner confirmation).
A named AI model and subjective quality threshold are not required. Rights/franchise/likeness concerns are warnings, not automatic denials for linking.
Mods require an actual public release, exact artifact identity/hash and adequate artifact security review; independent positive user reports are optional.
Do not retroactively remove existing games unless the owner requests an audit or removal.

## Production and repository

- Website: https://addictinggames.ai
- Canonical repository: https://github.com/iporollo/addictinggames.ai.git
- Production uses the existing Vercel Git integration for `main`; the showcase is a separate preview.
- Verify the chosen checkout's remote, current main, and local changes before editing.
- The surrounding `addictedgames` workspace contains multiple checkouts and historical research.

## How an agent can help

- Discover AI-created browser games and mods across public X and creator/official sources through the existing Grok Bot conversation named AI Game Scout. Owner AI-Games bookmarks are an optional extra lead source.
- Verify authorship, playtest candidates, prepare faithful thumbnails, and publish eligible New Games batches.
- Research or update specific games, artwork, categories, human multiplayer modes, and site behavior within the request.
- Diagnose availability and review evidence without treating discovery, successful builds, or screenshots as gameplay proof.

## Workspace pipeline skill

Use [addictinggames-pipeline](.agents/skills/addictinggames-pipeline/SKILL.md) for the pipeline or an explicitly requested subset.
The skill combines discovery, testing, A/B artwork, and release instructions; it is specific to this repository.
Use the owner-specified discovery duration; ask if absent. No inferred candidate/publication quota.
Discovery closes at its deadline; verification and approved batch publication continue until the queue is resolved.
The main Codex agent leads the first pass: AI Game Scout supplies game-specific AI creation evidence, five GPT-6 Luna Max workers test games, and Codex Security reviews exact mod artifacts. Complete first-pass approvals need no Grok review. Grok 4.7 High leads an independent second pass for every held or failed candidate, directs fresh Luna tests or Codex Security work through Codex, and decides from new evidence.
Tool/browser failures require recovery or a resumable campaign interruption, never a candidate denial.
Final decisions are 1/0 after evidence resolution; completion also requires every approved entry to be live verified.
The shared [campaign contract](.agents/skills/addictinggames-pipeline/references/campaign-contract.md) and validator enforce evidence, queue, receipt and completion checks.
Tesla Roadster games have a catalog-wide maximum of five; existing entries consume slots. Do not automatically remove existing entries.
Browser cap: five pipeline tabs total, one reused tab per tester; the parent uses a freed slot.
Show generated A/B choices; the agent selects during full pipeline runs, while standalone artwork requests use owner selection.
A full-pipeline request authorizes publication; explaining or editing the skill does not start a run.
The same skill covers modifications to existing games through its [mod review reference](.agents/skills/addictinggames-pipeline/references/mod-review.md). Mods use `lib/mods-data.json`, `lib/mods.ts`, `app/mods/` and `components/ModsCatalog.tsx`; source review does not certify release files.

## Sources of truth

- `game-discovery-bot/owner-decisions.json`: owner exclusions, identity corrections, and gameplay confirmations. Preserve previous test findings separately. Historical agent holds are not owner exclusions or current policy.
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
