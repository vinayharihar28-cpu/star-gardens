"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

const AUTO_HOLD_DURATION = 5000; // 5.0s deliberate hold per discipline

// Concise editorial label mapping for narrow collapsed slices
const SHORT_TITLES: Record<string, string> = {
  corporate: "Workspace Biophilia",
  residential: "Private Estates & Villas",
  hospitality: "Hospitality & Farmland",
  "vertical-gardens": "Vertical Bio-Walls",
  "plant-rental": "Plant Rental & OpEx",
  "plant-amc": "Annual Plant AMC",
  "events-and-workshops": "Corporate Workshops",
  csr: "CSR Greening Drives",
};

export default function ElasticReelServices() {
  const [activeId, setActiveId] = useState<string>("corporate");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const reelTrackRef = useRef<HTMLDivElement>(null);
  const sliceRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Observe visibility so auto-cycling only occurs when in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 2. Auto-cycle hold when unpaused
  useEffect(() => {
    if (!isVisible || isHovered) return;

    const timer = setTimeout(() => {
      setActiveId((prevId) => {
        const currIndex = servicesData.findIndex((s) => s.id === prevId);
        const nextIndex = (currIndex + 1) % servicesData.length;
        const nextService = servicesData[nextIndex];

        // Smoothly scroll active slice into view on mobile
        const nextEl = sliceRefs.current[nextService.id];
        if (nextEl && reelTrackRef.current) {
          nextEl.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }

        return nextService.id;
      });
    }, AUTO_HOLD_DURATION);

    return () => clearTimeout(timer);
  }, [activeId, isVisible, isHovered]);

  // Clean up hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // 3. Hover intent dwell (120ms) for smooth desktop sweep without jitter
  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (activeId === id) return;

    hoverTimeoutRef.current = setTimeout(() => {
      setActiveId(id);
    }, 120);
  };

  const handleSelect = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveId(id);

    // Scroll selected slice into center on mobile touch devices
    const el = sliceRefs.current[id];
    if (el && reelTrackRef.current) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleNext = () => {
    const currIndex = servicesData.findIndex((s) => s.id === activeId);
    const nextIndex = (currIndex + 1) % servicesData.length;
    handleSelect(servicesData[nextIndex].id);
  };

  const handlePrev = () => {
    const currIndex = servicesData.findIndex((s) => s.id === activeId);
    const prevIndex = (currIndex - 1 + servicesData.length) % servicesData.length;
    handleSelect(servicesData[prevIndex].id);
  };

  return (
    <div
      ref={containerRef}
      className="w-full space-y-4 scroll-reveal select-none"
      role="region"
      aria-label="Star Gardens Architectural Disciplines Elastic Reel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      }}
    >
      {/* The Elastic Reel Horizontal Gallery Track */}
      <div
        ref={reelTrackRef}
        className="flex flex-row h-[500px] sm:h-[540px] lg:h-[580px] w-full gap-2 sm:gap-2.5 overflow-x-auto lg:overflow-hidden scrollbar-none rounded-sm p-1.5 sm:p-2 bg-[#FAF8F5] border border-[#E5EBE6] shadow-sm snap-x snap-mandatory"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {servicesData.map((svc, idx) => {
          const isExpanded = activeId === svc.id;
          const indexNum = `0${idx + 1}`;
          const shortTitle = SHORT_TITLES[svc.id] || svc.title;

          return (
            <div
              key={svc.id}
              ref={(el) => {
                sliceRefs.current[svc.id] = el;
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-label={`${indexNum}. ${svc.title}`}
              onMouseEnter={() => handleMouseEnter(svc.id)}
              onClick={() => handleSelect(svc.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(svc.id);
                } else if (e.key === "ArrowRight") {
                  e.preventDefault();
                  handleNext();
                } else if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  handlePrev();
                }
              }}
              style={{
                // Elastic flex sizing: expanded panel takes dominant flex, contracted panels remain narrow slices
                flexGrow: isExpanded ? 5 : 0.85,
                flexShrink: isExpanded ? 0 : 1,
              }}
              className={`group relative overflow-hidden rounded-xs cursor-pointer transition-[flex-grow,flex-shrink,flex-basis,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.2,0.9,0.3,1)] border ${
                isExpanded
                  ? "min-w-[290px] sm:min-w-[420px] lg:min-w-0 border-[#193D2B] shadow-xl z-20 snap-center"
                  : "min-w-[58px] sm:min-w-[72px] lg:min-w-0 border-white/20 hover:border-[#193D2B]/50 hover:shadow-md z-10 snap-start"
              }`}
            >
              {/* Background Landscape Photograph with Elastic Scale Transition */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={svc.heroImage}
                  alt={svc.title}
                  fill
                  priority={idx < 3}
                  className={`object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.2,0.9,0.3,1)] ${
                    isExpanded ? "scale-100 filter-none" : "scale-105 saturate-[0.85] group-hover:scale-100 group-hover:saturate-100"
                  }`}
                  sizes="(max-width: 1024px) 85vw, 45vw"
                />

                {/* State-Dependent Gradient Veil */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                    isExpanded
                      ? "bg-gradient-to-t from-[#0A160F]/95 via-[#0A160F]/45 to-black/20 opacity-100"
                      : "bg-black/55 group-hover:bg-black/40 opacity-100"
                  }`}
                />
              </div>

              {/* Progress Hold Hairline on Active Slice */}
              {isExpanded && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/15 overflow-hidden z-30 pointer-events-none">
                  <div
                    key={`${svc.id}-${isHovered ? "paused" : "running"}`}
                    className={`h-full bg-[#D9E7B0] w-full ${
                      !isHovered && isVisible ? "animate-service-hold" : ""
                    }`}
                    style={{
                      transform: isHovered ? "scaleX(1)" : undefined,
                    }}
                  />
                </div>
              )}

              {/* ============================================================ */}
              {/* 1. CONTRACTED STATE: Elegant Vertical Label & Micro-Number  */}
              {/* ============================================================ */}
              <div
                className={`absolute inset-0 z-10 p-3 sm:p-4 flex flex-col justify-between items-center transition-all duration-500 ease-out ${
                  isExpanded ? "opacity-0 pointer-events-none -translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                {/* Index Number */}
                <span className="font-mono text-xs sm:text-sm font-bold text-[#D9E7B0] tracking-widest drop-shadow-sm">
                  {indexNum}
                </span>

                {/* Rotated Vertical Title */}
                <div className="flex-1 flex items-center justify-center py-6">
                  <span
                    className="font-mono uppercase tracking-[0.2em] text-[11px] sm:text-xs text-white/90 group-hover:text-white whitespace-nowrap drop-shadow-sm transition-colors duration-300"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {shortTitle}
                  </span>
                </div>

                {/* Subtle Indicator */}
                <div className="w-5 h-5 rounded-full border border-white/30 text-white/70 flex items-center justify-center text-[10px] group-hover:border-[#D9E7B0] group-hover:text-[#D9E7B0] transition-colors">
                  +
                </div>
              </div>

              {/* ============================================================ */}
              {/* 2. EXPANDED STATE: Full Editorial Architectural Panel        */}
              {/* ============================================================ */}
              <div
                className={`absolute inset-0 z-20 p-5 sm:p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.2,0.9,0.3,1)] ${
                  isExpanded ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4 pointer-events-none delay-0"
                }`}
              >
                {/* Top Badge & Counter Row */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-white/95 border border-[#D4DFD7] text-[#193D2B] text-[10px] sm:text-xs font-mono uppercase tracking-wider rounded-xs backdrop-blur-xs font-bold shadow-2xs">
                    {svc.sectorTag}
                  </span>

                  <span className="font-mono text-xs text-[#D9E7B0] font-bold tracking-widest bg-black/40 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                    DISCIPLINE {indexNum} / 08
                  </span>
                </div>

                {/* Bottom Information Stack */}
                <div className="space-y-3 sm:space-y-4 max-w-xl">
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-[1.1] drop-shadow-md">
                      {svc.title}
                    </h3>
                    <p className="font-sketch text-base sm:text-xl text-[#D9E7B0] mt-1 drop-shadow-sm line-clamp-1">
                      "{svc.tagline}"
                    </p>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {svc.shortDesc}
                  </p>

                  {/* Deliverables Badges */}
                  <div className="hidden sm:flex flex-wrap gap-1.5 pt-1">
                    {svc.deliverables.slice(0, 3).map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#12281C]/80 border border-[#286746] text-[#D9E7B0] text-[11px] font-mono rounded-xs backdrop-blur-xs"
                      >
                        <Check className="w-3 h-3 text-[#D9E7B0] shrink-0" />
                        <span className="truncate max-w-[190px]">{item}</span>
                      </span>
                    ))}
                  </div>

                  {/* Commercial Model Note */}
                  <div className="text-[11px] font-mono text-white/70 line-clamp-1">
                    <strong className="text-white">Engagement:</strong> {svc.workingModel.slice(0, 48)}...
                  </div>

                  {/* Action Link CTA */}
                  <div className="pt-2">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="group/link inline-flex items-center gap-2 px-5 py-2.5 bg-[#D9E7B0] text-[#101210] font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-black/25"
                    >
                      <span>Explore Scope</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Strip & Quick Jump Pill Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs font-mono text-[#5A7E66]">
        {/* Discipline Navigation Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {servicesData.map((s, i) => {
            const isSelected = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSelect(s.id)}
                aria-label={`Jump to discipline 0${i + 1}: ${s.title}`}
                className={`shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-xs text-[11px] font-mono transition-all duration-300 ${
                  isSelected
                    ? "bg-[#193D2B] text-white font-bold shadow-2xs"
                    : "bg-[#F8FAF7] border border-[#E5EBE6] text-[#475E50] hover:text-[#193D2B] hover:border-[#193D2B]"
                }`}
              >
                <span>0{i + 1}</span>
                <span className="hidden md:inline truncate max-w-[110px]">
                  {SHORT_TITLES[s.id] || s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Status Cue & Arrow Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          <span className="text-[11px] text-[#718579] tracking-wider truncate">
            {isHovered ? "Paused · Inspecting discipline" : "Deliberate hold · Auto-advancing"}
          </span>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous discipline slice"
              className="w-7 h-7 rounded-xs border border-[#D4DFD7] text-[#193D2B] hover:bg-[#193D2B] hover:text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next discipline slice"
              className="w-7 h-7 rounded-xs border border-[#D4DFD7] text-[#193D2B] hover:bg-[#193D2B] hover:text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
