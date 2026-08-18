import type { Metadata } from "next";
import { ServiceIndex } from "../_components/ServiceIndex";

export const metadata: Metadata = { title: "Customer focus", description: "RedQuadrant customer insight, contact, channel, demand and service-design support.", alternates: { canonical: "/customer-focus" } };

export default function CustomerFocusPage() {
  return <ServiceIndex title="Customer focus" items={["Customer focus", "RedQuadrant/CIPFA customer contact benchmarking club", "Customer-led transformation", "Channel shift", "Demand analysis and management", "Customer contact health check", "Customer safaris", "Customer insight", "Customer-focused technology strategy"]} />;
}
