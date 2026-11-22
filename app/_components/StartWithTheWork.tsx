import Link from "next/link";

export function StartWithTheWork() {
  return (
    <section className="start-with-work" aria-labelledby="start-work-title">
      <h2 id="start-work-title">Five approaches to service change</h2>
      <ul>
        <li><Link href="/customer-led-transformation/">Follow a resident’s experience of a service</Link></li>
        <li><Link href="/system-leadership/">Work through a decision shared by several organisations</Link></li>
        <li><Link href="/resource-optimisation/">Review where staff time goes</Link></li>
        <li><Link href="/systems-change/">Investigate a recurring problem across services</Link></li>
        <li><Link href="/relational-commissioning/">Review how a commissioner and provider work together</Link></li>
      </ul>
    </section>
  );
}
