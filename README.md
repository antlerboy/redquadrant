# RedQuadrant website test

An independent, code-controlled rebuild of the current RedQuadrant Wix website. It is designed for review on GitHub Pages before any decision about production hosting or DNS.

## What this version includes

- Responsive pages for Home, Services, People, LGR Hub, Frameworks, Join us, Design, Newsletter, Methodology and the Carbon Reduction Plan.
- Preserved legacy URLs for `/libraries`, `/transformation-and-change`, `/digital` and `/housing`, with titles and content aligned to their actual subject.
- Central design controls in `app/globals.css`, including brand colours, type scales, page width, gutters, spacing and breakpoints.
- A mobile reading order designed deliberately rather than obtained by shrinking desktop columns.
- Per-page titles and descriptions, organisation structured data and canonical URLs.
- `noindex` and a restrictive `robots.txt` while the GitHub test duplicates the live website.
- A very small magenta feedback dot at bottom right. Hover, focus or tap reveals its purpose; it opens the single running GitHub feedback issue.
- A GitHub Pages workflow for a free test deployment.

## Corrections made

- Financial Times / Statista recognition is consistently stated as every year since 2018.
- Client return rate is consistently 96.8%.
- The duplicated people/HR copy under digital change has been replaced with genuine digital material drawn from RedQuadrant's Central Bedfordshire, Lewisham housing and adult social care resources.
- The LGR Hub introduction and implementation material have been consolidated into a single editorial flow.
- The Services page has one footer, supplied by the shared site layout.
- `RedQuadrant` is used consistently on the recruitment page.
- Gallery clients, projects, formats, years, captions and image descriptions use one consistent scheme.
- The `/housing` page now describes housing rather than commissioning.

## Local review

```bash
npm ci
npm run dev
```

Open the local address printed by Vite. For production checks:

```bash
npm run lint
npm run build
GITHUB_PAGES_BASE_PATH=/redquadrant npm run build:pages
```

## One-time GitHub setup

The repository is `antlerboy/redquadrant`. In **Settings → Pages**, choose **GitHub Actions** as the source if it is not already selected.

The expected test address is `https://antlerboy.github.io/redquadrant/`.

Website comments belong in the single running feedback thread: `https://github.com/antlerboy/redquadrant/issues/1`. The concealed dot on every page opens that issue directly, matching the pattern used for PSTA and The Necessary Tangle.

## Newsletter archive

The current Wix page injects Mailchimp content in the browser, so the Mailchimp account-specific archive HTML is not present in the public page response. Paste the trusted code from the RedQuadrant Mailchimp account between the backticks in:

`app/newsletter/mailchimp-archive.ts`

The archive is deliberately isolated from the page layout, making later design changes safer.

## Precision design control

Natasa's highest-leverage controls are at the top of `app/globals.css`:

- `--rq-*`: RedQuadrant colour tokens
- `--shell`: maximum page width
- `--gutter`: side clearance
- `--section`: vertical section rhythm
- `--display`, `--heading`, `--subheading`, `--body`: type scale

Every major component also has a stable semantic class. This allows a one-pixel or one-property adjustment without fighting a page builder or changing unrelated pages.

## Before production

- Replace the temporary remote Wix image URLs with owned source files in the repository.
- Paste and test the Mailchimp archive HTML.
- Confirm framework membership and contact details.
- Add the current privacy notice as an owned file or stable link.
- Remove test `noindex` metadata and update `robots.ts` only when this site replaces the live site.
- Test redirects from every Wix URL before changing DNS.

This repository does not change Wix, `redquadrant.com`, `transduction.systems`, PSTA, email or DNS.
