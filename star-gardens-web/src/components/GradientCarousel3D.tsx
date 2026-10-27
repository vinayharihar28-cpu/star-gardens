"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselSlide {
  id: number;
  image: string;
  alt: string;
  // Ambient botanical color palette for smooth background blending with white
  primaryColor: string;
  secondaryColor: string;
  ambientGlow: string;
}

const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    image: "/hero/carousel/carousel-1.jpg",
    alt: "Luxury cantilevered villa with illuminated reflection pool and architectural flagstone pathway",
    primaryColor: "rgba(226, 237, 228, 0.85)",
    secondaryColor: "rgba(247, 245, 238, 0.75)",
    ambientGlow: "rgba(180, 206, 185, 0.45)",
  },
  {
    id: 2,
    image: "/hero/carousel/carousel-2.jpg",
    alt: "Tropical curved stone slab garden pathway with low-voltage warm bollards and sculptural frangipani",
    primaryColor: "rgba(222, 238, 224, 0.85)",
    secondaryColor: "rgba(245, 248, 242, 0.75)",
    ambientGlow: "rgba(172, 208, 178, 0.45)",
  },
  {
    id: 3,
    image: "/hero/carousel/carousel-3.jpg",
    alt: "Corporate campus courtyard featuring majestic banyan ficus canopy and circular teak bench",
    primaryColor: "rgba(224, 236, 230, 0.85)",
    secondaryColor: "rgba(248, 246, 240, 0.75)",
    ambientGlow: "rgba(185, 205, 188, 0.45)",
  },
  {
    id: 4,
    image: "/hero/carousel/carousel-4.jpg",
    alt: "Sanctuary lily pond with floating cantilevered granite steps and cascading water sheet wall",
    primaryColor: "rgba(220, 235, 232, 0.85)",
    secondaryColor: "rgba(246, 248, 245, 0.75)",
    ambientGlow: "rgba(170, 202, 195, 0.45)",
  },
  {
    id: 5,
    image: "/hero/carousel/carousel-5.jpg",
    alt: "Minimalist Japanese Zen courtyard with dark granite water basin and specimen Japanese maple",
    primaryColor: "rgba(238, 236, 226, 0.85)",
    secondaryColor: "rgba(248, 247, 242, 0.75)",
    ambientGlow: "rgba(200, 195, 175, 0.45)",
  },
  {
    id: 6,
    image: "/hero/carousel/carousel-6.jpg",
    alt: "Luxury resort garden terrace with sunken lounge, reflection pool and silhouette royal palms",
    primaryColor: "rgba(235, 232, 228, 0.85)",
    secondaryColor: "rgba(246, 245, 240, 0.75)",
    ambientGlow: "rgba(195, 188, 175, 0.45)",
  },
  {
    id: 7,
    image: "/hero/carousel/carousel-7.png",
    alt: "Signature Star Gardens living architectural estate with modern glass pavilion and garden lighting",
    primaryColor: "rgba(220, 236, 224, 0.85)",
    secondaryColor: "rgba(248, 247, 240, 0.75)",
    ambientGlow: "rgba(168, 205, 175, 0.45)",
  },
  {
    id: 8,
    image: "/hero/carousel/carousel-8.jpg",
    alt: "Master planned landscape architecture estate with stepped lawns and specimen greenery",
    primaryColor: "rgba(225, 236, 228, 0.85)",
    secondaryColor: "rgba(247, 246, 242, 0.75)",
    ambientGlow: "rgba(178, 204, 182, 0.45)",
  },
  {
    id: 9,
    image: "/hero/carousel/carousel-9.jpg",
    alt: "Contemporary commercial biophilic landscape with lush interior and exterior green installations",
    primaryColor: "rgba(224, 237, 232, 0.85)",
    secondaryColor: "rgba(248, 248, 244, 0.75)",
    ambientGlow: "rgba(174, 202, 190, 0.45)",
  },
  {
    id: 10,
    image: "/hero/carousel/carousel-10.jpg",
    alt: "Dedicated horticulture cultivation nursery with acclimatized specimen palms and rare flora",
    primaryColor: "rgba(223, 238, 225, 0.85)",
    secondaryColor: "rgba(248, 247, 242, 0.75)",
    ambientGlow: "rgba(170, 204, 174, 0.45)",
  },
];

