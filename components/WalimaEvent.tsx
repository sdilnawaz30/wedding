"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Bus,
  Navigation,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";
import { FloralCorner, FloralGarland, FloralFlourish } from "./FloralDecorations";
import { FloralBackgroundFrame } from "./FloralBackgroundFrame";

export function WalimaEvent() {
  const zaiPalaceMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Zai+Palace,+514/141,+Surya+Narayana+Chetty+Street,+Royapuram,+Chennai+-+600013";

  return (
    <SectionContainer
      id="walima-event"
      className="bg-gradient-to-b from-[#E6DDE3] to-[#E6C9CE] min-h-[90vh] flex flex-col justify-center py-10 relative overflow-hidden"
    >
      <FloralBackgroundFrame />
      {/* Decorative frame */}
      <div className="absolute inset-2 border border-[#B76E79]/20 rounded-2xl pointer-events-none z-0" />
      <div className="absolute inset-3 border border-[#B76E79]/10 rounded-xl pointer-events-none z-0" />
      {/* FLOATING VALIMA CONTENT: No solid white card */}
      <div className="w-full max-w-[390px] flex flex-col items-center text-center relative">
        {/* Consistent SectionTitle ornamental frame */}
        <SectionTitle
          title="WALIMA RECEPTION"
          subtitle="AT ZAI PALACE • ROYAPURAM"
        />

        {/* 2. DATE, TIME & VENUE TILES */}
        <div className="w-full flex flex-col gap-3 my-1.5 z-10">
          {/* DATE BLOCK */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] border border-[#B76E79]/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/60 border border-[#B76E79]/30 flex items-center justify-center text-[#B76E79] shadow-sm shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                Reception Date
              </span>
              <p className="font-serif font-bold text-base sm:text-lg text-[#2B2528] leading-snug">
                Sunday, 18th October 2026
              </p>
              <p className="font-serif italic text-xs text-[#3B3336] mt-0.5 font-semibold">
                6 Jumada Al-Awwal 1448 AH
              </p>
            </div>
          </div>

          {/* TIMING BLOCK */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] border border-[#B76E79]/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/60 border border-[#B76E79]/30 flex items-center justify-center text-[#B76E79] shadow-sm shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                Arrival Time
              </span>
              <p className="font-serif font-bold text-base sm:text-lg text-[#2B2528] leading-snug">
                12:30 PM onwards
              </p>
              <p className="font-serif italic text-xs text-[#3B3336] mt-0.5 font-medium">
                Lunch will be served
              </p>
            </div>
          </div>

          {/* VENUE BLOCK */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] border border-[#B76E79]/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/60 border border-[#B76E79]/30 flex items-center justify-center text-[#B76E79] shadow-sm shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                WALIMA VENUE
              </span>
              <p className="font-serif font-bold text-base sm:text-lg text-[#2B2528] leading-snug">
                ZAI PALACE
              </p>
              <p className="font-sans text-xs text-[#3B3336] leading-relaxed mt-0.5 font-medium">
                No. 514/141, Surya Narayana Chetty Street,
                <br />
                Royapuram, Chennai - 600013.
              </p>
            </div>
          </div>
        </div>

        {/* 3. MODERN ARCHITECTURAL SILHOUETTE */}
        <div className="w-full my-2.5 py-1 flex justify-center text-[#B76E79] opacity-90">
          <svg
            width="220"
            height="64"
            viewBox="0 0 220 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            {/* Modern Curved Roof / Canopy */}
            <path d="M30 20 Q 110 0 190 20 L 180 24 Q 110 8 40 24 Z" fill="#D8B86A" />

            {/* Main Glass Building Facade */}
            <path d="M45 23 Q 110 10 175 23 L 175 60 L 45 60 Z" fill="currentColor" opacity="0.9" />

            {/* Large Glass Panes / Vertical Fins */}
            {/* Left curve */}
            <rect x="52" y="26" width="8" height="34" fill="#E6DDE3" />
            <rect x="64" y="23" width="8" height="37" fill="#E6DDE3" />
            <rect x="76" y="20" width="8" height="40" fill="#E6DDE3" />
            <rect x="88" y="17" width="8" height="43" fill="#E6DDE3" />
            
            {/* Center Atrium */}
            <rect x="100" y="15" width="20" height="45" fill="#E6DDE3" />
            <rect x="102" y="17" width="16" height="43" fill="#B76E79" opacity="0.3" />

            {/* Right curve */}
            <rect x="124" y="17" width="8" height="43" fill="#E6DDE3" />
            <rect x="136" y="20" width="8" height="40" fill="#E6DDE3" />
            <rect x="148" y="23" width="8" height="37" fill="#E6DDE3" />
            <rect x="160" y="26" width="8" height="34" fill="#E6DDE3" />

            {/* Horizontal mullions (glass dividers) */}
            <rect x="45" y="32" width="130" height="2" fill="currentColor" opacity="0.6" />
            <rect x="45" y="44" width="130" height="2" fill="currentColor" opacity="0.6" />

            {/* Floating modern entrance portico */}
            <path d="M80 50 L 140 50 L 148 54 L 72 54 Z" fill="#D8B86A" />
            <rect x="90" y="54" width="4" height="6" fill="#E6DDE3" />
            <rect x="126" y="54" width="4" height="6" fill="#E6DDE3" />
            
            {/* Modern Side Wings */}
            <rect x="25" y="40" width="20" height="20" fill="currentColor" opacity="0.8" />
            <rect x="175" y="40" width="20" height="20" fill="currentColor" opacity="0.8" />
            <rect x="28" y="44" width="14" height="16" fill="#E6DDE3" opacity="0.5" />
            <rect x="178" y="44" width="14" height="16" fill="#E6DDE3" opacity="0.5" />

            {/* Base */}
            <rect x="15" y="60" width="190" height="4" fill="currentColor" />
          </svg>
        </div>

        {/* 4. FUNCTIONAL "GET DIRECTIONS" BUTTON */}
        <div className="mt-2 w-full flex flex-col items-center">
          <a
            href={zaiPalaceMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full max-w-[280px] py-3.5 px-6 rounded-full text-xs font-sans uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-md bg-white border border-[#D8B86A]/50 text-[#B76E79] hover:bg-white/80 hover:shadow-lg active:scale-98"
          >
            <Navigation className="w-4 h-4 text-[#B76E79] transition-transform group-hover:rotate-45" />
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B76E79] opacity-80 group-hover:opacity-100" />
          </a>
          <p className="font-serif italic text-[11px] text-[#3B3336] mt-1.5 font-medium">
            Opens Google Maps • Zai Palace, Royapuram
          </p>
        </div>
        {/* 5. TRANSPORTATION INFORMATION BLOCK */}
        <div className="w-full mt-4 p-3.5 rounded-2xl bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] border border-[#B76E79]/20 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[#B76E79] mb-2">
            <Bus className="w-4 h-4 text-[#B76E79]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.24em] font-bold text-[#B76E79]">
              Transport Information
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mt-2 text-left relative">
            <div className="p-2.5 rounded-xl bg-white/60 border border-[#B76E79]/30">
              <span className="block font-sans text-[8.5px] uppercase tracking-wider text-[#B76E79] font-bold mb-0.5">
                Bus Routes:
              </span>
              <p className="font-serif font-bold text-xs text-[#2B2528] leading-snug">
                1, 4, 56D, 56C, 56K, 101
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-white/60 border border-[#B76E79]/30">
              <span className="block font-sans text-[8.5px] uppercase tracking-wider text-[#B76E79] font-bold mb-0.5">
                BUS STOP
              </span>
              <p className="font-serif font-bold text-xs text-[#2B2528] leading-snug">
                KALMANDAPAM
              </p>
            </div>
          </div>
        </div>

        {/* 6. FAMILY BLESSINGS TRIBUTE BLOCK */}
        <div className="w-full mt-4 p-4 rounded-2xl bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] text-center border border-[#B76E79]/20">
          <div className="flex items-center justify-center gap-1.5 text-[#B76E79] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B86A]" />
            <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-[#B76E79] font-bold">
              A BLESSED GATHERING CELEBRATING
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8B86A]" />
          </div>

          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2B2528] tracking-wide my-1">
            Adyan & Hamdhaan
          </h3>

          <p className="font-sans text-[8.5px] uppercase tracking-[0.18em] text-[#B76E79] font-bold mt-2">
            WITH DUAS & BLESSINGS FROM THEIR PARENTS
          </p>

          <p className="font-serif italic font-bold text-sm text-[#3B3336] mt-0.5">
            Younus & Faarish
          </p>

          <FloralFlourish className="mt-2" />
        </div>
      </div>
    </SectionContainer>
  );
}
