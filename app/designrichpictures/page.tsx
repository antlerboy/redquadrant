import type { Metadata } from "next";
import { Gallery } from "../_components/Gallery";

export const metadata: Metadata = {
  title: "Design, rich pictures and infographics",
  description: "RedQuadrant graphic design, annual reports, rich pictures, infographics, digital scribing, reviews, logos and leaflets.",
  alternates: { canonical: "/designrichpictures" },
};

export default function DesignPage() {
  return (
    <div className="design-page">
      <div className="site-frame design-page-inner">
        <section className="design-intro">
          <div className="design-intro-copy">
            <p className="design-eyebrow">RedQuadrant design</p>
            <h1>Design by Nataša Sears</h1>
            <p>Nataša draws rich pictures with public service teams and designs reports, infographics, and publications for councils, charities, and national organisations.</p>
          </div>
          <address className="design-contact">
            <p className="design-more">For more information or to commission work</p>
            <p className="design-name"><strong>Nataša Sears</strong><br /><span>Head of Design</span></p>
            <a href="tel:07740707646">07740 707 646</a>
            <a className="design-email" href="mailto:natasa.sears@redquadrant.com">natasa.sears@redquadrant.com</a>
          </address>
        </section>
        <p><a href="/design/visual-inquiry/">Three ways to use a rich picture</a></p><Gallery />
      </div>
    </div>
  );
}
