"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Info, Check, Sparkles } from "lucide-react";
import ContourSvg from "./ContourSvg";

interface Hotspot {
  id: string;
  number: string;
  title: string;
  discipline: string;
  description: string;
  xPercent: number;
  yPercent: number;
  provenance: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "canopy-tree",
    number: "01",
    title: "Native Canopy Shade Tree",
    discipline: "Mature Specimen Architecture",
    description:
      "Full-crowned shade tree propagated and conditioned at our 32-acre Rajahmundry facility. Root-balled with native soil microbiology to provide immediate mature canopy coverage without transplant shock.",
    xPercent: 36,
    yPercent: 34,
    provenance: "Rajahmundry Nursery (32 ac)",
  },
  {
    id: "cantilever-pavilion",
    number: "02",
    title: "Cantilevered Pavilion & Stepped Plinths",
    discipline: "Hardscape & Structural Framing",
    description:
      "Minimalist cantilevered architectural shelter paired with precision-cut natural stone steps. Forms the seamless transition between indoor living spaces and outdoor water gardens.",
    xPercent: 71,
    yPercent: 44,
    provenance: "Site-Graded Natural Stone",
  },
  {
    id: "waterfall-weir",
    number: "03",
    title: "Acoustic Waterfall & Reflection Pool",
    discipline: "Hydraulic & Bio-Filtration Engineering",
    description:
      "Engineered cascading weir with natural acoustic sound masking. Submerged bio-gravel circulation and bottom aeration keep reflection water crystal-clear while dropping ambient courtyard temperature by 2.8°C.",
    xPercent: 66,
    yPercent: 70,
    provenance: "Closed-Loop Hydraulic Sump",
  },
  {
    id: "tropical-marginals",
    number: "04",
    title: "Tiered Tropical & Marginal Flora",
    discipline: "Layered Softscape Curation",
    description:
      "Broadleaf Alocasia, Philodendron, and Strelitzia groupings nestled around weathered river boulders. Creates a dense microclimate buffer along the pond embankment.",
    xPercent: 19,
    yPercent: 64,
    provenance: "Punganur & Madikeri Nurseries",
  },
];

