# AddictingGames.AI

The official arcade portal at https://addictinggames.ai. One design, one canonical catalog, verified players, and browser-local play history. The former comparison URLs `/version-a` and `/version-b` permanently redirect to the homepage; the comparison UI and alternate layout are removed.

## Development

Use Node.js 22 or newer, then `npm ci` and `npm run dev`. Validate with `npm run lint`, `npm test`, `npm run build`, and `npm run typecheck`.

## Production deployment

This repository's existing Vercel Git integration deploys `main` to the original production project serving `addictinggames.ai`. The separate `addictinggames-ai-showcase` project is a design preview, not the production target. Do not attach the live domain to that showcase or replace the original project linkage.

## Existing form services

Newsletter and game submissions use the original `/api/subscribe` and `/api/submit-game` endpoints and the existing Airtable configuration: `AIRTABLE_API_KEY` and `AIRTABLE_BASE`, stored only in Vercel. Newsletter addresses go to the `Email` field in the existing `Waitlist` table. There is no newsletter delivery or email notification service in this repository; any external Airtable automations require separate verification. Missing configuration or provider failure produces an error, never simulated success.

Game name, description, game URL, and contact email are required. GitHub repository and Twitter/X handle are optional. Game submissions go to the existing review table `tbl5AUoCl96h5WEMk`. To preserve that schema, the required contact email and optional GitHub URL are appended to `Description`; absent Twitter/X handles omit `Author`. Contact notes are for review only and must be removed before publishing a description. Review records are not automatically published: the public catalog is maintained separately in `lib/catalog.ts`. Submitting a game does not subscribe its contact email to the newsletter.

Automated form tests stub the provider and do not write to Airtable. Do not send test subscriptions or submissions to the production database without explicit approval.

## Games

The included games are 3D Car Driving Simulator, Falling Bubbles, fly.pieter.com, Island Survivor, and WW2 Dog Fight Arena. Their original identity and artwork are retained. Combat Mission, Platform Party, Cybertruck Rocket League, 2D GTA, Blocky RTS, and VibeSail remain excluded because their destinations failed or their owners blocked embedding; no security controls are bypassed.

`/games` is a single alphabetical list. Players run under `/games/[slug]`; third-party game availability remains outside this site's control. Recently Played uses only game slugs and timestamps in browser-local storage.
