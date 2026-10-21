# On-site game campaign — batch 12

This proposed batch contains 21 distinct creator-hosted browser games. Each has a game-specific Claude-authored creation, feature, visual change, or substantial remake recorded in the creator repository. The exact AI source URLs, observed direct and restricted-player inputs and responses, and cover origins are listed in [batch12.json](batch12.json). The served HTML files match the official creator repository's current main blobs. The covers match the creator's own screenshots byte-for-byte.

The site uses its existing `allow-scripts allow-pointer-lock` player and `no-referrer`. The 21 creator-hosted game files contain no Crayon text. Push Mine was tested with its built-in camera-free Tap mode; Hummingbird was tested with its built-in no-microphone mouse mode. Neither requires a permission change to play in the restricted player. No human multiplayer mode is claimed.

The proposed slugs and exact destinations were absent from main `80a20797a4a3459b463b2d6c17f668405b4974f4`, and public routes returned 404 before release. Independent Grok 4.7 High review approved all 21 entries at evidence revision 2. CI, production deployment, and live verification remain separate gates.
