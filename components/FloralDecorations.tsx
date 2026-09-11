"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FloralCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  size?: number;
}

/**
 * Handcrafted Luxury Rose & Gold Leaf Corner Ornament
 */
export function FloralCorner({
  position,
  className,
  size = 120, // Increased default size for detailed artwork
}: FloralCornerProps) {
  const getTransform = () => {
    switch (position) {
      case "top-left":
        return "";
      case "top-right":
        return "scale(-1, 1)";
      case "bottom-left":
        return "scale(1, -1)";
      case "bottom-right":
        return "scale(-1, -1)";
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      case "bottom-right":
        return "bottom-0 right-0";
    }
  };

  return (
    <div
      className={cn("absolute pointer-events-none z-10", getPositionClasses(), className)}
      style={{ transform: getTransform() }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(0px 2px 4px rgba(201, 163, 78, 0.2))" }}
      >
        <defs>
          <linearGradient id="foil" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F5E6C4" />
            <stop offset="30%" stopColor="#C9A34E" />
            <stop offset="70%" stopColor="#9A7B3E" />
            <stop offset="100%" stopColor="#D8B86A" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="10" y2="10">
            <stop offset="0%" stopColor="#C9A34E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9A7B3E" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* --- MAIN GRACEFUL VINES --- */}
        <path d="M -5,-5 C 5,30 30,65 65,85" stroke="url(#foil)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M -5,-5 C 30,5 65,30 85,65" stroke="url(#foil)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        
        {/* Secondary delicate curling stems */}
        <path d="M 20,20 C 35,45 60,60 85,55" stroke="url(#foil)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M 20,20 C 45,35 60,60 55,85" stroke="url(#foil)" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        <path d="M 40,40 C 50,55 70,65 80,75" stroke="url(#foil)" strokeWidth="0.6" strokeLinecap="round" fill="none" />
        
        {/* Curled flourish ends */}
        <path d="M 65,85 C 75,90 85,85 80,75 C 75,65 65,70 65,85" stroke="url(#foil)" strokeWidth="0.8" fill="none" />
        <path d="M 85,65 C 90,75 85,85 75,80 C 65,75 70,65 85,65" stroke="url(#foil)" strokeWidth="0.8" fill="none" />

        {/* --- DELICATE LEAVES --- */}
        {/* Outer large leaves */}
        <path d="M 35,65 C 45,70 50,85 40,90 C 30,85 25,75 35,65 Z" fill="url(#leafGrad)" stroke="url(#foil)" strokeWidth="0.5" />
        <path d="M 65,35 C 70,45 85,50 90,40 C 85,30 75,25 65,35 Z" fill="url(#leafGrad)" stroke="url(#foil)" strokeWidth="0.5" />
        
        {/* Inner small leaves */}
        <path d="M 45,45 C 55,48 55,58 50,60 C 45,55 42,50 45,45 Z" fill="url(#foil)" opacity="0.6" />
        <path d="M 55,30 C 65,33 65,43 60,45 C 55,40 52,35 55,30 Z" fill="url(#foil)" opacity="0.6" />

        {/* --- PRIMARY CORNER ROSE --- */}
        <g transform="translate(18, 18) scale(1.6)">
          {/* Base */}
          <circle cx="0" cy="0" r="10" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1.2" />
          {/* Inner Petal Layers (Realistic overlapping curves, not insect wings) */}
          <path d="M -8,-2 C -8,-8 8,-8 8,-2 C 8,4 -8,4 -8,-2 Z" fill="none" stroke="url(#foil)" strokeWidth="0.8" />
          <path d="M -2,-8 C 4,-8 4,8 -2,8 C -8,8 -8,-8 -2,-8 Z" fill="none" stroke="url(#foil)" strokeWidth="0.8" />
          <path d="M -5,-5 C 5,-10 10,0 5,5 C -5,10 -10,0 -5,-5 Z" fill="none" stroke="url(#foil)" strokeWidth="0.8" />
          <path d="M -2,-2 C 2,-5 5,0 2,2 C -2,5 -5,0 -2,-2 Z" fill="url(#foil)" />
          {/* Soft blush core */}
          <circle cx="0" cy="0" r="2" fill="#E6C9CE" />
        </g>

        {/* --- SECONDARY ROSE 1 --- */}
        <g transform="translate(45, 20) scale(1)">
          <circle cx="0" cy="0" r="8" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" />
          <path d="M -6,-2 C -6,-6 6,-6 6,-2 C 6,2 -6,2 -6,-2 Z" fill="none" stroke="url(#foil)" strokeWidth="0.6" />
          <path d="M -4,-4 C 4,-8 8,0 4,4 C -4,8 -8,0 -4,-4 Z" fill="none" stroke="url(#foil)" strokeWidth="0.6" />
          <path d="M -1.5,-1.5 C 1.5,-4 4,0 1.5,1.5 C -1.5,4 -4,0 -1.5,-1.5 Z" fill="url(#foil)" />
        </g>

        {/* --- SECONDARY ROSE 2 --- */}
        <g transform="translate(20, 45) scale(1)">
          <circle cx="0" cy="0" r="8" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" />
          <path d="M -6,-2 C -6,-6 6,-6 6,-2 C 6,2 -6,2 -6,-2 Z" fill="none" stroke="url(#foil)" strokeWidth="0.6" />
          <path d="M -4,-4 C 4,-8 8,0 4,4 C -4,8 -8,0 -4,-4 Z" fill="none" stroke="url(#foil)" strokeWidth="0.6" />
          <path d="M -1.5,-1.5 C 1.5,-4 4,0 1.5,1.5 C -1.5,4 -4,0 -1.5,-1.5 Z" fill="url(#foil)" />
        </g>

        {/* --- TINY JASMINE BLOSSOMS (5-Petal) --- */}
        <g transform="translate(60, 40) scale(0.6)">
          <path d="M0,0 C5,-10 15,0 0,5 C-15,0 -5,-10 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1"/>
          <path d="M0,0 C10,5 0,15 -5,0 C0,-15 10,-5 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" transform="rotate(72)"/>
          <path d="M0,0 C5,-10 15,0 0,5 C-15,0 -5,-10 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" transform="rotate(144)"/>
          <path d="M0,0 C10,5 0,15 -5,0 C0,-15 10,-5 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" transform="rotate(216)"/>
          <path d="M0,0 C5,-10 15,0 0,5 C-15,0 -5,-10 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" transform="rotate(288)"/>
          <circle cx="0" cy="0" r="2" fill="url(#foil)" />
        </g>

        <g transform="translate(40, 60) scale(0.6)">
          <path d="M0,0 C5,-10 15,0 0,5 C-15,0 -5,-10 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1"/>
          <path d="M0,0 C10,5 0,15 -5,0 C0,-15 10,-5 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" transform="rotate(72)"/>
          <path d="M0,0 C5,-10 15,0 0,5 C-15,0 -5,-10 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" transform="rotate(144)"/>
          <path d="M0,0 C10,5 0,15 -5,0 C0,-15 10,-5 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" transform="rotate(216)"/>
          <path d="M0,0 C5,-10 15,0 0,5 C-15,0 -5,-10 0,0 Z" fill="#FFFDF8" stroke="url(#foil)" strokeWidth="1" transform="rotate(288)"/>
          <circle cx="0" cy="0" r="2" fill="url(#foil)" />
        </g>

        {/* --- TINY GOLD BUDS & SPECKS --- */}
        <circle cx="75" cy="25" r="2.5" fill="url(#foil)" />
        <circle cx="25" cy="75" r="2.5" fill="url(#foil)" />
        <circle cx="85" cy="45" r="1.5" fill="url(#foil)" />
        <circle cx="45" cy="85" r="1.5" fill="url(#foil)" />
        <circle cx="70" cy="60" r="1" fill="url(#foil)" />
        <circle cx="60" cy="70" r="1" fill="url(#foil)" />
      </svg>
    </div>
  );
}

