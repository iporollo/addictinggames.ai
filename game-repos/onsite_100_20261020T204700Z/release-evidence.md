# On-site game campaign — batch 1

Six independently reviewed AI-created browser games are approved for the restricted AddictingGames.ai player. This batch is part of the owner-directed 100-game target and does not complete the campaign.

[Batch evidence](batch1.json) records the exact creator evidence, tested game URL, meaningful guest input and visible response, player sandbox, retained artwork source, and any play limitation. Each game was tested inside an iframe with `allow-scripts allow-pointer-lock` and `no-referrer`, matching the production player. Grok 4.7 High reviewed the current evidence through Cursor CLI in read-only ask mode and returned six approvals. The raw review and browser reports remain in the local campaign ledger.

No Crayon-hosted URL, Crayon link, or upstream game files are included. Gameplay runs from the independent creator destinations inside AddictingGames.ai. SURGE for Oinja's save/settings feature reports that it cannot persist under the restricted sandbox; the verified run itself remains playable.

The six covers are retained screenshots from the game listings, with provenance in `batch1.json`. They were cropped to the site's card aspect ratio, optimized as WebP, and visually checked. Current-main and live duplicate checks, plus Tesla occupancy, are recorded in the local release preflight. No new Tesla game is in this batch. Hot Right Now is unchanged because these games have no complete qualifying current X metrics and an earlier release already occurred today.

`source-repositories.json` records every exposed repository in the campaign ledger, including the shared GPTGames source for pending games; public metadata does not redistribute any upstream code. CI, merged SHA, deployment SHA, and live route/card/image checks will be recorded after release.
