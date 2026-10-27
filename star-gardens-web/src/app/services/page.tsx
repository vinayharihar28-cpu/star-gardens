import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Compass, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import CommercialStructuresStack from "@/components/CommercialStructuresStack";
import ElasticReelServices from "@/components/ElasticReelServices";
import ContourSvg from "@/components/ContourSvg";
import { servicesData } from "@/data/services";

export const metadata = {
  title: "Services & Working Models | Star Gardens — Landscape Architecture",
  description: "Comprehensive landscape architecture services, corporate plant rental, vertical bio-walls, plant AMC, and team workshops across Bengaluru, Hyderabad, Chennai & Pune.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 bg-white text-[#121814]">
      {/* Header */}
      <section className="relative py-20 sm:py-28 border-b border-[#E5EBE6] bg-[#F8FAF7] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <ContourSvg className="w-full h-full" />
        </div>
        <div className="absolute inset-0 arch-grid-mosaic pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#121814] font-normal leading-[1.1] tracking-tight">
              Architecture, cultivation, <span className="italic text-[#193D2B]">installation</span>, care.
            </h1>
            <p className="text-base sm:text-xl text-[#475E50] font-light leading-relaxed">
              We design and execute landscapes across eight specialized disciplines. Choose turnkey delivery end to end, or bring us in for specific architectural advisory, vertical bio-walls, plant rental, or dedicated AMC.
            </p>
          </div>
          {/* Rectangular Services Hero Screen */}
          <div className="mt-8 sm:mt-12 scroll-reveal">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-sm overflow-hidden border border-[#D4DFD7] shadow-xl">
              <Image
                src="/images/pages/services-hero.jpg"
                alt="Star Gardens multi-discipline corporate campus landscape design, living wall and water reflection pond"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 text-white">
                <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-white/95 text-[#193D2B] font-bold px-2.5 py-1 rounded-xs backdrop-blur-xs shadow-2xs">
                  Integrated Landscape Disciplines · Architecture, Living Bio-Walls & Horticulture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Elastic Reel Gallery */}
      <section className="py-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#E5EBE6]">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
                [ INTERACTIVE DISCIPLINE REEL ]
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal mt-1">
                Eight disciplines. One unified ecosystem.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5A7E66] max-w-md">
              Click or tap any discipline slice to expand full architectural scope, deliverables, and commercial models.
            </p>
          </div>

          {/* Elastic Reel Interactive Gallery Component */}
          <ElasticReelServices />
        </div>
      </section>

      {/* Interactive Working Model Matrix */}
      <section className="py-20 sm:py-28 bg-[#F8FAF7] border-y border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3 scroll-reveal">
            <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
              [ COMMERCIAL STRUCTURES ]
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
              Flexible engagement options for every project.
            </h2>
            <p className="text-sm sm:text-base text-[#475E50]">
              Whether you want to own your landscape assets, subscribe on an OpEx model, or contract dedicated horticultural maintenance.
            </p>
          </div>

          <div>
            <CommercialStructuresStack />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 sm:py-28 text-center max-w-4xl mx-auto px-4 bg-white scroll-reveal">
        <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B] block mb-3">
          [ ARCHITECTURAL CONSULTATION ]
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] mb-4">
          Need a customized landscape scope?
        </h2>
        <p className="text-sm sm:text-base text-[#475E50] mb-8 max-w-xl mx-auto leading-relaxed">
          Contact our studio to arrange an on-site survey or review architectural plans for your upcoming residential, corporate, or hospitality development.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-[#286746] transition-all transform active:scale-95 shadow-md shadow-[#193D2B]/15"
        >
          <span>Schedule Project Consultation</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
