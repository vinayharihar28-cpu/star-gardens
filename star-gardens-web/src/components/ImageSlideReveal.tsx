"use client";

import React, { useEffect, useRef, useState } from "react";

interface ImageSlideRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "zoom";
  delay?: number;
  duration?: number;
  curtain?: boolean;
}

export default function ImageSlideReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 900,
  curtain = false,
}: ImageSlideRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsRevealed(true);
      return;
    }

    const currentEl = elementRef.current;
    if (!currentEl) return;

    // Check if already inside viewport on mount
    const rect = currentEl.getBoundingClientRect();
    const winHeight = window.innerHeight || 900;
    if (rect.top < winHeight - 40 && rect.bottom > 0) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (currentEl) {
              observer.unobserve(currentEl);
            }
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(currentEl);

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  // Compute transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-48px) scale(0.96)";
      case "right":
        return "translateX(48px) scale(0.96)";
      case "zoom":
        return "scale(0.92)";
      case "up":
      default:
        return "translateY(48px) scale(0.96)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? "none" : getInitialTransform(),
        filter: isRevealed ? "blur(0px)" : "blur(2px)",
        transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms ease-out ${delay}ms`,
        willChange: "transform, opacity, filter",
      }}
    >
      {children}

      {/* Optional luxury architectural curtain unveil */}
      {curtain && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[#FAF4E7]"
          style={{
            transform: isRevealed ? "translateY(-101%)" : "translateY(0%)",
            transition: `transform ${Math.max(650, duration - 150)}ms cubic-bezier(0.65, 0, 0.35, 1) ${delay + 80}ms`,
          }}
        >
          {/* Accent canopy green edge line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#193D2B]" />
        </div>
      )}
    </div>
  );
}
