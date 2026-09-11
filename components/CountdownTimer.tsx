"use client";

import React, { useState, useEffect } from "react";
import { SectionTitle } from "./SectionTitle";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ className }: { className?: string }) {
  // Target wedding ceremony date: Sunday, 18 October 2026 at 11:00 AM IST
  const targetTimestamp = new Date("2026-10-18T11:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = Math.max(0, targetTimestamp - now);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetTimestamp]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className={`w-full flex flex-col items-center select-none ${className || ""}`}>
      {/* Title using identical reusable SectionTitle ornamental layout */}
      <SectionTitle
        title="COUNTDOWN"
        subtitle="UNTIL THE SACRED UNION"
      />

      {/* 4 Compact Luxury Smoked Black Glass Tiles */}
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5 w-full max-w-[340px] px-1 mt-1">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center py-2.5 px-1.5 rounded-xl bg-[rgba(20,10,18,0.58)] backdrop-blur-md border border-[rgba(216,184,106,0.65)] shadow-[0_4px_16px_rgba(0,0,0,0.30)]"
          >
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#FFF4E6] text-shadow-light leading-none">
              {mounted ? String(unit.value).padStart(2, "0") : "--"}
            </span>
            <span className="font-sans text-[8.5px] sm:text-[9px] uppercase tracking-[0.20em] text-[#D8B86A] font-bold mt-1 leading-none">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
