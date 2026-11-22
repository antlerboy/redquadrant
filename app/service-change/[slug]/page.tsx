import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceChangeOffers } from "../offers";
import { EnquiryBrief } from "../EnquiryBrief";

type OfferPageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceChangeOffers.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: OfferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = serviceChangeOffers.find((item) => item.slug === slug);
  if (!offer) return {};
  return {
    title: offer.title,
    description: offer.summary,
    alternates: { canonical: `/service-change/${offer.slug}/` },
    openGraph: { title: offer.title, description: offer.summary, url: `/service-change/${offer.slug}/` }
  };
}

export default async function ServiceChangeOfferPage({ params }: OfferPageProps) {
  const { slug } = await params;
  const offer = serviceChangeOffers.find((item) => item.slug === slug);
  if (!offer) notFound();
  return (
    <article className="site-frame offer-page">
      <p><Link href="/service-change/">Public service change</Link></p>
      <h1>{offer.title}</h1>
      <p className="offer-lead">{offer.summary}</p>
      {offer.sections.map(([title, text]) => (
        <section key={title}><h2>{title}</h2><p>{text}</p></section>
      ))}
      <section><h2>Sample project document</h2><p><a href={`/downloads/${offer.slug}-sample-outline.txt`} download>Download the document outline (text)</a>. The outline shows what the project team will record.</p><p><Link href="/practice-evidence/" prefetch={false}>Read sourced accounts of related work</Link></p><p>We confirm available dates when we reply to your enquiry.</p></section>
      <EnquiryBrief title={offer.title} contact={offer.contact} />
      <section>
        <h2>Contact the project team</h2>
        <p>{offer.invitation}.</p>
        <p><a className="rq-button" href={`mailto:${offer.contact}?subject=${encodeURIComponent(offer.title)}`}>Email us about this offer</a></p>
        <p><a href={offer.related}>{offer.relatedLabel}</a></p>
        <p><Link href="/service-change/">Compare all four offers</Link></p>
        <p><Link href="/frameworks/">Find a procurement route</Link></p>
      </section>
    </article>
  );
}
