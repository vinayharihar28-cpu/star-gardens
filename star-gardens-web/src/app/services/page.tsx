import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Compass, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import WorkingModelInteractive from "@/components/WorkingModelInteractive";
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#D4DFD7] text-[#193D2B] text-xs font-mono uppercase tracking-widest rounded-xs shadow-2xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#193D2B] animate-pulse" />
              Capabilities & Delivery Systems · Eight Disciplines
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#121814] font-normal leading-[1.1] tracking-tight">
              Architecture, cultivation, <span className="italic text-[#193D2B]">installation</span>, care.
            </h1>
            <p className="text-base sm:text-xl text-[#475E50] font-light leading-relaxed">
              We design and execute landscapes across eight specialized disciplines. Choose turnkey delivery end to end, or bring us in for specific architectural advisory, vertical bio-walls, plant rental, or dedicated AMC.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((svc, idx) => (
            <div
              key={svc.id}
              className={`interactive-card scroll-reveal ${idx % 2 === 1 ? 'delay-150' : 'delay-75'} bg-white border border-[#E5EBE6] rounded-sm overflow-hidden flex flex-col justify-between group shadow-sm`}
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={svc.heroImage}
                    alt={svc.title}
                    fill
                    className="object-cover project-card-image transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 bg-white/95 border border-[#D4DFD7] text-[#193D2B] text-[10px] font-mono uppercase px-2.5 py-1 rounded-xs backdrop-blur-xs font-semibold shadow-2xs">
                    {svc.sectorTag}
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <span className="text-xs font-mono text-[#193D2B] font-semibold">
                    [ SERVICE 0{idx + 1} ]
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#121814] group-hover:text-[#193D2B] transition-colors">
                    <Link href={`/services/${svc.slug}`}>
                      {svc.title}
                    </Link>
                  </h3>
                  <p className="font-serif italic text-base text-[#193D2B]">
                    "{svc.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed pt-1">
                    {svc.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-[#E5EBE6] space-y-2">
                    <span className="text-[11px] font-mono uppercase text-[#193D2B] font-semibold block">
                      Key Deliverables:
                    </span>
                    {svc.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#475E50]">
                        <Check className="w-3.5 h-3.5 text-[#193D2B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#E5EBE6] mt-4">
                <span className="text-[11px] font-mono text-[#718579] truncate max-w-[200px]">
                  {svc.workingModel.slice(0, 32)}...
                </span>
                <Link
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#193D2B] text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#286746] transition-colors shadow-2xs"
                >
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
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

          <div className="scroll-reveal delay-150">
            <WorkingModelInteractive />
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
