import type { Metadata } from "next";
import { ContactBand, PageHero } from "../_components/SiteChrome";
import { frameworkGroups } from "../site-data";

export const metadata: Metadata = {
  title: "Public sector frameworks",
  description:
    "Public sector procurement frameworks and routes to commission RedQuadrant consulting, digital and transformation support.",
  alternates: { canonical: "/frameworks" },
};

export default function FrameworksPage() {
  return (
    <>
      <PageHero
        eyebrow="Frameworks"
        title="Straightforward routes to commission the right expertise."
        introduction="RedQuadrant is available through a broad range of public sector frameworks. Tell us what you need and we can help identify the most proportionate compliant route."
      />
      <section className="content-section">
        <div className="shell framework-list">
          {frameworkGroups.map((group) => (
            <article className="framework-row" key={group.name}>
              <h2>{group.name}</h2>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section warm">
        <div className="shell section-heading">
          <div>
            <p className="eyebrow">Before you procure</p>
            <h2>Start with the outcome and the constraints.</h2>
          </div>
          <p>Framework availability and lot coverage change. We will confirm current status, scope and call-off requirements before recommending a route. Email <a href="mailto:tenders@redquadrant.com">tenders@redquadrant.com</a> with your timescale, requirement and preferred framework.</p>
        </div>
      </section>
      <ContactBand title="Need to mobilise quickly?" text="Send us the requirement, procurement route and date by which you need a team in place." />
    </>
  );
}
