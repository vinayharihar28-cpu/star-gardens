"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export interface CarouselSlide {
  id: number;
  projectSlug: string;
  title: string;
  subtitle: string;
  sector: string;
  location: string;
  summary: string;
  image: string;
  alt: string;
  primaryColor: string;
  secondaryColor: string;
  ambientGlow: string;
}

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    projectSlug: "swiss-re-embassy-golf-links",
    title: "Swiss Re Workspace",
    subtitle: "Embassy Golf Links, Bengaluru",
    sector: "Corporate Campus",
    location: "Embassy Golf Links, Domlur, Bengaluru",
    summary: "3,00,000 sq.ft workspace biophilic system.",
    image: "/images/projects/swiss-re/swiss-re-reception.jpg",
    alt: "Swiss Re Embassy Golf Links reception greenery",
    primaryColor: "rgba(220, 236, 230, 0.85)",
    secondaryColor: "rgba(246, 248, 244, 0.75)",
    ambientGlow: "rgba(174, 204, 188, 0.45)",
  },
  {
    id: 2,
    projectSlug: "abb-peenya-campus",
    title: "ABB India Campus",
    subtitle: "Peenya Industrial Area, Bengaluru",
    sector: "Industrial Campus",
    location: "Peenya, Bengaluru",
    summary: "₹3.28 Cr turnkey external landscape and grounds AMC.",
    image: "/images/projects/abb/abb-peenya-hero.jpg",
    alt: "ABB India Peenya campus grounds landscape",
    primaryColor: "rgba(224, 236, 226, 0.85)",
    secondaryColor: "rgba(247, 246, 240, 0.75)",
    ambientGlow: "rgba(178, 206, 182, 0.45)",
  },
  {
    id: 3,
    projectSlug: "ola-head-office-koramangala",
    title: "Ola Corporate Headquarters",
    subtitle: "Koramangala, Bengaluru",
    sector: "Corporate Campus",
    location: "Koramangala, Bengaluru",
    summary: "4,50,000 sq.ft corporate facility greening and AMC.",
    image: "/images/projects/ola/ola-koramangala-hero.jpg",
    alt: "Ola Koramangala corporate headquarters indoor biophilia",
    primaryColor: "rgba(226, 238, 230, 0.85)",
    secondaryColor: "rgba(248, 248, 244, 0.75)",
    ambientGlow: "rgba(176, 204, 186, 0.45)",
  },
  {
    id: 4,
    projectSlug: "wsp-manyata-tech-park",
    title: "WSP Technical Campus",
    subtitle: "Manyata Tech Park, Bengaluru",
    sector: "Corporate Campus",
    location: "Manyata Tech Park, Hebbal, Bengaluru",
    summary: "620 workstation partition planters and curved collaboration biophilia.",
    image: "/images/projects/wsp/wsp-workstations.jpg",
    alt: "WSP Manyata Tech Park workstation modular planters",
    primaryColor: "rgba(224, 237, 232, 0.85)",
    secondaryColor: "rgba(248, 248, 244, 0.75)",
    ambientGlow: "rgba(174, 202, 190, 0.45)",
  },
  {
    id: 5,
    projectSlug: "novo-nordisk-campus",
    title: "Novo Nordisk Healthcare",
    subtitle: "Bengaluru, Karnataka",
    sector: "Corporate Campus",
    location: "Bengaluru, Karnataka",
    summary: "Pharmaceutical clean-air indoor biophilia and plant healthcare AMC.",
    image: "/images/projects/novo-nordisk/novo-nordisk-hero.jpg",
    alt: "Novo Nordisk Bengaluru healthcare campus interior greenery",
    primaryColor: "rgba(222, 236, 228, 0.85)",
    secondaryColor: "rgba(246, 247, 242, 0.75)",
    ambientGlow: "rgba(176, 206, 184, 0.45)",
  },
  {
    id: 6,
    projectSlug: "2gethr-richmond-road",
    title: "2gethr Spaces",
    subtitle: "Richmond Road, Central Bengaluru",
    sector: "Corporate & Co-Working",
    location: "Richmond Road, Central Bengaluru",
    summary: "Sculpted entrance steps and open-air cafe garden oasis.",
    image: "/images/projects/2gethr/2gethr-steps.jpg",
    alt: "2gethr Richmond Road terraced entrance steps",
    primaryColor: "rgba(226, 237, 228, 0.85)",
    secondaryColor: "rgba(247, 245, 238, 0.75)",
    ambientGlow: "rgba(180, 206, 185, 0.45)",
  },
  {
    id: 7,
    projectSlug: "hotel-hilton-embassy-golf-links",
    title: "Hotel Hilton & EGL",
    subtitle: "Embassy Golf Links, Bengaluru",
    sector: "Hospitality & Corporate",
    location: "Embassy Golf Links, Domlur, Bengaluru",
    summary: "2-acre 5-star hotel landscape and reflection pools.",
    image: "/images/water-features/contemporary-stone-water-basin.jpg",
    alt: "Hotel Hilton and EGL reflection pools and palm avenue",
    primaryColor: "rgba(220, 235, 230, 0.85)",
    secondaryColor: "rgba(246, 248, 245, 0.75)",
    ambientGlow: "rgba(170, 204, 190, 0.45)",
  },
  {
    id: 8,
    projectSlug: "ramnagar-private-farm",
    title: "Ramnagara Farm Estate",
    subtitle: "Ramnagara, Bengaluru Outskirts",
    sector: "Residential Masterplan",
    location: "Ramnagara, Bengaluru Outskirts",
    summary: "5.5-acre agricultural landscape transformation with natural rockery.",
    image: "/images/projects/ramnagar-farm/ramnagar-farm-hero.jpg",
    alt: "Ramnagara 5.5-Acre Farm Estate lawns and native shade trees",
    primaryColor: "rgba(224, 236, 226, 0.85)",
    secondaryColor: "rgba(247, 246, 240, 0.75)",
    ambientGlow: "rgba(178, 206, 182, 0.45)",
  },
  {
    id: 9,
    projectSlug: "casa-grande-lexus",
    title: "Casa Grande Lexus",
    subtitle: "Bengaluru, Karnataka",
    sector: "Residential Community",
    location: "Bengaluru, Karnataka",
    summary: "₹2.30 Cr turnkey landscape with specimen palm avenues.",
    image: "/images/projects/casa-grande/casa-grande-lexus-hero.jpg",
    alt: "Casa Grande Lexus residential masterplan with palm avenues",
    primaryColor: "rgba(230, 236, 226, 0.85)",
    secondaryColor: "rgba(248, 246, 242, 0.75)",
    ambientGlow: "rgba(184, 206, 178, 0.45)",
  },
  {
    id: 10,
    projectSlug: "wipro-koramangala",
    title: "Wipro Technologies",
    subtitle: "Koramangala, Bengaluru",
    sector: "Corporate IT Campus",
    location: "Koramangala, Bengaluru",
    summary: "Campus tree boulevards and shaded outdoor meeting groves.",
    image: "/images/projects/wipro/wipro-koramangala-hero.jpg",
    alt: "Wipro Technologies Koramangala IT campus landscape",
    primaryColor: "rgba(225, 236, 228, 0.85)",
    secondaryColor: "rgba(247, 246, 242, 0.75)",
    ambientGlow: "rgba(178, 204, 182, 0.45)",
  },
  {
    id: 11,
    projectSlug: "interior-living-walls-abb-wsp",
    title: "Living Bio-Walls",
    subtitle: "Tech Park Campuses, Bengaluru",
    sector: "Vertical Living Walls",
    location: "ABB & WSP Bengaluru Campuses",
    summary: "1,850 sq.ft of engineered polymer modular living walls.",
    image: "/images/projects/living-walls/interior-atrium-living-wall.jpg",
    alt: "Double-height interior living wall with automated fertigation",
    primaryColor: "rgba(222, 238, 224, 0.85)",
    secondaryColor: "rgba(245, 248, 242, 0.75)",
    ambientGlow: "rgba(172, 208, 178, 0.45)",
  },
  {
    id: 12,
    projectSlug: "va-tech-wabag",
    title: "VA Tech Wabag Landscapes",
    subtitle: "Infrastructure Facilities, Karnataka",
    sector: "Infrastructure",
    location: "Panathur, Mangalore & Challagatta",
    summary: "Industrial environmental landscaping and slope stabilization.",
    image: "/images/projects/va-tech-wabag/wabag-panathur.jpg",
    alt: "VA Tech Wabag industrial environmental landscape execution",
    primaryColor: "rgba(220, 235, 232, 0.85)",
    secondaryColor: "rgba(246, 248, 245, 0.75)",
    ambientGlow: "rgba(170, 202, 195, 0.45)",
  },
];

