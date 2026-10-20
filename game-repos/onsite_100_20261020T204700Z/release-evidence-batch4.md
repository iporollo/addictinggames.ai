# On-site game campaign — batch 4

Monkeytype Clone, Tells, Hot Seat, and Highlight: Word Search have game-specific, substantial Claude-assisted remakes of their current versions. The creator's exact commits, guest actions, and observed responses inside the restricted player are recorded in [batch4.json](batch4.json) and the local wave 6 gameplay reports. This does not claim that each original version was AI-created.

The site frames the creator's game pages at `gptgames.dev` with `sandbox="allow-scripts allow-pointer-lock"` and `referrerPolicy="no-referrer"`. No Crayon destination, link, game source, or executable file is imported. The four covers are unaltered 260px square WebP screenshots from the creator's `data/games.json`; exact source URLs are in `batch4.json`.

Hot Seat's submit button fell below the iframe at an 856px test viewport. The same restricted iframe passed when the viewport was 1512x1080; the game page's existing fullscreen control gives players a larger frame on smaller screens. This limitation is stated in its description.

The four slugs and destinations were absent from current main `29d66f59c3de98b77f14c47f68a91a0bd05b1528`; the public routes returned 404 before release. No Tesla Roadster title or human multiplayer mode is in this batch. Independent Grok 4.7 High first-pass review found no missing work and final review approved all four at evidence revision 2. Local Node 22 lint, 44 tests, build, and typecheck passed; generated routes include the exact creator URL, restricted sandbox and no-referrer attribute with no Crayon text. CI, merged source, production deployment, and live checks are recorded separately.

This batch is part of the owner-directed 100-game target, not campaign completion.
