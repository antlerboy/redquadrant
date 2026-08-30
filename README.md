# RedQuadrant website test

A code-controlled, close copy of the current RedQuadrant Wix website, for review on GitHub Pages. This is not a redesign: the live Wix site's layout, content, imagery, typography and desktop proportions are the reference.

## What this version includes

- Close reproductions of Home, Services, People, LGR Hub, Frameworks, Join us, Design, Newsletter, Methodology and the Carbon Reduction Plan.
- Preserved current and legacy routes, including `/commissioning`, `/customer-focus`, `/libraries`, `/transformation-and-change`, `/digital` and `/housing`.
- The same desktop visual frame, brand fonts, colours, imagery and content hierarchy as Wix, with responsive reflow for smaller screens.
- Per-page titles, descriptions, canonical URLs and organisation structured data.
- `noindex` and a restrictive `robots.txt` while the GitHub test duplicates the live website.
- A very small magenta feedback dot at bottom right. Hover, focus or tap reveals its purpose; it opens the single running GitHub feedback issue.
- The RedQuadrant Mailchimp signup form on `/newsletter`, posting directly to the existing RedQuadrant list.
- No Wix login or `My Subscriptions` pages or links.
- A GitHub Pages workflow for a free test deployment.
- A separate pull-request quality workflow that lints and builds the static site before merge.

## Corrections made

- Financial Times / Statista recognition is consistently stated as every year since 2018.
- Client return rate is consistently 96.8%.
- The duplicated people/HR copy under digital change has been replaced with appropriate digital-change material.
- Repeated LGR Hub introductory and implementation passages have been edited once, conservatively; replacement copy can follow.
- The Services page has one footer, supplied by the shared site layout.
- `RedQuadrant` is used consistently on the recruitment page.
- Gallery captions and image descriptions follow one consistent scheme.
- Page titles and subjects have been aligned while existing URLs have been retained where practical.

## Update discipline

Every website iteration must include a quick stale-content review rather than simply adding the new change. Check at least:

- frameworks and procurement routes, including expired framework versions;
- named people, roles and contact details;
- programme, academy and event dates, prices and enrolment language;
- statistics, awards and evidence claims;
- time-sensitive recruitment wording;
- external links and calls to action.

Remove or rewrite information that is clearly no longer current. Where current status cannot be established safely, record it in the running feedback issue rather than guessing.

The home-page `Latest news and social media` panel is deliberately editorial rather than chronological. Keep exactly three strong current items in `app/latest-data.ts`, drawn as useful from Benjamin Taylor's LinkedIn, `syscoi.com`, `chosen-path.org`, RedQuadrant, Quadrant Resourcing and the Public Service Transformation Academy's social/news channels. Prefer relevance to RedQuadrant's live work over raw recency, and replace items when they stop being timely.

The local-government Christmas quiz is a permanent seasonal rule in the site code. It appears automatically from 25 November through 5 January and remains hidden for the rest of the year. Do not remove that rule in later iterations.

## Local review

```bash
npm ci
npm run dev
```

Open the local address printed by Next.js. For production checks:

```bash
npm run lint
npm run build
GITHUB_PAGES_BASE_PATH=/redquadrant npm run build:pages
```

## One-time GitHub setup

The repository is `antlerboy/redquadrant`. In **Settings → Pages**, choose **GitHub Actions** as the source if it is not already selected.

The expected test address is `https://antlerboy.github.io/redquadrant/`.

Website comments belong in the single running feedback thread: `https://github.com/antlerboy/redquadrant/issues/1`. The concealed dot on every page opens that issue directly, matching the pattern used for PSTA and The Necessary Tangle.

## Newsletter form

The signup form in `app/newsletter/page.tsx` uses the existing RedQuadrant Mailchimp audience action and field names. It was recovered from the email thread `RedQuadrant Website - Newsletter link` sent to Natasa, and is deliberately implemented as ordinary HTML so it remains easy to inspect and maintain. Do not replace the Mailchimp audience identifiers without checking the account first.

## Precision design control

Natasa's principal controls are in `app/globals.css`. The shared brand variables are at the top; every major page region also has a stable semantic class. This permits one-pixel or one-property adjustments without fighting a page builder or changing unrelated pages.

## Before production

- Replace the remote Wix image and font URLs with owned source files in the repository.
- Submit a controlled test signup and confirm it arrives in the intended Mailchimp audience.
- Confirm framework membership and contact details.
- Add the current privacy notice as an owned file or stable link.
- Remove test `noindex` metadata and update `robots.ts` only when this site replaces the live site.
- Test redirects from every Wix URL before changing DNS.

This repository does not change Wix, `redquadrant.com`, `transduction.systems`, PSTA, email or DNS.
