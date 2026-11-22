import type { Metadata } from "next";
import { ServiceIndex } from "../_components/ServiceIndex";

export const metadata: Metadata = { title: "Housing", description: "RedQuadrant housing service review, resident engagement, demand, operations and systems work.", alternates: { canonical: "/housing" } };

export default function HousingPage() {
  return <ServiceIndex title="Housing" introduction="A tenant chasing a repair sees one problem. The housing provider may see separate calls, appointments, and contractor records. We help housing teams and residents trace what happened and decide what needs to change." items={["Whole housing management and operations reviews", "Demand management and capacity planning", "Restructuring around improvements identified by customers and employees", "Tenant and resident panels that help drive improvement", "Procurement, design and delivery of CRM, content and document-management systems"]} />;
}
