/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { serviceImages } from "../site-data";

export const metadata: Metadata = {
  title: "Training and development",
  description:
    "Practical leadership, systems thinking, commissioning and transformation development for public-service people and organisations.",
  alternates: { canonical: "/training-and-development" },
};

const learningAreas = [
  {
    title: "Systems leadership",
    copy: "Create shared purpose, work across boundaries and lead when authority, information and control are distributed.",
  },
  {
    title: "Leading transformation",
    copy: "Build the judgement, resilience and practical methods needed to mobilise and sustain change in complex organisations.",
  },
  {
    title: "Commissioning for outcomes",
    copy: "Move beyond process and compliance to strategic, relational commissioning that responds to complexity and improves outcomes.",
  },
  {
    title: "Organisational development",
    copy: "Connect strategy, leadership, culture and delivery so that new ways of working become part of the organisation, not a temporary initiative.",
  },
  {
    title: "Coaching and mentoring",
    copy: "Give leaders and teams a trusted space to think, test difficult choices and strengthen their practice while the work is live.",
  },
  {
    title: "Transformation practice",
    copy: "Develop hands-on capability in service design, system mapping, adaptive change, programme leadership and sustainable improvement.",
  },
] as const;

const formats = [
  "Focused workshops and practice labs",
  "Open and in-house academies",
  "Nine-month and longer development programmes",
  "Action-learning sets and peer cohorts",
  "One-to-one and team coaching",
  "Blended online and in-person learning",
] as const;

export default function TrainingAndDevelopmentPage() {
  return (
    <div className="training-page">
      <section className="training-hero">
        <div className="site-frame training-hero-grid">
          <div>
            <p className="eyebrow">Training and development</p>
            <h1>Build the capability to transform your own services</h1>
            <p className="training-hero-lede">Public-service change is rarely held back by a shortage of frameworks. The harder task is helping people make good decisions together when the work is contested, uncertain and already under pressure.</p>
            <p>Our programmes combine rigorous ideas with live organisational challenges. Participants learn by applying systems thinking, leadership and transformation practice to the work they are responsible for now.</p>
            <a className="training-primary-link" href="mailto:benjamin.taylor@redquadrant.com?subject=Training%20and%20development">Discuss what your people need</a>
          </div>
          <img src={serviceImages.audience.src} alt={serviceImages.audience.alt} />
        </div>
      </section>

      <section className="training-proof" aria-label="Training track record">
        <div className="site-frame training-proof-grid">
          <div><strong>Thousands</strong><span>of public-service people trained</span></div>
          <div><strong>24 modules</strong><span>in the Leading Transformation curriculum</span></div>
          <div><strong>Over a decade</strong><span>delivering commissioning leadership development</span></div>
        </div>
      </section>

      <section className="site-frame training-intro">
        <div>
          <p className="eyebrow">The useful difference</p>
          <h2>Learning that stays in the system</h2>
        </div>
        <div>
          <p>We design development around the outcomes you need, the work already under way and the conditions people are operating in. That may mean an intensive academy, a team practice lab, a longer cohort programme, coaching alongside delivery, or a combination of all four.</p>
          <p>Experienced practitioners lead the work. They bring theory, direct public-service experience and honest challenge, then help participants turn that learning into changed practice. The aim is not dependence on a course or a consultancy. It is stronger internal judgement, relationships and capability.</p>
        </div>
      </section>

      <section className="training-areas">
        <div className="site-frame">
          <p className="eyebrow">What we develop</p>
          <h2>Capability for difficult, real-world change</h2>
          <div className="training-area-grid">
            {learningAreas.map((area, index) => (
              <article key={area.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-frame training-programmes">
        <div className="training-programme-image">
          <img src={serviceImages.learning.src} alt={serviceImages.learning.alt} />
        </div>
        <div>
          <p className="eyebrow">Established programmes, tailored delivery</p>
          <h2>A strong foundation, adapted to your context</h2>
          <h3>Leading Transformation</h3>
          <p>A 24-module curriculum grounded in systems thinking and practical application: shared purpose, power, complexity, system mapping, organisational design and sustainable change.</p>
          <h3>Commissioning leadership</h3>
          <p>Through the Public Service Transformation Academy, we deliver the Cabinet Office Commissioning Academy and cross-sector programmes focused on outcomes, systems, complexity and collaborative commissioning.</p>
          <h3>Level 7 systems thinking practitioner apprenticeship</h3>
          <p>A route for funded, long-term development that connects advanced systems practice to genuine organisational challenges.</p>
          <h3>Designed with you</h3>
          <p>We can combine existing material with diagnostics, live projects, coaching and specialist input from our national practitioner network.</p>
        </div>
      </section>

      <section className="training-formats">
        <div className="site-frame training-formats-grid">
          <div>
            <p className="eyebrow">How learning can work</p>
            <h2>Choose the shape that fits the challenge</h2>
            <p>We can start small, build a connected programme, or weave development into a wider transformation commission.</p>
          </div>
          <ul>
            {formats.map(format => <li key={format}>{format}</li>)}
          </ul>
        </div>
      </section>

      <section className="site-frame training-next-step">
        <div>
          <p className="eyebrow">Start with the work</p>
          <h2>What must your people be able to do differently?</h2>
          <p>Tell us about the change, the people involved and what is getting in the way. We will help you identify the smallest useful learning intervention, or design a longer programme where that is what the system needs.</p>
        </div>
        <div className="training-contacts">
          <a className="training-primary-link" href="mailto:benjamin.taylor@redquadrant.com?subject=Training%20and%20development">Email Benjamin Taylor</a>
          <a href="https://www.publicservicetransformation.org/" target="_blank" rel="noreferrer">Visit the Public Service Transformation Academy</a>
          <Link href="/services">See our wider services</Link>
        </div>
      </section>
    </div>
  );
}
