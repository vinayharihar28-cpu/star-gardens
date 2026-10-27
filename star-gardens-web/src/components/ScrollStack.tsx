"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollStack.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemStackDistance?: number;
  stackOffsetTop?: string | number;
  baseScale?: number;
  itemDistance?: number;
  onStackComplete?: () => void;
}

export interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  totalItems?: number;
  style?: React.CSSProperties;
}

/**
 * ScrollStackItem Component
 * Renders individual cards with strictly 0 rotation (no slant or cross),
 * hardware-accelerated transforms, and clean layered depth.
 */
export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  className = "",
  index = 0,
  style = {},
}) => {
  return (
    <div
      data-scroll-card-index={index}
      className={`scroll-stack-card w-full ${className}`}
      style={{
        zIndex: 10 + index,
        ...style,
      }}
    >
      <div className="w-full rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#193D2B]/10 overflow-hidden bg-white border border-[#D4DFD7]">
        {children}
      </div>
    </div>
  );
};

/**
 * ScrollStack Container Component
 * Powered by GSAP ScrollTrigger + Lenis integration.
 * - Cards glide in smoothly and land cleanly on the stack deck.
 * - Preceding cards scale down in clean scalar ratios and go behind.
 * - Strictly zero slant/rotation (cards stay 100% horizontal and level).
 * - Card 6 (CSR Plantation Drives) is properly contained and lands seamlessly in the stack.
 * - Entire deck unpins and continues smoothly into the next section when complete.
 * - Zero glitches or abrupt disappearing.
 */
export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemStackDistance = 12,
  baseScale = 0.85,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinStageRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const childArray = React.Children.toArray(children);
  const totalItems = childArray.length;

  useEffect(() => {
    const container = containerRef.current;
    const pinStage = pinStageRef.current;
    if (!container || !pinStage || totalItems <= 1) return;

    // Filter valid card elements
    const cards = cardElementsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length <= 1) return;

    // Use GSAP matchMedia for desktop pinning + mobile responsive handling
    const mm = gsap.matchMedia();

    // Desktop and Tablet viewports (>= 768px)
    mm.add("(min-width: 768px)", () => {
      // 1. Initial State: Card 0 is in place; Cards 1..N start below the viewport
      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "absolute",
          top: "16px",
          left: 0,
          right: 0,
          x: 0,
          y: i === 0 ? 0 : "105vh",
          scale: 1,
          rotate: 0,
          rotation: 0,
          skewX: 0,
          skewY: 0,
          transformOrigin: "center top",
          zIndex: 10 + i,
          filter: "brightness(1)",
          willChange: "transform, filter",
        });
      });

      // 2. Build scrubbed timeline with container pinning
      const scrollDistancePerCard = 600;
      const totalScrollDistance = (cards.length - 1) * scrollDistancePerCard + 300;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top+=100",
          end: () => `+=${totalScrollDistance}`,
          pin: pinStage,
          pinSpacing: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 3. For each card 1..totalItems - 1:
      // Slide current card smoothly up to y: 0.
      // Simultaneously, smoothly scale down all preceding cards in a clean scalar ratio.
      const scaleStep = (1 - baseScale) / (cards.length - 1);

      for (let i = 1; i < cards.length; i++) {
        const stepLabel = `step_${i}`;
        tl.addLabel(stepLabel);

        // Current incoming card glides up smoothly and lands cleanly on top
        tl.to(
          cards[i],
          {
            y: 0,
            scale: 1,
            rotate: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          stepLabel
        );

        // All preceding cards (0 to i - 1) scale down and shift up slightly
        for (let j = 0; j < i; j++) {
          const depth = i - j; // Depth in the stack
          // Scalar scale: clean proportional reduction down to baseScale
          const scalarRatio = Math.max(baseScale, 1 - depth * scaleStep);
          // Stepped header peek offset so card upper pills remain visible
          const yOffset = -depth * itemStackDistance;
          // Subtle natural depth dimming
          const brightness = Math.max(0.86, 1 - depth * 0.032);

          tl.to(
            cards[j],
            {
              scale: scalarRatio,
              y: yOffset,
              filter: `brightness(${brightness})`,
              rotate: 0,
              duration: 1.2,
              ease: "power2.out",
            },
            stepLabel
          );
        }
      }

      // Add a clean hold at the end so the user can easily review the final 6th card (CSR)
      tl.to({}, { duration: 0.6 });

      return () => {
        tl.kill();
      };
    });

    // Mobile viewports (< 768px)
    mm.add("(max-width: 767px)", () => {
      // On mobile devices, cards stack using responsive sticky offsets
      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "sticky",
          top: `${80 + i * 14}px`,
          y: 0,
          scale: 1,
          rotate: 0,
          zIndex: 10 + i,
          filter: "none",
        });
      });
    });

    // Refresh ScrollTrigger to ensure exact geometry calculation
    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, [totalItems, itemStackDistance, baseScale]);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-wrapper relative w-full ${className}`}
    >
      <div
        ref={pinStageRef}
        className="scroll-stack-stage relative w-full min-h-[580px] sm:min-h-[620px] md:min-h-[640px] pt-4 flex items-start justify-center"
      >
        {childArray.map((child, index) => {
          if (!React.isValidElement(child)) return child;
          return (
            <div
              key={index}
              ref={(el) => {
                cardElementsRef.current[index] = el;
              }}
              className="scroll-stack-item-outer w-full flex justify-center"
            >
              {React.cloneElement(child as React.ReactElement<any>, {
                index,
                totalItems,
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollStack;
