import Link from "next/link";
import { navLinks } from "../site-data";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="RedQuadrant home">
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>RedQuadrant</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
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
      <div className="shell footer-grid">
        <div>
          <Logo />
          <p className="footer-statement">
            We help you find insights to transform public services. We work to
            improve lives.
          </p>
        </div>
        <div>
          <p className="footer-heading">Start a conversation</p>
          <p>
            <a href="mailto:ops@redquadrant.com">ops@redquadrant.com</a>
          </p>
          <p>
            <a href="mailto:tenders@redquadrant.com">tenders@redquadrant.com</a>
          </p>
          <p>
            <a href="mailto:resourcing.requirements@redquadrant.com">
              Resourcing requirements
            </a>
          </p>
        </div>
        <div>
          <p className="footer-heading">Company details</p>
          <address>
            7 Bell Yard
            <br />
            London WC2A 2JR
          </address>
          <p>Company no. 06944005</p>
          <p>VAT no. 975 8135 77</p>
        </div>
        <div>
          <p className="footer-heading">Explore</p>
          <p><Link href="/methodology">Methodology</Link></p>
          <p><Link href="/carbonreductionplan">Carbon reduction plan</Link></p>
          <p><a href="https://www.publicservicetransformation.org" target="_blank" rel="noreferrer">Public Service Transformation Academy</a></p>
        </div>
      </div>
      <div className="shell footer-base">
        <p>© {new Date().getFullYear()} RedQuadrant Ltd</p>
        <p>Test rebuild for review — not the live website</p>
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
      aria-label="Add a suggestion to the RedQuadrant website feedback issue"
      title="Website feedback"
    >
      <span>Suggest a change</span>
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  introduction,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "page-hero compact" : "page-hero"}>
      <div className="shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{introduction}</p>
      </div>
    </section>
  );
}

export function ContactBand({
  title = "Bring us a difficult public service problem.",
  text = "We will assemble a senior team around the outcome you need — without unnecessary layers.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="contact-band">
      <div className="shell contact-band-inner">
        <div>
          <p className="eyebrow">Talk to us</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <a className="button light" href="mailto:ops@redquadrant.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