export default function GradientCarousel3D() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(1440);

  const totalSlides = CAROUSEL_SLIDES.length;
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(activeIndex);
  const accumulatedDeltaRef = useRef(0);
  const decayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastStepTimeRef = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Monitor viewport width for responsive card spacing and dimensions
  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth, { passive: true });
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Navigation handlers
  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Scroll upon carousel (trackpad & mouse wheel):
  // Seamlessly steps through all 10 project slides before continuing down page
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX) * 0.4 && Math.abs(e.deltaX) > 12) return;

      const container = containerRef.current;
      if (!container) return;

      // Check how well the carousel container is aligned with the top of the viewport
      const rect = container.getBoundingClientRect();
      const isAligned = Math.abs(rect.top) < 40;

      // If user hasn't scrolled the section to full screen yet, don't intercept:
      // let native page scroll bring the carousel section into view!
      if (!isAligned) {
        return;
      }

      const isDown = e.deltaY > 0;
      const isUp = e.deltaY < 0;
      const currentIndex = activeIndexRef.current;

      const shouldIntercept =
        (isDown && currentIndex < totalSlides - 1) ||
        (isUp && currentIndex > 0);

      if (shouldIntercept) {
        e.preventDefault();
        e.stopPropagation();

        accumulatedDeltaRef.current += e.deltaY;

        if (decayTimerRef.current) {
          clearTimeout(decayTimerRef.current);
        }
        decayTimerRef.current = setTimeout(() => {
          accumulatedDeltaRef.current = 0;
        }, 320);

        const now = Date.now();
        const timeSinceLastStep = now - lastStepTimeRef.current;
        const threshold = 55;

        if (timeSinceLastStep > 260) {
          if (accumulatedDeltaRef.current >= threshold) {
            goToNext();
            accumulatedDeltaRef.current = 0;
            lastStepTimeRef.current = now;
          } else if (accumulatedDeltaRef.current <= -threshold) {
            goToPrev();
            accumulatedDeltaRef.current = 0;
            lastStepTimeRef.current = now;
          }
        }
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
      if (decayTimerRef.current) clearTimeout(decayTimerRef.current);
    };
  }, [goToNext, goToPrev, totalSlides]);

  const isPointerDownRef = useRef(false);
  const dragStartPosRef = useRef({ x: 0, y: 0 });
  const hasMovedRef = useRef(false);
  const isDraggingRef = useRef(false);

  // Pointer drag/swipe gestures for touch & desktop mice
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    isPointerDownRef.current = true;
    hasMovedRef.current = false;
    isDraggingRef.current = false;
    dragStartPosRef.current = { x: e.clientX, y: e.clientY };
    setDragDeltaX(0);
    // Note: Do not call setPointerCapture here as it suppresses native child click events
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    const deltaX = e.clientX - dragStartPosRef.current.x;
    const deltaY = e.clientY - dragStartPosRef.current.y;

    // Only engage drag if moved more than 7 pixels horizontally
    if (!hasMovedRef.current && (Math.abs(deltaX) > 7 || Math.abs(deltaY) > 7)) {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        hasMovedRef.current = true;
        isDraggingRef.current = true;
        setIsDragging(true);
        if (containerRef.current) {
          try {
            containerRef.current.setPointerCapture(e.pointerId);
          } catch {}
        }
      } else {
        // Vertical scroll intent, cancel horizontal drag
        isPointerDownRef.current = false;
        return;
      }
    }

    if (hasMovedRef.current) {
      setDragDeltaX(deltaX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;

    if (containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch {}
    }

    if (hasMovedRef.current) {
      const swipeThreshold = 40;
      if (dragDeltaX < -swipeThreshold) {
        goToNext();
      } else if (dragDeltaX > swipeThreshold) {
        goToPrev();
      }
      setIsDragging(false);
      isDraggingRef.current = false;
      setDragDeltaX(0);
      // Keep hasMovedRef true briefly so the synthetic click event from dragging is blocked
      setTimeout(() => {
        hasMovedRef.current = false;
      }, 80);
    } else {
      setIsDragging(false);
      isDraggingRef.current = false;
      setDragDeltaX(0);
    }
  };

  const handlePointerCancel = () => {
    isPointerDownRef.current = false;
    hasMovedRef.current = false;
    isDraggingRef.current = false;
    setIsDragging(false);
    setDragDeltaX(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Autoplay pause on hover
  useEffect(() => {
    if (isPaused || isDragging) return;
    const timer = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, isDragging, goToNext]);

  // 3D perspective calculation
  const getSlideStyle = (index: number) => {
    let diff = (index - activeIndex) % totalSlides;
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;

    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    const isSmall = viewportWidth < 640;
    const isMedium = viewportWidth >= 640 && viewportWidth < 1024;

    const spacingUnit = isSmall ? 115 : isMedium ? 155 : 190;

    let xOffset = diff * spacingUnit;
    if (isDragging && absDiff <= 2) {
      xOffset += dragDeltaX * 0.65;
    }

    const zOffset = isCenter ? 120 : -Math.pow(absDiff, 1.15) * (isSmall ? 85 : 125);
    const yRotation = diff === 0 ? 0 : diff > 0 ? -18 - absDiff * 4 : 18 + absDiff * 4;
    const scale = isCenter ? 1.05 : Math.max(0.72, 1 - absDiff * 0.12);
    const zIndex = 50 - absDiff * 10;
    const opacity = absDiff > 3 ? 0 : Math.max(0.25, 1 - absDiff * 0.28);
    const filter = isCenter ? "none" : `blur(${Math.min(2.5, absDiff * 0.9)}px) brightness(${Math.max(0.75, 1 - absDiff * 0.1)})`;
    const pointerEvents = absDiff > 3 ? ("none" as const) : ("auto" as const);

    return {
      style: {
        transform: `translate3d(${xOffset}px, 0px, ${zOffset}px) rotateY(${yRotation}deg) scale(${scale})`,
        zIndex,
        opacity,
        filter,
        pointerEvents,
        cursor: "pointer",
        transition: isDragging
          ? "none"
          : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease, filter 0.7s ease",
      },
      diff,
      absDiff,
    };
  };

  const handleCardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    projectSlug: string
  ) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      return;
    }
    // Direct redirect to dedicated project case study page
    router.push(`/projects/${projectSlug}`);
  };

  const currentSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col items-center justify-center gap-3 sm:gap-4 pt-14 pb-6 overflow-hidden select-none bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      style={{ touchAction: "pan-y" }}
      aria-roledescription="carousel"
      aria-label="Star Gardens 3D Real Projects Showcase"
    >
      {/* 1. DYNAMIC AMBIENT GRADIENT BACKGROUND (BLENDED SEAMLESSLY WITH WHITE) */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out overflow-hidden">
        {/* Soft botanical radial glow tailored to active image */}
        <div
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(ellipse 65% 55% at 50% 45%, ${currentSlide.primaryColor} 0%, ${currentSlide.secondaryColor} 45%, rgba(255,255,255,0.7) 70%, #ffffff 92%)`,
          }}
        />

        {/* Ambient atmospheric warm/sage light orbs */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[480px] rounded-full blur-[100px] pointer-events-none opacity-60 transition-colors duration-1000"
          style={{
            backgroundColor: currentSlide.ambientGlow,
          }}
        />

        {/* Seamless White Blending Top Vignette */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />

        {/* Seamless White Blending Bottom Vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />
      </div>

      {/* 2. 3D PERSPECTIVE STAGE */}
      <div
        className="relative z-10 w-full max-w-7xl flex items-center justify-center pb-8 sm:pb-10"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative flex items-center justify-center w-[170px] h-[240px] sm:w-[210px] sm:h-[300px] lg:w-[245px] lg:h-[340px]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {CAROUSEL_SLIDES.map((slide, index) => {
            const { style, diff, absDiff } = getSlideStyle(index);
            const isCenter = diff === 0;

            return (
              <Link
                key={slide.id}
                href={`/projects/${slide.projectSlug}`}
                onClick={(e) => handleCardClick(e, slide.projectSlug)}
                className="absolute inset-0 flex flex-col items-center justify-center will-change-transform focus:outline-none cursor-pointer group/cardlink"
                style={style}
                aria-label={`View ${slide.title} project case study`}
                tabIndex={absDiff <= 2 ? 0 : -1}
                aria-hidden={absDiff > 2}
              >
                {/* 2A. MAIN PERSPECTIVE IMAGE CARD (CLEAN PURE PHOTOGRAPH) */}
                <div
                  className={`group/card relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden transition-all duration-500 ${
                    isCenter
                      ? "ring-1 ring-white/95 shadow-[0_16px_40px_-8px_rgba(25,61,43,0.18)]"
                      : "ring-1 ring-white/50 shadow-[0_8px_20px_-6px_rgba(25,61,43,0.08)] hover:ring-white/80"
                  }`}
                  style={{
                    backgroundColor: "transparent",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading="eager"
                    className="w-full h-full object-cover object-center select-none pointer-events-none transition-transform duration-700 ease-out group-hover/card:scale-105"
                    draggable={false}
                  />

                  {/* Delicate Inner Highlight Rim */}
                  <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] ring-1 ring-inset ring-white/20 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 3. MINIMAL TITLE & LOCATION TAG (CLEARLY SEPARATED BELOW THE CARDS) */}
      <div className="relative z-20 w-full max-w-xl mx-auto px-4 mt-2 sm:mt-3 text-center">
        <Link
          href={`/projects/${currentSlide.projectSlug}`}
          className="group inline-block focus:outline-none"
        >
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#121814] font-normal tracking-tight group-hover:text-[#193D2B] transition-colors leading-tight">
            {currentSlide.title}
          </h3>
          <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#718579] mt-1.5">
            {currentSlide.subtitle}
          </p>
        </Link>
      </div>

      {/* 4. MINIMAL PAGINATION PILL & DOT NAVIGATION + DOWN CUE */}
      <div className="relative z-20 flex flex-col items-center gap-2 px-4">
        <div className="flex items-center justify-center gap-2">
          {CAROUSEL_SLIDES.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToIndex(index)}
                className={`transition-all duration-400 ease-out rounded-full focus:outline-none focus:ring-2 focus:ring-[#193D2B]/40 ${
                  isActive
                    ? "w-8 sm:w-10 h-1.5 sm:h-2 bg-[#193D2B] shadow-sm"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#193D2B]/20 hover:bg-[#193D2B]/45"
                }`}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                aria-current={isActive ? "true" : undefined}
              />
            );
          })}
        </div>

        {/* Minimal Scroll Cue to Campuses */}
        <a
          href="#campuses-strip"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("campuses-strip")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-[#718579] hover:text-[#193D2B] transition-colors flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider group mt-0.5"
          aria-label="Scroll down to delivered campuses"
        >
          <span>Scroll to Campuses</span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* 5. DISCRETE FLOATING NAVIGATION ARROWS */}
      <div className="absolute top-1/2 -translate-y-12 left-4 sm:left-8 flex items-center z-20 pointer-events-none">
        <button
          onClick={goToPrev}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-[#D4DFD7] text-[#193D2B] backdrop-blur-md flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all group focus:outline-none focus:ring-2 focus:ring-[#193D2B]/40"
          aria-label="Previous landscape project"
        >
          <ChevronLeft className="w-5 h-5 text-[#193D2B] transition-transform group-hover:-translate-x-0.5" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-12 right-4 sm:right-8 flex items-center z-20 pointer-events-none">
        <button
          onClick={goToNext}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 hover:bg-white border border-[#D4DFD7] text-[#193D2B] backdrop-blur-md flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all group focus:outline-none focus:ring-2 focus:ring-[#193D2B]/40"
          aria-label="Next landscape project"
        >
          <ChevronRight className="w-5 h-5 text-[#193D2B] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
