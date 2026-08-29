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
          <div>
            <h1>Graphic design, annual reports,<br />rich pictures, infographics, digital scribing, reviews, logos, leaflets, and more.</h1>
          </div>
          <div className="design-contact">
            <p className="design-more">For more information<br />or to commission work</p>
            <p className="design-name"><strong>Natasa Sears</strong></p>
            <p className="design-role"><strong>Head of Design</strong><br /><a href="tel:07740707646">07740 707 646</a></p>
            <a className="design-email" href="mailto:natasa.sears@redquadrant.com">natasa.sears@redquadrant.com</a>
          </div>
        </section>
        <Gallery />
      </div>
    </div>
  );
}
