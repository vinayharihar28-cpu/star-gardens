"use client";

import React, { useState, useEffect, useRef } from "react";

interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  // Start as true so server and client initial render match (both render the div).
  const [showIntro, setShowIntro] = useState<boolean>(true);
  // Track whether the intro has fully completed (for unmounting after transition).
  const [unmounted, setUnmounted] = useState<boolean>(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!showIntro) return;

    const dismiss = () => {
      try {
        sessionStorage.setItem("sg_intro_completed", "true");
      } catch (e) {}
      setShowIntro(false);
      // Allow the CSS fade-out transition to finish before unmounting
      setTimeout(() => {
        setUnmounted(true);
        if (onCompleteRef.current) onCompleteRef.current();
      }, 400);
    };

    try {
      // Respect reduced motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        dismiss();
        return;
      }

      // Check if already viewed in this session – dismiss immediately
      if (sessionStorage.getItem("sg_intro_completed") === "true") {
        dismiss();
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
    const timer = setTimeout(dismiss, 3000);

    return () => clearTimeout(timer);
  }, [showIntro]);

  // After the transition completes, remove from the DOM entirely
  if (unmounted) return null;

  return (
    <div
      id="sg-loading-screen"
      className="sg-loading-screen"
      role="status"
      aria-live="polite"
      aria-label="Star Gardens is loading"
      style={{
        opacity: showIntro ? undefined : 0,
        pointerEvents: showIntro ? undefined : "none",
        transition: "opacity 0.35s ease-out",
      }}
    >
      <span className="sg-loading-logo font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#121814] select-none text-center px-6">
        Star Gardens
      </span>
    </div>
  );
}
