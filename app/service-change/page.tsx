import Link from "next/link";
import { serviceChangeOffers } from "./offers";

export const metadata = {
  title: "Public service change projects",
  description: "Four projects for public service teams reviewing demand, redesigning a service, trying AI, or training staff.",
  alternates: { canonical: "/service-change/" },
  openGraph: {
    title: "Public service change projects",
    description: "What a RedQuadrant service review, redesign, technology assessment, or team learning programme involves.",
    url: "/service-change/"
  }
};

export default function ServiceChangePage() {
  return (
    <article className="site-frame offer-page">
      <p><Link href="/services/">Our services</Link></p>
      <h1>Public service change projects</h1>
      <p className="offer-lead">RedQuadrant and the Public Service Transformation Academy offer four kinds of project for public bodies. They range from a short investigation of rising demand to a twelve-week programme in which a team tests a change at work.</p>

      {serviceChangeOffers.map((offer) => (
        <section key={offer.slug} aria-labelledby={offer.slug}>
          <h2 id={offer.slug}><Link href={`/service-change/${offer.slug}/`}>{offer.title}</Link></h2>
          <p>{offer.summary}</p>
          <p>{offer.sections[1][1]}</p>

        </section>
      ))}
      <section>
        <h2>Commissioning a project</h2><p><Link href="/practice-evidence/">Read evidence from practice</Link>, for examples of what clients asked us to do and what happened.</p>

        <p>We agree what the team will do, the people and information it needs, the timetable, and a fixed fee before work begins.</p>
        <p><a className="rq-button" href="mailto:benjamin.taylor@redquadrant.com?subject=Public%20service%20change">Discuss the work with Benjamin</a></p>
        <p><Link href="/frameworks/">Find a procurement route</Link></p>
        <p><a href="https://www.publicservicetransformation.org/learning-and-capability/">Discuss a sponsored team with the Public Service Transformation Academy</a></p>
      </section>
    </article>
  );
}
