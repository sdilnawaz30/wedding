"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

interface CinematicIntroProps {
  onComplete: () => void;
  onTransitionStart?: () => void;
}

export function CinematicIntro({ onComplete, onTransitionStart }: CinematicIntroProps) {
  const [hasTapped, setHasTapped] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const transitionTriggered = useRef(false);

  // Time in milliseconds when the bright flash occurs in the video
  const PLAYBACK_RATE = 1.6;
  const FLASH_TIME_MS = 6000 / PLAYBACK_RATE; 

  // Lock body scroll while the intro is active & Clean up video memory on unmount
  useEffect(() => {
    if (isDone) return;
    
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
      
      // Violently purge video from mobile RAM
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute('src');
        videoRef.current.load();
      }
    };
  }, [isDone]);

  const handleTap = useCallback((e?: React.SyntheticEvent) => {
    if (e) {
      // Prevent duplicate events (e.g. firing both touchstart and click)
      e.preventDefault(); 
      e.stopPropagation();
    }
    
    if (hasTapped || transitionTriggered.current) return;
    
    setHasTapped(true);
    
    // Start playing immediately without heavy DOM manipulations
    if (videoRef.current) {
      videoRef.current.playbackRate = PLAYBACK_RATE;
      videoRef.current.play().catch((err) => console.log("Video play failed:", err));
    }

    // Schedule the flash transition independently of React state polling
    setTimeout(() => {
      if (transitionTriggered.current) return;
      transitionTriggered.current = true;
      
      setIsFadingOut(true);
      if (onTransitionStart) onTransitionStart();
      
      setTimeout(() => {
        setIsDone(true);
        onComplete();
      }, 1200); 
    }, FLASH_TIME_MS);
  }, [hasTapped, onComplete, onTransitionStart]);

  // 5-second automatic fallback timeout if user does not tap
  useEffect(() => {
    if (hasTapped) return;
    
    const autoPlayTimer = setTimeout(() => {
      handleTap();
    }, 5000);
    
    return () => clearTimeout(autoPlayTimer);
  }, [hasTapped, handleTap]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black cinematic-layer transition-opacity duration-[1200ms] ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/videos/intro scene.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-[1.04]"
      />

      {/* Interactive overlay layer */}
      {!hasTapped && (
        <div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer touch-none"
          onPointerDown={(e) => {
            e.stopPropagation();
            handleTap(e);
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[130px] h-[130px] opacity-90 transition-opacity duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path id="topArc" d="M 10 54 A 40 40 0 0 1 90 54" fill="none" />
              <text className="font-sans text-[7px] font-bold uppercase tracking-[0.3em] fill-[#FFF9FB]" style={{ filter: 'drop-shadow(0px 1px 3px rgba(0,0,0,0.8))' }}>
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                  TAP TO OPEN
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
