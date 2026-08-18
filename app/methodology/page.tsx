import type { Metadata } from "next";
import { ContactBand, PageHero } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Methods for public service transformation",
  description: "RedQuadrant's practical approach to systems thinking, service design, organisational change and implementation.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Methodology"
        title="Use enough method to see and shift the system."
        introduction="Methods are useful when they improve attention, judgement and action. We combine approaches rather than imposing a branded sequence on every problem."
      />
      <section className="content-section">
        <div className="shell">
          <div className="card-grid">
            <article className="info-card"><p className="card-number">01</p><h2>Understand</h2><p>Purpose, outcomes, demand, lived experience, performance, history, relationships and constraints.</p></article>
            <article className="info-card"><p className="card-number">02</p><h2>Reframe</h2><p>Make assumptions visible, widen the option space and identify the mechanisms most likely to create movement.</p></article>
            <article className="info-card"><p className="card-number">03</p><h2>Design</h2><p>Bring strategy, operating model, service journey, technology and organisational capability into one practical design.</p></article>
            <article className="info-card"><p className="card-number">04</p><h2>Try</h2><p>Test at a useful scale, learn quickly and avoid turning early ideas into irreversible programme commitments.</p></article>
            <article className="info-card"><p className="card-number">05</p><h2>Implement</h2><p>Stay close to the work, decisions and people needed to make the design operable under real conditions.</p></article>
            <article className="info-card"><p className="card-number">06</p><h2>Learn</h2><p>Build feedback and adaptation into governance so change remains directed without pretending the future is knowable.</p></article>
          </div>
        </div>
      </section>
      <ContactBand title="Need a method for a live problem?" text="We can help you choose and apply approaches without letting the method take over the work." />
    </>
  );
}
