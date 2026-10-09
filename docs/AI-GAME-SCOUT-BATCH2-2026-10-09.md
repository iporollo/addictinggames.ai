# AI Game Scout: second publication batch

Five games passed the restricted-frame gameplay checks for this publication batch.

Checked October 9, 2026, in a real browser and in a cross-origin iframe with `sandbox="allow-scripts allow-pointer-lock"` and `referrerpolicy="no-referrer"`. Each game below started and responded to input in the restricted frame. No login, download, or browser permission prompt appeared during these checks. The site links to external game hosts; no game code is copied into this repository.

| Game | Playable URL | In-game proof | Source post | Upstream metadata |
| --- | --- | --- | --- | --- |
| Thermopylae | https://thermopylae-v2.vercel.app/ | Entered Act I, started the first chapter, held `W`, and saw the player move and interaction prompt change in the restricted frame. | https://x.com/linyutai120479/status/2103304809243918486 | None confirmed |
| Dracula 0 | https://dracula-0.vercel.app/ | Started Stage 1-1 and held Right; the character moved and the dialogue changed in the restricted frame. | https://x.com/sbalhatlani/status/2103199644108955699 | None confirmed |
| Moonlit Spellcaster | https://clubhouse1661.github.io/moonlit-spellcaster/ | Held Right to move the wizard, then charged and released a spell with Space in the restricted frame. | https://x.com/angelfish1445/status/2102634663554568348 | `game-repos/moonlit-spellcaster/` |
| Freesbee | https://okidoki9903.github.io/Freesbee/ | The 3D field loaded; after resuming, held `D` and saw the dog move across the field in the restricted frame. | https://x.com/Dia_konos/status/2104308320089882772 | `game-repos/freesbee/` |
| Orbit Forge | https://vishalbhoir18.github.io/rocket_orbit_forge/ | Loaded the hangar, clicked Launch, and watched the rocket lift off while altitude, speed, and fuel changed in the restricted frame. | https://x.com/The_Bioway/status/2101732574179823810 | `game-repos/orbit-forge/` |

The new catalog entries appear in New Games and in the alphabetical All Games index. They are excluded from Featured and home category collections. The linked game hosts control their own content and availability.

## Screening findings

- HEATSINK and the itch.io game pages for Honeycomb Turn Battle, Dungeotto, and MOLT refuse cross-origin embedding. Dungeotto's direct game file redirects to itch.io's hotlink warning, so it is also unsuitable as an embed.
- Akhbaar Rush starts on its own page, but its restricted frame stalls with a service worker security exception and a canvas origin error.
- Skyfall Protocol requires three map ZIP downloads and local folder access before a flight can start. No files were downloaded or permission granted.
- Petits Gardiens shares run decisions and a pseudonym with a leaderboard server by default, so it is held for privacy review. A webcam game is held because camera permission was not granted. LEGO Racers is held because its creator calls it a recreation of a branded game.

Grok Bot supplied the X source links. X itself returned a 403 response to this session, so post descriptions are attributed to Grok Bot and were not independently read here. Game pages and any matched GitHub repositories were checked directly. External hosts may change after publication; repeat the interaction check when monitoring reports a failure.
