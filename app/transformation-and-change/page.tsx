import type { Metadata } from "next";
import { ServiceIndex } from "../_components/ServiceIndex";

export const metadata: Metadata = { title: "Transformation and change", description: "RedQuadrant transformation, systems, strategy, service review, programme and change support.", alternates: { canonical: "/transformation-and-change" } };

export default function TransformationPage() {
  return <ServiceIndex title="Transformation and change" items={["Horizon scanning and innovation", "Community engagement", "Rich pictures", "Infographics", "Positive deviance", "Public value analysis", "Service design", "Systems thinking", "Strategy and scenario planning", "Service reviews", "Resource optimisation", "Mobile and flexible working (smartworking)", "Strategic partnerships", "Programme and project management", "Efficiency and effectiveness programmes", "Critical-friend review of business plans", "Rapid improvement events", "Lean rapid improvement events", "Business cases and benefits realisation", "Change management and stakeholder engagement", "Learning and development"]} />;
}
