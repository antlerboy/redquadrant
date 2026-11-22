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
    const followPreference = () => {
      if (motion.matches) {
        element.pause();
      } else {
        element.muted = true;
        void element.play().catch(() => {});
      }
    };

    followPreference();
    motion.addEventListener("change", followPreference);
    return () => {
      motion.removeEventListener("change", followPreference);
      element.pause();
    };
  }, []);

  function togglePlayback() {
    const element = video.current;
    if (!element) return;
    if (element.paused) {
      element.muted = true;
      void element.play().catch(() => {});
    } else {
      element.pause();
    }
  }

  return (
    <>
      <video ref={video} id="home-landscape" className={playing ? "home-stage-video is-playing" : "home-stage-video"}
        muted loop playsInline preload="metadata" poster={homeImages.hero.src} aria-hidden="true" tabIndex={-1}
        onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <source src={homeImages.heroVideo.src} type="video/mp4" />
      </video>
      <button className="home-motion-toggle" type="button" aria-controls="home-landscape" onClick={togglePlayback}>
        {playing ? "Pause background" : "Play background"}
      </button>
    </>
  );
}
