import Link from "next/link";
import { buyerOffers } from "../buyer-offers";

export function BuyerOffers() {
  return (
    <section className="buyer-offers" aria-labelledby="buyer-heading">
      <h2 id="buyer-heading">Consultancy assignments and guide fees</h2>
      <dl className="method-choices">
        {buyerOffers.map(offer => (
          <div key={offer.slug}>
            <dt><Link href={`/offers/${offer.slug}`}>{offer.title}</Link></dt>
            <dd>{offer.entryTitle}. {offer.entryFee}.</dd>
          </div>
        ))}
      </dl>
      <p><Link href="/frameworks">Procurement frameworks</Link> · <Link href="/toolshed">RedQuadrant Tool Shed</Link></p>
    </section>
  );
}
