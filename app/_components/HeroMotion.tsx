"use client";

import { useEffect, useRef } from "react";
import { homeImages } from "../site-data";

export function HeroMotion() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const stop = () => element.pause();
    const onPreferenceChange = () => {
      if (motion.matches) stop();
    };

    motion.addEventListener('change', onPreferenceChange);
    if (!motion.matches) {
      element.muted = true;
      element.play().catch(() => {});
    }

    return () => {
      stop();
      motion.removeEventListener('change', onPreferenceChange);
    };
  }, []);

  return <video ref={video} className="home-stage-video" muted loop playsInline
    preload="metadata" poster={homeImages.hero.src} aria-hidden="true" tabIndex={-1}>
    <source src={homeImages.heroVideo.src} type="video/mp4" />
  </video>;
}
