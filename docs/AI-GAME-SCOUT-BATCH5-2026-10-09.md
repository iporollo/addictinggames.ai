# AI Game Scout: fifth publication batch

Checked October 9, 2026, in a real browser and in a cross-origin iframe with `sandbox="allow-scripts allow-pointer-lock"` and `referrerpolicy="no-referrer"`. Each game below started and responded to input in that restricted frame. No login, download, or browser permission prompt was needed. The site links to external game hosts; no upstream game code was downloaded or executed.

| Game | Playable URL | In-game proof | Source post |
| --- | --- | --- | --- |
| The Mutual Fun | https://mutual-self.vercel.app/ | Clicked Enter Boardroom and held W; the business dog moved from the foreground toward the chairs in round 1. | https://x.com/AntiJahiliyah/status/2106659800142778492 |
| Lava Lasso | https://sloptopia.gooooooooor.chatgpt.site/games/lava-lasso.html?from=sloptopia | Opened the direct game page, started training, and held Right; the character ran to the lava edge and the tutorial advanced from Move to Jump. | https://x.com/breadswort83287/status/2107927718348353882 |
| Battle Peaks | https://battle-peaks1.vercel.app/ | Started a local two-player match, held Up to change aim from 45° to 77°, then fired with Space; a projectile visibly launched. | https://x.com/NeuralOrbitX/status/2108415881131036744 |
| Stardust Isles | https://game.danzechen.world/ | Started New Journey, entered the 3D village, and held W; the character advanced toward the well as the in-game clock moved from 08:40 to 09:10. | https://x.com/DanzerChan/status/2108438627755905471 |
| Sky Runner | https://games.johnslagboom.com/skyrunner/ | Started Pursuit and held Space to boost; speed reached 396 km/h and score reached 1,094 as the car crossed the neon city. | https://x.com/JohnSlagboom1/status/2108337781198217451 |

The Mutual Fun's source post named a King Chair edition; its current playable page displays **Business Dog Edition** and a King Chair finale. Battle Peaks' source post named a Family Edition; its current playable page displays **Mountain Mayhem Edition**. The site uses the stable game names and the exact playable URLs verified above. Lava Lasso was first reported as a collection-page link; that page's own Play link provided the direct game URL used here. No matching GitHub repository was confirmed for these five games, so no upstream folder was added.

The new games appear in New Games and the alphabetical All Games index. They are excluded from Featured and home category collections.

## Screening findings

- PixShard's guest path remained at Gathering Shards 0%; it raised a sandbox `SecurityError` when Cache storage was unavailable.
- Kingdom Clobber refused to connect in the site's iframe; its source post also suggested paid access.
- Psilocybin Prayer remained on its loading screen after two attempts and a 15-second wait.
- Stickhold's realm opened, but selecting villagers did not work in the frame; Go to next fight moved the view to a persistent blank map area.

Grok Bot supplied the X source links. X itself returned a 403 response to this session, so post descriptions are attributed to Grok Bot and were not independently read here. External hosts may change after publication; repeat interaction checks when monitoring reports a failure.
