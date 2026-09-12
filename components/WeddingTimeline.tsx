"use client";

import React from "react";
import {
  Calendar,
  Clock,
  MapPin,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { weddingData } from "@/lib/weddingData";
import { FloralCorner, FloralGarland, FloralFlourish } from "./FloralDecorations";

export function WeddingTimeline() {
  return (
    <SectionContainer
      id="wedding-timeline"
      className="py-4 sm:py-6 px-3 w-full flex flex-col items-center bg-transparent"
    >
      {/* FLOATING TIMELINE CONTENT: No solid white card */}
      <div
        className="w-full max-w-[390px] flex flex-col items-center text-center relative"
      >
        {/* Top Header */}
        <div className="flex flex-col items-center mb-3">
          <div className="flex items-center gap-1.5 text-[#C9A34E] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B86A]" />
            <span className="font-sans text-[9.5px] uppercase tracking-[0.26em] text-[#D8B86A] font-bold">
              The Wedding Day Program
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#D8B86A]" />
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#FFF4E6] tracking-wider mt-0.5 text-shadow-light">
            ITINERARY
          </h2>

          {/* Floral Garland in Header */}
          <FloralGarland width={200} className="my-1" />

          <div className="inline-flex items-center gap-2 mt-1 px-3.5 py-1 rounded-full champagne-pill border border-[rgba(216,184,106,0.45)] shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#D8B86A]" />
            <span className="font-serif font-bold text-[11px] uppercase tracking-wider text-[#FFF7EA] text-shadow-light">
              {weddingData.date.gregorianFormatted}
            </span>
          </div>

          <p className="font-serif italic text-xs text-[#E8D6B8] mt-1 font-semibold">
            {weddingData.date.hijri}
          </p>
        </div>

        {/* VERTICAL TIMELINE CONTAINER */}
        <div className="relative w-full py-2 flex flex-col gap-6 text-left">
          {/* Continuous Vertical Timeline Line */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#D8B86A] via-[#E8B7C4] to-[#D8B86A] pointer-events-none" />

          {/* TIMELINE EVENT 1: NIKKAH (11:00 A.M.) */}
          <div className="relative flex items-start gap-4 pl-1">
            {/* Node Icon */}
            <div className="relative z-10 w-11 h-11 rounded-full bg-[#182942] border-2 border-[#D8B86A] flex items-center justify-center text-white shadow-md shrink-0">
              {/* Mosque Icon SVG */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C10.5 5 8 7 8 10H16C16 7 13.5 5 12 2Z"
                  fill="currentColor"
                />
                <circle cx="12" cy="1.5" r="0.8" fill="#D8B86A" />
                <rect x="5" y="10" width="14" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" />
                <path d="M10 21V16C10 14.8 11 14 12 14C13 14 14 14.8 14 16V21" fill="#182942" stroke="currentColor" strokeWidth="1.2" />
                <rect x="2" y="8" width="2" height="13" fill="currentColor" />
                <polygon points="3,5 1,8 5,8" fill="#D8B86A" />
                <rect x="20" y="8" width="2" height="13" fill="currentColor" />
                <polygon points="21,5 19,8 23,8" fill="#D8B86A" />
              </svg>
            </div>

            {/* Event Content (Luxury champagne translucent surface) */}
            <div className="flex-1 champagne-card rounded-2xl p-3.5 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#182942] text-[#FFF7EA] border border-[#D8B86A] shadow-xs mb-1">
                <Clock className="w-3 h-3 text-[#D8B86A]" />
                <span className="font-sans text-[10.5px] uppercase font-bold tracking-wider text-[#FFF7EA]">
                  11:00 A.M.
                </span>
              </div>

              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FFF4E6] leading-snug text-shadow-light">
                NIKKAH
              </h3>

              <div className="mt-1 flex items-start gap-1.5 text-xs text-[#F0DEC8] leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#D8B86A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif font-bold text-xs text-[#FFF7EA] text-shadow-light">
                    {weddingData.ceremonies.nikah.venueName}
                  </p>
                  <p className="font-sans text-[11px] text-[#F0DEC8]">
                    {weddingData.ceremonies.nikah.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TIMELINE EVENT 2: VALIMA LUNCH (12:30 P.M. onwards) */}
          <div className="relative flex items-start gap-4 pl-1">
            {/* Node Icon */}
            <div className="relative z-10 w-11 h-11 rounded-full bg-[#182942] border-2 border-[#D8B86A] flex items-center justify-center text-white shadow-md shrink-0">
              <UtensilsCrossed className="w-5 h-5 text-[#D8B86A]" />
            </div>

            {/* Event Content (Luxury champagne translucent surface) */}
            <div className="flex-1 champagne-card rounded-2xl p-3.5 text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#182942] text-[#FFF7EA] border border-[#D8B86A] shadow-xs mb-1">
                <Clock className="w-3 h-3 text-[#D8B86A]" />
                <span className="font-sans text-[10.5px] uppercase font-bold tracking-wider text-[#FFF7EA]">
                  12:30 PM onwards
                </span>
              </div>

              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#FFF4E6] leading-snug text-shadow-light">
                VALIMA LUNCH
              </h3>

              <div className="mt-1 flex items-start gap-1.5 text-xs text-[#F0DEC8] leading-relaxed">
                <MapPin className="w-3.5 h-3.5 text-[#D8B86A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif font-bold text-xs text-[#FFF7EA] text-shadow-light">
                    {weddingData.ceremonies.valima.venueName}
                  </p>
                  <p className="font-sans text-[11px] text-[#F0DEC8]">
                    {weddingData.ceremonies.valima.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Floral Flourish */}
        <FloralFlourish className="mt-1.5" />
      </div>
    </SectionContainer>
  );
}
