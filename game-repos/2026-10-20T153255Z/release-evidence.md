# AI Game Scout release evidence — 2026-10-20 full-duration run

Run: `2026-10-20T153255Z`

Discovery began at `2026-10-20T15:45:00Z` with a fixed stop deadline of `2026-10-20T17:44:30Z`. The owner-supplied `AI-Games` bookmarks were re-qualified first; independent research then continued for the full requested window.

## AI-Games bookmark requalification

The prior aggregate “5 duplicate / 16 held or nonqualifying” report was not specific enough. The same 21 bookmark URLs now have one final record each: **2 eligible games, 5 held items, 8 excluded items, and 6 duplicates**. Parent-side normalized-destination deduplication corrected Scout’s initial classification of Math of the Wild.

| # | Candidate | Disposition | Evidence and reason |
| --- | --- | --- | --- |
| 1 | [Lost Marbles](https://meticulai.com/games/lost-marbles/) | Eligible | [Creator post](https://x.com/MeticulAi/status/2112214629090828742) plus creator statements tying Claude to [bot behavior](https://x.com/MeticulAi/status/2112427424319410437) and [the mobile game](https://x.com/MeticulAi/status/2112253759749320715). Direct Quick Play passed. |
| 2 | [BCD](https://github.com/thebcd69/bcd-games) | Excluded | iOS runtime for commercial PC games, not a browser game or mod; no project-specific AI-authorship claim. Exact release/source metadata is retained in `source-repositories.json`. |
| 3 | [Minecraft air defense mod](https://x.com/0xJarvi/status/2112301687759344101) | Held | Creator explicitly says Opus 5.5 helped build it, but also says it is not ready; no public release or repository is exposed. Retry on an exact public artifact, digest, and repository tag. |
| 4 | [Roadster Rush](https://roadster-rush.ai.studio/) | Eligible with rights warning | [Creator AI statement](https://x.com/ammaar/status/2111200113095803282) and [play link](https://x.com/ammaar/status/2111200114421239922). Direct guest play passed. The game uses the Tesla Roadster name, and the creator says styles/copy came from Tesla’s website; those rights were not independently verified. |
| 5 | [Need for Speed Underground 2 browser port](https://x.com/goygoyengine/status/2112219126349664739) | Excluded | Commercial EA game port, no confirmed exact playable destination, and no creator AI-authorship evidence. |
| 6 | [Teleoperator](https://teleoperator.mindblown.ai/?car=roadster) | Duplicate | Exact destination already exists in prior URL receipts and the October 14 duplicate list. |
| 7 | [MacNativeGames](https://github.com/ly05010419/MacNativeGames) via [third-party post](https://x.com/0x0SojalSec/status/2111833062325805316) | Excluded | Native macOS Nintendo-game runtime, not a browser game; repository AI-tool wording is build advice, not an authorship claim. |
| 8 | [enRAGE](https://www.nexusmods.com/reddeadredemption2/mods/10967) | Held | Only third-party AI reporting was found and the official listing returned 403; no verified artifact/repository identity. Retry on a creator claim plus an exact artifact hash and repository tag. |
| 9 | [MacNativeGames](https://github.com/ly05010419/MacNativeGames) via [creator post](https://x.com/liyong2077/status/2111751050000769517) | Excluded | Same native Nintendo-game runtime identity and scope failure as record 7. The second source URL is retained. |
| 10 | [NPCTalk](https://github.com/christos-antono/NPCTalk) | Held | Creator ties the repository to Claude-learned skills, but the promised release is not published. Cloned GTA V character voices add a rights warning. Retry on a tagged artifact and digest. |
| 11 | [BBSC](https://github.com/CLSAMG22/BBSC) | Held | [Exact release](https://github.com/CLSAMG22/BBSC/releases/tag/v0.0.1_items) and repository verified, but no creator AI-authorship statement was found. |
| 12 | [AI-recompiled games list](https://x.com/aisearchio/status/2109765770876264757) | Duplicate | Matches the prior owner lead thread, including already reviewed Hedgewars and Skate Rust identities. |
| 13 | [DroidDeck](https://github.com/Droid-Deck/DroidDeck) | Excluded | Android runtime rather than a browser game or mod; no project-specific AI-authorship evidence. [Exact release](https://github.com/Droid-Deck/DroidDeck/releases/tag/0.5.0) retained. |
| 14 | [Naruto lightning-dragon Minecraft mod](https://x.com/hasibdreamer35/status/2109151748099367228) | Held | Third-party post, no public release or repository, and Naruto IP warning. Retry on original-creator AI evidence and an exact public artifact/repository. |
| 15 | [Madeira](https://x.com/madeira_app/status/2103624044004405317) | Excluded | Native iOS runtime for a commercial Rockstar game, not a browser game or mod. |
| 16 | [GTA 4 in Skate](https://x.com/TheCanadianGTR/status/2107153060984492110) | Excluded | Third-party clip of an IP mashup with no AI claim and no public release. |
| 17 | [San Theft Auto](https://github.com/naderkhalil/santheftauto) | Duplicate | Exact URL and post identity match the October 10 prior receipt. Repository commit and license are retained. |
| 18 | [NEW RAD CITY](https://newrad.city/) | Duplicate | Exact destination exists in the prior receipt. |
| 19 | [Gigacity](https://addictinggames.ai/games/gigacity) | Duplicate | Already published in the live catalog. |
| 20 | [Halo OpenCE](https://github.com/OpenCommunityEdition/OpenCE) | Excluded | Native port of Microsoft’s Halo CE with no project-specific AI-authorship claim. [Exact release](https://github.com/OpenCommunityEdition/OpenCE/releases/tag/build-244) retained. |
| 21 | [Math of the Wild](https://www.mts.now/mathofthewild/) | Duplicate | Exact normalized destination is already live as [`terra-incognita`](https://addictinggames.ai/games/terra-incognita): `https://mts.now/mathofthewild`. The linked [OpenAI Math repository](https://github.com/openai/math) is recorded only as a content source, not verified app code. |

## Accepted bookmark games

| Game | Gameplay acceptance | Artwork |
| --- | --- | --- |
| Lost Marbles | Entered Quick Play without an account, reached a 50-marble race, and sent the documented `A` steering input; the rendered race state changed and rank moved from 49th to 48th. This is a bounded responsive-play check, not a completed race. | Generated A/B pair shown during the run; variant B selected and normalized to 1200×845 WebP. |
| Roadster Rush | Entered without an account, muted with the in-player control, started with `Space`, and accelerated with `W`; score and distance changed before a normal collision outcome. | Generated A/B pair shown during the run; variant A selected and normalized to 1200×845 WebP. |

Both checks were direct creator-destination tests. AddictingGames restricted-iframe compatibility was not tested, so both entries open on their original sites.

## Source repositories

`source-repositories.json` retains every repository exposed by these bookmarks and the first three research waves, including held, excluded, and duplicate records. `source-repositories-wave4.json` retains the final wave's 28 mod repositories. The receipts record discovery provenance, immutable release-tag commits, license state, AI-authorship evidence, release URLs, and 36 final-wave artifact SHA-256 digests. No upstream source tree or release binary is copied into this repository.

## Independent Scout research and gameplay decisions

Wave 2 supplied 23 game candidates and nine mod candidates after normalized-destination checks. Eleven games cleared both creator-specific AI evidence and bounded guest gameplay and are prepared for publication:

Generated A/B covers were shown for each accepted game. The selected variants, prompts, selection reasons, and normalized 1200×845 WebP paths for all 13 release games are retained in `artwork.json`; unused and held-candidate covers are not included.

| Game | Acceptance scope | Source repository |
| --- | --- | --- |
| [BirdieSwing Island Run](https://www.birdieswing.com/play) | Guest run reached the swing timing interaction after in-player mute. | None exposed. |
| [3D Jelly Shooter Arcade](https://argonfruitshooter.netlify.app/) | Responsive guest shooter play passed. | None exposed. |
| [魔物の森サバイバル](https://tuyotanjp.github.io/vampire-like-shooter/) | Movement input changed the rendered Wave 1 survival scene; a short run reached a normal game-over state. | None exposed; the GitHub Pages hostname was not used to infer a repository. |
| [フリック脳汁タイピング](https://dopa-typing.vercel.app/) | Responsive guest typing round passed. | None exposed. |
| [Keep Knight](https://viggle.ai/games/keep-knight/) | Responsive guest tower-defense interaction passed. | None exposed. |
| [Final Stretch 直線一気](https://jutsushi-tamaki.itch.io/chokusen-ikki) | One solo card move advanced the race to Round 2 and changed positions/stamina. Online rooms were not tested. | None exposed. |
| [Gulliver's Travels](https://gulliver.defiabell.com/) | Guest beach scene responded to Space after in-game volume was set to zero. | None exposed. |
| [STARWEAVE 星织](https://secondmax.github.io/STARWEAVE/) | Responsive guest constellation play passed. | [Official source](https://github.com/secondmax/STARWEAVE) retained at commit `6d099ca20d32d81597f05debdb9ee919751ac2af`; no license or tag. |
| [Space Mission](https://space-game-deploy.vercel.app/) | Responsive single-player rocket play passed; advertised co-op was not tested. | None exposed. |
| [ポンポコキャッチ](https://ponpoko-catch.netlify.app/) | Responsive guest catch-game play passed. | None exposed. |
| [Castleforged](https://castleforged.itch.io/castleforged) | Responsive single-player strategy play against AI passed. | None exposed. |

Twelve Wave 2 games remain held: Quantum Trials lacked a verified pre-game mute; Zygote vs Shitcoins uses an NFT character without verified provenance; Unrest has a mature-content/DOB gate; Tidelight did not produce conclusive input response; コンコン・スカイロード v7 could not visibly confirm mute state; Stamp Cube and Yotsukura Obby produced blank players; Four Fuses exposed a loud-jumpscare/no-prelaunch-mute risk; 六路盤炎技, 街宣サバイバーズ, IRIS and Biscuit, and 麻辣湯ぴったりチャレンジ were interrupted before browser gameplay. Fetched markup and instructions were not promoted to gameplay proof.

## Mods

No mod cleared the complete publication gate. All exposed source repositories and immutable artifact metadata remain in the two structured source-repository receipts:

- Five Gabby Minecraft mods have exact tagged Claude disclosures and release digests, but no independent working report or completed artifact/runtime review.
- Hardscrabble and Create: Octo Arms have exact-tag Claude disclosures and release digests, but no independent working report or completed artifact/runtime review.
- NieR:Automata Archipelago Hook now has exact `v0.1.1-prebeta` Claude evidence and artifact digest. It remains held because automatic `wss` to `ws` fallback can expose the slot password, independent working proof is absent, and commercial NieR IP needs a rights warning.
- Tales of Eternia Water's Edition is held at authorship qualification: its exact project claim says AI wrote the code but does not identify the tool; Codex/Claude appear only as examples of the creator's usual workflow. It also lacks a license and independent working/security proof.
- NPCTalk lacks a tagged artifact and uses cloned GTA V character voices. BBSC has an exact artifact but no creator AI-authorship claim.

## Wave 3

At 17:15Z Scout returned 18 additional discovery-qualified game leads, A-67 through A-84, after reporting no destination or title matches against the live/prior catalog. Their exact structured records are retained in the local resumable run. Source receipts for Disposable Tricks, Tiny Rampage, ten `adong` games, and Yarn Planet are committed in `source-repositories.json` with immutable observed HEAD commits and license state.

None of Wave 3 is included in this release. The available owned browser lanes were absent or extension-blocked, so no replacement tabs were opened under the five-tab cap and no gameplay was inferred from READMEs, fetched markup, or descriptions. Each remains held for a clean guest gameplay retry; Tiny Rampage additionally needs map-tile rights review.

## Final Scout stop and Wave 4

Scout stopped at the fixed `2026-10-20T17:44:30Z` deadline and confirmed the stop at `2026-10-20T17:45:08Z`; zero Scout runs or routines remained active. The terminal receipt contains **205 researched items: 81 discovery-qualified, 95 held, 8 excluded, and 21 duplicates**. The qualified set is exactly **45 games and 36 mods**.

Wave 4 contributed two additional game leads and 28 mods. The two games remain held because no gameplay lane completed before the deadline. Every Wave 4 mod has creator-specific AI-authorship evidence at its immutable release-tag commit plus release metadata and artifact digests, but remains held pending independent runtime compatibility and bounded security review. None is presented as published or safe to install.

The terminal receipt omitted a normalized `kind` on 62 held records and most duplicate records, so this run cannot truthfully report an exact all-status game-versus-mod split. The pipeline skill now requires `kind: game|mod|other` on every disposition and a final sum invariant against `discovered_total`.

CI, merge, deployment, and live verification will be appended after release completion.
