/* eslint-disable @next/next/no-img-element */
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
      <span>Contact</span>
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
      <h1>Services</h1>

      <section className="service-modes" aria-label="Ways we work">
        <article><h2>Consulting</h2><ul><li>Reviews and strategy</li><li>Set strategic direction or solve a problem</li></ul></article>
        <article><h2>Critical friend</h2><ul><li>Coaching and mentoring</li><li>Leading transformation</li><li>Accredited through PSTA</li></ul></article>
        <article><h2>Transformation Interim</h2><ul><li>Turnaround or gnarly delivery</li><li>Market leading, innovative, quality assured</li><li>Quality consultancy resource to support, supplement and act as in-house transformation teams</li></ul></article>
        <article><h2>Quadrant Resourcing</h2><img src="https://static.wixstatic.com/media/12b1f3_5c58e0e05d5f430890984f2d53fdbf8d~mv2.png/v1/fill/w_280,h_100,al_c,q_90,enc_avif,quality_auto/Screenshot%202020-10-12%20at%2012_13_25.png" alt="Quadrant Resourcing" /><ul><li>Excellent interims to deliver change and transformation</li><li>Fixed-price delivery of work packages to secure results and benefit from true delivery-focused services outside of IR35 considerations</li></ul></article>
        <article><h2>Capability building</h2><img src={brandAssets.pstaLogo} alt="Public Service Transformation Academy" /><p>Not-for-profit social enterprise, to enable public services to transform themselves.</p></article>
      </section>

      <section className="services-overview">
        <div>
          <h2>We offer expertise in a wide range of relevant areas:</h2>
          <h3>Thematic</h3>
          <ul>{serviceThemes.map(item => <li key={item}>{item}</li>)}</ul>
          <p>Always underpinned by our experience that the key to making change real is the virtuous triangle of strategy, leader and organisational development, and sustainable delivery. Don’t just take our word for it – since 2018 we have been recognised amongst the <a href="https://www.ft.com/content/35f8087a-3bb3-4a49-a969-e1f537a5af27" target="_blank" rel="noreferrer">Financial Times UK’s Leading Management Consultants</a> across a range of sectors.</p>
        </div>
        <div>
          <h3>Service specific</h3>
          <ul>{serviceAreas.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h3>A trusted part of the scene</h3>
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
          <h3>Our capacity</h3>
          <ul>
            <li>~2,000 experienced consultants covering all areas of public services and central government</li>
            <li>Core team of around 50, with experienced specialists covering all key disciplines and services</li>
            <li>Nationwide coverage – 65% of our consultants are based outside London</li>
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
        <p>We recognise the role of culture in enhancing quality of life in our communities and we work in a way that ensures that communities are heard.</p>
        <p>Examples of our recent work:</p>
        <ul><li>Exeter City Council: review of community and arts grants</li><li>London Borough of Croydon: review and options appraisal for the future library service</li><li>London Borough of Sutton: review of the archives service</li><li>Abu Dhabi Public Libraries: 2020 Public Library Strategy</li><li>Chelmsford City Council: evaluation of museum redevelopment project</li><li>The National Archives: project evaluations and guidance for volunteers</li><li>London Borough of Lambeth: options for a new location for the borough’s archives</li></ul>
      </ServicePanel>

      <ServicePanel id="housing" title="Housing" image={serviceImages.housing} reverse contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>Housing services cross the boundary between logistics and community-shaping, with strict legislative requirements and great political variation. Housing policy and management runs from multi-million-pound transactions to graffiti removal, from critical gas safety to customer insight and communications. More than any other service area, it is local government in a nutshell.</p>
        <p>Examples of our work:</p>
        <ul><li>Reviewing the entirety of housing management and operations, bringing together demand management and capacity planning to restructure a department around improvements identified by customers and employees, and identifying over 20 per cent realisable savings.</li><li>Tenant and resident panel work, identifying how customers can help services drive improvement.</li><li>Procurement, design and delivery of cross-organisation core business systems, including CRM, content and document management.</li></ul>
      </ServicePanel>

      <ServicePanel id="adult-social-care" title="Adult social care" image={serviceImages.care} contact={<Contact name="Frank Curran" email="frank.curran@redquadrant.com" />}>
        <p>We work with local authorities to help improve adult social care services. This might be through better demand management, improved care pathways, cultural change and transformation programmes, market management or the development of new service models.</p>
        <p>Examples of our work:</p>
        <ul><li>Co-production of a new day-opportunities offer for people with disabilities in Barnsley</li><li>Review of technology offers and digital opportunity assessment within social care for Rotherham and Kirklees</li><li>Business cases for pathway redesign and outsourcing of assessment and review functions for Bexley</li><li>Development and implementation of an all-age disability service for Dudley</li><li>Savings diagnostic and opportunity assessment for Dorset</li><li>Improving social-work practice projects for Dorset and Bexley</li><li>Fee frameworks and cost-of-care exercises for Sefton, Halton and Cheshire East</li><li>Options appraisal for outsourcing of in-house services for Durham</li></ul>
      </ServicePanel>

      <ServicePanel id="health" title="Health" image={serviceImages.health} reverse contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>The NHS faces increasing demands from the public but without the increased funding to meet this demand. We work with all parts of the NHS on demand management, process redesign, developing new models of service provision and the interface between the NHS and the wider public sector.</p>
        <p>Examples of our work:</p>
        <ul><li>Review of Section 75 and Better Care Fund arrangements with a local authority for a London CCG</li><li>Commissioning and procurement of the first multi-speciality community provider in the UK for Scarborough and Ryedale CCG</li><li>Lean process review for Sussex Partnership NHS FT</li><li>Transformation partner for CLCH NHS FT</li><li>Strategic review of the Parliamentary and Health Service Ombudsman service</li><li>Strategic advice to the Board of the Nursing and Midwifery Council</li></ul>
      </ServicePanel>

      <ServicePanel id="equality-diversity-inclusion" title="Equality, diversity and inclusion" image={serviceImages.inclusion} contact={<Contact name="Janice Prentice" phone="07946 498 195" email="janice.prentice@redquadrant.com" />}>
        <p>We are increasingly working directly on projects that relate to equality, diversity and inclusion (ED&I). Through our work in this area, we aim to transform ED&I practice in public services by doing what we do: bringing together teams of experienced people to bring change about in public services — in this instance, people with wide and deep experience in ED&I in public services and the private sector.</p>
        <p>Examples of our work:</p>
        <ul><li>Diversity impact assessment for a Civil Service assessment centre, focused on eliminating unconscious bias and applying good practice</li><li>Development of diversity and inclusion strategies for a UK regulator and an arm’s-length body</li><li>EDI input to a Covid-19 economic recovery strategy and further support for a local enterprise partnership</li><li>Design and delivery of ‘Leadership in Diversity’ training for a police force and a council senior leadership team</li><li>Review of HR practice from an ED&I perspective for the Local Government Association</li></ul>
      </ServicePanel>

      <ServicePanel id="ict" title="ICT strategy and operations" image={serviceImages.ict} reverse contact={<Contact name="James Wickham" phone="07973 143303" email="james.wickham@redquadrant.com" />}>
        <p>We possess a wide range of services including project, programme and portfolio management to support strategic IT. Our highly experienced team includes ICT and systems consultants from across the sector, including specialists in:</p>
        <ul><li>IT applications that support local government services such as housing, children’s services, asset management, planning and environment, and their integration</li><li>Organisation-wide applications, including CRM, case management and document management</li><li>Assessing current systems and presenting options for change covering software, hardware, channel functionality and operations</li></ul>
        <p>Examples of our work:</p>
        <ul><li>South Lanarkshire: review of customer contact programme</li><li>Bolton at Home: Paving the Way Transformation Programme</li><li>Plymouth City Council: customer transformation</li><li>Nottingham City Homes: procurement of a CRM system and mobile-working strategic support</li></ul>
      </ServicePanel>

      <ServicePanel id="criminal-justice" title="Criminal justice" image={serviceImages.justice} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>We have experts in both adult and juvenile justice. Just as importantly, we have experts in local authority housing and care, and health. We can help local partners join up services to make sure that money and services are targeted as effectively as possible. We also know a lot about mutualisation and outsourcing, and can help criminal justice agencies think about these approaches. We’ve also worked overseas and can bring the best international practice to bear.</p>
        <p>Examples of our work:</p>
        <ul><li>Working with the Danish prison service to outline transformation plans for savings and service improvements, using Positive Deviance to identify real opportunities within the population for improved outcomes</li><li>Supplying surge capacity to the Metropolitan Police Service transformation programme, and leadership development for MPS and communications strategy for Leicestershire Police</li><li>MOPAC projects including a feasibility study for social investment in a gang-exit programme and a sustainability strategy for Child House</li></ul>
      </ServicePanel>

      <ServicePanel id="customer-service" title="Customer service and customer focus" image={serviceImages.customer} reverse contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>Designing service delivery models and operating models around the needs, perceptions and behaviours of service users is increasingly recognised as critical to an efficient and effective business model. Organisations also need to ensure that their purpose is clear and aligned with what they deliver and how they deliver it.</p>
        <ul><li>Can your organisation clearly state its purpose and map this onto how it engages service users?</li><li>Have you explored customer insight to simplify what you offer and focus on what matters?</li><li>Are customer experience and perceptions built into performance assessment and service management?</li><li>Can customer data, demographic profiling, personas and open-source data help?</li><li>Can deeper insight help you navigate automation and self-service?</li></ul>
        <p>Our approach is one of partnership and customer-centred change, focusing on the insights and issues that will provide useful, actionable learning.</p>
        <p>Examples include expert advice to the digital transformation of HM Courts and Tribunals Service over about 18 months; channel, technology and business-case reviews for social landlords; and helping Westminster close its one-stop shops while improving online and assisted self-service and saving over £1.2m a year.</p>
      </ServicePanel>

      <ServicePanel id="learning-organisational-development" title="Learning and organisational development" image={serviceImages.learning} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>Learning and organisational development is at the heart of the RedQuadrant offering.</p>
        <ul><li>Strategic consultancy, training, development, and individual and team coaching for Devon County Council’s ‘Doing What Matters’ programme</li><li>An ongoing partnership with Bristol City Council for leadership development, training and coaching through the Applied Programme, Bristol Leads and development for senior directors. The first four cohorts identified savings of over £11 million.</li><li>A blended transformational-change programme for the States of Guernsey, with online modules, face-to-face workshops and coaching</li><li>Leadership development and coaching for directors and heads of service at Leicester City Council</li><li>A cultural diagnostic and strategic cultural-change assignment with the Office for National Statistics Crime Statistics team</li><li>Ongoing coaching and support to senior leaders across a number of councils</li></ul>
      </ServicePanel>

      <ServicePanel id="human-resources" title="Human resources" image={serviceImages.hr} reverse contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <ul><li>Very senior, specialist HR consultants with strong practical experience: for the Cabinet Office we provided strategic HR and organisational design capability focused on job-profile review and redesign</li><li>Review for a central government department to challenge recruitment criteria and deliver comprehensive documentation for a range of activities</li><li>Pay audits, board remuneration reviews and work with higher education in Scotland</li><li>Building the capacity, capability and confidence of Guernsey’s HR department during major transformation</li><li>Reviewing HR while creating whole-organisation operating models, including West Lancashire’s target operating model</li><li>A recruitment and retention strategy for social work in a London borough following special measures</li><li>Further expertise in shared services, casework and investigations, development centres, focus groups, learning and development, leadership, prioritisation, HR systems and TUPE</li></ul>
      </ServicePanel>

      <ServicePanel id="commissioning" title="Commissioning" image={serviceImages.commissioning} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <p>We are leading-edge practitioners and thinkers on commissioning, from exploring and making accessible what place-based, complexity-informed and outcome-focused commissioning means, to supporting real co-design and a community-development focus. We convene place-based senior leaders to understand and engage with their place as a system, and offer practical skill-building for commissioners.</p>
        <p>Examples of our work:</p>
        <ul><li>Delivery of the Cabinet Office Commissioning Academy through the Public Service Transformation Academy</li><li>Development and capability-building of commissioning skills and behaviours for Kent</li><li>Outcomes-based commissioning review for Sutton</li><li>Whole-council commissioning approaches for Sefton and Knowsley</li><li>Review and restructure of Maidstone’s commissioning approach with a transformational focus</li></ul>
      </ServicePanel>

      <ServicePanel id="digital-change" title="Digital change and digital delivery" image={serviceImages.digitalGrid} reverse contact={<Contact name="James Wickham" phone="07973 143303" email="james.wickham@redquadrant.com" />}>
        <p>We help public services make digital change a service transformation, not simply a technology project. Our senior practitioners work with users, frontline teams, leaders and suppliers to redesign whole journeys and put the right delivery, data and technology arrangements behind them.</p>
        <ul><li>Digital strategy and operating models tied to organisational purpose and measurable service outcomes</li><li>User research, inclusive service design and end-to-end journey redesign across online, phone and face-to-face channels</li><li>Product, programme and portfolio leadership, including recovery of complex digital delivery</li><li>Data, architecture, integration and technology choices that improve rather than fragment the service</li><li>Supplier selection, procurement and assurance, with practical transfer of skills to in-house teams</li><li>Automation and self-service designed around real needs, accessibility and assisted-digital support</li></ul>
        <p>Our experience includes digital justice work with HM Courts and Tribunals Service; technology and channel transformation for councils and social housing providers; and assessment of digital opportunities in adult social care.</p>
        <img className="service-inline-image" src={serviceImages.digitalInterface.src} alt={serviceImages.digitalInterface.alt} loading="lazy" />
      </ServicePanel>

      <ServicePanel id="alternative-delivery-models" title="Alternative delivery models" image={serviceImages.delivery} contact={<Contact name="Benjamin Taylor" phone="07931 317230" email="benjamin.taylor@redquadrant.com" />}>
        <ul><li>Setting up mutuals, spin-outs and trading companies instead of outsourcing</li><li>Using social investment to solve long-standing problems</li><li>Using social marketing to nudge behaviour change</li><li>Developing tools to measure how effective preventative services really are</li><li>Using strengths-based approaches to solve local problems by finding answers within communities</li></ul>
        <p>Recent work includes developing and delivering the incubator process for the London Borough of Newham: helping services identify opportunities to trade and innovate, develop and negotiate business cases, and choose the appropriate legal form.</p>
      </ServicePanel>
    </div>
  );
}
