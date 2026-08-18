/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

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
          <p>The whole range of our expert consultancy is available through OJEU-compliant framework contracts, usually with a direct call-off option.</p>
          <p>For more information, <a href="/services">see our services</a>, email <a href="mailto:frameworks@redquadrant.com">frameworks@redquadrant.com</a> or call Managing Partner Benjamin Taylor on <a href="tel:07931317230">07931 317230</a>.</p>
          <p><strong>We offer urgent response, at scale if required.</strong></p>
        </div>
        <img src="https://static.wixstatic.com/media/6089cb4ae7f94a62b9e64693b29fbcd1.jpg/v1/crop/x_0,y_31,w_1924,h_1270/fill/w_1070,h_678,al_c,q_85,enc_avif,quality_auto/Urban%20Gardening.jpg" alt="People working together in an urban garden" />
      </section>

      <section className="framework-copy columns">
        <article><h2>A&amp;AS2 = Audit &amp; Assurance Services 2</h2><p>Operated by GCA (the new CCS)</p><ul><li>Lot 4</li></ul></article>
        <article><h2>Office of Government Procurement (Ireland)</h2><p>Multi Supplier Framework for the provision of Business, Management and ICT Consultancy Services</p><ul><li>Lots 1 and 7: Business Strategy and Operations</li><li>Lots 2 and 8: Organisational Change Management and Transformation</li><li>Lots 3 and 9: Project, Programme and Portfolio Management (P3M)</li><li>Lots 4 and 10: Business Process, Process Improvement and Process Reengineering</li></ul></article>
        <article><h2>Digital Outcomes and Specialists</h2><p>We can provide both digital outcomes and digital and related specialists through the framework.</p></article>
        <article><h2>HealthTrust Europe LLP</h2><p>Consultancy and advisory services framework created on behalf of Mid and South Essex NHS Foundation Trust. Lot 1 covers business consultancy, programme and project management, marketing and PR.</p></article>
        <article><h2>Bloom consultancy framework</h2><p>The NEPRO framework enables you to access our services through a direct option or mini-competition for a complete range of consultancy services.</p></article>
        <article><h2>ESPO framework 664 consultancy services</h2><p>We are available in these categories:</p><p>1 Business Services; 2d General Finance; 2e Procurement; 2f Revenues and Benefits; 4a Public Health; 4b Social Care (Adults); 4c Social Care (Children); 5 Highways, Traffic and Transport; 6b Strategic IT; 7 Leisure, Culture and Tourism; 8b Environmental and Sustainability; 8e Housing and Housing Support; 8g Regeneration and Regional Development; 8h Waste and Recycling; 9a Community Research and Engagement; 9b Marketing, Communications and PR; 10 Strategic Projects.</p></article>
        <article><h2>G-Cloud</h2><p>Through the digital marketplace. Our offer covers a wide range of transformation, enabling and training services that can be bought directly without an additional procurement process.</p></article>
        <article><h2>Constellia</h2><p>Our services are available through Constellia&apos;s neutral-vendor frameworks.</p></article>
        <article><h2>NHS SBS — SBS10197</h2><p>Lot 1: Business, Leadership, Management, Governance, Structure &amp; Strategy. Lot 2: Integrated Care, Healthcare &amp; Community Care. Lot 3: Commercialisation, Innovation &amp; Transformation.</p></article>
        <article><h2>Low Value Purchase System (LVPS) RM6237</h2><p>We are registered as providers of education and training services, permanent recruitment and contingent labour, and other community, social and personal services.</p></article>
        <article><h2>Matrix Milestones</h2><p>You can access our services through Matrix Milestone, a procurement vendor.</p></article>
      </section>
      <div className="frameworks-images">
        <img src="https://static.wixstatic.com/media/1dbf63bcfa6944adaeec06c692b0e28d.jpg/v1/crop/x_0,y_919,w_5355,h_1838/fill/w_572,h_196,al_c,q_85,enc_avif,quality_auto/Working%20from%20a%20Cafe.jpg" alt="People working together at a café" />
        <img src="https://static.wixstatic.com/media/e1f88fe1ad0f4844b50abde26bfc0a45.jpg/v1/fill/w_614,h_402,al_c,q_85,enc_avif,quality_auto/doing%20work%20together.jpg" alt="Colleagues doing work together" />
      </div>
    </div>
  );
}