export default function ArchitecturalSketchSection() {
  const [activeHotspotId, setActiveHotspotId] = useState<string>("canopy-tree");
  const [showHotspots, setShowHotspots] = useState(true);
  const [isRevealed, setIsRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const activeHotspot = HOTSPOTS.find((h) => h.id === activeHotspotId) || HOTSPOTS[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="sketch-transition"
      className="py-20 sm:py-28 bg-[#FAF4E7] border-b border-[#E5EBE6] text-[#121814] relative overflow-hidden"
    >
      {/* 1. FINE TOPOGRAPHIC CONTOUR LINE DRAWING ANIMATION */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <ContourSvg className="w-full h-full text-[#286746]" />
      </div>
      <div className="absolute inset-0 arch-grid-mosaic pointer-events-none opacity-20" />

      {/* Subtle top and bottom transitions */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/90 border border-[#D4DFD7] rounded-xs text-[11px] font-mono tracking-widest text-[#193D2B] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#193D2B] animate-pulse" />
              <span>THE LIVING BLUEPRINT · FROM SKETCH TO SOIL</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#121814] font-normal tracking-tight leading-[1.05]">
              Before we plant, we <span className="italic text-[#1E5E3A]">draft</span>.
            </h2>
            <p className="text-sm sm:text-base text-[#334A3C] leading-relaxed">
              Every Star Gardens landscape begins at the drafting board. This original architectural elevation study illustrates our core philosophy: built structural pavilions, stepped stone terraces, and acoustic water weirs harmonizing with mature living botanical canopies.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className="px-4 py-2 bg-white/90 border border-[#D4DFD7] hover:border-[#193D2B] text-xs font-mono text-[#193D2B] rounded-xs transition-colors flex items-center gap-2 shadow-2xs"
            >
              <Info className="w-3.5 h-3.5 text-[#286746]" />
              <span>{showHotspots ? "Hide Coordinates" : "Inspect Coordinates"}</span>
            </button>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-[#286746] transition-all shadow-2xs"
            >
              <span>Commission A Study</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 2. PROGRESSIVE ARTWORK REVEAL (Clean Canvas, No Boxy Heavy Frame) */}
        <div className="relative w-full overflow-hidden rounded-sm bg-[#FAF4E7]">
          {/* Top Architectural Drawing Coordinate Strip */}
          <div className="pb-3 mb-2 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#5A7E66] border-b border-[#E5EBE6]/80 gap-y-2">
            <div className="flex items-center gap-3">
              <span className="text-[#193D2B] font-bold">[ DRAWING: SG-ARCH-01 ]</span>
              <span className="text-[#121814] font-medium">CONCEPTUAL ELEVATION & WATER PAVILION</span>
            </div>
            <div className="flex items-center gap-4 text-[10px]">
              <span>SCALE: 1:50 @ A1</span>
              <span>•</span>
              <span>ELEVATION: +920.00M</span>
              <span>•</span>
              <span>BENGALURU STUDIO</span>
            </div>
          </div>

          {/* Panoramic Artwork Canvas with Smooth Mask Wipe */}
          <div 
            className="relative aspect-[3/1] min-h-[260px] sm:min-h-[380px] w-full overflow-hidden select-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              clipPath: isRevealed ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
              opacity: isRevealed ? 1 : 0.2,
            }}
          >
            <Image
              src="/designs/image.png"
              alt="Star Gardens original architectural concept sketch showing modern cantilevered pavilion, waterfall weir, reflection pool and mature botanical canopy"
              fill
              priority
              className="object-contain object-center scale-100 hover:scale-[1.01] transition-transform duration-1000 ease-out"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Seamless Vignette Blend into Parchment */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF4E7]/30 via-transparent to-transparent pointer-events-none" />

            {/* Interactive Hotspot Pins */}
            {showHotspots && (
              <>
                {HOTSPOTS.map((hotspot) => {
                  const isSelected = activeHotspotId === hotspot.id;
                  return (
                    <div
                      key={hotspot.id}
                      style={{
                        left: `${hotspot.xPercent}%`,
                        top: `${hotspot.yPercent}%`,
                      }}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                      onClick={() => setActiveHotspotId(hotspot.id)}
                    >
                      {/* Pulse Ring */}
                      <span
                        className={`absolute -inset-2 rounded-full transition-opacity duration-300 ${
                          isSelected
                            ? "bg-[#286746]/40 animate-ping opacity-75"
                            : "bg-[#193D2B]/20 opacity-0 group-hover:opacity-100"
                        }`}
                      />

                      {/* Hotspot Pin */}
                      <button
                        className={`relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold transition-all transform shadow-md ${
                          isSelected
                            ? "bg-[#193D2B] text-white border-2 border-white scale-110 shadow-lg"
                            : "bg-white text-[#193D2B] border border-[#286746] hover:bg-[#193D2B] hover:text-white hover:scale-105"
                        }`}
                        aria-label={`Inspect ${hotspot.title}`}
                      >
                        {hotspot.number}
                      </button>
                    </div>
                  );
                })}
              </>
            )}
          </div>

          {/* 3. INSPECTION DETAIL TELEMETRY BOX */}
          <div className="mt-6 pt-5 border-t border-[#E5EBE6] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-[#193D2B] text-white flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-2xs">
                {activeHotspot.number}
              </span>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#121814]">
                    {activeHotspot.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-white border border-[#D4DFD7] text-[#193D2B] rounded-xs font-semibold">
                    {activeHotspot.discipline}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed max-w-2xl">
                  {activeHotspot.description}
                </p>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col md:items-end justify-center text-xs font-mono text-[#5A7E66] space-y-1 border-t md:border-t-0 md:border-l border-[#E5EBE6] pt-3 md:pt-0 md:pl-6">
              <span className="text-[10px] text-[#718579] uppercase">Provenance & Propagation:</span>
              <span className="text-[#193D2B] font-semibold">{activeHotspot.provenance}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
