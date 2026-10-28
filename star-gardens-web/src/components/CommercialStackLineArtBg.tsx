"use client";

import React from "react";

/**
 * CommercialStackLineArtBg
 * Rich architectural and botanical line art background designed specifically
 * for the Commercial Structures Stack Scroll section.
 *
 * Features:
 * - Hand-crafted botanical leaf line art contours (Monstera, Areca Palm, Ficus).
 * - Architectural topographical site contour elevation curves.
 * - Blueprint survey marks, coordinate crosshairs, and scale annotations.
 * - Subtle geometric framing that enriches the canvas without cluttering the cards.
 */
export default function CommercialStackLineArtBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle Architectural Blueprint Grid Underlay */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(25, 61, 43, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(25, 61, 43, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* 2. Soft Ambient Radial Vignettes */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#193D2B]/[0.03] blur-3xl" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-[#286746]/[0.03] blur-3xl" />
      <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full bg-[#D9E7B0]/[0.05] blur-3xl" />

      {/* 3. Main Full-Bleed Vector Line Art Canvas */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 1800"
      >
        <defs>
          {/* Subtle Green Gradients for Line Strokes */}
          <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#193D2B" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#193D2B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#193D2B" stopOpacity="0.01" />
          </linearGradient>

          <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#286746" stopOpacity="0.22" />
            <stop offset="60%" stopColor="#286746" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#286746" stopOpacity="0.01" />
          </linearGradient>

          <linearGradient id="goldAccentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#96782E" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#193D2B" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* ========================================================================= */}
        {/* TOPOGRAPHIC / SITE ELEVATION CONTOUR LINES                                 */}
        {/* ========================================================================= */}
        <g stroke="url(#lineGradLeft)" fill="none" strokeWidth="1.2" strokeLinecap="round">
          {/* Top-left undulating landscape contours */}
          <path d="M-50,80 C180,60 320,200 480,140 C640,80 720,220 900,160" />
          <path d="M-50,140 C160,120 280,260 460,200 C620,140 760,280 940,220" opacity="0.8" />
          <path d="M-50,200 C140,180 260,320 440,260 C600,200 780,340 980,280" opacity="0.6" />
          <path d="M-50,260 C120,240 240,380 420,320 C580,260 800,400 1020,340" opacity="0.45" strokeDasharray="6 4" />
          <path d="M-50,320 C100,300 220,440 400,380 C560,320 820,460 1060,400" opacity="0.3" />

          {/* Mid-section subtle flowing contour */}
          <path d="M-80,720 C220,680 420,840 700,760 C980,680 1200,820 1520,740" opacity="0.5" />
          <path d="M-80,780 C200,740 400,900 680,820 C960,740 1180,880 1520,800" opacity="0.35" strokeDasharray="8 6" />
        </g>

        <g stroke="url(#lineGradRight)" fill="none" strokeWidth="1.2" strokeLinecap="round">
          {/* Bottom-right undulating landscape contours */}
          <path d="M520,1280 C740,1200 960,1360 1200,1260 C1360,1200 1460,1240 1540,1220" />
          <path d="M480,1340 C700,1260 920,1420 1160,1320 C1320,1260 1440,1300 1540,1280" opacity="0.8" />
          <path d="M440,1400 C660,1320 880,1480 1120,1380 C1280,1320 1420,1360 1540,1340" opacity="0.6" />
          <path d="M400,1460 C620,1380 840,1540 1080,1440 C1240,1380 1400,1420 1540,1400" opacity="0.45" strokeDasharray="6 4" />
          <path d="M360,1520 C580,1440 800,1600 1040,1500 C1200,1440 1380,1480 1540,1460" opacity="0.3" />
        </g>

        {/* ========================================================================= */}
        {/* BOTANICAL LINE ART MOTIF 1: Elegant Monstera Leaf (Left Margin)           */}
        {/* ========================================================================= */}
        <g
          transform="translate(18, 380) scale(0.85)"
          stroke="#193D2B"
          strokeWidth="1.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.20"
        >
          {/* Main Stem */}
          <path d="M120,520 Q110,320 85,140 Q75,70 60,10" />

          {/* Leaf Contour with Natural Fenestration Incisions */}
          <path d="M60,10 C110,40 170,90 195,170 C205,200 175,220 150,215 C190,260 195,310 160,335 C195,385 185,430 150,450 C175,495 160,530 120,520 C85,510 50,470 35,420 C15,350 20,280 30,210 C15,160 30,80 60,10 Z" />

          {/* Monstera Cutouts / Fenestration Slots */}
          <path d="M110,120 Q145,140 160,160 Q145,175 118,145" />
          <path d="M105,190 Q150,220 165,245 Q145,260 112,215" />
          <path d="M100,270 Q140,305 150,330 Q130,345 105,295" />
          <path d="M90,350 Q125,385 135,410 Q118,420 95,370" />

          {/* Leaf Ribs / Secondary Veins */}
          <path d="M85,140 Q45,120 30,105" opacity="0.7" />
          <path d="M92,205 Q50,200 28,190" opacity="0.7" />
          <path d="M96,280 Q55,290 32,310" opacity="0.7" />
          <path d="M102,360 Q65,380 40,410" opacity="0.7" />
        </g>

        {/* ========================================================================= */}
        {/* BOTANICAL LINE ART MOTIF 2: Delicate Palm Frond (Right Margin)            */}
        {/* ========================================================================= */}
        <g
          transform="translate(1260, 160) scale(0.9)"
          stroke="#193D2B"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.22"
        >
          {/* Main Central Rachis Spine */}
          <path d="M140,650 Q80,420 20,220 Q-20,90 -70,20" />

          {/* Individual Palm Leaflets / Pinnae radiating outwards */}
          {/* Upper Fronds */}
          <path d="M-60,35 Q-110,40 -150,60" />
          <path d="M-45,65 Q-115,75 -165,105" />
          <path d="M-25,105 Q-110,120 -170,160" />
          <path d="M-5,150 Q-100,170 -170,220" />
          <path d="M18,200 Q-80,225 -160,285" />
          <path d="M40,255 Q-60,285 -145,355" />
          <path d="M62,315 Q-40,350 -125,430" />
          <path d="M85,380 Q-20,420 -105,510" />
          <path d="M108,450 Q5,495 -80,590" />

          {/* Right Fronds */}
          <path d="M-55,45 Q-10,30 30,25" />
          <path d="M-35,80 Q25,70 70,75" />
          <path d="M-15,120 Q55,115 105,130" />
          <path d="M8,165 Q85,165 140,190" />
          <path d="M30,215 Q115,220 170,255" />
          <path d="M52,270 Q140,280 195,325" />
          <path d="M74,330 Q160,345 215,400" />
          <path d="M96,395 Q175,415 225,480" />
          <path d="M118,465 Q185,490 230,560" />
        </g>

        {/* ========================================================================= */}
        {/* BOTANICAL LINE ART MOTIF 3: Branching Ficus Leaf & Sprig (Lower Left)      */}
        {/* ========================================================================= */}
        <g
          transform="translate(40, 1180) scale(0.75)"
          stroke="#286746"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.18"
        >
          {/* Curved Stem */}
          <path d="M20,620 Q90,440 140,260 Q170,140 210,30" />

          {/* Leaf 1 */}
          <path d="M140,260 C170,220 250,220 280,260 C300,290 270,330 230,340 C190,345 150,300 140,260 Z" />
          <path d="M140,260 Q210,280 280,260" opacity="0.6" />

          {/* Leaf 2 */}
          <path d="M100,360 C50,330 20,380 40,430 C60,470 120,460 135,420 C145,390 120,370 100,360 Z" />
          <path d="M100,360 Q80,410 40,430" opacity="0.6" />

          {/* Leaf 3 */}
          <path d="M170,140 C220,95 280,110 300,150 C310,185 270,215 230,210 C195,205 175,165 170,140 Z" />
          <path d="M170,140 Q240,160 300,150" opacity="0.6" />

          {/* Leaf 4 (Terminal) */}
          <path d="M210,30 C200,-20 260,-40 280,0 C295,30 260,65 230,60 C215,55 210,40 210,30 Z" />
        </g>

        {/* ========================================================================= */}
        {/* ARCHITECTURAL SURVEYING MARKS & BLUEPRINT ANNOTATIONS                     */}
        {/* ========================================================================= */}
        {/* Precision Crosshairs / Survey Datum Points */}
        <g stroke="#193D2B" strokeWidth="1" opacity="0.25">
          {/* Top Left Datum */}
          <circle cx="80" cy="90" r="14" fill="none" />
          <circle cx="80" cy="90" r="2" fill="#193D2B" />
          <line x1="55" y1="90" x2="105" y2="90" />
          <line x1="80" y1="65" x2="80" y2="115" />
          <text
            x="115"
            y="94"
            fontFamily="monospace"
            fontSize="9"
            letterSpacing="0.18em"
            fill="#193D2B"
            stroke="none"
          >
            REF 12°58'N · 77°35'E
          </text>

          {/* Top Right Coordinate Cross */}
          <circle cx="1360" cy="110" r="14" fill="none" />
          <circle cx="1360" cy="110" r="2" fill="#193D2B" />
          <line x1="1335" y1="110" x2="1385" y2="110" />
          <line x1="1360" y1="85" x2="1360" y2="135" />
          <text
            x="1220"
            y="114"
            fontFamily="monospace"
            fontSize="9"
            letterSpacing="0.18em"
            fill="#193D2B"
            stroke="none"
          >
            ELEV. +920.4M
          </text>

          {/* Mid Stage Left Crosshair */}
          <circle cx="60" cy="980" r="10" fill="none" />
          <line x1="42" y1="980" x2="78" y2="980" />
          <line x1="60" y1="962" x2="60" y2="998" />
          <text
            x="88"
            y="984"
            fontFamily="monospace"
            fontSize="9"
            letterSpacing="0.18em"
            fill="#193D2B"
            stroke="none"
          >
            CONTOUR INT 0.50M
          </text>

          {/* Bottom Right Survey Point */}
          <circle cx="1380" cy="1680" r="12" fill="none" />
          <circle cx="1380" cy="1680" r="2" fill="#193D2B" />
          <line x1="1358" y1="1680" x2="1402" y2="1680" />
          <line x1="1380" y1="1658" x2="1380" y2="1702" />
          <text
            x="1210"
            y="1684"
            fontFamily="monospace"
            fontSize="9"
            letterSpacing="0.18em"
            fill="#193D2B"
            stroke="none"
          >
            STUDIO DRAFT 01/2025
          </text>
        </g>

        {/* Blueprint Framing Lines (Architectural Border Ticks) */}
        <g stroke="url(#goldAccentGrad)" strokeWidth="0.8" opacity="0.35">
          {/* Vertical Architectural Left Guide Line */}
          <line x1="100" y1="180" x2="100" y2="1600" strokeDasharray="4 8" />
          <line x1="92" y1="240" x2="108" y2="240" />
          <line x1="92" y1="480" x2="108" y2="480" />
          <line x1="92" y1="720" x2="108" y2="720" />
          <line x1="92" y1="960" x2="108" y2="960" />
          <line x1="92" y1="1200" x2="108" y2="1200" />
          <line x1="92" y1="1440" x2="108" y2="1440" />

          {/* Vertical Architectural Right Guide Line */}
          <line x1="1340" y1="180" x2="1340" y2="1600" strokeDasharray="4 8" />
          <line x1="1332" y1="240" x2="1348" y2="240" />
          <line x1="1332" y1="480" x2="1348" y2="480" />
          <line x1="1332" y1="720" x2="1348" y2="720" />
          <line x1="1332" y1="960" x2="1348" y2="960" />
          <line x1="1332" y1="1200" x2="1348" y2="1200" />
          <line x1="1332" y1="1440" x2="1348" y2="1440" />
        </g>
      </svg>
    </div>
  );
}
