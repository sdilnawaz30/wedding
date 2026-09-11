import React from "react";
import { cn } from "@/lib/utils";

interface FloralBackgroundFrameProps {
  className?: string;
  theme?: "light" | "dark";
}

export function FloralBackgroundFrame({ className, theme = "light" }: FloralBackgroundFrameProps) {
  // Delicate rose branches, thin vines, leaves, and tiny gold foil dots.
  // Using #B76E79 with low opacity for the linework and #D8B86A for foil dots.
  const vineColor = theme === "light" ? "#B76E79" : "#E8D39A";
  const opacity = theme === "light" ? "0.15" : "0.08";
  const goldColor = "#D8B86A";

  return (
    <div className={cn("absolute inset-0 pointer-events-none z-0 overflow-hidden", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-100 mix-blend-multiply"
      >
        <g stroke={vineColor} strokeWidth="0.5" fill="none" opacity={opacity}>
          {/* TOP LEFT CORNER - Vine and Leaves */}
          <path d="M -20,100 C 40,80 80,40 100,-20" />
          <path d="M 10,70 C 30,60 40,30 50,10" />
          {/* Leaves */}
          <path d="M 40,80 C 45,75 55,75 55,85 C 50,90 40,90 40,80 Z" fill={vineColor} opacity="0.3" />
          <path d="M 80,40 C 75,45 75,55 85,55 C 90,50 90,40 80,40 Z" fill={vineColor} opacity="0.3" />
          <path d="M 30,60 C 25,55 30,45 40,45 C 45,50 45,60 30,60 Z" fill={vineColor} opacity="0.1" />
          <path d="M 40,30 C 45,25 55,25 55,35 C 50,40 40,40 40,30 Z" fill={vineColor} opacity="0.1" />

          {/* TOP RIGHT CORNER - Vine and Leaves */}
          <path d="M 420,100 C 360,80 320,40 300,-20" />
          <path d="M 390,70 C 370,60 360,30 350,10" />
          {/* Leaves */}
          <path d="M 360,80 C 355,75 345,75 345,85 C 350,90 360,90 360,80 Z" fill={vineColor} opacity="0.3" />
          <path d="M 320,40 C 325,45 325,55 315,55 C 310,50 310,40 320,40 Z" fill={vineColor} opacity="0.3" />
          <path d="M 370,60 C 375,55 370,45 360,45 C 355,50 355,60 370,60 Z" fill={vineColor} opacity="0.1" />
          <path d="M 360,30 C 355,25 345,25 345,35 C 350,40 360,40 360,30 Z" fill={vineColor} opacity="0.1" />

          {/* BOTTOM LEFT CORNER */}
          <path d="M -20,700 C 40,720 80,760 100,820" />
          <path d="M 10,730 C 30,740 40,770 50,790" />
          {/* Leaves */}
          <path d="M 40,720 C 45,725 55,725 55,715 C 50,710 40,710 40,720 Z" fill={vineColor} opacity="0.3" />
          <path d="M 80,760 C 75,755 75,745 85,745 C 90,750 90,760 80,760 Z" fill={vineColor} opacity="0.3" />
          <path d="M 30,740 C 25,745 30,755 40,755 C 45,750 45,740 30,740 Z" fill={vineColor} opacity="0.1" />

          {/* BOTTOM RIGHT CORNER */}
          <path d="M 420,700 C 360,720 320,760 300,820" />
          <path d="M 390,730 C 370,740 360,770 350,790" />
          {/* Leaves */}
          <path d="M 360,720 C 355,725 345,725 345,715 C 350,710 360,710 360,720 Z" fill={vineColor} opacity="0.3" />
          <path d="M 320,760 C 325,755 325,745 315,745 C 310,750 310,760 320,760 Z" fill={vineColor} opacity="0.3" />
          <path d="M 370,740 C 375,745 370,755 360,755 C 355,750 355,740 370,740 Z" fill={vineColor} opacity="0.1" />

          {/* SIDE VINES - Delicate branching along the vertical edges */}
          <path d="M -5,300 C 20,320 20,380 -5,400" />
          <path d="M -5,450 C 30,480 30,550 -5,580" />
          <path d="M 405,250 C 380,280 380,330 405,360" />
          <path d="M 405,500 C 370,530 370,600 405,630" />

          {/* Small Floral Clusters / Buds */}
          <circle cx="15" cy="350" r="1.5" fill={vineColor} opacity="0.4" />
          <circle cx="10" cy="345" r="1" fill={vineColor} opacity="0.4" />
          <circle cx="20" cy="347" r="1" fill={vineColor} opacity="0.4" />

          <circle cx="385" cy="290" r="1.5" fill={vineColor} opacity="0.4" />
          <circle cx="390" cy="285" r="1" fill={vineColor} opacity="0.4" />
          <circle cx="380" cy="293" r="1" fill={vineColor} opacity="0.4" />

          <circle cx="15" cy="510" r="2" fill={vineColor} opacity="0.3" />
          <circle cx="385" cy="560" r="2" fill={vineColor} opacity="0.3" />
        </g>

        {/* Tiny Metallic Gold Foil Dots (Higher Opacity) */}
        <g fill={goldColor} opacity="0.7">
          <circle cx="95" cy="40" r="1.5" />
          <circle cx="50" cy="95" r="1" />
          <circle cx="305" cy="40" r="1.5" />
          <circle cx="350" cy="95" r="1" />
          
          <circle cx="35" cy="310" r="1" />
          <circle cx="365" cy="260" r="1.5" />
          
          <circle cx="35" cy="460" r="1.5" />
          <circle cx="365" cy="510" r="1" />

          <circle cx="95" cy="760" r="1.5" />
          <circle cx="50" cy="705" r="1" />
          <circle cx="305" cy="760" r="1.5" />
          <circle cx="350" cy="705" r="1" />
          
          <circle cx="25" cy="400" r="0.8" />
          <circle cx="375" cy="400" r="0.8" />
        </g>
      </svg>
    </div>
  );
}
