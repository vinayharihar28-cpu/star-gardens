import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Sprout, ShieldCheck, Award, Users, ArrowUpRight } from "lucide-react";
import { nurseriesData, studioFacts } from "@/data/nurseries";
import ContourSvg from "@/components/ContourSvg";

export const metadata = {
  title: "About the Studio | Star Gardens — Landscape Architecture & Horticulture",
  description: "Star Gardens is a landscape architecture and design practice established in 2009 in Bengaluru. Rooted in multi-generational farming with 70 acres of production nurseries.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-white text-[#121814]">
      {/* Editorial Header */}
      <section className="relative py-20 sm:py-28 border-b border-[#E5EBE6] bg-[#F8FAF7] overflow-hidden">
        {/* Subtle Contour Background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <ContourSvg className="w-full h-full" />
        </div>
        <div className="absolute inset-0 arch-grid-mosaic pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#D4DFD7] text-[#193D2B] text-xs font-mono uppercase tracking-widest rounded-xs shadow-2xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#193D2B] animate-pulse" />
              Practice Profile · Established 2009 · Bengaluru
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#121814] font-normal leading-[1.1] tracking-tight">
              Growers, horticulturists, <span className="italic text-[#193D2B]">architects</span>.
            </h1>
            <p className="text-base sm:text-xl text-[#475E50] font-light leading-relaxed">
              Star Gardens hails from a family of growers who have cultivated plants across South India since 2009. We understand both the architectural geometry of built space and the biological reality of living soil.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Philosophy Split */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 scroll-reveal">
            <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
              [ THE LIVING LANDSCAPE PHILOSOPHY ]
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal leading-snug">
              Why an architect who also farms builds better landscapes.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#475E50] leading-relaxed">
              <p>
                Most landscape contractors operate as pure brokers. They produce CAD renders, win tenders, and then scramble to procure saplings from random roadside nurseries. The resulting plants are often stressed, root-bound, and poorly acclimatized, leading to rapid die-offs.
              </p>
              <p>
                Star Gardens was founded on the opposite premise. Coming from a farming lineage, we began by growing our own plants. Today, our 70 acres of dedicated production farmland in Andhra Pradesh and Karnataka hold hundreds of thousands of healthy, acclimatized palms, exotic trees, shrubs, and indoor foliage.
              </p>
              <p>
                When our landscape architects draw a site plan, they specify plant varieties thriving in our own fields. The plants that arrive on your site were pruned, watered, and monitored by the exact same horticultural family that cares for them under our Annual Maintenance Contracts.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="stat-card-hover scroll-reveal p-5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xs shadow-2xs">
                <span className="font-serif text-3xl sm:text-4xl text-[#193D2B] block font-bold">15+</span>
                <span className="text-xs text-[#718579] font-mono">[ YEARS IN PRACTICE ]</span>
              </div>
              <div className="stat-card-hover scroll-reveal delay-100 p-5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xs shadow-2xs">
                <span className="font-serif text-3xl sm:text-4xl text-[#193D2B] block font-bold">70</span>
                <span className="text-xs text-[#718579] font-mono">[ ACRES FARMLAND ]</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="interactive-card scroll-reveal delay-150 relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border border-[#E5EBE6]">
              <Image
                src="/images/nursery/tropical-foliage-cultivation.jpg"
                alt="Tropical foliage cultivation at Star Gardens nursery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white border border-[#193D2B] text-[#121814] p-5 rounded-sm max-w-xs shadow-xl hidden sm:block z-20 scroll-reveal delay-250">
              <p className="font-serif italic text-base text-[#193D2B]">
                "A design should never wait on an external supplier."
              </p>
              <span className="text-[11px] font-mono text-[#718579] mt-1.5 block">
                — Star Gardens Cultivation Principle
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Nursery Farmlands Detailed Breakdown */}
      <section className="py-20 sm:py-28 bg-[#F8FAF7] border-y border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3 scroll-reveal">
            <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
              [ CULTIVATION INFRASTRUCTURE ]
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
              70 Acres across 4 strategic microclimates.
            </h2>
            <p className="text-sm sm:text-base text-[#475E50]">
              Each facility is chosen for its unique soil chemistry, altitude, and climatic conditions to cultivate specific botanical classes.
            </p>
          </div>

          <div className="space-y-8">
            {nurseriesData.map((nur, idx) => (
              <div
                key={nur.id}
                className="interactive-card scroll-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#E5EBE6] rounded-sm p-6 sm:p-8 shadow-md"
              >
                <div className="lg:col-span-5 relative aspect-[16/10] rounded-xs overflow-hidden border border-[#E5EBE6]">
                  <Image
                    src={nur.image}
                    alt={nur.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 border border-[#D4DFD7] text-[#193D2B] text-xs font-mono px-3 py-1 rounded-xs backdrop-blur-xs font-semibold shadow-2xs">
                    {nur.acreage} ACRES
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase text-[#193D2B] font-semibold">
                      Location 0{idx + 1} · {nur.state}
                    </span>
                    <span className="text-xs font-mono text-[#718579]">
                      Established {nur.established}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#121814]">
                    {nur.name}
                  </h3>

                  <p className="text-sm text-[#475E50] leading-relaxed">
                    {nur.focus}
                  </p>

                  <div className="p-3.5 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xs text-xs text-[#475E50]">
                    <strong className="text-[#193D2B]">Soil & Microclimate:</strong> {nur.soilAndClimate}
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#193D2B] mb-2 font-semibold">
                      Key Botanical Specializations:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#475E50]">
                      {nur.keySpecialties.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#193D2B] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The In-House Crew & Gardeners */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 scroll-reveal">
            <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
              [ ACCOUNTABILITY ON SITE ]
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal leading-snug">
              The crew who plant your space are the crew who look after it.
            </h2>
            <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
              We do not outsource execution to casual day-laborers. Star Gardens employs a dedicated, full-time workforce of trained horticulturists, irrigation mechanics, and uniform-clad gardeners.
            </p>
            <ul className="space-y-4 text-sm text-[#475E50]">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#193D2B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#121814]">Background-Verified Technicians:</strong> Seamless security clearances for multinational IT tech parks and high-security financial campuses.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#193D2B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#121814]">Horticultural Training:</strong> Regular continuing education in organic pest mitigation, sub-irrigation maintenance, and soil moisture telemetry.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#193D2B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#121814]">Single Point of Contact:</strong> A dedicated studio coordinator handles scheduling, client requests, and monthly digital audit reports.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#193D2B] text-white text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-[#286746] transition-all transform active:scale-95 shadow-md shadow-[#193D2B]/15"
              >
                <span>Schedule Studio Meeting</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4 scroll-reveal-right delay-150">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#E5EBE6] shadow-md">
              <Image
                src="/images/amc/gardener-servicing-office-planters.jpg"
                alt="Star Gardens gardener maintaining office planter"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-[#E5EBE6] shadow-md mt-8">
              <Image
                src="/images/amc/team-member-horticulture-watering.jpg"
                alt="Star Gardens horticultural specialist inspecting foliage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
