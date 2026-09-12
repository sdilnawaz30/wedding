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
  const [isVideoReady, setIsVideoReady] = useState(false);
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

  // Safely trigger transition and unmount
  const triggerTransition = useCallback(() => {
    if (transitionTriggered.current) return;
    transitionTriggered.current = true;
    
    setIsFadingOut(true);
    if (onTransitionStart) onTransitionStart();
    
    setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, 1200);
  }, [onComplete, onTransitionStart]);

  const handleTap = useCallback((e?: React.SyntheticEvent) => {
    if (e) {
      e.preventDefault(); 
      e.stopPropagation();
    }
    
    if (hasTapped || transitionTriggered.current) return;
    setHasTapped(true);
    
    // If video isn't ready or we don't have a ref, immediately fall back.
    if (!videoRef.current || !isVideoReady) {
      triggerTransition();
      return;
    }

    // Try to play the video.
    videoRef.current.playbackRate = PLAYBACK_RATE;
    const playPromise = videoRef.current.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Video is playing! Schedule the flash transition at the right time.
        setTimeout(() => {
          triggerTransition();
        }, FLASH_TIME_MS);
      }).catch((err) => {
        console.log("Video play failed (mobile restriction/network):", err);
        // Fallback: gracefully trigger transition immediately
        triggerTransition();
      });
    } else {
      // Very old browser fallback
      setTimeout(() => {
        triggerTransition();
      }, FLASH_TIME_MS);
    }
  }, [hasTapped, isVideoReady, triggerTransition, FLASH_TIME_MS]);

  // 5-second automatic fallback timeout if user does not tap
  // If the video hangs or user does nothing, this ensures they are never trapped.
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
      className={`fixed inset-0 z-[9999] bg-gradient-to-b from-[#1C1217] to-[#120B0E] cinematic-layer transition-opacity duration-[1200ms] ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* PREMIUM STATIC FALLBACK: D&S Royal Seal */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 transition-opacity duration-1000 ${isVideoReady ? 'opacity-0' : 'opacity-100'}`}>
         <div className="w-20 h-20 rounded-full p-2 flex items-center justify-center opacity-80" style={{ background: "radial-gradient(circle at 35% 30%, #F0A0B8 0%, #D45B7D 60%, #B84265 100%)", boxShadow: "0 8px 24px -2px rgba(212, 91, 125, 0.45)" }}>
           <div className="w-full h-full rounded-full border border-[#F3D785] border-dashed flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF9FB] to-[#FDEEF3] shadow-inner">
             <span className="font-serif italic font-bold text-lg text-[#D45B7D] tracking-widest drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] mt-1">
               D & S
             </span>
             <span className="font-sans text-[7px] text-[#9C7328] uppercase tracking-[0.15em] font-medium opacity-90 -mt-0.5">
               2026
             </span>
           </div>
        </div>
      </div>

      <video
        ref={videoRef}
        src="https://wedding-nine-flax-69.vercel.app/videos/intro scene.mp4"
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setIsVideoReady(true)}
        onCanPlay={() => setIsVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none scale-[1.04] transition-opacity duration-1000 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
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
