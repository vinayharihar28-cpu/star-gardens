"use client";

import React, { useState, useEffect, useId, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface TextMorphProps {
  words?: string[];
  children?: string;
  morph?: "liquid" | "blur";
  color?: string;
  morphColor?: string;
  tint?: number;
  align?: "left" | "center" | "right";
  fontFamily?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  letterSpacing?: number | string;
  interval?: number;
  duration?: number;
  stagger?: number;
  staggerFrom?: "start" | "end" | "center" | "edges" | "random";
  travel?: number;
  goo?: number;
  swell?: number;
  softness?: number;
  scale?: number;
  trigger?: "auto" | "hover" | "click";
  loop?: boolean;
  intro?: boolean;
  startOnView?: boolean;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

/**
 * Text Morph Component
 * Smoothly morphs words and editorial headlines letter-by-letter with shared letters
 * gliding into their new layout positions, and leaving/entering letters dissolving with liquid/blur grace.
 */
export default function TextMorph({
  words = ["Where Nature Meets Design."],
  children,
  morph = "liquid",
  color = "currentColor",
  morphColor = "#D8B4F8",
  tint = 0.3,
  align = "center",
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  interval = 3.8,
  duration = 0.9,
  loop = true,
  trigger = "auto",
  className = "",
  style = {},
  as = "h1",
}: TextMorphProps) {
  const componentId = useId();

  // Normalize words list
  const wordList = useMemo(() => {
    if (children && (!words || words.length === 0 || words[0] === "Where Nature Meets Design.")) {
      return [children];
    }
    return words && words.length > 0 ? words : ["Where Nature Meets Design."];
  }, [words, children]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto transition interval
  useEffect(() => {
    if (trigger !== "auto" || wordList.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= wordList.length - 1) {
          return loop ? 0 : prev;
        }
        return prev + 1;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [trigger, wordList, interval, loop]);

  const currentText = wordList[currentIndex] || "";

  // Assign stable occurrence-based layout IDs for characters
  const characters = useMemo(() => {
    const counts: Record<string, number> = {};
    return currentText.split("").map((char, index) => {
      const lower = char.toLowerCase();
      const count = counts[lower] || 0;
      counts[lower] = count + 1;
      return {
        key: `${componentId}-${lower}-${count}`,
        char,
        index,
      };
    });
  }, [currentText, componentId]);

  const alignClass =
    align === "left" ? "justify-start text-left" : align === "right" ? "justify-end text-right" : "justify-center text-center";

  const Component = as as keyof React.JSX.IntrinsicElements;

  return (
    <Component
      className={`relative inline-flex flex-wrap items-center ${alignClass} select-none ${className}`}
      style={{
        color,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        ...style,
      }}
      aria-label={currentText}
    >
      <span className="sr-only">{currentText}</span>
      <span className="inline-flex flex-wrap items-baseline justify-center" aria-hidden="true">
        <AnimatePresence mode="popLayout" initial={false}>
          {characters.map((item) => (
            <motion.span
              key={item.key}
              layoutId={item.key}
              initial={{
                opacity: 0,
                y: morph === "liquid" ? 14 : 0,
                filter: morph === "blur" ? "blur(8px)" : "blur(4px)",
                scale: 0.88,
                color: tint > 0 ? morphColor : color,
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
                color,
              }}
              exit={{
                opacity: 0,
                y: morph === "liquid" ? -14 : 0,
                filter: morph === "blur" ? "blur(8px)" : "blur(4px)",
                scale: 0.92,
                color: tint > 0 ? morphColor : color,
              }}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 420,
                  damping: 34,
                  mass: 0.75,
                },
                opacity: { duration: duration * 0.45 },
                y: { duration: duration * 0.55, ease: [0.16, 1, 0.3, 1] },
                filter: { duration: duration * 0.45 },
                color: { duration: duration * 0.6 },
              }}
              style={{
                display: "inline-block",
                whiteSpace: item.char === " " ? "pre" : "normal",
              }}
            >
              {item.char === " " ? "\u00A0" : item.char}
            </motion.span>
          ))}
        </AnimatePresence>
      </span>
    </Component>
  );
}
