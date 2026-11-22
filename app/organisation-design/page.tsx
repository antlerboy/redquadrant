import Link from "next/link";

export const metadata = {
  title: "Organisation design",
  description: "We help public service leaders decide which decisions belong with frontline teams and which need to be taken across a service.",
  alternates: { canonical: "/organisation-design/" },
};

export default function Page() {
  return (
    <article className="site-frame offer-page">
      <h1>Organisation design</h1>
      <p className="offer-lead">We help public service leaders decide which decisions belong with frontline teams and which need to be taken across a service.</p>
      <p>Take two teams that both check the same case. Moving one team on an organisation chart leaves the double check in place. We trace why both checks exist, who needs the information, and what each team would need in order to change the arrangement.</p>
      <ul>
        <li><Link href="/offers/transformation-under-pressure">Support for a service redesign</Link></li>
        <li><Link href="/resource-optimisation/">Examining workload and capacity</Link></li>
      </ul>
      <p><a href="mailto:benjamin.taylor@redquadrant.com">Email Benjamin Taylor</a> about this work.</p>
      <p><Link href="/frameworks/">Procurement frameworks</Link> · <Link href="/toolshed/">RedQuadrant Tool Shed</Link></p>
    </article>
  );
}
