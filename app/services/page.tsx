/* eslint-disable @next/next/no-img-element */
import { BuyerOffers } from "../_components/BuyerOffers";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { brandAssets, serviceAreas, serviceImages, serviceThemes } from "../site-data";

export const metadata: Metadata = {
  title: "Services",
  description: "RedQuadrant public service consulting, transformation delivery, critical-friend support, resourcing and capability building.",
  alternates: { canonical: "/services" },
};

function Contact({ name, phone, email }: { name: string; phone?: string; email: string }) {
  return (
    <p className="service-contact">
      <strong>{name}{phone ? `  ${phone}` : ""}</strong><br />
      <a href={`mailto:${email}`}>{email}</a><br />

    </p>
  );
}

function ServicePanel({ id, title, image, reverse = false, children, contact }: {
  id: string;
  title: string;
  image: { src: string; alt: string };
  reverse?: boolean;
  children: ReactNode;
  contact: ReactNode;
}) {
  return (
    <section className={`service-panel${reverse ? " reverse" : ""}`} id={id}>
      <div className="service-panel-image"><img src={image.src} alt={image.alt} loading="lazy" /></div>
      <div className="service-panel-copy">
        <h2>{title}</h2>
        {children}
        {contact}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="services-page site-frame">
      <h1>Public service consultancy</h1>
      <p className="offer-lead">RedQuadrant works with councils, the NHS, civil servants, and voluntary organisations. Some commissions start with a decision about a service. Others need a team to carry out a change or someone independent to review a proposal.</p>
      <BuyerOffers />


      <section className="service-modes" aria-label="Ways we work">
        <article><h2>Consulting</h2><ul><li>Reviews and strategy</li><li>Set strategic direction or solve a problem</li></ul></article>
        <article><h2>Critical friend</h2><ul><li>Coaching and mentoring</li><li>Leading transformation</li><li>Independent challenge when a difficult decision needs clearer thinking</li></ul></article>
        <article><h2>Transformation delivery</h2><ul><li>Turnaround and difficult delivery</li><li>Senior, quality-assured practitioners</li><li>Extra capability that works as part of your team</li></ul></article>
      </section>

      <section className="service-brands" aria-label="RedQuadrant partnerships">
        <article>
          <div className="service-logo-field">
            <img src="/assets/owned/dff90c07b667260c.png" alt="Quadrant Resourcing" />
          </div>
          <div>
            <h2>Quadrant Resourcing</h2>
            <p>Experienced interim leaders and fixed-price, outcome-based work packages for change and transformation.</p>
            <a href="https://www.quadrantresourcing.com/" target="_blank" rel="noreferrer">Visit Quadrant Resourcing</a>
          </div>
        </article>
        <article>
          <div className="service-logo-field psta-logo-field">
            <img src={brandAssets.pstaLogo} alt="Public Service Transformation Academy" />
          </div>
          <div>
            <h2>Capability building</h2>
            <p>Training, academies, coaching and longer development programmes that help public services transform themselves.</p>
            <Link href="/training-and-development">Explore training and development</Link>
          </div>
        </article>
      </section>

      <section className="services-overview">
        <div>
          <h2>Areas of work</h2>
          <h3>Methods and skills</h3>
          <ul>{serviceThemes.map(item => <li key={item}>{item}</li>)}</ul>
          <p>Since 2018 RedQuadrant has appeared in the <a href="https://www.ft.com/content/35f8087a-3bb3-4a49-a969-e1f537a5af27" target="_blank" rel="noreferrer">Financial Times UK’s Leading Management Consultants</a> rankings.</p>
        </div>
        <div>
          <h3>Public services</h3>
          <ul>{serviceAreas.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h3>RedQuadrant’s experience</h3>
          <ul>
            <li>Over ten years in public service transformation</li>
            <li>Over 96.8% of clients come back for more</li>
            <li>Thousands of public service employees trained in transformation skills</li>
            <li>Placed on the major local and central government and NHS <Link href="/frameworks">frameworks</Link></li>
            <li>Trusted to lead the partnership delivering the Cabinet Office Commissioning Academy</li>
            <li>Regularly published in local government press and speaking at local government summits</li>
          </ul>
        </div>
        <div>
          <h3>The people we can bring in</h3>
          <ul>
            <li>~2,000 experienced consultants covering all areas of public services and central government</li>
            <li>Core team of around 50, with experienced specialists covering all key disciplines and services</li>
            <li>Nationwide coverage; 65% of our consultants are based outside London</li>
            <li>15+ former local government CEOs</li>
            <li>Heads of service for all local government areas</li>
            <li>600+ with central government experience</li>
            <li>650+ who have worked with the third sector</li>
            <li>750+ who have worked in or with the NHS</li>
            <li>500+ with private-sector experience</li>
            <li>100+ with Big Four consulting training and experience</li>
            <li>An average of 15 years’ experience per consultant in our last twenty client teams</li>
          </ul>
        </div>
      </section>

      <h2 className="services-list-heading">Services</h2>

      <ServicePanel id="culture-community" title="Culture, consultation and community engagement" image={serviceImages.culture} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>A council may need to decide which arts groups to fund, what to do with a library building, or how residents can take part in that decision. We help it gather evidence, hear from the people affected, and compare the options.</p>
        <p>Examples of our work:</p>
        <ul><li>Exeter City Council: review of community and arts grants</li><li>London Borough of Croydon: review and options appraisal for the future library service</li><li>London Borough of Sutton: review of the archives service</li><li>Abu Dhabi Public Libraries: 2020 Public Library Strategy</li><li>Chelmsford City Council: evaluation of museum redevelopment project</li><li>The National Archives: project evaluations and guidance for volunteers</li><li>London Borough of Lambeth: options for a new location for the borough’s archives</li></ul>
      </ServicePanel>

      <ServicePanel id="housing" title="Housing" image={serviceImages.housing} reverse contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>Housing teams commission repairs, manage homes, and answer residents when the work goes wrong. We review how these parts of the service work together, including the contracts and information systems they depend on.</p>
        <p>Examples of our work:</p>
        <ul><li>Reviewing the entirety of housing management and operations, bringing together demand management and capacity planning to restructure a department around improvements identified by customers and employees, and identifying over 20 per cent realisable savings.</li><li>Tenant and resident panel work, identifying how customers can help services drive improvement.</li><li>Procurement, design and delivery of cross-organisation core business systems, including CRM, content and document management.</li></ul>
      </ServicePanel>

      <section className="service-panel service-panel-text" id="childrens-services"><div className="service-panel-copy"><h2>Children’s services</h2><p>We help councils and partners improve support for children, young people, and families. Our work brings together children’s social care, education, SEND, health, and the voluntary sector, with children’s lived experience at the centre.</p><ul><li>Children’s services commissioning reviews and improvement plans</li><li>Sufficiency strategies, placement markets, and support for children in care and care leavers</li><li>SEND commissioning, short breaks, early help, and prevention</li><li>Co-production with children, young people, parents, and carers</li><li>Joint commissioning, partnership development, and practical learning for commissioning teams</li></ul><p>Fiona Fleming brings over twenty years of commissioning experience, including senior leadership in children’s services and work with councils on commissioning, sufficiency, and market development.</p><Contact name="Fiona Fleming" email="fiona.fleming@redquadrant.com" /></div></section>

      <ServicePanel id="adult-social-care" title="Adult social care" image={serviceImages.care} contact={<Contact name="Frank Curran" email="frank.curran@redquadrant.com" />}>
        <p>We work with councils on how people get support, what providers are paid, and what social workers have the time and authority to do. Our assignments range from redesigning day opportunities to costing care and comparing ways of providing it.</p>
        <p>Examples of our work:</p>
        <ul><li>Co-production of a new day-opportunities offer for people with disabilities in Barnsley</li><li>Review of technology offers and digital opportunity assessment within social care for Rotherham and Kirklees</li><li>Business cases for pathway redesign and outsourcing of assessment and review functions for Bexley</li><li>Development and implementation of an all-age disability service for Dudley</li><li>Savings diagnostic and opportunity assessment for Dorset</li><li>Improving social-work practice projects for Dorset and Bexley</li><li>Fee frameworks and cost-of-care exercises for Sefton, Halton and Cheshire East</li><li>Options appraisal for outsourcing of in-house services for Durham</li></ul>
      </ServicePanel>

      <ServicePanel id="health" title="Health" image={serviceImages.health} reverse contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>We help NHS teams and councils organise work they share, including commissioning care, reviewing pooled budgets, and improving what happens when a patient moves between services.</p>
        <p>Examples of our work:</p>
        <ul><li>Review of Section 75 and Better Care Fund arrangements with a local authority for a London CCG</li><li>Commissioning and procurement of the first multi-speciality community provider in the UK for Scarborough and Ryedale CCG</li><li>Lean process review for Sussex Partnership NHS FT</li><li>Transformation partner for CLCH NHS FT</li><li>Strategic review of the Parliamentary and Health Service Ombudsman service</li><li>Strategic advice to the Board of the Nursing and Midwifery Council</li></ul>
      </ServicePanel>

      <ServicePanel id="equality-diversity-inclusion" title="Equality, diversity and inclusion" image={serviceImages.inclusion} contact={<Contact name="Janice Prentice" phone="07946 498 195" email="janice.prentice@redquadrant.com" />}>
        <p>We review the effect of employment and service decisions on different groups, and work with leadership teams on what they can change.</p>
        <p>Examples of our work:</p>
        <ul><li>Diversity impact assessment for a Civil Service assessment centre, focused on eliminating unconscious bias and applying good practice</li><li>Development of diversity and inclusion strategies for a UK regulator and an arm’s-length body</li><li>EDI input to a Covid-19 economic recovery strategy and further support for a local enterprise partnership</li><li>Design and delivery of ‘Leadership in Diversity’ training for a police force and a council senior leadership team</li><li>Review of HR practice from an ED&I perspective for the Local Government Association</li></ul>
      </ServicePanel>

      <ServicePanel id="ict" title="ICT strategy and operations" image={serviceImages.ict} reverse contact={<Contact name="James Wickham" phone="07973 143303" email="james.wickham@redquadrant.com" />}>
        <p>We help public bodies choose, procure, and implement IT systems, and manage the programmes that bring them into use. Our work includes:</p>
        <ul><li>IT applications that support local government services such as housing, children’s services, asset management, planning and environment, and their integration</li><li>Organisation-wide applications, including CRM, case management and document management</li><li>Assessing current systems and presenting options for change covering software, hardware, channel functionality and operations</li></ul>
        <p>Examples of our work:</p>
        <ul><li>South Lanarkshire: review of customer contact programme</li><li>Bolton at Home: Paving the Way Transformation Programme</li><li>Plymouth City Council: customer transformation</li><li>Nottingham City Homes: procurement of a CRM system and mobile-working strategic support</li></ul>
      </ServicePanel>

      <ServicePanel id="criminal-justice" title="Criminal justice" image={serviceImages.justice} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>People in contact with the justice system may also depend on housing, health, and care services. We work with justice agencies and their local partners on what happens between those services, and on decisions about which work to provide directly or commission.</p>
        <p>Examples of our work:</p>
        <ul><li>Working with the Danish prison service to outline transformation plans for savings and service improvements, using Positive Deviance to identify real opportunities within the population for improved outcomes</li><li>Supplying surge capacity to the Metropolitan Police Service transformation programme, and leadership development for MPS and communications strategy for Leicestershire Police</li><li>MOPAC projects including a feasibility study for social investment in a gang-exit programme and a sustainability strategy for Child House</li></ul>
      </ServicePanel>

      <ServicePanel id="customer-service" title="Customer service and customer focus" image={serviceImages.customer} reverse contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>A council changing how residents contact it needs to know who will still need help in person. We follow what happens to a request across the counter, the telephone, and the website before advising on which arrangements to change.</p>
        <ul><li>Can your organisation clearly state its purpose and map this onto how it engages service users?</li><li>Have you explored customer insight to simplify what you offer and focus on what matters?</li><li>Are customer experience and perceptions built into performance assessment and service management?</li><li>Can customer data, demographic profiling, personas and open-source data help?</li><li>Can deeper insight help you navigate automation and self-service?</li></ul>

        <p>Examples include expert advice to the digital transformation of HM Courts and Tribunals Service over about 18 months; channel, technology and business-case reviews for social landlords; and helping Westminster close its one-stop shops while improving online and assisted self-service and saving over £1.2m a year.</p>
      </ServicePanel>

      <ServicePanel id="learning-organisational-development" title="Learning and organisational development" image={serviceImages.learning} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>We teach and coach people who are changing how their own organisations work. In Devon, that included individual and team coaching for the council’s Doing What Matters programme.</p>
        <ul><li>Strategic consultancy, training, development, and individual and team coaching for Devon County Council’s ‘Doing What Matters’ programme</li><li>An ongoing partnership with Bristol City Council for leadership development, training and coaching through the Applied Programme, Bristol Leads and development for senior directors. The first four cohorts identified savings of over £11 million.</li><li>A blended transformational-change programme for the States of Guernsey, with online modules, face-to-face workshops and coaching</li><li>Leadership development and coaching for directors and heads of service at Leicester City Council</li><li>A cultural diagnostic and strategic cultural-change assignment with the Office for National Statistics Crime Statistics team</li><li>Ongoing coaching and support to senior leaders across a number of councils</li></ul>
      </ServicePanel>

      <ServicePanel id="human-resources" title="Human resources" image={serviceImages.hr} reverse contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <ul><li>Very senior, specialist HR consultants with strong practical experience: for the Cabinet Office we provided strategic HR and organisational design capability focused on job-profile review and redesign</li><li>Review for a central government department to challenge recruitment criteria and deliver comprehensive documentation for a range of activities</li><li>Pay audits, board remuneration reviews and work with higher education in Scotland</li><li>Building the capacity, capability and confidence of Guernsey’s HR department during major transformation</li><li>Reviewing HR while creating whole-organisation operating models, including West Lancashire’s target operating model</li><li>A recruitment and retention strategy for social work in a London borough following special measures</li><li>Further expertise in shared services, casework and investigations, development centres, focus groups, learning and development, leadership, prioritisation, HR systems and TUPE</li></ul>
      </ServicePanel>

      <ServicePanel id="commissioning" title="Commissioning" image={serviceImages.commissioning} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>We help commissioners decide what a service is for, whose experience should inform it, and how to commission and review the work. We also teach the National Commissioning Academy through the Public Service Transformation Academy.</p>
        <p>Examples of our work:</p>
        <ul><li>Delivery of the Cabinet Office Commissioning Academy through the Public Service Transformation Academy</li><li>Development and capability-building of commissioning skills and behaviours for Kent</li><li>Outcomes-based commissioning review for Sutton</li><li>Whole-council commissioning approaches for Sefton and Knowsley</li><li>Review and restructure of Maidstone’s commissioning approach with a transformational focus</li></ul>
      </ServicePanel>

      <ServicePanel id="digital-change" title="Digital change and digital delivery" image={serviceImages.digitalGrid} reverse contact={<Contact name="James Wickham" phone="07973 143303" email="james.wickham@redquadrant.com" />}>
        <p>When a council moves a service online, the resident, the person answering the phone, and the team processing the request all experience the change. We work with them and their suppliers to decide how the service should operate and what technology it needs.</p>
        <ul><li>Digital strategy and operating models tied to organisational purpose and measurable service outcomes</li><li>User research, inclusive service design and end-to-end journey redesign across online, phone and face-to-face channels</li><li>Product, programme and portfolio leadership, including recovery of complex digital delivery</li><li>Data, architecture, integration and technology choices that improve rather than fragment the service</li><li>Supplier selection, procurement and assurance, with practical transfer of skills to in-house teams</li><li>Automation and self-service designed around real needs, accessibility and assisted-digital support</li></ul>
        <p>Our experience includes digital justice work with HM Courts and Tribunals Service; technology and channel transformation for councils and social housing providers; and assessment of digital opportunities in adult social care.</p>
        <img className="service-inline-image" src={serviceImages.digitalInterface.src} alt={serviceImages.digitalInterface.alt} loading="lazy" />
      </ServicePanel>

      <ServicePanel id="alternative-delivery-models" title="Alternative delivery models" image={serviceImages.delivery} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <ul><li>Setting up mutuals, spin-outs and trading companies instead of outsourcing</li><li>Using social investment to solve long-standing problems</li><li>Using social marketing to nudge behaviour change</li><li>Developing tools to measure how effective preventative services really are</li><li>Using strengths-based approaches to solve local problems by finding answers within communities</li></ul>
        <p>For the London Borough of Newham, we ran an incubator for council services, helping services identify opportunities to trade and innovate, develop and negotiate business cases, and choose the appropriate legal form.</p>
      </ServicePanel>
    </div>
  );
}
