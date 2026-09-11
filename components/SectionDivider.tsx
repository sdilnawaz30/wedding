"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "botanical" | "diamond" | "minimal";
}

export function SectionDivider({
  className,
  variant = "diamond",
}: SectionDividerProps) {
  if (variant === "minimal") {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-2 my-6 w-full max-w-[200px] mx-auto opacity-70",
          className
        )}
      >
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9A34E]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A34E]" />
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9A34E]" />
      </div>
    );
  }

  if (variant === "botanical") {
    return (
      <div
        className={cn(
          "flex items-center justify-center gap-3 my-8 w-full max-w-[240px] mx-auto",
          className
        )}
      >
        <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9A34E]/50" />
        <svg
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#C9A34E] opacity-85 shrink-0"
        >
          {/* Botanical leaf flourishes */}
          <path
            d="M16 10C16 10 12 5 6 6C10 9 12 14 16 10Z"
            fill="currentColor"
            opacity="0.8"
          />
          <path
            d="M16 10C16 10 20 5 26 6C22 9 20 14 16 10Z"
            fill="currentColor"
            opacity="0.8"
          />
          <circle cx="16" cy="10" r="1.8" fill="#F4D98B" />
        </svg>
        <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9A34E]/50" />
      </div>
    );
  }

  // Default: Luxury Diamond flourish
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 my-7 w-full max-w-[240px] mx-auto",
        className
      )}
    >
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F4D98B] to-[#C9A34E]" />
      <div className="flex items-center gap-1.5 text-[#C9A34E] opacity-80 shrink-0">
        <span className="w-1 h-1 rotate-45 bg-[#C9A34E]" />
        <span className="w-2 h-2 rotate-45 border border-[#C9A34E] bg-[#FFF8F0]" />
        <span className="w-1 h-1 rotate-45 bg-[#C9A34E]" />
      </div>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#F4D98B] to-[#C9A34E]" />
    </div>
  );
}
