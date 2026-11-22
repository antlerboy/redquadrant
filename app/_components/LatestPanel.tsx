import { latestItems } from "../latest-data";

export function LatestPanel() {
  return (
    <section className="latest-panel" aria-labelledby="latest-heading">
      <div className="latest-panel-heading">
        <div>

          <h2 id="latest-heading">News and reading</h2>
        </div>
      </div>
      <div className="latest-grid">
        {latestItems.map(item => (
          <article key={item.href}>
            <p className="latest-source">{item.source}</p>
            <h3><a href={item.href} target="_blank" rel="noreferrer">{item.title}</a></h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
