# October 24 Scout campaign — batch 7

28 approved entries (1 browser game and 27 mods) from the final reviewed release remainder. Each links to its creator’s official destination. Private campaign receipts hold exact artifact and second-pass evidence.

## G-056: FragRush
- Destination: https://erenciracioglu-dotcom.github.io/FragRush/
- AI source: https://github.com/erenciracioglu-dotcom/FragRush/blob/8a21618429312ba6ce904f2964e97f479b46db99/README.md#L159
- AI evidence: Proof of concept, built with Claude. Bots only, no multiplayer (yet).
- Gameplay: Clicked PLAY and resume; pressed Space to respawn, held W for 900 ms, then left-clicked with the rocket launcher → Resume overlay cleared; first-person view changed during movement; HUD timer/health advanced and rocket ammo decreased from 12 to 11
- Artwork: /games/oct24-g-056.webp
- Warning: Bots only; no human multiplayer mode.

## M-001: Pickup Lock
- Official destination: https://www.curseforge.com/minecraft/mc-mods/pickup-lock/files
- AI source: https://www.curseforge.com/minecraft/mc-mods/pickup-lock
- AI evidence: AI tools were used to help develop Pickup Lock.
- Exact release: https://edge.forgecdn.net/files/9310/551/pickuplock-1.0.1.jar
- Reviewed SHA-256: `3c4bf256cfcab3017757e666ee8d97ee895204fb1e282ed69371707697f6dda9`
- Static review: Sealed complete exact-JAR static review with all six classes disassembled at method-bytecode level; zero validated findings.
- Limits: No Minecraft runtime, dependencies, or byte-for-byte source-to-release proof.
- Artwork: /mods/oct24-m-001.webp

## M-002: WF’s Image Overlays
- Official destination: https://github.com/WarlyFarly-Github/WF-s-Image-Overlays/releases/tag/1.0.0
- AI source: https://github.com/WarlyFarly-Github/WF-s-Image-Overlays/blob/1977f222401a53e35978a38cc83819dda4d7b002/README.md
- AI evidence: This was AI coded, I did not create any of this code myself.
- Exact release: https://github.com/WarlyFarly-Github/WF-s-Image-Overlays/releases/download/1.0.0/imageoverlay-1.0.0.jar
- Reviewed SHA-256: `8f4c75ce48a4d714351f3b597940f4d645edb8637ba661b66d07f7ed5d2ba6a6`
- Static review: Sealed exact-JAR nine-class static scan plus post-hold complete focused review; low user-configured image OOM finding is nonblocking.
- Limits: No runtime image fetch/OOM reproduction or source-build comparison.
- Artwork: /mods/oct24-m-002.webp
- Warning: The AI statement was added to the repository after the reviewed 1.0.0 release; its exact contribution to that release is not independently established.

## M-031: Stage fog
- Official destination: https://thunderstore.io/package/wreckzog/Stage_fog/
- AI source: https://thunderstore.io/package/wreckzog/Stage_fog/
- AI evidence: Made with Codex / ChatGPT.
- Exact release: https://github.com/WreckzOG/StageFog/releases/download/v0.13.0/Stage_fog-0.13.0.zip
- Reviewed SHA-256: `b97caae5c93e7b2c798ab2099abf999d73b8ab3f7e904a4935c66afa23833c2c`
- Static review: Sealed complete exact-ZIP static review, including all 102 managed DLL method bodies; zero validated findings.
- Limits: No game runtime or source-to-binary comparison; tagged repository lacks implementation.
- Artwork: /mods/oct24-m-031.webp
- Warning: The release identifies its DLL as AlienSkies; the tagged repository lacks implementation, so source-to-release identity is unproven.

## M-044: UltraTerraForged
- Official destination: https://www.curseforge.com/minecraft/mc-mods/ultraterraforged
- AI source: https://github.com/Pandaismyname1/ultraterraforged/blob/1.0.3+26.3/README.md#L21
- AI evidence: UltraTerraForged is an unofficial continuation, not made or endorsed by the TerraForged or ReTerraForged authors, and is developed with the help of AI so it can keep up with new Minecraft releases.
- Exact release: https://github.com/Pandaismyname1/ultraterraforged/releases/download/1.0.3%2B26.3/ultraterraforged-1.0.3%2B26.3-neoforge.jar
- Reviewed SHA-256: `2b60e706521b36e7e8cddf30d22aee3d9d7ebb06a6d4d974e99dab1f14c15cde`
- Static review: Prior sealed full exact-JAR static scan plus fresh post-hold targeted bytecode review, zero remaining reportable findings.
- Limits: No installation/runtime, source-to-binary rebuild or external dependency review.
- Artwork: /mods/oct24-m-044.webp
- Warning: This is an unofficial continuation; confirm loader and world-generation compatibility before using an existing save.

