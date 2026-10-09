# AI Game Scout: fourth publication batch

Checked October 9, 2026, in a real browser and in a cross-origin iframe with `sandbox="allow-scripts allow-pointer-lock"` and `referrerpolicy="no-referrer"`. Each game below started and responded to input in that restricted frame. No login, download, or browser permission prompt was needed. The site links to external game hosts; no upstream game code is copied into this repository.

| Game | Playable URL | In-game proof | Source post | Upstream metadata |
| --- | --- | --- | --- | --- |
| Pantry Dash | https://mdhasibul35.github.io/pantry-dash/ | Clicked Start and held Right; score rose from 0 to 60 while the mouse collected cheese. | https://x.com/hasibdreamer35/status/2106043484209856749 | `game-repos/pantry-dash/` |
| Mars GT | https://mars-gt.vercel.app/ | Focused the canvas and held `W`; the driving speed rose from 0 to 52 km/h. | https://x.com/AndreiProvkin/status/2106449409978626416 | None confirmed |
| A71 // GO FOR LAUNCH | https://go4launch.grok.me/ | Clicked Arm COPV, steered with `D` and vented with Space; score rose from 0 to 42. | https://x.com/blinkit369/status/2108446700763308325 | None confirmed |
| Dust & Lead | https://inkstaid.github.io/dust-and-lead/ | Clicked the canvas to start and held Right; the cowboy moved past a wagon and the camera scrolled. | https://x.com/inkstaid/status/2105923171455275249 | `game-repos/dust-and-lead/` |
| Faux Ami | https://faux-ami-french-game.vercel.app/ | Clicked Jouer and C'est parti, then answered chocolat = chocolate; the streak rose from 0 to 1. | https://x.com/JaanV_Tiwari/status/2107113557284569171 | None confirmed |

The new games appear in New Games and the alphabetical All Games index. They are excluded from Featured and home category collections. Matched GitHub Pages origins were confirmed through the GitHub Pages API; manifests pin upstream commits and contain links only.

## Screening findings

- Rivets & Roses stalled in a nested loading frame in the restricted iframe. The standalone title form loaded, but gameplay was not verified in the site's frame.
- SUBLEVEL 9 showed an unstyled disabled Loading menu in the restricted iframe and never reached gameplay.
- Tile Tunes showed a Start tile, but repeated clicks did not begin gameplay or change the score in the restricted iframe.
- Kingdom Clobber's creator post suggested that buying might be required; it was not included without proof of free direct play.

Grok Bot supplied the X source links. X itself returned a 403 response to this session, so post descriptions are attributed to Grok Bot and were not independently read here. External hosts may change after publication; repeat interaction checks when monitoring reports a failure.
