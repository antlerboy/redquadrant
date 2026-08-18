import Link from "next/link";
import { ContactBand, PageHero } from "./SiteChrome";

export function ServiceFocus({
  eyebrow,
  title,
  introduction,
  capabilities,
  principles,
  examples,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  capabilities: readonly string[];
  principles: readonly { title: string; text: string }[];
  examples: readonly { title: string; text: string }[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} introduction={introduction} />
      <section className="content-section warm">
        <div className="shell section-heading">
          <div><p className="eyebrow">Capabilities</p><h2>Where we can help.</h2></div>
          <ul className="tag-list">{capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="content-section">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">How we work</p><h2>Practical principles.</h2></div>
            <p>We shape the work around the organisation, the service and the change already under way. These principles keep it focused.</p>
          </div>
          <div className="card-grid">
            {principles.map((item, index) => (
              <article className="info-card" key={item.title}>
                <p className="card-number">{String(index + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section warm">
        <div className="shell service-detail-grid">
          <div><p className="eyebrow">Examples</p><h2>Work in practice.</h2></div>
          <div className="case-list">
            {examples.map((example) => <article key={example.title}><h3>{example.title}</h3><p>{example.text}</p></article>)}
            <p><Link className="text-link" href="/services">See all services →</Link></p>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
