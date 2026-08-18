import Link from "next/link";

const related = [
  ["/services", "Services"],
  ["/services#adult-social-care", "Adult social care"],
  ["/services#alternative-delivery-models", "Alternative delivery models"],
  ["/services#health", "Health"],
  ["/commissioning", "Commissioning"],
  ["/services#criminal-justice", "Criminal justice"],
  ["/services#culture-community", "Culture, consultation and community engagement"],
  ["/customer-focus", "Customer focus"],
  ["/digital", "Digital"],
  ["/housing", "Housing"],
  ["/services#ict", "ICT"],
  ["/services#human-resources", "People and organisational development"],
  ["/transformation-and-change", "Transformation and change"],
] as const;

export function ServiceIndex({ title, items, introduction }: { title: string; items: readonly string[]; introduction?: string }) {
  return (
    <div className="service-index-page site-frame">
      <section className="service-index-main">
        <div><h1>{title}</h1>{introduction && <p>{introduction}</p>}</div>
        <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>
      </section>
      <nav className="related-services" aria-label="Related services">
        {related.map(([href, label]) => <Link href={href} key={`${href}-${label}`}>{label}</Link>)}
      </nav>
    </div>
  );
}
