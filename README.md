# AddictingGames.AI

The official arcade portal at https://addictinggames.ai. Version B is the homepage. `/version-b` remains available, with Version A at `/version-a` for comparison. Both use one canonical catalog, the same verified players, and the same browser-local play history.

## Development

Use Node.js 22 or newer, then `npm ci` and `npm run dev`. Validate with `npm run lint`, `npm test`, `npm run build`, and `npm run typecheck`.

## Production deployment

This repository's existing Vercel Git integration deploys `main` to the original production project serving `addictinggames.ai`. The separate `addictinggames-ai-showcase` project is a design preview, not the production target. Do not attach the live domain to that showcase or replace the original project linkage.

## Existing form services

Newsletter and game submissions use the original `/api/subscribe` and `/api/submit-game` endpoints and the existing Airtable configuration: `AIRTABLE_API_KEY` and `AIRTABLE_BASE`, stored only in Vercel. The existing Waitlist table and game table `tbl5AUoCl96h5WEMk` are preserved. Optional GitHub URLs are appended to the game Description so no schema migration is required. Missing configuration or provider failure produces an error, never simulated success.

Automated form tests stub the provider and do not write to Airtable. Do not send test subscriptions or submissions to the production database without explicit approval.

## Games

The included games are 3D Car Driving Simulator, Falling Bubbles, fly.pieter.com, Island Survivor, and WW2 Dog Fight Arena. Their original identity and artwork are retained. Combat Mission, Platform Party, Cybertruck Rocket League, 2D GTA, Blocky RTS, and VibeSail remain excluded because their destinations failed or their owners blocked embedding; no security controls are bypassed.

`/games` is a single alphabetical list. Players run under `/games/[slug]`; third-party game availability remains outside this site's control. Recently Played uses only game slugs and timestamps in browser-local storage.
