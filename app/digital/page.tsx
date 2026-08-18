import type { Metadata } from "next";
import { ServiceFocus } from "../_components/ServiceFocus";

export const metadata: Metadata = {
  title: "Digital change and public service design",
  description: "Digital strategy, service design, operating models, data, architecture and implementation for public service transformation.",
  alternates: { canonical: "/digital" },
};

export default function DigitalPage() {
  return <ServiceFocus
    eyebrow="Digital change"
    title="Make technology serve the service — and the people using it."
    introduction="We connect customer journeys, data, workflow, operating models, architecture and delivery. The result is a digital roadmap the organisation can implement, govern and learn from."
    capabilities={["Digital strategy and roadmaps", "Service and journey design", "Target operating models", "Data and insight strategy", "Enterprise and solution architecture", "Platform and procurement choices", "Automation and self-service", "Technology-enabled care", "Digital skills and adoption", "Business cases and benefits"]}
    principles={[
      { title: "Purpose before platform", text: "Define the service outcome, user need and operational problem before choosing technology." },
      { title: "Design end to end", text: "Treat front door, workflow, data, hand-offs and human support as one service rather than separate projects." },
      { title: "Build for adoption", text: "Make skills, confidence, accessibility, ethics and governance part of the solution from the start." },
    ]}
    examples={[
      { title: "Central Bedfordshire", text: "An ICT strategy, procurement approach, roadmap and business case spanning eight service areas, common platforms and end-to-end automation." },
      { title: "Lewisham housing", text: "Data and systems analysis, frontline engagement and a practical transformation roadmap for a service implementing new case management." },
      { title: "Adult social care", text: "Work on technology-enabled care, digital maturity, self-service, ethical information use and workforce confidence." },
    ]}
  />;
}
