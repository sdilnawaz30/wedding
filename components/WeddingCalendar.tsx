"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { SectionContainer } from "./SectionContainer";

export function WeddingCalendar() {
  const prefersReducedMotion = useReducedMotion();

  // October 2026 calendar rows:
  // Oct 1, 2026 = Thursday (Index 4: SUN=0, MON=1, TUE=2, WED=3, THU=4, FRI=5, SAT=6)
  // Sunday dates: 4, 11, 18 (Wedding day!), 25
  const calendarRows = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <SectionContainer
      id="wedding-calendar"
      className="py-12 sm:py-16 px-4 sm:px-6 w-full flex flex-col items-center bg-[#FAF5EE]"
    >
      {/* Luxury Islamic Calendar Stationery Card */}
      <div className="w-full max-w-[400px] wedding-card rounded-[28px] p-6 sm:p-8 flex flex-col items-center text-center relative overflow-hidden border border-[#D4AF37]/40 shadow-[0_18px_45px_-10px_rgba(13,59,46,0.15)]">
        {/* Subtle Ornamental Corner Accents */}
        <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t border-l border-[#D4AF37] pointer-events-none" />
        <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t border-r border-[#D4AF37] pointer-events-none" />
        <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b border-l border-[#D4AF37] pointer-events-none" />
        <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b border-r border-[#D4AF37] pointer-events-none" />

        {/* Top Islamic Floral Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-[#D4AF37] mb-2"
        >
          <svg
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M14 0C14 0 10 5 10 9C10 11.2 11.8 13 14 13C16.2 13 18 11.2 18 9C18 5 14 0 14 0Z"
              fill="#0D3B2E"
            />
            <circle cx="14" cy="16" r="1.5" fill="#D4AF37" />
            <circle cx="9" cy="17" r="1" fill="#0D3B2E" />
            <circle cx="19" cy="17" r="1" fill="#0D3B2E" />
          </svg>
        </motion.div>

        {/* Header: Save The Date / OCTOBER 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-4"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#A68028] font-bold">
            Save The Sacred Date
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0D3B2E] tracking-widest mt-1">
            OCTOBER 2026
          </h2>

          {/* Thin Ornamental Separator */}
          <div className="flex items-center justify-center gap-2 w-32 mx-auto mt-2.5 opacity-75">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37] bg-[#FAF5EE]" />
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
        </motion.div>

        {/* CALENDAR GRID TABLE */}
        <div className="w-full bg-[#FAF5EE]/90 rounded-2xl p-3 sm:p-4 border border-[#D4AF37]/30 shadow-xs my-2">
          {/* Weekday Headings */}
          <div className="grid grid-cols-7 gap-1 text-center pb-2 border-b border-[#D4AF37]/20">
            {weekDays.map((day) => (
              <span
                key={day}
                className={`font-sans text-[10px] sm:text-[11px] font-bold tracking-wider ${
                  day === "SUN" ? "text-[#0D3B2E]" : "text-[#3D5A4F]"
                }`}
              >
                {day}
              </span>
            ))}
          </div>

          {/* Calendar Day Rows */}
          <div className="flex flex-col gap-1.5 pt-2">
            {calendarRows.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + rowIndex * 0.08,
                }}
                className="grid grid-cols-7 gap-1 text-center items-center"
              >
                {row.map((day, colIndex) => {
                  if (day === null) {
                    return (
                      <div key={colIndex} className="h-8 sm:h-9 w-full" />
                    );
                  }

                  const isWeddingDay = day === 18;

                  if (isWeddingDay) {
                    return (
                      <div
                        key={colIndex}
                        className="relative h-8 sm:h-9 w-full flex items-center justify-center"
                      >
                        {/* Heart Highlight Animation */}
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: [0.9, 1.12, 1], opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.9,
                            delay: 0.6,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        >
                          {/* Heart Outline SVG Badge */}
                          <svg
                            viewBox="0 0 36 36"
                            className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-sm"
                          >
                            <path
                              d="M18 31C18 31 6 22.5 6 13C6 8.5 9.5 5 14 5C16.5 5 18 6.5 18 6.5C18 6.5 19.5 5 22 5C26.5 5 30 8.5 30 13C30 22.5 18 31 18 31Z"
                              fill="#0D3B2E"
                              stroke="#D4AF37"
                              strokeWidth="1.5"
                            />
                          </svg>
                        </motion.div>

                        <span className="relative z-10 font-serif font-bold text-xs sm:text-sm text-[#FDFBF7] drop-shadow-sm -mt-0.5">
                          18
                        </span>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={colIndex}
                      className="h-8 sm:h-9 w-full flex items-center justify-center"
                    >
                      <span
                        className={`font-serif text-xs sm:text-sm font-medium ${
                          colIndex === 0
                            ? "text-[#0D3B2E] font-semibold"
                            : "text-[#3D5A4F]"
                        }`}
                      >
                        {day}
                      </span>
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>

        {/* SUBTLE MOSQUE ILLUSTRATION */}
        <div className="w-full my-3 flex justify-center text-[#0D3B2E] opacity-75">
          <svg
            width="130"
            height="28"
            viewBox="0 0 130 28"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Mosque Center Dome */}
            <path
              d="M65 3C61 9 56 13 56 18H74C74 13 69 9 65 3Z"
              opacity="0.9"
            />
            <rect x="63.5" y="1" width="3" height="3" rx="1" fill="#D4AF37" />
            <path d="M44 8C41 12 38 15 38 19H50C50 15 47 12 44 8Z" opacity="0.8" />
            <path d="M86 8C83 12 80 15 80 19H92C92 15 89 12 86 8Z" opacity="0.8" />
            {/* Minarets */}
            <rect x="24" y="6" width="4" height="15" />
            <polygon points="26,2 23,6 29,6" fill="#D4AF37" />
            <rect x="102" y="6" width="4" height="15" />
            <polygon points="104,2 101,6 107,6" fill="#D4AF37" />
            {/* Base line */}
            <rect x="14" y="21" width="102" height="2" fill="#D4AF37" rx="1" />
          </svg>
        </div>

        {/* BELOW CALENDAR DISPLAY: VALIMA AT ZAI PALACE */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col items-center mt-1"
        >
          <div className="flex items-center gap-1.5 text-[#C5A059] mb-0.5">
            <Sparkles className="w-3 h-3" />
            <span className="font-sans text-[9px] uppercase tracking-[0.24em] font-bold text-[#A68028]">
              Celebration Reception
            </span>
            <Sparkles className="w-3 h-3" />
          </div>

          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#0D3B2E] tracking-wider">
            WALIMA
          </h3>

          <p className="font-serif italic text-sm text-[#0D3B2E] font-medium tracking-wide mt-0.5">
            AT ZAI PALACE
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#3D5A4F] font-semibold mt-1">
            Sunday, 18 October 2026 • Lunch from 12:30 PM onwards
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