/**
 * Handcrafted Symmetrical Flower Garland / Divider
 */
export function FloralGarland({
  className,
  width = 240,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <div
      className={cn("flex items-center justify-center my-3 text-center", className)}
      aria-hidden="true"
    >
      <svg
        width={width}
        height="28"
        viewBox="0 0 240 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto overflow-visible"
      >
        {/* Left Golden Vine & Hairline Rule */}
        <line
          x1="10"
          y1="14"
          x2="85"
          y2="14"
          stroke="url(#leftGoldGrad)"
          strokeWidth="1"
        />
        <path
          d="M85 14C92 12 96 8 102 12C106 14 108 13 111 14"
          stroke="#C59A3F"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Left Small Leaves & Rosebud */}
        <path
          d="M93 11C91 7 94 4 97 5C98 8 96 11 93 11Z"
          fill="#F3D785"
          stroke="#C59A3F"
          strokeWidth="0.6"
        />
        <circle cx="104" cy="10" r="3" fill="#FDEEF3" stroke="#D45B7D" strokeWidth="0.8" />
        <circle cx="104" cy="10" r="1.6" fill="#E88FA8" />

        {/* Center Blooming Rose Motif */}
        <circle cx="120" cy="14" r="8.5" fill="#FFFFFF" stroke="#C59A3F" strokeWidth="1" />
        <circle cx="120" cy="14" r="7" fill="#FDEEF3" />
        <path
          d="M116 12C118 9 122 9 124 12C125 14.5 123 17 120 17C117 17 115 14.5 116 12Z"
          fill="#E88FA8"
        />
        <path
          d="M117.5 13C118.8 11 121.2 11 122.5 13C123 14.5 121.8 16 120 16C118.2 16 117 14.5 117.5 13Z"
          fill="#D45B7D"
        />
        <circle cx="120" cy="14" r="1.8" fill="#F3D785" />

        {/* Right Golden Vine & Hairline Rule */}
        <line
          x1="155"
          y1="14"
          x2="230"
          y2="14"
          stroke="url(#rightGoldGrad)"
          strokeWidth="1"
        />
        <path
          d="M155 14C148 12 144 8 138 12C134 14 132 13 129 14"
          stroke="#C59A3F"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Right Small Leaves & Rosebud */}
        <path
          d="M147 11C149 7 146 4 143 5C142 8 144 11 147 11Z"
          fill="#F3D785"
          stroke="#C59A3F"
          strokeWidth="0.6"
        />
        <circle cx="136" cy="10" r="3" fill="#FDEEF3" stroke="#D45B7D" strokeWidth="0.8" />
        <circle cx="136" cy="10" r="1.6" fill="#E88FA8" />

        <defs>
          <linearGradient id="leftGoldGrad" x1="10" y1="14" x2="85" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C59A3F" stopOpacity="0" />
            <stop offset="1" stopColor="#C59A3F" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="rightGoldGrad" x1="155" y1="14" x2="230" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C59A3F" stopOpacity="0.85" />
            <stop offset="1" stopColor="#C59A3F" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Handcrafted Circular Floral Wreath Ring (for monograms and crests)
 */
