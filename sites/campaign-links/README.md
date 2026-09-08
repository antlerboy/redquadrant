# RedQuadrant campaign links

Public HTTPS campaign domains redirect permanently (HTTP 301) to their current offer pages. Both the bare domain and www variants are accepted. Old paths lead to the offer landing page; query parameters are retained. Destinations are an explicit allowlist in `lib/campaign-routing.mjs`.

The default Sites URL provides direct links. Unknown hosts never control redirect destinations. The initial five-minute redirect cache allows straightforward correction.

Run `node --test tests/campaign-routing.test.mjs` for mapping and input validation, then use the retained Sites build and packaging scripts. DNS and certificate state is managed through Sites custom domains and the existing DNS provider. Do not change mail records.
