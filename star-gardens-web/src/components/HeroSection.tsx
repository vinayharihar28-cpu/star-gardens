"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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
          if (window.scrollY < 1000) {
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
      {/* 1. CINEMATIC FULL-SCREEN LANDSCAPE IMAGE - 100% CRYSTAL CLEAR & UNCOMPRESSED */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="relative w-full h-full"
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
            className="object-cover object-center select-none"
            sizes="100vw"
          />
        </div>
      </div>

      {/* 2. MINIMAL SCROLL CUE (ICON ONLY, ZERO TEXT) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a
          href="#campuses-strip"
          className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#D4DFD7] text-[#193D2B] flex items-center justify-center hover:bg-white hover:border-[#193D2B] hover:scale-105 transition-all shadow-md group"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 text-[#193D2B] animate-bounce" />
        </a>
      </div>
    </section>
  );
}
