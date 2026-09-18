"use client";

import { useEffect, useRef } from "react";
import { homeImages } from "../site-data";

export function HeroMotion() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let stopTimer: ReturnType<typeof setTimeout> | undefined;

    // Keep the decorative introduction brief without needing a visible control.
    const stop = () => element.pause();
    const onPlaying = () => {
      if (stopTimer === undefined) stopTimer = setTimeout(stop, 5000);
    };
    const onPreferenceChange = () => {
      if (motion.matches) stop();
    };

    element.addEventListener('playing', onPlaying);
    motion.addEventListener('change', onPreferenceChange);
    if (!motion.matches) {
      element.muted = true;
      element.play().catch(() => {});
    }

    return () => {
      if (stopTimer !== undefined) clearTimeout(stopTimer);
      stop();
      element.removeEventListener('playing', onPlaying);
      motion.removeEventListener('change', onPreferenceChange);
    };
  }, []);

  return <video ref={video} className="home-stage-video" muted playsInline
    preload="metadata" poster={homeImages.hero.src} aria-hidden="true" tabIndex={-1}>
    <source src={homeImages.heroVideo.src} type="video/mp4" />
  </video>;
}
