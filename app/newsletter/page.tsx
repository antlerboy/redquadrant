import type { Metadata } from "next";
import { PageHero } from "../_components/SiteChrome";
import { mailchimpArchiveHtml } from "./mailchimp-archive";

export const metadata: Metadata = {
  title: "Newsletter archive",
  description:
    "Read RedQuadrant's newsletter on public service transformation, systems practice, leadership and delivery.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  const hasArchive = mailchimpArchiveHtml.trim().length > 0;

  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="Ideas for people changing public services."
        introduction="Practical methods, useful provocations, events and examples from RedQuadrant and the wider public service transformation community."
      />
      <section className="content-section">
        <div className="shell newsletter-panel">
          <div>
            <p className="eyebrow">Past issues</p>
            <h2>Browse the archive.</h2>
            <p>The archive remains managed in Mailchimp. Its supplied HTML can be dropped into one isolated file, so the website design can change without rebuilding the newsletter history.</p>
            <p><a className="button" href="mailto:ops@redquadrant.com?subject=Subscribe%20to%20the%20RedQuadrant%20newsletter">Ask to subscribe <span aria-hidden="true">↗</span></a></p>
          </div>
          {hasArchive ? (
            <div className="mailchimp-archive" dangerouslySetInnerHTML={{ __html: mailchimpArchiveHtml }} />
          ) : (
            <div className="embed-placeholder">
              <p className="eyebrow">Mailchimp connection</p>
              <h2>Archive ready to connect.</h2>
              <p>For this test build, the layout and insertion point are complete. Paste the trusted Mailchimp archive HTML into <code>app/newsletter/mailchimp-archive.ts</code> to display the live issue list here.</p>
              <p className="notice">The Mailchimp export or embed code was not publicly visible on the current Wix page, so it has not been invented or copied from an unrelated account.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
