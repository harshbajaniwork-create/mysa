"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────
export interface CarouselSlide {
  type: "image" | "info";
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  accentColor?: string;
}

interface CircularCarouselProps {
  slides: readonly CarouselSlide[];
  radius?: number;
}

// ─── Constants (Desktop Defaults) ──────────────────────────────────────────
const CARD_W_DESK = 500;
const CARD_H_DESK = 600;
const IMG_W_DESK = 500;
const IMG_H_DESK = 600;

// ─── Constants (Mobile Defaults) ───────────────────────────────────────────
const CARD_W_MOB = 300;
const CARD_H_MOB = 350;
const IMG_W_MOB = 300;
const IMG_H_MOB = 350;

const STEP_DEG = 15; // 15° between each slot
const SLOTS = Math.round(360 / STEP_DEG); // 24 total slots on the wheel

// How many degrees off-centre a card must be before it becomes invisible.
// With STEP=15 and VISIBLE_RANGE=23, only the centre card + one each side are shown.
const VISIBLE_RANGE = 23;

// ─── Component ────────────────────────────────────────────────────────────────
const CircularCarousel: React.FC<CircularCarouselProps> = ({
  slides,
  radius = 1400, // smaller radius → cards appear closer together
}) => {
  const N = slides.length;

  // DOM refs
  const wheelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoverLerps = useRef<number[]>([]); // Interpolated hover state [0..1]

  // RAF — use a ref to avoid the self-reference issue with useCallback
  const rafId = useRef<number>(0);
  const tickRef = useRef<() => void>(() => {});

  // Physics state (all refs — no setState during animation)
  const curDeg = useRef(0);
  const tgtDeg = useRef(0);

  // Drag
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartDeg = useRef(0);
  const velDeg = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);

  // Cursor (low-freq React state is fine)
  const [cursorMode, setCursorMode] = useState<"grab" | "grabbing">("grab");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Responsive dimensions
  const cw = isMobile ? CARD_W_MOB : CARD_W_DESK;
  const ch = isMobile ? CARD_H_MOB : CARD_H_DESK;
  const iw = isMobile ? IMG_W_MOB : IMG_W_DESK;
  const ih = isMobile ? IMG_H_MOB : IMG_H_DESK;
  const effectiveRadius = isMobile ? radius * 0.6 : radius;

  // ── Precompute fixed slot geometry ───────────────────────────────────────
  const slots = React.useMemo(
    () =>
      Array.from({ length: SLOTS }, (_, i) => {
        const slotAngle = i * STEP_DEG;
        const rad = (slotAngle * Math.PI) / 180;
        const x = Math.sin(rad) * effectiveRadius;
        const y = -Math.cos(rad) * effectiveRadius;
        const slide = slides[i % N];
        const isInfo = slide.type === "info";
        return {
          slotAngle,
          x,
          y,
          slide,
          isInfo,
          w: isInfo ? cw : iw,
          h: isInfo ? ch : ih,
        };
      }),
    [slides, N, effectiveRadius, cw, ch, iw, ih],
  );

  // ── RAF loop (stored in ref to allow self-call without useCallback circularity) ──
  useEffect(() => {
    tickRef.current = () => {
      // Initialize hover lerps if needed
      if (hoverLerps.current.length !== slots.length) {
        hoverLerps.current = new Array(slots.length).fill(0);
      }

      // Lerp current toward target
      curDeg.current += (tgtDeg.current - curDeg.current) * 0.1;
      const g = curDeg.current;

      // Rotate wheel pivot
      if (wheelRef.current) {
        wheelRef.current.style.transform = `rotate(${g}deg)`;
      }

      // Update each card
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const { slotAngle } = slots[i];

        // Net angle of this card in rotated frame, normalised to -180..180
        const net = (((slotAngle + g) % 360) + 360) % 360;
        const norm = net > 180 ? net - 360 : net;
        const dist = Math.abs(norm);

        // Hide cards far from centre — avoids seeing wrapped cards peek in
        if (dist > VISIBLE_RANGE + 5) {
          el.style.visibility = "hidden";
          return;
        }
        el.style.visibility = "visible";

        // Counter-rotate: card CSS rotate = norm - g
        const cardRotate = norm - g;

        // Smooth hover transition (approx 500ms feel)
        const isHovered = el.dataset.hovered === "1";
        const targetHover = isHovered ? 1 : 0;
        // 0.08 multiplier for smooth decay (~500ms feel at 60fps)
        hoverLerps.current[i] += (targetHover - hoverLerps.current[i]) * 0.08;
        const hLerp = hoverLerps.current[i];

        // Scale: 1.0 at centre, falls off toward sides, + boost for hover
        const baseScale = Math.max(0.7, 1 - dist * 0.005);
        const scale = baseScale + hLerp * 0.1; // Scale boost on hover

        // Opacity: crisp at centre, fades on edges
        const opacity =
          dist > VISIBLE_RANGE
            ? Math.max(0, 1 - (dist - VISIBLE_RANGE) * 0.3)
            : 1;

        el.style.transform = `rotate(${cardRotate}deg) scale(${scale})`;
        el.style.opacity = String(opacity);
      });

      rafId.current = requestAnimationFrame(tickRef.current);
    };
  }, [slots]);

  // Start the loop once on mount
  useEffect(() => {
    rafId.current = requestAnimationFrame(tickRef.current);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // ── Pointer handlers ─────────────────────────────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartDeg.current = tgtDeg.current;
    lastX.current = e.clientX;
    lastT.current = performance.now();
    velDeg.current = 0;
    setCursorMode("grabbing");
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!isDragging.current) return;

    const now = performance.now();
    const dt = now - lastT.current;
    if (dt > 0) {
      velDeg.current = ((e.clientX - lastX.current) * 0.05) / dt;
    }
    lastX.current = e.clientX;
    lastT.current = now;

    tgtDeg.current =
      dragStartDeg.current + (e.clientX - dragStartX.current) * 0.05;
  }, []);

  const onPointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setCursorMode("grab");

    const momentum = velDeg.current * 280;
    if (Math.abs(momentum) > 0.3) {
      tgtDeg.current += momentum;
    }
  }, []);

  // Vertical offset: where the center of the card sits relative to the bottom of the container.
  const verticalOffset = isMobile ? 380 : 500;
  const wheelSink = effectiveRadius - verticalOffset;

  return (
    <section>
      <div
        className="relative w-full overflow-hidden select-none"
        style={{
          height: isMobile ? "600px" : "100vh",
          background: "var(--background, #f5f4f0)",
          cursor: "none",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={() => {
          setShowCursor(false);
          if (isDragging.current) onPointerUp();
        }}
        onPointerEnter={() => setShowCursor(true)}
      >
        {/* ── Custom cursor ── */}
        {showCursor && (
          <div
            className="pointer-events-none fixed z-50 flex items-center justify-center rounded-full text-sm font-semibold"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
              width: cursorMode === "grabbing" ? 80 : 72,
              height: cursorMode === "grabbing" ? 80 : 72,
              transform: "translate(-50%, -50%)",
              background: "white",
              color: "#1a3a1a",
              boxShadow: "0 4px 24px rgba(0,0,0,0.14)",
              letterSpacing: "0.04em",
              transition: "width 0.12s, height 0.12s",
            }}
          >
            {cursorMode === "grabbing" ? "···" : "Drag"}
          </div>
        )}

        {/* ── Wheel pivot ── */}
        <div
          ref={wheelRef}
          style={{
            position: "absolute",
            left: "50%",
            top: `calc(100% + ${wheelSink}px)`,
            width: 0,
            height: 0,
            transformOrigin: "0 0",
            // RAF sets transform every frame — this is just the initial state
            transform: "rotate(0deg)",
          }}
        >
          {slots.map(({ x, y, slide, isInfo, w, h }, i) => (
            <div
              key={i}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{
                position: "absolute",
                left: x,
                top: y,
                width: w,
                height: h,
                marginLeft: -w / 2,
                marginTop: -h / 2,
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
                cursor: "none",
                willChange: "transform, opacity",
                transition: "box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.dataset.hovered = "1";
                el.style.boxShadow = "0 32px 80px rgba(0,0,0,0.24)";
                el.style.zIndex = "20";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                delete el.dataset.hovered;
                el.style.boxShadow = "0 8px 40px rgba(0,0,0,0.13)";
                el.style.zIndex = "10"; // Keep it slightly above others for a moment
              }}
            >
              {isInfo ? (
                <InfoCard slide={slide} />
              ) : (
                <ImageCard slide={slide} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="sm:text-6xl text-4xl font-bold text-blue-950">
          Interesting Facts
        </h1>
        <p className="sm:text-4xl text-2xl text-blue-950 text-center">
          A few awesome facts about The Track!
        </p>
      </div>
    </section>
  );
};

// ─── Info Card ────────────────────────────────────────────────────────────────
const InfoCard: React.FC<{ slide: CarouselSlide }> = ({ slide }) => (
  <div
    className="w-full h-full p-6 sm:p-10 flex flex-col justify-start gap-4 sm:gap-6 select-none transition-colors duration-500"
    style={{
      background: slide.accentColor ?? "var(--primary)",
      color: slide.accentColor === "#E2C091" ? "var(--primary)" : "white",
    }}
  >
    <DiamondIcon
      color={slide.accentColor === "#E2C091" ? "var(--primary)" : "white"}
    />
    <div className="flex flex-col gap-4 mt-2">
      <h2 className="text-inherit text-[1.75rem] font-bold leading-tight uppercase tracking-tight">
        {slide.title}
      </h2>
      <p className="text-inherit opacity-80 text-[0.95rem] leading-relaxed">
        {slide.description}
      </p>
    </div>
  </div>
);

// ─── Image Card ───────────────────────────────────────────────────────────────
const ImageCard: React.FC<{ slide: CarouselSlide }> = ({ slide }) => (
  <div className="w-full h-full relative">
    <Image
      src={slide.src ?? ""}
      alt={slide.alt ?? ""}
      fill
      draggable={false}
      className="object-cover"
      sizes="10"
      style={{ pointerEvents: "none" }}
    />
  </div>
);

// ─── Diamond Icon ─────────────────────────────────────────────────────────────
const DiamondIcon = ({ color = "white" }: { color?: string }) => {
  return (
    <div className="grid grid-cols-2 gap-1 w-max rotate-45 mb-4">
      <div className="w-3.5 h-3.5" style={{ backgroundColor: color }} />
      <div className="w-3.5 h-3.5" style={{ backgroundColor: color }} />
      <div className="w-3.5 h-3.5" style={{ backgroundColor: color }} />
      <div className="w-3.5 h-3.5" style={{ backgroundColor: color }} />
    </div>
  );
};

export default CircularCarousel;
