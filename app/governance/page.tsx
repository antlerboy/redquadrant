import Link from "next/link";

export const metadata = {
  title: "Governance",
  description: "We help boards and partnerships work out who can make a decision and what they need to know to make it well.",
  alternates: { canonical: "/governance/" },
};

export default function Page() {
  return (
    <article className="site-frame offer-page">
      <h1>Governance</h1>
      <p className="offer-lead">We help boards and partnerships work out who can make a decision and what they need to know to make it well.</p>
      <p>We follow a decision through the papers, meetings, and informal conversations that shape it. If a board keeps receiving the same unresolved issue, we can work with members and officers on what to delegate, what to escalate, and what to record.</p>
      <ul>
        <li><Link href="/offers/governance-and-judgement">Board and partnership working sessions</Link></li>
        <li><Link href="/system-leadership/">Decisions across organisations</Link></li>
      </ul>
      <p><a href="mailto:benjamin.taylor@redquadrant.com">Email Benjamin Taylor</a> about this work.</p>
      <p><Link href="/frameworks/">Procurement frameworks</Link> · <Link href="/toolshed/">RedQuadrant Tool Shed</Link></p>
    </article>
  );
}
