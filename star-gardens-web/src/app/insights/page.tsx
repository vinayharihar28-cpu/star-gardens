import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { insightsData } from "@/data/insights";
import ContourSvg from "@/components/ContourSvg";

export const metadata = {
  title: "Editorial & Insights | Star Gardens — Landscape Architecture",
  description: "Horticultural insights, plant rental financial models, living wall engineering guidelines, and plant maintenance frameworks from Star Gardens.",
};

export default function InsightsPage() {
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
              Insights from the <span className="italic text-[#193D2B]">field</span> and studio.
            </h1>
            <p className="text-base sm:text-xl text-[#475E50] font-light leading-relaxed">
              Practical guides on workspace biophilia, vertical garden engineering, plant AMC scope, and financial decision-making for facility managers and property owners.
            </p>
          </div>
          {/* Rectangular Insights Hero Screen */}
          <div className="mt-8 sm:mt-12 scroll-reveal">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-sm overflow-hidden border border-[#D4DFD7] shadow-xl">
              <Image
                src="/images/pages/insights-hero.jpg"
                alt="Star Gardens botanical research and landscape architecture study library"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 text-white">
                <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-white/95 text-[#193D2B] font-bold px-2.5 py-1 rounded-xs backdrop-blur-xs shadow-2xs">
                  Studio Research & Horticultural Insights · Soil Telemetry & Biophilic Guidelines
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid - Rectangular Images with Content Right Below */}
      <section className="py-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {insightsData.map((art, idx) => (
            <article
              key={art.slug}
              className={`interactive-card scroll-reveal ${idx % 2 === 1 ? 'delay-150' : 'delay-75'} bg-white border border-[#E5EBE6] rounded-sm overflow-hidden flex flex-col justify-between group shadow-sm`}
            >
              <div>
                <Link href={`/insights/${art.slug}`} className="relative aspect-[16/10] block overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover project-card-image transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3 bg-white/95 border border-[#D4DFD7] text-[#193D2B] text-[10px] font-mono uppercase px-2.5 py-1 rounded-xs backdrop-blur-xs font-semibold shadow-2xs">
                    {art.category}
                  </div>
                </Link>

                <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 sm:gap-4 text-[11px] font-mono text-[#718579]">
                    <span>{art.publishedDate}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#193D2B]" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#121814] group-hover:text-[#193D2B] transition-colors leading-snug">
                    <Link href={`/insights/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h3>

                  <p className="font-serif italic text-base sm:text-lg text-[#193D2B]">
                    "{art.subtitle}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed pt-1">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-8 pt-0 border-t border-[#E5EBE6] mt-4">
                <Link
                  href={`/insights/${art.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#193D2B] text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#286746] transition-colors shadow-2xs"
                >
                  <span>Read In-Depth Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
