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
            <h1>Graphic design, annual reports, rich pictures, infographics, digital scribing, reviews, logos, leaflets, and more.</h1>
          </div>
          <address className="design-contact">
            <p className="design-more">For more information or to commission work</p>
            <p className="design-name"><strong>Natasa Sears</strong><br /><span>Head of Design</span></p>
            <a href="tel:07740707646">07740 707 646</a>
            <a className="design-email" href="mailto:natasa.sears@redquadrant.com">natasa.sears@redquadrant.com</a>
          </address>
        </section>
        <Gallery />
      </div>
    </div>
  );
}
