import type { Metadata } from "next";
import { ContactBand, PageHero } from "../_components/SiteChrome";
import { operationsPeople, people } from "../site-data";

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the senior practitioners and operations team behind RedQuadrant's public service transformation work.",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title="The people you meet are the people who do the work."
        introduction="RedQuadrant is a deliberately lean community of senior public service practitioners. We combine core leadership with a much wider network, assembling the right expertise around each problem."
      />
      <section className="content-section">
        <div className="shell">
          <div className="people-grid">
            {people.map((person) => (
              <article className="person-card" key={person.name}>
                <p className="eyebrow">RedQuadrant practitioner</p>
                <h2>{person.name}</h2>
                <p className="person-role">{person.role}</p>
                <p className="person-focus">{person.focus}</p>
                {(person.phone || person.email) && (
                  <p className="person-contact">
                    {person.phone && <a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>}
                    {person.email && <a href={`mailto:${person.email}`}>{person.email}</a>}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section warm">
        <div className="shell section-heading">
          <div>
            <p className="eyebrow">Operations</p>
            <h2>The team that makes the work possible.</h2>
          </div>
          <div>
            {operationsPeople.map((person) => (
              <p key={person.name}><strong>{person.name}</strong><br />{person.role}</p>
            ))}
            <p>
              General operations: <a href="mailto:ops@redquadrant.com">ops@redquadrant.com</a><br />
              Accounts: <a href="mailto:accounts@redquadrant.com">accounts@redquadrant.com</a><br />
              Tenders: <a href="mailto:tenders@redquadrant.com">tenders@redquadrant.com</a>
            </p>
          </div>
        </div>
      </section>
      <ContactBand
        title="Need a particular kind of experience?"
        text="Tell us what the work demands. We can draw from a network of more than 2,000 specialists and assemble a senior, proportionate team."
      />
    </>
  );
}
