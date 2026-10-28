import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectFilters from "@/components/ProjectFilters";
import ContourSvg from "@/components/ContourSvg";
import { projectsData } from "@/data/projects";

export const metadata = {
  title: "Selected Work & Case Studies | Star Gardens — Landscape Architecture",
  description: "Architectural landscape case studies delivered across Bengaluru, Embassy Golf Links, Richmond Road, and Manyata Tech Park by Star Gardens.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-20 bg-white text-[#121814]">
      {/* Header */}
      <section className="relative py-14 sm:py-24 border-b border-[#E5EBE6] bg-[#F8FAF7] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <ContourSvg className="w-full h-full" />
        </div>
        <div className="absolute inset-0 arch-grid-mosaic pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#121814] font-normal tracking-tight">
              Selected Projects
            </h1>
            <p className="text-sm sm:text-base text-[#475E50] font-light">
              Realized landscapes across corporate campuses, workspaces, and residences.
            </p>
          </div>

          {/* Rectangular Projects Showcase Hero Screen */}
          <div className="mt-8 sm:mt-12 scroll-reveal">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-xl">
              <Image
                src="/images/pages/projects-hero.jpg"
                alt="Star Gardens realized luxury landscape architecture case study with cantilevered bridge and reflection koi pond"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 text-white">
                <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-white/95 text-[#193D2B] font-bold px-3.5 py-1.5 rounded-full backdrop-blur-xs shadow-2xs">
                  Realized Works
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Filter and Grid */}
      <section className="py-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <ProjectFilters projects={projectsData} />
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-[#F8FAF7] border-t border-[#E5EBE6] text-[#121814]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="interactive-card scroll-reveal p-8 sm:p-12 bg-[#193D2B] border border-[#286746] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E8F5C4]">
                SITE FEASIBILITY & ADVISORY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">
                Planning a similar landscape intervention?
              </h3>
              <p className="text-sm sm:text-base text-[#D4DFD7] max-w-xl leading-relaxed">
                Site studies, botanical palettes, and technical specifications for commercial and residential developments.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-[#193D2B] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#F8FAF7] transition-all transform active:scale-95 whitespace-nowrap shadow-md hover:scale-105 duration-300"
            >
              <span>Discuss Site Requirements</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
