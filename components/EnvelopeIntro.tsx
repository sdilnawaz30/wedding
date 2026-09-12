"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { weddingData } from "@/lib/weddingData";
import { FloralCorner, FloralGarland } from "./FloralDecorations";

interface EnvelopeIntroProps {
  onOpen?: () => void;
  coupleNames?: string;
  weddingDate?: string;
}

export function EnvelopeIntro({
  onOpen,
  coupleNames = `${weddingData.couple.groom.fullName} & ${weddingData.couple.bride.fullName}`,
  weddingDate = weddingData.date.gregorian,
}: EnvelopeIntroProps) {
  // Deterministic 6-state sequence:
  // "closed" -> "pressed" -> "opening-flap" -> "card-rising" -> "card-expanding" -> "revealed"
  const [phase, setPhase] = useState<
    | "closed"
    | "pressed"
    | "opening-flap"
    | "card-rising"
    | "card-expanding"
    | "revealed"
  >("closed");

  const prefersReducedMotion = useReducedMotion();

  // Strictly lock page scrolling while envelope is active
  useEffect(() => {
    if (phase !== "revealed") {
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [phase]);

  const handleOpen = useCallback(() => {
    if (phase !== "closed") return;

    if (prefersReducedMotion) {
      setPhase("card-expanding");
      setTimeout(() => {
        setPhase("revealed");
        onOpen?.();
      }, 400);
      return;
    }

    // 1. User taps wax seal: tactile press animation
    setPhase("pressed");

    // 2. Flap rotates backward in 3D around top edge
    setTimeout(() => {
      setPhase("opening-flap");
    }, 200);

    // 3. Inner card emerges smoothly from inside the pocket
    setTimeout(() => {
      setPhase("card-rising");
    }, 750);

    // 4. Card reaches final position; envelope slides/fades only AFTER
    setTimeout(() => {
      setPhase("card-expanding");
    }, 2100);

    // 5. Complete transition into the royal digital invitation
    setTimeout(() => {
      setPhase("revealed");
      onOpen?.();
    }, 2900);
  }, [phase, prefersReducedMotion, onOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  };

  if (phase === "revealed") {
    return null;
  }

  const isFlapOpen =
    phase === "opening-flap" ||
    phase === "card-rising" ||
    phase === "card-expanding";

  const isCardRising =
    phase === "card-rising" || phase === "card-expanding";

  const isCardExpanding = phase === "card-expanding";

  return (
    <AnimatePresence>
      <motion.div
        key="royal-pink-envelope-root"
        initial={{ opacity: 1 }}
        animate={{ opacity: isCardExpanding ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75, ease: [0.25, 1, 0.35, 1] }}
        className="fixed top-0 left-0 w-full h-[var(--scaled-vh,100vh)] z-[100] flex flex-col items-center justify-center overflow-hidden select-none touch-none bg-black/25"
        role="dialog"
        aria-modal="true"
        aria-label="Royal Wedding Invitation Envelope"
      >
        {/* Screen Corner Floral Accents */}
        <FloralCorner position="top-left" size={44} className="top-3 left-3 z-10" />
        <FloralCorner position="top-right" size={44} className="top-3 right-3 z-10" />
        <FloralCorner position="bottom-left" size={44} className="bottom-3 left-3 z-10" />
        <FloralCorner position="bottom-right" size={44} className="bottom-3 right-3 z-10" />

        {/* Soft rose & champagne ambient glow behind envelope */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#FDEEF3]/20 blur-3xl" />
        </div>

        {/* TOP ANNOUNCEMENT */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{
            opacity: isCardExpanding ? 0 : 1,
            y: isCardExpanding ? -12 : 0,
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-5 sm:mb-6 px-4 z-10"
        >
          <div className="flex items-center justify-center gap-2 text-[#F3D785] mb-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F3D785]" />
            <span className="font-sans text-[10.5px] tracking-[0.3em] uppercase font-bold text-[#F3D785]">
              Royal Wedding Invitation
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#F3D785]" />
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-[#FFF8F0] font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            With the blessings of Allah (SWT)
          </p>
          <FloralGarland width={190} className="my-1" />
        </motion.div>

        {/* =======================================================
            PHYSICAL 5-LAYER 3D ROSE PINK & GOLD ENVELOPE
            Dimensions: w: min(90vw, 360px), h: min(60vw, 240px)
            ======================================================= */}
        <div
          tabIndex={0}
          role="button"
          aria-label="Tap to open royal wedding invitation envelope"
          onKeyDown={handleKeyDown}
          onClick={handleOpen}
          className="relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C59A3F] rounded-2xl touch-manipulation z-20"
          style={{
            width: "min(90vw, 360px)",
            height: "min(60vw, 240px)",
            perspective: "1200px",
          }}
        >
          {/* Main Envelope Body Shell */}
          <motion.div
            animate={
              isCardExpanding
                ? {
                    y: 40,
                    opacity: 0,
                    scale: 0.98,
                    transition: { duration: 0.75, ease: [0.25, 1, 0.35, 1] },
                  }
                : phase === "closed" && !prefersReducedMotion
                ? {
                    y: [0, -3, 0],
                    transition: {
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
                : { y: 0 }
            }
            className="relative w-full h-full"
          >
            {/* Ambient desk shadow beneath envelope */}
            <motion.div
              animate={{
                boxShadow: isFlapOpen
                  ? "0 28px 55px -10px rgba(212, 91, 125, 0.22), 0 10px 20px -5px rgba(197, 154, 63, 0.2)"
                  : "0 18px 40px -8px rgba(212, 91, 125, 0.16), 0 6px 14px -3px rgba(197, 154, 63, 0.12)",
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
            />

            {/* ----------------------------------------------------
                LAYER 1: ROSE PINK BACK ENVELOPE SHELL (z-index: 1)
                ---------------------------------------------------- */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden border border-[#C59A3F]/50 z-[1]"
              style={{
                background:
                  "linear-gradient(155deg, #E88FA8 0%, #D45B7D 60%, #B84265 100%)",
              }}
            >
              {/* Subtle stationery paper grain */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#F3D785 0.75px, transparent 0.75px)",
                  backgroundSize: "14px 14px",
                }}
              />
              {/* Interior Cavity Shadow */}
              <div className="absolute inset-0 shadow-[inset_0_12px_24px_rgba(184,66,101,0.35),inset_0_-8px_16px_rgba(184,66,101,0.4)] pointer-events-none" />
            </div>

            {/* ----------------------------------------------------
                LAYER 1.5: SUBTLE METALLIC GOLD PAPER GLOW
                ---------------------------------------------------- */}
            {isCardRising && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isCardExpanding ? [0.6, 0] : [0, 0.7, 0.45],
                  scale: [0.8, 1.25, 1.35],
                }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2 w-64 h-48 rounded-full pointer-events-none z-[6]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(243, 215, 133, 0.6) 0%, rgba(197, 154, 63, 0.2) 45%, transparent 70%)",
                  mixBlendMode: "screen",
                }}
              />
            )}

            {/* ----------------------------------------------------
                LAYER 2: INNER ROYAL INVITATION CARD (PURE WHITE & GOLD)
                ---------------------------------------------------- */}
            <motion.div
              initial={{ y: 12, scale: 0.96, opacity: 0 }}
              animate={
                isCardExpanding
                  ? {
                      y: -180,
                      scale: 1.08,
                      opacity: 1.0,
                      transition: {
                        duration: 0.85,
                        ease: [0.25, 1, 0.35, 1],
                      },
                    }
                  : isCardRising
                  ? {
                      y: -152,
                      scale: 1.01,
                      opacity: 1.0,
                      transition: {
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }
                  : isFlapOpen
                  ? {
                      y: 0,
                      scale: 0.96,
                      opacity: 1.0,
                      transition: { duration: 0.35 },
                    }
                  : { y: 12, scale: 0.96, opacity: 0 }
              }
              className="absolute left-[3.5%] right-[3.5%] top-[3.5%] bottom-[3.5%] rounded-xl flex flex-col items-center justify-center p-3.5 text-center border border-[#C59A3F]/60"
              style={{
                background: "#FFFFFF",
                zIndex: isCardExpanding ? 35 : isCardRising ? 25 : 10,
                boxShadow: isCardRising
                  ? "0 20px 45px rgba(212, 91, 125, 0.2), 0 4px 14px rgba(197, 154, 63, 0.18)"
                  : "0 4px 12px rgba(212, 91, 125, 0.08)",
              }}
            >
              {/* Fine metallic gold foil hairline border */}
              <div className="absolute inset-1.5 rounded-lg border border-[#C59A3F]/40 pointer-events-none" />

              {/* Bismillah in Arabic calligraphy */}
              <p
                dir="rtl"
                lang="ar"
                className="font-arabic text-xs sm:text-sm text-[#521E30] font-bold tracking-normal select-none -mt-1"
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </p>

              <span className="font-sans text-[7.5px] uppercase tracking-[0.26em] text-[#9C7328] font-bold mt-0.5">
                Nikkah & Valima
              </span>

              {/* Real Couple Names */}
              <h2 className="font-script text-xl sm:text-2xl text-[#D45B7D] leading-tight select-none my-0.5 drop-shadow-xs">
                {coupleNames}
              </h2>

              {/* Gold & Rose divider */}
              <div className="flex items-center gap-1.5 my-0.5 w-24 opacity-80">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C59A3F]" />
                <Heart className="w-2.5 h-2.5 fill-[#D45B7D] text-[#C59A3F]" />
                <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C59A3F]" />
              </div>

              <p className="font-serif italic text-xs text-[#521E30] font-bold">
                {weddingDate}
              </p>
              <p className="font-sans text-[8px] uppercase tracking-wider text-[#9C7328] font-bold mt-0.5">
                Edgah Mosque & Zai Palace • Chennai
              </p>
            </motion.div>

            {/* ----------------------------------------------------
                LAYER 3: ROSE PINK FRONT POCKET (z-index: 15)
                ---------------------------------------------------- */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden z-[15]"
              style={{
                filter: "drop-shadow(0 -3px 8px rgba(184, 66, 101, 0.15))",
              }}
            >
              {/* Left Wing Fold */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)",
                  background:
                    "linear-gradient(135deg, #E88FA8 0%, #D45B7D 100%)",
                  borderRight: "1px solid rgba(197,154,63,0.35)",
                }}
              />
              {/* Right Wing Fold */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)",
                  background:
                    "linear-gradient(225deg, #E88FA8 0%, #D45B7D 100%)",
                  borderLeft: "1px solid rgba(197,154,63,0.35)",
                }}
              />
              {/* Bottom Pocket Fold */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0% 100%, 50% 45%, 100% 100%)",
                  background:
                    "linear-gradient(0deg, #C25072 0%, #D45B7D 100%)",
                  boxShadow: "inset 0 1px 3px rgba(255,255,255,0.25)",
                }}
              />

              {/* Metallic Gold Hairline Piping Along Pocket Seams */}
              <svg
                viewBox="0 0 360 240"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <line
                  x1="0"
                  y1="240"
                  x2="180"
                  y2="108"
                  stroke="rgba(243, 215, 133, 0.85)"
                  strokeWidth="1.2"
                />
                <line
                  x1="360"
                  y1="240"
                  x2="180"
                  y2="108"
                  stroke="rgba(243, 215, 133, 0.85)"
                  strokeWidth="1.2"
                />
              </svg>

              {/* Dynamic Flap Shadow on Front Pocket */}
              <motion.div
                initial={{ opacity: 0.85 }}
                animate={{ opacity: isFlapOpen ? 0 : 0.85 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 45%, rgba(184, 66, 101, 0.22) 0%, transparent 65%)",
                }}
              />
            </div>

            {/* ----------------------------------------------------
                LAYER 4: ROSE PINK TRIANGULAR TOP FLAP (z-index: 30 closed, z-5 open)
                ---------------------------------------------------- */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={
                isFlapOpen
                  ? {
                      rotateX: -180,
                      transition: {
                        duration: 0.85,
                        ease: [0.25, 1, 0.35, 1],
                      },
                    }
                  : { rotateX: 0 }
              }
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                zIndex: isFlapOpen ? 5 : 30,
              }}
              className="absolute top-0 left-0 right-0 h-[56%] pointer-events-none"
            >
              {/* Outer Flap Face (Rose Pink with metallic gold V-trim & floral sprigs) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                  background:
                    "linear-gradient(180deg, #F0A0B8 0%, #E88FA8 40%, #D45B7D 100%)",
                  filter: "drop-shadow(0 4px 8px rgba(184, 66, 101, 0.25))",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* Gold V-Border Lines */}
                <svg
                  viewBox="0 0 360 134"
                  preserveAspectRatio="none"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                >
                  <polyline
                    points="0,0 180,132 360,0"
                    fill="none"
                    stroke="rgba(243, 215, 133, 0.9)"
                    strokeWidth="1.6"
                  />
                  <polyline
                    points="12,0 180,124 348,0"
                    fill="none"
                    stroke="rgba(197, 154, 63, 0.55)"
                    strokeWidth="1"
                  />
                </svg>

                {/* Handcrafted Floral Rose Sprigs on Flap */}
                <div className="absolute top-2 left-6 opacity-90 text-[#FFF9FB]">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <circle cx="6" cy="6" r="3.5" fill="#FDEEF3" stroke="#C59A3F" strokeWidth="0.8" />
                    <circle cx="6" cy="6" r="1.8" fill="#D45B7D" />
                    <path d="M6 9.5C8 12 12 14 18 15" stroke="#C59A3F" strokeWidth="1" strokeLinecap="round" />
                    <path d="M12 11C14 10 15 8 13 7C11 8 11 10 12 11Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.5" />
                  </svg>
                </div>
                <div className="absolute top-2 right-6 opacity-90 text-[#FFF9FB] scale-x-[-1]">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <circle cx="6" cy="6" r="3.5" fill="#FDEEF3" stroke="#C59A3F" strokeWidth="0.8" />
                    <circle cx="6" cy="6" r="1.8" fill="#D45B7D" />
                    <path d="M6 9.5C8 12 12 14 18 15" stroke="#C59A3F" strokeWidth="1" strokeLinecap="round" />
                    <path d="M12 11C14 10 15 8 13 7C11 8 11 10 12 11Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>

              {/* Inner Flap Lining (Crisp Pearl White lining visible when opened -180deg) */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
                  background:
                    "linear-gradient(0deg, #FFF0F4 0%, #FFFFFF 100%)",
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              />

              {/* --------------------------------------------------
                  LAYER 5: WAX SEAL (ROSE PINK RIM + GOLD D & S MONOGRAM)
                  -------------------------------------------------- */}
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={
                  phase === "pressed"
                    ? {
                        scale: 0.92,
                        opacity: 1,
                        transition: { duration: 0.22, ease: "easeOut" },
                      }
                    : isFlapOpen
                    ? {
                        scale: [0.92, 1.02, 0.8],
                        opacity: [1, 0.95, 0],
                        transition: {
                          duration: 0.5,
                          times: [0, 0.35, 1],
                          ease: "easeOut",
                        },
                      }
                    : { scale: 1, opacity: 1 }
                }
                className="absolute left-1/2 bottom-[-18px] -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer"
                style={{
                  zIndex: 40,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                {/* Organic Rose Pink wax rim edge */}
                <div
                  className="w-full h-full rounded-full p-1.5 flex items-center justify-center"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #F0A0B8 0%, #D45B7D 60%, #B84265 100%)",
                    boxShadow:
                      "0 8px 24px -2px rgba(212, 91, 125, 0.45), inset 0 2px 3px rgba(243, 215, 133, 0.6), inset 0 -2px 5px rgba(184, 66, 101, 0.4)",
                  }}
                >
                  {/* Inner pressed metallic gold D & S Monogram ring */}
                  <div className="w-full h-full rounded-full border border-[#F3D785] border-dashed flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF9FB] to-[#FDEEF3] shadow-inner">
                    <span className="font-serif italic font-bold text-sm text-[#D45B7D] tracking-widest drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">
                      D & S
                    </span>
                    <span className="font-sans text-[7px] text-[#9C7328] uppercase tracking-[0.15em] font-medium opacity-90 -mt-0.5">
                      2026
                    </span>
                  </div>
                </div>

                {/* CIRCULAR TAP TO OPEN TEXT */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase === "closed" ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] pointer-events-none"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-90">
                    <path id="topArc" d="M 12 53 A 38 38 0 0 1 88 53" fill="none" />
                    <text className="font-sans text-[7.5px] font-bold uppercase tracking-[0.25em] fill-[#FFF9FB]" style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.8))' }}>
                      <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                        TAP TO OPEN
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
}
