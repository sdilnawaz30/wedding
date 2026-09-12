"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Heart, Sparkles, RotateCcw, CheckCircle2, Calendar } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionTitle } from "./SectionTitle";
import { FloralCorner, FloralGarland, FloralFlourish } from "./FloralDecorations";
import { FloralBackgroundFrame } from "./FloralBackgroundFrame";
import { FlowerPetalShower } from "./FlowerPetalShower";
import { CountdownTimer } from "./CountdownTimer";
import { weddingData } from "@/lib/weddingData";

// Fixed interaction constants
const SCRATCH_RADIUS = 35;

export function HeartScratchDate() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScratchingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const moveCounterRef = useRef(0);

  const [scratchPercent, setScratchPercent] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isFadingFoil, setIsFadingFoil] = useState(false);
  const [showLightSweep, setShowLightSweep] = useState(false);
  const [showPetals, setShowPetals] = useState(false);

  // =========================================================
  // LUXURY METALLIC CHAMPAGNE-GOLD FOIL INITIALIZATION
  // =========================================================
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Reset states
    lastPointRef.current = null;
    isScratchingRef.current = false;
    moveCounterRef.current = 0;
    setScratchPercent(0);
    setIsRevealed(false);
    setIsFadingFoil(false);
    setShowLightSweep(false);
    setShowPetals(false);

    const width = 300;
    const height = 275;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 2, 2) : 2;

    canvas.width = width * dpr;
    canvas.height = height * dpr;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = "source-over";

    // 1. Deep Royal Pink Foil Base (#B76E79)
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#9A4D58");
    gradient.addColorStop(0.5, "#B76E79");
    gradient.addColorStop(1, "#8E3157");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Fine metallic shimmer and gold flecks
    for (let i = 0; i < 110; i++) {
      const px = Math.random() * width;
      const py = Math.random() * height;
      const r = Math.random() * 1.5 + 0.5;
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle =
        i % 3 === 0
          ? "rgba(230, 221, 227, 0.4)" // Soft rose highlights
          : i % 2 === 0
          ? "rgba(201, 163, 78, 0.7)" // #C9A34E gold flecks
          : "rgba(183, 110, 121, 0.8)";
      ctx.fill();
    }

    // 3. Subtle Embossed Heart Inner Contour
    ctx.save();
    ctx.translate(width / 2, height / 2 - 4);
    ctx.scale(1.15, 1.15);
    ctx.beginPath();
    ctx.moveTo(0, 35);
    ctx.bezierCurveTo(-50, 5, -55, -25, -28, -42);
    ctx.bezierCurveTo(-14, -50, 0, -32, 0, -20);
    ctx.bezierCurveTo(0, -32, 14, -50, 28, -42);
    ctx.bezierCurveTo(55, -25, 50, 5, 0, 35);
    ctx.closePath();
    ctx.strokeStyle = "rgba(255, 244, 210, 0.4)";
    ctx.lineWidth = 1.0;
    ctx.stroke();
    ctx.restore();

    // 4. Embossed Typography on Foil
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 13px 'Plus Jakarta Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    ctx.shadowBlur = 4;
    ctx.fillText("✦ SCRATCH TO REVEAL ✦", width / 2, height / 2 + 10);
    
    // Minimal Gold Ornament above text
    ctx.strokeStyle = "rgba(201, 163, 78, 0.9)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 20, height / 2 + 10);
    ctx.lineTo(width / 2 + 20, height / 2 + 10);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width / 2, height / 2 + 10, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  // =========================================================
  // REAL CANVAS PIXEL-LEVEL COVERAGE SAMPLING
  // Sample a grid across the canvas to calculate true cleared %
  // =========================================================
  const measureScratchCoverage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return 0;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return 0;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const step = 16 * 4; // Sample every 16th pixel
      let totalSampled = 0;
      let clearedSampled = 0;

      for (let i = 3; i < data.length; i += step) {
        totalSampled++;
        if (data[i] < 128) {
          clearedSampled++;
        }
      }

      return totalSampled > 0 ? Math.round((clearedSampled / totalSampled) * 100) : 0;
    } catch {
      return 0;
    }
  }, []);

  // =========================================================
  // TRIGGER REVEAL SEQUENCE (WHEN ~70-75% SCRATCH REACHED)
  // 1. Gently fade out remaining scratch foil
  // 2. Reveal hidden content
  // 3. Warm champagne-gold light sweep passes across card
  // 4. Trigger realistic flower petal shower
  // =========================================================
  const triggerReveal = useCallback(() => {
    if (isRevealed) return;
    setIsRevealed(true);
    setIsFadingFoil(true);
    setScratchPercent(100);

    // 1. Warm gold light sweep
    setTimeout(() => {
      setShowLightSweep(true);
    }, 250);

    // 2. Realistic flower petal shower starts falling
    setTimeout(() => {
      setShowPetals(true);
    }, 150);

    // 3. Clear canvas completely after gentle fade
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    }, 850);
  }, [isRevealed]);

  // Perform smooth connected scratch
  const performScratch = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas || isRevealed) return;

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const currentX = clientX - rect.left;
      const currentY = clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";

      if (!lastPointRef.current) {
        // Initial tap: small radius (does NOT reveal automatically)
        ctx.beginPath();
        ctx.arc(currentX, currentY, SCRATCH_RADIUS, 0, Math.PI * 2);
        ctx.fill();
        lastPointRef.current = { x: currentX, y: currentY };
      } else {
        // Connected scratch brush
        const prevX = lastPointRef.current.x;
        const prevY = lastPointRef.current.y;

        ctx.lineWidth = SCRATCH_RADIUS * 1.2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        lastPointRef.current = { x: currentX, y: currentY };
      }

      // Check pixel coverage every 6 scratch moves for high performance & accuracy
      moveCounterRef.current += 1;
      if (moveCounterRef.current % 6 === 0) {
        const percent = measureScratchCoverage();
        setScratchPercent(percent);

        // Strict Requirement: User must scratch ~70–80% before reveal triggers!
        if (percent >= 72) {
          triggerReveal();
        }
      }
    },
    [isRevealed, measureScratchCoverage, triggerReveal]
  );

  // Pointer event handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
    isScratchingRef.current = true;
    performScratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratchingRef.current) return;
    performScratch(e.clientX, e.clientY);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isScratchingRef.current = false;
    lastPointRef.current = null;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignored
    }

    // Measure final percentage on touch end
    if (!isRevealed) {
      const finalPercent = measureScratchCoverage();
      setScratchPercent(finalPercent);
      if (finalPercent >= 72) {
        triggerReveal();
      }
    }
  };

  return (
    <SectionContainer
      id="scratch-date"
      className="relative min-h-[100dvh] flex flex-col justify-center py-8 overflow-hidden bg-[#E6DDE3]"
    >
      {/* ----------------------------------------------------
          PREMIUM LUXURY BACKGROUND & WATERMARKS
          ---------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6DDE3] via-[#E6C9CE] to-[#E6DDE3] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,253,248,0.6),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(183,110,121,0.15),transparent_60%)]" />
        
        {/* Subtle Watermark Florals (Abstract soft silhouettes) */}
        <div className="absolute -left-32 top-10 opacity-[0.03] rotate-12 scale-150">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="#2B2528"><path d="M50,15 C60,5 80,15 70,40 C90,40 100,60 80,70 C75,90 55,90 50,75 C45,90 25,90 20,70 C0,60 10,40 30,40 C20,15 40,5 50,15 Z"/></svg>
        </div>
        <div className="absolute -right-32 bottom-10 opacity-[0.03] -rotate-12 scale-150">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="#2B2528"><path d="M50,15 C60,5 80,15 70,40 C90,40 100,60 80,70 C75,90 55,90 50,75 C45,90 25,90 20,70 C0,60 10,40 30,40 C20,15 40,5 50,15 Z"/></svg>
        </div>
      </div>

      <FloralBackgroundFrame />
      
      {/* Elegant Thin Gold Framing Border (Connecting the corners) */}
      <div className="absolute inset-4 border border-t-0 border-b-0 border-[#C9A34E]/30 rounded-none pointer-events-none z-0" />
      <div className="absolute inset-4 border-t border-b border-[#C9A34E]/30 rounded-[14px] pointer-events-none z-0 mix-blend-multiply" />
      
      {/* Corner Embellishments on the Border */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C9A34E] pointer-events-none z-0 rounded-tl-[14px] opacity-80" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C9A34E] pointer-events-none z-0 rounded-tr-[14px] opacity-80" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#C9A34E] pointer-events-none z-0 rounded-bl-[14px] opacity-80" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#C9A34E] pointer-events-none z-0 rounded-br-[14px] opacity-80" />

      {/* --- VERY SUBTLE BACKGROUND BOTANICAL DETAILS --- */}
      {/* Top Left Area */}
      <div className="absolute top-[20%] left-[10%] opacity-20 rotate-45 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
          <path d="M 10,40 C 15,30 25,20 40,10" stroke="#C9A34E" strokeWidth="0.5" fill="none"/>
          <path d="M 25,25 C 30,20 35,25 30,30 C 25,35 20,30 25,25 Z" fill="#C9A34E" opacity="0.5"/>
          <circle cx="35" cy="15" r="1.5" fill="#C9A34E"/>
        </svg>
      </div>

      {/* Top Right Area */}
      <div className="absolute top-[25%] right-[12%] opacity-20 -rotate-12 pointer-events-none">
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none">
          <path d="M 10,40 C 20,35 30,25 40,10" stroke="#C9A34E" strokeWidth="0.5" fill="none"/>
          <circle cx="35" cy="15" r="1.5" fill="#C9A34E"/>
          <circle cx="20" cy="25" r="1.5" fill="#C9A34E"/>
        </svg>
      </div>

      {/* Bottom Left Area */}
      <div className="absolute bottom-[25%] left-[12%] opacity-20 rotate-12 pointer-events-none">
        <svg width="45" height="45" viewBox="0 0 50 50" fill="none">
          <path d="M 10,40 C 15,30 25,20 40,10" stroke="#C9A34E" strokeWidth="0.5" fill="none"/>
          <path d="M 25,25 C 30,20 35,25 30,30 C 25,35 20,30 25,25 Z" fill="#C9A34E" opacity="0.5"/>
        </svg>
      </div>

      {/* Bottom Right Area */}
      <div className="absolute bottom-[20%] right-[10%] opacity-20 -rotate-45 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
          <path d="M 10,40 C 20,35 30,25 40,10" stroke="#C9A34E" strokeWidth="0.5" fill="none"/>
          <path d="M 25,25 C 30,20 35,25 30,30 C 25,35 20,30 25,25 Z" fill="#C9A34E" opacity="0.5"/>
          <circle cx="25" cy="15" r="1" fill="#C9A34E"/>
        </svg>
      </div>

      {/* Flower Petal Shower Celebration Layer */}
      {showPetals && <FlowerPetalShower onComplete={() => setShowPetals(false)} />}

      {/* SVG ClipPath Definition for the Heart */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="heartScratchClip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5, 0.94 C 0.2, 0.72, 0.02, 0.5, 0.02, 0.32 C 0.02, 0.14, 0.16, 0.02, 0.33, 0.02 C 0.43, 0.02, 0.48, 0.08, 0.5, 0.16 C 0.52, 0.08, 0.57, 0.02, 0.67, 0.02 C 0.84, 0.02, 0.98, 0.14, 0.98, 0.32 C 0.98, 0.5, 0.8, 0.72, 0.5, 0.94 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Reusable SectionTitle Ornamental Frame */}
      <SectionTitle
        title="SCRATCH TO UNVEIL"
      />

      {/* FULL FLORAL FRAMED COMPOSITION WITH HEART SHAPE */}
      <div className="w-full max-w-[420px] mx-auto flex flex-col items-center text-center relative mt-1 z-10 px-4">
        
        {/* Top Decorative Framing */}
        <div className="w-full flex flex-col items-center mb-6 relative z-20">
          {/* Subtle gold scatter dots and tiny star sparks */}
          <div className="absolute top-0 right-4 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#F5E6C4] to-[#C9A34E] opacity-90 shadow-[0_0_8px_#C9A34E]" />
          <div className="absolute top-3 left-6 w-1 h-1 rounded-full bg-gradient-to-r from-[#F5E6C4] to-[#C9A34E] opacity-90 shadow-[0_0_8px_#C9A34E]" />
          <div className="absolute -bottom-4 right-10 w-2 h-2 rounded-full bg-gradient-to-r from-[#F5E6C4] to-[#C9A34E] opacity-80 shadow-[0_0_10px_#C9A34E]" />
          <div className="absolute top-8 left-1/4 w-1 h-1 rounded-full bg-white opacity-80 shadow-[0_0_6px_#FFF]" />
          
          <FloralFlourish className="mb-3 scale-110" />
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#C9A34E]/50" />
            <p className="font-serif italic text-sm text-[#3B3336] font-medium tracking-wide text-shadow-light">
              Scratch to reveal our special day
            </p>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#C9A34E]/50" />
          </div>
        </div>

        {/* =======================================================
            INTERACTIVE HEART SCRATCH CARD
            ======================================================= */}
        <div className="relative w-[300px] h-[275px] my-4 z-20 flex justify-center items-center">
          
          {/* Dense Botanical Corner Decorations directly framing the heart */}
          <FloralCorner position="top-left" size={60} className="-top-8 -left-12 opacity-95 z-30" />
          <FloralCorner position="top-right" size={60} className="-top-8 -right-12 opacity-95 z-30" />
          <FloralCorner position="bottom-left" size={60} className="-bottom-8 -left-12 opacity-95 z-30" />
          <FloralCorner position="bottom-right" size={60} className="-bottom-8 -right-12 opacity-95 z-30" />

          {/* Outer Ornamental Gold Foil Heart Outline Frame */}
          <div
            className="absolute inset-0 pointer-events-none z-30"
            style={{
              filter: "drop-shadow(0 8px 24px rgba(216, 184, 106, 0.45))",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M 50, 94 C 20, 72, 2, 50, 2, 32 C 2, 14, 16, 2, 33, 2 C 43, 2, 48, 8, 50, 16 C 52, 8, 57, 2, 67, 2 C 84, 2, 98, 14, 98, 32 C 98, 50, 80, 72, 50, 94 Z"
                fill="none"
                stroke="#C9A34E"
                strokeWidth="1.5"
              />
              <path
                d="M 50, 94 C 20, 72, 2, 50, 2, 32 C 2, 14, 16, 2, 33, 2 C 43, 2, 48, 8, 50, 16 C 52, 8, 57, 2, 67, 2 C 84, 2, 98, 14, 98, 32 C 98, 50, 80, 72, 50, 94 Z"
                fill="none"
                stroke="#FFFDF8"
                strokeWidth="0.5"
                opacity="0.5"
                transform="scale(0.98) translate(1,1)"
              />
            </svg>
          </div>

          {/* Main Card Container (Clipped to Heart Silhouette) */}
          <div
            ref={containerRef}
            className="relative w-full h-full select-none touch-none cursor-grab active:cursor-grabbing shadow-[0_12px_40px_rgba(183,110,121,0.15)] bg-[#FFF9FB]/80 overflow-hidden"
            style={{ 
              touchAction: "none",
              clipPath: "url(#heartScratchClip)",
              WebkitClipPath: "url(#heartScratchClip)",
            }}
          >
            {/* ----------------------------------------------------
                UNDERNEATH LAYER: REVEALED MARRIAGE DATE
                ---------------------------------------------------- */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-auto bg-[#FFF9FB]/70 backdrop-blur-[2px]">
              
              {/* Warm Champagne-Gold Light Sweep Overlay */}
              {showLightSweep && (
                <div
                  className="absolute inset-0 pointer-events-none z-10 gold-sweep-anim"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(201, 163, 78, 0.35) 50%, transparent 100%)",
                    width: "80%",
                    height: "140%",
                    top: "-20%",
                  }}
                />
              )}

              {/* Status Tag */}
              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#B76E79] font-bold mb-1 opacity-90 drop-shadow-sm mt-4">
                ✦ DATE REVEALED ✦
              </span>

              {/* Revealed Content Details */}
              <div className="flex flex-col items-center gap-1 relative z-20">
                <p className="font-serif font-bold text-[#2B2528] text-[13px] tracking-wide mb-1 drop-shadow-sm">
                  {weddingData.date.hijri}
                </p>
                <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#B76E79] font-bold text-shadow-light">
                  SCRATCH TO UNVEIL
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#2B2528] tracking-wider leading-none text-shadow-light my-1">
                  18 October 2026
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#3B3336] font-medium text-shadow-light">
                  Sunday
                </p>
              </div>
            </div>

            {/* ----------------------------------------------------
                TOP SCRATCH LAYER: HTML5 CANVAS WITH FOIL
                ---------------------------------------------------- */}
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 z-20 ${
                isFadingFoil || isRevealed
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
              style={{
                touchAction: "none",
                cursor: isRevealed ? "default" : "grab",
              }}
            />
          </div>
        </div>

        {/* Bottom Decorative Framing */}
        <div className="w-full flex flex-col items-center mt-6 relative z-20">
          <div className="absolute top-4 left-10 w-1.5 h-1.5 rounded-full bg-[#C9A34E] opacity-60 shadow-[0_0_8px_#C9A34E]" />
          <div className="absolute -bottom-2 right-8 w-1 h-1 rounded-full bg-[#C9A34E] opacity-70 shadow-[0_0_8px_#C9A34E]" />
          <FloralGarland width={240} className="opacity-80" />
        </div>

        {/* Action Controls & Scratch Progress */}
        <div className="mt-2 flex flex-col items-center gap-2">
          {isRevealed ? (
            <div className="flex items-center gap-2">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20of%20S.%20Mohamed%20Dil%20Nawaz%20%26%20A.%20Sharmila%20Begum&dates=20261018/20261019&details=Join%20us%20in%20celebrating%20our%20wedding%20Insha%20allah.&location=Zai%20Palace%2C%20Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[rgba(216,184,106,0.8)] to-[rgba(180,140,80,0.8)] text-[#140C12] border border-[#D8B86A]/60 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-sans text-[10.5px] uppercase tracking-wider font-bold">
                  Add to Calendar
                </span>
              </a>

              <button
                type="button"
                onClick={initCanvas}
                title="Scratch again"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/60 border border-[#D8B86A]/50 text-[#B76E79] text-[10.5px] font-sans font-bold transition-all cursor-pointer active:scale-95 shadow-sm hover:bg-white/80"
              >
                <RotateCcw className="w-3 h-3 text-[#B76E79]" />
                <span>Scratch Again</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="font-sans text-[11px] text-[#2B2528] font-semibold tracking-wider">
                {scratchPercent > 0
                  ? `Keep revealing... ${scratchPercent}% / 75%`
                  : "(Reveal 75% to continue)"}
              </span>

              {scratchPercent >= 50 && (
                <button
                  type="button"
                  onClick={triggerReveal}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/60 border border-[#D8B86A]/50 text-[#B76E79] text-[10px] font-sans font-semibold cursor-pointer active:scale-95 shadow-sm"
                >
                  <Sparkles className="w-3 h-3 text-[#D8B86A]" />
                  <span>Reveal Now</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* =======================================================
            COUNTDOWN TIMER (REVEALED AFTER SCRATCH)
            ======================================================= */}
        {isRevealed && (
          <div className="w-full mt-4 animate-in fade-in duration-700">
            <CountdownTimer />
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

