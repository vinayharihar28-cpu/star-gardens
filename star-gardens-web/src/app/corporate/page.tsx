import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Leaf, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Droplet, 
  Users2, 
  Phone, 
  Mail, 
  MapPin, 
  FileCheck2, 
  TrendingUp, 
  Layers,
  ArrowRight
} from "lucide-react";
import { projectsData } from "@/data/projects";
import ContourSvg from "@/components/ContourSvg";
import CorporateProjectsShowcase from "@/components/CorporateProjectsShowcase";
import CorporateEngagementModels from "@/components/CorporateEngagementModels";

export const metadata = {
  title: "Corporate Landscaping & Workspace Biophilia | Star Gardens Bengaluru",
  description: "Enterprise biophilic landscaping, desk-side sub-irrigation runs, modular living walls, and turnkey facility AMCs across Bengaluru tech parks for Swiss Re, ABB, Ola, WSP, and Novo Nordisk.",
};

export default function CorporatePage() {
  // Filter all projects that have corporate relevance
  const corporateProjects = projectsData.filter(
    (p) =>
      p.sector === "Corporate" ||
      p.sector === "Vertical Gardens" ||
      p.slug.includes("abb") ||
      p.slug.includes("ola") ||
      p.slug.includes("novo-nordisk") ||
      p.slug.includes("wipro") ||
      p.slug.includes("hilton")
  );

  const clientLogos = [
    { name: "Swiss Re", location: "Embassy Golf Links, Domlur", scope: "3,00,000 sq.ft Biophilia & AMC" },
    { name: "ABB India", location: "Peenya Industrial Complex", scope: "₹3.28 Cr External Grounds AMC" },
    { name: "ANI Technologies (Ola)", location: "Koramangala HQ", scope: "4,50,000 sq.ft Workplace Greenery" },
    { name: "WSP Global", location: "Manyata Tech Park", scope: "620 Workstations & Curved Planters" },
    { name: "Novo Nordisk", location: "Bengaluru Healthcare Campus", scope: "Clean-Air Plant Care AMC" },
    { name: "Wipro Technologies", location: "Koramangala IT Campus", scope: "Pedestrian Tree Boulevards & AMC" },
    { name: "2gethr Spaces", location: "Richmond Road", scope: "Entrance Step Terraces & Cafe Courtyard" },
    { name: "Hotel Hilton & EGL", location: "Embassy Golf Links", scope: "2-Acre 5-Star Grounds & Waterbodies" },
    { name: "Zyeta Interiors", location: "Enterprise Architecture", scope: "Corporate Biophilic Integration" },
    { name: "VA Tech Wabag", location: "Public Infrastructure", scope: "₹2.98 Cr Industrial Landscaping" },
  ];

  const valuePillars = [
    {
      icon: Leaf,
      title: "Design Intelligence & Well-Being",
      desc: "Workplace foliage scientifically aligned to LEED & WELL Building standards. Optimized for VOC absorption, acoustic dampening, and eye-strain reduction in open floor plans.",
    },
    {
      icon: Droplet,
      title: "Zero-Leak Sub-Irrigation Engineering",
      desc: "Double-walled pot-in-pot drainage liners engineered for clean indoor environments. Zero water leakage onto raised data cabling, carpet tiles, or electrical channels.",
    },
    {
      icon: Layers,
      title: "Direct Nursery Sourcing (70 Acres)",
      desc: "We own and cultivate 70 acres of production farms in Kumbalgodu, Madikeri, Punganur, and Rajahmundry. No middleman markups, with healthy, acclimatized stock ready for rapid deployment.",
    },
    {
      icon: ShieldCheck,
      title: "End-to-End Single-Point Ownership",
      desc: "From concept spatial planning and 3D biophilic models to turnkey civil installation and weekly dedicated horticultural care, Star Gardens takes full responsibility.",
    },
    {
      icon: TrendingUp,
      title: "Facility Manager Peace of Mind",
      desc: "Serving 175+ active corporate clients with transparent SLA reports, certified background-verified technicians, and guaranteed 48-hour plant replacement commitments.",
    },
    {
      icon: Users2,
      title: "Flexible Capex & Opex Models",
      desc: "Tailored to corporate financial cycles: Choose Capex (Turnkey Build), Opex (Plant Subscription / Rental), or dedicated AMC for existing enterprise landscapes.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-white text-[#121814]">
      {/* 1. Hero Section */}
      <section className="relative py-14 sm:py-24 border-b border-[#E5EBE6] bg-[#F8FAF7] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <ContourSvg className="w-full h-full" />
        </div>
        <div className="absolute inset-0 arch-grid-mosaic pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#D4DFD7] rounded-full text-xs font-mono uppercase tracking-widest text-[#193D2B] font-bold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#286746] animate-pulse" />
              Corporate Landscaping Services · Bengaluru, Hyderabad, Chennai, Pune
            </div>

            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl text-[#121814] font-normal leading-[1.1] tracking-tight">
              Corporate landscapes, <span className="italic text-[#193D2B]">engineered</span> for enterprise performance.
            </h1>

            <p className="text-base sm:text-xl text-[#475E50] font-light leading-relaxed max-w-2xl">
              From 4.5 lakh sq. ft tech campuses to high-performance desk planter runs, living bio-walls, and dedicated facility AMCs. Star Gardens transforms corporate workplaces into living, breathing assets.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#286746] transition-all transform active:scale-95 shadow-md shadow-[#193D2B]/15 inline-flex items-center gap-2"
              >
                <span>Schedule Corporate Site Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#corporate-projects"
                className="px-6 py-3.5 bg-white border border-[#D4DFD7] hover:border-[#193D2B] text-[#193D2B] font-mono text-xs uppercase tracking-wider rounded-full transition-all hover:bg-[#F0F5F1]"
              >
                Explore Realized Case Studies
              </a>
            </div>
          </div>

          {/* Key Enterprise KPI Metric Bar */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#E5EBE6]">
            <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E5EBE6] shadow-2xs">
              <span className="block font-serif text-3xl sm:text-4xl text-[#193D2B] font-normal">175+</span>
              <span className="block text-xs font-mono uppercase tracking-wider text-[#718579] mt-1">Active Corporate AMCs</span>
            </div>
            <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E5EBE6] shadow-2xs">
              <span className="block font-serif text-3xl sm:text-4xl text-[#193D2B] font-normal">70 Acres</span>
              <span className="block text-xs font-mono uppercase tracking-wider text-[#718579] mt-1">Nursery Production Farmland</span>
            </div>
            <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E5EBE6] shadow-2xs">
              <span className="block font-serif text-3xl sm:text-4xl text-[#193D2B] font-normal">4,50,000+</span>
              <span className="block text-xs font-mono uppercase tracking-wider text-[#718579] mt-1">Sq. Ft Greened in Single Sites</span>
            </div>
            <div className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E5EBE6] shadow-2xs">
              <span className="block font-serif text-3xl sm:text-4xl text-[#193D2B] font-normal">4 Cities</span>
              <span className="block text-xs font-mono uppercase tracking-wider text-[#718579] mt-1">BLR · HYD · CHN · PNQ</span>
            </div>
          </div>

          {/* Tri-Panel Curated Corporate Hero Showcase */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-lg group">
              <Image
                src="/images/corporate/wsp-floor-greenery-vista.jpg"
                alt="WSP Manyata Tech Park Floor Greenery Vista"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3E635] block">Manyata Tech Park</span>
                <h4 className="font-serif text-lg text-white font-medium">WSP Technical Campus</h4>
                <p className="text-xs text-white/80 line-clamp-1">620 workstations integrated with custom curved planters</p>
              </div>
            </div>

            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-lg group">
              <Image
                src="/images/corporate/swiss-re-embassy-golf-links-reception.jpg"
                alt="Swiss Re Embassy Golf Links Reception Biophilia"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3E635] block">Embassy Golf Links</span>
                <h4 className="font-serif text-lg text-white font-medium">Swiss Re Headquarters</h4>
                <p className="text-xs text-white/80 line-clamp-1">3,00,000 sq.ft greened with sub-irrigation desk runs</p>
              </div>
            </div>

            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-lg group">
              <Image
                src="/images/corporate/2gethr-richmond-road-entrance-steps.jpg"
                alt="2gethr Richmond Road Entrance Landscape"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3E635] block">Richmond Road</span>
                <h4 className="font-serif text-lg text-white font-medium">2gethr Co-Working Oasis</h4>
                <p className="text-xs text-white/80 line-clamp-1">Terraced entrance steps & biophilic open-air cafe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Enterprise Client Trust Grid */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#286746] font-semibold">
              Trusted by Leading Multinationals & Tech Parks
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#121814]">
              Partnering with India’s foremost corporate campuses.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 bg-[#F8FAF7] hover:bg-white rounded-2xl border border-[#E5EBE6] hover:border-[#193D2B]/30 transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-sm"
              >
                <div>
                  <span className="font-serif text-base sm:text-lg text-[#121814] font-medium block">
                    {client.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#718579] block mt-1 truncate">
                    {client.location}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#193D2B] font-semibold mt-3 pt-2 border-t border-[#E5EBE6] block truncate">
                  {client.scope}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Corporate Value Propositions (From Deck) */}
      <section className="py-16 sm:py-24 bg-[#F8FAF7] border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#D4DFD7] rounded-full text-xs font-mono uppercase tracking-wider text-[#193D2B] font-bold shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#286746]" />
              The Star Gardens Enterprise Advantage
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] leading-tight">
              Why Facility Directors & Workplace Heads choose Star Gardens.
            </h2>
            <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
              We bridge botanical horticultural excellence with rigid corporate engineering standards—ensuring zero water leakages, guaranteed plant health, and complete single-source accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {valuePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EBE6] hover:border-[#193D2B]/30 transition-all duration-300 shadow-sm hover:shadow-md space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F0F5F1] text-[#193D2B] flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#121814] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#F0F5F1] flex items-center gap-1.5 text-xs font-mono text-[#193D2B] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#286746]" />
                    <span>Verified Enterprise Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Corporate Projects Showcase */}
      <section id="corporate-projects" className="py-16 sm:py-24 bg-white border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#286746] font-bold">
              Realized Corporate Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] leading-tight">
              Enterprise landscape executions across South India.
            </h2>
            <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
              Explore realized commercial campus landscapes, indoor workstation biophilic systems, living bio-walls, and long-term facility AMCs.
            </p>
          </div>

          <CorporateProjectsShowcase projects={corporateProjects} />
        </div>
      </section>

      {/* 5. Interactive Engagement Models */}
      <section className="py-16 sm:py-24 bg-[#F8FAF7] border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#286746] font-bold">
              Procurement & Delivery Models
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] leading-tight">
              Flexible contracts tailored to your financial calendar.
            </h2>
            <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
              Whether you require capital turnkey build, off-balance-sheet plant subscription rental, or dedicated AMC for existing landscapes.
            </p>
          </div>

          <CorporateEngagementModels />
        </div>
      </section>

      {/* 6. Corporate Workshops & Employee Well-Being Initiatives */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E5EBE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F5F1] text-[#193D2B] rounded-full text-xs font-mono uppercase tracking-wider font-bold">
                <Users2 className="w-3.5 h-3.5" />
                Employee Engagement & Wellness
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] leading-tight">
                Corporate Landscape Workshops & Green Initiatives.
              </h2>

              <p className="text-sm sm:text-base text-[#475E50] leading-relaxed">
                As featured in our corporate initiatives deck, Star Gardens conducts interactive, hands-on planting sessions for corporate teams. We blend horticultural science with team bonding—guiding employees to style their own bonsai, build terrariums, or craft Japanese Kokedamas to take home.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F0F5F1] text-[#193D2B] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#286746]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#334D3D]">
                    <strong>Turnkey On-Site Delivery:</strong> All potting soils, specialized drainage pumice, bespoke planters, and botanical specimens delivered directly to your tech campus.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F0F5F1] text-[#193D2B] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#286746]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#334D3D]">
                    <strong>Proven Track Record:</strong> Scalable formats accommodating 15 to 300+ employees simultaneously during Earth Month, ESG campaigns, and company off-sites.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F0F5F1] text-[#193D2B] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#286746]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#334D3D]">
                    <strong>Take-Home Biophilic Plants:</strong> Each participant leaves with an acclimatized desk companion and a comprehensive digital care guide.
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#286746] transition-all transform active:scale-95 shadow-md shadow-[#193D2B]/15"
                >
                  <span>Book a Corporate Workshop Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-md">
                  <Image
                    src="/images/workshops/corporate-planting-workshop-main.jpg"
                    alt="Corporate planting workshop main session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-md">
                  <Image
                    src="/images/workshops/hands-on-kokedama-creation-workshop.jpg"
                    alt="Hands on kokedama creation workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-md">
                  <Image
                    src="/images/workshops/corporate-team-building-planting-session.jpg"
                    alt="Corporate team building planting session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-md">
                  <Image
                    src="/images/workshops/team-green-learning-takeaway-planters.jpg"
                    alt="Team green learning takeaway planters"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Comprehensive Conversion Banner & Site Audit Invitation */}
      <section className="py-20 bg-[#F8FAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 bg-[#193D2B] border border-[#286746] rounded-3xl text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 arch-grid-mosaic opacity-10 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E8F5C4] font-semibold block">
                  FAST-TRACK CORPORATE CONSULTATION
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl leading-tight text-white">
                  Ready to upgrade your workspace biophilia or review campus AMC?
                </h3>
                <p className="text-sm sm:text-base text-[#D4DFD7] max-w-2xl leading-relaxed">
                  Our principal horticulturists conduct on-site evaluations across Bengaluru, Hyderabad, Chennai, and Pune. We provide detailed botanical health reports, leak audits, and Capex/Rental proposals within 48 hours.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-[#D4DFD7]">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#A3E635]" />
                    Abhishek Suhas: +91 97430 30555
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#A3E635]" />
                    abhi@stargardens.in
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-[#193D2B] font-bold text-xs uppercase tracking-widest rounded-full hover:bg-[#F8FAF7] transition-all transform active:scale-95 text-center shadow-lg hover:scale-105 duration-300"
                >
                  Book Free Corporate Site Audit
                </Link>
                <a
                  href="tel:+919743030555"
                  className="px-8 py-4 bg-transparent border border-white/30 text-white font-mono text-xs uppercase tracking-widest rounded-full hover:bg-white/10 transition-all text-center"
                >
                  Call +91 97430 30555
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
