"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { hasViewedIntroInLast6Hours, setIntroCookie } from "@/utils/introCookie";

interface GreetingItem {
  script: string;
  lang: string;
  color: string;
}

const GREETINGS: GreetingItem[] = [
  { script: "ನಮಸ್ಕಾರ", lang: "Kannada", color: "#244D36" },
  { script: "नमस्ते", lang: "Hindi", color: "#1D4330" },
  { script: "வணக்கம்", lang: "Tamil", color: "#2B533E" },
  { script: "నమస్కారం", lang: "Telugu", color: "#365A42" },
  { script: "നമസ്കാരം", lang: "Malayalam", color: "#204832" },
  { script: "নমস্কার", lang: "Bengali", color: "#284E39" },
  { script: "नमस्कार", lang: "Marathi", color: "#244D36" },
];

interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [unmounted, setUnmounted] = useState<boolean>(false);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // 1. Check if user already viewed intro in the last 6 hours via cookie
    if (hasViewedIntroInLast6Hours()) {
      setShowIntro(false);
      setUnmounted(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("sg:intro-complete"));
      }
      if (onCompleteRef.current) onCompleteRef.current();
      return;
    }

    // 2. Reduced motion check
    try {
      if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setIntroCookie();
        setShowIntro(false);
        setUnmounted(true);
        window.dispatchEvent(new CustomEvent("sg:intro-complete"));
        if (onCompleteRef.current) onCompleteRef.current();
        return;
      }
    } catch {
      // Fallback
    }

    // 3. Mark intro as viewed with 6-hour expiration cookie
    setIntroCookie();

    // 2. Fast, rhythmic greeting progression with smooth cross-fade
    // 340ms per greeting = rapid, elegant editorial pacing
    const STEP_MS = 340;
    const timers: NodeJS.Timeout[] = [];

    for (let i = 1; i < GREETINGS.length; i++) {
      const t = setTimeout(() => {
        setCurrentIdx(i);
      }, i * STEP_MS);
      timers.push(t);
    }

    // 3. Final smooth cross-fade out after the last greeting (Marathi)
    // Hold last greeting for 420ms, then cross-fade out the whole screen
    const totalGreetingDuration = (GREETINGS.length - 1) * STEP_MS + 420;
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("sg:intro-complete"));
      }
    }, totalGreetingDuration);

    // 4. Complete unmount after cross-fade out transition completes
    const cleanupTimer = setTimeout(() => {
      setShowIntro(false);
      setUnmounted(true);
      if (onCompleteRef.current) onCompleteRef.current();
    }, totalGreetingDuration + 620);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(fadeTimer);
      clearTimeout(cleanupTimer);
    };
  }, []);

  if (unmounted || !showIntro) return null;

  return (
    <div
      id="sg-loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Star Gardens welcome introduction"
      className="sg-welcome-screen"
      style={{
        backgroundColor: "#FAF9F5",
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? "none" : "all",
        transition: "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Subtle fine architectural contour line art */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.035]"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50,280 C320,180 620,440 1250,260"
          stroke="#244D36"
          strokeWidth="1.2"
          strokeDasharray="5 7"
        />
        <path
          d="M-50,560 C380,420 720,640 1250,480"
          stroke="#244D36"
          strokeWidth="1.2"
        />
      </svg>

      {/* Main focus: Star Gardens Brand Emblem & Multilingual Welcome Greetings */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 border border-[#D4DFD7] p-2 shadow-sm mb-6 animate-in fade-in zoom-in-95 duration-500">
          <Image
            src="/images/logo/logo-mark.png"
            alt="Star Gardens"
            width={80}
            height={80}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="relative w-full h-32 sm:h-36 flex items-center justify-center">
        {GREETINGS.map((item, idx) => {
          const isActive = idx === currentIdx;
          const isPast = idx < currentIdx;

          // Smooth vertical scroll translation during cross-fade:
          // Inactive past: translated upward (-16px) & opacity 0
          // Active: translated to center (0px) & opacity 1
          // Inactive future: translated downward (16px) & opacity 0
          const translateY = isActive ? "0px" : isPast ? "-18px" : "18px";
          const opacity = isActive ? (isFadingOut ? 0 : 1) : 0;

          return (
            <h1
              key={item.lang}
              className="sg-greeting-text absolute inset-0 flex items-center justify-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-center select-none"
              style={{
                color: item.color,
                opacity,
                transform: `translateY(${translateY})`,
                transition: "transform 220ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms cubic-bezier(0.22, 1, 0.36, 1), color 240ms ease",
                pointerEvents: isActive ? "auto" : "none",
                visibility: Math.abs(idx - currentIdx) <= 1 ? "visible" : "hidden",
              }}
            >
              {item.script}
            </h1>
          );
        })}
        </div>
      </div>
    </div>
  );
}
