"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  theme?: "light" | "dark";
}

export function SectionTitle({
  title,
  subtitle,
  className,
  theme = "light",
}: SectionTitleProps) {
  return (
    <div className={cn("w-full flex flex-col items-center justify-center my-3 select-none", className)}>
      {/* Subtle compact ornamental framed title */}
      <div className={cn(
        "relative inline-flex flex-col items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl backdrop-blur-md border shadow-lg",
        "bg-[rgba(20,10,18,0.65)] border-[#D8B86A]/30"
      )}>
        {/* Four Decorative Corner Accents */}
        <span className="absolute top-1 left-1.5 text-[8px] text-[#D8B86A]/75 select-none leading-none">✦</span>
        <span className="absolute top-1 right-1.5 text-[8px] text-[#D8B86A]/75 select-none leading-none">✦</span>
        <span className="absolute bottom-1 left-1.5 text-[8px] text-[#D8B86A]/75 select-none leading-none">✦</span>
        <span className="absolute bottom-1 right-1.5 text-[8px] text-[#D8B86A]/75 select-none leading-none">✦</span>

        {/* Optional Category Subtitle */}
        {subtitle && (
          <span className="font-sans text-[8.5px] sm:text-[9.5px] uppercase tracking-[0.26em] font-bold mb-0.5 text-[#D8B86A]">
            {subtitle}
          </span>
        )}

        {/* Main Title Row: ✦ ─────── TITLE ─────── ✦ */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 px-1">
          <span className="text-[#D8B86A] text-[10px] leading-none">✦</span>
          <span className="h-[1px] w-5 sm:w-8 bg-gradient-to-r from-transparent via-[#D8B86A]/50 to-[#D8B86A]/90" />
          
          <h2 className="font-serif font-bold text-base sm:text-lg md:text-xl tracking-[0.16em] uppercase text-[#E8D39A]">
            {title}
          </h2>

          <span className="h-[1px] w-5 sm:w-8 bg-gradient-to-l from-transparent via-[#D8B86A]/50 to-[#D8B86A]/90" />
          <span className="text-[#D8B86A] text-[10px] leading-none">✦</span>
        </div>
      </div>
    </div>
  );
}
