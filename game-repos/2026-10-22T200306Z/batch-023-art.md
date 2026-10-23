# Batch 023 art and crop provenance

Observed 2026-10-23T05:54:38+00:00. All game thumbnails are exactly 688×400 (1.72:1), all mod tiles exactly 512×512. Source images were fitted and visually inspected in the contact sheet.

| ID | Kind | Source | Final path | SHA-256 |
|---|---|---|---|---|
| AG-098 | mod | Generated A/B; selected B: `AG-098.png` | `mods/oct23-b23-ag-098.webp` | `e580e6f1f6fe644d151218a48d3d4af32e8a6ee0ca4243f0a37a4803d62b0c1f` |
| AG-125 | mod | Official release image: `AG-125.png` | `mods/oct23-b23-ag-125.webp` | `093095c3d4bb6ad37c8bfaa7a63a8b2fff528a5ee2ffe3793e424509605a9b09` |
| AG-156 | game | Official creator image or captured guest test: `AG-156.png` | `games/oct23-b23-ag-156.webp` | `8f99156ed232120dc626786827d6ed50ebc6f4eb8afab603b5b6efcc74cb2c35` |
| AG-167 | game | Official creator image or captured guest test: `AG-167.png` | `games/oct23-b23-ag-167.webp` | `732d35d648de7d573cb778c45ea03905718101d658d018d2323dcf20124c9764` |
| AG-179 | game | Generated correction B, central-safe flame/feed composition | `games/oct23-b23-ag-179.webp` | `fc9e0119e4ecd1f52a7096b89f250d5d07135ddb815c42b293d0e52c825fb06e` |
| AG-180 | game | Official creator image or captured guest test: `AG-180.png` | `games/oct23-b23-ag-180.webp` | `1f7322736cfa1c80d7c0e4245fce69e94de014f9bb9f2b0d33b75c0a93efb6d2` |
| AG-183 | game | Official creator image or captured guest test: `AG-183.png` | `games/oct23-b23-ag-183.webp` | `841b6bdecce5a943972c8e1fb97df142187301579b033d2b3ad0e9ff66e9dc74` |
| AG-184 | game | Official creator image or captured guest test: `AG-184.png` | `games/oct23-b23-ag-184.webp` | `cc09a4dce03ee5e9b10285b765af644ebcf452780cc57780366ddcd8e9b0a579` |
| AG-185 | game | Official creator image or captured guest test: `AG-185.png` | `games/oct23-b23-ag-185.webp` | `449e1eac9ee8833e316001365caeafd22963019d1d20ddb298cb64d5e904c4d9` |
| AG-186 | game | Official creator image or captured guest test: `AG-186.png` | `games/oct23-b23-ag-186.webp` | `39d5ce5fa314f30c76eafd466a45191b45fbfb689d0558dc857ccb0db74a6877` |
| AG-187 | game | Official creator image or captured guest test: `AG-187.png` | `games/oct23-b23-ag-187.webp` | `9678be5a3ada4a0404faa3aa6651f4e045724d524a3ec58bbacfc255171457ae` |
| AG-189 | game | Official creator image or captured guest test: `AG-189.png` | `games/oct23-b23-ag-189.webp` | `b1bc37a2a365fb2bf52ed11d047608613214f962559d9dfab9339213a8c09c0d` |
| AG-237 | mod | Generated correction B, text-free snowy forest/page composition | `mods/oct23-b23-ag-237.webp` | `6de168357584d2f204a91701f3436102de94894095aa6548ff273729614931a4` |
| AG-260 | mod | Official release image: `AG-260.jpg` | `mods/oct23-b23-ag-260.webp` | `c66fe2be5c529a31f42925f36c222b1d2325d42612c9f1eb24e7665f38785357` |
| AG-261 | mod | Generated correction A, text-free truck/DLAA composition | `mods/oct23-b23-ag-261.webp` | `7e08c0e6d212ed9d020bd3683c6963aee0f76070e857de6a4085012429be81c0` |
| AG-262 | mod | Official release image: `AG-262.png` | `mods/oct23-b23-ag-262.webp` | `645a489a3fbc9d6cd74acaf1885763f5cfa911094546ce535d2a9d17db7b04dc` |
| AG-268 | mod | Generated A/B; selected A: `AG-268.png` | `mods/oct23-b23-ag-268.webp` | `2f8b0eb4486ee4afa4844c96e44e7ea8a9a5824493d2acba561dc57f6f550989` |
| AG-273 | mod | Official release image: `AG-273.jpg` | `mods/oct23-b23-ag-273.webp` | `2306f2ee65b648c17280541caacb39e1c5c8e29e0670728a20e2791ac684a634` |
| AG-276 | mod | Official release image: `AG-276.jpg` | `mods/oct23-b23-ag-276.webp` | `df688a060323398678d4a81405a7e4df0ca162be81871a5395d6b7e5be0e5d5e` |
| AG-277 | mod | Official release image: `AG-277.jpg` | `mods/oct23-b23-ag-277.webp` | `ace9570e38afa01549f882f3f40a98b3dce123455cfd2f839e2dc4e245ac6cff` |

Generated alternatives were displayed inline for AG-098 and AG-268. AG-098 B was selected for clearer shadow-army composition; AG-268 A was selected for a brighter readable motorcycle/turbo composition. Exact A/B source files are retained privately in `batch-023-art-stage/ab/`. AG-125 and AG-262 use contained creator art inside square tiles so their lettering is not cut off. Game source covers AG-180 and AG-186 were vertically aligned to retain titles. No art is presented as runtime proof.

## Native browser crop correction

The live card check after PR #124 found the original AG-237 cover clipped its final title letter and the AG-261 image clipped a menu headed with an older version number. The `/games` list also square-crops AG-179, cutting part of its title artwork. We generated and displayed A/B alternatives for all three, selected AG-237 B, AG-261 A, and AG-179 B, and re-exported at the same required tile sizes. Text-free centered subjects survive the mod square cards and the game shelf/list crops. A/B originals and the native screenshots are preserved in the private campaign run; public cards carry no provenance label.
