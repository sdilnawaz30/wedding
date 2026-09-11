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
  const FLASH_TIME_MS = 6000; 

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
          <div className="flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-black/40 shadow-lg flex items-center gap-2 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-white/90 font-medium">
                Tap to Open
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
