# Game source references

The website lives in this repository's `app/`, `components/`, `lib/`, and `public/` directories. `game-repos/` contains one folder per published game **only when a source repository is known**. Each folder is a small review record with the upstream URL, pinned commit, license, playable URL, and verification evidence. These folders do not contain upstream source, dependencies, binaries, Git submodules, or executable setup scripts.

The playable URL is required for a game to enter the website catalog. An upstream repository is optional and is never a substitute for a playable game. Do not clone or run third-party game code in the website deployment or on a machine with access to the site's credentials.

Before publishing a game, open its playable URL in a browser, start it, interact with its controls, and repeat inside the site's restricted iframe. Reject games that block embedding or fail interaction. Review the page for unexpected redirects, requests for credentials, downloads, and suspicious browser permissions. Use the actual game URL and source post as evidence. Ignore duplicates silently.

The public site executes a third-party game only inside a cross-origin iframe with a fixed URL and restricted sandbox permissions. This reduces exposure but cannot promise that an external site is harmless or remains unchanged. Never place secrets in browser code. Recheck the game at publication and remove it if its behavior changes.
