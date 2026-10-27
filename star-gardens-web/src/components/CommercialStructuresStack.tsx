"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Sparkles, ShieldCheck, Calendar, Users, HeartHandshake } from "lucide-react";
import { ScrollStack, ScrollStackItem } from "./ScrollStack";

interface CommercialCardData {
  id: string;
  number: string;
  categoryTag: string;
  title: string;
  tagline: string;
  commercialModel: string;
  image: string;
  summary: string;
  highlights: string[];
  bestFor: string;
  href: string;
  ctaText: string;
  icon: any;
}

const COMMERCIAL_STRUCTURES: CommercialCardData[] = [
  {
    id: "consultation",
    number: "01",
    categoryTag: "ADVISORY & PLANNING",
    title: "Design Consultation & Masterplanning",
    tagline: "From Brief to Architectural Landscape Masterplan",
    commercialModel: "Fixed Study Fee / Architectural Retainer",
    image: "/images/corporate/2gethr-richmond-road-courtyard-palms.jpg",
    summary:
      "We walk the site, calculate solar trajectory, slab load compliance, human movement corridors, and soil microbiology. You receive comprehensive concept drawings, botanical palettes, and clear transparent cost estimates.",
    highlights: [
      "Light lux & microclimate study",
      "Structural slab weight coordination",
      "Rainwater harvesting & hydraulic layouts",
      "Native species specification schedule"
    ],
    bestFor: "Developers, principal architects & villa owners planning ground-up interventions.",
    href: "/contact",
    ctaText: "Schedule Design Consultation",
    icon: Compass,
  },
  {
    id: "turnkey",
    number: "02",
    categoryTag: "CAPEX · END-TO-END",
    title: "Turnkey Design & Build Execution",
    tagline: "We Plan It, Cultivate It, and Build It — Zero Subcontractor Finger-Pointing",
    commercialModel: "Capital Expenditure (CapEx) · Milestone Progress Billing",
    image: "/images/vertical-gardens/interior-double-height-vertical-garden.jpg",
    summary:
      "One unified studio takes complete accountability. Because we own 70 acres of production nurseries, mature trees and acclimatized plants arrive directly from our farms to your site without supplier delays.",
    highlights: [
      "Direct 70-acre nursery stock supply",
      "Sub-irrigation liners & waterproof warranties",
      "Modular living bio-walls & cascading weirs",
      "Turnkey general contracting accountability"
    ],
    bestFor: "Corporate campuses, hospitality resorts, high-end residential communities.",
    href: "/services",
    ctaText: "Explore Turnkey Capabilities",
    icon: Sparkles,
  },
  {
    id: "amc",
    number: "03",
    categoryTag: "MAINTENANCE & HEALTH SLA",
    title: "Annual Maintenance Contracts (AMC)",
    tagline: "175+ Enterprise Clients · Guaranteed Plant Health with 100% Free Replacements",
    commercialModel: "Comprehensive Service Retainer · Monthly or Quarterly Billing",
    image: "/images/amc/gardener-servicing-office-planters.jpg",
    summary:
      "A landscape is a living entity that evolves with every season. Our AMC covers scheduled visits by uniformed, background-verified technicians who monitor soil moisture, prune foliage, and swap distressed plants at zero extra cost.",
    highlights: [
      "100% free plant replacement guarantee",
      "We restore existing landscapes built by others",
      "Dedicated account manager & service logs",
      "Weekly moisture, EC, and pest management"
    ],
    bestFor: "Corporate facilities, co-working operators, residential RWAs, commercial atriums.",
    href: "/services/plant-amc",
    ctaText: "Review AMC Coverage Details",
    icon: ShieldCheck,
  },
  {
    id: "rental",
    number: "04",
    categoryTag: "OPEX · SUBSCRIPTIONS",
    title: "Corporate Plant Rental & Subscriptions",
    tagline: "Full Workplace Biophilia Without Capital Expenditure or Depreciation",
    commercialModel: "Operating Expense (OpEx) · 2 to 3-Year Subscription with Full AMC",
    image: "/images/rental/seminar-stage-floral-and-palm-backdrop.jpg",
    summary:
      "Shift greenery investments into tax-efficient OpEx. Short-term rentals furnish summits and expos (1–2 days), while long-term corporate subscriptions outfit multi-floor headquarters with designer planters and total maintenance.",
    highlights: [
      "Zero Capex outlay — predictable monthly fee",
      "Designer double-walled sub-irrigation planters",
      "100% plant health risk retained by Star Gardens",
      "48-hour staging capacity for large exhibitions"
    ],
    bestFor: "Tech campuses, corporate headquarters, conferences, and high-growth offices.",
    href: "/services/plant-rental",
    ctaText: "Explore Rental Programs",
    icon: Calendar,
  },
  {
    id: "workshops",
    number: "05",
    categoryTag: "WELLNESS & ENGAGEMENT",
    title: "Corporate Workshops & Team Greening",
    tagline: "Tactile Horticultural Sessions That Connect Teams and Reduce Stress",
    commercialModel: "Experiential Package · On-site 2 to 3-Hour Facilitated Events",
    image: "/images/workshops/hands-on-kokedama-creation-workshop.jpg",
    summary:
      "Engage your colleagues with hands-on planting masterclasses. Participants mix custom soil blends, craft Japanese Kokedama moss balls, and take their living botanical creation home to their work desk.",
    highlights: [
      "Japanese Kokedama moss ball craftsmanship",
      "Low-light indoor plant care masterclass",
      "Full protective floor sheets — zero office mess",
      "Each participant takes home their own living plant"
    ],
    bestFor: "Corporate HR, culture teams, employee wellness offsites, leadership retreats.",
    href: "/services/events-and-workshops",
    ctaText: "Book Corporate Workshop",
    icon: Users,
  },
  {
    id: "csr",
    number: "06",
    categoryTag: "ECOLOGICAL IMPACT",
    title: "CSR Plantation Drives & Stewardship",
    tagline: "Authentic Urban Greening Drives Offered at Zero Plant Cost",
    commercialModel: "Collaborative Social Partnership · Direct Nursery Donation",
    image: "/images/nursery/punganur-andhra-pradesh-nursery.jpg",
    summary:
      "As generational growers since 2009, ecological stewardship is intrinsic to our ethos. We supply acclimatized Western Ghats and Deccan native saplings and technical planting guidance to verified social drives at no charge.",
    highlights: [
      "Direct nursery supply from 70-acre farms",
      "Western Ghats & Deccan native shade tree palettes",
      "Employee volunteer coordination & pit preparation",
      "Long-term sapling survival rate tracking"
    ],
    bestFor: "Enterprise ESG committees, non-profit institutions, community greening drives.",
    href: "/services/csr",
    ctaText: "Partner on CSR Greening",
    icon: HeartHandshake,
  },
];

