"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";
import { FloralCorner, FloralGarland } from "./FloralDecorations";
import { FloralBackgroundFrame } from "./FloralBackgroundFrame";

export function IslamicBlessing() {
  return (
    <SectionContainer
      id="blessing-section"
      className="min-h-[90vh] bg-gradient-to-b from-[#E6DDE3] to-[#E6C9CE] flex flex-col justify-center py-10 relative overflow-hidden"
    >
      <FloralBackgroundFrame />
      {/* 1. Master Background Decorative Frame */}
      <div className="absolute inset-2 border border-[#B76E79]/20 rounded-2xl pointer-events-none z-0" />
      <div className="absolute inset-3 border border-[#B76E79]/10 rounded-xl pointer-events-none z-0" />

      {/* FLOATING INVITATION CONTENT */}
      <div className="w-full max-w-[390px] mx-auto flex flex-col items-center text-center relative opacity-100 z-10">
        
        {/* NEW SECTION: SAVE THE DATE */}
        <SectionTitle title="SAVE THE DATE" />
        
        <div className="w-full bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] rounded-2xl p-4 sm:p-5 text-center border border-[#B76E79]/20 my-4 relative">
          <FloralCorner position="top-left" size={24} className="-top-2 -left-2 opacity-60 mix-blend-multiply" />
          <FloralCorner position="top-right" size={24} className="-top-2 -right-2 opacity-60 mix-blend-multiply" />

          <p className="font-serif font-bold text-xl sm:text-2xl text-[#2B2528] tracking-wider mb-1 mt-2">
            SUNDAY
          </p>
          <p className="font-sans text-sm sm:text-base text-[#B76E79] font-bold tracking-[0.2em] mb-4">
            18 OCTOBER 2026
          </p>
          
          <div className="flex flex-col gap-2 border-y border-[#B76E79]/20 py-3 mb-4">
            <div className="flex justify-between items-center px-2 sm:px-6">
              <span className="font-serif text-[#3B3336] font-semibold text-sm sm:text-base tracking-wide">NIKKAH</span>
              <span className="font-sans text-[#B76E79] font-bold text-xs sm:text-sm tracking-wider">11:00 AM</span>
            </div>
            <div className="flex justify-between items-center px-2 sm:px-6">
              <span className="font-serif text-[#3B3336] font-semibold text-sm sm:text-base tracking-wide">WALIMA</span>
              <span className="font-sans text-[#B76E79] font-bold text-xs sm:text-sm tracking-wider">12:30 PM ONWARDS</span>
            </div>
          </div>
          
          <p className="font-serif italic text-[#3B3336] text-xs sm:text-sm font-medium">
            7 Jumada Al-Awwal 1448 AH
          </p>
        </div>

        {/* FAMILY INVITATION MESSAGE */}
        <div className="text-center mb-6 mt-2">
          <p className="font-serif italic text-sm sm:text-base text-[#3B3336] leading-relaxed max-w-[310px] mx-auto text-shadow-light font-medium mb-3">
            &ldquo;We warmly invite you to attend and celebrate this blessed occasion with your family.&rdquo;
          </p>
          <p className="font-serif text-sm sm:text-base text-[#2B2528] font-bold tracking-wide text-shadow-light max-w-[310px] mx-auto">
            &ldquo;Please join us with your family and grace the occasion with your presence.&rdquo;
          </p>
        </div>

        {/* Handcrafted Floral Garland Divider */}
        <FloralGarland width={200} className="my-2" />

        {/* WEDDING DUA */}
        <SectionTitle
          title="WEDDING DUA"
        />

        <div className="my-1 w-full bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] rounded-2xl p-4 sm:p-5 text-center opacity-100 border border-[#B76E79]/20">
          {/* Arabic Dua */}
          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-xl sm:text-2xl text-[#2B2528] leading-loose select-text font-bold my-2 text-shadow-arabic"
          >
            بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
          </p>

          {/* English Translation */}
          <p className="font-serif italic text-[#3B3336] text-[13px] sm:text-[14px] leading-relaxed px-4 font-medium max-w-[280px] mx-auto text-shadow-light mt-1">
            May Allah bless you, and shower His blessings upon you, and join you both in goodness.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
