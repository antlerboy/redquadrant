import type { Metadata } from "next";
import { PageHero } from "../_components/SiteChrome";

export const metadata: Metadata = {
  title: "Carbon reduction plan",
  description: "RedQuadrant's published carbon reduction plan and emissions reporting.",
  alternates: { canonical: "/carbonreductionplan" },
};

export default function CarbonReductionPage() {
  return (
    <>
      <PageHero
        eyebrow="Environmental responsibility"
        title="Carbon reduction plan."
        introduction="Our current emissions report and carbon reduction plan are maintained through Seedling Earth."
        compact
      />
      <section className="content-section">
        <div className="shell section-heading">
          <div><p className="eyebrow">Current report</p><h2>Read the published plan.</h2></div>
          <div>
            <p>The linked report contains the current baseline, reporting scope, commitments and reduction measures.</p>
            <p><a className="button" href="https://app.seedling.earth/client_page/1691141651896x280340039414579200?report=ppn-report" target="_blank" rel="noreferrer">Open the carbon reduction plan <span aria-hidden="true">↗</span></a></p>
          </div>
        </div>
      </section>
    </>
  );
}
