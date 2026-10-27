"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Compass, Sparkles, ShieldCheck, Calendar, Users, HeartHandshake } from "lucide-react";

interface ModelTab {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  image: string;
  deliverables: string[];
  description: string;
  detailPoints: string[];
  linkHref: string;
  actionText: string;
}

const workingModels: ModelTab[] = [
  {
    id: "consultation",
    title: "01. Design Consultation",
    subtitle: "From Brief to Architectural Landscape Masterplan",
    icon: Compass,
    image: "/images/corporate/2gethr-richmond-road-courtyard-palms.jpg",
    deliverables: ["Site Microclimate Study", "Grading & Concept Masterplan", "Botanical Palette Specification", "Rainwater Harvesting Layout"],
    description: "We walk the physical site, analyze solar trajectory, wind funnels, human movement corridors, and drainage patterns. We present detailed concept plans, soil condition recommendations, and clear transparent cost estimates.",
    detailPoints: [
      "Light lux measurement for interior floors and outdoor shade zones",
      "Coordination with structural engineers for slab load compliance",
      "Option to take plans to your own contractor or retain Star Gardens for turnkey execution"
    ],
    linkHref: "/services",
    actionText: "Explore Design Advisory"
  },
  {
    id: "turnkey",
    title: "02. Turnkey Design & Build",
    subtitle: "We Design It, Then Grow It and Build It",
    icon: Sparkles,
    image: "/images/vertical-gardens/interior-double-height-vertical-garden.jpg",
    deliverables: ["Hardscape & Softscape", "Modular Vertical Bio-Walls", "Architectural Water Curtains", "Designer Planter Fabrications"],
    description: "Eliminate contractor finger-pointing. Star Gardens takes complete end-to-end accountability. Because we own 70 acres of production nurseries, mature trees and acclimatized plants arrive directly from our farms to your site on schedule.",
    detailPoints: [
      "Sub-irrigation liners and waterproofing warranties",
      "Native and acclimatized specimen palms delivered mature",
      "Clean installation by in-house trained horticultural crew"
    ],
    linkHref: "/services",
    actionText: "View Turnkey Capabilities"
  },
  {
    id: "amc",
    title: "03. Annual Maintenance (AMC)",
    subtitle: "175+ Clients. 100% Free Specimen Replacement",
    icon: ShieldCheck,
    image: "/images/amc/gardener-servicing-office-planters.jpg",
    deliverables: ["Scheduled Moisture Audits", "Foliage Polishing & Pruning", "Nutrient Fertigation", "Instant Farm Replacements"],
    description: "A landscape is a living entity that evolves every season. Our AMC covers scheduled visits by uniformed, background-verified gardeners who monitor soil EC, prune, and mist foliage. If any plant declines, we replace it free of charge.",
    detailPoints: [
      "We maintain landscapes we built as well as troubled systems installed by others",
      "Zero paperwork or extra billing for plant replacements",
      "Dedicated account manager for enterprise facilities"
    ],
    linkHref: "/services/plant-amc",
    actionText: "Learn About AMC Coverage"
  },
  {
    id: "rental",
    title: "04. Rental & Subscriptions",
    subtitle: "Events (1–2 Days) & Corporate Rental (2–3 Years)",
    icon: Calendar,
    image: "/images/rental/seminar-stage-floral-and-palm-backdrop.jpg",
    deliverables: ["Summit & Exhibition Displays", "Stage Backdrops & Flower Beds", "Multi-Floor Corporate Subscriptions", "Zero Capex OpEx Model"],
    description: "Get full workplace biophilia without spending capital reserves. Short-term rentals furnish events, investor summits, and seminars with lush botanical stages. Long-term corporate subscriptions provide multi-floor plants with complete AMC included.",
    detailPoints: [
      "48-hour staging capability for large exhibitions",
      "Move greenery costs from Capex into tax-efficient OpEx",
      "All plant health risk retained by Star Gardens"
    ],
    linkHref: "/services/plant-rental",
    actionText: "See Rental Options"
  },
  {
    id: "workshops",
    title: "05. Corporate Workshops",
    subtitle: "Hands-on Planting for Employee Bonding",
    icon: Users,
    image: "/images/workshops/hands-on-kokedama-creation-workshop.jpg",
    deliverables: ["Japanese Kokedama Moss Balls", "Desk Planter Potting Sessions", "Indoor Plant Care Education", "Take-Home Living Plants"],
    description: "Engage your workforce with tactile, calming horticultural sessions. Teams learn plant propagation, mix specialized soil blends, and wrap living moss kokedamas that they proudly take back to their desks.",
    detailPoints: [
      "Conducted directly on-site at your office or campus",
      "Full protective sheets and cleaning provided—zero mess",
      "Proven stress reduction and collaborative team engagement"
    ],
    linkHref: "/services/events-and-workshops",
    actionText: "Book Team Workshop"
  },
  {
    id: "csr",
    title: "06. CSR Plantation Drives",
    subtitle: "Greening Drives Offered at No Cost",
    icon: HeartHandshake,
    image: "/images/nursery/punganur-andhra-pradesh-nursery.jpg",
    deliverables: ["Native Deccan Sapling Supply", "Site Assessment & Pit Digging", "Volunteer Event Coordination", "Ongoing Survival Audits"],
    description: "As farmers who have nurtured soil since 2009, we actively support corporate CSR environmental mandates. We provide native Deccan and Western Ghats saplings and planting guidance to verified social drives at zero cost.",
    detailPoints: [
      "Direct nursery supply ensures acclimatized saplings with high field survival",
      "Focus on ecological restoration of urban green canopy",
      "Authentic community impact without promotional markups"
    ],
    linkHref: "/services/csr",
    actionText: "Partner on CSR Greening"
  }
];

