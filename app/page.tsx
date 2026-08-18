/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ContactBand } from "./_components/SiteChrome";
import { homeImages } from "./site-data";

type FeatureSection = {
  image: { src: string; alt: string };
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  external?: boolean;
};

const featureSections: readonly FeatureSection[] = [
  {
    image: homeImages.justice,
    eyebrow: "The work that matters",
    title: "Environmental and social justice",
    text: "Public services exist to improve lives. We help leaders hold onto that purpose while navigating cost, complexity and institutional pressure — making change fairer, more sustainable and more useful to the people it affects.",
    href: "/services#equality-diversity-inclusion",
  },
  {
    image: homeImages.delivery,
    eyebrow: "Senior people, close to the work",
    title: "Experienced, authentic delivery",
    text: "Our consultants are practitioners. They have led services, programmes and organisations, and they stay involved from diagnosis through implementation. There are no junior teams learning at your expense.",
    href: "/people",
  },
  {
    image: homeImages.clients,
    eyebrow: "Relationships that endure",
    title: "96.8% client return rate",
    text: "Clients return because we combine candour with practical help. We build internal capability, work alongside teams and leave organisations better able to make the next change for themselves.",
    href: "/services#track-record",
  },
  {
    image: homeImages.methods,
    eyebrow: "Methods for the real world",
    title: "Cutting-edge thinking, made usable",
    text: "We draw on systems thinking, service design, organisational development and implementation practice. The point is never the method itself: it is the insight and movement the method makes possible.",
    href: "/methodology",
  },
  {
    image: homeImages.academy,
    eyebrow: "Capability, not dependency",
    title: "Public Service Transformation Academy",
    text: "Our not-for-profit capability-building arm provides accredited learning, practical academies and development programmes for people leading public service change.",
    href: "https://www.publicservicetransformation.org",
    external: true,
  },
  {
    image: homeImages.learning,
    eyebrow: "Learning that changes practice",
    title: "Dynamic training and development",
    text: "From focused team sessions to multi-cohort transformation programmes, we combine live problems, peer learning, expert challenge and workplace application.",
    href: "/services#learning-development",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Public service transformation</p>
            <h1>Find the insight.<br />Make the change.<br />Improve lives.</h1>
            <p className="lede">
              We help public service organisations understand difficult problems,
              design practical responses and deliver change that lasts.
            </p>
            <div className="button-row">
              <Link className="button" href="/services">Explore our work <span aria-hidden="true">→</span></Link>
              <Link className="text-link" href="/people">Meet the people doing it <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <figure className="hero-image-wrap">
            <img src={homeImages.hero.src} alt={homeImages.hero.alt} />
            <figcaption>Senior practitioners working alongside your team.</figcaption>
          </figure>
          <aside className="award-panel" aria-label="Financial Times recognition">
            <p className="award-since">Every year since 2018</p>
            <p className="award-title">UK&apos;s Leading Management Consultants</p>
            <p>Recognised by the Financial Times and Statista.</p>
          </aside>
        </div>
      </section>

      <section className="quick-paths" aria-label="Related RedQuadrant services">
        <div className="shell quick-path-grid">
          <Link href="/frameworks"><span>01</span><strong>Commission us</strong><small>Frameworks and routes to market</small></Link>
          <a href="https://www.publicservicetransformation.org" target="_blank" rel="noreferrer"><span>02</span><strong>Build capability</strong><small>Public Service Transformation Academy</small></a>
          <Link href="/joinus"><span>03</span><strong>Work with us</strong><small>Join our consultant community</small></Link>
          <a href="https://www.publicservicetransformation.org/tool-shed" target="_blank" rel="noreferrer"><span>04</span><strong>Use the tools</strong><small>Methods for public service change</small></a>
        </div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-grid">
          <div><strong>2,000+</strong><span>specialist consultants in our network</span></div>
          <div><strong>15+</strong><span>former chief executives</span></div>
          <div><strong>96.8%</strong><span>client return rate</span></div>
          <div><strong>2018</strong><span>FT recognition began</span></div>
        </div>
      </section>

      <section className="feature-list">
        <div className="shell">
          {featureSections.map((feature, index) => (
            <article className="feature-row" key={feature.title}>
              <div className="feature-image">
                <img src={feature.image.src} alt={feature.image.alt} loading="lazy" />
              </div>
              <div className="feature-copy">
                <p className="eyebrow">{feature.eyebrow}</p>
                <p className="feature-number">{String(index + 1).padStart(2, "0")}</p>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
                {feature.external ? (
                  <a className="text-link" href={feature.href} target="_blank" rel="noreferrer">Find out more <span aria-hidden="true">↗</span></a>
                ) : (
                  <Link className="text-link" href={feature.href}>Find out more <span aria-hidden="true">→</span></Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
