"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Sparkles, RotateCcw, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { FloralWreathRing, FloralGarland, FloralCorner } from "./FloralDecorations";
import { SectionTitle } from "./SectionTitle";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  autoPlayAudio?: boolean;
  onReplayIntro?: () => void;
}

export function PageContainer({
  children,
  className,
  autoPlayAudio = false,
  onReplayIntro,
}: PageContainerProps) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // When envelope opens and triggers autoPlayAudio, attempt playback
  useEffect(() => {
    if (autoPlayAudio && !isAudioPlaying) {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsAudioPlaying(true);
          })
          .catch((err) => {
            console.log("Audio playback notice:", err.message);
            setIsAudioPlaying(true);
          });
      } else {
        setIsAudioPlaying(true);
      }
    }
  }, [autoPlayAudio]);

  const toggleAudio = () => {
    if (!audioRef.current) {
      setIsAudioPlaying(!isAudioPlaying);
      return;
    }

    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => setIsAudioPlaying(true));
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full bg-transparent flex justify-center selection:bg-[#D45B7D] selection:text-white">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/music/wedding-theme.mp3"
        loop
        preload="auto"
        className="hidden"
      />

      {/* Main Mobile Screen Canvas Wrapper — constrained to mobile width (max 420px) on desktop */}
      <div
        className={cn(
          "relative z-10 w-full min-h-[100dvh] max-w-[420px] mx-auto bg-transparent",
          "flex flex-col",
          className
        )}
      >
        {/* Floating Controls: Champagne pill buttons (z-50+) */}
        <div className="fixed top-4 right-4 z-50 flex items-center gap-2 pointer-events-auto">
          {/* Replay Envelope Intro button */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              type="button"
              title="Replay royal envelope"
              className="group flex items-center justify-center w-8 h-8 rounded-full border border-[#D8B86A] bg-[rgba(255,248,240,0.85)] text-[#D8B86A] hover:text-[#FFF7EA] hover:bg-[#182942] hover:border-[#D8B86A] transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
              aria-label="Replay envelope intro"
            >
              <RotateCcw className="w-3.5 h-3.5 transition-transform group-hover:-rotate-45 text-[#D8B86A] group-hover:text-[#FFF7EA]" />
            </button>
          )}

          {/* Music ambient control toggle button */}
          <button
            onClick={toggleAudio}
            type="button"
            title={isAudioPlaying ? "Mute music" : "Play music"}
            className="group relative flex items-center justify-center w-8 h-8 rounded-full border border-[#D8B86A] bg-[rgba(255,248,240,0.85)] text-[#D8B86A] hover:text-[#FFF7EA] hover:bg-[#182942] hover:border-[#D8B86A] transition-all duration-300 shadow-sm cursor-pointer active:scale-95"
            aria-label="Toggle background music"
          >
            {isAudioPlaying ? (
              <Volume2 className="w-4 h-4 text-[#D8B86A] group-hover:text-[#FFF7EA] transition-transform group-hover:scale-110" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#D8B86A] opacity-70 group-hover:opacity-100 group-hover:text-[#FFF7EA] transition-transform group-hover:scale-110" />
            )}
            {isAudioPlaying && (
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8A2B5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8A2B5]" />
              </span>
            )}
          </button>
        </div>

        {/* Dynamic scrollable wedding content */}
        <div className="flex-1 w-full flex flex-col">{children}</div>

        {/* =======================================================
            ROYAL INVITATION FOOTER
            Luxury smoked black glass with gold borders
            ======================================================= */}
        <footer className="w-full py-7 px-4 text-center border-t border-[rgba(216,184,106,0.65)] champagne-card relative overflow-hidden mt-8 rounded-t-3xl">
          {/* Floral corner accents */}
          <FloralCorner position="top-left" size={28} className="top-1 left-1 opacity-70" />
          <FloralCorner position="top-right" size={28} className="top-1 right-1 opacity-70" />
          <FloralCorner position="bottom-left" size={28} className="bottom-1 left-1 opacity-70" />
          <FloralCorner position="bottom-right" size={28} className="bottom-1 right-1 opacity-70" />

          {/* D & S Floral Wreath Monogram */}
          <div className="mb-2">
            <FloralWreathRing size={60}>
              <div className="w-9 h-9 rounded-full border border-[rgba(216,184,106,0.65)] bg-[rgba(20,10,18,0.65)] flex items-center justify-center shadow-xs">
                <span className="font-serif italic font-bold text-xs text-[#FFF4E6] tracking-wider text-shadow-names">
                  D &amp; S
                </span>
              </div>
            </FloralWreathRing>
          </div>

          <SectionTitle
            title="FINAL BLESSING"
            subtitle="WITH DUAS & BLESSINGS"
          />

          <p className="font-serif italic text-sm text-[#FFF4E6] font-bold tracking-wide text-shadow-light mt-1">
            With duas, love and blessings
          </p>

          <FloralGarland width={160} className="my-1.5" />

          <p className="font-sans text-[10.5px] uppercase tracking-[0.3em] text-[#D8B86A] font-bold mt-1">
            18 • 10 • 2026
          </p>

          <p className="font-serif italic text-[11px] text-[#E8D6B8] mt-1.5 px-2 font-medium">
            Celebrating the sacred union of S. Mohamed Dil Nawaz &amp; A. Sharmila Begum
          </p>
        </footer>
      </div>
    </div>
  );
}
