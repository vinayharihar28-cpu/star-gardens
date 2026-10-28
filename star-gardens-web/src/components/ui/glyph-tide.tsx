"use client";

import React, { useRef, useEffect, useCallback } from "react";

export interface GlyphTideProps {
  colors?: string[];
  backgroundColor?: string;
  characters?: string;
  fontSize?: number;
  fontFamily?: string;
  scale?: number;
  level?: number;
  tideRange?: number;
  tidePeriod?: number;
  waves?: number;
  foam?: number;
  contours?: number;
  depthFade?: number;
  brightness?: number;
  opacity?: number;
  speed?: number;
  interactive?: boolean;
  cursorRadius?: number;
  cursorStrength?: number;
  wakeLength?: number;
  clickRipples?: boolean;
  seed?: number;
  paused?: boolean;
  dpr?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * Glyph Tide Component
 * Generates an ethereal, luminous ASCII wave tide simulation with glowing glyphs
 * that flow visibly across the landscape and react dynamically to mouse movement.
 */
export default function GlyphTide({
  colors = ["#A3E635", "#C4B5FD", "#FAF9F5", "#86EFAC"],
  backgroundColor = "transparent",
  characters = " ·:~=+*#%@",
  fontSize = 11,
  fontFamily = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  scale = 1,
  level = 0.5,
  tideRange = 0.7,
  tidePeriod = 26,
  waves = 1.1,
  foam = 1.2,
  contours = 1.0,
  depthFade = 0.5,
  brightness = 1.0,
  opacity = 0.65,
  speed = 0.95,
  interactive = true,
  cursorRadius = 180,
  cursorStrength = 1.6,
  wakeLength = 2.2,
  clickRipples = true,
  seed = 42,
  paused = false,
  dpr = 2,
  className = "",
  style = {},
  children,
}: GlyphTideProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isVisibleRef = useRef(true);

  const pointerRef = useRef<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    prevX: number;
    prevY: number;
    vx: number;
    vy: number;
    active: boolean;
    lastActiveTime: number;
  }>({
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    prevX: -9999,
    prevY: -9999,
    vx: 0,
    vy: 0,
    active: false,
    lastActiveTime: 0,
  });

  const ripplesRef = useRef<
    Array<{ x: number; y: number; radius: number; maxRadius: number; strength: number; age: number }>
  >([]);

  // 2D pseudo-noise generator
  const hash2D = useCallback((x: number, y: number, s: number) => {
    const n = Math.sin(x * 12.9898 + y * 78.233 + s * 37.719) * 43758.5453123;
    return n - Math.floor(n);
  }, []);

