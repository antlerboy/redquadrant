import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const workerPromise = import(workerUrl.href).then(module => module.default);

async function render(pathname) {
  const worker = await workerPromise;
  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  return { response, html: await response.text() };
}

test("renders development preview metadata", async () => {
  const { response, html } = await render("/");

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(html, developmentPreviewMeta);
});

test("homepage links to LGR and training without the old IR35 feature", async () => {
  const { response, html } = await render("/");

  assert.equal(response.status, 200);
  assert.match(html, /href=["']\/lgrhub["']/i);
  assert.match(html, /href=["']\/training-and-development["']/i);
  assert.match(html, /Local government reorganisation/i);
  assert.match(html, /video\.wixstatic\.com\/video\/11062b_4067e167d0a04120a48d356d5dc6b465\/1080p\/mp4\/file\.mp4/i);
  assert.doesNotMatch(html, /Dealing with IR35/i);
});

test("renders the new training and development page", async () => {
  const { response, html } = await render("/training-and-development");

  assert.equal(response.status, 200);
  assert.match(html, /Build the capability to transform your own services/i);
  assert.match(html, /Level 7 systems thinking practitioner apprenticeship/i);
  assert.match(html, /Public Service Transformation Academy/i);
});

test("LGR hub includes the current four-video selection", async () => {
  const { response, html } = await render("/lgrhub");

  assert.equal(response.status, 200);
  for (const videoId of ["YDhsdGVVBsg", "SEUi5V5GEWE", "LCh6cCjUaPI", "mTWVgKTmYM8"]) {
    assert.match(html, new RegExp(`youtube-nocookie\\.com/embed/${videoId}`, "i"));
  }
});

test("services keeps partner logos separate from explanatory copy", async () => {
  const { response, html } = await render("/services");

  assert.equal(response.status, 200);
  assert.match(html, /class=["']service-logo-field/i);
  assert.match(html, /Explore training and development/i);
  assert.doesNotMatch(html, /outside of IR35 considerations/i);
});

test("footer offers the toolshed without consultancy mode", async () => {
  const { response, html } = await render("/");

  assert.equal(response.status, 200);
  assert.match(html, /Sample the RedQuadrant toolshed/i);
  assert.doesNotMatch(html, /Consultancy mode/i);
});

test("origin story has one subtle, accessible route", async () => {
  const { response, html } = await render("/");

  assert.equal(response.status, 200);
  assert.match(html, /Our unlikely beginning/i);
  assert.match(html, /aria-label=["']Read the RedQuadrant origin story["']/i);
  assert.doesNotMatch(html, /logo quadrant/i);
});

test("design gallery uses a consistent responsive structure", async () => {
  const { response, html } = await render("/designrichpictures");

  assert.equal(response.status, 200);
  assert.match(html, /RedQuadrant design/i);
  assert.match(html, /class=["']gallery-heading["']/i);
  assert.match(html, /class=["']gallery-grid gallery-grid-/i);
});
