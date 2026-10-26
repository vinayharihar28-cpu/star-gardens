"use client";

import React, { useState, useEffect } from "react";

export default function ContourSvg({ className = "" }: { className?: string }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`pointer-events-none select-none transition-transform duration-700 ease-out ${className}`}
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 900 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-60"
      >
        {/* Topographic Contour Layer 1 - Lime */}
        <path
          d="M 40 140 C 180 90, 310 200, 480 150 C 650 100, 750 180, 880 130"
          stroke="#D9E7B0"
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeDasharray="4 6"
          className="contour-path"
        />

        {/* Topographic Contour Layer 2 - Fern */}
        <path
          d="M 20 250 C 200 180, 340 290, 520 230 C 700 170, 780 270, 890 220"
          stroke="#286746"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          className="contour-path contour-path-delay-1"
        />

        {/* Topographic Contour Layer 3 - Sage */}
        <path
          d="M 60 370 C 240 310, 380 420, 560 350 C 740 280, 810 390, 910 340"
          stroke="#A8C49A"
          strokeWidth="1.2"
          strokeOpacity="0.4"
          className="contour-path contour-path-delay-2"
        />

        {/* Topographic Contour Layer 4 - Moss */}
        <path
          d="M 10 500 C 220 440, 420 540, 600 480 C 780 420, 840 520, 920 470"
          stroke="#60966C"
          strokeWidth="1.5"
          strokeOpacity="0.45"
          className="contour-path contour-path-delay-3"
        />

        {/* Architectural Site Plan Elevation Markers */}
        <g stroke="#D9E7B0" strokeWidth="0.8" opacity="0.75">
          <circle cx="480" cy="150" r="3" fill="#D9E7B0" />
          <text
            x="490"
            y="154"
            fill="#D9E7B0"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.08em"
          >
            +18.5m SITE CONTOUR · RAJAHMUNDRY PALM CANOPY
          </text>

          <circle cx="520" cy="230" r="3" fill="#A8C49A" />
          <text
            x="530"
            y="234"
            fill="#A8C49A"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.08em"
          >
            +14.0m PUNGANUR ACCLIMATIZATION ZONE
          </text>

          <circle cx="560" cy="350" r="3" fill="#60966C" />
          <text
            x="570"
            y="354"
            fill="#60966C"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="0.08em"
          >
            +10.2m BIO-WALL IRRIGATION RISER
          </text>
        </g>
      </svg>
    </div>
  );
}
