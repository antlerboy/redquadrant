import Link from "next/link";

export const metadata = {
  title: "Managing a change programme",
  description: "RedQuadrant practitioners join public service teams to help carry through a change that has already been agreed.",
  alternates: { canonical: "/making-change-happen/" },
};

export default function Page() {
  return (
    <article className="site-frame offer-page">
      <h1>Managing a change programme</h1>
      <p className="offer-lead">RedQuadrant practitioners join public service teams to help carry through a change that has already been agreed.</p>
      <p>A programme may need a delivery lead for a few months, someone to resolve a delay between services, or an independent review of what is slipping. We agree who is responsible for the work and who will take it on when the assignment ends.</p>
      <ul>
        <li><Link href="/offers/transformation-under-pressure">Programme support and fees</Link></li>
        <li><Link href="/lgrhub">Council reorganisation projects</Link></li>
      </ul>
      <p><a href="mailto:benjamin.taylor@redquadrant.com">Email Benjamin Taylor</a> about this work.</p>
      <p><Link href="/frameworks/">Procurement frameworks</Link> · <Link href="/toolshed/">RedQuadrant Tool Shed</Link></p>
    </article>
  );
}
