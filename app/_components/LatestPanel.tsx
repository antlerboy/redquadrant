import { latestItems } from "../latest-data";

export function LatestPanel() {
  return (
    <section className="latest-panel" aria-labelledby="latest-heading">
      <div className="latest-panel-heading">
        <div>
          <p className="eyebrow">Latest news and social media</p>
          <h2 id="latest-heading">Three things worth a look</h2>
        </div>
        <p>Selected for relevance, not simply whatever was posted last.</p>
      </div>
      <div className="latest-grid">
        {latestItems.map(item => (
          <article key={item.href}>
            <p className="latest-source">{item.source}</p>
            <h3><a href={item.href} target="_blank" rel="noreferrer">{item.title}</a></h3>
            <p>{item.summary}</p>
            <a className="latest-read" href={item.href} target="_blank" rel="noreferrer">Read it <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
    </section>
  );
}
