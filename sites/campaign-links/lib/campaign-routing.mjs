export const campaigns = {
  "systemleadership.com": "https://redquadrant.com/system-leadership/",
  "systemleadership.co.uk": "https://redquadrant.com/system-leadership/",
  "systemsleadership.co.uk": "https://redquadrant.com/system-leadership/",
  "systemleadership.academy": "https://www.publicservicetransformation.org/systems-leadership-academy/",
  "systemsleadership.academy": "https://www.publicservicetransformation.org/systems-leadership-academy/",
  "customerledtransformation.com": "https://redquadrant.com/customer-led-transformation/",
};

export function campaignDestination(request) {
  const incoming = new URL(request.url);
  const candidates = [incoming.hostname, request.headers.get("host"), request.headers.get("x-forwarded-host")];
  for (const candidate of candidates) {
    if (!candidate) continue;
    const hostname = candidate.toLowerCase().replace(/:\d+$/, "").replace(/\.$/, "").replace(/^www\./, "");
    if (!Object.hasOwn(campaigns, hostname)) continue;
    const target = new URL(campaigns[hostname]);
    target.search = incoming.search;
    return target.href;
  }
  return null;
}
