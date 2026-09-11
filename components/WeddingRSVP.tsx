"use client";

import React from "react";
import { Heart, CheckCircle } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";

export function WeddingRSVP() {

  return (
    <SectionContainer
      id="wedding-rsvp"
      className="bg-gradient-to-b from-[#E6C9CE] via-[#4A303A] to-[#140C12] min-h-[90vh] flex flex-col justify-center py-10 relative overflow-hidden"
    >
      {/* Decorative frame */}
      <div className="absolute inset-2 border border-[#D8B86A]/20 rounded-2xl pointer-events-none z-0" />
      <div className="absolute inset-3 border border-[#D8B86A]/10 rounded-xl pointer-events-none z-0" />
      
      {/* Consistent SectionTitle ornamental frame */}
      <SectionTitle
        title="ATTENDANCE"
        subtitle="HONOUR US WITH YOUR PRESENCE"
        theme="dark"
      />

      {/* FLOATING RSVP CONTENT */}
      <div className="w-full max-w-[390px] mx-auto bg-[rgba(20,10,18,0.65)] backdrop-blur-[2px] shadow-lg border border-[#D8B86A]/30 rounded-3xl p-5 sm:p-6 flex flex-col items-center text-center relative mt-1 z-10 min-h-[280px] justify-center">
        
        {/* Top Decorative Ring with Heart */}
        <div className="mb-2 w-14 h-14 rounded-full border border-[#D8B86A]/50 flex items-center justify-center bg-[#140C12] shadow-[0_0_15px_rgba(216,184,106,0.2)]">
          <Heart className="w-5 h-5 fill-[#D8B86A] text-[#D8B86A]" />
        </div>

        {/* Heading */}
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#E8D39A] tracking-wide mt-1">
          Your Presence Would Mean A Lot
        </h3>

        {/* Divider */}
        <div className="flex items-center justify-center gap-2 my-3 w-40">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D8B86A]/60 to-transparent" />
        </div>

            {/* Invitation Message */}
            <p className="font-serif italic text-xs sm:text-sm text-[#FFF4E6] leading-relaxed max-w-[310px] mx-auto mb-6 font-medium opacity-90">
              &ldquo;We would be blessed to have you with us
              <br />
              as we celebrate this beautiful beginning.&rdquo;
            </p>

            {/* ACTION BUTTON */}
            <div className="w-full flex flex-col gap-3 z-10 px-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeicqH7YFxIkE6JIkamlGWn08D-vAf9ReqI4LzdYK4rFTzARw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[rgba(216,184,106,0.8)] to-[rgba(180,140,80,0.8)] text-[#140C12] font-sans font-bold text-[13px] uppercase tracking-[0.24em] transition-all duration-300 shadow-md border border-[#D8B86A]/60 hover:from-[rgba(216,184,106,1)] hover:to-[rgba(180,140,80,1)] hover:shadow-[0_0_15px_rgba(216,184,106,0.5)] flex items-center justify-center gap-3 cursor-pointer active:scale-95"
              >
                <CheckCircle className="w-5 h-5 text-[#140C12] transition-transform group-hover:scale-110" />
                <span>MARK MY ATTENDANCE</span>
              </a>
            </div>

        {/* Islamic Ending Flourish */}
        <div className="w-full pt-4 mt-6 border-t border-[#D8B86A]/20 flex flex-col items-center justify-center">
          <span className="font-serif italic text-xs text-[#D8B86A] font-bold tracking-wider">
            Insha allah
          </span>
        </div>
      </div>
    </SectionContainer>
  );
}
