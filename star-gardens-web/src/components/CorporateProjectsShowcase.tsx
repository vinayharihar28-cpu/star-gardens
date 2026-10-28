"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { Project } from "@/data/projects";

interface Props {
  projects: Project[];
}

export default function CorporateProjectsShowcase({ projects }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterTabs = [
    { id: "All", label: "All Corporate Projects" },
    { id: "Tech Campuses", label: "Tech Parks & AMCs" },
    { id: "Biophilic Interiors", label: "Biophilic Workspaces" },
    { id: "Living Walls", label: "Vertical Bio-Walls" },
    { id: "Infrastructure", label: "Infrastructure & Hospitality" },
  ];

  const matchesFilter = (p: Project, filter: string) => {
    if (filter === "All") return true;
    if (filter === "Tech Campuses") {
      return (
        p.slug.includes("abb") ||
        p.slug.includes("ola") ||
        p.slug.includes("wipro") ||
        p.slug.includes("swiss-re")
      );
    }
    if (filter === "Biophilic Interiors") {
      return (
        p.slug.includes("wsp") ||
        p.slug.includes("2gethr") ||
        p.slug.includes("novo-nordisk") ||
        p.slug.includes("swiss-re")
      );
    }
    if (filter === "Living Walls") {
      return p.slug.includes("living-walls") || p.sector === "Vertical Gardens";
    }
    if (filter === "Infrastructure") {
      return p.slug.includes("wabag") || p.slug.includes("hilton");
    }
    return true;
  };

  const filteredProjects = projects.filter((p) => matchesFilter(p, activeFilter));

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#E5EBE6] pb-6">
        <div 
          role="tablist" 
          aria-label="Filter corporate projects"
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none w-full sm:w-auto"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#193D2B] text-white font-bold shadow-md shadow-[#193D2B]/15 scale-[1.02]"
                    : "bg-white text-[#475E50] hover:text-[#193D2B] hover:bg-[#F0F5F1] border border-[#D4DFD7]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="text-xs font-mono text-[#718579] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#286746] animate-pulse" />
          <span>Showing {filteredProjects.length} enterprise case studies</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => {
          const mainMetric = project.metrics[0];
          const secondMetric = project.metrics[1];

          return (
            <article
              key={project.slug}
              className="group flex flex-col bg-white rounded-3xl border border-[#E5EBE6] hover:border-[#193D2B]/30 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Media Container */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative aspect-[16/10] overflow-hidden block bg-[#F0F5F1]"
              >
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Primary Metric Pill */}
                {mainMetric && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md border border-[#D4DFD7] text-[#193D2B] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full shadow-sm">
                      <Sparkles className="w-3 h-3 text-[#286746]" />
                      {mainMetric.value}
                    </span>
                  </div>
                )}

                {/* Location Pill */}
                <div className="absolute bottom-4 left-4 z-10 text-white/90 text-xs font-mono flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#A3E635]" />
                  <span className="truncate max-w-[220px]">{project.location}</span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#718579]">
                    <span className="flex items-center gap-1.5 font-semibold text-[#193D2B]">
                      <Building2 className="w-3.5 h-3.5" />
                      {project.client}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#121814] group-hover:text-[#193D2B] transition-colors leading-snug font-normal">
                    <Link href={`/projects/${project.slug}`} className="hover:underline">
                      {project.title}
                    </Link>
                  </h3>
                </div>

                {/* Scope Badges */}
                <div className="pt-3 border-t border-[#F0F5F1] space-y-3">
                  {secondMetric && (
                    <div className="flex items-center justify-between text-xs font-mono bg-[#F8FAF7] px-3 py-2 rounded-xl border border-[#E5EBE6]">
                      <span className="text-[#718579]">{secondMetric.label}</span>
                      <span className="font-semibold text-[#193D2B]">{secondMetric.value}</span>
                    </div>
                  )}

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-mono font-bold uppercase tracking-wider text-[#193D2B] group-hover:text-[#286746] pt-1"
                  >
                    <span>View Project</span>
                    <div className="w-7 h-7 rounded-full bg-[#F0F5F1] group-hover:bg-[#193D2B] group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