export default function GradientCarousel3D() {
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

  // Scroll upon carousel (laptop 2-finger trackpad & mouse wheel):
  // Seamlessly intercepts scroll to complete all 10 images one by one.
  // ONLY once all images are completed does it release and naturally slide down the page!
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      // Ignore purely horizontal trackpad gestures
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX) * 0.4 && Math.abs(e.deltaX) > 12) return;

      const isDown = e.deltaY > 0;
      const isUp = e.deltaY < 0;
      const currentIndex = activeIndexRef.current;

      // Check whether we must complete images first before releasing to page scroll
      const shouldIntercept =
        (isDown && currentIndex < totalSlides - 1) ||
        (isUp && currentIndex > 0);

      if (shouldIntercept) {
        // Prevent default browser / Lenis scroll while rotating through images
        e.preventDefault();
        e.stopPropagation();

        // Accumulate trackpad 2-finger scroll and mouse wheel deltas
        accumulatedDeltaRef.current += e.deltaY;

        // Reset accumulation if user pauses scrolling for 260ms
        if (decayTimerRef.current) clearTimeout(decayTimerRef.current);
        decayTimerRef.current = setTimeout(() => {
          accumulatedDeltaRef.current = 0;
        }, 260);

        const now = Date.now();
        const THRESHOLD = 42; // Fast, responsive threshold for laptop 2-finger swipe
        const COOLDOWN = 270; // Smooth cooldown between card steps

        if (accumulatedDeltaRef.current >= THRESHOLD) {
          if (now - lastStepTimeRef.current > COOLDOWN) {
            lastStepTimeRef.current = now;
            accumulatedDeltaRef.current = 0;
            setActiveIndex((prev) => Math.min(prev + 1, totalSlides - 1));
          }
        } else if (accumulatedDeltaRef.current <= -THRESHOLD) {
          if (now - lastStepTimeRef.current > COOLDOWN) {
            lastStepTimeRef.current = now;
            accumulatedDeltaRef.current = 0;
            setActiveIndex((prev) => Math.max(prev - 1, 0));
          }
        }
      } else {
        // Final image reached (Card 10 on down scroll, or Card 1 on up scroll):
        // Allow wheel event to pass through naturally so Lenis slides the user down/up the page!
        accumulatedDeltaRef.current = 0;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel);
      if (decayTimerRef.current) clearTimeout(decayTimerRef.current);
    };
  }, [totalSlides]);

  // Auto-rotation every 4.5s (pauses on hover, drag, or focus)
  useEffect(() => {
    if (isPaused || isDragging) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = setInterval(() => {
      goToNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, goToNext]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrev();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  // Pointer / Drag gesture handlers (works for both mouse & touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
    setIsPaused(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - dragStartX;
    setDragDeltaX(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Drag threshold to trigger slide change
    const threshold = 35;
    if (dragDeltaX < -threshold) {
      goToNext();
    } else if (dragDeltaX > threshold) {
      goToPrev();
    }

    setDragDeltaX(0);
    setIsPaused(false);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragDeltaX(0);
    setIsPaused(false);
  };

  // Card click handler: clicking any visible offset card smoothly centers it
  const handleCardClick = (index: number, diff: number) => {
    if (Math.abs(dragDeltaX) > 10) return; // Prevent click triggering during drag
    if (diff === 0) return; // Already centered
    goToIndex(index);
  };

  // Compute 3D transformation properties for each slide
  const getSlideStyle = (index: number) => {
    let diff = (index - activeIndex) % totalSlides;
    if (diff > totalSlides / 2) diff -= totalSlides;
    if (diff < -totalSlides / 2) diff += totalSlides;

    const isCenter = diff === 0;
    const absDiff = Math.abs(diff);

    // Responsive configuration based on viewport width
    const isMobile = viewportWidth < 640;
    const isTablet = viewportWidth >= 640 && viewportWidth < 1024;
    const isDesktop = viewportWidth >= 1024;

    // Maximum visible card range
    const maxVisibleOffset = isMobile ? 1 : isTablet ? 2 : 4;

    if (absDiff > maxVisibleOffset) {
      return {
        style: {
          opacity: 0,
          pointerEvents: "none" as const,
          transform: `translateX(${diff > 0 ? 1000 : -1000}px) translateZ(-400px) scale(0.4)`,
          zIndex: 0,
          visibility: "hidden" as const,
        },
        diff,
      };
    }

    // Step spacing for 3D layout
    let xOffset = 0;
    let zOffset = 0;
    let yRotation = 0;
    let scale = 1;
    let opacity = 1;
    let filter = "brightness(1) contrast(1)";

    if (isDesktop) {
      // Desktop parameters
      if (absDiff === 0) {
        xOffset = 0;
        zOffset = 0;
        yRotation = 0;
        scale = 1;
        opacity = 1;
      } else if (absDiff === 1) {
        xOffset = (diff > 0 ? 1 : -1) * 230;
        zOffset = -70;
        yRotation = (diff > 0 ? -1 : 1) * 30;
        scale = 0.88;
        opacity = 0.94;
        filter = "brightness(0.94) contrast(0.98)";
      } else if (absDiff === 2) {
        xOffset = (diff > 0 ? 1 : -1) * 430;
        zOffset = -150;
        yRotation = (diff > 0 ? -1 : 1) * 46;
        scale = 0.76;
        opacity = 0.78;
        filter = "brightness(0.86) contrast(0.95)";
      } else if (absDiff === 3) {
        xOffset = (diff > 0 ? 1 : -1) * 600;
        zOffset = -230;
        yRotation = (diff > 0 ? -1 : 1) * 58;
        scale = 0.65;
        opacity = 0.52;
        filter = "brightness(0.76) contrast(0.92)";
      } else if (absDiff === 4) {
        xOffset = (diff > 0 ? 1 : -1) * 740;
        zOffset = -310;
        yRotation = (diff > 0 ? -1 : 1) * 68;
        scale = 0.54;
        opacity = 0.28;
        filter = "brightness(0.66) contrast(0.90)";
      }
    } else if (isTablet) {
      // Tablet parameters
      if (absDiff === 0) {
        xOffset = 0;
        zOffset = 0;
        yRotation = 0;
        scale = 1;
        opacity = 1;
      } else if (absDiff === 1) {
        xOffset = (diff > 0 ? 1 : -1) * 190;
        zOffset = -60;
        yRotation = (diff > 0 ? -1 : 1) * 28;
        scale = 0.86;
        opacity = 0.92;
      } else if (absDiff === 2) {
        xOffset = (diff > 0 ? 1 : -1) * 340;
        zOffset = -130;
        yRotation = (diff > 0 ? -1 : 1) * 44;
        scale = 0.72;
        opacity = 0.68;
      }
    } else {
      // Mobile parameters (clean 3-card focus)
      if (absDiff === 0) {
        xOffset = 0;
        zOffset = 0;
        yRotation = 0;
        scale = 1;
        opacity = 1;
      } else if (absDiff === 1) {
        xOffset = (diff > 0 ? 1 : -1) * 145;
        zOffset = -50;
        yRotation = (diff > 0 ? -1 : 1) * 26;
        scale = 0.84;
        opacity = 0.85;
      }
    }

    // Add interactive drag inertia preview
    if (isDragging && !isCenter) {
      xOffset += dragDeltaX * 0.2;
    } else if (isDragging && isCenter) {
      xOffset += dragDeltaX * 0.35;
    }

    const zIndex = 50 - absDiff * 10;

    return {
      style: {
        transform: `translate3d(${xOffset}px, 0px, ${zOffset}px) rotateY(${yRotation}deg) scale(${scale})`,
        zIndex,
        opacity,
        filter,
        cursor: isCenter ? "grab" : "pointer",
        transition: isDragging
          ? "none"
          : "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.7s ease, filter 0.7s ease",
      },
      diff,
    };
  };

  const currentSlide = CAROUSEL_SLIDES[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[620px] lg:min-h-[720px] flex flex-col items-center justify-center overflow-hidden select-none bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      style={{ touchAction: "pan-y" }}
      aria-roledescription="carousel"
      aria-label="Star Gardens 3D Landscape Architecture Showcase"
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

        {/* Seamless White Blending Top Vignette (fixed navigation rests atop pure crisp white) */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none" />

        {/* Seamless White Blending Bottom Vignette (merges smoothly into white / #FAF8F5 campus strip) */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none" />
      </div>

      {/* 2. 3D PERSPECTIVE STAGE */}
      <div
        className="relative z-10 w-full max-w-7xl flex items-center justify-center pt-6 sm:pt-10 pb-6"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="relative flex items-center justify-center w-[215px] h-[320px] sm:w-[265px] sm:h-[395px] lg:w-[315px] lg:h-[465px]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {CAROUSEL_SLIDES.map((slide, index) => {
            const { style, diff } = getSlideStyle(index);
            const isCenter = diff === 0;

            return (
              <div
                key={slide.id}
                onClick={() => handleCardClick(index, diff)}
                className="absolute inset-0 flex flex-col items-center justify-center will-change-transform"
                style={style}
                aria-hidden={!isCenter}
                tabIndex={isCenter ? 0 : -1}
              >
                {/* 2A. MAIN PERSPECTIVE IMAGE CARD (ZERO TEXT OVERLAYS, CLEAN FLOATING ELEVATION) */}
                <div
                  className={`relative w-full h-full rounded-[28px] sm:rounded-[32px] overflow-hidden transition-all duration-500 ${
                    isCenter
                      ? "ring-1 ring-white/90 shadow-[0_14px_35px_-8px_rgba(25,61,43,0.14)]"
                      : "ring-1 ring-white/50 shadow-[0_8px_20px_-6px_rgba(25,61,43,0.08)] hover:ring-white/80"
                  }`}
                  style={{
                    backgroundColor: "#193D2B",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={isCenter || Math.abs(diff) <= 1}
                    unoptimized
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
                    className="object-cover object-center select-none pointer-events-none"
                    draggable={false}
                  />

                  {/* Delicate Inner Highlight Rim */}
                  <div className="absolute inset-0 rounded-[28px] sm:rounded-[32px] ring-1 ring-inset ring-white/25 pointer-events-none" />

                  {/* Subtle Top Specular Sheen */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. MINIMAL PAGINATION PILL & DOT NAVIGATION (ELEGANT BOTANICAL ACCENT) */}
      <div className="relative z-20 flex items-center justify-center gap-2 mt-2 sm:mt-6 px-4">
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
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
            />
          );
        })}
      </div>

      {/* 4. DISCRETE FLOATING NAVIGATION ARROWS (FROSTED GLASS) */}
      <div className="absolute inset-y-0 left-4 sm:left-8 flex items-center z-20 pointer-events-none">
        <button
          onClick={goToPrev}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/85 hover:bg-white border border-[#D4DFD7] text-[#193D2B] backdrop-blur-md flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all group focus:outline-none focus:ring-2 focus:ring-[#193D2B]/40"
          aria-label="Previous landscape slide"
        >
          <ChevronLeft className="w-5 h-5 text-[#193D2B] transition-transform group-hover:-translate-x-0.5" />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 sm:right-8 flex items-center z-20 pointer-events-none">
        <button
          onClick={goToNext}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/85 hover:bg-white border border-[#D4DFD7] text-[#193D2B] backdrop-blur-md flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all group focus:outline-none focus:ring-2 focus:ring-[#193D2B]/40"
          aria-label="Next landscape slide"
        >
          <ChevronRight className="w-5 h-5 text-[#193D2B] transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
