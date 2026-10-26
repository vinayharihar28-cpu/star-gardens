"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Lock, ArrowUpRight, Phone, Sparkles } from "lucide-react";
import CrmModal from "./CrmModal";

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [crmModalOpen, setCrmModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5EBE6] text-[#121814] py-3.5 shadow-sm"
            : "bg-white/80 backdrop-blur-sm border-b border-[#E5EBE6]/60 text-[#121814] py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link 
            href="/" 
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                sessionStorage.removeItem("sg_intro_completed");
                sessionStorage.removeItem("sg_intro_played_tab");
                window.location.href = "/";
              }
            }}
            className="group flex flex-col tracking-tight"
            title="Star Gardens — Home (Click to replay brand reveal)"
          >
            <span className="font-serif text-2xl sm:text-3xl font-normal leading-none tracking-normal text-[#121814] group-hover:text-[#193D2B] transition-colors">
              Star Gardens
            </span>
            <span className="font-serif italic text-xs text-[#286746] tracking-wide mt-0.5">
              Landscape Architecture & Horticulture
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-1 transition-colors ${
                    isActive ? "text-[#193D2B] font-bold" : "text-[#475E50] hover:text-[#193D2B]"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#193D2B] rounded-full transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setCrmModalOpen(true)}
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-[#475E50] hover:text-[#193D2B] border border-[#D4DFD7] hover:border-[#193D2B] rounded-xs transition-all bg-white/80 hover:bg-[#F8FAF7]"
              aria-label="Open client login modal"
            >
              <Lock className="w-3 h-3 text-[#286746] transition-transform group-hover:scale-110" />
              <span>Client Portal</span>
            </button>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-widest rounded-xs hover:bg-[#286746] transition-all transform active:scale-95 shadow-md shadow-[#193D2B]/15"
            >
              <span>Discuss Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#121814] hover:text-[#193D2B] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-5 text-xl font-serif">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-2 border-b border-[#E5EBE6] transition-colors ${
                    isActive ? "text-[#193D2B] font-bold" : "text-[#121814] hover:text-[#193D2B]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
              );
            })}
          </nav>

          <div className="space-y-4 pt-6 border-t border-[#E5EBE6]">
            <div className="flex items-center justify-between text-xs font-mono text-[#475E50]">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#193D2B]" />
                +91 97430 30555
              </span>
              <span>Bengaluru Studio</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCrmModalOpen(true);
                }}
                className="flex items-center justify-center gap-2 py-3 border border-[#D4DFD7] text-[#121814] text-xs font-mono uppercase tracking-wider rounded-xs hover:bg-[#F8FAF7]"
              >
                <Lock className="w-3.5 h-3.5 text-[#286746]" />
                Client Portal
              </button>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-1 py-3 bg-[#193D2B] text-white font-bold text-xs uppercase tracking-wider rounded-xs text-center hover:bg-[#286746]"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Client CRM Modal */}
      <CrmModal isOpen={crmModalOpen} onClose={() => setCrmModalOpen(false)} />
    </>
  );
}
