"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Flag that JavaScript is active for progressive enhancement
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("js-ready");
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initialize smooth scrolling only if user has not requested reduced motion
    let rafId: number;
    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        infinite: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    }

    // Global intersection observer for scroll-triggered reveals
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed", "is-in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );
    observerRef.current = revealObserver;

    const observeElements = () => {
      const targets = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .slide-in-image, [data-slide-in]"
      );

      const winHeight = typeof window !== "undefined" ? window.innerHeight : 900;

      targets.forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add("is-revealed", "is-in-view");
          return;
        }

        if (!el.classList.contains("is-revealed")) {
          const rect = el.getBoundingClientRect();
          // If already inside or above the viewport on initial render, reveal immediately
          if (rect.top < winHeight - 30 && rect.bottom > 0) {
            el.classList.add("is-revealed", "is-in-view");
          } else {
            revealObserver.observe(el);
          }
        }
      });
    };

    // Run initial scan and follow-up ticks for images/fonts rendering
    observeElements();
    const timer = setTimeout(observeElements, 150);
    const timer2 = setTimeout(observeElements, 400);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      if (rafId) cancelAnimationFrame(rafId);
      revealObserver.disconnect();
      observerRef.current = null;
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  // When pathname changes, scroll to top and observe newly mounted route elements
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    const timer = setTimeout(() => {
      const observer = observerRef.current;
      const targets = document.querySelectorAll(
        ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .slide-in-image, [data-slide-in]"
      );
      const winHeight = typeof window !== "undefined" ? window.innerHeight : 900;
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      targets.forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add("is-revealed", "is-in-view");
          return;
        }
        if (!el.classList.contains("is-revealed")) {
          const rect = el.getBoundingClientRect();
          if (rect.top < winHeight - 30 && rect.bottom > 0) {
            el.classList.add("is-revealed", "is-in-view");
          } else if (observer) {
            observer.observe(el);
          }
        }
      });
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