## M-045: Core Ecosystem
- Official destination: https://www.curseforge.com/minecraft/mc-mods/core-infection
- AI source: https://www.curseforge.com/minecraft/mc-mods/core-ecosystem-infection
- AI evidence: [Medium AI assisted Development]
- Exact release: https://www.curseforge.com/api/v1/mods/1677854/files/9316922/download
- Reviewed SHA-256: `8e8304856d77c270fd2f3abd3af26541e55ace2682a9a84915f586a9404fd2d6`
- Static review: Sealed exact v1.9.4 JAR review, all 622 classfiles and all 1512 extracted files checked; 5/5 surfaces reviewed, zero reportable findings, no deferred items.
- Limits: No runtime execution or source-to-release correspondence; external dependencies excluded.
- Artwork: /mods/oct24-m-045.webp
- Warning: World-changing infection mechanics can alter terrain and entities; back up saves before installation.

## M-005: Temu Lucky Blocks
- Official destination: https://modrinth.com/mod/temu-lucky-blocks/version/1.0.0
- AI source: https://modrinth.com/mod/temu-lucky-blocks
- AI evidence: This project adds Temu Lucky Blocks! It is fully vibe-coded!!!
- Exact release: https://cdn.modrinth.com/data/YSYHonCz/versions/ViZQFeWn/temu-luckyblocks-1.0.0.jar
- Reviewed SHA-256: `93af99a5c1908e87d4f4fd6f5bc4f55e97a1ebc4d38aa6bd3a7fb1dce2f42898`
- Static review: Complete exact-JAR static review of all 18 classes and 68 archive entries; one medium in-game explosion finding is warning-only by Grok disposition.
- Limits: No install, runtime permission/protection test, or source-to-release proof.
- Artwork: /mods/oct24-m-005.webp
- Warning: Ballet Armor head slot plus crouch can trigger a strength-4 TNT interaction explosion on every server inventory tick, without a cooldown.
- Warning: The /resetluckyblocks command can reset shared lucky-block loot state without an operator check.

## M-011: Jeck230NOTREALWORLD
- Official destination: https://modrinth.com/mod/jeck230notrealworld/version/2.0.0
- AI source: https://modrinth.com/mod/jeck230notrealworld
- AI evidence: Jeck230NOTREALWORLD is an experimental Minecraft horror mod created almost entirely using Artificial Intelligence (Codex) in about 2 days.
- Exact release: https://cdn.modrinth.com/data/Sw98EWDP/versions/KJi3naYh/jeck230-2.0.0.jar
- Reviewed SHA-256: `b8baa156419bf177a56b033eff1c6df29c4e67853f7dd52d65a87bca8ab403ab`
- Static review: Complete exact official JAR static review of 199 archive entries and 26 classes; two medium in-game findings warning-only by independent Grok disposition.
- Limits: No install/runtime command-permission, crash or camera launch test. No source-to-release proof. Official file says 2.0.0 but embedded metadata says 1.0.0.
- Artwork: /mods/oct24-m-011.webp
- Warning: Shared world commands and collapse effects are not operator-gated; the globally registered day5_crash action can raise a client exception.
- Warning: Webcam access requires persistent local consent; the reviewed release did not show camera capture or upload.
- Warning: The release filename says 2.0.0 while embedded metadata says 1.0.0.

## M-019: CombatMode
- Official destination: https://thunderstore.io/c/lethal-company/p/Borgez/CombatMode/
- AI source: https://thunderstore.io/c/lethal-company/p/Borgez/CombatMode/
- AI evidence: This mod was made with heavy use of AI. The AI used was **Claude Opus 5.5** (model `claude-opus-5-5`, by Anthropic), running in **Claude Code**.
- Exact release: https://ccdn.thunderstore.io/live/repository/packages/Borgez-CombatMode-1.0.0.zip
- Reviewed SHA-256: `bb183764bd5f1fbd90b9982d55989c7b25453cb485c8917a5cae0e31bcf31540`
- Static review: Sealed exact-ZIP and DLL CIL review plus fresh post-hold corrected message-flow scan; one low gameplay trust finding, nonblocking.
- Limits: No multiplayer runtime validation or source-to-binary proof; Unity movement distance not measured.
- Artwork: /mods/oct24-m-019.webp
- Warning: The inbound ReceiveKnockback handler accepts the sender’s vector; the configured outbound distance does not cap inbound movement.

