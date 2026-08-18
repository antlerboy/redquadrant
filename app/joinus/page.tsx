import type { Metadata } from "next";
import { PageHero } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Join RedQuadrant",
  description:
    "Join RedQuadrant's community of experienced freelance public service consultants and transformation practitioners.",
  alternates: { canonical: "/joinus" },
};

const skills = [
  "Service and systems redesign",
  "Strategy and operating models",
  "Programme and project leadership",
  "Digital, data and technology",
  "Organisational development and change",
  "Commissioning and procurement",
  "Research, insight and evaluation",
  "Facilitation, coaching and learning",
  "Finance and business cases",
  "Design and visual communication",
] as const;

const areas = [
  "Local government",
  "Adult and children's social care",
  "Housing and homelessness",
  "Health and the NHS",
  "Criminal justice",
  "Culture and community",
  "Customer services",
  "Corporate and democratic services",
  "Central government",
  "Charities and social purpose organisations",
] as const;

export default function JoinUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Join us"
        title="Do serious public service work with good people."
        introduction="RedQuadrant works with experienced independent practitioners who bring judgement, craft and curiosity. Our model is lean: no junior leverage, no unnecessary layers, and no distance between the promise and the work."
      />
      <section className="content-section">
        <div className="shell section-heading">
          <div>
            <p className="eyebrow">Our consultant community</p>
            <h2>Independent, connected and close to delivery.</h2>
          </div>
          <div>
            <p>Most of our consultants are freelance specialists with substantial experience inside public services, consulting or both. Teams form around a real requirement and are supported by RedQuadrant&apos;s methods, relationships and operating team.</p>
            <p>We value people who can think systemically, work respectfully with frontline knowledge, explain complexity plainly and stay with the difficult implementation questions.</p>
          </div>
        </div>
        <div className="card-grid two">
          <article className="info-card">
            <p className="card-number">Capabilities</p>
            <h3>Skills we regularly need</h3>
            <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </article>
          <article className="info-card">
            <p className="card-number">Experience</p>
            <h3>Fields we work in</h3>
            <ul>{areas.map((area) => <li key={area}>{area}</li>)}</ul>
          </article>
        </div>
      </section>
      <section className="contact-band">
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow">Introduce yourself</p>
            <h2>Tell us what you are excellent at.</h2>
            <p>Send a concise note with your CV or profile, location, availability and the kind of problems you are best placed to solve.</p>
          </div>
          <a className="button light" href="mailto:recruitment@redquadrant.com">recruitment@redquadrant.com <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
