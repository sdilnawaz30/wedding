"use client";

import React, { useRef } from "react";
import { ChevronDown, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface WeddingHeroProps {
  groomName?: string;
  groomDegree?: string;
  groomRole?: string;
  brideName?: string;
  brideDegree?: string;
  brideRole?: string;
  weddingDate?: string;
  ceremonyTime?: string;
  videoSrc?: string;
  isActive?: boolean;
  className?: string;
}

export function WeddingHero({
  groomName = "S. Mohamed Dil Nawaz",
  groomDegree = "B.E.",
  groomRole = "Network Engineer",
  brideName = "A. Sharmila begum",
  brideDegree = "M.Sc.",
  brideRole = "Professor",
  weddingDate = "Sunday, 18 October 2026",
  videoSrc = "/videos/bg video.mp4",
  isActive = true,
  className,
}: WeddingHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const containerRef = useRef<HTMLElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    if (isActive) {
      // Use IntersectionObserver to pause the video when it's out of viewport
      // This prevents massive CPU/GPU usage and scroll freezes on mobile
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0 } // Trigger as soon as 1px is out/in
      );
      
      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    } else {
      video.pause();
    }
  }, [isActive]);
  const scrollToContent = () => {
    const blessingEl = document.getElementById("blessing-section");
    if (blessingEl) {
      blessingEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative w-full min-h-[100dvh] flex flex-col justify-between items-center text-center overflow-hidden select-none px-4 py-4 sm:py-6 bg-transparent opacity-100",
        className
      )}
      aria-label="Cinematic Royal Wedding Invitation Hero"
    >
      {/* LAYER 2 — FIRST SECTION VIDEO */}
      {/* Video scrolls naturally up as user scrolls down */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        loop
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
      />

      {/* SEAMLESS GRADIENT FADE OVERLAY TO BLEND WITH NEXT PAGE */}
      <div 
        className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none h-[150px] sm:h-[180px] md:h-[260px]"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(230,221,227,0.35) 40%, #E6DDE3 100%)'
        }}
        aria-hidden="true"
      />

      {/* 1. TOP SECTION: BISMILLAH */}
      <div className="relative z-20 pt-1 sm:pt-2 flex flex-col items-center max-w-[360px] mx-auto opacity-100">
        <div className="inline-block px-4 py-1 rounded-2xl champagne-pill mb-1">
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-lg sm:text-xl text-[#FFF7EA] font-bold tracking-normal leading-relaxed text-shadow-arabic"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>
      </div>

      {/* 2. CENTER HERO TYPOGRAPHY: EXACT MATCH TO USER REFERENCE */}
      <div className="relative z-20 w-full max-w-[390px] mx-auto flex flex-col items-center text-center my-auto py-1 opacity-100">
        {/* Welcome Announcement */}
        <p className="font-serif italic text-sm sm:text-base text-[#FFF7EA] tracking-wide text-shadow-light max-w-[300px] leading-relaxed">
          We are honoured to invite you to the sacred Nikkah of
          <br />
          the Wedding ceremony of
        </p>

        {/* Delicate Heart Divider: ── ♡ ── */}
        <div className="flex items-center justify-center gap-2 my-2 w-36">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#E8D6B8] to-[#FFF7EA]" />
          <Heart className="w-2.5 h-2.5 fill-[#FFF7EA] text-[#FFF7EA]" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#E8D6B8] to-[#FFF7EA]" />
        </div>

        {/* TOP GOLD ORNAMENT */}
        <div className="flex items-center justify-center gap-2 mb-2 w-full max-w-[240px] mx-auto opacity-90">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9A34E]" />
          <svg width="28" height="8" viewBox="0 0 28 8" fill="none" className="drop-shadow-sm">
            <circle cx="2" cy="4" r="1" fill="#C9A34E" />
            <path d="M6 4 C10 4, 12 1, 14 1 C16 1, 18 4, 22 4" stroke="#C9A34E" strokeWidth="0.8" fill="none" />
            <circle cx="14" cy="4" r="1.5" fill="#C9A34E" />
            <circle cx="26" cy="4" r="1" fill="#C9A34E" />
            <path d="M14 1 C13 3, 13 4, 14 4" fill="#C9A34E" />
            <path d="M14 1 C15 3, 15 4, 14 4" fill="#C9A34E" />
          </svg>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9A34E]" />
        </div>

        {/* GROOM NAME & DEGREE */}
        <div className="w-full max-w-full px-2 text-center mx-auto">
          <h1 className="w-full text-center font-script text-[24px] sm:text-[28px] md:text-[32px] tracking-wide leading-snug text-shadow-names font-bold">
            <span>{groomName}</span>
            {groomDegree && (
              <span className="font-serif italic text-base sm:text-lg md:text-xl text-[#C9A34E] font-bold ml-1.5 whitespace-nowrap align-baseline">
                , {groomDegree.includes(".") ? groomDegree : `${groomDegree}.`}
              </span>
            )}
          </h1>
          {groomRole && (
            <p className="w-full text-center font-sans text-xs sm:text-[13px] text-[#E8D6B8] font-medium tracking-[0.2em] uppercase mt-1 [text-shadow:0_1px_2px_rgba(0,0,0,0.8),0_0_2px_rgba(0,0,0,0.8)] [-webkit-text-stroke:0.2px_rgba(0,0,0,0.4)]">
              {groomRole}
            </p>
          )}
        </div>

        {/* AMPERSAND WITH GOLDEN LEAF BRANCHES (🌿 & 🌿) */}
        <div className="flex items-center justify-center gap-3 my-2 text-[#D8B86A] w-full text-center mx-auto">
          {/* Left Branch */}
          <svg width="40" height="16" viewBox="0 0 44 18" fill="none" className="drop-shadow-xs shrink-0">
            <path d="M42 9 C30 9 18 12 4 16" stroke="#D8B86A" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M34 8.5 C32 4.5 35 2 38 2.5 C40 3 39 7 34 8.5 Z" fill="#D8B86A" />
            <path d="M32 9.5 C30 14 33 16 36 15 C37.5 14 36.5 11 32 9.5 Z" fill="#D8B86A" />
            <path d="M23 10 C21 6 24 3.5 27 4 C29 4.5 28 8.5 23 10 Z" fill="#D8B86A" />
            <path d="M21 11 C19 15 22 17 25 16 C26.5 15 25.5 12 21 11 Z" fill="#D8B86A" />
            <path d="M12 12 C10 8.5 13 6.5 15 7 C16.5 7.5 15.5 11 12 12 Z" fill="#D8B86A" />
            <circle cx="4" cy="16" r="1.5" fill="#D8B86A" />
          </svg>

          {/* Cursive Ampersand */}
          <span className="font-script text-2xl sm:text-3xl text-[#D8B86A] font-bold text-shadow-names -translate-y-0.5">
            &amp;
          </span>

          {/* Right Branch (Mirrored) */}
          <svg width="40" height="16" viewBox="0 0 44 18" fill="none" className="scale-x-[-1] drop-shadow-xs shrink-0">
            <path d="M42 9 C30 9 18 12 4 16" stroke="#D8B86A" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M34 8.5 C32 4.5 35 2 38 2.5 C40 3 39 7 34 8.5 Z" fill="#D8B86A" />
            <path d="M32 9.5 C30 14 33 16 36 15 C37.5 14 36.5 11 32 9.5 Z" fill="#D8B86A" />
            <path d="M23 10 C21 6 24 3.5 27 4 C29 4.5 28 8.5 23 10 Z" fill="#D8B86A" />
            <path d="M21 11 C19 15 22 17 25 16 C26.5 15 25.5 12 21 11 Z" fill="#D8B86A" />
            <path d="M12 12 C10 8.5 13 6.5 15 7 C16.5 7.5 15.5 11 12 12 Z" fill="#D8B86A" />
            <circle cx="4" cy="16" r="1.5" fill="#D8B86A" />
          </svg>
        </div>

        {/* BRIDE NAME & DEGREE */}
        <div className="w-full max-w-full px-2 text-center mx-auto">
          <h2 className="w-full text-center font-script text-[24px] sm:text-[28px] md:text-[32px] tracking-wide leading-snug text-shadow-names font-bold">
            <span>{brideName}</span>
            {brideDegree && (
              <span className="font-serif italic text-base sm:text-lg md:text-xl text-[#C9A34E] font-bold ml-1.5 whitespace-nowrap align-baseline">
                , {brideDegree.includes(".") ? brideDegree : `${brideDegree}.`}
              </span>
            )}
          </h2>
          {brideRole && (
            <p className="w-full text-center font-sans text-xs sm:text-[13px] text-[#E8D6B8] font-medium tracking-[0.2em] uppercase mt-1 [text-shadow:0_1px_2px_rgba(0,0,0,0.8),0_0_2px_rgba(0,0,0,0.8)] [-webkit-text-stroke:0.2px_rgba(0,0,0,0.4)]">
              {brideRole}
            </p>
          )}
        </div>

        {/* BOTTOM GOLD ORNAMENT */}
        <div className="flex items-center justify-center gap-2 mt-2 w-full max-w-[240px] mx-auto opacity-90" style={{ transform: 'scaleY(-1)' }}>
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9A34E]" />
          <svg width="28" height="8" viewBox="0 0 28 8" fill="none" className="drop-shadow-sm">
            <circle cx="2" cy="4" r="1" fill="#C9A34E" />
            <path d="M6 4 C10 4, 12 1, 14 1 C16 1, 18 4, 22 4" stroke="#C9A34E" strokeWidth="0.8" fill="none" />
            <circle cx="14" cy="4" r="1.5" fill="#C9A34E" />
            <circle cx="26" cy="4" r="1" fill="#C9A34E" />
            <path d="M14 1 C13 3, 13 4, 14 4" fill="#C9A34E" />
            <path d="M14 1 C15 3, 15 4, 14 4" fill="#C9A34E" />
          </svg>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9A34E]" />
        </div>

        {/* Delicate Heart Divider: ── ♡ ── */}
        <div className="flex items-center justify-center gap-2 my-2 w-36">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#E8D6B8] to-[#FFF7EA]" />
          <Heart className="w-2.5 h-2.5 fill-[#FFF7EA] text-[#FFF7EA]" />
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#E8D6B8] to-[#FFF7EA]" />
        </div>

        {/* MOTTO: A JOURNEY OF / FAITH ♡ LOVE ♡ TOGETHER */}
        <div className="flex flex-col items-center">
          <p className="font-serif text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#FFF7EA] font-medium text-shadow-light">
            A Journey Of
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <span className="font-serif text-[10px] sm:text-[11.5px] uppercase tracking-[0.22em] text-[#FFF7EA] font-medium text-shadow-light">
              Faith
            </span>
            <Heart className="w-2 h-2 fill-[#E8D6B8] text-[#E8D6B8]" />
            <span className="font-serif text-[10px] sm:text-[11.5px] uppercase tracking-[0.22em] text-[#FFF7EA] font-medium text-shadow-light">
              Love
            </span>
            <Heart className="w-2 h-2 fill-[#E8D6B8] text-[#E8D6B8]" />
            <span className="font-serif text-[10px] sm:text-[11.5px] uppercase tracking-[0.22em] text-[#FFF7EA] font-medium text-shadow-light">
              Together
            </span>
          </div>
          {/* Small Heart Outline */}
          <Heart className="w-3.5 h-3.5 text-[#D8B86A] fill-transparent mt-1.5 drop-shadow-xs" strokeWidth={1.5} />
        </div>
      </div>

      {/* 3. BOTTOM SECTION: CEREMONY BADGE & SCROLL PROMPT */}
      <div className="relative z-20 flex flex-col items-center pb-2 sm:pb-3 w-full max-w-[360px] mx-auto opacity-100">
        {/* Ceremony Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(20,10,18,0.65)] backdrop-blur-md border border-[#D8B86A]/30 shadow-lg mb-2">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#D8B86A] font-bold">
            Nikkah &amp; Walima
          </span>
        </div>

        {/* Interactive Scroll Prompt */}
        <div
          onClick={scrollToContent}
          role="button"
          tabIndex={0}
          aria-label="Scroll to wedding blessings and details"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") scrollToContent();
          }}
          className="inline-flex flex-col items-center px-4 py-1 rounded-full bg-[rgba(20,10,18,0.65)] backdrop-blur-md border border-[#D8B86A]/30 shadow-lg cursor-pointer active:scale-95 transition-transform hover:scale-105"
        >
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#D8B86A] font-bold">
            Scroll To Explore
          </span>
          <div className="text-[#D8B86A] animate-bounce mt-0.5">
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </section>
  );
}

