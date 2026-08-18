import type { Metadata } from "next";
import { ServiceFocus } from "../_components/ServiceFocus";

export const metadata: Metadata = {
  title: "Housing transformation and improvement",
  description: "Housing service review, resident experience, operating models, performance, digital systems and transformation.",
  alternates: { canonical: "/housing" },
};

export default function HousingPage() {
  return <ServiceFocus
    eyebrow="Housing"
    title="Improve housing services from resident journey to operating model."
    introduction="We work with councils and housing organisations on whole-service improvement, homelessness, resident experience, performance, workflow, systems and sustainable savings."
    capabilities={["Housing service reviews", "Homelessness and temporary accommodation", "Resident experience and involvement", "Operating models", "Performance and demand", "Repairs and tenancy journeys", "Case management and workflow", "Digital and technology strategy", "Savings and benefits", "Transformation delivery"]}
    principles={[
      { title: "Follow the resident journey", text: "Understand where policy, process, systems and hand-offs create delay, repeat contact or avoidable harm." },
      { title: "Work with frontline reality", text: "Use the experience of residents and staff alongside data to identify changes that can actually be delivered." },
      { title: "Make savings credible", text: "Link financial opportunity to the operating changes, capacity and sequence required to realise it." },
    ]}
    examples={[
      { title: "Whole-service review", text: "Reviewing housing management and operations and identifying opportunities exceeding 20% while protecting outcomes." },
      { title: "Lewisham", text: "Restoring performance and developing an implementable transformation roadmap alongside a new case-management system." },
      { title: "Housing providers", text: "Resident panels, contact reviews, channel strategy and core-system improvement for social housing organisations." },
    ]}
  />;
}
