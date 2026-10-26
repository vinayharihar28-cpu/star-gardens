"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ContourSvg from "./ContourSvg";

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
      className="relative h-screen w-full bg-white overflow-hidden"
      aria-label="Star Gardens Landscape Architecture Visual Canvas"
    >
      {/* 1. CINEMATIC FULL-SCREEN LANDSCAPE IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="relative w-full h-full will-change-transform"
          style={{
            transform: `translateY(${scrollY * 0.16}px) scale(${1 + scrollY * 0.00025})`,
          }}
        >
          <Image
            src="/hero/image.png"
            alt="Star Gardens Living Landscape Architecture"
            fill
            priority
            className="object-cover object-center select-none"
            sizes="100vw"
          />
        </div>

        {/* Soft bottom edge transition to blend seamlessly into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/40 to-transparent pointer-events-none" />
      </div>

      {/* 2. RESTRAINED TOPOGRAPHIC CONTOUR OVERLAY */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
        <ContourSvg className="w-full h-full text-[#286746]" />
      </div>
      <div className="absolute inset-0 z-10 arch-grid-mosaic pointer-events-none opacity-20" />

      {/* 3. MINIMAL SCROLL CUE (ICON ONLY, ZERO TEXT) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#campuses-strip"
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#D4DFD7] text-[#193D2B] flex items-center justify-center hover:bg-white hover:border-[#193D2B] hover:scale-105 transition-all shadow-md group"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 text-[#193D2B] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
