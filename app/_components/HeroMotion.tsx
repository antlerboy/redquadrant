"use client";
import { useEffect, useRef, useState } from "react";
import { homeImages } from "../site-data";
export function HeroMotion(){
 const video=useRef<HTMLVideoElement>(null);const [paused,setPaused]=useState(false);
 useEffect(()=>{const v=video.current;if(!v)return;const motion=window.matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>setPaused(v.paused);const start=()=>{if(motion.matches){v.pause();setPaused(true);}else{v.muted=true;v.play().catch(()=>setPaused(true));}};v.addEventListener('play',sync);v.addEventListener('pause',sync);v.addEventListener('error',sync);motion.addEventListener('change',start);start();return()=>{v.removeEventListener('play',sync);v.removeEventListener('pause',sync);v.removeEventListener('error',sync);motion.removeEventListener('change',start);};},[]);
 function toggle(){const v=video.current;if(!v)return;if(v.paused){v.muted=true;v.play().then(()=>setPaused(false)).catch(()=>setPaused(true));}else{v.pause();setPaused(true);}}
 return <><video ref={video} className="home-stage-video" style={{display:'block'}} autoPlay muted loop playsInline preload="auto" poster={homeImages.hero.src} aria-hidden="true" tabIndex={-1}><source src={homeImages.heroVideo.src} type="video/mp4" /></video><button className="hero-motion-control" type="button" onClick={toggle} aria-label={paused?'Play background animation':'Pause background animation'}>{paused?'Play animation':'Pause animation'}</button></>;
}
