import Link from "next/link";

export const metadata = {
  title: "Adult social care",
  description: "We work with councils on the support adults receive at home and in residential care, how it is arranged, and what it costs.",
  alternates: { canonical: "/adult-social-care/" },
};

export default function Page() {
  return (
    <article className="site-frame offer-page">
      <h1>Adult social care</h1>
      <p className="offer-lead">We work with councils on the support adults receive at home and in residential care, how it is arranged, and what it costs.</p>
      <p>In Sefton, Halton, and Cheshire East, we examined the cost of care. In Birmingham, Nataša Sears drew the routes people take through community support. The drawing follows what happens before somebody needs a formal care service.</p>
      <ul>
        <li><Link href="/services#adult-social-care">Adult social care projects</Link></li>
        <li><Link href="/design/visual-inquiry/">The Birmingham drawings</Link></li>
      </ul>
      <p><a href="mailto:frank.curran@redquadrant.com">Email Frank Curran</a> about this work.</p>
      <p><Link href="/frameworks/">Procurement frameworks</Link> · <Link href="/toolshed/">RedQuadrant Tool Shed</Link></p>
    </article>
  );
}
