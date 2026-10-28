"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ContourSvg from "./ContourSvg";
import GlyphTide from "./ui/glyph-tide";
import TextMorph from "./ui/text-morph";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 1200) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full bg-[#0D1F15] overflow-hidden"
      aria-label="Star Gardens Living Landscape Architecture Visual Canvas"
    >
      {/* =========================================================================
          LAYER 1 — CINEMATIC LANDSCAPE ARCHITECTURE PHOTOGRAPH
          Full-width, crystal-clear pavilion, reflection water, and sunlight
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="relative w-full h-full will-change-transform"
          style={{
            transform: `translateY(${Math.round(scrollY * 0.12)}px)`,
          }}
        >
          <Image
            src="/hero/image.png"
            alt="Star Gardens Living Landscape Architecture"
            fill
            priority
            unoptimized
            className="object-cover object-center select-none brightness-[0.95] contrast-[1.03]"
            sizes="100vw"
          />
        </div>

        {/* Soft bottom edge transition into the carousel showcase */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />
      </div>

      {/* Retained Architectural Topographic Contour Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-10">
        <ContourSvg className="w-full h-full text-[#A3E635]" />
      </div>

      {/* =========================================================================
          LAYER 2 — GLYPH TIDE REFINED TRANSLUCENT WAVE ANIMATION
          Delicate, reduced-opacity wave contours with dynamic mouse hover aura
          ========================================================================= */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <GlyphTide
          colors={["#A3E635", "#C4B5FD", "#FAF9F5", "#86EFAC"]}
          backgroundColor="transparent"
          characters=" ·:~=+*#%@"
          fontSize={11}
          scale={0.92}
          level={0.5}
          tideRange={0.7}
          tidePeriod={26}
          waves={1.1}
          foam={1.1}
          contours={1.0}
          depthFade={0.5}
          brightness={1.05}
          opacity={0.65}
          speed={0.95}
          interactive={true}
          cursorRadius={180}
          cursorStrength={1.6}
          wakeLength={2.2}
          clickRipples={true}
          className="w-full h-full"
        />
      </div>

      {/* =========================================================================
          LAYER 3 — ONLY MAIN MIDDLE HEADLINE (BOLD EDITORIAL FONT)
          Centered, commanding, fully bold editorial presence with zero clutter
          ========================================================================= */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4 sm:px-6 md:px-8 text-center pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <TextMorph
            as="h1"
            words={[
              "Where Nature Meets Design.",
              "Crafting Living Architecture.",
              "Naturally Extraordinary Spaces.",
            ]}
            morph="liquid"
            color="#FAF9F5"
            morphColor="#DDD6FE"
            tint={0.3}
            interval={4.2}
            duration={1.0}
            className="font-[family-name:var(--font-playfair)] font-extrabold sm:font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF9F5] drop-shadow-[0_6px_24px_rgba(0,0,0,0.7)] select-none"
          />
        </div>
      </div>

      {/* Retained Minimal Scroll Cue Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
        <a
          href="#carousel-showcase"
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#D4DFD7] text-[#193D2B] flex items-center justify-center hover:bg-white hover:border-[#193D2B] hover:scale-105 active:scale-95 transition-all shadow-md group"
          aria-label="Scroll down to visual carousel showcase"
        >
          <ChevronDown className="w-5 h-5 text-[#193D2B] group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