## M-024: RunicInventoryFix
- Official destination: https://thunderstore.io/c/valheim/p/s6652289/RunicInventoryFix/
- AI source: https://thunderstore.io/c/valheim/p/s6652289/RunicInventoryFix/
- AI evidence: 本模组的代码由 AI 生成（AI Generated），需求、验证与发布由人类完成。
- Exact release: https://thunderstore.io/package/download/s6652289/RunicInventoryFix/1.0.1/
- Reviewed SHA-256: `dbe4b7a5d84c4659d088bb27cccac996910c2ce1d7a2a3c1fb104afab8eedcf6`
- Static review: Fresh sealed complete exact-current-ZIP five-file static scan and DLL IL review, zero validated findings.
- Limits: No runtime install, external dependency internals or source-build comparison.
- Artwork: /mods/oct24-m-024.webp

## M-055: ProCon
- Official destination: https://thunderstore.io/c/gang-beasts/p/AxisGames/ProCon/
- AI source: https://thunderstore.io/c/gang-beasts/p/AxisGames/ProCon/
- AI evidence: Procon is a mod that lets you host modded lobbies with friend's (ai assisted but tested)
- Exact release: https://thunderstore.io/package/download/AxisGames/ProCon/1.0.0/
- Reviewed SHA-256: `9bdba74bf7e1c8a09bde613fb8268fa7db21c6b3c7ee10c1282162c42ce83a46`
- Static review: Sealed exact-ZIP CIL review assessed four requested surfaces and found one low weak-secret issue. Canonical coverage field is partial because scan-local receipt references were omitted at sealing; raw exact-byte receipt closes those pointer gaps, with no deferred path.
- Limits: Steam P2P reachability, token-guess practicality and Gang Beasts admission were not runtime-tested; no source repository or source-to-binary proof; plugin was not executed.
- Artwork: /mods/oct24-m-055.webp
- Warning: Lobby session protection uses a one-byte secret; it is weak against deliberate guessing.

## M-062: PFrankupsMod
- Official destination: https://modrinth.com/mod/pfrankupsmod
- AI source: https://modrinth.com/mod/pfrankupsmod
- AI evidence: [AI Disclosure] - This mod used AI in Asstiance Writing Code
- Exact release: https://cdn.modrinth.com/data/5hCJylAO/versions/3IsInHD1/pfrankups-1.2.5.jar
- Reviewed SHA-256: `c8a436552f2091473628df5fae99490b158f35a83418f746c4fabfbddecfa6b7`
- Static review: Exact JAR: all 89 files/80 classes/21,911 bytecode instructions assessed; sealed replacement scan 659b70f6-7b49-4f34-ba23-e17d374419fa, 0 findings. Static source/runtime limits disclosed.
- Limits: Not executed or installed; Minecraft/server behavior and source-to-release mapping unverified. Default-on server-specific auto refresh sends fixed /pfstats then /rankup; manual refresh sends same commands on any connected server.
- Artwork: /mods/oct24-m-062.webp
- Warning: Default-on auto refresh sends fixed /pfstats then /rankup on the configured Peaceful Farms host. Manual refresh sends the same commands on any connected server; their server-side effects were not verified.
- Warning: The project is intended for the Peaceful Farms server; local profile and migration effects were not runtime-tested.

## M-063: Buried Treasure Map Fix
- Official destination: https://modrinth.com/mod/buried-treasure-map-fix
- AI source: https://modrinth.com/mod/buried-treasure-map-fix
- AI evidence: Disclaimer: Coded with AI, if this cannot be used in your pack for that reason, feel free to yoink and modify the datapack.
- Exact release: https://cdn.modrinth.com/data/cs5C83Di/versions/pskntI4W/Treasure_Map_Fix_1.21.1.zip
- Reviewed SHA-256: `a6235d8f1f17891fcfd6fe52b119ac8a494166099f0bf62594b9a503ede85385`
- Static review: Sealed complete exact-artifact static scan of the datapack ZIP, manifest and one loot-table override; zero validated findings.
- Limits: No Minecraft runtime or datapack precedence test; no source-to-release mapping.
- Artwork: /mods/oct24-m-063.webp

