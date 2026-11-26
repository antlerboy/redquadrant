"use client";

import { useEffect, useState } from "react";
import rules from "../rules-data.json";

export function PracticeRule() {
  const [n, setN] = useState(0);

  useEffect(() => {
    // Preserve the server-rendered fallback, then choose a rule after hydration.
    const timer = window.setTimeout(() => setN(Math.floor(Math.random() * rules.length)), 0);
    return () => window.clearTimeout(timer);
  }, []);

  return <aside className="practice-rule">
    <p aria-live="polite">{rules[n]}</p>
    <button type="button" onClick={() => setN((n + 1 + Math.floor(Math.random() * (rules.length - 1))) % rules.length)}>Another rule</button>
    <a href="/toolshed/">The Tool Shed</a>
    <a href="https://transduction.systems/little-redquadrant-rules/">All 256 rules</a>
  </aside>;
}
