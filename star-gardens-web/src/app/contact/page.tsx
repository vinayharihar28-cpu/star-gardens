import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import ContourSvg from "@/components/ContourSvg";
import { studioFacts } from "@/data/nurseries";

export const metadata = {
  title: "Contact & Site Consultations | Star Gardens Bengaluru",
  description: "Schedule on-site landscape consultations, discuss corporate plant rental, vertical living walls, or Annual Maintenance Contracts with Star Gardens.",
};

const faqs = [
  {
    q: "What does Star Gardens do?",
    a: "We are an integrated landscape architecture, cultivation, and maintenance practice. We plan, design, build, and maintain landscapes for residential villas, corporate offices, tech parks, and hospitality resorts—using plants grown on our own 70 acres of production nurseries."
  },
  {
    q: "Do you offer office plants on rent in Bengaluru?",
    a: "Yes. We offer short-term event rentals (1 to 2 days) for exhibitions and summits, as well as 2 to 3-year corporate plant subscriptions with complete weekly AMC and free specimen replacements included."
  },
  {
    q: "What is covered under a Star Gardens Plant AMC?",
    a: "An Annual Maintenance Contract covers regular servicing by our uniform-clad in-house gardeners, soil moisture testing, foliar polishing, organic pest prevention, and 100% free replacement of any plant that declines. We maintain landscapes we built as well as existing third-party installations across 175+ enterprise accounts."
  },
  {
    q: "Which cities do you actively serve?",
    a: "Our core headquarters and dispatch holding facility are in Bengaluru. We also actively deliver and maintain projects in Hyderabad, Chennai, and Pune, with regional resort projects across the Western Ghats and Coorg."
  },
  {
    q: "Can Star Gardens build vertical gardens for office atriums and exterior facades?",
    a: "Yes. We engineer rigid polymer modular cassette living walls with automated closed-loop drip fertigation. Notable commercial installations include ABB and WSP offices in Bengaluru."
  },
  {
    q: "Do you host team workshops or CSR plantation drives?",
    a: "Yes. We conduct hands-on corporate team workshops (Japanese Kokedama, micro-gardens) for employee bonding. We also supply native Deccan shade saplings from our 70-acre farms for corporate CSR environmental drives at zero cost."
  }
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-white text-[#121814]">
      {/* Header */}
      <section className="relative py-14 sm:py-24 border-b border-[#E5EBE6] bg-[#F8FAF7] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <ContourSvg className="w-full h-full" />
        </div>
        <div className="absolute inset-0 arch-grid-mosaic pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl text-[#121814] font-normal leading-[1.1] tracking-tight">
              Discuss your site with our <span className="italic text-[#193D2B]">studio</span> architects.
            </h1>
            <p className="text-sm sm:text-xl text-[#475E50] font-light leading-relaxed">
              We welcome preliminary site inquiries, architectural plan reviews, and consultations for residential developments, corporate campuses, vertical walls, and long-term maintenance.
            </p>
          </div>

          {/* Rectangular Studio Hero Screen - Mobile-first rectangular image with details below */}
          <div className="mt-8 sm:mt-12 scroll-reveal">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-xl">
              <Image
                src="/images/pages/contact-hero.jpg"
                alt="Star Gardens landscape architecture consultation studio and architectural planning desk"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 text-white">
                <span className="inline-block text-[10px] sm:text-xs font-mono uppercase tracking-wider bg-white/95 text-[#193D2B] font-bold px-3 py-1.5 rounded-full backdrop-blur-xs shadow-2xs">
                  Bengaluru Studio Consultation Desk · Material & Spatial Planning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid: Info + Enquiry Form - Stacked Cleanly on Mobile */}
      <section className="py-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-8 scroll-reveal-left">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
                STUDIO COORDINATES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121814]">
                Studio Leadership
              </h2>
              <div className="interactive-card scroll-reveal delay-100 p-5 sm:p-8 bg-white border border-[#E5EBE6] rounded-2xl space-y-6 shadow-md">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#718579] block">STUDIO DIRECTOR & FOUNDER</span>
                  <p className="font-serif text-2xl sm:text-3xl text-[#121814] font-semibold mt-1">{studioFacts.contactPerson}</p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <a
                    href={`tel:${studioFacts.phone.replace(/[\s-]/g, "")}`}
                    className="flex items-center gap-3 text-sm text-[#121814] hover:text-[#193D2B] transition-colors p-3 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xl"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#193D2B] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#718579] block">Direct Line</span>
                      <span className="font-mono font-bold text-[#193D2B]">{studioFacts.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${studioFacts.email}`}
                    className="flex items-center gap-3 text-sm text-[#121814] hover:text-[#193D2B] transition-colors p-3 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xl"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#193D2B] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono uppercase text-[#718579] block">Inquiry Email</span>
                      <span className="font-mono text-[#193D2B] font-medium text-xs sm:text-sm truncate block">{studioFacts.email}</span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/919743030555?text=${encodeURIComponent(
                      "Hi Abhishek, I would like to schedule a site consultation with Star Gardens."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[#128C7E] hover:text-[#075E54] transition-colors p-3 bg-[#25D366]/15 border border-[#25D366]/40 rounded-xl"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-2xs">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#128C7E] block font-bold">Instant Chat</span>
                      <span className="font-bold text-[#128C7E]">WhatsApp Coordinator</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* City Response Desks */}
            <div className="space-y-4 scroll-reveal delay-200">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
                REGIONAL COVERAGE
              </span>
              <h3 className="font-serif text-2xl text-[#121814]">
                Regional Service Locations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-1 shadow-2xs">
                  <span className="font-mono font-bold text-[#193D2B] block">BENGALURU (HQ)</span>
                  <p className="text-[#475E50] text-[11px] leading-relaxed">Same-day site audits, full dispatch & holding depot</p>
                </div>
                <div className="p-4 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-1 shadow-2xs">
                  <span className="font-mono font-bold text-[#193D2B] block">HYDERABAD</span>
                  <p className="text-[#475E50] text-[11px] leading-relaxed">Commercial IT campuses & corporate plant AMC</p>
                </div>
                <div className="p-4 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-1 shadow-2xs">
                  <span className="font-mono font-bold text-[#193D2B] block">CHENNAI</span>
                  <p className="text-[#475E50] text-[11px] leading-relaxed">Coastal landscaping & residential developments</p>
                </div>
                <div className="p-4 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-1 shadow-2xs">
                  <span className="font-mono font-bold text-[#193D2B] block">PUNE</span>
                  <p className="text-[#475E50] text-[11px] leading-relaxed">Corporate tech parks & vertical bio-walls</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real Enquiry Form */}
          <div className="lg:col-span-7 scroll-reveal-right delay-150">
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28 bg-[#F8FAF7] border-t border-[#E5EBE6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 scroll-reveal">
            <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#121814] font-normal">
              Frequently Answered Questions
            </h2>
            <p className="text-sm sm:text-base text-[#475E50]">
              Clear facts on contracts, nursery sourcing, replacement terms, and city coverage.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <details
                key={idx}
                className={`interactive-card scroll-reveal delay-${Math.min(500, (idx % 6) * 75 + 75)} group p-6 bg-white border border-[#E5EBE6] rounded-2xl transition-colors open:border-[#193D2B] shadow-2xs`}
              >
                <summary className="font-serif text-xl sm:text-2xl text-[#121814] cursor-pointer list-none flex items-center justify-between gap-4 font-normal">
                  <span>{f.q}</span>
                  <span className="text-xl font-mono text-[#193D2B] group-open:rotate-45 transition-transform duration-200 shrink-0 font-bold">
                    +
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed pt-4 border-t border-[#E5EBE6] mt-4">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
