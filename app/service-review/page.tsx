import Link from "next/link";

export const metadata = {
  title: "Service review",
  description: "A service review follows what happens when someone asks for help, and what it costs to respond.",
  alternates: { canonical: "/service-review/" },
};

export default function Page() {
  return (
    <article className="site-frame offer-page">
      <h1>Service review</h1>
      <p className="offer-lead">A service review follows what happens when someone asks for help, and what it costs to respond.</p>
      <p>Staff can show us where cases wait, which questions residents have to answer twice, and what happens to a referral. We compare those accounts with service records and follow up the discrepancies before proposing changes.</p>
      <ul>
        <li><Link href="/customer-led-transformation">How we follow a case through a service</Link></li>
        <li><Link href="/resource-optimisation/">How we examine staff time</Link></li>
      </ul>
      <p><a href="mailto:benjamin.taylor@redquadrant.com">Email Benjamin Taylor</a> about this work.</p>
      <p><Link href="/frameworks/">Procurement frameworks</Link> · <Link href="/toolshed/">RedQuadrant Tool Shed</Link></p>
    </article>
  );
}
