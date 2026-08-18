import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join us",
  description: "Join RedQuadrant's selected community of experienced freelance public-service consultants.",
  alternates: { canonical: "/joinus" },
};

export default function JoinUsPage() {
  return (
    <>
      <section className="join-hero">
        <div className="site-frame join-hero-inner">
          <p className="join-email">Send your CV and covering email<br />to <a href="mailto:recruitment@redquadrant.com">recruitment@redquadrant.com</a></p>
          <h1>Join us</h1>
          <p className="join-line">We believe in conversation and we would love to hear from you!</p>
        </div>
      </section>
      <section className="join-copy site-frame">
        <div className="join-intro">
          <h2>Expert freelance consultants</h2>
          <p>At RedQuadrant, we practice what we preach. We operate a ‘lean’ business model and therefore directly employ only a very small team: managing partners, a director and a small administrative staff.</p>
          <p>We deliver our projects from a strictly selected and closely supported pool of independent consultants. For clients this means that we can offer far more flexibility and lower cost than traditional consulting firms. Our consultants enjoy the stimulating team environment, feel more in control of their personal and career development, and value the support they gain during and between projects.</p>
          <p>Our teams can offer an impressive arsenal of experience, support and resources because of the combination of independent consultants with strong project, process, team and client management — and the knowledge drawn from across our entire business.</p>
          <p>We are always interested in talking to top-class independent consultants based in the UK about working with us on an exciting portfolio of full- and part-time transformation projects.</p>
          <p>As one of our consultants, you would join a growing team who are passionate about delivering worthwhile and sustainable change in the public sector.</p>
          <p>We work with freelance consultants who have public-service experience. Right now we aren&apos;t taking on any junior graduate consultants, though this may change in the future.</p>
          <p className="join-email dark">Send your CV and covering email<br />to <a href="mailto:recruitment@redquadrant.com">recruitment@redquadrant.com</a></p>
        </div>
        <div className="join-lists">
          <article>
            <h2>Typically our consultants will have experience of:</h2>
            <ul><li>Delivery of change projects within the public sector, preferably local public services</li><li>Project &amp; programme management</li><li>Building business cases for change</li><li>Engaging senior stakeholders throughout the transformation life-cycle</li><li>Working within local public services as an internal change agent and/or as an external consultant from one of the larger consultancies</li><li>Lean and systems thinking</li><li>Business analysis &amp; process improvement</li><li>Change management</li><li>Rapid improvement events, service design and prototyping</li><li>Facilitation</li><li>Organisational development</li><li>Skills transfer</li></ul>
          </article>
          <article>
            <h2>Your experience of implementing sustainable change in these business areas is currently of particular interest:</h2>
            <ul><li>Adult &amp; children’s services, especially commissioning</li><li>Procurement</li><li>Governance</li><li>Performance and contract management</li><li>Shared services</li><li>Housing services, including housing repairs and benefits</li></ul>
          </article>
        </div>
      </section>
    </>
  );
}
