/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { operationsPeople, people } from "../site-data";

export const metadata: Metadata = {
  title: "People",
  description: "Meet RedQuadrant's managing partners, consultants and operations team.",
  alternates: { canonical: "/people" },
};

export default function PeoplePage() {
  const columns = [people.slice(0, 4), people.slice(4, 8), people.slice(8, 12)];
  return (
    <section className="people-page site-frame">
      <h1 className="visually-hidden">People at RedQuadrant</h1>
      <div className="people-list">
        {columns.map((column, index) => (
          <div className="person-column" key={index}>
            {column.map((person) => (
              <article className="person" key={person.name}>
                <h2>{person.name}</h2>
                <p>{person.role}</p>
                {person.phone && <a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>}
                {person.email && <a href={`mailto:${person.email}`}>{person.email}</a>}
              </article>
            ))}
          </div>
        ))}
      </div>

      <div className="people-operations">
        <img src="https://static.wixstatic.com/media/12b1f3_212b6fd363b140d38ff1fc1915b084e7~mv2.jpeg/v1/fill/w_576,h_406,al_c,q_85,enc_avif,quality_auto/12b1f3_212b6fd363b140d38ff1fc1915b084e7~mv2.jpeg" alt="RedQuadrant operations team working together" />
        <div className="operations-column">
          <h2>All admin enquiries</h2>
          <p><a href="mailto:operations@redquadrant.com">operations@redquadrant.com</a></p>
          <h2>Legal and financial queries</h2>
          <p><a href="mailto:accounts@redquadrant.com">accounts@redquadrant.com</a></p>
          <article className="person operation-person">
            <h2>{operationsPeople[0].name}</h2><p>{operationsPeople[0].role}</p><a href={`mailto:${operationsPeople[0].email}`}>{operationsPeople[0].email}</a>
          </article>
        </div>
        <div className="operations-column">
          <h2>Invitations to tender</h2>
          <p><a href="mailto:tenders@redquadrant.com">tenders@redquadrant.com</a></p>
          <h2>Resourcing</h2>
          <p><a href="mailto:resourcing.requirements@redquadrant.com">resourcing.requirements@redquadrant.com</a></p>
          <article className="person operation-person">
            <h2>{operationsPeople[1].name}</h2><p>{operationsPeople[1].role}</p><a href={`mailto:${operationsPeople[1].email}`}>{operationsPeople[1].email}</a>
          </article>
        </div>
      </div>
    </section>
  );
}
