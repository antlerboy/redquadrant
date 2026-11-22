import Link from "next/link";

export const metadata = {
  title: "Children’s social care",
  description: "We help councils plan how many places and what kinds of support children in care and care leavers need.",
  alternates: { canonical: "/childrens-social-care/" },
};

export default function Page() {
  return (
    <article className="site-frame offer-page">
      <h1>Children’s social care</h1>
      <p className="offer-lead">We help councils plan how many places and what kinds of support children in care and care leavers need.</p>
      <p>Fiona Fleming works with councils, providers, families, and young people on placement markets, early help, short breaks, and joint commissioning. A review can examine why the right placement is hard to find, or how families reach support before they reach crisis.</p>
      <ul>
        <li><Link href="/services#childrens-services">Children’s services and commissioning</Link></li>
        <li><Link href="/commissioning/">Commissioning support</Link></li>
      </ul>
      <p><a href="mailto:fiona.fleming@redquadrant.com">Email Fiona Fleming</a> about this work.</p>
      <p><Link href="/frameworks/">Procurement frameworks</Link> · <Link href="/toolshed/">RedQuadrant Tool Shed</Link></p>
    </article>
  );
}
