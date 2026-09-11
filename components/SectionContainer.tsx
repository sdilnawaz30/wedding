"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { SectionDivider } from "./SectionDivider";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
  hasDivider?: boolean;
  dividerVariant?: "botanical" | "diamond" | "minimal";
}

export function SectionContainer({
  id,
  className,
  children,
  delay = 0,
  hasDivider = false,
  dividerVariant = "diamond",
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-3 py-5 sm:py-6 flex flex-col items-center bg-transparent",
        className
      )}
      {...props}
    >
      {children}
      {hasDivider && <SectionDivider variant={dividerVariant} />}
    </section>
  );
}
