/* eslint-disable @next/next/no-img-element, react-hooks/set-state-in-effect */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const originStory =
  "RedQuadrant, 2009. Inspired by a minicab company running a self-organising allocation system above a chip shop. Uber before Uber, only less well-funded.";

const toolShedItems = [
  {
    title: "Five worlds",
    prompt:
      "Map citizen, service, management and leadership, and learning and change. Then mark where information, responsibility, or feedback fails to cross a boundary.",
  },
  {
    title: "Outside-in",
    prompt:
      "Follow one real demand end-to-end from the person's point of view. Mark every hand-off, wait, repeated question, and workaround.",
  },
  {
    title: "Viable System Model",
    prompt:
      "Ask where local delivery needs autonomy, where coordination genuinely adds value, and where escalation is compensating for a design problem.",
  },
  {
    title: "Systems leadership",
    prompt:
      "List the people who hold different fragments of the situation. Put the unresolved differences in the room, not just the representatives.",
  },
  {
    title: "Meta-contextuality",
    prompt:
      "Before choosing a method, name what kind of situation this is, who is acting, what is changing, and what a useful next move would look like.",
  },
  {
    title: "Flawful consulting",
    prompt:
      "Don't become either expert-over or servant-under. Work adult-to-adult, and leave the client with more capability than you found.",
  },
  {
    title: "Iterative service design",
    prompt:
      "Change one part of the real service, observe what actually happens, and use the result to choose the next intervention.",
  },
] as const;

export function OriginLogo({ src }: { src: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="logo-easter">
      <Link className="logo" href="/" aria-label="RedQuadrant home">
        <img src={src} alt="RedQuadrant" width="268" height="62" />
      </Link>
      <button
        className="logo-story-hint"
        type="button"
        onClick={() => setOpen(value => !value)}
        aria-label="Read the RedQuadrant origin story"
        aria-expanded={open}
        aria-controls="redquadrant-origin-story"
      >
        Our unlikely beginning
      </button>
      {open && (
        <aside
          className="logo-origin-card"
          id="redquadrant-origin-story"
          aria-label="The RedQuadrant origin story"
          aria-live="polite"
        >
          <button type="button" onClick={() => setOpen(false)} aria-label="Close origin story">×</button>
          <h2>Our unlikely beginning</h2>
          <p>{originStory}</p>
        </aside>
      )}
    </div>
  );
}

export function ReturnRateStat() {
  const [open, setOpen] = useState(false);
  return (
    <span className="return-rate-wrap">
      <button
        type="button"
        className="return-rate return-rate-button"
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
      >
        96.8%
      </button>
      <span className={`return-rate-note${open ? " is-open" : ""}`} role="note">
        Which does not at all undermine our ambition to do ourselves out of a job.
      </span>
    </span>
  );
}

export function FooterShed() {
  const [item, setItem] = useState<(typeof toolShedItems)[number] | null>(null);

  const openShed = () => {
    const next = toolShedItems[Math.floor(Math.random() * toolShedItems.length)];
    setItem(next);
  };

  return (
    <div className="footer-shed-wrap">
      <button className="tiny-shed" type="button" onClick={openShed}>
        <span className="shed-icon" aria-hidden="true">
          <span className="shed-roof" />
          <span className="shed-body"><span className="shed-door" /></span>
        </span>
        <span className="shed-label">sample the RedQuadrant toolshed</span>
      </button>
      {item && (
        <aside className="shed-card" aria-live="polite">
          <button type="button" className="shed-close" onClick={() => setItem(null)} aria-label="Close Tool Shed card">×</button>
          <p className="shed-kicker">From the RedQuadrant Tool Shed</p>
          <h3>{item.title}</h3>
          <p>{item.prompt}</p>
          <div className="shed-actions">
            <button type="button" onClick={openShed}>Another tool</button>
            <a href="https://chosen-path.org/2020/08/28/an-invitation-to-the-redquadrant-tool-shed/" target="_blank" rel="noreferrer">Visit the Tool Shed</a>
          </div>
        </aside>
      )}
    </div>
  );
}

export function SeasonalQuiz() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth();
    const date = now.getDate();
    setVisible((month === 10 && date >= 25) || month === 11 || (month === 0 && date <= 5));
  }, []);

  if (!visible) return null;

  return (
    <a
      className="seasonal-quiz"
      href="https://antlerboy.github.io/RedQuadrantChristmasquiz/"
      target="_blank"
      rel="noreferrer"
    >
      <span aria-hidden="true">✦</span>
      The nerdy local government Christmas quiz
    </a>
  );
}
