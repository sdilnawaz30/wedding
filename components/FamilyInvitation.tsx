"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";
import { FloralCorner, FloralFlourish, FloralGarland } from "./FloralDecorations";
import { FloralBackgroundFrame } from "./FloralBackgroundFrame";

export function FamilyInvitation() {
  return (
    <SectionContainer
      id="family-invitation"
      className="bg-gradient-to-b from-[#E6DDE3] to-[#E6C9CE] min-h-[90vh] flex flex-col justify-center py-10 relative overflow-hidden"
    >
      <FloralBackgroundFrame />
      {/* Subtle outer borders */}
      <div className="absolute inset-2 border border-[#B76E79]/20 rounded-2xl pointer-events-none z-0" />
      <div className="absolute inset-3 border border-[#B76E79]/10 rounded-xl pointer-events-none z-0" />

      {/* FLOATING INVITATION CONTENT */}
      <div className="relative z-10 w-full max-w-[390px] mx-auto text-center flex flex-col items-center px-3">
        {/* Consistent SectionTitle ornamental frame */}
        <SectionTitle
          title="FAMILY INVITATION"
          subtitle="WITH THE BLESSINGS OF ALLAH (SWT)"
        />

        {/* 2. PARENTS' INVITATION */}
        <div className="w-full bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] rounded-2xl p-4 sm:p-5 mb-2.5 text-center border border-[#B76E79]/20 opacity-100">
          {/* 1. WELCOME MESSAGE */}
          <div className="flex flex-col items-center mb-5">
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B76E79] font-bold mb-2">
              Bismillah
            </span>
            <p className="font-serif italic text-base sm:text-lg text-[#3B3336] leading-relaxed max-w-[310px] mx-auto text-shadow-light font-medium">
              &ldquo;With the blessings of Allah and our beloved parents, we joyfully invite you to the wedding of our children.&rdquo;
            </p>
          </div>

          {/* 2. FAMILY NAMES (GROOM'S SIDE) */}
          <div className="relative w-full border-b border-[#B76E79]/30 pb-6 mb-5 mt-2">
            {/* Minimal Corner Accents */}
            <FloralCorner position="top-left" size={26} className="-top-2 -left-2 opacity-70" />
            <FloralCorner position="top-right" size={26} className="-top-2 -right-2 opacity-70" />
            <FloralCorner position="bottom-left" size={26} className="-bottom-2 -left-2 opacity-70" />
            <FloralCorner position="bottom-right" size={26} className="-bottom-2 -right-2 opacity-70" />
            
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#B76E79] font-bold block mb-2.5">
              Son of
            </span>
            <div className="font-serif flex flex-col gap-1 items-center">
              <h3 className="text-xl sm:text-2xl text-[#2B2528] font-bold tracking-wide">
                Mr. Samiyullah
              </h3>
              <p className="font-serif italic text-xs sm:text-[13px] text-[#3B3336] font-medium mt-0.5 tracking-wide">
                (Metropolitan Transport Corporation Ltd)
              </p>
              <div className="flex items-center gap-1.5 my-1">
                <span className="text-[#D8B86A] text-[9px]">✦</span>
                <span className="text-[#3B3336] italic text-sm font-medium">&amp;</span>
                <span className="text-[#D8B86A] text-[9px]">✦</span>
              </div>
              <h3 className="text-xl sm:text-2xl text-[#2B2528] font-bold tracking-wide">
                Mrs. Hussainara Begum
              </h3>
            </div>
          </div>
        </div>

        {/* TEXT CONTENT CARD */}
        <div className="w-full bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] border border-[#B76E79]/20 rounded-3xl p-5 sm:p-7 flex flex-col items-center text-center relative mt-1 z-10">
          <FloralCorner position="top-left" size={26} className="opacity-70" />
          <FloralCorner position="top-right" size={26} className="opacity-70" />
          <FloralCorner position="bottom-left" size={26} className="opacity-70" />
          <FloralCorner position="bottom-right" size={26} className="opacity-70" />

          <FloralGarland width={180} className="mb-4 opacity-80" />
          
          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#2B2528] tracking-wide">
            S. Mohamed Dil Nawaz,{" "}
            <span className="font-sans text-xs font-bold text-[#B76E79]">
              B.E.
            </span>
          </h2>
          <p className="font-serif italic text-xs text-[#3B3336] font-semibold mt-0.5 tracking-wider">
            Network Engineer
          </p>

          {/* Thin Horizontal Divider */}
          <div className="h-[1px] w-full bg-[#B76E79]/20 my-2.5" />

          {/* Grandparents */}
          <div className="grid grid-cols-2 gap-2 text-[10px] text-center relative">
            <div className="pr-2">
              <span className="block font-sans uppercase tracking-wider text-[8.5px] text-[#B76E79] font-bold mb-0.5">
                Paternal Grand Son of
              </span>
              <p className="font-serif font-semibold text-xs text-[#2B2528]">
                Rakiman (Late)
              </p>
            </div>

            {/* Thin Vertical Divider */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#B76E79]/40 to-transparent pointer-events-none" />

            <div className="pl-2">
              <span className="block font-sans uppercase tracking-wider text-[8.5px] text-[#B76E79] font-bold mb-0.5">
                Maternal Grand Son of
              </span>
              <p className="font-serif font-semibold text-xs text-[#2B2528]">
                Mohammed Ayub (Late)
              </p>
            </div>
          </div>
        </div>

        {/* 4. ORNAMENTAL "WITH" BRIDGE */}
        <div className="flex items-center justify-center gap-3 my-1 text-[#B76E79] w-48 opacity-100">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#B76E79]" />
          <span className="font-serif italic text-base text-[#B76E79] font-bold px-2">
            with
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#B76E79]" />
        </div>

        {/* 5. BRIDE SECTION */}
        <div className="w-full bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] rounded-3xl p-5 sm:p-7 mb-3 text-center border border-[#B76E79]/20 opacity-100 relative">
          <FloralCorner position="top-left" size={26} className="opacity-70" />
          <FloralCorner position="top-right" size={26} className="opacity-70" />
          <FloralCorner position="bottom-left" size={26} className="opacity-70" />
          <FloralCorner position="bottom-right" size={26} className="opacity-70" />

          <FloralGarland width={180} className="mb-4 opacity-80" />

          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#2B2528] tracking-wide">
            A. Sharmila Begum,{" "}
            <span className="font-sans text-xs font-bold text-[#B76E79]">
              M.Sc.
            </span>
          </h2>
          {/* Profession */}
          <p className="font-serif italic text-xs text-[#3B3336] font-semibold mt-0.5 tracking-wider">
            Professor
          </p>

          <p className="font-serif text-xs text-[#3B3336] mt-1.5 font-medium">
            Daughter of{" "}
            <span className="font-bold text-[#2B2528]">
              Mr. & Mrs. Abdul Aleem
            </span>
          </p>

          {/* Thin Horizontal Divider */}
          <div className="h-[1px] w-full bg-[#B76E79]/20 my-2.5" />

          {/* Grandparents */}
          <div className="grid grid-cols-2 gap-2 text-[10px] text-center relative">
            <div className="pr-2">
              <span className="block font-sans uppercase tracking-wider text-[8.5px] text-[#B76E79] font-bold mb-0.5">
                Paternal Grand Daughter of
              </span>
              <p className="font-serif font-semibold text-xs text-[#2B2528]">
                Abdul Azeez
              </p>
            </div>

            {/* Thin Vertical Divider */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#B76E79]/40 to-transparent pointer-events-none" />

            <div className="pl-2">
              <span className="block font-sans uppercase tracking-wider text-[8.5px] text-[#B76E79] font-bold mb-0.5">
                Maternal Grand Daughter of
              </span>
              <p className="font-serif font-semibold text-xs text-[#2B2528]">
                Mohiddin (Late)
              </p>
            </div>
          </div>
        </div>

        {/* 6. FLORAL FLOURISH DIVIDER */}
        <FloralFlourish className="my-1.5" />

        {/* 7. TOUCHING VOW QUOTE inside pill card */}
        <div className="w-full mt-1 p-3.5 rounded-2xl bg-[#FFF9FB]/60 backdrop-blur-[2px] shadow-[0_4px_15px_rgba(183,110,121,0.08)] text-center border border-[#B76E79]/20 opacity-100">
          <blockquote className="font-serif italic text-xs sm:text-sm text-[#3B3336] leading-relaxed max-w-[310px] mx-auto px-2 font-medium">
            &ldquo;From this day forward, you shall not walk alone.
            <br />
            My heart will be your shelter,
            <br />
            and my arms will be your home.&rdquo;
          </blockquote>

          <p className="font-serif font-bold text-xs text-[#B76E79] mt-2 tracking-wider">
            InshaAllah
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
