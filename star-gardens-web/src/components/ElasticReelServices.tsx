"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

// Concise editorial titles for the subtle micro-tags
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
  const [hoveredId, setHoveredId] = useState<string | null>("corporate");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const sidePanelRef = useRef<HTMLDivElement>(null);

  // Close side panel when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background body scroll when the large side panel is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const handleCardClick = (svc: ServiceItem) => {
    setSelectedService(svc);
  };

  const handleCloseScope = () => {
    setSelectedService(null);
  };

  const activeIndex = selectedService
    ? servicesData.findIndex((s) => s.id === selectedService.id)
    : -1;

  return (
    <div
      ref={containerRef}
      className="relative w-full space-y-4 select-none"
      role="region"
      aria-label="Star Gardens Architectural Disciplines Elastic Reel"
    >
      {/* ========================================================================= */}
      {/* THE PURE IMAGE ELASTIC REEL: Butter-Smooth Hover Expansion & Rounded Slices */}
      {/* ========================================================================= */}
      <div
        className="flex flex-row h-[520px] sm:h-[560px] lg:h-[600px] w-full gap-3 sm:gap-4 overflow-x-auto lg:overflow-hidden scrollbar-none rounded-3xl p-2.5 sm:p-3 bg-[#FAF8F5] border border-[#E5EBE6] shadow-md snap-x snap-mandatory"
        onMouseLeave={() => setHoveredId(null)}
      >
        {servicesData.map((svc, idx) => {
          const isHovered = hoveredId === svc.id;
          const indexNum = `0${idx + 1}`;
          const shortTitle = SHORT_TITLES[svc.id] || svc.title;

          return (
            <div
              key={svc.id}
              role="button"
              tabIndex={0}
              aria-label={`${indexNum}. ${svc.title} - Click to open full scope`}
              onMouseEnter={() => setHoveredId(svc.id)}
              onClick={() => handleCardClick(svc)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(svc);
                }
              }}
              style={{
                // Butter-smooth elastic flex expansion: hovered card gets larger, others contract
                flexGrow: isHovered ? 4.5 : 1,
                flexShrink: isHovered ? 0 : 1,
              }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-[flex-grow,flex-shrink,border-color,box-shadow,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] border ${
                isHovered
                  ? "min-w-[280px] sm:min-w-[360px] lg:min-w-0 border-[#193D2B] shadow-2xl scale-[1.008] z-20 snap-center"
                  : "min-w-[70px] sm:min-w-[85px] lg:min-w-0 border-white/40 hover:border-[#193D2B]/50 shadow-sm z-10 snap-start"
              }`}
            >
              {/* Background Landscape Photograph with Butter-Smooth Scale */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <Image
                  src={svc.heroImage}
                  alt={svc.title}
                  fill
                  priority={idx < 3}
                  className={`object-cover object-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered
                      ? "scale-105 filter-none"
                      : "scale-100 saturate-[0.9] group-hover:scale-105 group-hover:saturate-100"
                  }`}
                  sizes="(max-width: 1024px) 85vw, 40vw"
                />

                {/* Subtle Translucent Film - Only Image Is Seen */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                    isHovered
                      ? "bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80"
                      : "bg-black/25 group-hover:bg-black/15 opacity-100"
                  }`}
                />
              </div>

              {/* Minimalist Floating Label - Non-Intrusive, Preserving Pure Image */}
              <div className="absolute inset-0 z-10 p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
                {/* Index Pill */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs sm:text-sm font-bold tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md transition-all duration-500 ${
                      isHovered
                        ? "bg-[#193D2B]/90 text-[#D9E7B0] border border-[#286746] shadow-sm"
                        : "bg-black/40 text-white/90 border border-white/20"
                    }`}
                  >
                    {indexNum}
                  </span>

                  {/* Click to Expand Prompt appears softly on hover */}
                  {isHovered && (
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-[#193D2B] text-[11px] font-mono uppercase tracking-wider backdrop-blur-md shadow-md animate-fade-in-smooth">
                      <span>Click to view details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>

                {/* Bottom Slice Identifier */}
                <div className="flex items-end justify-between">
                  {isHovered ? (
                    <div className="animate-fade-in-smooth bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-white">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#D9E7B0] block">
                        {svc.sectorTag}
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-normal leading-tight text-white block">
                        {svc.title}
                      </span>
                    </div>
                  ) : (
                    <div className="w-full flex justify-center pb-2">
                      <span
                        className="font-mono uppercase tracking-[0.2em] text-[11px] sm:text-xs text-white/90 group-hover:text-white whitespace-nowrap drop-shadow-md transition-colors"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {shortTitle}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Strip & Quick Selector Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 text-xs font-mono text-[#5A7E66]">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[#193D2B] font-bold shrink-0 hidden md:inline">
            DISCIPLINES:
          </span>
          {servicesData.map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleCardClick(s)}
              onMouseEnter={() => setHoveredId(s.id)}
              className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono bg-[#FAF8F5] hover:bg-[#193D2B] border border-[#D4DFD7] hover:border-[#193D2B] text-[#475E50] hover:text-white transition-all duration-300 shadow-2xs"
            >
              <span className="font-bold">0{i + 1}</span>
              <span className="truncate max-w-[120px]">{SHORT_TITLES[s.id] || s.title}</span>
            </button>
          ))}
        </div>

        <div className="text-[11px] text-[#718579] shrink-0 text-right">
          Hover to expand image · Click any card for full scope & details
        </div>
      </div>

      {/* ========================================================================= */}
      {/* THE BIG SIDE OVERLAY PANEL: Content appears ONLY when a card is clicked   */}
      {/* ========================================================================= */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex justify-end animate-fade-in-smooth">
          {/* Backdrop: Clicking "out of the scope" closes the panel and reverts to reel */}
          <div
            onClick={handleCloseScope}
            className="fixed inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-500 cursor-pointer"
            aria-label="Click out of scope to close details"
          />

          {/* Big Right-Side Editorial Drawer */}
          <div
            ref={sidePanelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="side-panel-title"
            className="relative z-10 w-full sm:w-[540px] md:w-[620px] lg:w-[680px] h-full bg-[#FAF9F5] shadow-2xl border-l border-[#D4DFD7] flex flex-col justify-between overflow-y-auto transform transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            {/* Drawer Header with Close Button */}
            <div className="sticky top-0 z-30 flex items-center justify-between p-5 sm:p-6 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E5EBE6]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#193D2B] px-2.5 py-1 rounded-full bg-[#EAF0EB] border border-[#D4DFD7]">
                  DISCIPLINE {activeIndex !== -1 ? `0${activeIndex + 1}` : "01"} / 08
                </span>
                <span className="font-mono text-xs text-[#718579] uppercase">
                  {selectedService.sectorTag}
                </span>
              </div>

              {/* Close Button ("Out of scope" toggle) */}
              <button
                onClick={handleCloseScope}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white hover:bg-[#193D2B] border border-[#D4DFD7] hover:border-[#193D2B] text-[#121814] hover:text-white transition-all shadow-2xs"
                aria-label="Close details panel"
              >
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Close [ESC]
                </span>
                <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Drawer Body: Clean High-Resolution Imagery & Deep Editorial Content */}
            <div className="p-6 sm:p-8 space-y-6 flex-1">
              {/* Big High-Resolution Featured Image with Rounded Corners */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#D4DFD7] shadow-lg">
                <Image
                  src={selectedService.heroImage}
                  alt={selectedService.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 680px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="font-sketch text-lg sm:text-xl text-[#D9E7B0] drop-shadow-md">
                    "{selectedService.tagline}"
                  </span>
                </div>
              </div>

              {/* Title & Headline */}
              <div className="space-y-2">
                <h2
                  id="side-panel-title"
                  className="font-serif text-3xl sm:text-4xl text-[#121814] font-normal leading-[1.15]"
                >
                  {selectedService.title}
                </h2>
                <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
                  {selectedService.shortDesc}
                </p>
              </div>

              {/* Scope & Key Deliverables */}
              <div className="space-y-3 pt-3 border-t border-[#E5EBE6]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold">
                  Key Scope & Deliverables
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {selectedService.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#E5EBE6] text-xs sm:text-sm text-[#2F4436] shadow-2xs"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#193D2B] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Working Model */}
              <div className="p-4 rounded-xl bg-[#F2F6F3] border border-[#D4DFD7] space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#193D2B] font-bold block">
                  Engagement & Commercial Delivery:
                </span>
                <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed">
                  {selectedService.workingModel}
                </p>
              </div>
            </div>

            {/* Drawer Footer CTA */}
            <div className="sticky bottom-0 z-30 p-5 sm:p-6 bg-[#FAF9F5]/95 backdrop-blur-md border-t border-[#E5EBE6] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleCloseScope}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#D4DFD7] text-[#475E50] hover:text-[#193D2B] hover:bg-white text-xs font-mono uppercase tracking-wider transition-colors text-center"
              >
                ← Back to Reel
              </button>

              <Link
                href={`/services/${selectedService.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#286746] transition-all transform active:scale-95 shadow-md shadow-[#193D2B]/15 text-center"
              >
                <span>Explore Full Service Page</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
