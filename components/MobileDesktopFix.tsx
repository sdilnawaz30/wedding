"use client";

import React, { useEffect, useRef, useState } from "react";

export function MobileDesktopFix({ children }: { children: React.ReactNode }) {
  const [scaleState, setScaleState] = useState<{ scale: number; width: number; vh: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile device (User Agent is reliable for this specific fallback)
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTouch = navigator.maxTouchPoints > 0;
    
    // Treat as mobile if it's a mobile OS OR it's a touch device with a small physical screen.
    const isMobile = isMobileUserAgent || (isTouch && window.screen.width <= 768);

    if (!isMobile) return;

    const checkLayout = () => {
      const currentWidth = window.innerWidth;
      const screenWidth = window.screen.width;

      // Desktop Site mode usually forces innerWidth to 980px or higher on Android
      // and physical screen width remains the real device width (e.g. 390px).
      if (currentWidth > screenWidth && currentWidth >= 700) {
        const scale = currentWidth / screenWidth;
        setScaleState({
          scale: scale,
          width: screenWidth,
          vh: window.innerHeight / scale,
        });
      } else {
        setScaleState(null);
      }
    };

    checkLayout();
    window.addEventListener("resize", checkLayout);
    window.addEventListener("orientationchange", checkLayout);

    return () => {
      window.removeEventListener("resize", checkLayout);
      window.removeEventListener("orientationchange", checkLayout);
    };
  }, []);

  // Update body height to fix scrolling when using transform: scale()
  useEffect(() => {
    if (!scaleState || !containerRef.current) {
      document.body.style.minHeight = '';
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const scaledHeight = entry.contentRect.height * scaleState.scale;
        // We set the body minHeight so the browser allows scrolling to the bottom
        document.body.style.minHeight = `${scaledHeight}px`;
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [scaleState]);

  if (!scaleState) {
    return <>{children}</>;
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: `${scaleState.width}px`,
        transform: `scale(${scaleState.scale})`,
        transformOrigin: "top left",
        // Force it to act as the containing block for all fixed elements
        position: "relative",
        // Provide the scaled vh to children so they can explicitly set height
        "--scaled-vh": `${scaleState.vh}px`,
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
