"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation, ExternalLink } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";
import { FloralCorner, FloralGarland } from "./FloralDecorations";
import { FloralBackgroundFrame } from "./FloralBackgroundFrame";

export function NikkahEvent() {
  const googleMapsUrl =
    "https://maps.app.goo.gl/6pWaCgnRazAFwRb86";

  return (
    <SectionContainer
      id="nikkah-event"
      className="bg-gradient-to-b from-[#E6C9CE] to-[#E6DDE3] min-h-[90vh] flex flex-col justify-center py-10 relative overflow-hidden"
    >
      <FloralBackgroundFrame />
      {/* Decorative frame */}
      <div className="absolute inset-2 border border-[#B76E79]/20 rounded-2xl pointer-events-none z-0" />
      <div className="absolute inset-3 border border-[#B76E79]/10 rounded-xl pointer-events-none z-0" />
      {/* FLOATING NIKKAH CONTENT: No solid white card */}
      <div className="w-full max-w-[390px] flex flex-col items-center text-center relative">
        {/* Consistent SectionTitle ornamental frame */}
        <SectionTitle
          title="NIKKAH CEREMONY"
          subtitle="SACRED UNION"
        />

        {/* 2. EVENT SCHEDULE & VENUE TILES */}
        <div className="w-full flex flex-col gap-3 my-1.5 z-10">
          {/* DATE BLOCK */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] border border-[#B76E79]/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/60 border border-[#B76E79]/30 flex items-center justify-center text-[#B76E79] shadow-sm shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                Ceremony Date
              </span>
              <p className="font-serif font-bold text-base sm:text-lg text-[#2B2528] leading-snug">
                Sunday, 18th October 2026
              </p>
              <p className="font-serif italic text-xs text-[#3B3336] mt-0.5 font-semibold">
                7 Jumada Al-Awwal 1448 AH
              </p>
            </div>
          </div>

          {/* TIME BLOCK */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] border border-[#B76E79]/20 text-left">
            <div className="w-10 h-10 rounded-xl bg-white/60 border border-[#B76E79]/30 flex items-center justify-center text-[#B76E79] shadow-sm shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block">
                Auspicious Time
              </span>
              <p className="font-serif font-bold text-base sm:text-lg text-[#2B2528] leading-snug">
                11:00 A.M.
              </p>
              <p className="font-serif italic text-xs text-[#3B3336] mt-0.5 font-medium">
                Valima Reception Follows (Lunch after 12:30 PM)
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
                Nikkah Venue
              </span>
              <p className="font-serif font-bold text-base sm:text-lg text-[#2B2528] leading-snug">
                EDGAH MOSQUE
              </p>
              <p className="font-sans text-xs text-[#3B3336] leading-relaxed mt-0.5 font-medium">
                Angappa Naicken Street, Mannady,
                <br />
                Chennai - 600001
              </p>
            </div>
          </div>
        </div>

        {/* 3. MOSQUE DECORATIVE ARCHITECTURAL ILLUSTRATION */}
        <div className="w-full my-2.5 py-1 flex justify-center text-[#B76E79] opacity-80">
          <svg
            width="220"
            height="54"
            viewBox="0 0 220 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            {/* Center Grand Dome with Crescent Pin */}
            <path
              d="M110 6C103 14 96 20 96 28H124C124 20 117 14 110 6Z"
              fill="currentColor"
            />
            <path
              d="M110 2V6M110 2C111.5 2 112 1 112 0M110 2C108.5 2 108 1 108 0"
              stroke="#B76E79"
              strokeWidth="1.2"
            />

            {/* Flanking Secondary Domes */}
            <path
              d="M80 14C76 19 72 23 72 28H88C88 23 84 19 80 14Z"
              fill="currentColor"
              opacity="0.85"
            />
            <path
              d="M140 14C136 19 132 23 132 28H148C148 23 144 19 140 14Z"
              fill="currentColor"
              opacity="0.85"
            />

            {/* Outer Minarets with Spires */}
            <rect x="52" y="10" width="6" height="28" fill="currentColor" rx="1" />
            <polygon points="55,2 50,10 60,10" fill="#E6DDE3" />
            <circle cx="55" cy="1" r="1.2" fill="#B76E79" />
            <rect x="50" y="24" width="10" height="2" fill="#E6DDE3" />

            <rect x="162" y="10" width="6" height="28" fill="currentColor" rx="1" />
            <polygon points="165,2 160,10 170,10" fill="#E6DDE3" />
            <circle cx="165" cy="1" r="1.2" fill="#B76E79" />
            <rect x="160" y="24" width="10" height="2" fill="#E6DDE3" />

            {/* Mosque Lower Colonnade / Arches */}
            <rect x="40" y="28" width="140" height="12" fill="currentColor" opacity="0.95" />
            <path d="M76 40V33C76 31 78 29 80 29C82 29 84 31 84 33V40" fill="#E6DDE3" />
            <path d="M106 40V33C106 31 108 29 110 29C112 29 114 31 114 33V40" fill="#E6DDE3" />
            <path d="M136 40V33C136 31 138 29 140 29C142 29 144 31 144 33V40" fill="#E6DDE3" />

            {/* Base Line */}
            <rect x="25" y="40" width="170" height="2.5" fill="#D8B86A" rx="1" />
          </svg>
        </div>

        {/* 4. FUNCTIONAL "GET DIRECTIONS" BUTTON */}
        <div className="mt-2 w-full flex flex-col items-center">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full max-w-[280px] py-3.5 px-6 rounded-full text-xs font-sans uppercase tracking-[0.22em] font-semibold transition-all duration-300 shadow-md bg-white border border-[#D8B86A]/50 text-[#B76E79] hover:bg-white/80 hover:shadow-lg active:scale-95"
          >
            <Navigation className="w-4 h-4 text-[#B76E79] transition-transform group-hover:rotate-45" />
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B76E79] opacity-80 group-hover:opacity-100" />
          </a>
          <p className="font-serif italic text-[11px] text-[#3B3336] mt-1.5 font-medium">
            Opens Google Maps • Edgah Mosque, Mannady
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
