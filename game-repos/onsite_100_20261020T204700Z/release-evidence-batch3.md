# On-site game campaign — batch 3

Catch Circle, Crazy Eights, and point & line have game-specific Claude-authored substantial remakes of their current versions. Their original 2024 versions are not claimed to have been AI-created. The exact creator commits, direct guest actions, and input/response inside AddictingGames.ai's restricted iframe are recorded in [batch3.json](batch3.json) and the local raw gameplay report. Independent Grok 4.7 High first-pass review found no missing work for these three; final review approved all three at evidence revision 2.

The site frames the creator's game pages at `gptgames.dev` with `sandbox="allow-scripts allow-pointer-lock"` and `referrerPolicy="no-referrer"`. No Crayon destination, link, game source, or executable file is imported. The three covers are unaltered screenshots from the creator's `data/games.json`, each 260px square WebP, and their source URLs are recorded in `batch3.json`.

All three slugs and exact destinations are absent from current main `12cbb45a76d01ce8311d0ab9efaa016e1d67df87`; the public routes returned 404 before release. No Tesla Roadster title or human multiplayer mode is in this batch. Local Node 22 lint, 44 tests, build, and typecheck passed. Built routes include the exact creator URL, restricted sandbox and no-referrer attribute with no Crayon text.

CI, merged source, production deployment, and live checks will be recorded separately after release. This batch is part of the owner-directed 100-game target, not campaign completion.
