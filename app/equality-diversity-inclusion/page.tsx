import Link from "next/link";

export const metadata = {
  title: "Equality, diversity, and inclusion",
  description: "We examine where the design of a service or workplace disadvantages the people who use it.",
  alternates: { canonical: "/equality-diversity-inclusion/" },
};

export default function Page() {
  return (
    <article className="site-frame offer-page">
      <h1>Equality, diversity, and inclusion</h1>
      <p className="offer-lead">We examine where the design of a service or workplace disadvantages the people who use it.</p>
      <p>For a Civil Service assessment centre, we reviewed the impact of its selection arrangements. For the Local Government Association, we reviewed HR practice. Our work also includes leadership training for a police force and a council.</p>
      <ul>
        <li><Link href="/services#equality-diversity-inclusion">Equality, diversity, and inclusion projects</Link></li>
        <li><Link href="/training-and-development">Training and development</Link></li>
      </ul>
      <p><a href="mailto:janice.prentice@redquadrant.com">Email Janice Prentice</a> about this work.</p>
      <p><Link href="/frameworks/">Procurement frameworks</Link> · <Link href="/toolshed/">RedQuadrant Tool Shed</Link></p>
    </article>
  );
}
