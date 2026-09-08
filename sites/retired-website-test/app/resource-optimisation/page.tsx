/* eslint-disable @next/next/no-img-element */

const stages = [
  {
    number: "01",
    title: "Agree the test",
    text: "Name and weight five to seven organisational priorities before the inventory begins. They become the shared test for value – and can be revisited once the work is visible.",
  },
  {
    number: "02",
    title: "Account for the work",
    text: "Build the picture from both directions: everything the organisation says it does, and everything people actually spend time doing. Together, the work packages should account for 100% of available time.",
  },
  {
    number: "03",
    title: "Judge it together",
    text: "Test each package for importance, discretion, demand, cost, risk, dependencies, capability, location, timing, and the consequences of using more or less resource.",
  },
  {
    number: "04",
    title: "Choose – then keep managing",
    text: "Make explicit choices package by package, aggregate the implications, assign owners, and turn the analysis into an ongoing way to manage workload, handovers, cover, capability, and benefits.",
  },
];

const choices = [
  ["Tolerate but tweak", "Continue, with small and purposeful adjustments."],
  ["Trim", "Reduce effort or service level deliberately."],
  ["Transform", "Redesign how the outcome is achieved."],
  ["Transfer", "Move the work with ownership and consequences clear."],
  ["Terminate", "Stop the work and manage the effects."],
  ["Timescales", "Defer, sequence, speed up, or slow down."],
  ["Take on", "Add work explicitly, with the capacity it needs."],
];

const deliverables = [
  "A validated inventory of work packages",
  "A resource, cost, value, and capability view",
  "Priorities, choices, risks, and dependencies",
  "Clear owners and organisation-wide implications",
  "A practical route into benefits tracking",
  "A living system for work allocation and visibility",
];

const safeguards = [
  "No covert headcount exercise",
  "No work quietly displaced to another team",
  "No false precision where informed estimates will do",
  "No savings choice detached from quality and outcomes",
];

const interventions = [
  {
    title: "Outside-in service transformation",
    text: "Start with people’s purpose, need, demand, and lived journey, then reshape the service around what creates value.",
    href: "https://www.redquadrant.com/transformation-and-change",
  },
  {
    title: "Flow, process, and capacity",
    text: "Expose queues, failure demand, hand-offs, rework, and workarounds – then test a better flow in practice.",
    href: "https://www.redquadrant.com/transformation-and-change",
  },
  {
    title: "Organisation and operating models",
    text: "Derive roles, governance, capabilities, technology, and data from purpose and work – not from the current chart.",
    href: "https://www.redquadrant.com/services",
  },
  {
    title: "Commissioning and markets",
    text: "Clarify outcomes, understand the system, shape better relationships, and make deliberate sourcing and procurement choices.",
    href: "https://www.redquadrant.com/commissioning",
  },
  {
    title: "Systems, strategy, and place",
    text: "Work with boundaries, feedback, power, perspectives, and uncertainty to build action across organisations and communities.",
    href: "https://www.redquadrant.com/transformation-and-change",
  },
  {
    title: "Digital and data-enabled change",
    text: "Use technology and evidence in service of a better operating model and experience – never as the transformation by itself.",
    href: "https://www.redquadrant.com/digital",
  },
  {
    title: "Leadership, learning, and delivery",
    text: "Combine live delivery, coaching, academies, and rapid prototyping so capability grows while the work gets done.",
    href: "https://www.redquadrant.com/training-and-development",
  },
];

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resource Optimisation",
  description:
    "A team-based method from RedQuadrant for making organisational work, resource, cost, value, dependencies, and choices visible.",
  serviceType: "Public service transformation consultancy",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  provider: {
    "@type": "Organization",
    name: "RedQuadrant",
    foundingDate: "2009",
    email: "benjamin.taylor@redquadrant.com",
    telephone: "+44 7931 317230",
    url: "https://www.redquadrant.com",
  },
};