export default function WorkingModelInteractive() {
  const [activeTab, setActiveTab] = useState(workingModels[0].id);
  const current = workingModels.find((m) => m.id === activeTab) || workingModels[0];

  return (
    <div className="w-full">
      {/* Tab Navigation Pill Bar */}
      <div 
        role="tablist" 
        aria-label="Star Gardens Working Models"
        className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-[#E5EBE6]"
      >
        {workingModels.map((tab) => {
          const isActive = tab.id === activeTab;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-mono tracking-wider whitespace-nowrap rounded-xs transition-all ${
                isActive
                  ? "bg-[#193D2B] text-white font-bold shadow-md shadow-[#193D2B]/15"
                  : "bg-white text-[#475E50] hover:bg-[#F8FAF7] hover:text-[#193D2B] border border-[#D4DFD7]"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#286746]"}`} />
              <span>{tab.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Panel */}
      <div
        key={current.id}
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="interactive-card animate-fade-in-smooth mt-6 sm:mt-8 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-center bg-white border border-[#D4DFD7] p-5 sm:p-10 rounded-sm shadow-xl text-[#121814]"
      >
        {/* Rectangular Photographic Frame - On mobile placed on top */}
        <div className="w-full lg:col-span-5 relative order-first lg:order-last">
          <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xs overflow-hidden border border-[#D4DFD7] shadow-lg group">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-white/95 text-[#193D2B] font-bold px-2 py-0.5 rounded-xs backdrop-blur-xs shadow-sm">
                STAR GARDENS PRACTICE
              </span>
              <p className="text-xs font-mono mt-1 text-white/95">
                Verified delivery backed by 70 acres of nursery cultivation
              </p>
            </div>
          </div>
        </div>

        {/* Content Details - Placed Right Below the Image on Mobile */}
        <div className="w-full lg:col-span-7 space-y-5 sm:space-y-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#193D2B] font-bold">
              [ ENGAGEMENT FRAMEWORK ]
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#121814] mt-1 font-normal">
              {current.title}
            </h3>
            <p className="font-sketch text-base sm:text-lg text-[#286746] mt-0.5">
              {current.subtitle}
            </p>
          </div>

          <p className="text-xs sm:text-base text-[#334A3C] leading-relaxed">
            {current.description}
          </p>

          {/* Deliverable Chips */}
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#193D2B] font-bold mb-2">
              Core Deliverables:
            </h4>
            <div className="flex flex-wrap gap-2">
              {current.deliverables.map((item, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F8FAF7] border border-[#D4DFD7] text-xs font-mono text-[#193D2B] rounded-xs font-medium"
                >
                  <Check className="w-3 h-3 text-[#286746]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Detail Points */}
          <ul className="space-y-2 pt-2 border-t border-[#E5EBE6] text-xs sm:text-sm text-[#475E50]">
            {current.detailPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#286746] mt-1.5 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2">
            <Link
              href={current.linkHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#193D2B] text-white text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-[#286746] transition-colors shadow-sm"
            >
              <span>{current.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
