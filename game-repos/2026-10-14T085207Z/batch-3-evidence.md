# AI Game Scout campaign — batch 3

The discovery clock remains fixed at 2026-10-14 10:53:20 UTC. This batch includes a research listing for an AI-assisted Factorio mod. A research listing links to its official mod page and states what was and was not verified; it is not an installation recommendation.

## Analytical Combinator

- [Official Factorio Mod Portal listing](https://mods.factorio.com/mod/analytical-combinator) and [linked source repository at the v0.8.31 tag](https://github.com/bruno7seven/analytical-combinator/tree/v0.8.31) identify the mod and credit Claude with the author's coding and documentation changes. The author states that portions derive from Assembly Combinator under MIT.
- The official portal API reports Factorio 2.0 support, version 0.8.31, release file `analytical-combinator_0.8.31.zip`, and SHA1 `80206bf720d96f3712d7f024dbe13db52ca2dbad`. Source tag `v0.8.31` resolves to commit `5f654773fea2dd22d208037ff3ced95205203c5e`.
- The release ZIP was not downloaded because the anonymous download redirected to a Factorio login page. Its contents and digest were not independently verified against the reviewed source. No mod, installer, test, or Factorio runtime was executed.
- Codex Security Standard reviewed 24 files at the source commit with zero reportable findings and partial coverage. Handling of malformed imported blueprint tags in the Factorio runtime and the external flib dependency were outside the review. This is not a safety certification of the release file.
- The [official discussion](https://mods.factorio.com/mod/analytical-combinator/discussion/69cabc045e785612dbd4ebd0) contains a comparison question and interest in trying the mod, but no independent successful-use report. The portal has no price field; the catalog says “Price not confirmed.” An official gameplay image was not confirmed, so the site uses its existing placeholder.

The Square remains held from this batch because its legacy-save migration can remove non-character entities on Nauvis for affected existing saves. Shoter Belt Planner remains held because the release archive/source match is unverified, the source has no LICENSE file despite portal MIT metadata, and its build script can copy hidden or untracked local files into an archive. Neither has an independent successful-use report. The local run reports preserve the exact reviews and scan paths.