export const metadata={title:"Resource Optimisation",description:"Make work, resource, value, and capacity choices visible with RedQuadrant.",alternates:{canonical:"/resource-optimisation/"}};
export default function ResourceOptimisation(){return <article className="ro-native">
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Resource-based transformation</p>
              <h1>
                Resource Optimisation: make the work visible.
                <span>Then make the choices.</span>
              </h1>
              <p className="hero-lede">
                Resource Optimisation is RedQuadrant’s inside-out method for
                showing where effort really goes, testing it against purpose,
                and making better choices with the people who know the work.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="mailto:benjamin.taylor@redquadrant.com?subject=Resource%20Optimisation%20conversation"
                >
                  Discuss your pressure
                </a>
                <a className="text-link text-link-light" href="#method">
                  See how it works <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <figure className="hero-figure">
              <img
                src="/assets/resource-optimisation/resource-maze.webp"
                alt="A wooden maze, representing the paths and choices hidden within organisational work"
                width={1232}
                height={928}
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>
                <strong>There are always choices.</strong>
                <span>
                  The first job is to make the real paths, constraints, and
                  trade-offs visible.
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="hero-proof" aria-label="Our working principles">
            <span>Built for public-service pressures</span>
            <span>Evidence before reorganisation</span>
            <span>Capability stays with your team</span>
          </div>
        </section>

        <section className="section positioning-section" aria-labelledby="positioning-title">
          <div className="section-intro section-intro-wide">
            <p className="eyebrow">Where it fits</p>
            <h2 id="positioning-title">
              An inside-out view, held against the outside world.
            </h2>
            <p>
              Resource Optimisation starts inside the organisation: the actual
              work, its resource, cost, value, dependencies, and capability. It
              tests that picture against purpose, demand, outcomes, and the
              experience of people who use the service. It complements our
              outside-in work – and corrects the habit of starting with the
              structure.
            </p>
          </div>

          <figure className="lens-diagram" aria-labelledby="lens-caption">
            <div className="lens-panel lens-outside">
              <span className="diagram-label">Outside in</span>
              <h3>See the system from the person’s purpose.</h3>
              <ul>
                <li>Need and demand</li>
                <li>Journey and experience</li>
                <li>Value and outcomes</li>
              </ul>
            </div>
            <div className="lens-centre">
              <span>Shared test</span>
              <strong>Purpose</strong>
              <strong>Outcomes</strong>
              <small>Service flow connects both views</small>
            </div>
            <div className="lens-panel lens-inside">
              <span className="diagram-label">Inside out</span>
              <h3>See the organisation through its work.</h3>
              <ul>
                <li>Work packages</li>
                <li>Resource and cost</li>
                <li>Capability and dependencies</li>
              </ul>
            </div>
            <figcaption id="lens-caption">
              <strong>See the work before changing the structure.</strong>
              Structure is one design choice, not the starting assumption.
            </figcaption>
          </figure>

          <div className="view-strip" aria-label="Connected views of an organisation">
            <span>Purpose</span>
            <span>Need</span>
            <span>Demand</span>
            <span>Professional duty</span>
            <span className="view-highlight">Resource</span>
            <span>Outcomes</span>
            <span>Experience</span>
          </div>
        </section>

        <section className="section method-section" id="method" aria-labelledby="method-title">
          <div className="method-heading">
            <div className="section-intro">
              <p className="eyebrow">The method</p>
              <h2 id="method-title">A disciplined conversation about all the work.</h2>
              <p>
                A work package is narrower than a programme and wider than a
                task: a recognisable piece of work with a purpose, owner,
                resource requirement, and consequence. The right level emerges
                through comparison and discussion – roughly right is more
                useful than precisely wrong.
              </p>
            </div>

            <figure className="package-scale" aria-label="Work package level of analysis">
              <div className="scale-block scale-wide">
                <span>Why</span>
                <strong>Programme or outcome</strong>
              </div>
              <div className="scale-connector" aria-hidden="true" />
              <div className="scale-block scale-focus">
                <span>What</span>
                <strong>Work package</strong>
                <small>The unit of choice</small>
              </div>
              <div className="scale-connector" aria-hidden="true" />
              <div className="scale-block scale-narrow">
                <span>How</span>
                <strong>Activity or task</strong>
              </div>
            </figure>
          </div>

          <div className="stage-list">
            {stages.map((stage) => (
              <article className="stage-row" key={stage.number}>
                <span className="stage-number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </article>
            ))}
          </div>

          <aside className="method-origin">
            Resource Optimisation builds on a model developed by Basis Ltd,
            with early work led by Andy Jess. RedQuadrant has since developed
            and applied the approach in public-service transformation.
          </aside>
        </section>

        <section className="choices-section" aria-labelledby="choices-title">
          <div className="choices-heading">
            <p className="eyebrow eyebrow-light">The Seven Ts</p>
            <h2 id="choices-title">Seven choices, not one blunt cut.</h2>
            <p>
              Every work package earns an explicit decision. The point is not
              to force everything towards ‘less’, but to put capacity where it
              creates most value.
            </p>
          </div>
          <div className="choice-grid">
            {choices.map(([title, text], index) => (
              <article className="choice" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section system-section" aria-labelledby="system-title">
          <div className="section-intro section-intro-wide">
            <p className="eyebrow">The wider system</p>
            <h2 id="system-title">
              Resource is one lever. Good transformation sees all seven.
            </h2>
            <p>
              Resource Optimisation sits within RedQuadrant’s Seven Ways to
              Save and Improve: an opportunity map across the whole service
              system. It helps diagnose where to act; it is not a guaranteed
              list of savings.
            </p>
          </div>

          <figure className="seven-ways" aria-labelledby="ways-caption">
            <div className="policy-bar">
              <span>07</span>
              <strong>Change policy</strong>
              <small>Change the rules and choices that shape the whole system</small>
            </div>

            <div className="service-flow" aria-label="Service flow from demand to resources">
              <div>
                <span>Outside</span>
                <strong>Demand</strong>
              </div>
              <i aria-hidden="true">→</i>
              <div>
                <span>Interface</span>
                <strong>Contact</strong>
              </div>
              <i aria-hidden="true">→</i>
              <div>
                <span>Work</span>
                <strong>Process / project</strong>
              </div>
              <i aria-hidden="true">→</i>
              <div className="flow-featured">
                <span>Inside</span>
                <strong>Resources</strong>
              </div>
            </div>

            <div className="flow-levers">
              <div><span>01</span><strong>Shape demand</strong></div>
              <div><span>02</span><strong>Economies of flow</strong></div>
              <div><span>03</span><strong>Reduce waste</strong></div>
              <div className="lever-featured"><span>04</span><strong>Optimise resources</strong></div>
            </div>

            <div className="system-levers">
              <div>
                <span>05</span>
                <strong>Economies of organisation</strong>
                <small>Organise around the work</small>
              </div>
              <div>
                <span>06</span>
                <strong>Optimise procurement</strong>
                <small>Make better source and market choices</small>
              </div>
            </div>
            <figcaption id="ways-caption">
              The Seven Ways connect demand, flow, work, resource,
              organisation, procurement, and policy. Resource Optimisation is
              the inside-out lens at the heart of the fourth way.
            </figcaption>
          </figure>
        </section>

        <section className="team-section" aria-labelledby="team-title">
          <div className="team-image">
            <img
              src="/assets/resource-optimisation/team-working.webp"
              alt="Colleagues working together around a table"
              width={1800}
              height={1161}
              loading="lazy"
            />
          </div>
          <div className="team-copy">
            <p className="eyebrow">Deep team engagement</p>
            <h2 id="team-title">The data gets sharper when the room gets wiser.</h2>
            <p>
              The people closest to the work know where the system catches:
              hand-offs, seasonal peaks, duplicate checks, unofficial fixes,
              and capability gaps. Workshops, interviews, and practical data
              capture turn that lived knowledge into a shared, testable model.
            </p>
            <p className="team-callout">
              The inventory is deliberately unglamorous. That is what makes
              the choices defensible.
            </p>
            <p>
              We can lead the work, coach an internal team, or build a blended
              delivery group. Either way, facilitation matters as much as the
              model: people should recognise the picture, challenge it, and
              own what happens next.
            </p>
          </div>
        </section>

        <section className="section outcomes-section" id="outcomes" aria-labelledby="outcomes-title">
          <div className="outcomes-heading">
            <p className="eyebrow">What you get</p>
            <h2 id="outcomes-title">Not a report about work. A way to decide and manage it.</h2>
          </div>

          <div className="outcomes-grid">
            <div className="outcome-list">
              <h3>You leave with</h3>
              <ol>
                {deliverables.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <aside className="safeguard-list">
              <p className="eyebrow eyebrow-light">Our safeguards</p>
              <h3>Resource pressure without resource reductionism.</h3>
              <ul>
                {safeguards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Decisions are tested against citizen outcomes, service quality,
                risk, and the capacity of the receiving system – not just a
                spreadsheet total.
              </p>
            </aside>
          </div>

          <div className="routes" aria-labelledby="routes-title">
            <div className="routes-intro">
              <p className="eyebrow">Ways to start</p>
              <h3 id="routes-title">Scope it around the decision you need to make.</h3>
            </div>
            <div className="route-row">
              <span>Team or function</span>
              <p>Prove the method on a contained area and make immediate workload choices.</p>
            </div>
            <div className="route-row">
              <span>Service or directorate</span>
              <p>Compare packages, dependencies, capacity, and capability across boundaries.</p>
            </div>
            <div className="route-row">
              <span>Whole organisation</span>
              <p>Build a common evidence base for a savings, redesign, or operating-model portfolio.</p>
            </div>
          </div>

          <aside className="evidence-note">
            <strong>A disciplined evidence claim.</strong>
            <p>
              From 2010 to 2015, Resource Optimisation formed part of the wider
              RedQuadrant transformation operating system used across more than
              40 services at the London Borough of Hillingdon. We cite that as
              evidence of integrated, organisation-wide use – not as proof that
              one method caused every reported result. Each engagement
              baselines its own benefits, risks, and service effects.
            </p>
          </aside>
        </section>

        <section className="section range-section" id="range" aria-labelledby="range-title">
          <div className="range-intro">
            <p className="eyebrow">The RedQuadrant range</p>
            <h2 id="range-title">
              Resource Optimisation is one doorway into a wider practice.
            </h2>
            <p>
              There is no single RedQuadrant methodology. We choose and combine
              lenses around the real situation, while keeping purpose, evidence,
              participation, and capability transfer constant.
            </p>
          </div>

          <div className="intervention-list">
            {interventions.map((intervention, index) => (
              <a className="intervention" href={intervention.href} key={intervention.title}>
                <span className="intervention-number">0{index + 1}</span>
                <div>
                  <h3>{intervention.title}</h3>
                  <p>{intervention.text}</p>
                </div>
                <span className="intervention-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>

          <a className="text-link" href="https://www.redquadrant.com/services">
            Explore all RedQuadrant services <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow eyebrow-light">Start with the pressure</p>
            <h2 id="contact-title">Before you cut, absorb, or reorganise – see the work.</h2>
          </div>
          <div className="contact-copy">
            <p>
              Tell us where capacity is stretched, where choices are stuck, and
              what evidence decision-makers need. We will help you judge whether
              Resource Optimisation is the right starting lens.
            </p>
            <p>A focused team pilot starts at £6,500 excluding VAT. This covers a scoping session, an inventory template, two team workshops, analysis of up to 40 work packages, and a decision report. Wider organisational coverage, fieldwork, and implementation are scoped separately.</p><div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto:benjamin.taylor@redquadrant.com?subject=Resource%20Optimisation%20conversation"
              >
                Email Benjamin Taylor
              </a>
              <a className="phone-link" href="tel:+447931317230">
                07931 317230
              </a>
            </div>
          </div>
        </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organisationSchema)}} /></article>;}