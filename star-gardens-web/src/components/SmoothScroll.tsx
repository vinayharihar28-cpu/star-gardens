"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const REVEAL_SELECTOR =
  ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .slide-in-image, [data-slide-in]";

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
    let rafId: number | null = null;
    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false,
      });

      lenisRef.current = lenis;
      if (typeof window !== "undefined") {
        (window as any).__lenis = lenis;
      }

      // Synchronize Lenis with GSAP ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      function rafLoop(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(rafLoop);
      }
      rafId = requestAnimationFrame(rafLoop);
    }

    // Global intersection observer for scroll-triggered reveals
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed", "is-in-view");
            (entry.target as HTMLElement).setAttribute?.("data-revealed", "true");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px -10px 0px",
      }
    );
    observerRef.current = revealObserver;

    // Helper: observe a single element if it hasn't been revealed yet
    const observeSingleElement = (el: Element) => {
      if (el.classList.contains("is-revealed") || el.getAttribute("data-revealed") === "true") return;

      if (prefersReducedMotion) {
        el.classList.add("is-revealed", "is-in-view");
        el.setAttribute("data-revealed", "true");
        return;
      }

      const rect = el.getBoundingClientRect();
      const winHeight = window.innerHeight || 900;
      // If already inside or above the viewport, reveal smoothly
      if (rect.top < winHeight - 20 && rect.bottom > 0) {
        el.classList.add("is-revealed", "is-in-view");
        el.setAttribute("data-revealed", "true");
      } else {
        revealObserver.observe(el);
      }
    };

    const observeElements = () => {
      const targets = document.querySelectorAll(REVEAL_SELECTOR);
      targets.forEach(observeSingleElement);
    };

    // Check if the initial loading screen is active on first visit
    let introTimer: NodeJS.Timeout | null = null;
    let onIntroCompleteHandler: (() => void) | null = null;

    const triggerInitialReveals = () => {
      // Double requestAnimationFrame guarantees that the browser paints
      // the initial unrevealed state (opacity: 0, translateY) so the CSS transition visibly runs!
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          observeElements();
        });
      });
    };

    const isIntroDismissed =
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("sg-welcome-dismissed");

    const hasIntroScreen =
      !isIntroDismissed &&
      typeof document !== "undefined" &&
      !!document.getElementById("sg-loading-screen");

    if (hasIntroScreen) {
      onIntroCompleteHandler = () => {
        if (onIntroCompleteHandler) {
          window.removeEventListener("sg:intro-complete", onIntroCompleteHandler);
          onIntroCompleteHandler = null;
        }
        triggerInitialReveals();
      };
      window.addEventListener("sg:intro-complete", onIntroCompleteHandler);
      // Fallback timeout matching the fast multilingual welcome sequence
      introTimer = setTimeout(triggerInitialReveals, 3200);
    } else {
      triggerInitialReveals();
    }

    const timer = setTimeout(observeElements, 250);
    const timer2 = setTimeout(observeElements, 600);

    // MutationObserver: automatically catch any new scroll-reveal elements
    // that React adds to the DOM after the initial scan (e.g. due to state
    // changes, conditional rendering, or route transitions).
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        // Check added nodes
        for (const node of Array.from(mutation.addedNodes)) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          const el = node as Element;
          // Check if the added node itself is a reveal target
          if (el.matches && el.matches(REVEAL_SELECTOR)) {
            observeSingleElement(el);
          }
          // Check children of the added node
          const children = el.querySelectorAll?.(REVEAL_SELECTOR);
          if (children) {
            children.forEach(observeSingleElement);
          }
        }
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      if (introTimer) clearTimeout(introTimer);
      if (onIntroCompleteHandler) {
        window.removeEventListener("sg:intro-complete", onIntroCompleteHandler);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      revealObserver.disconnect();
      mutationObserver.disconnect();
      observerRef.current = null;
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  // When pathname changes, scroll to top, refresh ScrollTrigger, and observe newly mounted route elements
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    ScrollTrigger.refresh();

    const timer = setTimeout(() => {
      const observer = observerRef.current;
      const targets = document.querySelectorAll(REVEAL_SELECTOR);
      const winHeight = typeof window !== "undefined" ? window.innerHeight : 900;
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      requestAnimationFrame(() => {
        targets.forEach((el) => {
          if (prefersReducedMotion) {
            el.classList.add("is-revealed", "is-in-view");
            (el as HTMLElement).setAttribute?.("data-revealed", "true");
            return;
          }
          if (!el.classList.contains("is-revealed") && el.getAttribute("data-revealed") !== "true") {
            const rect = el.getBoundingClientRect();
            if (rect.top < winHeight - 20 && rect.bottom > 0) {
              el.classList.add("is-revealed", "is-in-view");
              (el as HTMLElement).setAttribute?.("data-revealed", "true");
            } else if (observer) {
              observer.observe(el);
            }
          }
        });
      });
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
