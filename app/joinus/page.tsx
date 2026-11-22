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
          <h1>Work with RedQuadrant</h1>
          <p className="join-line">Freelance public service consultancy in the UK.</p>
        </div>
      </section>
      <section className="join-copy site-frame">
        <div className="join-intro">
          <h2>Expert freelance consultants</h2>
          <p>RedQuadrant has a small employed team. For each commission, we bring together independent practitioners with the experience the client needs. Assignments can be full-time or part-time.</p>
          <p>We’re interested in hearing from UK-based independent consultants who have already led change in public services. We recruit for experienced roles. In your covering email, tell us about a project you worked on and what you were responsible for.</p>
          <p className="join-email dark">Send your CV and covering email<br />to <a href="mailto:recruitment@redquadrant.com">recruitment@redquadrant.com</a></p>
        </div>
        <div className="join-lists">
          <article>
            <h2>Experience we look for</h2>
            <ul><li>Delivery of change projects within the public sector, preferably local public services</li><li>Project &amp; programme management</li><li>Building business cases for change</li><li>Engaging senior stakeholders throughout the transformation life-cycle</li><li>Working within local public services as an internal change agent and/or as an external consultant from one of the larger consultancies</li><li>Lean and systems thinking</li><li>Business analysis &amp; process improvement</li><li>Change management</li><li>Rapid improvement events, service design and prototyping</li><li>Facilitation</li><li>Organisational development</li><li>Skills transfer</li></ul>
          </article>
          <article>
            <h2>Services where we welcome enquiries</h2>
            <ul><li>Adult &amp; children’s services, especially commissioning</li><li>Procurement</li><li>Governance</li><li>Performance and contract management</li><li>Shared services</li><li>Housing services, including housing repairs and benefits</li></ul>
          </article>
        </div>
      </section>
    </>
  );
}
