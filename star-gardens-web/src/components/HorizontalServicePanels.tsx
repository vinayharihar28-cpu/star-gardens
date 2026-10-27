"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { servicesData } from "@/data/services";

const HOLD_DURATION = 4800; // 4.8s steady hold per discipline

export default function HorizontalServicePanels() {
  const [expandedId, setExpandedId] = useState<string>("corporate");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Observe visibility so auto-hold rotation only runs when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // 2. Smooth auto-cycle with a calm, deliberate hold duration
  useEffect(() => {
    if (!isVisible || isHovered) return;

    const timer = setTimeout(() => {
      setExpandedId((prevId) => {
        const currentIndex = servicesData.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % servicesData.length;
        return servicesData[nextIndex].id;
      });
    }, HOLD_DURATION);

    return () => clearTimeout(timer);
  }, [expandedId, isVisible, isHovered]);

  // Clean up any pending hover timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // 3. Hover intent dwell (140ms) prevents rapid-fire accordion popping when mouse sweeps across
  const handlePanelMouseEnter = (id: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (expandedId === id) return;

    hoverTimeoutRef.current = setTimeout(() => {
      setExpandedId(id);
    }, 140);
  };

  const handlePanelMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // 4. Click immediately selects (0ms delay)
  const handlePanelClick = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setExpandedId(id);
  };

  return (
    <div
      ref={containerRef}
      className="w-full space-y-2.5 scroll-reveal"
      role="region"
      aria-label="Star Gardens Landscape Architectural Disciplines"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handlePanelMouseLeave();
      }}
    >
      {servicesData.map((svc, idx) => {
        const isExpanded = expandedId === svc.id;
        const indexNumber = `0${idx + 1}`;

        return (
          <div
            key={svc.id}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-controls={`service-panel-${svc.id}`}
            onMouseEnter={() => handlePanelMouseEnter(svc.id)}
            onMouseLeave={handlePanelMouseLeave}
            onClick={() => handlePanelClick(svc.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handlePanelClick(svc.id);
              }
            }}
            className={`group relative overflow-hidden rounded-xs transition-[background-color,border-color,box-shadow,color] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] border cursor-pointer select-none ${
              isExpanded
                ? "bg-[#193D2B] border-[#193D2B] shadow-2xl text-white"
                : "bg-white border-[#E5EBE6] hover:border-[#193D2B]/50 hover:bg-[#F8FAF7] text-[#121814]"
            }`}
          >
            {/* Background Photographic Reveal when Expanded - Smooth cross-fade and scale */}
            <div
              className={`absolute inset-0 z-0 transition-all duration-700 ease-out pointer-events-none ${
                isExpanded ? "opacity-75 scale-100" : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={svc.heroImage}
                alt={svc.title}
                fill
                priority={idx < 2}
                className="object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#12281C]/95 via-[#12281C]/75 to-[#12281C]/30" />
            </div>

            {/* Subtle Hold Hairline Indicator on Active Panel */}
            {isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 overflow-hidden z-20 pointer-events-none">
                <div
                  key={`${svc.id}-${isHovered ? "paused" : "running"}`}
                  className={`h-full bg-[#D9E7B0]/80 w-full ${
                    !isHovered && isVisible ? "animate-service-hold" : ""
                  }`}
                  style={{
                    transform: isHovered ? "scaleX(1)" : undefined,
                  }}
                />
              </div>
            )}

            {/* Panel Bar Header (Always Visible) */}
            <div className="relative z-10 px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between">
              <div className="flex items-center gap-4 sm:gap-8">
                {/* Micro-Index */}
                <span
                  className={`font-mono text-xs sm:text-sm tracking-widest transition-colors duration-500 ${
                    isExpanded ? "text-[#D9E7B0] font-bold" : "text-[#5A7E66] group-hover:text-[#193D2B]"
                  }`}
                >
                  {indexNumber}
                </span>

                {/* Service Title */}
                <div>
                  <h3
                    className={`font-serif text-xl sm:text-2xl md:text-3xl font-normal transition-colors duration-500 tracking-normal ${
                      isExpanded ? "text-white" : "text-[#121814] group-hover:text-[#193D2B]"
                    }`}
                  >
                    {svc.title}
                  </h3>
                  {!isExpanded && (
                    <p className="hidden md:block font-sketch text-xs text-[#5A7E66] mt-0.5">
                      {svc.tagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Indicator */}
              <div className="flex items-center gap-3">
                <span
                  className={`hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider transition-colors duration-500 ${
                    isExpanded ? "text-[#D9E7B0]/80" : "text-[#5A7E66]"
                  }`}
                >
                  {svc.sectorTag}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isExpanded
                      ? "bg-[#D9E7B0] text-[#101210] rotate-90 scale-105"
                      : "border border-[#D4DFD7] text-[#475E50] group-hover:border-[#193D2B] group-hover:text-[#193D2B] group-hover:translate-x-0.5"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Expandable Content Area - CSS Grid provides exact intrinsic height animation with zero jumpscare */}
            <div
              id={`service-panel-${svc.id}`}
              className={`relative z-10 grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isExpanded
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0 pointer-events-none"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`pt-4 pb-8 px-5 sm:px-8 border-t border-white/20 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-start lg:items-center transition-all duration-500 ease-out ${
                    isExpanded ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-2 delay-0"
                  }`}
                >
                  {/* Mobile-Only Rectangular Image Preview Screen */}
                  <div className="w-full lg:hidden relative aspect-[16/10] rounded-xs overflow-hidden border border-white/25 shadow-md">
                    <Image
                      src={svc.heroImage}
                      alt={svc.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-[#D9E7B0] bg-black/60 px-2 py-0.5 rounded-xs backdrop-blur-xs">
                      {svc.sectorTag}
                    </div>
                  </div>

                  {/* Summary & Deliverables - Placed Right Below the Image on Mobile */}
                  <div className="w-full lg:col-span-8 space-y-3 sm:space-y-4">
                    <p className="font-sketch text-lg sm:text-xl text-[#D9E7B0]">
                      {svc.tagline}
                    </p>
                    <p className="text-xs sm:text-base text-white/90 max-w-2xl leading-relaxed">
                      {svc.shortDesc}
                    </p>

                    {/* Deliverable Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2">
                      {svc.deliverables.slice(0, 4).map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#132D20] border border-[#286746] text-[#D9E7B0] text-xs font-mono rounded-xs"
                        >
                          <Check className="w-3 h-3 text-[#D9E7B0]" />
                          {d}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 text-xs font-mono text-white/80">
                      <strong>Engagement Model:</strong> {svc.workingModel}
                    </div>
                  </div>

                  {/* Direct Navigation CTA */}
                  <div className="w-full lg:col-span-4 flex lg:justify-end pt-2 lg:pt-0">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="group/btn w-full sm:w-auto text-center inline-flex justify-center items-center gap-2 px-6 py-3 bg-[#D9E7B0] text-[#101210] font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-[#E8F5C4] transition-all transform active:scale-95 shadow-md"
                    >
                      <span>Explore Service Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Subtle Discipline Indicator Strip */}
      <div className="flex items-center justify-between pt-3 px-1 text-xs font-mono text-[#5A7E66]">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {servicesData.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                handlePanelClick(s.id);
                setIsHovered(true);
              }}
              aria-label={`Jump to discipline 0${i + 1}: ${s.title}`}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                expandedId === s.id
                  ? "w-7 sm:w-8 bg-[#193D2B]"
                  : "w-2 bg-[#D4DFD7] hover:bg-[#5A7E66]"
              }`}
            />
          ))}
        </div>
        <span className="text-[11px] tracking-wider text-[#718579]">
          {isHovered ? "Paused · Inspecting discipline" : "Deliberate hold · Auto-advancing"}
        </span>
      </div>
    </div>
  );
}
