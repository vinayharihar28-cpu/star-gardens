"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

const AUTO_HOLD_DURATION = 6000; // 6.0s hold per discipline

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
  const mobileExpandedCardRef = useRef<HTMLDivElement>(null);
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
      { threshold: 0.15 }
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
        return servicesData[nextIndex].id;
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

  // 3. Hover intent dwell for desktop sweep
  const handleMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (activeId === id) return;

    hoverTimeoutRef.current = setTimeout(() => {
      setActiveId(id);
    }, 100);
  };

  const handleSelect = (id: string, scrollOnMobile: boolean = false) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveId(id);

    if (scrollOnMobile && mobileExpandedCardRef.current) {
      mobileExpandedCardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const handleNext = () => {
    const currIndex = servicesData.findIndex((s) => s.id === activeId);
    const nextIndex = (currIndex + 1) % servicesData.length;
    handleSelect(servicesData[nextIndex].id, true);
  };

  const handlePrev = () => {
    const currIndex = servicesData.findIndex((s) => s.id === activeId);
    const prevIndex = (currIndex - 1 + servicesData.length) % servicesData.length;
    handleSelect(servicesData[prevIndex].id, true);
  };

  const activeService = servicesData.find((s) => s.id === activeId) || servicesData[0];
  const activeIndex = servicesData.findIndex((s) => s.id === activeService.id);
  const activeIndexNum = `0${activeIndex + 1}`;

  return (
    <div
      ref={containerRef}
      className="w-full space-y-4 select-none"
      role="region"
      aria-label="Star Gardens Architectural Disciplines Elastic Reel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      }}
    >
      {/* ========================================================================= */}
      {/* DESKTOP VIEW: React Bits Elastic Reel Horizontal Slices (lg and above)   */}
      {/* ========================================================================= */}
      <div className="hidden lg:block">
        <div
          ref={reelTrackRef}
          className="flex flex-row h-[580px] xl:h-[620px] w-full gap-2.5 overflow-hidden rounded-sm p-2 bg-[#FAF8F5] border border-[#E5EBE6] shadow-sm"
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
                  flexGrow: isExpanded ? 5.5 : 0.85,
                  flexShrink: isExpanded ? 0 : 1,
                }}
                className={`group relative overflow-hidden rounded-xs cursor-pointer transition-[flex-grow,flex-shrink,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.2,0.9,0.3,1)] border ${
                  isExpanded
                    ? "border-[#193D2B] shadow-xl z-20 min-w-0"
                    : "border-white/20 hover:border-[#193D2B]/50 hover:shadow-md z-10 min-w-0"
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
                      isExpanded
                        ? "scale-100 filter-none"
                        : "scale-105 saturate-[0.85] group-hover:scale-100 group-hover:saturate-100"
                    }`}
                    sizes="50vw"
                  />

                  {/* Gradient Veil */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                      isExpanded
                        ? "bg-gradient-to-t from-[#0A160F]/95 via-[#0A160F]/55 to-black/25 opacity-100"
                        : "bg-black/55 group-hover:bg-black/40 opacity-100"
                    }`}
                  />
                </div>

                {/* Progress Hold Hairline */}
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

                {/* Contracted State: Vertical Label & Micro-Number */}
                <div
                  className={`absolute inset-0 z-10 p-4 flex flex-col justify-between items-center transition-all duration-500 ease-out ${
                    isExpanded ? "opacity-0 pointer-events-none -translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  <span className="font-mono text-sm font-bold text-[#D9E7B0] tracking-widest drop-shadow-sm">
                    {indexNum}
                  </span>

                  <div className="flex-1 flex items-center justify-center py-6">
                    <span
                      className="font-mono uppercase tracking-[0.2em] text-xs text-white/90 group-hover:text-white whitespace-nowrap drop-shadow-sm transition-colors duration-300"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {shortTitle}
                    </span>
                  </div>

                  <div className="w-6 h-6 rounded-full border border-white/30 text-white/70 flex items-center justify-center text-xs group-hover:border-[#D9E7B0] group-hover:text-[#D9E7B0] transition-colors">
                    +
                  </div>
                </div>

                {/* Expanded State: Full Editorial Architectural Panel */}
                <div
                  className={`absolute inset-0 z-20 p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.2,0.9,0.3,1)] ${
                    isExpanded ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-4 pointer-events-none delay-0"
                  }`}
                >
                  {/* Top Badge & Counter Row */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/95 border border-[#D4DFD7] text-[#193D2B] text-xs font-mono uppercase tracking-wider rounded-xs backdrop-blur-xs font-bold shadow-2xs">
                      {svc.sectorTag}
                    </span>

                    <span className="font-mono text-xs text-[#D9E7B0] font-bold tracking-widest bg-black/40 px-2.5 py-0.5 rounded-xs backdrop-blur-xs">
                      DISCIPLINE {indexNum} / 08
                    </span>
                  </div>

                  {/* Bottom Information Stack */}
                  <div className="space-y-4 max-w-xl">
                    <div>
                      <h3 className="font-serif text-3xl lg:text-4xl text-white font-normal leading-[1.1] drop-shadow-md">
                        {svc.title}
                      </h3>
                      <p className="font-sketch text-xl text-[#D9E7B0] mt-1 drop-shadow-sm">
                        "{svc.tagline}"
                      </p>
                    </div>

                    <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                      {svc.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {svc.deliverables.slice(0, 3).map((item, dIdx) => (
                        <span
                          key={dIdx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#12281C]/85 border border-[#286746] text-[#D9E7B0] text-xs font-mono rounded-xs backdrop-blur-xs"
                        >
                          <Check className="w-3.5 h-3.5 text-[#D9E7B0] shrink-0" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>

                    <div className="text-xs font-mono text-white/70">
                      <strong className="text-white">Engagement:</strong> {svc.workingModel.slice(0, 60)}...
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/services/${svc.slug}`}
                        className="group/link inline-flex items-center gap-2 px-6 py-2.5 bg-[#D9E7B0] text-[#101210] font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-white transition-all transform active:scale-95 shadow-lg shadow-black/25"
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
      </div>

      {/* ========================================================================= */}
      {/* MOBILE / TABLET VIEW: Interactive Expandable Cards (Zero Squeezing)     */}
      {/* ========================================================================= */}
      <div className="block lg:hidden space-y-4">
        {/* Active Expanded Card Screen with Full Details */}
        <div
          ref={mobileExpandedCardRef}
          key={activeService.id}
          className="bg-white border border-[#193D2B] rounded-sm overflow-hidden shadow-xl animate-fade-in-smooth"
        >
          {/* Rectangular Image Screen on Top */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden bg-black/10">
            <Image
              src={activeService.heroImage}
              alt={activeService.title}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badges on Image */}
            <div className="absolute top-3 left-3 bg-white/95 border border-[#D4DFD7] text-[#193D2B] text-[10px] font-mono uppercase px-2.5 py-1 rounded-xs backdrop-blur-xs font-bold shadow-2xs">
              {activeService.sectorTag}
            </div>

            <div className="absolute top-3 right-3 bg-black/60 text-[#D9E7B0] text-[10px] font-mono px-2 py-0.5 rounded-xs backdrop-blur-xs font-bold">
              DISCIPLINE {activeIndexNum} / 08
            </div>

            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="font-sketch text-sm sm:text-base text-[#D9E7B0] drop-shadow-sm block">
                "{activeService.tagline}"
              </span>
            </div>
          </div>

          {/* Clean Content Stack Placed Directly Below Image */}
          <div className="p-5 sm:p-7 space-y-3.5 bg-white text-[#121814]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#193D2B] font-bold tracking-wider">
                [ DISCIPLINE {activeIndexNum} ]
              </span>
              <span className="text-xs font-mono text-[#5A7E66]">
                {SHORT_TITLES[activeService.id] || activeService.title}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#121814] leading-snug">
              {activeService.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed">
              {activeService.shortDesc}
            </p>

            {/* Key Deliverables Chips */}
            <div className="pt-2 border-t border-[#E5EBE6] space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#193D2B] font-bold block">
                Scope & Key Deliverables:
              </span>
              <div className="flex flex-col gap-1.5">
                {activeService.deliverables.slice(0, 4).map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-[#2F4436]">
                    <Check className="w-3.5 h-3.5 text-[#193D2B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Model */}
            <div className="pt-2 text-xs font-mono text-[#5A7E66] border-t border-[#E5EBE6]">
              <strong className="text-[#193D2B]">Engagement Model:</strong> {activeService.workingModel}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <Link
                href={`/services/${activeService.slug}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-[#286746] transition-colors shadow-md"
              >
                <span>Explore Full Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Other Discipline Collapsed Slices - Tap Any to Expand */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center justify-between text-xs font-mono text-[#5A7E66] px-1">
            <span>OTHER DISCIPLINES (TAP TO EXPAND)</span>
            <span>08 TOTAL</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {servicesData.map((s, idx) => {
              const isCurrent = s.id === activeId;
              if (isCurrent) return null; // Already expanded above
              const num = `0${idx + 1}`;

              return (
                <button
                  key={s.id}
                  onClick={() => handleSelect(s.id, true)}
                  className="w-full group text-left p-2.5 sm:p-3 bg-[#FAF8F5] hover:bg-[#F2F6F3] border border-[#E5EBE6] hover:border-[#193D2B] rounded-xs flex items-center justify-between gap-3 transition-all duration-300 shadow-2xs"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Photographic Micro Thumbnail */}
                    <div className="relative w-12 h-12 rounded-xs overflow-hidden shrink-0 border border-[#D4DFD7]">
                      <Image
                        src={s.heroImage}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="48px"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-[#193D2B]">
                          {num}
                        </span>
                        <span className="font-mono text-[10px] text-[#718579] uppercase truncate">
                          {s.sectorTag}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm text-[#121814] group-hover:text-[#193D2B] truncate mt-0.5">
                        {s.title}
                      </h4>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1 text-[11px] font-mono text-[#193D2B] bg-white border border-[#D4DFD7] group-hover:bg-[#193D2B] group-hover:text-white px-2 py-1 rounded-xs transition-colors">
                    <Plus className="w-3 h-3" />
                    <span>Expand</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* QUICK JUMP PILL STRIP & CONTROLS (Universal for Desktop & Mobile)        */}
      {/* ========================================================================= */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs font-mono text-[#5A7E66] border-t border-[#E5EBE6]">
        {/* Quick Jump Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {servicesData.map((s, i) => {
            const isSelected = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleSelect(s.id, true)}
                aria-label={`Jump to discipline 0${i + 1}: ${s.title}`}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-[11px] font-mono transition-all duration-300 ${
                  isSelected
                    ? "bg-[#193D2B] text-white font-bold shadow-2xs"
                    : "bg-[#F8FAF7] border border-[#E5EBE6] text-[#475E50] hover:text-[#193D2B] hover:border-[#193D2B]"
                }`}
              >
                <span>0{i + 1}</span>
                <span className="hidden sm:inline truncate max-w-[120px]">
                  {SHORT_TITLES[s.id] || s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Prev / Next Buttons */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          <span className="text-[11px] text-[#718579] tracking-wider truncate">
            {isHovered ? "Paused · Inspecting discipline" : "Auto-advancing hold"}
          </span>

          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              aria-label="Previous discipline"
              className="w-8 h-8 rounded-xs border border-[#D4DFD7] text-[#193D2B] hover:bg-[#193D2B] hover:text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next discipline"
              className="w-8 h-8 rounded-xs border border-[#D4DFD7] text-[#193D2B] hover:bg-[#193D2B] hover:text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
