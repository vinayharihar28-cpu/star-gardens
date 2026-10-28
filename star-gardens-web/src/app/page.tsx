"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Check, 
  Compass, 
  Sparkles, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  ShieldCheck,
  ChevronDown,
  Layers,
  Leaf,
  Users
} from "lucide-react";
import BrandIntro from "@/components/BrandIntro";
import ContourSvg from "@/components/ContourSvg";
import EnquiryForm from "@/components/EnquiryForm";
import HeroSection from "@/components/HeroSection";
import GradientCarousel3D from "@/components/GradientCarousel3D";
import ArchitecturalSketchSection from "@/components/ArchitecturalSketchSection";
import ImageSlideReveal from "@/components/ImageSlideReveal";
import { projectsData } from "@/data/projects";
import { nurseriesData, studioFacts } from "@/data/nurseries";
import { insightsData } from "@/data/insights";

const CLIENT_CAMPUSES = [
  { name: "Swiss Re", location: "Embassy Golf Links, Bengaluru" },
  { name: "ABB Innovation", location: "Peenya Industrial Area, Bengaluru" },
  { name: "WSP Global", location: "Manyata Tech Park, Bengaluru" },
  { name: "2gethr Coworking", location: "Richmond Road & HSR Layout" },
  { name: "The Hive", location: "VR Bengaluru, Whitefield" },
  { name: "Embassy Group", location: "Central Business District" },
];

const OPERATIONAL_PILLARS = [
  {
    num: "01",
    title: "Design Intelligence",
    tagline: "Biological Engineering",
    description: "Calculating lux levels, slab weight limits, and hydraulics before installation.",
  },
  {
    num: "02",
    title: "Direct Cultivation",
    tagline: "70 Acres Farmland",
    description: "Thousands of acclimatized specimen plants grown on our own farms, ready for dispatch.",
  },
  {
    num: "03",
    title: "End-to-End Delivery",
    tagline: "Unified Accountability",
    description: "One studio handles concept sketches, execution, and ongoing AMC care with zero subcontracting.",
  },
  {
    num: "04",
    title: "100% Replacement SLA",
    tagline: "Living Health Warranty",
    description: "Declining specimens under AMC are replaced immediately at zero extra cost.",
  },
  {
    num: "05",
    title: "Direct Studio Access",
    tagline: "Founder Leadership",
    description: "Direct collaboration with studio leadership and senior horticulturists.",
  },
];

