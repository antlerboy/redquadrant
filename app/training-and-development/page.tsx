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
            <p className="training-hero-lede">RedQuadrant trains public servants who commission, manage, or redesign services. Participants bring a piece of work for which they are responsible and try what they learn with their own colleagues.</p>
            <p>We teach through the Public Service Transformation Academy and run courses, coaching, and longer programmes for individual organisations.</p>
            <a className="training-primary-link" href="mailto:benjamin.taylor@redquadrant.com?subject=Training%20and%20development">Email Benjamin about training</a>
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

          <h2>Learning at work</h2>
        </div>
        <div>
          <p>A team redesigning an assessment process can use its own cases to compare what residents and staff experience. A manager preparing to change commissioning arrangements can rehearse the conversation with a provider.</p>
          <p>Participants test an approach at work, discuss what happened with their tutor and peers, and decide which aspects to keep.</p>
        </div>
      </section>

      <section className="training-areas">
        <div className="site-frame">
          <h2>What we teach</h2>
          <div className="training-area-grid">
            {learningAreas.map((area) => (
              <article key={area.title}>
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
          <h2>Training programmes</h2>
          <h3>Leading Transformation</h3>
          <p>A 24-module curriculum grounded in systems thinking and practical application: shared purpose, power, complexity, system mapping, organisational design and sustainable change.</p>
          <h3>Commissioning leadership</h3>
          <p>Through the Public Service Transformation Academy, we deliver the National Commissioning Academy, originally developed by the Cabinet Office, and cross-sector programmes focused on outcomes, systems, complexity and collaborative commissioning.</p>
          <h3>Level 7 systems thinking practitioner apprenticeship</h3>
          <p>Apprentices use systems thinking to investigate an organisational problem as part of their work. Contact us about employer arrangements and funding.</p>
          <h3>Designed with you</h3>
          <p>We can combine existing material with diagnostics, live projects, coaching and specialist input from our national practitioner network.</p>
        </div>
      </section>

      <section className="training-formats">
        <div className="site-frame training-formats-grid">
          <div>
            <h2>Course formats</h2>
            <p>We run individual sessions and longer programmes. Coaching can accompany a service review or redesign.</p>
          </div>
          <ul>
            {formats.map(format => <li key={format}>{format}</li>)}
          </ul>
        </div>
      </section>

      <section className="site-frame training-next-step">
        <div>
          <h2>Commission training</h2>
          <p>Tell Benjamin what your team is working on and who would take part. We can discuss a suitable programme, times, and fees.</p>
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
