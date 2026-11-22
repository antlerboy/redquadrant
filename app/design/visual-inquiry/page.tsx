/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { galleryGroups, galleryImageUrl } from '../../site-data';

export const metadata = {
  title: 'Using rich pictures',
  description: 'Three commissions by Nataša Sears for Birmingham City Council, Natural England, and the Local Government Association.',
  alternates: { canonical: '/design/visual-inquiry/' },
};

const examples = [
  {
    client: 'Birmingham City Council', project: 'Prevention in adult social care pathways',
    alt: 'Five illustrated routes through community and adult social care support in Birmingham.',
    prompt: 'Choose one route and follow the person who needs help. Where would they turn next? Ask somebody who knows that service to point to a link they recognise or one the drawing misses.',
  },
  {
    client: 'Natural England', project: 'Environmental Collaborative Leadership',
    alt: 'Illustrated account of collaborative environmental leadership for Natural England.',
    prompt: 'Pick a decision in the picture. Who has the authority to make it? A participant who sees the same decision from another organisation may draw the relationship differently.',
  },
  {
    client: 'Local Government Association', project: 'Cultural devolution research',
    alt: 'Infographic presenting research on cultural devolution for the Local Government Association.',
    prompt: 'Choose a finding and ask where it would hold locally. Which part of the research would a council need to return to before making a decision about culture in its area?',
  },
];

export default function VisualInquiry() {
  return (
    <article className="site-frame offer-page">
      <h1>Using rich pictures</h1>
      <p className="offer-lead">A rich picture puts different accounts of a situation onto one sheet. Nataša Sears makes these drawings with public service teams. A person can point to anything they recognise, move a boundary, or add someone whose work is missing.</p>
      {examples.map(example => {
        const group = galleryGroups.find(item => item.client === example.client && item.project === example.project);
        if (!group) return null;
        const { id, ext } = group.images[0];
        const url = galleryImageUrl(id, ext);
        return (
          <section key={example.project}>
            <h2>{example.project}</h2>
            <figure>
              <a href={url}><img className="inquiry-artwork" src={url} alt={example.alt} loading="lazy" /></a>
              <figcaption>Nataša Sears for {group.client}, {group.year}. <a href={url}>View the full-size image</a></figcaption>
            </figure>
            <p>{example.prompt}</p>
          </section>
        );
      })}
      <section>
        <h2>Taking a picture back to the people in it</h2>
        <p>Ask participants to mark what they would change in the drawing. Keep an earlier version, with their agreement. Comparing the two can show where accounts differ, and give the group something specific to investigate before the next meeting.</p>
        <p><a href="/downloads/visual-inquiry-working-note.txt" download>Download the discussion worksheet (text)</a></p>
        <p><a href="mailto:natasa.sears@redquadrant.com?subject=Rich%20pictures">Email Nataša Sears about a commission</a></p>
        <p><Link href="/designrichpictures/">Nataša’s design portfolio</Link> · <Link href="/service-change/">Service change support</Link> · <Link href="/practice-evidence/">Evidence from practice</Link></p>
      </section>
    </article>
  );
}