## M-069: InventoryWizard
- Official destination: https://modrinth.com/mod/inventorywizard
- AI source: https://modrinth.com/mod/inventorywizard
- AI evidence: AI disclosure: Parts of this project, including code, tests and documentation, were written with the help of AI tools. All AI-assisted changes are reviewed by the maintainer.
- Exact release: https://cdn.modrinth.com/data/cU0ynk3p/versions/sHa1scv4/InventoryWizard-paper-2.2.1.jar
- Reviewed SHA-256: `d11eb87b4e79ab118d7daa9cc35567462d1c303570e3bc746a8462c25d8ca423`
- Static review: Sealed exact 2.2.1 JAR static review: archive integrity, all 15 application classes, plugin-owned permissions/database paths and shaded H2 reachability; zero reportable findings.
- Limits: No install/runtime or source-to-release build proof; full shaded H2 method surface was not audited.
- Artwork: /mods/oct24-m-069.webp

## M-077: KeybindsGalore
- Official destination: https://modrinth.com/mod/keybindsgalore-plus-hvb007
- AI source: https://modrinth.com/mod/keybindsgalore-plus-hvb007
- AI evidence: Portions of this mod's code were written with the assistance of AI tools. All AI-generated code has been reviewed, tested, and verified for functionality by the developer.
- Exact release: https://cdn.modrinth.com/data/l6y7RMn7/versions/6ikPQeLZ/keybindsgalore-1.9.1%2B26.3.jar
- Reviewed SHA-256: `d19552eba76677efcfdb78708dab6a2e5ffd00940a349e5566a92eea1f5aa289`
- Static review: Sealed complete exact-artifact static scan plus focused method-level review; zero validated findings.
- Limits: No Minecraft runtime, third-party dependency execution, or source-to-release identity proof.
- Artwork: /mods/oct24-m-077.webp

## M-078: Nick
- Official destination: https://modrinth.com/mod/nick-mod
- AI source: https://modrinth.com/mod/nick-mod
- AI evidence: 此模组由AI生成(opencode内的DeepSeek V4) / AI-generated (DeepSeek V4 via opencode)
- Exact release: https://cdn.modrinth.com/data/VtG7yP1S/versions/NirMtXpl/nick-1.0.9%2B26.4.jar
- Reviewed SHA-256: `03dc316145534275f95117a023661853b930fe2cca9187b9bc198b67aacebe8b`
- Static review: Sealed complete exact-artifact static scan plus focused method-level review; zero validated findings.
- Limits: No Minecraft runtime, third-party dependency execution, or source-to-release identity proof.
- Artwork: /mods/oct24-m-078.webp

