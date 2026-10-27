import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Building, Calendar, MapPin, Check, Leaf, ChevronRight } from "lucide-react";
import { projectsData, Project } from "@/data/projects";
import EnquiryForm from "@/components/EnquiryForm";
import ContourSvg from "@/components/ContourSvg";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Case Study | Star Gardens" };

  return {
    title: `${project.title} | Star Gardens Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for seamless navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <div className="pt-24 pb-20 bg-white text-[#121814]">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#718579] hover:text-[#193D2B] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Selected Work</span>
        </Link>
      </div>

      {/* Case Study Architectural Header */}
      <section className="relative py-16 sm:py-24 border-b border-[#E5EBE6] bg-[#F8FAF7] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <ContourSvg className="w-full h-full" />
        </div>
        <div className="absolute inset-0 arch-grid-mosaic pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#121814] font-normal leading-[1.08]">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-[#475E50] font-light leading-relaxed">
              {project.summary}
            </p>

            {/* Metadata Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#E5EBE6] text-xs font-mono">
              <div className="space-y-1">
                <span className="text-[10px] text-[#718579] block uppercase">[ CLIENT ]</span>
                <span className="text-sm font-serif text-[#121814] font-semibold">{project.client}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-[#718579] block uppercase">[ LOCATION ]</span>
                <span className="text-sm font-serif text-[#121814] font-semibold">{project.location}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-[#718579] block uppercase">[ YEAR DELIVERED ]</span>
                <span className="text-sm font-serif text-[#121814] font-semibold">{project.year}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-[#718579] block uppercase">[ CULTIVATION SOURCE ]</span>
                <span className="text-sm font-serif text-[#193D2B] font-bold">Star Gardens 70ac Farms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Featured Photography */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-sm overflow-hidden border border-[#E5EBE6] shadow-xl">
          <Image
            src={project.featuredImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-12 bg-[#F8FAF7] border-y border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#718579] tracking-wider">
                  [ {m.label} ]
                </span>
                <p className="font-serif text-2xl sm:text-4xl text-[#193D2B] font-bold">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative & Scope */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
                [ ARCHITECTURAL INTENT ]
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
                Project Overview & Spatial Execution
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#475E50] leading-relaxed pt-2">
                {project.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Scope Checklist */}
            <div className="pt-8 border-t border-[#E5EBE6] space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#121814]">
                Detailed Scope of Works
              </h3>
              <div className="space-y-3">
                {project.scope.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#475E50] p-3.5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xs shadow-2xs">
                    <Check className="w-4 h-4 text-[#193D2B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botanical Palette */}
            <div className="pt-8 border-t border-[#E5EBE6] space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#121814] flex items-center gap-2">
                <Leaf className="w-5 h-5 text-[#193D2B]" />
                <span>Botanical Specification Palette</span>
              </h3>
              <p className="text-xs text-[#718579]">
                Specimens propagated and acclimatized in our Rajahmundry & Punganur production nurseries for indoor resilience:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {project.botanicalPalette.map((plant, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xs text-xs font-mono text-[#193D2B] font-medium shadow-2xs"
                  >
                    {plant}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Contact Sticky Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <EnquiryForm defaultCategory={project.sector} />

              {/* Next Project Teaser */}
              <div className="p-6 bg-[#193D2B] border border-[#286746] rounded-sm space-y-3 shadow-xl text-white">
                <span className="text-[10px] font-mono uppercase text-[#E8F5C4]">[ NEXT CASE STUDY ]</span>
                <h4 className="font-serif text-2xl text-white">
                  {nextProject.title}
                </h4>
                <p className="text-xs text-[#D4DFD7] line-clamp-2 leading-relaxed">
                  {nextProject.summary}
                </p>
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#E8F5C4] pt-2 transition-colors"
                >
                  <span>Explore Intervention</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photographic Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#F8FAF7] border-t border-[#E5EBE6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
                [ ON-SITE DOCUMENTATION ]
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
                Photographic Details & Installation Vistas
              </h2>
              <p className="text-sm sm:text-base text-[#475E50]">
                Authentic photography from our installation handover and scheduled AMC maintenance visits.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-xs overflow-hidden border border-[#E5EBE6] shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} detail photographic vista ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
