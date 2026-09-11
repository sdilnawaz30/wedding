"use client";

import React, { useState, useEffect, useRef } from "react";

interface CinematicIntroProps {
  onComplete: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [hasTapped, setHasTapped] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const transitionTriggered = useRef(false);

  // Time in seconds when the bright flash occurs in the video to start the crossfade
  const FLASH_TIME_SECONDS = 6.0; 

  // Lock body scroll while the intro is active
  useEffect(() => {
    if (isDone) return;
    
    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;
    
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    
    // Attempt to force the first frame to render on mobile browsers
    if (videoRef.current) {
      videoRef.current.currentTime = 0.1;
    }
    
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [isDone]);

  const handleTap = () => {
    if (hasTapped) return;
    setHasTapped(true);
    
    // Start playing the video from the beginning
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((e) => console.log("Video play failed:", e));
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current || transitionTriggered.current) return;
    
    // Check if the video has reached the flash point
    if (videoRef.current.currentTime >= FLASH_TIME_SECONDS) {
      transitionTriggered.current = true;
      
      // Start the fade out
      setIsFadingOut(true);
      
      // Wait for the CSS fade transition to complete before unmounting
      setTimeout(() => {
        setIsDone(true);
        onComplete();
      }, 1200); // 1.2s crossfade duration to melt smoothly into the background
    }
  };

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-[1200ms] ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/videos/intro scene.mp4"
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-[1.04]"
      />

      {/* Interactive overlay layer */}
      {!hasTapped && (
        <div 
          className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer"
          onClick={handleTap}
        >
          <div className="flex flex-col items-center gap-2 opacity-90 hover:opacity-100 transition-opacity duration-300">
            <div className="px-5 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm shadow-lg flex items-center gap-2 animate-pulse">
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
