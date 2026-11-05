"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { hasViewedIntroInLast6Hours, setIntroCookie } from "@/utils/introCookie";

interface GreetingItem {
  script: string;
  lang: string;
}

const GREETINGS: GreetingItem[] = [
  { script: "ನಮಸ್ಕಾರ", lang: "Kannada" },
  { script: "नमस्ते", lang: "Hindi" },
  { script: "வணக்கம்", lang: "Tamil" },
  { script: "నమస్కారం", lang: "Telugu" },
  { script: "നമസ്കാരം", lang: "Malayalam" },
  { script: "নমস্কার", lang: "Bengali" },
  { script: "नमस्कार", lang: "Marathi" },
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
    // 1. Check if user already viewed intro in the active session
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

    // 3. Rhythmic greeting progression (420ms per greeting)
    const STEP_MS = 420;
    const timers: NodeJS.Timeout[] = [];

    for (let i = 1; i < GREETINGS.length; i++) {
      const t = setTimeout(() => {
        setCurrentIdx(i);
      }, i * STEP_MS);
      timers.push(t);
    }

    // 4. Smooth cross-fade out after the last greeting
    const totalGreetingDuration = (GREETINGS.length - 1) * STEP_MS + 450;
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("sg:intro-complete"));
      }
    }, totalGreetingDuration);

    // 5. Complete unmount and save view state AFTER fade out finishes
    const cleanupTimer = setTimeout(() => {
      setIntroCookie();
      setShowIntro(false);
      setUnmounted(true);
      if (onCompleteRef.current) onCompleteRef.current();
    }, totalGreetingDuration + 650);

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
      className="sg-welcome-screen fixed inset-0 w-screen h-screen z-[99999] flex items-center justify-center select-none"
      style={{
        backgroundColor: "#FAF9F5",
        opacity: isFadingOut ? 0 : 1,
        pointerEvents: isFadingOut ? "none" : "all",
        transition: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)",
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
          stroke="#193D2B"
          strokeWidth="1.2"
          strokeDasharray="5 7"
        />
        <path
          d="M-50,560 C380,420 720,640 1250,480"
          stroke="#193D2B"
          strokeWidth="1.2"
        />
      </svg>

      {/* Main focus: Star Gardens Emblem & Multilingual Greetings */}
      <div className="relative z-10 w-full max-w-xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        {/* Emblem badge */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#D4DFD7] p-2.5 shadow-2xs mb-5 flex items-center justify-center">
          <Image
            src="/images/logo/logo-mark.png"
            alt="Star Gardens Emblem"
            width={64}
            height={64}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Greeting Display Container */}
        <div className="relative w-full min-h-[140px] sm:min-h-[170px] flex items-center justify-center">
          {GREETINGS.map((item, idx) => {
            const isActive = idx === currentIdx;
            const isPast = idx < currentIdx;

            const translateY = isActive ? "0px" : isPast ? "-10px" : "10px";
            const opacity = isActive ? (isFadingOut ? 0 : 1) : 0;

            return (
              <div
                key={item.lang}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  opacity,
                  transform: `translateY(${translateY})`,
                  transition: "opacity 260ms cubic-bezier(0.16, 1, 0.3, 1), transform 280ms cubic-bezier(0.16, 1, 0.3, 1)",
                  pointerEvents: isActive ? "auto" : "none",
                  visibility: Math.abs(idx - currentIdx) <= 1 ? "visible" : "hidden",
                }}
              >
                <h1
                  className="sg-greeting-text text-4xl sm:text-6xl md:text-7xl font-normal text-center tracking-normal px-3 leading-[1.35] text-[#193D2B]"
                >
                  {item.script}
                </h1>
                
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#718579] font-medium mt-2.5">
                  {item.lang}
                </span>
              </div>
            );
          })}
        </div>

        {/* Subtle Progress Dots */}
        <div className="flex items-center gap-1.5 mt-5">
          {GREETINGS.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentIdx ? "w-6 bg-[#193D2B]" : "w-1.5 bg-[#D4DFD7]"
              }`}
            />
          ))}
        </div>

        {/* Studio Subtitle */}
        <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#718579] font-semibold mt-4">
          Star Gardens · Architectural Landscapes
        </span>

      </div>
    </div>
  );
}