export function FloralWreathRing({
  children,
  className,
  size = 64,
}: {
  children?: React.ReactNode;
  className?: string;
  size?: number;
}) {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {/* Left Wreath Branch */}
        <path
          d="M40 72C24 72 12 58 12 40C12 24 22 13 36 9"
          stroke="#C59A3F"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Right Wreath Branch */}
        <path
          d="M40 72C56 72 68 58 68 40C68 24 58 13 44 9"
          stroke="#C59A3F"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Golden Wreath Leaves */}
        <path d="M16 48C11 48 9 44 11 41C14 41 17 44 16 48Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.6" />
        <path d="M13 36C8 35 7 30 10 28C13 29 15 33 13 36Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.6" />
        <path d="M19 24C15 21 16 16 19 15C22 17 22 21 19 24Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.6" />

        <path d="M64 48C69 48 71 44 69 41C66 41 63 44 64 48Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.6" />
        <path d="M67 36C72 35 73 30 70 28C67 29 65 33 67 36Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.6" />
        <path d="M61 24C65 21 64 16 61 15C58 17 58 21 61 24Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.6" />

        {/* Small Floral Rose Accents */}
        <circle cx="12" cy="40" r="3.2" fill="#FDEEF3" stroke="#D45B7D" strokeWidth="0.8" />
        <circle cx="12" cy="40" r="1.6" fill="#D45B7D" />

        <circle cx="68" cy="40" r="3.2" fill="#FDEEF3" stroke="#D45B7D" strokeWidth="0.8" />
        <circle cx="68" cy="40" r="1.6" fill="#D45B7D" />

        {/* Top Centered Floral Blossom */}
        <circle cx="40" cy="8" r="4.2" fill="#FFFFFF" stroke="#C59A3F" strokeWidth="0.9" />
        <circle cx="40" cy="8" r="3" fill="#FDEEF3" />
        <circle cx="40" cy="8" r="1.5" fill="#D45B7D" />

        {/* Bottom Ribbon Tie */}
        <circle cx="40" cy="72" r="2.5" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.8" />
        <path d="M40 74C37 77 34 79 32 80" stroke="#C59A3F" strokeWidth="1" strokeLinecap="round" />
        <path d="M40 74C43 77 46 79 48 80" stroke="#C59A3F" strokeWidth="1" strokeLinecap="round" />
      </svg>

      <div className="relative z-10 flex items-center justify-center p-2">
        {children}
      </div>
    </div>
  );
}

/**
 * Handcrafted Delicate Rose Flourish for Empty Card Spaces
 */
export function FloralFlourish({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2 my-3 opacity-90", className)} aria-hidden="true">
      <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C59A3F]" />
      <div className="flex items-center gap-1.5">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="5.5" fill="#FDEEF3" stroke="#D45B7D" strokeWidth="0.9" />
          <circle cx="10" cy="10" r="3" fill="#E88FA8" />
          <circle cx="10" cy="10" r="1.2" fill="#F3D785" />
          {/* Leaves */}
          <path d="M4 10C2 8 4 6 6 7C6 9 5 10 4 10Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.5" />
          <path d="M16 10C18 8 16 6 14 7C14 9 15 10 16 10Z" fill="#F3D785" stroke="#C59A3F" strokeWidth="0.5" />
        </svg>
      </div>
      <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C59A3F]" />
    </div>
  );
}
