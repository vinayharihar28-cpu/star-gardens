"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, RefreshCw, Sparkles, Building2, Calendar, FileText } from "lucide-react";

export default function CorporateEngagementModels() {
  const [activeModel, setActiveModel] = useState<number>(0);

  const models = [
    {
      id: "rental",
      title: "Subscription / Plant Rental",
      tagline: "Zero Capex · Complete Peace of Mind",
      description:
        "Flexible 2 to 3-year commercial rental agreements with end-to-end plant health maintenance and guaranteed prompt replacements included.",
      bestFor: "Tech Parks, MNCs, Agile Co-working hubs & High-growth enterprise facilities.",
      features: [
        "Zero initial capital outlay for botanical inventory",
        "Designer FRP & Roto-mould planters in custom brand finishes",
        "Weekly dedicated horticultural crew service & moisture audits",
        "Free 48-hour replacement for any deteriorating specimen",
        "Quarterly aesthetic refresh & seasonal flowering accents",
        "Predictable monthly operating expense (Opex tax deductible)"
      ],
      badge: "Most Popular for Tech Parks",
      ctaText: "Request Subscription Proposal",
    },
    {
      id: "capex",
      title: "Design & Turnkey Build (Capex)",
      tagline: "Architectural Ownership · Bespoke Engineering",
      description:
        "Full-scale landscape architecture, sub-irrigation engineering, and mature nursery specimen installation delivered on turnkey capex basis.",
      bestFor: "New corporate campus headquarters, client-owned buildings & flagship real estate.",
      features: [
        "Comprehensive architectural drawings & 3D biophilic models",
        "Custom curved and linear desk planter run fabrication",
        "Mature trees sourced directly from our 70-acre production farms",
        "Computerized automated drip & subsurface irrigation networks",
        "Engineered modular vertical bio-walls with water collection",
        "Smooth facility handover with initial 90-day stabilization warranty"
      ],
      badge: "Flagship Corporate Build",
      ctaText: "Discuss Turnkey Execution",
    },
    {
      id: "amc",
      title: "Dedicated Corporate AMC",
      tagline: "Professional Facility Management Partnership",
      description:
        "Transform struggling or existing corporate greenery with our certified in-house horticulturists, specialized machinery, and soil nutrition protocols.",
      bestFor: "Enterprises with existing campus landscapes, tech park developers & facility directors.",
      features: [
        "Serving 175+ active corporate AMC sites across South India",
        "Mechanical tractor sweeping & high-volume road washing",
        "Zero-leak pot-in-pot sub-irrigation inspection & hygiene",
        "Biological nutrition, soil aeration & organic pest mitigation",
        "Monthly ESG & biophilic health audit reports for facility teams",
        "Dedicated on-site supervisor for rapid SLA turnaround"
      ],
      badge: "175+ Active Corporate Sites",
      ctaText: "Book AMC Health Audit",
    },
    {
      id: "workshops",
      title: "Workshops & Team Initiatives",
      tagline: "Employee Wellness & Biophilic Team Bonding",
      description:
        "Hands-on interactive landscape workshops designed for corporate off-sites, employee wellness weeks, and sustainability engagement.",
      bestFor: "HR teams, workplace experience managers & employee green committees.",
      features: [
        "Hands-on Bonsai styling, Kokedama & Terrarium building",
        "Desk plant care masterclasses with custom take-home greenery",
        "All materials, pots, soil mixtures & tools supplied on-site",
        "Led by senior Star Gardens horticulturists and agronomists",
        "Proven engagement for 20 to 300+ attendees in single sessions",
        "Custom-branded attendee gift boxes & care manuals"
      ],
      badge: "Employee Engagement",
      ctaText: "Plan Corporate Workshop",
    }
  ];

  const current = models[activeModel];

  return (
    <div className="space-y-8">
      {/* Model Selection Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {models.map((m, idx) => {
          const isActive = activeModel === idx;
          return (
            <button
              key={m.id}
              onClick={() => setActiveModel(idx)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                isActive
                  ? "bg-[#193D2B] text-white border-[#193D2B] shadow-lg shadow-[#193D2B]/15 scale-[1.02]"
                  : "bg-white text-[#121814] border-[#E5EBE6] hover:border-[#193D2B]/40 hover:bg-[#F8FAF7]"
              }`}
            >
              <div className="space-y-1">
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                    isActive ? "text-[#E8F5C4]" : "text-[#718579]"
                  }`}
                >
                  Model 0{idx + 1}
                </span>
                <span className="font-serif text-base sm:text-lg block leading-snug font-medium">
                  {m.title}
                </span>
              </div>
              <span
                className={`text-[11px] font-mono mt-3 inline-block truncate ${
                  isActive ? "text-[#D4DFD7]" : "text-[#718579]"
                }`}
              >
                {m.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Model Deep Dive Showcase Card */}
      <div className="bg-[#F8FAF7] border border-[#D4DFD7] rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Model Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#D4DFD7] text-[#193D2B] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#286746]" />
              {current.badge}
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#121814] leading-tight">
              {current.title}
            </h3>

            <p className="text-xs font-mono uppercase tracking-wider text-[#193D2B] font-semibold">
              {current.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
              {current.description}
            </p>

            <div className="p-4 bg-white rounded-2xl border border-[#E5EBE6] text-xs font-mono space-y-1">
              <span className="text-[#718579] block">Recommended For:</span>
              <span className="text-[#121814] font-medium block">{current.bestFor}</span>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#286746] transition-all transform active:scale-95 shadow-md shadow-[#193D2B]/15"
              >
                <span>{current.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Contract Deliverables */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5EBE6] space-y-5 shadow-xs">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#718579] pb-3 border-b border-[#F0F5F1]">
              Contract Specifications & Deliverables
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F0F5F1] text-[#193D2B] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#334D3D] leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#F0F5F1] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#718579]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#286746]" />
                Zero-Leak Guarantee with Waterproof Liners
              </span>
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4 text-[#286746]" />
                48-Hour Plant Replacement SLA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
