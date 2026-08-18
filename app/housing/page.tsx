import type { Metadata } from "next";
import { ServiceIndex } from "../_components/ServiceIndex";

export const metadata: Metadata = { title: "Housing", description: "RedQuadrant housing service review, resident engagement, demand, operations and systems work.", alternates: { canonical: "/housing" } };

export default function HousingPage() {
  return <ServiceIndex title="Housing" introduction="Housing services cross logistics, community-shaping, legislation, safety, customer insight and communications." items={["Whole housing management and operations reviews", "Demand management and capacity planning", "Restructuring around improvements identified by customers and employees", "Tenant and resident panels that help drive improvement", "Procurement, design and delivery of CRM, content and document-management systems"]} />;
}
