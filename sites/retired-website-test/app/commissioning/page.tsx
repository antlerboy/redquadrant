import type { Metadata } from "next";
import { ServiceIndex } from "../_components/ServiceIndex";

export const metadata: Metadata = { title: "Commissioning", description: "RedQuadrant commissioning strategy, review, procurement, contract management and market development.", alternates: { canonical: "/commissioning" } };

export default function CommissioningPage() {
  return <ServiceIndex title="Commissioning" items={["Commissioning strategy", "Functional and diagnostic review", "Procurement training and development", "Procurement", "Contract management", "Options analysis", "Commissioning skills", "Commercial, contract and performance review and insourcing", "Researching the market", "Soft market testing", "Market management and market development"]} />;
}
