import { HeroMotion } from "./_components/HeroMotion";
import Link from "next/link";
import { ReturnRateStat } from "./_components/EasterEggsLive";
import { LatestPanel } from "./_components/LatestPanel";
import { homeImages } from "./site-data";

export const metadata = { description: "RedQuadrant works with councils, the NHS, and their partners on how public services are run, funded, and experienced by the people who use them.", alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="home-stage" style={{ backgroundImage: `url(${homeImages.hero.src})` }}>
        <HeroMotion />
        <div className="home-stage-shade" aria-hidden="true" />
        <div className="site-frame home-stage-inner">
          <h1 className="home-mission">
            We help you find insights<br />
            to transform public services.<br />
            <strong>We work to improve lives.</strong>
          </h1>
          <div className="home-paths">
            <Link href="/frameworks">Buy our services through frameworks</Link>
            <a href="https://www.publicservicetransformation.org/" target="_blank" rel="noreferrer">The Public Service Transformation Academy</a>
            <a href="https://www.quadrantresourcing.com/" target="_blank" rel="noreferrer">Quadrant Resourcing</a>
            <div className="tool-shed">
              <span>the</span><b>RedQuadrant</b>
              <a href="/toolshed">Tool Shed</a>
              <p>A learning group for people changing public services</p>
              <a className="tool-email" href="mailto:toolshed@redquadrant.com">toolshed@redquadrant.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-main site-frame">
        <section className="home-directory">
          <div><h2>Consultancy for public services</h2>
            <p>We help councils, the NHS, and their partners find out where a service is falling short. We work with staff and residents on what to change, and stay involved while teams try it.</p>
            <p><Link href="/services">Our services and previous commissions</Link></p>
          </div>
          <ul>
            <li><Link href="/lgrhub">Local government reorganisation</Link></li>
            <li><Link href="/resource-optimisation/">Workload, cost, and capacity</Link></li>
            <li><Link href="/commissioning/">Commissioning public services</Link></li>
            <li><Link href="/training-and-development">Training and development</Link></li>
            <li><Link href="/equality-diversity-inclusion/">Equality, diversity, and inclusion</Link></li>
            <li><Link href="/carbonreductionplan/">RedQuadrant’s carbon reduction plan</Link></li>
          </ul>
        </section>
        <div className="home-record"><p className="home-return"><ReturnRateStat /> of our clients have commissioned us again.</p>
          <p>The Financial Times and Statista have listed RedQuadrant among the UK’s leading management consultants every year since 2018.</p>
        </div>
        <LatestPanel />
      </section>
    </>
  );
}
