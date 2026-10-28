"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Building, Calendar } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectFiltersProps {
  projects: Project[];
}

export default function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Corporate", "Residential", "Vertical Gardens", "Water Features"];

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.sector === activeCategory);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div 
        role="group" 
        aria-label="Filter projects by sector"
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
      >
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={isSelected}
              className={`px-5 py-2 text-xs font-mono tracking-wider whitespace-nowrap rounded-full transition-all ${
                isSelected
                  ? "bg-[#193D2B] text-white font-bold shadow-sm"
                  : "bg-white text-[#475E50] hover:bg-[#F8FAF7] hover:text-[#193D2B] border border-[#D4DFD7]"
              }`}
            >
              {cat}
              {cat === "All" && ` (${projects.length})`}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((proj, idx) => {
          const delays = ["delay-50", "delay-100", "delay-150", "delay-200", "delay-250", "delay-300"];
          return (
            <article
              key={proj.slug}
              className={`interactive-card scroll-reveal ${delays[idx % delays.length]} flex flex-col bg-white border border-[#E5EBE6] rounded-2xl overflow-hidden shadow-sm`}
            >
            {/* Image Container with Editorial Aspect Ratio */}
            <Link href={`/projects/${proj.slug}`} className="relative aspect-[16/10] overflow-hidden block">
              <Image
                src={proj.featuredImage}
                alt={proj.title}
                fill
                className="object-cover project-card-image transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              {/* Sector Tag Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/95 border border-[#D4DFD7] backdrop-blur-xs text-[#193D2B] text-[10px] font-mono uppercase tracking-wider rounded-full font-semibold shadow-2xs">
                  {proj.sector}
                </span>
              </div>
            </Link>

            {/* Content Details */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#718579] font-mono mb-2">
                  <span className="flex items-center gap-1 font-semibold text-[#193D2B]">
                    <Building className="w-3.5 h-3.5" />
                    {proj.client}
                  </span>
                  <span>{proj.year}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#121814] group-hover:text-[#193D2B] transition-colors leading-snug">
                  <Link href={`/projects/${proj.slug}`}>
                    {proj.title}
                  </Link>
                </h3>

                <p className="flex items-center gap-1.5 text-xs font-mono text-[#718579] mt-2">
                  <MapPin className="w-3 h-3 text-[#193D2B] shrink-0" />
                  <span className="truncate">{proj.location}</span>
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E5EBE6] flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#193D2B]">
                  {proj.metrics[0]?.value}
                </span>
                <Link
                  href={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#193D2B] border border-[#D4DFD7] group-hover:text-white group-hover:bg-[#193D2B] px-3.5 py-1.5 rounded-full transition-all font-semibold"
                  aria-label={`View project: ${proj.title}`}
                >
                  <span>View</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
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
