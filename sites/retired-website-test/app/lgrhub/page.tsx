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
          <aside className="lgr-opening-quotes"><blockquote>“The deeper challenges are structural and relational”</blockquote><p>The councils that will emerge strongest from LGR are the ones using this moment to ask the harder questions about how their new organisations will work.</p><p>Willingness to provide honest, independent challenge is what distinguishes genuine assurance from document review.</p></aside>
          <div className="lgr-opening-copy">
            <p className="eyebrow">Local Government Reorganisation</p>
            <h1>From Business Case to Day One — and Beyond</h1>
            <p className="lgr-lede">Vesting day is fixed in law. The window for preparation is real. And the hardest problems are not the ones most LGR programmes are currently focused on.</p>
            <p>Governance, finance, HR and ICT matter. But the deeper challenges are structural and relational: overloaded leadership systems, fragmented decision making, competing incentives, weak organisational learning, and management systems that do not change just because the boundary lines do.</p>
            <p>That is where our work contributes: building the institutional capability to operate effectively as new organisations under real-world pressure, so reorganisation leads to better outcomes for the communities and citizens these new councils will serve.</p>
            <p>We work across partnership configurations that range from strategic advice alongside your Chief Executive and senior responsible owner to integrated programme delivery, targeted specialist capability, innovation and long-term transformation. Each is designed to match where you are in the reorganisation journey. They can be deployed independently or combined as your programme evolves.</p>
            <h2>What comes next</h2>
            <p>Most places are now moving beyond business-case development into the harder territory of implementation, transition and Day One readiness.</p>
            <p>The councils that will emerge strongest from LGR are not necessarily the ones with the cleanest diagrams, the biggest projected savings or the most detailed plans. They are the ones using this moment to ask the harder questions about how their new organisations will actually work and investing in the institutional and organisational capability needed to operate effectively under real-world pressure. They are actively building transformation capacity and developing the flexible working relationships, leadership behaviours and processes that will be essential for change.</p>
            <p>We are already helping councils prepare for this next phase, strengthening operational leadership, governance and accountability, and building the practical systems-thinking capability needed to manage complex transitions without losing grip on service delivery.</p>
            <p>The risk for most places is not a lack of ambition. It is that implementation moves faster than institutional capacity can keep up. The councils that get this right will stay focused on what reorganisation is actually for: improved outcomes for people, stronger communities and public services that work better because the system behind them was designed to.</p>
            <h2>Experience under real pressure</h2>
            <p>Our experience is what enabled us to deliver an LGR business case for Essex from a standing start to publication in seven weeks, produce a published social-care blueprint for Cambridgeshire, and prepare a 39-worksheet decision-support model for Lancashire in five weeks. More importantly, those commissions required us to work alongside officers and members under the same pressures, deadlines and scrutiny that every LGR programme faces. Going forward, our associates draw on direct experience of previous LGR rounds to provide invaluable insight into implementation preparation and capacity building.</p>
            <p>We were prepared to say clearly where proposals were not yet at the required standard and set out precisely what needed to change. That willingness to provide honest, independent challenge is what distinguishes genuine assurance from document review. It is the same independence, honesty and practical support we bring to implementation, transition and Day One readiness.</p>
            <div className="lgr-value-grid">
              <article><h2>How your investment works for you</h2><p>We are not a traditional consulting firm. We have a flat structure, a lean operations team and minimal overhead. The majority of your investment goes directly into the specialist support your programme needs, not layers of management, brand premiums or graduate analysts learning on your time.</p><p>With us, the people you meet are the people who do the work: building a financial model, writing an operating model, running a workshop or sitting alongside officers and members through a difficult conversation.</p></article>
              <article><h2>Practitioner depth</h2><p>The people on your programme are experienced practitioners who have held senior leadership and delivery roles across local government, the NHS, central government and the wider public and private sector. They have run services, managed budgets, led transformation and worked through public-sector change first-hand.</p><p>We draw on a national network of over 2,000 senior practitioners and bring in tried-and-tested expert partners where the programme requires capability beyond our core team.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="lgr-track site-frame">
        <h2>Our LGR track record</h2>
        <p>During 2025–26, we worked alongside councils and partnerships across four LGR programme areas, developing options appraisals, business cases, financial modelling, governance arrangements and implementation planning under compressed national timescales. Across every engagement, we worked as an integrated partner inside council-led programmes, recognising that the quality of the process matters as much as the outputs.</p>
        <p>Councils need confidence that their advisory partner can deliver the programme discipline, analytical rigour and structured governance they would expect from any major consultancy. We provide that from inside your programme, not alongside it. Our people sit with your officers, understand your politics and stay accountable to your timescales.</p>
        <p>You get the assurance of a structured, evidence-led approach and the responsiveness of a team genuinely embedded in your context. Drawing on direct experience of previous LGR journeys, we bring people who have held the leadership roles, managed the risks, navigated the politics and delivered through transition.</p>

        <h2 className="case-heading">Case studies</h2>
        <div className="lgr-cases">
          <CaseStudy title="Best4Essex" subtitle="Rochford District Council" partner="01 Strategic Partner">
            <h4>The challenge</h4><p>Rochford District Council needed to develop and publish a credible LGR proposal from a standing start within seven weeks. It was operating within a Greater Essex system of competing proposals, evolving MHCLG guidance and significant political complexity across 15 councils, with no existing programme infrastructure, agreed business-case framework or specialist capacity.</p>
            <h4>How we showed up</h4><p>We embedded alongside council leadership from day one as an integrated partner. Our role combined strategic advisory, programme architecture and hands-on delivery coordination. We coordinated governance, finance, service design and implementation inputs and helped develop a place-based proposition that was both credible and distinctive.</p>
            <h4>What we delivered</h4><ul><li>End-to-end business-case development from concept to publication in seven weeks</li><li>Executive summary and full business case</li><li>A compelling, viable vision grounded in local geography and benefits</li><li>Programme delivery architecture and governance framework</li><li>Stakeholder engagement and place-based narrative</li><li>Coordinated finance, governance, service-design and implementation inputs</li><li>A published proposal aligned with MHCLG guidance and Greater Essex context</li></ul>
          </CaseStudy>

          <CaseStudy title="Lancashire County Council" subtitle="Comparative options appraisal, financial modelling and decision support" partner="02 Integrated Delivery Partner">
            <h4>The challenge</h4><p>Lancashire needed evidence for Executive Leadership Team discussions on LGR within about one month. There was no agreed preferred unitary model, limited consensus between tiers and no robust independent financial modelling available to support comparative assessment.</p>
            <h4>How we showed up</h4><p>We mobilised rapidly with senior officers, finance leads and programme teams. We developed dual evaluation frameworks aligned with MHCLG and Norfolk methodologies, incorporating 16 sub-criteria across six unitary configurations, while building a dynamic financial model from local baseline data through eight major iterations in under five weeks.</p>
            <h4>What we delivered</h4><ul><li>Comparative, scored appraisal of six unitary configurations</li><li>Detailed evidence packs and Five Case Model-aligned summaries</li><li>Baseline data for all 15 Lancashire councils</li><li>A 39-worksheet model covering all configurations with base, stretch and negative scenarios</li><li>Eight-year savings profiles, service-disaggregation, transition and implementation costs</li><li>Benchmarking, sensitivity testing and tailored ELT presentation packs</li></ul><p>The final outputs gave Lancashire a reusable analytical foundation for subsequent Strategic, Financial and Economic Case development.</p>
          </CaseStudy>

          <CaseStudy title="Exeter City Council" subtitle="SME mobilisation, service design and operational planning" partner="02 Integrated Delivery Partner · 03 Targeted Capability Partner">
            <h4>The challenge</h4><p>Exeter was developing a proposal for a future Devon unitary structure across three- and four-unitary configurations. It needed specialist capacity across adult and children’s social care, SEND, education, transport, highways, waste and economic growth within a fast-moving and politically sensitive environment.</p>
            <h4>How we showed up</h4><p>We worked as a critical friend and integrated delivery partner, strengthening arguments and coherence while providing specialist operational expertise. We focused on how services, partnerships, governance and delivery responsibilities would function from vesting day, building on strengths already present in the local system.</p>
            <h4>What we delivered</h4><ul><li>Operating models and transition plans for adults’ and children’s social care</li><li>SEND, education, safeguarding, commissioning and provider-market analysis</li><li>Neighbourhood and prevention model design and safe-and-legal planning</li><li>Transport governance, highways and infrastructure transition analysis</li><li>Waste and recycling delivery-model assessment</li><li>Economic-growth narrative, devolution alignment and delivery challenge</li><li>The proposal’s executive summary, integrating all service areas</li></ul>
          </CaseStudy>

          <CaseStudy title="Cambridge City Council" subtitle="Cambridgeshire & Peterborough future operating model and system convening" partner="03 Targeted Capability Partner">
            <h4>The challenge</h4><p>Cambridge was leading Option B: a two-unitary proposal for Greater Cambridgeshire and North Cambridgeshire and Peterborough. A critical question was whether the proposed authorities could deliver social care and public health safely, legally and sustainably from vesting day, without access to county-level datasets.</p>
            <h4>How we showed up</h4><p>We worked across participating councils, bringing direct experience in adults’ and children’s services, SEND, public health, finance, policy and economics. We also designed system-convening work around operational implications, dependencies and delivery risks.</p>
            <h4>What we delivered</h4><ul><li>The published annex ‘A Future Blueprint for Social Care and Public Health’</li><li>A detailed statutory and operational blueprint across both proposed authorities</li><li>Demand analysis, implementation planning and risk assessment using national benchmarks</li><li>Independent quality assurance and strategic challenge across the wider business case</li><li>A whole-system working session on statutory transfers, workforce, commissioning, disaggregation risk and early collective planning</li></ul>
          </CaseStudy>

          <CaseStudy title="Westmorland and Furness Council" subtitle="Post-vesting transformation: business support baselining and future operating model" partner="03 Targeted Capability Partner · 04 Innovation and Impact Partner">
            <h4>The challenge</h4><p>Two years after the new unitary council was established, business-support functions were still using different systems, processes and practices inherited from four predecessor organisations. The council needed a clear picture of current activity, improvement potential and where harmonisation could deliver better value.</p>
            <h4>How we showed up</h4><p>We carried out a collaborative baselining review, established a 20-person cross-service working group and used a senior-management forum to test findings. Across three months we moved through mobilisation, discovery, design and engagement, sharing visual findings weekly.</p>
            <h4>What we delivered</h4><ul><li>Detailed business-support profiles for each service area</li><li>A baseline of more than 330 processes</li><li>Analysis of technology constraints and underused systems</li><li>Digitisation and automation candidates and practical quick wins</li><li>A recommended hybrid future model grounded in evidence and stakeholder insight</li></ul>
          </CaseStudy>

          <CaseStudy title="Independent quality assurance" subtitle="Submission readiness and strategic challenge" partner="Independent Assurance">
            <p>Alongside business-case development, we provided independent QA and submission-readiness reviews across multiple proposals. This went beyond editorial review: we assessed whether drafts met the standard required for MHCLG consideration, testing statutory alignment, the Government’s six tests and emerging ministerial criteria.</p>
            <h4>What this involved</h4><ul><li>National comparative benchmarking</li><li>Assessment of financial resilience, sustainable services, deliverability, functional coherence, devolution readiness and local support</li><li>Identification of evidence gaps, delivery risks and implementation vulnerabilities</li><li>Review of financial and operational credibility, governance and transition planning</li><li>Strategic positioning, narrative strengthening and prioritised recommendations</li></ul>
            <p>We were prepared to say clearly where proposals were not yet at the required standard and precisely what needed to change. That willingness to provide honest, independent challenge is what distinguishes genuine assurance from document review.</p>
          </CaseStudy>
        </div>
      </section>

      <section className="lgr-hub-offer">
        <div className="site-frame">
          <div className="lgr-hub-hero">
            <div><p className="eyebrow">LGR &amp; Devolution Hub</p><h2>The LGR Partnership</h2><p className="big-line">Most LGR support stops at advice.<br /><strong>We don’t.</strong></p><p>Local Government Reorganisation is politically exposed, operationally risky and statutorily live — often all at once. The question isn’t whether to act. It’s whether the people alongside you have been through it before.</p><p><strong>We stay in the room through the uncertainty, into delivery and past vesting.</strong></p></div>
            <img src="/assets/owned/dcd04e317207e6d2.jpg" alt="A creative public-service team working together" />
          </div>
          <div className="lgr-stats"><div><strong>100+</strong><span>Councils</span></div><div><strong>~2,000</strong><span>Practitioners</span></div><div><strong>2009</strong><span>Founded</span></div></div>
          <div className="lgr-offer-grid">
            <div><h3>Strategic Partner</h3><p>Senior judgement alongside your Chief Executive and senior responsible owner. No parallel structures. For when judgement matters more than activity.</p></div>
            <div><h3>Integrated Delivery Partner</h3><p>The programme spine — grip, dependency management and Day One readiness. For when the programme needs structure that holds.</p></div>
            <div><h3>Targeted Capability Partner</h3><p>Specialist depth exactly where risk concentrates. Scoped, time-bound and inside your governance.</p></div>
          </div>
          <h3>One commitment</h3><p>We stay in the room through the uncertainty, into delivery and past vesting. Not frameworks borrowed from other people’s experience — commitments based on ours.</p>
          <h3>What makes it different</h3>
          <div className="lgr-difference-grid"><article><h4>10–20% secondees</h4><p>Council staff fill a fifth of Hub roles. Institutional memory is built inside the council, not held by a consultancy. Knowledge stays local.</p></article><article><h4>Inside governance, not alongside it</h4><p>No shadow PMO and no parallel machinery. The Hub operates within your governance structures.</p></article><article><h4>Transformation built in from day one</h4><p>Councils do not choose between compliance and ambition. Adult and children’s social care target operating models live from Day One.</p></article><article><h4>Pastoral and induction support</h4><p>Explicit support for the human reality of structural change. Personal uncertainty is a leadership challenge, not a communications one.</p></article><article><h4>~2,000 practitioners. One interface.</h4><p>Senior depth across statutory services, ICT, finance, workforce, engagement and place — without supplier sprawl.</p></article></div>
          <h3>Three outcomes, every time</h3>
          <div className="lgr-outcomes"><article><h4>Safe and legal on Day One</h4><p>Statutory roles secured. ICT cutovers rehearsed. Services tested. Residents experience continuity.</p></article><article><h4>Confidence in delivery</h4><p>One structure and one version of the truth. Leaders have visible assurance; members, officers and staff are aligned.</p></article><article><h4>Knowledge embedded — not borrowed</h4><p>Skills and institutional memory built locally. When we leave, you will not need us any more. That is the point.</p></article></div>
          <div className="lgr-milestones"><h3>Key milestones</h3><p><span>Spring 2026</span> Readiness phase begins</p><p><span>Mid 2026</span> Structural Change Order (SCO)</p><p><span>April 2027</span> Vesting Day — DPP unitaries</p><p><span>April 2028</span> Vesting Day — all others</p></div>

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
            <article><img src="/assets/owned/5bc8d8edc41170d9.png" alt="LGR Partnership Architecture brochure cover" /><h3>LGR Partnership Architecture</h3><p>Strategic Partner • Integrated Delivery • Targeted Capability.</p><a href="https://www.redquadrant.com/_files/ugd/12b1f3_d680b0e8ed4f4f0b84a9a0925dfe2c51.pdf" target="_blank" rel="noreferrer">Download PDF</a></article>
            <article><img src="/assets/owned/1522d86cfad61dcb.png" alt="LGR and Devolution Hub brochure cover" /><h3>LGR &amp; Devolution Hub</h3><p>Assurance • Transition • Transformation • Renewal.</p><a href="https://www.redquadrant.com/_files/ugd/12b1f3_f75b796f3782412cbd42c770507c861d.pdf" target="_blank" rel="noreferrer">Download PDF</a></article>
            <article><img src="/assets/owned/282d1b900c8fb35c.png" alt="Readiness Workshops brochure cover" /><h3>Making the waiting time count</h3><p>Practical readiness, confidence and system alignment — starting now.</p><a href="https://www.redquadrant.com/_files/ugd/12b1f3_1e8d17187dbf49b98c27c163ba0f8f19.pdf" target="_blank" rel="noreferrer">Download PDF</a></article>
          </div>
          <div className="lgr-contact"><h2>Let’s start a conversation</h2><p><strong>Benjamin Taylor</strong><br />Managing Partner<br /><a href="tel:07931317230">07931 317230</a><br /><a href="mailto:benjamin.taylor@redquadrant.com">benjamin.taylor@redquadrant.com</a></p><p><strong>Naseema Khan</strong><br />Managing Consultant<br /><a href="tel:07879896855">07879 896855</a><br /><a href="mailto:naseema.khan@redquadrant.com">naseema.khan@redquadrant.com</a></p></div>
        </div>
      </section>
    </div>
  );
}
