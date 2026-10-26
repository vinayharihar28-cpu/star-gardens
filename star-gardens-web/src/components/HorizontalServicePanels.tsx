"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { servicesData } from "@/data/services";

export default function HorizontalServicePanels() {
  const [expandedId, setExpandedId] = useState<string>("corporate");

  return (
    <div 
      className="w-full space-y-2.5 scroll-reveal"
      role="region"
      aria-label="Star Gardens Landscape Architectural Disciplines"
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
            onMouseEnter={() => setExpandedId(svc.id)}
            onClick={() => setExpandedId(svc.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setExpandedId(svc.id);
              }
            }}
            className={`group relative overflow-hidden rounded-xs transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border cursor-pointer select-none ${
              isExpanded
                ? "bg-[#193D2B] border-[#193D2B] shadow-2xl text-white"
                : "bg-white border-[#E5EBE6] hover:border-[#193D2B]/50 hover:bg-[#F8FAF7] text-[#121814]"
            }`}
          >
            {/* Background Photographic Reveal when Expanded */}
            <div
              className={`absolute inset-0 z-0 transition-opacity duration-500 ease-out ${
                isExpanded ? "opacity-75" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={svc.heroImage}
                alt={svc.title}
                fill
                priority={true}
                className="object-cover object-center"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#12281C]/95 via-[#12281C]/75 to-[#12281C]/30" />
            </div>

            {/* Panel Bar Header (Always Visible) */}
            <div className="relative z-10 px-5 sm:px-8 py-5 sm:py-6 flex items-center justify-between">
              <div className="flex items-center gap-4 sm:gap-8">
                {/* Micro-Index */}
                <span
                  className={`font-mono text-xs sm:text-sm tracking-widest transition-colors ${
                    isExpanded ? "text-[#D9E7B0] font-bold" : "text-[#5A7E66] group-hover:text-[#193D2B]"
                  }`}
                >
                  {indexNumber}
                </span>

                {/* Service Title */}
                <div>
                  <h3
                    className={`font-serif text-xl sm:text-2xl md:text-3xl font-normal transition-colors tracking-normal ${
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
                <span className={`hidden sm:inline-block font-mono text-[11px] uppercase tracking-wider ${
                  isExpanded ? "text-[#D9E7B0]/80" : "text-[#5A7E66]"
                }`}>
                  {svc.sectorTag}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isExpanded
                      ? "bg-[#D9E7B0] text-[#101210] rotate-90 scale-105"
                      : "border border-[#D4DFD7] text-[#475E50] group-hover:border-[#193D2B] group-hover:text-[#193D2B] group-hover:translate-x-0.5"
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Expandable Content Area */}
            <div
              id={`service-panel-${svc.id}`}
              className={`relative z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                isExpanded
                  ? "max-h-[800px] opacity-100 pb-8 px-5 sm:px-8"
                  : "max-h-0 opacity-0 pb-0 px-5 sm:px-8 pointer-events-none"
              }`}
            >
              <div className="pt-4 border-t border-white/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left: Summary & Deliverables */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="font-sketch text-xl text-[#D9E7B0]">
                    {svc.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
                    {svc.shortDesc}
                  </p>

                  {/* Deliverable Badges */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {svc.deliverables.slice(0, 4).map((d, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#132D20] border border-[#286746] text-[#D9E7B0] text-xs font-mono rounded-xs"
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

                {/* Right: Direct Navigation CTA */}
                <div className="lg:col-span-4 flex lg:justify-end">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-[#D9E7B0] text-[#101210] font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-[#E8F5C4] transition-all transform active:scale-95 shadow-md"
                  >
                    <span>Explore Service Details</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