## M-092: Alpha Piscium
- Official destination: https://modrinth.com/shader/alpha-piscium
- AI source: https://modrinth.com/shader/alpha-piscium
- AI evidence: this codebase incorporates software components generated or assisted by Large Language Models (LLMs).
- Exact release: https://cdn.modrinth.com/data/bvDpxd8c/versions/tB8N3ghY/Alpha%20Piscium%20v1.10.0.zip
- Reviewed SHA-256: `6b574399007fbf9fccfb00e9838857682a57ec8978e0559ffbc244e18a253d71`
- Static review: Complete sealed exact-ZIP review of all 305 entries; zero validated security findings.
- Limits: Offline static review; mod not installed or executed.
- Artwork: /mods/oct24-m-092.webp
- Warning: The reviewed ZIP references seven /base/*.glsl files that are absent; shader compilation may fail in some environments.

## M-099: The Goat Man addon
- Official destination: https://www.curseforge.com/minecraft-bedrock/addons/the-goat-man-addon
- AI source: https://www.curseforge.com/minecraft-bedrock/addons/the-goat-man-addon
- AI evidence: It is made by ai Claude fable and opus just for fun and too see how far ai can go with mods
- Exact release: https://mediafilez.forgecdn.net/files/8799/644/The_Goat_Man_Horror_v4%20%281%29.mcaddon
- Reviewed SHA-256: `07dca343ba2032f62e022f57137124ceacb9032a2762a4518dc94d52e86e53e6`
- Static review: Sealed complete static capability-oriented review of exact official archive; zero validated findings.
- Limits: No game runtime execution or source-to-release reproducibility test.
- Artwork: /mods/oct24-m-099.webp
- Warning: Horror content may be intense.

## M-100: Withered Stubbs + Stubbs Skin Tools
- Official destination: https://www.moddb.com/mods/withered-stubbs-stubbs-skin-tools
- AI source: https://www.moddb.com/downloads/withered-stubbs-stubbs-skin-tools-v11
- AI evidence: Mod and tools made by Jake George with help from Claude AI.
- Exact release: https://www.moddb.com/downloads/withered-stubbs-stubbs-skin-tools-v11
- Reviewed SHA-256: `87f2e874e5a9b7c958fda50ff0d4810bc46e78e977b93d52f6053f6208cc0759`
- Static review: Sealed complete static capability-oriented review of exact official archive; zero validated findings.
- Limits: No game runtime execution or source-to-release reproducibility test.
- Artwork: /mods/oct24-m-100.webp

## M-102: AE2 Crafting Time
- Official destination: https://github.com/cTux/ae2-crafting-time/releases/tag/release-1.3.1
- AI source: https://github.com/cTux/ae2-crafting-time/blob/release-1.3.1/README.md#L139
- AI evidence: Yes, AI helps me write this mod.
- Exact release: https://github.com/cTux/ae2-crafting-time/releases/download/release-1.3.1/ae2-crafting-time-1.3.1-fabric-1.20.1.jar
- Reviewed SHA-256: `92b72e4d0489ec438eb2df6219e23a3fe2357e4ef62a17c653546683bd01dcab`
- Static review: Sealed complete exact-JAR static review of 323 mod classes, packaged dependency inventory, network packet handlers, permission gates and local persistence; zero validated findings.
- Limits: No mod execution; bundled MixinExtras API inventory did not establish semantic safety of every dependency method or source-to-binary reproducibility.
- Artwork: /mods/oct24-m-102.webp
- Warning: Requires a compatible Applied Energistics 2 installation.

## M-103: warehouse-keeper
- Official destination: https://github.com/2567922141/warehouse-keeper/releases/tag/v1.2.1
- AI source: https://github.com/2567922141/warehouse-keeper/blob/v1.2.1/README.md#L5
- AI evidence: 这是一个 100% Vibe Coding 项目，所有代码及代码审查均有 AI 负责，人工负责在真机环境下，在真实的游戏存档中测试。 AI 有可能犯错，仅供 vibe coding 学习用途，请勿用于工业生产以及其他重要行业中。若出现任何损失，后果自负！！！
- Exact release: https://github.com/2567922141/warehouse-keeper/releases/download/v1.2.1/warehouse-keeper-1.2.1.jar
- Reviewed SHA-256: `93e839410ef26db06ecb649cb76e3bbd7eca0a40d9e0032e5d81dd916d1933c2`
- Static review: Sealed exact-JAR static scan plus focused follow-up on the reported dataflow; M-111 also reviewed the recommended pinned NetMusic 1.5.2 dependency.
- Limits: No JAR execution or source-to-binary reproduction; M-111 other compatible dependency versions unassessed.
- Artwork: /mods/oct24-m-103.webp
- Warning: The creator describes this as a fully AI-coded learning project; back up important saves.

## M-105: Ashes 2063 3D weapons VR
- Official destination: https://github.com/TefMeister/ashes-2063-weapons/releases/tag/v0.1.1
- AI source: https://github.com/TefMeister/ashes-2063-weapons/blob/v0.1.1/README.md#L95
- AI evidence: - Design direction, drawings and screenshots: Tefa. Modelling and scripting: made with Claude (Anthropic).
- Exact release: https://github.com/TefMeister/ashes-2063-weapons/releases/download/v0.1.1/Ashes2063-3DWeapons-VR-v0.1.1.zip
- Reviewed SHA-256: `bf10a8f0f44a7153150ec7b5402ebb549b48f9cbd21d3ab9165a57b4f8c94b92`
- Static review: Fresh sealed Codex Security scan e01a865b-f205-4cdf-81e9-63d39ddf812b: all 39 ZIP members byte-matched, five ordered native surfaces reviewed, zero validated findings; focused scope complete.
- Limits: Static only; per-user Discord URL protocol registration, OpenAL same-DLL thread teardown, VirtualAllocEx handle provenance, seven stale text manifest rows, limited signature scope, and no source-to-binary/runtime proof must be disclosed.
- Artwork: /mods/oct24-m-105.webp
- Warning: If its registration path runs, the unsigned GZDoom executable leaves a persistent per-user Discord URL handler; URI argument quoting was not fully traced.
- Warning: The bundled OpenAL library redirects its own worker thread during teardown. A separate non-current-PID helper requests process information then closes the handle; no cross-process write was observed.
- Warning: VirtualAllocEx handle provenance was not fully traced; cross-process allocation was not established.
- Warning: Seven text files disagree with the embedded manifest; the five executable-file hashes match the release manifest.
- Warning: Only the bundled OpenVR DLL has a verified Valve signature digest; the other four executables/libraries are unsigned.
- Warning: The reviewed binaries were not shown to be built from the source tag, and the ZIP was not run.


## M-112: TF3-DRPC
- Official destination: https://github.com/Zagrthos/TF3-DRPC/releases/tag/v0.1.0
- AI source: https://github.com/Zagrthos/TF3-DRPC/blob/v0.1.0/README.md#L217
- AI evidence: Yes, this project was built with AI, namely Claude by Anthropic, working in Claude Code: the mod, the app, the tests and the very text you're reading. Claude wrote the code and never
- Exact release: https://github.com/Zagrthos/TF3-DRPC/releases/download/v0.1.0/TF3-DRPC-0.1.0-windows-x64.zip
- Reviewed SHA-256: `3ea9cf3dbee14e71022badabaee3b7e9d30507579ac74e768017a810292ac34b`
- Static review: Exact ZIP sealed scan plus bounded RestartAgent CreateProcessW callsite and immutable GitHub ZIP-attestation review; 0 validated findings.
- Limits: Static only. RestartAgent launches caller-supplied argv[1] with forwarded argument tail; main NativeAOT executable unsigned; ZIP attested but no per-EXE attestation/reproducible build. Same-user Discord IPC unauthenticated; offline certificate chain lacked local issuer; no runtime test.
- Artwork: /mods/oct24-m-112.webp
- Warning: RestartAgent launches an application path supplied by its caller and forwards an argument tail; every parent-app invocation was not traced.
- Warning: The main NativeAOT executable is unsigned. GitHub attests the ZIP only; source-to-binary equivalence and the differing tag/source commit identifiers were not reconciled.
- Warning: Same-user local Discord IPC is unauthenticated, so another local process under that user can observe presence or forge replies.
- Warning: Offline verification of the Microsoft-signed helper lacked the local issuing root, although its embedded digest matched.
- Warning: Only the Windows ZIP was reviewed; installation and runtime behavior were not tested.


## M-113: Silver Falls Freeze Fix
- Official destination: https://github.com/kaitosan135/SilverFallsFreezeFix/releases/tag/Release
- AI source: https://github.com/kaitosan135/SilverFallsFreezeFix/blob/Release/README.md#L1
- AI evidence: DISCLAIMER: Made with Grok AI.
- Exact release: https://github.com/kaitosan135/SilverFallsFreezeFix/releases/download/Release/SilverFallsFreezeFix.wps
- Reviewed SHA-256: `881410f813791328cbd317a47af6e40dbb0e67e6f53a69523146dc8638db1234`
- Static review: Sealed exact-WPS scan and fresh targeted follow-up: all 7436 executable bytes and 1859 PPC32 instructions disassembled; no validated security finding. Scanner partial flag reflects unresolved local teardown-lifecycle question.
- Limits: No runtime execution; unpinned WUT storage-lifetime contract leaves possible local game/console instability.
- Artwork: /mods/oct24-m-113.webp
- Warning: The detached watchdog thread can be freed while sleeping, which may cause local instability; a prolonged stall can request a console reboot.

## M-115: GTA IV FPV drone mod
- Official destination: https://github.com/hammerill/gtaiv-fpv/releases/tag/build-6
- AI source: https://github.com/hammerill/gtaiv-fpv/blob/build-6/README.md#L187
- AI evidence: Written with Claude (Anthropic).
- Exact release: https://github.com/hammerill/gtaiv-fpv/releases/download/build-6/gtaiv-fpv.zip
- Reviewed SHA-256: `ae1f84c276cd03284cad0c2b387abbceba2d4d5d7b84161c74006e63235d2510`
- Static review: Sealed exact-ZIP scan and fresh targeted native DLL disassembly assessed the listener and image-dump paths; no host-compromise finding. Initial partial scan gap closed for these material paths.
- Limits: No installation or runtime reachability test; firewall exposure, live dump content and full source-to-binary equivalence unverified.
- Artwork: /mods/oct24-m-115.webp
- Warning: Default-on, unauthenticated ws:// serial/configurator listener binds to all interfaces on first UART port 5761, subject to firewall exposure.
- Warning: The mod automatically copies the local game main module to fpv-data/recon/gtaiv-image.bin; no upload was observed.

## M-116: Villager Life
- Official destination: https://github.com/s00d/villager-life/releases/tag/1.0.0
- AI source: https://github.com/s00d/villager-life/blob/1.0.0/README.md#L120
- AI evidence: This mod was written with substantial help from an AI assistant (Claude, by Anthropic).
- Exact release: https://github.com/s00d/villager-life/releases/download/1.0.0/villager-life-1.0.0%2B1.21.1-en.jar
- Reviewed SHA-256: `fd594af359d467409bf4d717aee2a67b4223861e0bfea1add3ddee85c9c3807a`
- Static review: Fresh sealed Codex Security scan 97385c11-33bc-45dc-bff3-6643c6182ba6: 3/3 focused surfaces, 0 findings, no focused deferred work; all 754 class constant pools inventoried.
- Limits: Static only; other classes/parsers not semantically covered, no source-build proof or runtime test. Development recorder can launch fixed local ffmpeg; operator with debug commands enabled can disable authentication; production defaults gate both.
- Artwork: /mods/oct24-m-116.webp
- Warning: Source-to-build identity is unproven, and the static review did not semantically cover every class or parser.
- Warning: In a non-production runtime, the recorder can launch fixed /opt/homebrew/bin/ffmpeg without a shell and write under the game recordings directory.
- Warning: An operator can disable server authentication only if debug commands are enabled; the production default is off.
- Warning: Selected server payload guards were reviewed, but they do not cover every gameplay parser.
- Warning: The mod was not run. Other language and Minecraft-version files on the release were not reviewed.


## M-117: Boscali Summer
- Official destination: https://github.com/GrabowMar/Boscali-Summer/releases/tag/v0.2.8-alpha
- AI source: https://github.com/GrabowMar/Boscali-Summer/blob/v0.2.8-alpha/README.md
- AI evidence: This mod is developed with help from AI tools: code, debugging, design exploration, documentation and some visual assets.
- Exact release: https://github.com/GrabowMar/Boscali-Summer/releases/download/v0.2.8-alpha/BoscaliSummer-0.2.8.zip
- Reviewed SHA-256: `2fab934165c683b66f999f30d9a71d1ca2510e5982abeeb3c56c3a182c9e4ab3`
- Static review: Sealed exact-ZIP scan and fresh targeted follow-up: embedded DLL hash verified, complete 1.8M-line IL disassembly and focused material API paths assessed; no validated security finding. Scanner partial flag reflects unproven source-to-binary correspondence.
- Limits: No in-game/multiplayer execution or reproducible source-to-binary build proof.
- Artwork: /mods/oct24-m-117.webp
- Warning: This is an alpha release; runtime compatibility and source-to-binary identity were not established.

## M-068: EssentialsC
- Official destination: https://modrinth.com/mod/essentialsc
- AI source: https://modrinth.com/mod/essentialsc
- AI evidence: A small part of the core code was written with AI, then I reviewed, tested and adapted it.
- Exact release: https://cdn.modrinth.com/data/K7HZMVgx/versions/QmKxfMyn/EssentialsC-4.3.5-all.jar
- Reviewed SHA-256: `0fe804b57861e4d41cd3d53026ffa03324d4b0f0eb2dad4545c5b38d909cb490`
- Static review: Complete sealed review of exact JAR; one medium operator-triggered disclosure finding is nonblocking by Grok disposition.
- Limits: Offline static review; mod not installed or executed.
- Artwork: /mods/oct24-m-068.webp
- Warning: An operator-triggered /essc dump uploads 14 sections including player IDs, locations and the last 120 log lines to api.pastes.dev.
