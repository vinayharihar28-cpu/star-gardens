"use client";

import React, { useState, useEffect } from "react";

interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  // Synchronously check sessionStorage on client to prevent any flash during internal navigation
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      try {
        if (sessionStorage.getItem("sg_intro_completed") === "true") {
          return false;
        }
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return true;
  });

  useEffect(() => {
    if (!showIntro) return;

    try {
      // Respect reduced motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        sessionStorage.setItem("sg_intro_completed", "true");
        setShowIntro(false);
        if (onComplete) onComplete();
        return;
      }

      // Check if already viewed in this session
      if (sessionStorage.getItem("sg_intro_completed") === "true") {
        setShowIntro(false);
        if (onComplete) onComplete();
        return;
      }
    } catch (e) {
      // If storage is blocked, continue with timer
    }

    // Single controlled timeline: 3.0 seconds total
    // 0.0s - 0.2s: 0 opacity
    // 0.2s - 1.6s: fade in 0 -> 1 with cubic-bezier(0.22, 1, 0.36, 1)
    // 1.6s - 2.6s: hold fully visible at opacity 1
    // 2.6s - 3.0s: smooth fade out of logo and white screen
    // 3.0s: unmount and reveal homepage completely
    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem("sg_intro_completed", "true");
      } catch (e) {}
      setShowIntro(false);
      if (onComplete) onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [showIntro, onComplete]);

  if (!showIntro) return null;

  return (
    <div
      id="sg-loading-screen"
      className="sg-loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Star Gardens is loading"
    >
      <span className="sg-loading-logo font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#121814] select-none text-center px-6">
        Star Gardens
      </span>
    </div>
  );
}
