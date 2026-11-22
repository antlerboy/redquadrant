/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Government Reorganisation Hub",
  description: "RedQuadrant support for local government reorganisation from business case and assurance through transition, Day One and transformation.",
  alternates: { canonical: "/lgrhub" },
};

const lgrVideos = [
  {
    id: "YDhsdGVVBsg",
    title: "LGR leadership with Manjeet Gill of Salisbury",
  },
  {
    id: "SEUi5V5GEWE",
    title: "Our local government reorganisation partnership with Foundations",
  },
  {
    id: "LCh6cCjUaPI",
    title: "Leading LGR with Greg Campell of Rochford and Brentwood",
  },
  {
    id: "mTWVgKTmYM8",
    title: "The sustainability pillar with Andrew Humphreys",
  },
] as const;

function CaseStudy({ title, subtitle, partner, children }: { title: string; subtitle: string; partner: string; children: React.ReactNode }) {
  return <article className="lgr-case"><header><h3>{title}</h3><p>{subtitle}</p><span>{partner}</span></header>{children}</article>;
}

export default function LgrHubPage() {
  return (
    <div className="lgr-page">
      <section className="lgr-opening">
        <div className="site-frame lgr-opening-inner">
          <div className="lgr-opening-copy">
            <h1>Local government reorganisation</h1>
            <p className="lgr-lede">When councils merge or split, somebody still has to answer a safeguarding call and pay the care provider. RedQuadrant works with officers and elected members on who takes responsibility for each service when the new council takes over.</p>
            <p>We compare options, build financial models, and test proposals against what councils can deliver. Once ministers decide the boundaries, we help staff plan the transfer, rehearse what happens on the first day, and resolve problems that emerge afterwards.</p>
            <a href="#council-work">Read about work with councils in Essex, Lancashire, Cambridgeshire, and elsewhere</a>
          </div>
        </div>
      </section>

      <section className="lgr-track site-frame" id="council-work">
        <h2>Work with councils</h2>
        <p>In 2025–26 we worked with councils and partnerships across four reorganisation programme areas. Rochford had seven weeks to publish its Essex proposal. In Lancashire, we built a 39-worksheet financial model in five weeks. The councils’ decisions, the information available, and our responsibilities differed in each place.</p>

        <div className="lgr-cases">
          <CaseStudy title="Best4Essex" subtitle="Rochford District Council" partner="01 Strategic Partner">
            <h4>The challenge</h4><p>Rochford District Council needed to develop and publish a credible LGR proposal within seven weeks. It was operating within a Greater Essex system of competing proposals, changing guidance from the Ministry of Housing, Communities and Local Government (MHCLG) and significant political complexity across 15 councils, with no existing programme infrastructure, agreed business-case framework or specialist capacity.</p>
            <h4>Our role</h4><p>We worked with Rochford’s leadership to write the business case. We brought the governance, finance, service design, and implementation contributions into a single proposal.</p>
            <h4>What we produced</h4><ul><li>End-to-end business-case development from concept to publication in seven weeks</li><li>Executive summary and full business case</li><li>A compelling, viable vision grounded in local geography and benefits</li><li>Programme delivery architecture and governance framework</li><li>Stakeholder engagement and place-based narrative</li><li>Coordinated finance, governance, service-design and implementation inputs</li><li>A published proposal aligned with MHCLG guidance and Greater Essex context</li></ul>
          </CaseStudy>

          <CaseStudy title="Lancashire County Council" subtitle="Comparative options appraisal, financial modelling and decision support" partner="02 Integrated Delivery Partner">
            <h4>The challenge</h4><p>Lancashire needed evidence for Executive Leadership Team discussions on LGR within about one month. There was no agreed preferred unitary model, limited consensus between tiers and no robust independent financial modelling available to support comparative assessment.</p>
            <h4>Our role</h4><p>We mobilised rapidly with senior officers, finance leads and programme teams. We developed dual evaluation frameworks aligned with MHCLG and Norfolk methodologies, incorporating 16 sub-criteria across six unitary configurations, while building a dynamic financial model from local baseline data through eight major iterations in under five weeks.</p>
            <h4>What we produced</h4><ul><li>Comparative, scored appraisal of six unitary configurations</li><li>Detailed evidence packs and Five Case Model-aligned summaries</li><li>Baseline data for all 15 Lancashire councils</li><li>A 39-worksheet model covering all configurations with base, stretch and negative scenarios</li><li>Eight-year savings profiles, service-disaggregation, transition and implementation costs</li><li>Benchmarking, sensitivity testing and tailored ELT presentation packs</li></ul><p>The final outputs gave Lancashire a reusable analytical foundation for subsequent Strategic, Financial and Economic Case development.</p>
          </CaseStudy>

          <CaseStudy title="Exeter City Council" subtitle="SME mobilisation, service design and operational planning" partner="02 Integrated Delivery Partner · 03 Targeted Capability Partner">
            <h4>The challenge</h4><p>Exeter was developing a proposal for a future Devon unitary structure across three- and four-unitary configurations. It needed specialist capacity across adult and children’s social care, SEND, education, transport, highways, waste and economic growth within a fast-moving and politically sensitive environment.</p>
            <h4>Our role</h4><p>We reviewed how services would operate once the new authority took over, checked who would be accountable, and helped officers revise the proposal.</p>
            <h4>What we produced</h4><ul><li>Operating models and transition plans for adults’ and children’s social care</li><li>SEND, education, safeguarding, commissioning and provider-market analysis</li><li>Neighbourhood and prevention model design and safe-and-legal planning</li><li>Transport governance, highways and infrastructure transition analysis</li><li>Waste and recycling delivery-model assessment</li><li>Economic-growth narrative, devolution alignment and delivery challenge</li><li>The proposal’s executive summary, integrating all service areas</li></ul>
          </CaseStudy>

          <CaseStudy title="Cambridge City Council" subtitle="Cambridgeshire & Peterborough future operating model and system convening" partner="03 Targeted Capability Partner">
            <h4>The challenge</h4><p>Cambridge was leading Option B: a two-unitary proposal for Greater Cambridgeshire and North Cambridgeshire and Peterborough. A critical question was whether the proposed authorities could deliver social care and public health safely, legally and sustainably from vesting day (when the new authority assumes its duties), without access to county-level datasets.</p>
            <h4>Our role</h4><p>We worked across participating councils, bringing direct experience in adults’ and children’s services, SEND, public health, finance, policy and economics. We also designed system-convening work around operational implications, dependencies and delivery risks.</p>
            <h4>What we produced</h4><ul><li>The published annex ‘A Future Blueprint for Social Care and Public Health’</li><li>A detailed statutory and operational blueprint across both proposed authorities</li><li>Demand analysis, implementation planning and risk assessment using national benchmarks</li><li>Independent quality assurance and strategic challenge across the wider business case</li><li>A whole-system working session on statutory transfers, workforce, commissioning, disaggregation risk and early collective planning</li></ul>
          </CaseStudy>

          <CaseStudy title="Westmorland and Furness Council" subtitle="Post-vesting transformation: business support baselining and future operating model" partner="03 Targeted Capability Partner · 04 Innovation and Impact Partner">
            <h4>The challenge</h4><p>Two years after the new unitary council was established, business-support functions were still using different systems, processes and practices inherited from four predecessor organisations. The council needed a clear picture of current activity, improvement potential and where harmonisation could deliver better value.</p>
            <h4>Our role</h4><p>Over three months, a working group of 20 people from different services helped us document how business support worked. We shared drawings of our findings each week and tested them with senior managers.</p>
            <h4>What we produced</h4><ul><li>Detailed business-support profiles for each service area</li><li>A baseline of more than 330 processes</li><li>Analysis of technology constraints and underused systems</li><li>Digitisation and automation candidates and practical quick wins</li><li>A recommendation on which support to share across the council and which to keep within individual services</li></ul>
          </CaseStudy>

          <CaseStudy title="Independent quality assurance" subtitle="Submission readiness and strategic challenge" partner="Independent Assurance">
            <p>Alongside business-case development, we provided independent QA and submission-readiness reviews across multiple proposals. We checked draft proposals against statutory requirements, the Government’s six tests, and emerging ministerial criteria.</p>
            <h4>What this involved</h4><ul><li>National comparative benchmarking</li><li>Assessment of financial resilience, sustainable services, deliverability, functional coherence, devolution readiness and local support</li><li>Identification of evidence gaps, delivery risks and implementation vulnerabilities</li><li>Review of financial and operational credibility, governance and transition planning</li><li>Strategic positioning, narrative strengthening and prioritised recommendations</li></ul>
            <p>Where the supporting evidence fell short, we identified what officers needed to add or reconsider before submission.</p>
          </CaseStudy>
        </div>
      </section>

      <section className="lgr-hub-offer">
        <div className="site-frame">
          <div className="lgr-hub-hero">
            <div><h2>The Local Government Reorganisation and Devolution Hub</h2><p>The Hub brings RedQuadrant practitioners and specialist partners into a council’s own reorganisation programme. A council can commission advice to its leadership, people to help run the programme, or specialists for one decision or service.</p></div>
            <img src="/assets/owned/dcd04e317207e6d2.jpg" alt="" loading="lazy" />
          </div>
          <h3>Ways councils use the Hub</h3>
          <div className="lgr-offer-grid">
            <div><h4>Advice to leaders</h4><p>A senior adviser works with the chief executive and the officer accountable for the programme. They test proposals and bring unresolved decisions to the people who can make them.</p></div>
            <div><h4>Programme delivery</h4><p>Our practitioners join the council’s programme team. They plan service transfers, identify work that depends on another council, and check readiness with service managers.</p></div>
            <div><h4>Specialist work</h4><p>A named specialist can take on a specific piece of work, such as a financial model or a social care transition plan, within the council’s own governance arrangements.</p></div>
          </div>
          <h3>Preparing for vesting day</h3>
          <p>We plan for council staff on secondment to fill 10–20% of Hub roles so the authority retains that experience. Managers and staff need time for induction, clarity about their new responsibilities, and a way to raise concerns throughout the transfer.</p>
          <p>Before vesting, the programme team checks statutory posts, rehearses IT changeovers, and tests whether services can respond on day one. In adult and children’s social care, that includes agreeing how a case reaches the person who now holds responsibility.</p>
          <div className="lgr-milestones"><h3>Dates for each council</h3><p>Find proposals, decisions, and notices for each area in the <a href="https://www.gov.uk/government/collections/local-government-reorganisation-policy-and-programme-updates">government’s local government reorganisation collection</a>.</p></div>

          <section className="lgr-videos" aria-labelledby="lgr-video-heading">
            <div className="lgr-video-heading">
              <p className="eyebrow">Watch and listen</p>
              <h3 id="lgr-video-heading">Perspectives from the LGR &amp; Devolution Hub</h3>
              <p>Leaders and practitioners discuss what reorganisation asks of councils, partnerships and the people doing the work.</p>
            </div>
            <div className="lgr-video-grid">
              {lgrVideos.map(video => (
                <article key={video.id}>
                  <div className="lgr-video-frame">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <h4>{video.title}</h4>
                </article>
              ))}
            </div>
          </section>

          <div className="lgr-downloads">
            <article><img src="/assets/owned/5bc8d8edc41170d9.png" alt="LGR Partnership Architecture brochure cover" /><h3>LGR Partnership Architecture</h3><p>Options for commissioning advisory and delivery support.</p><a href="/_files/ugd/12b1f3_d680b0e8ed4f4f0b84a9a0925dfe2c51.pdf" target="_blank" rel="noreferrer">Download the partnership brochure (PDF)</a></article>
            <article><img src="/assets/owned/1522d86cfad61dcb.png" alt="LGR and Devolution Hub brochure cover" /><h3>LGR &amp; Devolution Hub</h3><p>How the Hub works with officers and members during the transfer.</p><a href="/_files/ugd/12b1f3_f75b796f3782412cbd42c770507c861d.pdf" target="_blank" rel="noreferrer">Download the Hub brochure (PDF)</a></article>
            <article><img src="/assets/owned/282d1b900c8fb35c.png" alt="Readiness Workshops brochure cover" /><h3>Making the waiting time count</h3><p>Workshops to prepare staff for the transfer.</p><a href="/_files/ugd/12b1f3_1e8d17187dbf49b98c27c163ba0f8f19.pdf" target="_blank" rel="noreferrer">Download the workshop guide (PDF)</a></article>
          </div>
          <div className="lgr-contact"><h2>Contact the reorganisation team</h2><p><strong>Benjamin Taylor</strong><br />Managing Partner<br /><a href="tel:07931317230">07931 317230</a><br /><a href="mailto:benjamin.taylor@redquadrant.com">benjamin.taylor@redquadrant.com</a></p><p><strong>Naseema Khan</strong><br />Managing Consultant<br /><a href="tel:07879896855">07879 896855</a><br /><a href="mailto:naseema.khan@redquadrant.com">naseema.khan@redquadrant.com</a></p></div>
        </div>
      </section>
    </div>
  );
}
