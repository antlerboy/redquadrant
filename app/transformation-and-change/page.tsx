import type { Metadata } from "next";
import { ServiceFocus } from "../_components/ServiceFocus";

export const metadata: Metadata = {
  title: "Transformation and change",
  description: "Systems thinking, strategy, service review, programme leadership, business cases and change delivery for public services.",
  alternates: { canonical: "/transformation-and-change" },
};

export default function TransformationPage() {
  return <ServiceFocus
    eyebrow="Transformation and change"
    title="Make change real in a complex system."
    introduction="We help leaders move from intent to implementation: understanding the system, choosing a direction, mobilising people and adapting as evidence emerges."
    capabilities={["Horizon scanning and innovation", "Community engagement", "Positive deviance", "Public value analysis", "Service design", "Systems thinking", "Strategy and scenario planning", "Service reviews", "Resource optimisation", "Strategic partnerships", "Programme and project management", "Business cases and benefits realisation", "Change and stakeholder engagement", "Learning and development"]}
    principles={[
      { title: "Start with the system", text: "Understand purpose, demand, constraints, relationships and existing capability before prescribing a model." },
      { title: "Connect design and delivery", text: "Make implementation knowledge part of strategy from the beginning, not a workstream added later." },
      { title: "Build the capacity to adapt", text: "Create feedback, learning and decision mechanisms so the programme can respond without losing direction." },
    ]}
    examples={[
      { title: "Bristol", text: "Applied service redesign programmes that combined live delivery work with organisation-wide capability building." },
      { title: "Metropolitan Police Service", text: "Senior support to transformation, leadership and operational delivery in a complex, high-accountability system." },
      { title: "Central Bedfordshire", text: "Breaking a stalled programme and creating an agreed roadmap, strategy and business case across eight service areas." },
    ]}
  />;
}
