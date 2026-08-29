/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { brandAssets, homeImages } from "./site-data";

export default function Home() {
  return (
    <>
      <section className="home-stage" style={{ backgroundImage: `url(${homeImages.hero.src})` }}>
        <video
          className="home-stage-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={homeImages.hero.src}
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={homeImages.heroVideo.src} type="video/mp4" />
        </video>
        <div className="home-stage-shade" aria-hidden="true" />
        <div className="site-frame home-stage-inner">
          <div className="ft-recognition">
            <strong>Every year since 2018</strong>
            <span><b>RedQuadrant</b> has been named by the Financial Times and Statista in the UK&apos;s Leading Management Consultants</span>
          </div>
          <a className="carbon-link" href="https://app.seedling.earth/client_page/1691141651896x280340039414579200?report=ppn-report" target="_blank" rel="noreferrer">Carbon Reduction plan</a>
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
              <a href="https://chosen-path.org/2020/08/28/an-invitation-to-the-redquadrant-tool-shed/" target="_blank" rel="noreferrer">Tool Shed</a>
              <p>Equip yourself to effectively<br />lead service transformation</p>
              <a className="tool-email" href="mailto:toolshed@redquadrant.com">toolshed@redquadrant.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-main site-frame">
        <div className="home-card-grid">
          <article>
            <img src={homeImages.justice.src} alt="Green landscape representing environmental and social justice" />
            <h2>Environmental<br />and social justice</h2>
            <p>The purpose of public service is to enable better citizen and community outcomes. Equality, diversity, and inclusion must be at the heart of transformation. And we must safeguard our environment.</p>
            <Link href="/carbonreductionplan">Our carbon reduction plan.</Link>
          </article>
          <article>
            <img src={homeImages.delivery.src} alt="People working together" />
            <h2>Experienced, authentic delivery together</h2>
            <p>With hundreds of projects across all key public services, we put partnering into practice. We’re focused on working with you as one team, and we specialise in being honest, grown-up, and getting the real work done.</p>
          </article>
          <article>
            <img src={homeImages.clients.src} alt="A group enjoying a beach trip" />
            <h2>Satisfied clients</h2>
            <p className="return-rate">96.8%</p>
            <p className="return-copy">of our clients return to us for more. We stick around until the job is done, and deliver the value-adding outcomes as well as the initial requirement. And we build your skills and capacity, so we do ourselves out of a job.</p>
          </article>
          <article>
            <img src={homeImages.methods.src} alt="A climber going over an edge" />
            <h2>Cutting edge methods</h2>
            <p>We select the best points of intervention and tailor our approach every time. We live the world of digital, and we take agile, adaptive work in complexity seriously. We help you lead systems and generate powerful learning as well as direct results.</p>
          </article>
        </div>

        <div className="home-lower-grid">
          <article className="psta-block">
            <h2>The Public Service Transformation Academy</h2>
            <p>We lead and support the Public Service Transformation Academy, a not-for-profit social enterprise partnership. Its mission is to drive better outcomes for people and communities by developing the capability of local, civil, social and health services to collaborate, innovate and lead.</p>
            <a href="https://www.publicservicetransformation.org/" target="_blank" rel="noreferrer"><img src={brandAssets.pstaLogo} alt="Public Service Transformation Academy" /></a>
          </article>
          <article className="lgr-block">
            <img src={homeImages.lgr.src} alt={homeImages.lgr.alt} />
            <h2>Local government reorganisation</h2>
            <p>From business case to Day One and beyond, we help councils turn reorganisation into stronger organisations and better outcomes for communities.</p>
            <Link className="home-feature-link" href="/lgrhub">Explore the LGR &amp; Devolution Hub</Link>
          </article>
          <article className="training-block">
            <h2><Link href="/training-and-development">Dynamic training and development</Link></h2>
            <p className="training-lede">Build the capability to make change work in your own organisation.</p>
            <p>Leadership, systems thinking, commissioning, transformation, coaching, mentoring, and practical learning through live work.</p>
            <Link className="home-feature-link" href="/training-and-development">Explore training and development</Link>
            <img src={homeImages.learning.src} alt="People holding hands" />
          </article>
        </div>
      </section>
    </>
  );
}
