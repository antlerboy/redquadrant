import type { Metadata } from "next";
import { ContactBand, PageHero } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Local government reorganisation hub",
  description:
    "Practical support for local government reorganisation, from business case and design through vesting day and beyond.",
  alternates: { canonical: "/lgrhub" },
};

const partnershipModels = [
  {
    title: "Strategic advisory",
    text: "Independent challenge for political and managerial leaders: assumptions, choices, risks, sequencing and the institutional capability the new council will need.",
  },
  {
    title: "Integrated delivery",
    text: "Senior practitioners embedded with the programme, working across workstreams and boundaries to turn design decisions into an operable organisation.",
  },
  {
    title: "Targeted specialist support",
    text: "Focused expertise in finance, social care, digital, governance, organisational design, service integration, communications or programme recovery.",
  },
  {
    title: "Innovation and long-term transformation",
    text: "Using reorganisation as a platform for place-based change, new relationships with communities and partners, prevention and better public value.",
  },
] as const;

export default function LgrHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Local government reorganisation"
        title="From business case to Day One — and beyond."
        introduction="Reorganisation can create a new legal entity on a fixed date. Building a council that works as one institution, earns trust and improves outcomes takes a different kind of work."
      />

      <section className="content-section">
        <div className="shell lgr-intro-grid">
          <blockquote>
            Vesting day is fixed. The hardest problems are rarely the ones receiving the most programme attention.
          </blockquote>
          <div>
            <p>Governance, finance, HR and technology all have to be ready. But the deeper challenge is structural and relational: different histories, political expectations, service cultures, data, contracts and accountabilities must become a coherent institution while services continue every day.</p>
            <p>RedQuadrant helps programmes build that institutional capability. We connect the formal reorganisation plan to service reality, relationships and the choices that determine whether the new authority merely starts — or starts well.</p>
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="shell">
          <blockquote>
            Treat Day One as a necessary milestone, not the definition of success.
          </blockquote>
        </div>
      </section>

      <section className="content-section warm">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A whole-transition view</p>
              <h2>Four connected stages.</h2>
            </div>
            <p>A strong programme keeps statutory, operational and transformational work in view at the same time. Decisions made early either create or constrain the new council&apos;s future choices.</p>
          </div>
          <div className="timeline">
            <article><span className="step">01</span><h3>Case and intent</h3><p>Clarify the outcomes, principles, options and evidence. Surface political and managerial assumptions before they harden into programme architecture.</p></article>
            <article><span className="step">02</span><h3>Design and mobilisation</h3><p>Translate intent into governance, workstreams, accountabilities, target operating choices and a sequence that can survive contact with reality.</p></article>
            <article><span className="step">03</span><h3>Safe Day One</h3><p>Protect continuity, legal readiness and critical services while joining people, data, systems, contracts and decisions around a shared operational picture.</p></article>
            <article><span className="step">04</span><h3>One institution</h3><p>Move from inherited arrangements to a coherent culture, service model and relationship with place — learning and adapting beyond vesting day.</p></article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Ways to work together</p>
              <h2>Proportionate support, built around your programme.</h2>
            </div>
            <p>We can challenge from the edge, lead defined work or become part of the programme team. In each model, senior people remain close to delivery.</p>
          </div>
          <div className="card-grid two">
            {partnershipModels.map((model, index) => (
              <article className="info-card" key={model.title}>
                <p className="card-number">{String(index + 1).padStart(2, "0")}</p>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section dark">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Track record</p>
              <h2>Fast, senior work when decisions cannot wait.</h2>
            </div>
            <p>Our model is lean and flat. The people framing the work are the people who do it, so time and budget go into useful analysis, facilitation and implementation.</p>
          </div>
          <div className="card-grid">
            <article className="info-card"><p className="card-number">Essex</p><h3>Evidence at pace</h3><p>Producing a substantive reorganisation evidence base in seven weeks, bringing complex service, place and organisational information into a usable decision frame.</p></article>
            <article className="info-card"><p className="card-number">Cambridgeshire</p><h3>Social care blueprint</h3><p>Developing a practical blueprint for social care within a changing local government landscape, linking statutory duty, service practice and future operating choices.</p></article>
            <article className="info-card"><p className="card-number">Lancashire</p><h3>Comparable options</h3><p>Creating a 39-worksheet model in five weeks so leaders could compare structural scenarios through a consistent, transparent evidence base.</p></article>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell service-detail-grid">
          <div>
            <p className="eyebrow">What comes next</p>
            <h2>Questions worth asking now.</h2>
          </div>
          <div className="service-stack">
            <section>
              <h3>What has to be common — and what should remain local?</h3>
              <p>Uniformity is not the same as coherence. We help teams distinguish genuine integration needs from choices that can remain closer to communities and services.</p>
            </section>
            <section>
              <h3>Where are inherited assumptions driving the design?</h3>
              <p>Legacy structures, systems and professional norms easily become invisible requirements. Making them explicit creates room for better options.</p>
            </section>
            <section>
              <h3>How will the programme learn?</h3>
              <p>Reorganisation creates new information every week. Governance needs a disciplined way to absorb evidence, adapt plans and make decisions without losing pace.</p>
            </section>
            <section>
              <h3>What will make this feel like one council?</h3>
              <p>People experience the new institution through leadership behaviour, decisions, working relationships and service interactions — not through an organisation chart.</p>
            </section>
          </div>
        </div>
      </section>

      <ContactBand
        title="Use reorganisation to build the council you will need next."
        text="We can help at business-case, design, mobilisation, implementation or recovery stage — as an independent adviser or part of the delivery team."
      />
    </>
  );
}
