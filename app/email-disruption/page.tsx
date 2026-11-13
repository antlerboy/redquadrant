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
      <p><strong>Updated <time dateTime="2026-11-13T13:49:00Z">13 November 2026, 13:49 GMT</time></strong></p>
      <p>Access is improving following the global Microsoft outage, and some colleagues are back online. Microsoft reports recovery progress, but intermittent access problems and delayed email delivery remain possible. This is not yet an all-clear, and responses may still be delayed.</p>
      <p>For urgent enquiries, please contact Benjamin Taylor at <a href="mailto:benjamin.taylor@redquadrant.com">benjamin.taylor@redquadrant.com</a>. His email is working through a Gmail workaround. Please include the project or enquiry name, any deadline, and a phone number so we can prioritise a response.</p>
      <p>Please continue using our usual business email addresses. Temporary business email arrangements remain a contingency; we will only publish alternative contact addresses once they are tested and ready. Please don’t send project documents to colleagues’ personal email accounts.</p>
      <h2>Verifying our temporary email domain</h2>
      <p>RedQuadrant is setting up <strong>redquadrantsecure.com</strong> as a temporary business email domain for communications during this disruption. We will list the temporary contact addresses here once they are tested and ready.</p>
      <p>If you receive an unexpected message using this domain, check the full sender address and verify it with your usual RedQuadrant contact using a phone number you already know. Do not rely on a display name or logo alone, and independently confirm any request to change payment details or share confidential information.</p>
      <p>If you’re waiting for an urgent response, please contact Benjamin or call your usual RedQuadrant contact. Apologies for the disruption.</p>
    </article>
  );
}
