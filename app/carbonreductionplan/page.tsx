import type { Metadata } from "next";

export const metadata: Metadata = { title: "Carbon reduction plan", description: "Read RedQuadrant's current carbon reduction plan.", alternates: { canonical: "/carbonreductionplan" } };

export default function CarbonReductionPage() {
  return (
    <section className="carbon-page">
      <div className="site-frame carbon-page-inner">
        <h1><a href="https://app.seedling.earth/client_page/1691141651896x280340039414579200?report=ppn-report" target="_blank" rel="noreferrer">Carbon Reduction plan</a></h1>
      </div>
    </section>
  );
}
