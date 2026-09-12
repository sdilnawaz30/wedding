"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";
import { FloralCorner, FloralGarland, FloralFlourish } from "./FloralDecorations";
import { FloralBackgroundFrame } from "./FloralBackgroundFrame";

export function IslamicBlessing() {
  return (
    <SectionContainer
      id="blessing-section"
      className="min-h-[90vh] bg-gradient-to-b from-[#E6DDE3] to-[#E6C9CE] flex flex-col justify-center py-12 relative overflow-hidden"
    >
      <FloralBackgroundFrame />
      
      {/* 1. Master Background Decorative Frame */}
      <div className="absolute inset-4 border border-[#B76E79]/20 rounded-2xl pointer-events-none z-0" />
      <div className="absolute inset-5 border border-[#B76E79]/10 rounded-xl pointer-events-none z-0" />

      {/* 2. Elegant Corner Decor to fill empty frame space */}
      <FloralCorner position="top-left" size={140} className="top-4 left-4 opacity-75" />
      <FloralCorner position="top-right" size={140} className="top-4 right-4 opacity-75" />
      <FloralCorner position="bottom-left" size={140} className="bottom-4 left-4 opacity-75" />
      <FloralCorner position="bottom-right" size={140} className="bottom-4 right-4 opacity-75" />

      {/* FLOATING INVITATION CONTENT */}
      <div className="w-full max-w-[390px] mx-auto flex flex-col items-center text-center relative opacity-100 z-10 px-4">
        
        {/* Top Space Filler */}
        <FloralFlourish className="mb-10 scale-125 opacity-70" />

        {/* FAMILY INVITATION MESSAGE */}
        <div className="text-center mb-8">
          <p className="font-serif text-sm sm:text-base text-[#2B2528] font-bold tracking-wide text-shadow-light max-w-[310px] mx-auto">
            &ldquo;With the blessings of Allah, we invite you to join us on the blessed occasion of our Nikkah and grace it with your presence.&rdquo;
          </p>
        </div>

        {/* Handcrafted Floral Garland Divider */}
        <FloralGarland width={220} className="my-6" />

        {/* NIKKAH DUA */}
        <SectionTitle
          title="NIKKAH DUA"
        />

        <div className="my-2 w-full bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] rounded-2xl p-4 sm:p-5 text-center opacity-100 border border-[#B76E79]/20">
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

        {/* Bottom Space Filler */}
        <FloralFlourish className="mt-10 scale-125 opacity-70" />
      </div>
    </SectionContainer>
  );
}
