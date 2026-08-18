import type { Metadata } from "next";
import { ServiceFocus } from "../_components/ServiceFocus";

export const metadata: Metadata = {
  title: "Customer focus and service design",
  description: "Customer insight, contact benchmarking, channel strategy, demand analysis and service design for public services.",
  alternates: { canonical: "/libraries" },
};

export default function CustomerFocusPage() {
  return <ServiceFocus
    eyebrow="Customer focus"
    title="Design services around purpose, demand and people's lives."
    introduction="We help public services see the whole customer journey, understand demand and redesign contact, channels, processes and technology around outcomes."
    capabilities={["Customer contact benchmarking", "Customer-led transformation", "Channel strategy and shift", "Demand analysis and management", "Customer contact health checks", "Customer safaris", "Customer insight", "Customer-focused technology strategy"]}
    principles={[
      { title: "See the whole journey", text: "Look across organisational boundaries and channels, including the work created by failure, hand-offs and unclear information." },
      { title: "Use evidence with empathy", text: "Combine contact data and process evidence with residents' experience and frontline knowledge." },
      { title: "Change the operating system", text: "Align roles, workflow, measures and technology so the redesigned experience can be delivered consistently." },
    ]}
    examples={[
      { title: "HM Courts and Tribunals Service", text: "Eighteen months supporting digital justice and customer-led service transformation." },
      { title: "Westminster", text: "Redesign supporting closure of a one-stop shop and annual savings of more than £1.2m." },
      { title: "Social housing", text: "Channel, contact and technology reviews connecting resident need to operational capacity." },
    ]}
  />;
}
