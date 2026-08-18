import type { Metadata } from "next";
import { Gallery } from "../_components/Gallery";
import { PageHero } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Design, rich pictures and visual communication",
  description:
    "RedQuadrant design work: rich pictures, infographics, research publications, graphic recording and learning materials for public services.",
  alternates: { canonical: "/designrichpictures" },
};

export default function DesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Design and visual communication"
        title="Make complex public service work clear, useful and memorable."
        introduction="We design annual reports, research publications, infographics, rich pictures, learning materials and live workshop visuals. The work is precise enough for the content and human enough to invite people in."
      />
      <section className="content-section warm">
        <div className="shell section-heading">
          <div>
            <p className="eyebrow">What we make</p>
            <h2>Visual thinking and graphic design, together.</h2>
          </div>
          <p>Our design work starts with meaning: the audience, the decisions they need to make and the story the material must carry. We can work from a finished brief or help structure complex source material before designing it.</p>
        </div>
      </section>
      <div className="shell">
        <Gallery />
      </div>
      <section className="contact-band">
        <div className="shell contact-band-inner">
          <div>
            <p className="eyebrow">Talk to Natasa</p>
            <h2>Have something complicated to communicate?</h2>
            <p>Share the material, audience, format and deadline. We will help find the right visual form.</p>
          </div>
          <a className="button light" href="mailto:natasa.sears@redquadrant.com">natasa.sears@redquadrant.com <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