export default function CommercialStructuresStack() {
  return (
    <div className="w-full">
      <ScrollStack
        itemStackDistance={16}
        stackOffsetTop="95px"
        baseScale={0.88}
        className="w-full pt-2 pb-6"
      >
        {COMMERCIAL_STRUCTURES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollStackItem
              key={item.id}
              className="w-full max-w-5xl mx-auto"
            >
              <div className="p-6 sm:p-8 md:p-9 transition-colors duration-300">
                {/* Top Left Single Dot */}
                <div className="flex items-center mb-4 sm:mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#193D2B]" />
                </div>

                {/* Card Main Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left Column: Visual Lead */}
                  <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E5EBE6] shadow-sm group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                      
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#121814]/80 backdrop-blur-xs rounded-xs">
                          <Icon className="w-3.5 h-3.5 text-[#D9E7B0]" />
                          <span>Structure {item.number}</span>
                        </span>
                      </div>
                    </div>

                    {/* Best For Tagline */}
                    <div className="p-3.5 bg-[#FAF8F5] border border-[#E5EBE6] rounded-xl text-xs space-y-1">
                      <span className="font-mono text-[10px] text-[#718579] uppercase tracking-wider block">
                        Recommended For:
                      </span>
                      <p className="text-[#334A3C] font-medium leading-relaxed">
                        {item.bestFor}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Editorial & Commercial Deliverables */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#121814] font-normal tracking-tight">
                        {item.title}
                      </h3>
                      <p className="font-sketch text-lg sm:text-xl text-[#1E5E3A]">
                        "{item.tagline}"
                      </p>
                      <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed pt-1">
                        {item.summary}
                      </p>
                    </div>

                    {/* Key Highlights Checklist */}
                    <div className="pt-2 border-t border-[#E5EBE6] space-y-2.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#193D2B] font-bold block">
                        Delivery Architecture & Protocols:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center gap-2 p-2 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xs text-xs text-[#334A3C]"
                          >
                            <Check className="w-3.5 h-3.5 text-[#193D2B] shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-4 border-t border-[#E5EBE6] flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs font-mono text-[#5A7E66]">
                        <span className="text-[10px] uppercase text-[#718579] block">Model Structure:</span>
                        <span className="text-[#193D2B] font-semibold">{item.commercialModel}</span>
                      </div>

                      <Link
                        href={item.href}
                        className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-[#286746] transition-all transform active:scale-95 shadow-sm"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </div>
  );
}
