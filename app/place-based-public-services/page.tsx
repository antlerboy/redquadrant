import Link from "next/link";

export const metadata = {
  title: "Place-based public services",
  description: "People use services where they live. The council, health service, and voluntary organisations each see part of what happens.",
  alternates: { canonical: "/place-based-public-services/" },
};

export default function Page() {
  return (
    <article className="site-frame offer-page">
      <h1>Place-based public services</h1>
      <p className="offer-lead">People use services where they live. The council, health service, and voluntary organisations each see part of what happens.</p>
      <p>A housing officer may see a tenancy problem while a carer sees someone struggling to stay at home. We help partners follow a situation across their different responsibilities, hear the people affected, and agree who can make a change.</p>
      <ul>
        <li><Link href="/system-leadership">Working across a partnership</Link></li>
      </ul>
      <p><a href="mailto:benjamin.taylor@redquadrant.com">Email Benjamin Taylor</a> about this work.</p>
      <p><Link href="/frameworks/">Procurement frameworks</Link> · <Link href="/toolshed/">RedQuadrant Tool Shed</Link></p>
    </article>
  );
}
