/* eslint-disable @next/next/no-img-element */
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
          <h1>Frameworks</h1>
          <p>The whole range of our expert consultancy is available through public-sector framework agreements and other compliant procurement routes, with direct award or further competition where the route permits.</p>
          <p>For more information, <Link href="/services">see our services</Link>, email <a href="mailto:frameworks@redquadrant.com">frameworks@redquadrant.com</a> or call Managing Partner Benjamin Taylor on <a href="tel:07931317230">07931 317230</a>.</p>
          <p><strong>We offer urgent response, at scale if required.</strong></p>
        </div>
        <img src="https://static.wixstatic.com/media/6089cb4ae7f94a62b9e64693b29fbcd1.jpg/v1/crop/x_0,y_31,w_1924,h_1270/fill/w_1070,h_678,al_c,q_85,enc_avif,quality_auto/Urban%20Gardening.jpg" alt="People working together in an urban garden" />
      </section>

      <section className="framework-copy columns">
        <article><h2>Audit and Assurance Services Two (A&amp;AS2) — RM6310</h2><p>Government Commercial Agency (GCA), formerly Crown Commercial Service. We are on Lot 4: Other independent assurance.</p></article>
        <article><h2>Office of Government Procurement (Ireland)</h2><p>Multi Supplier Framework for the provision of Business, Management and ICT Consultancy Services.</p><ul><li>Lots 1 and 7: Business Strategy and Operations</li><li>Lots 2 and 8: Organisational Change Management and Transformation</li><li>Lots 3 and 9: Project, Programme and Portfolio Management (P3M)</li><li>Lots 4 and 10: Business Process, Process Improvement and Process Reengineering</li></ul></article>
        <article><h2>Digital Outcomes and Specialists 7 — RM1043.9</h2><p>We are a supplier on Lot 1, Digital Outcomes, for outcome-based digital projects and user-centred service development.</p></article>
        <article><h2>HealthTrust Europe — SF053238</h2><p>Consultancy Solutions and Advisory Services. We are a supplier on Lot 1: Business Consultancy Solutions and Advisory Services, covering organisational change, programme and project management, and management consultancy.</p></article>
        <article><h2>Bloom consultancy framework</h2><p>The NEPRO route enables public-sector organisations to access our services through direct award or competition for a wide range of consultancy services.</p></article>
        <article><h2>ESPO Consultancy Services — 664-25</h2><p>We are available across a wide range of consultancy categories including business services, finance, procurement, public health, adult and children&apos;s social care, highways and transport, strategic IT, housing, regeneration, engagement, communications and strategic projects.</p></article>
        <article><h2>G-Cloud 14</h2><p>Our Digital Marketplace services cover transformation, service design, equality and inclusion, enterprise architecture, customer insight, programme and project management, and other support for transition to cloud services.</p></article>
        <article><h2>Constellia</h2><p>Our services are available through Constellia&apos;s neutral-vendor procurement routes.</p></article>
        <article><h2>NHS SBS — SBS10197</h2><p>Consultancy and Advisory Services for Health. Lot 1: Business, Leadership, Management, Governance, Structure &amp; Strategy. Lot 2: Integrated Care, Healthcare &amp; Community Care. Lot 3: Commercialisation, Innovation &amp; Transformation.</p></article>
        <article><h2>Low Value Purchase System (LVPS) — RM6237</h2><p>We are registered as providers of education and training services, permanent recruitment and contingent labour, and other community, social and personal services.</p></article>
        <article><h2>Matrix Milestones</h2><p>You can access our services through Matrix Milestone, a procurement vendor.</p></article>
      </section>
      <div className="frameworks-images">
        <img src="https://static.wixstatic.com/media/1dbf63bcfa6944adaeec06c692b0e28d.jpg/v1/crop/x_0,y_919,w_5355,h_1838/fill/w_572,h_196,al_c,q_85,enc_avif,quality_auto/Working%20from%20a%20Cafe.jpg" alt="People working together at a café" />
        <img src="https://static.wixstatic.com/media/e1f88fe1ad0f4844b50abde26bfc0a45.jpg/v1/fill/w_614,h_402,al_c,q_85,enc_avif,quality_auto/doing%20work%20together.jpg" alt="Colleagues doing work together" />
      </div>
    </div>
  );
}
