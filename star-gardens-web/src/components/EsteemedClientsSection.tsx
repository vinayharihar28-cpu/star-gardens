"use client";

import React, { useState } from "react";
import Image from "next/image";

interface EsteemedClientsSectionProps {
  className?: string;
}

export default function EsteemedClientsSection({ className = "" }: EsteemedClientsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section 
      id="esteemed-clients" 
      className={`py-6 sm:py-14 bg-[#FAF8F5] border-b border-[#E5EBE6] ${className}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div 
          onClick={() => setIsOpen(true)}
          className="bg-white border border-[#E5EBE6] rounded-2xl sm:rounded-3xl p-2 sm:p-5 shadow-xs overflow-hidden cursor-pointer hover:border-[#193D2B]/30 transition-all"
        >
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/images/clients/esteemed-clients-grid.jpg"
              alt="Our Esteemed Clients - Star Gardens"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6"
          onClick={() => setIsOpen(false)}
        >
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl leading-none p-2 hover:opacity-75 z-10 cursor-pointer"
            aria-label="Close"
          >
            &times;
          </button>
          <div className="relative w-full max-w-6xl aspect-[16/9] max-h-[90vh]">
            <Image
              src="/images/clients/esteemed-clients-grid.jpg"
              alt="Our Esteemed Clients - Star Gardens"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
