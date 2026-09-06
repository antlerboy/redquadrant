/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PracticeRule } from "./PracticeRule";
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


export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-frame header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}

        </nav>
        <details className="mobile-nav">
          <summary aria-label="Open site menu"><span>Menu</span></summary>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
  
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-practice-row"><PracticeRule /><FooterShed /></div>
      <div className="site-frame footer-easter-row"><SeasonalQuiz /></div>
      <div className="site-frame footer-copy">
        <nav className="footer-links" aria-label="Footer navigation"><Link href="/services/">Services</Link><Link href="/methodology/">How we work</Link><Link href="/our-story/">Our story</Link><Link href="/insights/">Insights</Link><Link href="/newsletter/">Newsletter</Link><a href={privacyNotice} target="_blank" rel="noreferrer">Privacy notice</a></nav>
        <p className="footer-contact"><a href="mailto:operations@redquadrant.com">operations@redquadrant.com</a><a href="tel:+442036646712">020 3664 6712</a></p>
        <div className="footer-legal"><p>© RedQuadrant Ltd. Registered in the UK: 6944005. VAT: 975813577.</p><p>167-169 Great Portland Street, 5th Floor, London, W1W 5PF</p></div>
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
      aria-label="Suggest a change to the RedQuadrant website"
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
