import { campaignDestination } from "../lib/campaign-routing.mjs";

const html = `<!doctype html><html lang="en-GB"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>RedQuadrant campaign links</title><meta name="robots" content="noindex"><style>body{font:19px/1.65 Arial,sans-serif;color:#303033;max-width:760px;margin:10vh auto;padding:24px}h1{font-size:2.5rem;line-height:1.1}a{color:#b51f37}li{margin:1em 0}</style><main><p>RedQuadrant &amp; PSTA</p><h1>Find the support you need</h1><ul><li><a href="https://redquadrant.com/system-leadership/">Systems leadership</a></li><li><a href="https://www.publicservicetransformation.org/systems-leadership-academy/">Systems Leadership Academy</a></li><li><a href="https://redquadrant.com/customer-led-transformation/">Customer-led transformation</a></li></ul><p><a href="https://greebling.com/">Explore all our websites and resources</a></p></main></html>`;

export function GET(request: Request) {
  const destination = campaignDestination(request);
  if (destination) return new Response(null, { status: 301, headers: { Location: destination, "Cache-Control": "public, max-age=300" } });
  if (new URL(request.url).pathname !== "/") return new Response("Not found", {status:404});
  return new Response(request.method === "HEAD" ? null : html, { headers: { "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex" } });
}
export const HEAD = GET;
