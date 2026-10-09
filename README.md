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

The original included games are 3D Car Driving Simulator, Falling Bubbles, fly.pieter.com, Island Survivor, and WW2 Dog Fight Arena. Their original identity and artwork are retained. The first AI Game Scout batch adds Soccar, Salmon Survival, Flap NYC, Hungry Seal, and Neon Nightfall to **New Games**. The second batch adds Thermopylae, Dracula 0, Moonlit Spellcaster, Freesbee, and Orbit Forge. The third batch adds DIRTLINE, 3rd Mainland Biker, Ink Dash, Quiet Rooms, and Kindlekeep TD. The fourth batch adds Pantry Dash, Mars GT, A71 // GO FOR LAUNCH, Dust & Lead, and Faux Ami. The fifth batch adds The Mutual Fun, Lava Lasso, Battle Peaks, Stardust Isles, and Sky Runner. The sixth batch adds Ski Jumping, Dlicom Attack, DliClips Rush, Little Lake (Gone Fishin'), and Ashen Vow. The seventh batch adds Nushi Fishing, Time Echo, Church Life, Ripple Pool, and Proposed Frontiers. The eighth batch adds Señor Inteligente, Snowboard Supreme, Trip_Ibadan, Project Nova, and Dili Cart. The ninth batch adds Plaid Circuit, Heroes Journey, ASH LINE, Sadie & Luna, and K-DUDU: Ironfang. All forty-five were started and controlled in a browser and in the site's restricted iframe. Featured shows five curated verified games in this order: Turbo Kart GP, Thermopylae, Soccar, Heroes Journey, and Toybox Push. All verified New Games appear once in a single section with three horizontal scrolling rows. Browse tabs include all verified games in each fitting genre; secondary tags live in `lib/browse.ts` and are supported by the catalog and scout reports. Update includes only games with a verified update date and evidence from the last 30 days; discovery dates are not update dates, and the tab stays empty until an update is recorded. 3rd Mainland Biker asks players to choose a display name on its own page; the website does not collect that name. Combat Mission, Platform Party, Cybertruck Rocket League, 2D GTA, Blocky RTS, and VibeSail remain excluded because their destinations failed or their owners blocked embedding; no security controls are bypassed.

`/games` is a single alphabetical list. Players run under `/games/[slug]`; third-party game availability remains outside this site's control. New external games are sandboxed with scripts and pointer lock only, without same-origin access, forms, downloads, popups, or top-level navigation. The embed sends no referrer. Recently Played uses only game slugs and timestamps in browser-local storage.

The website source is in `app/`, `components/`, `lib/`, and `public/`. Optional upstream source references are in `game-repos/<slug>/MANIFEST.md`, one folder per game with a matched repository. They contain URLs, pinned commits, license evidence, and review notes only. No upstream source is copied or executed. The discovery inbox and X query history are kept outside the production checkout in `../game-discovery-bot/`.

The first batch's source links, gameplay checks, and held candidates are recorded in `docs/AI-GAME-SCOUT-2026-10-09.md`.

## Multiplayer discovery

The homepage promotes Featured, New Games, and Multiplayer in its navigation. Multiplayer has its own section and remains a Browse Games tab. Both use the same verified playable collection and mode tags from `lib/browse.ts`: online multiplayer or local two-player. Recently Played remains below Multiplayer. Mode evidence and exclusions are recorded in `docs/MULTIPLAYER.md`.
