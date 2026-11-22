import Link from "next/link";

const choices = [
  ["Tolerate but tweak", "Keep doing the work and make a small adjustment."],
  ["Trim", "Agree where to spend less time, and what service level that means."],
  ["Transform", "Try a different way of doing the work."],
  ["Transfer", "Agree who will take the work on and what capacity they need."],
  ["Terminate", "Stop the work and check who is affected."],
  ["Timescales", "Defer, sequence, speed up, or slow down."],
  ["Take on", "Make room for work the team needs to start."],
];

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Resource Optimisation",
  description:
    "A team-based method from RedQuadrant for making organisational work, resource, cost, value, dependencies, and choices visible.",
  serviceType: "Public service transformation consultancy",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  provider: {
    "@type": "Organization",
    name: "RedQuadrant",
    foundingDate: "2009",
    email: "benjamin.taylor@redquadrant.com",
    telephone: "+44 7931 317230",
    url: "https://www.redquadrant.com",
  },
};


export const metadata = {
  title: "Resource Optimisation",
  description: "RedQuadrant helps public service teams account for staff time and decide which work to keep, change, or stop.",
  alternates: { canonical: "/resource-optimisation/" },
};

export default function ResourceOptimisation() {
  return (
    <article className="rq-method site-frame" id="top">
      <header>
        <h1>Resource Optimisation</h1>
        <p>Where does your team’s time go? RedQuadrant helps public service teams answer that question before they change staffing or service levels. Staff account for the work, including the chasing and checking that rarely appear in a job description. Managers can then see what a proposed saving would change for colleagues and the public.</p>
        <a href="#method">How the review works</a>
      </header>

      <section aria-labelledby="positioning-title">
        <h2 id="positioning-title">A housing allocations example</h2>
        <p>A council is considering spending less time on shortlists for vacant homes. First it needs to know why an officer returns to a list that somebody has already checked.</p>
        <figure className="allocation-example">
          <figcaption id="lens-caption">Illustration using invented figures. Out of 100 hours of allocations work, officers spend 12 revisiting shortlists.</figcaption>
          <table><thead><tr><th scope="col">Reason for reopening a shortlist</th><th scope="col">Hours</th></tr></thead>
            <tbody><tr><td>Check new information about an applicant</td><td>7</td></tr><tr><td>Ask a housing provider for a missing viewing result</td><td>3</td></tr><tr><td>Enter a result already held on another system</td><td>2</td></tr></tbody>
            <tfoot><tr><th scope="row">Time spent revisiting shortlists</th><td>12</td></tr></tfoot>
          </table>
        </figure>
        <p>Cut all 12 hours and an officer may miss information that affects who should be offered a home. The two hours of duplicate entry suggest a more precise question. Could the officer use the result from the first system? For the missing viewing results, talk to the provider. A change that frees three hours at the council might put the same work on someone else’s desk.</p>
      </section>

      <section id="method"><h2 id="method-title">How the review works</h2>
        <p>A work package is an activity the team can recognise and make a decision about, such as revisiting a housing shortlist. One keystroke is too small. The whole allocations service is too large.</p>
        <ol>
          <li>Agree five to seven priorities and their relative weight. What would a better service look like to the people using it?</li>
          <li>List enough work packages to account for 100% of the team’s available time. Compare what the organisation thinks it pays for with the work staff describe. Include cover, handovers, and seasonal peaks.</li>
          <li>Estimate the time and cost of each package. Check who needs the work, who can do it, what depends on it, and what happens if the team does more or less.</li>
          <li>Record a decision and an owner for each package. Add up the changes and check whether the team has enough people with the right skills to carry out the plan.</li>
        </ol>
        <p>Basis Ltd developed the original model, with early work led by Andy Jess. RedQuadrant adapted it for use in public services.</p>
      </section>

      <section><h2 id="choices-title">Seven choices for a work package</h2>
        <p>We call these the Seven Ts. A team can choose to invest more time in work that makes a difference to residents.</p>
        <dl className="method-choices">{choices.map(([name, meaning]) => <div key={name}><dt>{name}</dt><dd>{meaning}</dd></div>)}</dl>
      </section>
      <section aria-labelledby="system-title"><h2 id="system-title">When the cause lies elsewhere</h2>
        <p id="ways-caption">Resource Optimisation is the fourth of RedQuadrant’s Seven Ways to Save and Improve. The others examine demand, how work flows, waste, how services are organised, procurement, and policy. In the housing example, changing when the provider sends a viewing result addresses how work passes between organisations.</p>
      </section>
      <section id="outcomes"><h2 id="outcomes-title">What you can use afterwards</h2>
        <p>The team keeps the inventory, its estimates, and a record of the decisions. Managers can use them to plan cover, check workloads, and compare expected changes with what staff and residents experience.</p>
        <h3 id="team-title">Who does the work?</h3><p>RedQuadrant can run the review, coach an internal team, or work alongside your staff. People who do the work check the estimates and identify duties or risks that a time sheet cannot show.</p>
        <h3 id="routes-title">From one team to several services</h3><p>One team can start with a decision about its workload. A directorate can compare the effects on neighbouring teams. From 2010 to 2015, the London Borough of Hillingdon used Resource Optimisation as part of a wider RedQuadrant programme across more than 40 services.</p>
      </section>
      <section id="range"><h2 id="range-title">Related work</h2><ul>
        <li><Link href="/customer-led-transformation/">Following a service from the resident’s point of view</Link></li>
        <li><Link href="/transformation-and-change/">Reviewing service flow and capacity</Link></li>
        <li><Link href="/organisation-design/">Organisation design</Link></li>
        <li><Link href="/commissioning/">Commissioning and markets</Link></li>
        <li><Link href="/systems-change/">Working across organisations</Link></li>
        <li><Link href="/digital/">Digital services and technology</Link></li>
        <li><Link href="/training-and-development/">Training and development</Link></li>
        <li><Link href="/services/">All RedQuadrant services</Link></li>
      </ul></section>
      <section className="method-contact"><h2 id="contact-title">Team pilot and fee</h2>
        <p>A team pilot starts at £6,500 excluding VAT. It covers a scoping session, an inventory template, two team workshops, analysis of up to 40 work packages, and a decision report. We quote separately for fieldwork, implementation, or a wider review.</p>
        <p><a href="mailto:benjamin.taylor@redquadrant.com?subject=Resource%20Optimisation">Email Benjamin Taylor about a review</a> or call <a href="tel:+447931317230">07931 317230</a>.</p>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }} />
    </article>
  );
}
