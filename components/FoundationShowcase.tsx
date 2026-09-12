"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Heart, Clock, Smartphone, Sparkles, CheckCircle2 } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionDivider } from "./SectionDivider";

export function FoundationShowcase() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="w-full flex flex-col items-center">
      {/* 1. CEREMONY DETAILS CARD (DIRECT FROM INVITATION CARD) */}
      <SectionContainer className="pt-6 pb-6 text-center">
        {/* Monogram Crest */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-4 mx-auto"
        >
          <div className="w-16 h-16 rounded-full border border-[#D4AF37]/60 p-1 flex items-center justify-center bg-gradient-to-br from-[#FAF5EE] to-[#E8F3EE] shadow-sm">
            <div className="w-full h-full rounded-full border border-dashed border-[#0D3B2E]/40 flex items-center justify-center">
              <span className="font-serif italic font-bold text-lg text-[#0D3B2E] tracking-wider">
                D & S
              </span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-[#FAF5EE] border border-[#D4AF37]/50 text-[#D4AF37]">
            <Sparkles className="w-3 h-3" />
          </div>
        </motion.div>

        {/* Parents' Invitation Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-[340px] mx-auto mb-3"
        >
          <p className="font-serif font-semibold text-xs text-[#0D3B2E] tracking-wide">
            Mr. Samiyullah & Mrs. Hussainara Begum
          </p>
          <p className="font-sans text-[9px] uppercase tracking-wider text-[#3D5A4F] mt-0.5">
            (Metropolitan Transport Corporation Ltd.)
          </p>
          <p className="font-serif italic text-xs text-[#3D5A4F] mt-1.5 leading-relaxed">
            cordially invite you to honour us with your gracious presence at the
          </p>
          <p className="font-script text-3xl sm:text-4xl text-[#0D3B2E] my-1 leading-normal">
            Nikkah Ceremony
          </p>
          <p className="font-serif italic text-xs text-[#3D5A4F]">
            of their beloved son
          </p>
        </motion.div>

        {/* Groom & Bride Details */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full max-w-[350px] mx-auto wedding-card rounded-2xl p-5 text-center my-3"
        >
          {/* Groom */}
          <div className="mb-3">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0D3B2E]">
              S. Mohamed Dil Nawaz, <span className="text-xs font-normal text-[#C5A059]">B.E.</span>
            </h3>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#3D5A4F] font-medium">
              Network Engineer
            </p>
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#D4AF37]/15 text-[9px] text-[#3D5A4F] text-left">
              <div>
                <span className="font-semibold text-[#0D3B2E] block">Paternal Grandson:</span>
                Rakiman (Late)
              </div>
              <div>
                <span className="font-semibold text-[#0D3B2E] block">Maternal Grandson:</span>
                Mohammed Ayub (Late)
              </div>
            </div>
          </div>

          {/* With separator */}
          <div className="flex items-center justify-center gap-2 my-3 text-[#D4AF37]">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="font-serif italic text-sm text-[#0D3B2E] font-medium px-2">
              with
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Bride */}
          <div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0D3B2E]">
              A. Sharmila Begum, <span className="text-xs font-normal text-[#C5A059]">M.Sc.</span>
            </h3>
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#3D5A4F] font-medium">
              Professor
            </p>
            <p className="font-serif italic text-[11px] text-[#3D5A4F] mt-1">
              Daughter of Mr. & Mrs. Abdul Aleem
            </p>
            <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-[#D4AF37]/15 text-[9px] text-[#3D5A4F] text-left">
              <div>
                <span className="font-semibold text-[#0D3B2E] block">Paternal Granddaughter:</span>
                Abdul Azeez
              </div>
              <div>
                <span className="font-semibold text-[#0D3B2E] block">Maternal Granddaughter:</span>
                Mohiddin (Late)
              </div>
            </div>
          </div>
        </motion.div>

        {/* Date, Time & Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="w-full max-w-[350px] mx-auto wedding-card rounded-2xl p-4 flex flex-col gap-3 text-left mt-3"
        >
          {/* Date */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#D4AF37]/35 flex items-center justify-center text-[#0D3B2E] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-wider text-[#A68028] font-bold">
                Date • 7 Jumada Al-Awwal 1448 AH
              </p>
              <p className="font-serif font-bold text-base text-[#0D3B2E]">
                Sunday, 18th October 2026
              </p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#D4AF37]/15" />

          {/* Time & Reception */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#D4AF37]/35 flex items-center justify-center text-[#0D3B2E] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-wider text-[#A68028] font-bold">
                Timings
              </p>
              <p className="font-serif font-bold text-sm text-[#0D3B2E]">
                Nikkah: 11:00 AM
              </p>
              <p className="font-sans text-xs text-[#3D5A4F] mt-0.5">
                Walima Reception to follow (Lunch from 12:30 PM onwards)
              </p>
            </div>
          </div>

          <div className="h-[1px] w-full bg-[#D4AF37]/15" />

          {/* Venue */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EE] border border-[#D4AF37]/35 flex items-center justify-center text-[#0D3B2E] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-wider text-[#A68028] font-bold">
                Nikkah Venue
              </p>
              <p className="font-serif font-bold text-sm text-[#0D3B2E]">
                EDGAH MOSQUE
              </p>
              <p className="font-sans text-xs text-[#3D5A4F] leading-snug mt-0.5">
                Angappa Naicken Street, Mannady, Chennai - 600001
              </p>
            </div>
          </div>
        </motion.div>

        {/* Save The Date Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6"
        >
          <button
            onClick={() => setIsSaved(!isSaved)}
            type="button"
            className={`group relative inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs font-sans uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm ${
              isSaved
                ? "bg-[#0D3B2E] text-[#FDFBF7] shadow-[0_4px_16px_rgba(13,59,46,0.35)]"
                : "bg-gradient-to-r from-[#D4AF37] via-[#E3CA89] to-[#D4AF37] text-[#0D3B2E] hover:shadow-[0_4px_16px_rgba(212,175,55,0.4)]"
            }`}
          >
            <Heart
              className={`w-3.5 h-3.5 transition-transform ${
                isSaved ? "fill-current scale-110" : "group-hover:scale-110"
              }`}
            />
            <span>{isSaved ? "Saved To Calendar" : "Save The Date"}</span>
          </button>
        </motion.div>
      </SectionContainer>

      {/* 2. WEDDING PALETTE SYSTEM */}
      <SectionContainer hasDivider dividerVariant="diamond" className="pt-2 pb-6">
        <div className="w-full max-w-[360px] text-center mb-4">
          <span className="font-sans text-[10px] uppercase tracking-[0.24em] text-[#8A6828] font-bold">
            Royal Wedding Palette
          </span>
          <h2 className="font-serif text-2xl text-[#4A162C] mt-1 font-semibold">
            Color Harmony
          </h2>
        </div>

        <div className="w-full max-w-[360px] grid grid-cols-2 gap-2.5">
          <div className="wedding-card rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#8E3157] border border-[#651D3D] shadow-inner shrink-0" />
            <div className="text-left">
              <p className="font-serif font-semibold text-xs text-[#4A162C]">Royal Pink</p>
              <p className="font-mono text-[10px] text-[#8A6828]">#8E3157</p>
            </div>
          </div>

          <div className="wedding-card rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C9A34E] border border-[#8A6828]/30 shadow-inner shrink-0" />
            <div className="text-left">
              <p className="font-serif font-semibold text-xs text-[#4A162C]">Metallic Gold</p>
              <p className="font-mono text-[10px] text-[#8A6828]">#C9A34E</p>
            </div>
          </div>

          <div className="wedding-card rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FFF8F0] border border-[#C9A34E]/30 shadow-inner shrink-0" />
            <div className="text-left">
              <p className="font-serif font-semibold text-xs text-[#4A162C]">Warm Ivory</p>
              <p className="font-mono text-[10px] text-[#8A6828]">#FFF8F0</p>
            </div>
          </div>

          <div className="wedding-card rounded-xl p-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#4A162C] border border-[#2A101C] shadow-inner shrink-0" />
            <div className="text-left">
              <p className="font-serif font-semibold text-xs text-[#FFF8F0]">Luxury Burgundy</p>
              <p className="font-mono text-[10px] text-[#E8B7C4]">#4A162C</p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
