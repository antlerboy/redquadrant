"use client";

import { useEffect, useRef, useState } from "react";
import { homeImages } from "../site-data";

export function HeroMotion() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stopTimer: number | undefined;
    let finished = false;
    const finish = () => {
      finished = true;
      element.pause();
    };
    const followPreference = () => {
      if (motion.matches || finished) {
        element.pause();
      } else {
        element.muted = true;
        // Keep decorative motion under five seconds, without playback controls.
        if (stopTimer === undefined) stopTimer = window.setTimeout(finish, 4500);
        void element.play().catch(() => {});
      }
    };

    followPreference();
    motion.addEventListener("change", followPreference);
    return () => {
      motion.removeEventListener("change", followPreference);
      if (stopTimer !== undefined) window.clearTimeout(stopTimer);
      element.pause();
    };
  }, []);

  return (
    <video ref={video} id="home-landscape" className={playing ? "home-stage-video is-playing" : "home-stage-video"}
      muted playsInline preload="metadata" poster={homeImages.hero.src} aria-hidden="true" tabIndex={-1}
      onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}>
      <source src={homeImages.heroVideo.src} type="video/mp4" />
    </video>
  );
}
