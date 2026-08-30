"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

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

const consultancyReplacements: readonly [RegExp, string][] = [
  [/public services/gi, "cross-boundary public-service stakeholder ecosystems"],
  [/public service/gi, "public-value delivery ecosystem"],
  [/local government/gi, "place-based local-government stakeholder landscape"],
  [/transformation/gi, "transformational change enablement"],
  [/transforming/gi, "enabling transformational change across"],
  [/transform/gi, "strategically transform"],
  [/clients/gi, "strategic delivery partners"],
  [/client/gi, "strategic delivery partner"],
  [/people/gi, "human-capital stakeholders"],
  [/services/gi, "service-delivery propositions"],
  [/service/gi, "service-delivery proposition"],
  [/outcomes/gi, "outcome-led value realisation"],
  [/outcome/gi, "outcome-led value realisation"],
  [/training/gi, "capability enablement"],
  [/learning/gi, "capability acceleration"],
  [/change/gi, "strategic transformation"],
  [/work/gi, "co-created delivery workstreams"],
  [/help/gi, "partner to catalyse"],
  [/teams/gi, "multi-disciplinary delivery pods"],
  [/team/gi, "multi-disciplinary delivery pod"],
  [/problems/gi, "mission-critical delivery challenges"],
  [/problem/gi, "mission-critical delivery challenge"],
];

function consultancyText(input: string) {
  let output = input;
  for (const [pattern, replacement] of consultancyReplacements) {
    output = output.replace(pattern, replacement);
  }
  return output;
}

export function OriginLogo({ src }: { src: string }) {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const sequence = ["top-right", "bottom-right", "bottom-left", "top-left"] as const;

  const press = (quadrant: (typeof sequence)[number]) => {
    if (quadrant === sequence[step]) {
      const next = step + 1;
      if (next === sequence.length) {
        setOpen(true);
        setStep(0);
      } else {
        setStep(next);
      }
      return;
    }
    setStep(quadrant === sequence[0] ? 1 : 0);
  };

  return (
    <div className="logo-easter" data-no-consultancy>
      <a className="logo" href="/" aria-label="RedQuadrant home">
        <img src={src} alt="RedQuadrant" width="268" height="62" />
      </a>
      <div className="logo-hotspots" aria-label="RedQuadrant logo quadrants">
        {sequence.map((quadrant, index) => (
          <button
            className={`logo-quadrant logo-quadrant-${quadrant}`}
            type="button"
            key={quadrant}
            onClick={() => press(quadrant)}
            aria-label={`Logo quadrant ${index + 1}`}
          />
        ))}
      </div>
      {open && (
        <aside className="logo-origin-card" aria-live="polite">
          <button type="button" onClick={() => setOpen(false)} aria-label="Close origin story">×</button>
          <p>{originStory}</p>
        </aside>
      )}
    </div>
  );
}

export function ConsultancyModeSwitch() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const originals = useRef(new Map<Text, string>());

  const restore = useCallback(() => {
    originals.current.forEach((value, node) => {
      node.nodeValue = value;
    });
    originals.current.clear();
    document.body.classList.remove("consultancy-mode");
  }, []);

  const apply = useCallback(() => {
    restore();
    const main = document.querySelector("main");
    if (!main) return;
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      const textNode = node as Text;
      const parent = textNode.parentElement;
      const original = textNode.nodeValue ?? "";
      if (
        parent &&
        original.trim() &&
        !parent.closest("[data-no-consultancy]") &&
        !["SCRIPT", "STYLE", "NOSCRIPT", "BUTTON"].includes(parent.tagName)
      ) {
        const transformed = consultancyText(original);
        if (transformed !== original) {
          originals.current.set(textNode, original);
          textNode.nodeValue = transformed;
        }
      }
      node = walker.nextNode();
    }
    document.body.classList.add("consultancy-mode");
  }, [restore]);

  useEffect(() => {
    if (active) apply();
    else restore();
    return () => restore();
  }, [active, pathname, apply, restore]);

  return (
    <div className="consultancy-switch-wrap" data-no-consultancy>
      {active && (
        <div className="consultancy-mode-banner" role="status">
          Leveraging transformational stakeholder ecosystems to unlock scalable, outcome-led public value.
        </div>
      )}
      <button
        className="consultancy-switch"
        type="button"
        onClick={() => setActive(value => !value)}
        aria-pressed={active}
      >
        {active ? "Make it human again." : "Consultancy mode"}
      </button>
    </div>
  );
}

export function FooterShed() {
  const [item, setItem] = useState<(typeof toolShedItems)[number] | null>(null);

  const openShed = () => {
    const next = toolShedItems[Math.floor(Math.random() * toolShedItems.length)];
    setItem(next);
  };

  return (
    <div className="footer-shed-wrap" data-no-consultancy>
      <button className="tiny-shed" type="button" onClick={openShed} aria-label="Open the RedQuadrant Tool Shed">
        <span className="shed-roof" aria-hidden="true" />
        <span className="shed-body" aria-hidden="true"><span className="shed-door" /></span>
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
      data-no-consultancy
    >
      <span aria-hidden="true">✦</span>
      The nerdy local government Christmas quiz
    </a>
  );
}
