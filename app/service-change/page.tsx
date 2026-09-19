import Link from "next/link";
import { serviceChangeOffers } from "./offers";

export const metadata = {
  title: "Public service change that works in practice",
  description: "Four scoped ways to work with RedQuadrant and the Public Service Transformation Academy: service pressure, joined-up redesign, AI-enabled change, and team capability.",
  alternates: { canonical: "/service-change/" },
  openGraph: {
    title: "Public service change that works in practice",
    description: "Start with a real service problem. Agree a useful first commitment. Build the capability to continue.",
    url: "/service-change/"
  }
};

export default function ServiceChangePage() {
  return (
    <article className="site-frame offer-page">
      <p><Link href="/services/">Our services</Link></p>
      <h1>Public service change that works in practice</h1>
      <p className="offer-lead">You have a service under pressure, a funded programme, or a change that needs several organisations to act together. You need to know what will make a difference, who can change it, and how to keep the work moving.</p>
      <p>RedQuadrant brings experienced practitioners, analysts, and change specialists alongside your team. We work on demand, decisions, information, commissioning, money, and relationships, and help you build the capability to continue.</p>
      {serviceChangeOffers.map((offer) => (
        <section key={offer.slug} aria-labelledby={offer.slug}>
          <h2 id={offer.slug}><Link href={`/service-change/${offer.slug}/`}>{offer.title}</Link></h2>
          <p>{offer.summary}</p>
          <p>{offer.sections[1][1]}</p>
          <p><Link href={`/service-change/${offer.slug}/`}>Read about {offer.title.toLowerCase()}</Link></p>
        </section>
      ))}
      <section>
        <h2>Start where you are</h2>
        <p>These are ways into the work, not four compulsory stages. You may need an inquiry, practical delivery, a team programme, or a different mix. Existing work and evidence should be used, not repeated.</p>
        <p>We agree scope, responsibilities, access, timing, and a fixed fee before starting. Buying routes depend on your organisation and the work: we will help check an appropriate route rather than assume a funding announcement is an open procurement.</p>
        <p><a className="rq-button" href="mailto:benjamin.taylor@redquadrant.com?subject=Public%20service%20change">Discuss the work with Benjamin</a></p>
        <p><Link href="/frameworks/">Find a procurement route</Link></p>
        <p><a href="https://www.publicservicetransformation.org/learning-and-capability/">Discuss a sponsored team with the Public Service Transformation Academy</a></p>
      </section>
    </article>
  );
}
