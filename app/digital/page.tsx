import type { Metadata } from "next";
import { ServiceIndex } from "../_components/ServiceIndex";

export const metadata: Metadata = { title: "Digital change and delivery", description: "Senior digital strategy, service design, delivery, data, technology and supplier support for public services.", alternates: { canonical: "/digital" } };

export default function DigitalPage() {
  return <ServiceIndex title="Digital change and digital delivery" introduction="We help public services make digital change a service transformation, not simply a technology project." items={["Digital strategy and operating models tied to service outcomes", "User research, inclusive service design and end-to-end journey redesign", "Product, programme and portfolio leadership", "Data, architecture, integration and technology choices", "Supplier selection, procurement and assurance", "Automation and self-service designed around real need and accessibility", "Practical skills transfer to in-house teams"]} />;
}