const FAQS = [
  {
    q: "What does a landscape architecture and design studio do?",
    a: "Star Gardens plans, designs, builds, and maintains living landscapes. We coordinate on drainage, slab load compliance, lighting, and spatial flow for campuses, villas, and commercial spaces.",
  },
  {
    q: "Do you rent plants for corporate offices and events?",
    a: "Yes. We offer short-term rentals for summits (1–2 days) and long-term corporate subscriptions (2–3 years) with designer planters and weekly maintenance under an OpEx model.",
  },
  {
    q: "How does the Annual Maintenance Contract (AMC) work?",
    a: "Our AMC covers scheduled visits by trained, verified gardeners who monitor moisture, prune, fertigate, and clean foliage, backed by our 100% free plant replacement SLA.",
  },
  {
    q: "Which locations do you service for on-site execution?",
    a: "Our studio is based in Bengaluru, with projects across Hyderabad, Chennai, and Pune. Same-day site consultations are available across Bengaluru.",
  },
  {
    q: "How do you engineer and maintain vertical living bio-walls?",
    a: "We install modular cassette systems with automated drip fertigation, waterproof liners, and light-matched species, achieving a 98%+ retention rate.",
  },
];

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 4);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col bg-white text-[#121814]">
      {/* 1. STAR GARDENS OFFICIAL LOGO LOADING SCREEN (EXACT 3.0S OPACITY REVEAL) */}
      <BrandIntro />

      {/* 2. CINEMATIC FULL-SCREEN LANDSCAPE HERO CANVAS */}
      <HeroSection />

      {/* 3. 3D GRADIENT CAROUSEL PERSPECTIVE SHOWCASE (RIGHT BELOW HERO) */}
      <section 
        id="carousel-showcase" 
        className="relative w-full bg-white overflow-hidden py-8 sm:py-14 border-b border-[#E5EBE6]"
        aria-label="Star Gardens 3D Perspective Landscape Carousel Showcase"
      >
        <GradientCarousel3D />

        {/* Minimal Scroll Cue to Campuses Strip */}
        <div className="relative pt-6 sm:pt-8 flex justify-center z-20">
          <a
            href="#campuses-strip"
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#D4DFD7] text-[#193D2B] flex items-center justify-center hover:bg-white hover:border-[#193D2B] hover:scale-105 active:scale-95 transition-all shadow-sm group"
            aria-label="Scroll down to delivered campuses and credentials"
          >
            <ChevronDown className="w-5 h-5 text-[#193D2B] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* 4. ENTERPRISE CAMPUS CREDENTIALS STRIP */}
      <section id="campuses-strip" className="bg-[#FAF8F5] border-y border-[#E5EBE6] py-6 sm:py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 scroll-reveal">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#193D2B] font-bold shrink-0 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-[#286746]" />
              <span>Delivered Campuses & Workplaces:</span>
            </span>

            <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2 sm:pb-0 scrollbar-none text-xs font-mono text-[#475E50]">
              {CLIENT_CAMPUSES.map((c, idx) => (
                <div key={idx} className="flex items-center gap-2 whitespace-nowrap">
                  <span className="font-bold text-[#121814]">{c.name}</span>
                  <span className="text-[10px] text-[#718579]">({c.location.split(",")[0]})</span>
                  {idx < CLIENT_CAMPUSES.length - 1 && <span className="text-[#D4DFD7] ml-4">•</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. MOSAIC CREDIBILITY AND SCALE STRIP */}
      <section className="bg-white border-b border-[#E5EBE6] py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card-hover scroll-reveal delay-75 p-5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-1.5 shadow-2xs">
              <span className="font-serif text-4xl sm:text-5xl text-[#193D2B] block font-bold">2009</span>
              <p className="text-xs uppercase tracking-wider text-[#718579] font-mono">FOUNDING YEAR</p>
              <p className="text-xs text-[#475E50]">Horticultural heritage</p>
            </div>

            <div className="stat-card-hover scroll-reveal delay-150 p-5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-1.5 shadow-2xs">
              <span className="font-serif text-4xl sm:text-5xl text-[#193D2B] block font-bold">70 Acres</span>
              <p className="text-xs uppercase tracking-wider text-[#718579] font-mono">NURSERY FARMLAND</p>
              <p className="text-xs text-[#475E50]">4 South India locations</p>
            </div>

            <div className="stat-card-hover scroll-reveal delay-225 p-5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-1.5 shadow-2xs">
              <span className="font-serif text-4xl sm:text-5xl text-[#193D2B] block font-bold">175+</span>
              <p className="text-xs uppercase tracking-wider text-[#718579] font-mono">ENTERPRISE AMCS</p>
              <p className="text-xs text-[#475E50]">Parks & tech campuses</p>
            </div>

            <div className="stat-card-hover scroll-reveal delay-300 p-5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-1.5 shadow-2xs">
              <span className="font-serif text-4xl sm:text-5xl text-[#193D2B] block font-bold">100%</span>
              <p className="text-xs uppercase tracking-wider text-[#718579] font-mono">REPLACEMENT SLA</p>
              <p className="text-xs text-[#475E50]">Guaranteed living health</p>
            </div>
          </div>

          {/* Operational Philosophy Banner */}
          <div className="interactive-card scroll-reveal delay-150 mt-12 p-6 sm:p-8 bg-[#193D2B] border border-[#286746] rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E8F5C4]">
                CULTIVATION ADVANTAGE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                We don’t wait on external suppliers. We grow our own inventory.
              </h3>
              <p className="text-xs sm:text-sm text-[#D4DFD7] leading-relaxed">
                70 acres of dedicated production stock ensures acclimatized specimens and swift delivery.
              </p>
            </div>
            <Link
              href="/about"
              className="group/btn inline-flex items-center gap-1.5 px-6 py-3 bg-white text-[#193D2B] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#F8FAF7] transition-all whitespace-nowrap shadow-sm hover:scale-105 transform duration-300 relative z-20"
            >
              <span>Our Story</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURAL LINE ART TRANSITION (UNBOXED PARCHMENT BLEND) */}
      <ArchitecturalSketchSection />

      {/* 6. SELECTED WORK (EDITORIAL ARCHITECTURAL PORTFOLIO) */}
      <section id="selected-work" className="py-20 sm:py-28 bg-[#F8FAF7] border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-2 max-w-xl scroll-reveal">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold">
                ARCHITECTURAL PORTFOLIO
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
                Interventions shaped with intention.
              </h2>
              <p className="text-sm sm:text-base text-[#475E50]">
                Delivered landscapes across corporate campuses, living walls, and atriums.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#193D2B] hover:text-[#286746] border-b border-[#193D2B] pb-1 transition-colors self-start font-semibold"
            >
              <span>View All Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Editorial Asymmetric Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Primary Feature: Swiss Re (Span 7) */}
            <ImageSlideReveal direction="up" delay={0} className="lg:col-span-7 flex flex-col h-full rounded-2xl">
              <div className="interactive-card flex flex-col group bg-white border border-[#E5EBE6] rounded-2xl overflow-hidden shadow-sm h-full">
                <Link href={`/projects/${featuredProjects[0].slug}`} className="relative aspect-[16/10] overflow-hidden block">
                  <Image
                    src={featuredProjects[0].featuredImage}
                    alt={featuredProjects[0].title}
                    fill
                    className="object-cover project-card-image transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 bg-white/95 border border-[#D4DFD7] backdrop-blur-xs text-[#193D2B] text-xs font-mono uppercase tracking-wider rounded-full font-semibold shadow-2xs">
                      {featuredProjects[0].sector}
                    </span>
                  </div>
                </Link>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#718579] mb-2">
                      <span>Client: {featuredProjects[0].client}</span>
                      <span>{featuredProjects[0].location}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#121814] group-hover:text-[#193D2B] transition-colors leading-snug">
                      <Link href={`/projects/${featuredProjects[0].slug}`}>
                        {featuredProjects[0].title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#475E50] mt-3 leading-relaxed">
                      {featuredProjects[0].summary}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#E5EBE6] flex items-center justify-between">
                    <div className="flex gap-4 text-xs font-mono text-[#193D2B] font-medium">
                      <span>380m Linear Planters</span>
                      <span>•</span>
                      <span>Weekly AMC</span>
                    </div>
                    <Link
                      href={`/projects/${featuredProjects[0].slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#193D2B] hover:text-white hover:bg-[#193D2B] border border-[#D4DFD7] px-3.5 py-1.5 rounded-full transition-all font-semibold"
                    >
                      <span>Read Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ImageSlideReveal>

            {/* Secondary Feature: 2gethr Richmond Rd (Span 5) */}
            <ImageSlideReveal direction="up" delay={150} className="lg:col-span-5 flex flex-col h-full rounded-2xl">
              <div className="interactive-card flex flex-col group bg-white border border-[#E5EBE6] rounded-2xl overflow-hidden shadow-sm h-full">
                <Link href={`/projects/${featuredProjects[1].slug}`} className="relative aspect-[16/11] overflow-hidden block">
                  <Image
                    src={featuredProjects[1].featuredImage}
                    alt={featuredProjects[1].title}
                    fill
                    className="object-cover project-card-image transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 bg-white/95 border border-[#D4DFD7] backdrop-blur-xs text-[#193D2B] text-xs font-mono uppercase tracking-wider rounded-full font-semibold shadow-2xs">
                      {featuredProjects[1].sector}
                    </span>
                  </div>
                </Link>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#718579] mb-2">
                      <span>Client: {featuredProjects[1].client}</span>
                      <span>{featuredProjects[1].location}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#121814] group-hover:text-[#193D2B] transition-colors leading-snug">
                      <Link href={`/projects/${featuredProjects[1].slug}`}>
                        {featuredProjects[1].title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#475E50] mt-3 leading-relaxed">
                      {featuredProjects[1].summary}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-[#E5EBE6] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#193D2B] font-medium">Terraced Entrance Steps</span>
                    <Link
                      href={`/projects/${featuredProjects[1].slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#193D2B] hover:text-white hover:bg-[#193D2B] border border-[#D4DFD7] px-3.5 py-1.5 rounded-full transition-all font-semibold"
                    >
                      <span>Read Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ImageSlideReveal>

            {/* Row 2: WSP Manyata Tech Park (Span 6) */}
            <ImageSlideReveal direction="up" delay={100} className="lg:col-span-6 flex flex-col h-full rounded-2xl">
              <div className="interactive-card flex flex-col group bg-white border border-[#E5EBE6] rounded-2xl overflow-hidden shadow-sm h-full">
                <Link href={`/projects/${featuredProjects[2].slug}`} className="relative aspect-[16/10] overflow-hidden block">
                  <Image
                    src={featuredProjects[2].featuredImage}
                    alt={featuredProjects[2].title}
                    fill
                    className="object-cover project-card-image transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 bg-white/95 border border-[#D4DFD7] backdrop-blur-xs text-[#193D2B] text-xs font-mono uppercase tracking-wider rounded-full font-semibold shadow-2xs">
                      {featuredProjects[2].sector}
                    </span>
                  </div>
                </Link>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#718579] mb-2">
                      <span>Client: {featuredProjects[2].client}</span>
                      <span>{featuredProjects[2].location}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#121814] group-hover:text-[#193D2B] transition-colors">
                      <Link href={`/projects/${featuredProjects[2].slug}`}>
                        {featuredProjects[2].title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#475E50] mt-2 leading-relaxed">
                      {featuredProjects[2].summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E5EBE6] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#193D2B] font-medium">140+ Custom Curved Boxes</span>
                    <Link
                      href={`/projects/${featuredProjects[2].slug}`}
                      className="group/link inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#193D2B] hover:text-white hover:bg-[#193D2B] border border-[#D4DFD7] px-3 py-1 rounded-full transition-all font-semibold"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ImageSlideReveal>

            {/* Row 2: Living Walls ABB & WSP (Span 6) */}
            <ImageSlideReveal direction="up" delay={250} className="lg:col-span-6 flex flex-col h-full rounded-2xl">
              <div className="interactive-card flex flex-col group bg-white border border-[#E5EBE6] rounded-2xl overflow-hidden shadow-sm h-full">
                <Link href={`/projects/${featuredProjects[3].slug}`} className="relative aspect-[16/10] overflow-hidden block">
                  <Image
                    src={featuredProjects[3].featuredImage}
                    alt={featuredProjects[3].title}
                    fill
                    className="object-cover project-card-image transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 bg-white/95 border border-[#D4DFD7] backdrop-blur-xs text-[#193D2B] text-xs font-mono uppercase tracking-wider rounded-full font-semibold shadow-2xs">
                      {featuredProjects[3].sector}
                    </span>
                  </div>
                </Link>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#718579] mb-2">
                      <span>Clients: {featuredProjects[3].client}</span>
                      <span>Bengaluru Campuses</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#121814] group-hover:text-[#193D2B] transition-colors">
                      <Link href={`/projects/${featuredProjects[3].slug}`}>
                        {featuredProjects[3].title}
                      </Link>
                    </h3>
                    <p className="text-sm text-[#475E50] mt-2 leading-relaxed">
                      {featuredProjects[3].summary}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E5EBE6] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#193D2B] font-medium">1,850 sq.ft Modular Cells</span>
                    <Link
                      href={`/projects/${featuredProjects[3].slug}`}
                      className="group/link inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#193D2B] hover:text-white hover:bg-[#193D2B] border border-[#D4DFD7] px-3 py-1 rounded-full transition-all font-semibold"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </ImageSlideReveal>
          </div>
        </div>
      </section>

      {/* 8. NURSERY & GROWING STORY */}
      <section className="py-20 sm:py-28 bg-[#F8FAF7] border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2 max-w-xl scroll-reveal">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold">
                70 ACRES NURSERY PROVENANCE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
                Four nurseries across South India.
              </h2>
              <p className="text-sm sm:text-base text-[#475E50]">
                Four dedicated cultivation centers holding ready stock across Karnataka and Andhra Pradesh.
              </p>
            </div>

            <Link
              href="/about"
              className="group/link inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#193D2B] border-b border-[#193D2B] pb-1 hover:text-[#286746] transition-colors font-semibold scroll-reveal delay-100"
            >
              <span>Our Horticultural Story</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>

          {/* 4 Nursery Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nurseriesData.map((nur, idx) => (
              <ImageSlideReveal key={nur.id} direction="up" delay={idx * 120} className="flex flex-col h-full rounded-2xl">
                <div className="interactive-card bg-white border border-[#E5EBE6] rounded-2xl overflow-hidden flex flex-col justify-between group shadow-sm h-full">
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={nur.image}
                        alt={nur.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                      <div className="absolute top-2.5 right-2.5 bg-white/95 border border-[#D4DFD7] text-[#193D2B] text-xs font-mono px-3 py-1 rounded-full font-semibold shadow-2xs">
                        {nur.acreage} ACRES
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#718579]">
                        Est. {nur.established} · {nur.state}
                      </span>
                      <h3 className="font-serif text-xl text-[#121814] font-normal leading-snug group-hover:text-[#193D2B] transition-colors">
                        {nur.name}
                      </h3>
                      <p className="text-xs text-[#475E50] line-clamp-3 leading-relaxed">
                        {nur.focus}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="border-t border-[#E5EBE6] pt-3 text-[11px] font-mono text-[#193D2B] font-medium">
                      Specialty: {nur.keySpecialties[0]}
                    </div>
                  </div>
                </div>
              </ImageSlideReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHY CLIENTS CHOOSE US: 5 OPERATIONAL PILLARS */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3 scroll-reveal">
            <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold">
              OPERATIONAL PILLARS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
              Why clients choose us.
            </h2>
            <p className="text-sm sm:text-base text-[#475E50]">
              Five operational standards that protect budgets and guarantee living plant health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {OPERATIONAL_PILLARS.map((p, idx) => {
              const delays = ["delay-75", "delay-150", "delay-225", "delay-300", "delay-375"];
              return (
                <div 
                  key={idx} 
                  className={`interactive-card scroll-reveal ${delays[idx % delays.length]} p-6 sm:p-8 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-3 shadow-2xs`}
                >
                  <div className="flex items-center justify-between border-b border-[#E5EBE6] pb-3">
                    <span className="font-mono text-xs font-bold text-[#193D2B]">{p.num}</span>
                    <span className="text-[10px] font-mono uppercase text-[#718579]">{p.tagline}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#121814]">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. WORKSHOPS & CSR GREENING */}
      <section className="py-20 sm:py-28 bg-[#F8FAF7] border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Rectangular Image on Mobile, Duo on Desktop */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ImageSlideReveal direction="left" delay={0} className="rounded-2xl">
                <div className="interactive-card relative aspect-[16/10] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-[#D4DFD7] shadow-lg">
                  <Image
                    src="/images/workshops/corporate-planting-workshop-main.jpg"
                    alt="Corporate team planting workshop by Star Gardens"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent sm:hidden" />
                  <div className="absolute bottom-2.5 left-3 text-[10px] font-mono uppercase text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs sm:hidden">
                    Hands-On Horticultural Workshops
                  </div>
                </div>
              </ImageSlideReveal>
              <ImageSlideReveal direction="right" delay={150} className="hidden sm:block sm:mt-6 rounded-2xl">
                <div className="interactive-card relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#D4DFD7] shadow-lg">
                  <Image
                    src="/images/workshops/hands-on-kokedama-creation-workshop.jpg"
                    alt="Kokedama moss ball creation session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </ImageSlideReveal>
            </div>

            {/* Right: Content Placed Cleanly Right Below on Mobile */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 scroll-reveal delay-100">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold">
                COMMUNITY & CSR
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal leading-tight">
                Workshops teams remember. CSR drives that endure.
              </h2>
              <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
                Hands-on corporate planting workshops and complimentary native saplings for verified CSR greening.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="interactive-card scroll-reveal delay-200 p-6 bg-white border border-[#E5EBE6] rounded-2xl space-y-2 shadow-2xs">
                  <h4 className="font-serif text-xl text-[#121814]">Corporate Workshops</h4>
                  <p className="text-xs text-[#475E50] leading-relaxed">
                    Guided sessions on Japanese Kokedama, terrariums, and low-light plant care with all tools provided.
                  </p>
                  <Link
                    href="/services/events-and-workshops"
                    className="group/link inline-flex items-center gap-1.5 px-4 py-2 border border-[#D4DFD7] text-xs font-mono uppercase tracking-wider text-[#193D2B] font-semibold hover:text-white hover:bg-[#193D2B] rounded-full transition-all mt-2"
                  >
                    <span>Book Workshop</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>

                <div className="interactive-card scroll-reveal delay-300 p-6 bg-white border border-[#E5EBE6] rounded-2xl space-y-2 shadow-2xs">
                  <h4 className="font-serif text-xl text-[#121814]">Free CSR Drives</h4>
                  <p className="text-xs text-[#475E50] leading-relaxed">
                    Native Deccan shade saplings supplied at zero plant cost for verified corporate sustainability drives.
                  </p>
                  <Link
                    href="/services/csr"
                    className="group/link inline-flex items-center gap-1.5 px-4 py-2 border border-[#D4DFD7] text-xs font-mono uppercase tracking-wider text-[#193D2B] font-semibold hover:text-white hover:bg-[#193D2B] rounded-full transition-all mt-2"
                  >
                    <span>CSR Partnership</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. EDITORIAL INSIGHTS */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2 max-w-xl scroll-reveal">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold">
                EDITORIAL INSIGHTS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
                Guides and architectural insights.
              </h2>
              <p className="text-sm sm:text-base text-[#475E50]">
                Practical frameworks on light levels, plant AMC scope, and rental economics.
              </p>
            </div>

            <Link
              href="/insights"
              className="group/link inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#193D2B] border-b border-[#193D2B] pb-1 hover:text-[#286746] transition-colors font-semibold scroll-reveal delay-100"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsData.slice(0, 3).map((art, idx) => (
              <ImageSlideReveal key={art.slug} direction="up" delay={idx * 120} className="flex flex-col h-full rounded-2xl">
                <article className="interactive-card bg-white border border-[#E5EBE6] rounded-2xl overflow-hidden flex flex-col justify-between group shadow-sm h-full">
                  <div>
                    <Link href={`/insights/${art.slug}`} className="relative aspect-[16/10] block overflow-hidden">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover project-card-image transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-white/95 border border-[#D4DFD7] text-[#193D2B] text-[10px] font-mono uppercase px-3 py-1 rounded-full font-semibold shadow-2xs">
                        {art.category}
                      </div>
                    </Link>

                    <div className="p-6 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#718579]">
                        <span>{art.publishedDate}</span>
                        <span>{art.readTime}</span>
                      </div>

                      <h3 className="font-serif text-2xl text-[#121814] group-hover:text-[#193D2B] transition-colors leading-snug">
                        <Link href={`/insights/${art.slug}`}>
                          {art.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-[#475E50] line-clamp-2 leading-relaxed mt-2">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href={`/insights/${art.slug}`}
                      className="group/link inline-flex items-center gap-1.5 px-4 py-2 border border-[#D4DFD7] text-xs font-mono uppercase tracking-wider text-[#193D2B] font-semibold hover:text-white hover:bg-[#193D2B] rounded-full transition-all"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </ImageSlideReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="py-20 sm:py-28 bg-[#F8FAF7] border-b border-[#E5EBE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14 space-y-3 scroll-reveal">
            <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814]">
              Questions, answered.
            </h2>
            <p className="text-sm text-[#475E50]">
              Process, plant rental models, and maintenance guarantees.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const delayClass = `delay-${Math.min(500, (idx % 6) * 75 + 50)}`;
              return (
                <div
                  key={idx}
                  className={`interactive-card scroll-reveal ${delayClass} bg-white border border-[#E5EBE6] rounded-2xl overflow-hidden transition-colors shadow-2xs`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl text-[#121814] hover:text-[#193D2B] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#193D2B] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#475E50] leading-relaxed border-t border-[#E5EBE6]/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. CLOSING CONSULTATION BRIEF & ENQUIRY */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info & Studio Credentials */}
            <div className="lg:col-span-5 space-y-6 scroll-reveal-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold">
                STUDIO CONSULTATION
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#121814] font-normal leading-tight">
                Let’s shape your landscape.
              </h2>
              <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
                Discuss your site requirements and drawings directly with our studio architects.
              </p>

              {/* Direct verified contact cards */}
              <div className="space-y-3 pt-2">
                <div className="interactive-card scroll-reveal delay-100 p-4 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#718579] uppercase">Studio Director</span>
                    <p className="font-serif text-lg text-[#121814] font-semibold">Abhishek Suhas</p>
                  </div>
                  <a
                    href={`tel:${studioFacts.phone.replace(/[\s-]/g, "")}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#193D2B] border border-[#286746] text-white text-xs font-mono rounded-full hover:bg-[#286746] transition-colors shadow-2xs relative z-20"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{studioFacts.phone}</span>
                  </a>
                </div>

                <div className="interactive-card scroll-reveal delay-200 p-4 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#718579] uppercase">General Inquiries</span>
                    <p className="text-sm font-mono text-[#193D2B] font-medium">{studioFacts.email}</p>
                  </div>
                  <a
                    href={`mailto:${studioFacts.email}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#D4DFD7] text-[#193D2B] text-xs font-mono uppercase tracking-wider rounded-full hover:border-[#193D2B] hover:bg-[#F8FAF7] transition-colors relative z-20"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Email Studio</span>
                  </a>
                </div>

                <div className="interactive-card scroll-reveal delay-300 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#128C7E] uppercase font-bold">Instant Response</span>
                    <p className="text-xs text-[#475E50]">Share architectural drawings or site photos</p>
                  </div>
                  <a
                    href={`https://wa.me/919743030555?text=${encodeURIComponent(
                      "Hi Abhishek, I would like to schedule a site consultation for a landscape project."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#1fb355] transition-colors shadow-2xs relative z-20"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Service locations */}
              <div className="pt-4 border-t border-[#E5EBE6] text-xs font-mono text-[#718579] scroll-reveal delay-350">
                <span className="font-semibold text-[#121814] block mb-1">On-Site Consultation Available In:</span>
                <p>Bengaluru (HQ & Same-Day Audits) · Hyderabad · Chennai · Pune</p>
              </div>
            </div>

            {/* Right: Real Interactive Submission Form */}
            <div className="lg:col-span-7 scroll-reveal-right delay-150">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
