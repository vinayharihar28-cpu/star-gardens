"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import GradientCarousel3D from "./GradientCarousel3D";

export default function HeroSection() {
  return (
    <section 
      className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-between pt-16 sm:pt-20"
      aria-label="Star Gardens Living Landscape Architecture Visual Showcase"
    >
      {/* 1. ORIGINAL PREMIUM 3D GRADIENT CAROUSEL WITH 10 LANDSCAPE ARCHITECTURE PERSPECTIVE CARDS */}
      <div className="flex-1 w-full flex items-center justify-center relative">
        <GradientCarousel3D />
      </div>

      {/* 2. MINIMAL SCROLL CUE (ICON ONLY, ZERO TEXT OVERLAY) */}
      <div className="relative bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex justify-center">
        <a
          href="#campuses-strip"
          className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#D4DFD7] text-[#193D2B] flex items-center justify-center hover:bg-white hover:border-[#193D2B] hover:scale-105 active:scale-95 transition-all shadow-sm group"
          aria-label="Scroll down to delivered campuses and credentials"
        >
          <ChevronDown className="w-5 h-5 text-[#193D2B] group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
