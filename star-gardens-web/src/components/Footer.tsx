"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin, Lock, MessageCircle } from "lucide-react";
import { studioFacts } from "@/data/nurseries";
import CrmModal from "./CrmModal";

export default function Footer() {
  const [crmModalOpen, setCrmModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#F8FAF7] text-[#121814] border-t border-[#E5EBE6] pt-16 pb-12 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 arch-grid-mosaic opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#E5EBE6]">
            {/* Col 1: Studio Identity (2 cols on large) */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block group" title="Star Gardens — Home">
                <Image
                  src="/images/logo/logo.png"
                  alt="Star Gardens - Landscape Architecture & Design Studio"
                  width={240}
                  height={48}
                  className="h-11 sm:h-12 w-auto object-contain mb-2 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span className="block font-sketch text-sm text-[#193D2B] font-medium">
                  Landscape Architecture & Design Studio
                </span>
              </Link>
              <p className="text-sm text-[#475E50] max-w-sm leading-relaxed">
                Living Landscapes, Digital Precision. Multi-generational farming heritage since 2009,
                nurturing 70 acres of production nurseries across Karnataka and Andhra Pradesh.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#193D2B]">
                <span className="px-3 py-1 bg-white border border-[#D4DFD7] rounded-full font-medium shadow-2xs">
                  Est. 2009
                </span>
                <span className="px-3 py-1 bg-white border border-[#D4DFD7] rounded-full font-medium shadow-2xs">
                  70 Acres Farmland
                </span>
                <span className="px-3 py-1 bg-white border border-[#D4DFD7] rounded-full font-medium shadow-2xs">
                  175+ Active AMCs
                </span>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <h4 className="font-serif text-lg text-[#121814] mb-4">Studio Navigation</h4>
              <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-[#475E50]">
                <li>
                  <Link href="/about" className="hover:text-[#193D2B] transition-colors">
                    About Studio
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#193D2B] transition-colors">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-[#193D2B] transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/insights" className="hover:text-[#193D2B] transition-colors">
                    Editorial Guides
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#193D2B] transition-colors">
                    Contact & Audits
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setCrmModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#193D2B] font-semibold hover:underline pt-1"
                  >
                    <Lock className="w-3 h-3" /> Client CRM Portal
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Sectors & Services */}
            <div>
              <h4 className="font-serif text-lg text-[#121814] mb-4">Sectors & Disciplines</h4>
              <ul className="space-y-2 text-xs font-mono text-[#475E50]">
                <li>
                  <Link href="/services/corporate" className="hover:text-[#193D2B] transition-colors">
                    Corporate Campuses
                  </Link>
                </li>
                <li>
                  <Link href="/services/residential" className="hover:text-[#193D2B] transition-colors">
                    Residential Villas
                  </Link>
                </li>
                <li>
                  <Link href="/services/hospitality" className="hover:text-[#193D2B] transition-colors">
                    Hospitality & Farmland
                  </Link>
                </li>
                <li>
                  <Link href="/services/vertical-gardens" className="hover:text-[#193D2B] transition-colors">
                    Vertical Bio-Walls
                  </Link>
                </li>
                <li>
                  <Link href="/services/plant-amc" className="hover:text-[#193D2B] transition-colors">
                    Plant AMC (175+ Clients)
                  </Link>
                </li>
                <li>
                  <Link href="/services/plant-rental" className="hover:text-[#193D2B] transition-colors">
                    Plant Rental & Subscriptions
                  </Link>
                </li>
                <li>
                  <Link href="/services/events-and-workshops" className="hover:text-[#193D2B] transition-colors">
                    Team Planting Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/services/csr" className="hover:text-[#193D2B] transition-colors">
                    CSR Plantation Drives
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Verified Contact */}
            <div>
              <h4 className="font-serif text-lg text-[#121814] mb-4">Studio Inquiries</h4>
              <div className="space-y-3 text-xs font-mono text-[#475E50]">
                <p className="text-[#121814] font-serif text-base font-semibold">Abhishek Suhas</p>
                <a
                  href={`tel:${studioFacts.phone.replace(/[\s-]/g, "")}`}
                  className="flex items-center gap-2 hover:text-[#193D2B] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#193D2B]" />
                  <span>{studioFacts.phone}</span>
                </a>
                <a
                  href={`mailto:${studioFacts.email}`}
                  className="flex items-center gap-2 hover:text-[#193D2B] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#193D2B]" />
                  <span>{studioFacts.email}</span>
                </a>
                <a
                  href={`https://wa.me/919743030555?text=${encodeURIComponent(
                    "Hi Star Gardens, I would like to discuss a landscape architecture project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#25D366]/15 border border-[#25D366]/40 text-[#128C7E] text-xs font-semibold rounded-full hover:bg-[#25D366] hover:text-white transition-all mt-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Studio</span>
                </a>
                <div className="pt-2 text-[11px] text-[#718579]">
                  <span className="font-semibold text-[#121814] block mb-0.5">Footprint Desks:</span>
                  <p>Bengaluru (HQ) · Hyderabad · Chennai · Pune</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#718579] gap-4">
            <p>
              © 2024 Star Gardens. All rights reserved. Commercial & Architectural Landscape Practice.
            </p>
            <div className="flex items-center gap-6">
              <span>Bengaluru, Karnataka</span>
              <span>•</span>
              <button
                onClick={() => setCrmModalOpen(true)}
                className="hover:text-[#193D2B] transition-colors font-medium"
              >
                Client CRM Access
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* CRM Modal */}
      <CrmModal isOpen={crmModalOpen} onClose={() => setCrmModalOpen(false)} />
    </>
  );
}