  const smoothNoise = useCallback(
    (x: number, y: number, s: number) => {
      const i = Math.floor(x);
      const j = Math.floor(y);
      const fx = x - i;
      const fy = y - j;
      const sx = fx * fx * (3 - 2 * fx);
      const sy = fy * fy * (3 - 2 * fy);

      const a = hash2D(i, j, s);
      const b = hash2D(i + 1, j, s);
      const c = hash2D(i, j + 1, s);
      const d = hash2D(i + 1, j + 1, s);

      return a + (b - a) * sx + (c - a) * sy + (a - b - c + d) * sx * sy;
    },
    [hash2D]
  );

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "80px" }
    );
    observer.observe(container);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let totalTime = 0;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const currentDpr = Math.min(window.devicePixelRatio || 1, dpr);
      canvas.width = Math.max(1, Math.floor(rect.width * currentDpr));
      canvas.height = Math.max(1, Math.floor(rect.height * currentDpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Mouse & Pointer Hover Tracking
    const handlePointerMove = (e: PointerEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const p = pointerRef.current;
      if (isInside) {
        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;
        p.targetX = clientX;
        p.targetY = clientY;
        if (p.x === -9999) {
          p.x = clientX;
          p.y = clientY;
        }
        p.active = true;
        p.lastActiveTime = performance.now();
      } else {
        p.active = false;
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickRipples) return;
      const rect = container.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        ripplesRef.current.push({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          radius: 0,
          maxRadius: Math.max(rect.width, rect.height) * 0.48,
          strength: 1.3,
          age: 0,
        });
        if (ripplesRef.current.length > 7) {
          ripplesRef.current.shift();
        }
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    // Parse RGBA Palette
    const parsedColors = colors.map((col) => {
      if (col.startsWith("#")) {
        const hex = col.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16) || 160;
        const g = parseInt(hex.substring(2, 4), 16) || 220;
        const b = parseInt(hex.substring(4, 6), 16) || 160;
        return { r, g, b };
      }
      return { r: 250, g: 249, b: 245 };
    });

    const charList = characters.split("");
    const charCount = charList.length;

    // Render loop
    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isVisibleRef.current || (paused && !pointerRef.current.active)) {
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      if (!paused && !reducedMotion) {
        totalTime += dt * speed;
      }

      const rect = container.getBoundingClientRect();
      const currentDpr = Math.min(window.devicePixelRatio || 1, dpr);
      const width = rect.width;
      const height = rect.height;

      ctx.save();
      ctx.scale(currentDpr, currentDpr);

      if (backgroundColor === "transparent") {
        ctx.clearRect(0, 0, width, height);
      } else {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }

      // Smooth pointer position lerp
      const p = pointerRef.current;
      if (p.targetX !== -9999) {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx = dx * 0.22;
        p.vy = dy * 0.22;
        p.x += p.vx;
        p.y += p.vy;
      }

      // Update ripples
      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.age += dt;
        rip.radius += dt * 190;
        rip.strength *= 0.965;
        if (rip.radius > rip.maxRadius || rip.strength < 0.02) {
          ripples.splice(i, 1);
        }
      }

      const pointerInactiveDuration = (now - p.lastActiveTime) / 1000;
      const pointerInfluence = p.active
        ? 1
        : Math.max(0, 1 - pointerInactiveDuration / (wakeLength || 2.2));

      // Grid Dimensions
      const cellW = Math.max(9, fontSize * 0.8);
      const cellH = Math.max(13, fontSize * 1.45);
      const cols = Math.ceil(width / cellW);
      const rows = Math.ceil(height / cellH);

      ctx.font = `600 ${fontSize}px ${fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const tidePhase = (totalTime / tidePeriod) * Math.PI * 2;
      const globalTide = Math.sin(tidePhase) * 0.42 * tideRange + level;

      // Draw flowing glyph waves
      for (let r = 0; r < rows; r++) {
        const y = r * cellH + cellH / 2;
        const normY = y / height;

        // Soft top header fade (top 8% only) so upper navigation remains clear
        const topFade = normY < 0.08 ? normY / 0.08 : 1.0;

        for (let c = 0; c < cols; c++) {
          const x = c * cellW + cellW / 2;
          const normX = x / width;

          // Multi-harmonic wave field
          const nx = normX * 4.0 * scale;
          const ny = normY * 3.2 * scale;
          const wave1 = Math.sin(nx * 2.4 - totalTime * 1.2 + ny * 1.5);
          const wave2 = Math.cos(nx * 1.7 + totalTime * 0.85 - ny * 2.0);
          const noiseVal = smoothNoise(nx * 1.9 + totalTime * 0.22, ny * 1.9, seed);

          let waveHeight = (wave1 * 0.44 + wave2 * 0.36 + noiseVal * 0.4) * waves;
          const surfaceDistance = normY - globalTide + waveHeight * 0.22;

          // Pointer Hover Wake
          let hoverBoost = 0;
          if (pointerInfluence > 0.01 && p.x !== -9999) {
            const mdx = x - p.x;
            const mdy = y - p.y;
            const dist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (dist < cursorRadius) {
              const falloff = 1 - dist / cursorRadius;
              const smoothFalloff = falloff * falloff * (3 - 2 * falloff);
              const push = Math.sin(smoothFalloff * Math.PI) * cursorStrength * 0.45 * pointerInfluence;
              waveHeight += push;
              hoverBoost = smoothFalloff * 0.95 * pointerInfluence;
            }
          }

          // Ripples Influence
          for (let i = 0; i < ripples.length; i++) {
            const rip = ripples[i];
            const rdx = x - rip.x;
            const rdy = y - rip.y;
            const rDist = Math.sqrt(rdx * rdx + rdy * rdy);
            const deltaDist = Math.abs(rDist - rip.radius);
            if (deltaDist < 52) {
              const ripWave = Math.cos((deltaDist / 52) * Math.PI) * rip.strength * 0.5;
              waveHeight += ripWave;
            }
          }

          // Shoreline Foam and Continuous Flowing Wave Contours
          const shoreDistance = Math.abs(surfaceDistance);
          const isFoamLine = shoreDistance < 0.14 * foam;

          // Continuous wave crest modulation across the field
          const waveMod = Math.sin(nx * 2.6 - totalTime * 1.2 + ny * 1.6 + surfaceDistance * 18);
          const secondaryMod = Math.cos(nx * 1.8 + totalTime * 0.7 - ny * 1.4);
          const waveBand = waveMod * 0.55 + secondaryMod * 0.45;

          let intensity = 0;
          if (isFoamLine) {
            intensity = (1 - shoreDistance / (0.14 * foam)) * 0.9;
          } else if (waveBand > 0.15) {
            // Distinct undulating wave crest contours that are continuously visible
            intensity = (waveBand - 0.15) * 0.75 * contours;
          } else if (noiseVal > 0.58) {
            // Shimmering water particles
            intensity = (noiseVal - 0.58) * 0.8;
          }

          // Combine with hover aura and brightness
          intensity = (intensity + hoverBoost * 0.8) * brightness * topFade;

          // Skip completely empty cells
          if (intensity <= 0.08) continue;

          // Map intensity to character ramp
          const charIdx = Math.min(charCount - 1, Math.floor(Math.min(1, intensity) * charCount));
          const glyph = charList[charIdx];
          if (!glyph || glyph === " ") continue;

          // Color selection
          let colIdx = 0;
          if (hoverBoost > 0.3 || isFoamLine) {
            colIdx = 2; // Pure luminous white highlight
          } else if (intensity > 0.5) {
            colIdx = 1; // Delicate lavender/violet
          } else {
            colIdx = 0; // Fresh botanical sage
          }

          const col = parsedColors[colIdx % parsedColors.length];

          // Balanced, clearly visible opacity
          const alpha = Math.min(0.85, (0.22 + intensity * 0.55) * opacity + hoverBoost * 0.25);

          ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${alpha.toFixed(2)})`;
          ctx.fillText(glyph, x, y);
        }
      }

      ctx.restore();
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("click", handleClick);
    };
  }, [
    colors,
    backgroundColor,
    characters,
    fontSize,
    fontFamily,
    scale,
    level,
    tideRange,
    tidePeriod,
    waves,
    foam,
    contours,
    depthFade,
    brightness,
    opacity,
    speed,
    interactive,
    cursorRadius,
    cursorStrength,
    wakeLength,
    clickRipples,
    seed,
    paused,
    dpr,
    smoothNoise,
  ]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none ${className}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
        aria-hidden="true"
      />
      {children && <div className="relative z-10 w-full h-full pointer-events-auto">{children}</div>}
    </div>
  );
}
