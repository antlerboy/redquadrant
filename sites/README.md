# Sites reconciliation, 8 September 2026

The main application at the repository root remains the current RedQuadrant website. Its newer GitHub changes have not been replaced with an older hosted snapshot.

- `campaign-links/`: the complete current source for the separate campaign-domain host, Site source commit `9a01ec8327994807a8ec52229dc01bbfdfecb133`. Keep its existing hosting while it serves systemleadership.co.uk, systemleadership.com, systemsleadership.co.uk, and their configured www aliases. This import is not a hosting migration.
- `retired-website-test/`: an exact source snapshot of the redundant RedQuadrant test Site, commit `9c55448bbe5947e4093a25bd0e8e18327f2eae61`. Historical recovery copy only; do not deploy it over the newer root application. It has no attached custom domains or database.

These are separate packages, excluded from the root TypeScript and lint projects. Their original `.openai/hosting.json` files are retained as provenance, not instructions to create another Site. No access tokens or runtime secrets are stored here.
