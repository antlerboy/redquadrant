import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Sign up for the RedQuadrant newsletter about public-service transformation, systems practice and practical change.",
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <div className="newsletter-page site-frame">
      <section className="newsletter-copy">
        <p className="eyebrow">Newsletter</p>
        <h1>Sign up for news from RedQuadrant</h1>
        <p>Occasional ideas, events, tools and practical examples for people working to transform public services.</p>
      </section>
      <form className="newsletter-form" action="https://redquadrant.us1.list-manage.com/subscribe/post" method="post" target="_blank">
        <input type="hidden" name="u" value="8774d3d6e67dca6e9d347ea25" />
        <input type="hidden" name="id" value="d6dd4041bf" />
        <label>First name<input type="text" name="MERGE1" autoComplete="given-name" /></label>
        <label>Last name<input type="text" name="MERGE2" autoComplete="family-name" /></label>
        <label className="full">Email address <span aria-hidden="true">*</span><input type="email" name="MERGE0" autoComplete="email" required aria-required="true" /></label>
        <div className="mailchimp-honeypot" aria-hidden="true">
          <label>Leave this field empty<input type="text" name="b_8774d3d6e67dca6e9d347ea25_d6dd4041bf" tabIndex={-1} /></label>
        </div>
        <div className="full form-footer">
          <button type="submit">Subscribe</button>
          <p>Mailchimp will open a confirmation page. You can unsubscribe at any time.</p>
        </div>
      </form>
    </div>
  );
}
