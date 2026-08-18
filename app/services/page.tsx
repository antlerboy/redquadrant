import type { Metadata } from "next";
import Link from "next/link";
import { ContactBand, PageHero } from "../_components/SiteChrome";
import { serviceAreas, serviceThemes } from "../site-data";

export const metadata: Metadata = {
  title: "Public service transformation services",
  description:
    "Consulting, critical-friend support, transformation leadership, digital change, commissioning and capability building for public services.",
  alternates: { canonical: "/services" },
};

const navigation = [
  ["track-record", "Track record"],
  ["culture-community", "Culture and community"],
  ["housing-services", "Housing"],
  ["adult-social-care", "Adult social care"],
  ["health-nhs", "Health and NHS"],
  ["equality-diversity-inclusion", "EDI"],
  ["ict-digital", "ICT and digital"],
  ["criminal-justice", "Criminal justice"],
  ["customer-experience", "Customer experience"],
  ["learning-development", "Learning and development"],
  ["commissioning", "Commissioning"],
  ["digital-change", "Digital change"],
  ["alternative-delivery", "Alternative delivery"],
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The right kind of help for difficult public service work."
        introduction="We combine senior consulting, critical-friend challenge, embedded delivery and capability building. The shape of the team follows the problem — not a standard consulting pyramid."
      />

      <section className="content-section">
        <div className="shell">
          <div className="card-grid">
            <article className="info-card">
              <p className="card-number">01</p>
              <h2>Consulting</h2>
              <p>Reviews, strategy and evidence-led problem solving: clarifying what is happening, choosing a direction and turning it into a workable plan.</p>
            </article>
            <article className="info-card">
              <p className="card-number">02</p>
              <h2>Critical friend</h2>
              <p>Coaching, mentoring and independent challenge for leaders and teams carrying complex transformation responsibility.</p>
            </article>
            <article className="info-card">
              <p className="card-number">03</p>
              <h2>Transformation and interim</h2>
              <p>Senior hands-on leadership for turnaround, delivery and the work that becomes too important or too difficult to leave unresolved.</p>
            </article>
            <article className="info-card">
              <p className="card-number">04</p>
              <h2>Quadrant Resourcing</h2>
              <p>Rapid access to experienced specialists for defined requirements, programmes and interim capacity.</p>
            </article>
            <article className="info-card">
              <p className="card-number">05</p>
              <h2>Capability building</h2>
              <p>Accredited and applied learning through our not-for-profit Public Service Transformation Academy.</p>
            </article>
            <article className="info-card">
              <p className="card-number">06</p>
              <h2>Design and communication</h2>
              <p>Rich pictures, research publications, workshop visuals and communications that make complex work understandable.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section warm">
        <div className="shell section-heading">
          <div>
            <p className="eyebrow">What we work on</p>
            <h2>Cross-cutting expertise, grounded in real services.</h2>
          </div>
          <div>
            <h3>Themes</h3>
            <ul className="tag-list">
              {serviceThemes.map((theme) => <li key={theme}>{theme}</li>)}
            </ul>
            <h3>Service areas</h3>
            <ul className="tag-list">
              {serviceAreas.map((area) => <li key={area}>{area}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section" id="track-record">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A trusted part of the scene</p>
              <h2>Deep experience without heavyweight overhead.</h2>
            </div>
            <p>
              RedQuadrant has worked across public services for more than a decade. Our network brings together senior practitioners who know the operating realities of local government, central government, health, charities and regulated services.
            </p>
          </div>
          <div className="stat-panel">
            <div><strong>96.8%</strong><span>client return rate</span></div>
            <div><strong>2,000+</strong><span>consultants and specialists in our wider network</span></div>
            <div><strong>50</strong><span>people in our core active community</span></div>
            <div><strong>65%</strong><span>of our consultant network based outside London</span></div>
            <div><strong>15+</strong><span>former chief executives</span></div>
            <div><strong>15 yrs</strong><span>average professional experience across the network</span></div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="shell service-detail-grid">
          <nav className="service-nav" aria-label="Services on this page">
            {navigation.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
          </nav>
          <div className="service-stack">
            <section id="culture-community">
              <p className="eyebrow">Culture and community</p>
              <h2>Culture, heritage and community services that can prove their value.</h2>
              <p>We help organisations rethink libraries, archives, cultural investment and community provision: balancing public value, local identity, participation, resilience and affordability.</p>
              <div className="case-list">
                <article><h3>Exeter</h3><p>Reviewing the city&apos;s cultural grants and developing an evidence-based approach to future investment.</p></article>
                <article><h3>Croydon and Sutton</h3><p>Work on library provision and archive services, bringing operating realities and community outcomes into the same conversation.</p></article>
                <article><h3>Abu Dhabi</h3><p>Supporting development of a 2020 cultural strategy with a practical route from ambition to delivery.</p></article>
              </div>
            </section>

            <section id="housing-services">
              <p className="eyebrow">Housing</p>
              <h2>Better resident outcomes, stronger operations and a credible path to savings.</h2>
              <p>Our housing work covers whole-service review, operating models, resident involvement, demand, workflow, performance and technology. We connect strategy to the day-to-day work of repairs, tenancy, homelessness and customer contact.</p>
              <div className="case-list">
                <article><h3>Whole-service review</h3><p>Reviewing housing management and operations, identifying opportunities exceeding 20% while protecting service outcomes.</p></article>
                <article><h3>Resident voice</h3><p>Designing resident panels and engagement that influence decisions rather than simply collecting views.</p></article>
                <article><h3>Systems and workflow</h3><p>Helping teams select, implement and get practical value from core housing and case-management systems.</p></article>
              </div>
              <p><Link className="text-link" href="/housing">Explore our housing work →</Link></p>
            </section>

            <section id="adult-social-care">
              <p className="eyebrow">Adult social care</p>
              <h2>Transformation built around practice, people and place.</h2>
              <p>We work across demand, pathways, provider markets, technology-enabled care, strengths-based practice and financial sustainability. The aim is change that improves people&apos;s lives and can be delivered by the system that exists.</p>
              <div className="case-list">
                <article><h3>Barnsley</h3><p>Redesigning day opportunities around outcomes, independence and community assets.</p></article>
                <article><h3>Rotherham and Kirklees</h3><p>Assessing technology-enabled care and the organisational capability needed to make it mainstream.</p></article>
                <article><h3>Dorset and Dudley</h3><p>Working on savings, practice improvement and all-age disability pathways.</p></article>
                <article><h3>North West councils</h3><p>Cost-of-care work for Sefton, Halton and Cheshire East, combining market evidence with commissioner judgement.</p></article>
              </div>
            </section>

            <section id="health-nhs">
              <p className="eyebrow">Health and the NHS</p>
              <h2>Change across organisational boundaries.</h2>
              <p>We support integrated commissioning, new care models, lean improvement, strategic review and transformation where health, care and local government have to work as one system.</p>
              <div className="case-list">
                <article><h3>London health and care</h3><p>Section 75 and Better Care Fund work linking governance, money and shared outcomes.</p></article>
                <article><h3>Scarborough and Ryedale</h3><p>Supporting development of a multispecialty community provider model.</p></article>
                <article><h3>National bodies</h3><p>Strategic review and advice for the Parliamentary and Health Service Ombudsman and Nursing and Midwifery Council.</p></article>
              </div>
            </section>

            <section id="equality-diversity-inclusion">
              <p className="eyebrow">Equality, diversity and inclusion</p>
              <h2>Make inclusion part of how the organisation works.</h2>
              <p>We connect EDI strategy to leadership, governance, people practice, service design and the decisions that shape residents&apos; experience.</p>
              <div className="case-list">
                <article><h3>Assessment and strategy</h3><p>Inclusive assessment-centre design, organisational and arm&apos;s-length-body strategies, and Covid recovery work with a local enterprise partnership.</p></article>
                <article><h3>Leadership and people practice</h3><p>Leadership diversity learning and HR review work with public service organisations.</p></article>
              </div>
            </section>

            <section id="ict-digital">
              <p className="eyebrow">ICT and digital</p>
              <h2>Technology decisions led by service purpose.</h2>
              <p>We bring strategic IT, architecture, programme leadership and specialist systems knowledge together with service redesign. That means fewer technology projects detached from the work they are meant to improve.</p>
              <div className="case-list">
                <article><h3>South Lanarkshire</h3><p>Customer contact and service technology work grounded in end-to-end journeys.</p></article>
                <article><h3>Housing providers and councils</h3><p>Systems and digital-service work for Bolton at Home, Plymouth and Nottingham City Homes.</p></article>
              </div>
            </section>

            <section id="criminal-justice">
              <p className="eyebrow">Criminal justice</p>
              <h2>Improvement in high-risk, high-accountability systems.</h2>
              <p>We work with justice organisations on leadership, operations, service models and communications where implementation has to be both careful and decisive.</p>
              <div className="case-list">
                <article><h3>Danish prison service</h3><p>Using positive-deviance methods to learn from practice already producing better outcomes.</p></article>
                <article><h3>Metropolitan Police Service</h3><p>Support on surge, leadership and communications in a large, complex operational system.</p></article>
                <article><h3>MOPAC</h3><p>Work on gang-exit provision and the Child House model.</p></article>
              </div>
            </section>

            <section id="customer-experience">
              <p className="eyebrow">Customer experience and service design</p>
              <h2>Start with purpose and the whole customer journey.</h2>
              <p>We use customer insight, data and frontline knowledge to redesign journeys, channels and operating models. Automation and self-service are tools — useful when they make the service easier and fairer, not goals in themselves.</p>
              <div className="case-list">
                <article><h3>HM Courts and Tribunals Service</h3><p>Eighteen months supporting digital justice and service transformation.</p></article>
                <article><h3>Westminster</h3><p>Redesign supporting closure of a one-stop shop and savings exceeding £1.2m a year.</p></article>
                <article><h3>Social housing</h3><p>Channel and technology reviews linking customer demand, staff workflow and system capability.</p></article>
              </div>
              <p><Link className="text-link" href="/libraries">Explore customer focus →</Link></p>
            </section>

            <section id="learning-development">
              <p className="eyebrow">Learning and development</p>
              <h2>Learning applied to live work.</h2>
              <p>Our programmes combine practical methods, senior facilitation, coaching and application. Participants work on real problems and build communities that continue after the formal programme ends.</p>
              <div className="case-list">
                <article><h3>Bristol</h3><p>The first four cohorts of the applied programme identified £11m of opportunity while building lasting redesign capability.</p></article>
                <article><h3>Devon</h3><p>Doing What Matters: an applied approach to service change and organisational learning.</p></article>
                <article><h3>Guernsey and Leicester</h3><p>Blended learning and leadership development tailored to local context and live priorities.</p></article>
              </div>
            </section>

            <section id="people-od">
              <p className="eyebrow">People and organisational development</p>
              <h2>Align structure, culture, capability and change.</h2>
              <p>We help leaders understand the human system around a change: roles, relationships, decision rights, skills, behaviours and the conditions people need to do good work.</p>
            </section>

            <section id="commissioning">
              <p className="eyebrow">Commissioning and procurement</p>
              <h2>Commission for outcomes, not process compliance.</h2>
              <p>We help organisations understand need, shape markets, develop commissioning capability and build relationships that can adapt while remaining accountable.</p>
              <div className="case-list">
                <article><h3>Cabinet Office</h3><p>Design and delivery of the Commissioning Academy.</p></article>
                <article><h3>Kent and Sutton</h3><p>Capability building and outcomes-led commissioning work.</p></article>
                <article><h3>Sefton, Knowsley and Maidstone</h3><p>Commissioning and procurement improvement tailored to local priorities.</p></article>
              </div>
            </section>

            <section id="digital-change">
              <p className="eyebrow">Digital change</p>
              <h2>Redesign the service, operating model and technology together.</h2>
              <p>Digital change succeeds when it improves a real journey and the organisation can sustain the new way of working. We connect customer need, data, workflow, platforms, architecture, governance and workforce capability — then build a sequenced roadmap and business case that leaders and delivery teams can use.</p>
              <div className="case-list">
                <article><h3>Central Bedfordshire</h3><p>Breaking a twelve-month impasse and agreeing an ICT strategy, change roadmap, procurement approach and high-level business case across eight service areas. The work moved services towards common platforms, end-to-end automation and a shared data strategy.</p></article>
                <article><h3>Lewisham housing</h3><p>Using data, systems analysis and frontline engagement to restore performance, adapt workflows for remote contact and create an implementable transformation roadmap with a clear route to cash savings.</p></article>
                <article><h3>Digital adult social care</h3><p>Helping teams make technology-enabled care, digital skills, ethical data use and self-service part of mainstream practice — with accessibility and human support designed in.</p></article>
              </div>
              <p><Link className="text-link" href="/digital">Explore digital change →</Link></p>
            </section>

            <section id="alternative-delivery">
              <p className="eyebrow">Alternative delivery models</p>
              <h2>Choose a model for the outcomes — not for the label.</h2>
              <p>We help organisations assess mutuals, spin-outs, trading models, shared services and partnerships. The work includes governance, economics, markets, workforce, social value, risk and the practical transition from current delivery.</p>
              <div className="case-list">
                <article><h3>Newham</h3><p>Supporting an incubator approach to alternative models and public service innovation.</p></article>
                <article><h3>Prevention and social investment</h3><p>Developing credible measurement and operating assumptions for models intended to shift resources upstream.</p></article>
              </div>
            </section>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
