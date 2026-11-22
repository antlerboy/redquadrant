import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frameworks",
  description: "Public-sector frameworks and compliant routes to commission RedQuadrant consultancy and transformation support.",
  alternates: { canonical: "/frameworks" },
};

export default function FrameworksPage() {
  return (
    <div className="frameworks-page site-frame">
      <section className="frameworks-intro">
        <div>
          <h1>Procurement frameworks</h1>
          <p>Public bodies can commission RedQuadrant through the agreements listed here. Each agreement sets out which organisations can use it, which services it covers, and whether it permits direct award or requires competition.</p>
          <p>For more information, <Link href="/services">see our services</Link>, email <a href="mailto:frameworks@redquadrant.com">frameworks@redquadrant.com</a> or call Managing Partner Benjamin Taylor on <a href="tel:07931317230">07931 317230</a>.</p>

        </div>
      </section>

      <section className="framework-copy columns">
        <article><h2>Audit and Assurance Services Two (A&amp;AS2); RM6310</h2><p>Government Commercial Agency (GCA), formerly Crown Commercial Service. We are on Lot 4: Other independent assurance.</p><p><a href="https://www.gca.gov.uk/agreements/RM6310">View the Audit and Assurance Services Two framework</a></p></article>
        <article><h2>Office of Government Procurement (Ireland)</h2><p>Multi Supplier Framework for the provision of Business, Management and ICT Consultancy Services.</p><ul><li>Lots 1 and 7: Business Strategy and Operations</li><li>Lots 2 and 8: Organisational Change Management and Transformation</li><li>Lots 3 and 9: Project, Programme and Portfolio Management (P3M)</li><li>Lots 4 and 10: Business Process, Process Improvement and Process Reengineering</li></ul><p><a href="https://www.gov.ie/en/office-of-government-procurement/ogp-frameworks/business-management-and-ict-consultancy-consultant-services/">View the OGP consultancy framework</a></p></article>
        <article><h2>Digital Outcomes and Specialists 7; RM1043.9</h2><p>We are a supplier on Lot 1, Digital Outcomes, for outcome-based digital projects and user-centred service development.</p><p><a href="https://www.gca.gov.uk/agreements/RM1043.9">View the Digital Outcomes and Specialists 7 framework</a></p></article>
        <article><h2>HealthTrust Europe; SF053238</h2><p>Consultancy Solutions and Advisory Services. We are a supplier on Lot 1: Business Consultancy Solutions and Advisory Services, covering organisational change, programme and project management, and management consultancy.</p><p><a href="https://www.healthtrusteurope.com/public-sector/business-consultancy-solutions-and-advisory-services-lot-1/">View HealthTrust Europe&apos;s Lot 1 framework</a></p></article>
        <article><h2>Bloom consultancy framework</h2><p>The NEPRO route enables public-sector organisations to access our services through direct award or competition for a wide range of consultancy services.</p><p><a href="https://bloom.services/framework/nepro-3">View the Bloom NEPRO Three framework</a></p></article>
        <article><h2>ESPO Consultancy Services; 664-25</h2><p>We are available across a wide range of consultancy categories including business services, finance, procurement, public health, adult and children&apos;s social care, highways and transport, strategic IT, housing, regeneration, engagement, communications and strategic projects.</p><p><a href="https://www.espo.org/consultancy-services-664-25.html">View the ESPO Consultancy Services framework</a></p></article>
        <article><h2>G-Cloud 14: existing contracts</h2><p>G-Cloud 14 closed to new awards on 28 October 2026. Existing call-off contracts continue for their agreed terms. Our services under this framework cover transformation, service design, equality and inclusion, enterprise architecture, customer insight, programme and project management, and other support for transition to cloud services.</p><p><a href="https://www.gca.gov.uk/agreements/RM1557.14">View G-Cloud 14 contract information</a></p></article>
        <article><h2>Constellia</h2><p>Our services are available through Constellia&apos;s neutral-vendor procurement routes.</p><p><a href="https://www.constellia.com/solutions/public-sector-solutions/public-sector-frameworks/">View Constellia&apos;s procurement frameworks</a></p></article>
        <article><h2>NHS SBS; SBS10197</h2><p>Consultancy and Advisory Services for Health. Lot 1: Business, Leadership, Management, Governance, Structure &amp; Strategy. Lot 2: Integrated Care, Healthcare &amp; Community Care. Lot 3: Commercialisation, Innovation &amp; Transformation.</p><p><a href="https://www.sbs.nhs.uk/services/framework-agreements/consultancy-and-advisory-services-for-health/">View the NHS SBS Consultancy and Advisory Services for Health framework</a></p></article>
        <article><h2>Low Value Purchase System (LVPS); RM6237</h2><p>We are registered as providers of education and training services, permanent recruitment and contingent labour, and other community, social and personal services.</p><p><a href="https://www.gca.gov.uk/agreements/RM6237">View the Low Value Purchase System</a></p></article>
        <article><h2>Matrix Milestones</h2><p>You can access our services through Matrix Milestone, a procurement vendor.</p><p><a href="https://teammatrix.com/matrix-milestone-procurement-solutions/">View Matrix Milestone&apos;s procurement routes</a></p></article>
      </section>
    </div>
  );
}
