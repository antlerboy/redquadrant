import Link from "next/link";

export const metadata = {
  title: "Global Microsoft outage: contacting RedQuadrant",
  description: "Current contact arrangements during the global Microsoft outage.",
  alternates: { canonical: "/email-disruption" },
};

export default function EmailDisruption() {
  return (
    <article className="site-frame" style={{ maxWidth: 880, padding: "48px 24px 64px" }}>
      <p><Link href="/">Home</Link> / Service update</p>
      <h1>Global Microsoft outage: contacting RedQuadrant</h1>
      <p><strong>Updated <time dateTime="2026-11-13T11:13:00Z">13 November 2026, 11:13 GMT</time></strong></p>
      <p>The global Microsoft outage is affecting our team’s email and access to some other Microsoft services. Some colleagues cannot send or receive email, and responses may be delayed.</p>
      <p>For urgent enquiries, please contact Benjamin Taylor at <a href="mailto:benjamin.taylor@redquadrant.com">benjamin.taylor@redquadrant.com</a>. His email is working through a Gmail workaround. Please include the project or enquiry name, any deadline, and a phone number so we can prioritise a response.</p>
      <p>We’re working on temporary business email addresses and will publish them here once they’re tested and ready. Please don’t send project documents to colleagues’ personal email accounts.</p>
      <p>If you’re waiting for an urgent response, please contact Benjamin or call your usual RedQuadrant contact. Apologies for the disruption.</p>
    </article>
  );
}
