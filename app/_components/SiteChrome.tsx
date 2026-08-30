/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { brandAssets, navLinks } from "../site-data";
import { FooterShed, SeasonalQuiz } from "./EasterEggsLive";

const privacyNotice =
  "https://a478cfd1-b9d7-40a8-9cb4-7b493c1cd390.filesusr.com/ugd/12b1f3_8f5ebb26ce53447ea91f598594495d96.pdf";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="RedQuadrant home">
      <img src={brandAssets.logo} alt="RedQuadrant" width="268" height="62" />
    </Link>
  );
}

function OriginStoryDisclosure() {
  return (
    <details className="origin-story-disclosure">
      <summary>Our story</summary>
      <aside className="origin-story-card" aria-label="The RedQuadrant origin story">
        <p className="origin-story-date">RedQuadrant, 2009</p>
        <h2>Our unlikely beginning</h2>
        <p>
          Inspired by a minicab company running a self-organising allocation system above a chip shop.
          Uber before Uber, only less well-funded.
        </p>
      </aside>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-frame header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
          <OriginStoryDisclosure />
        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open site menu"><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
            <OriginStoryDisclosure />
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-easter-row">
        <SeasonalQuiz />
        <FooterShed />
      </div>
      <div className="site-frame footer-copy">
        <p>© RedQuadrant Ltd, a company registered in the UK number 6944005, VAT registration 975813577&nbsp; RedQuadrant, 7 Bell Yard, London WC2A 2JR</p>
        <p>
          We take your privacy seriously. Our <a href={privacyNotice} target="_blank" rel="noreferrer">privacy notice</a> explains how we collect, use, and protect your personal data, and sets out your rights under UK data protection law.
        </p>
      </div>
    </footer>
  );
}

export function SecretFeedbackDot() {
  return (
    <a
      className="feedback-dot"
      href="https://github.com/antlerboy/redquadrant/issues/1"
      target="_blank"
      rel="noreferrer"
      aria-label="Suggest a change to this test website"
      title="Website feedback"
    >
      <span>Website feedback</span>
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  introduction,
}: {
  eyebrow?: string;
  title: string;
  introduction?: string;
  compact?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className="site-frame page-hero-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {introduction && <p className="page-intro">{introduction}</p>}
      </div>
    </section>
  );
}

export function ContactBand({
  title = "Let’s start a conversation",
  text = "Tell us what you are working on and where you need help.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="contact-band">
      <div className="site-frame contact-band-inner">
        <div><h2>{title}</h2><p>{text}</p></div>
        <a href="mailto:operations@redquadrant.com">operations@redquadrant.com</a>
      </div>
    </section>
  );
}
