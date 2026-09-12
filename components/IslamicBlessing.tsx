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

      {/* FLOATING INVITATION CONTENT: No solid white cards */}
      <div className="w-full max-w-[390px] mx-auto flex flex-col items-center text-center relative opacity-100 z-10">
        {/* Top Islamic Floral Crest Ornament */}
        <div className="mb-2 text-[#D8B86A] opacity-100">
          <svg
            width="46"
            height="34"
            viewBox="0 0 46 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto drop-shadow-md"
          >
            {/* Center Rose Motif */}
            <circle cx="23" cy="14" r="8" fill="#B76E79" stroke="#D8B86A" strokeWidth="1" />
            <path
              d="M19 12C20.5 9.5 25.5 9.5 27 12C27.5 14.5 25.5 17 23 17C20.5 17 18.5 14.5 19 12Z"
              fill="#E88FA8"
            />
            <circle cx="23" cy="14" r="2" fill="#F3D785" />

            {/* Golden Flourish Wings */}
            <path
              d="M23 2C23 2 12 7 7 16C5 20.5 7 23 11 23C15 23 18 19 23 15"
              stroke="#D8B86A"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M23 2C23 2 34 7 39 16C41 20.5 39 23 35 23C31 23 28 19 23 15"
              stroke="#D8B86A"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="23" cy="27" r="2.2" fill="#D8B86A" />
            <circle cx="16" cy="28" r="1.8" fill="#B76E79" />
            <circle cx="30" cy="28" r="1.8" fill="#B76E79" />
          </svg>
        </div>

        {/* 1. BISMILLAH inside champagne pill */}
        <div className="w-full mb-3 opacity-100">
          <div className="text-center w-full max-w-[340px] border-b border-[#B76E79]/30 pb-4 relative mx-auto">
            <FloralCorner position="top-left" size={24} className="-top-2 -left-2 opacity-60 mix-blend-multiply" />
            <FloralCorner position="top-right" size={24} className="-top-2 -right-2 opacity-60 mix-blend-multiply" />

            {/* Bismillah Calligraphy: Classic Dark Rose */}
            <div className="h-16 w-full relative opacity-90 mb-3 flex items-center justify-center">
              <span 
                className="font-arabic text-3xl sm:text-4xl text-[#B76E79] font-bold"
                dir="rtl"
                lang="ar"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
            </div>


          </div>
        </div>

        {/* Handcrafted Floral Garland Divider */}
        <FloralGarland width={200} className="my-1.5" />

        {/* 2. PROPHETIC WEDDING DUA */}
        <SectionTitle
          title="WEDDING DUA"
          subtitle="WEDDING DUA"
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

        {/* Handcrafted Floral Garland Divider */}
        <FloralGarland width={200} className="my-2" />

        {/* 3. QURANIC VERSE */}
        <div className="mt-2 relative z-10 w-full max-w-[350px] mx-auto text-center">
          <SectionTitle
            title="SURAH AR-RUM (30:21)"
          />

          <p
            dir="rtl"
            lang="ar"
            className="font-arabic text-lg sm:text-xl text-[#2B2528] leading-loose sm:leading-[2.2] select-text font-bold px-1 my-3 text-shadow-arabic"
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>

          {/* English Translation */}
          <blockquote className="font-serif italic text-xs sm:text-sm text-[#3B3336] leading-relaxed max-w-[310px] mx-auto mt-3 px-2 border-t border-[#B76E79]/30 pt-3 font-medium text-shadow-light">
            &ldquo;And among His signs is that He created for you from yourselves spouses that you may find tranquility in them. And He placed between you affection and mercy. Indeed in this are signs for people who reflect.&rdquo;
          </blockquote>
        </div>
      </div>
    </SectionContainer>
  );
}
