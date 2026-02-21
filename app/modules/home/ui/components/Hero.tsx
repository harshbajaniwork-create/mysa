"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useHeroClip } from "../../hooks/use-hero-clip";

const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // We scroll-track the whole section (which is taller than the viewport)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // ─── Border-radius: 134px → 0px ──────────────────────────────────────────
  const rawRadius = useTransform(scrollYProgress, [0, 0.7], [134, 0]);
  const borderRadius = useSpring(rawRadius, { stiffness: 120, damping: 25 });

  // ─── Bottom offset: 132px → 0px ─────────────────────────────────────────
  const rawBottom = useTransform(scrollYProgress, [0, 0.7], [132, 0]);
  const bottomOffset = useSpring(rawBottom, { stiffness: 120, damping: 25 });

  const clipPath = useHeroClip(borderRadius, bottomOffset);

  // ─── Parallax on the video ───────────────────────────────────────────────
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // ─── Text color: dark → white as video expands over it ─────────────────
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7],
    ["#1a1a1a", "#1a1a1a", "#ffffff"],
  );
  const subtitleColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7],
    ["#6b7280", "#6b7280", "rgba(255,255,255,0.85)"],
  );
  const scrollTextColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7],
    ["#9ca3af", "#9ca3af", "rgba(255,255,255,0.6)"],
  );

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Fallback: show hero even if video never fires onLoadedData
  useEffect(() => {
    const t = setTimeout(() => {
      if (!isVideoLoaded) setIsVideoLoaded(true);
    }, 3000);
    return () => clearTimeout(t);
  }, [isVideoLoaded]);

  return (
    /**
     * The outer section is 200vh tall.
     * The first 100vh is the "pinned" sticky hero viewport.
     * The extra 100vh gives scroll distance to drive the clip animation.
     * Your next page section sits naturally below this.
     */
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: "100svh" }}
    >
      {/* ── Sticky pinned hero ── */}
      <div className="sticky top-0 w-full" style={{ height: "100svh" }}>
        {/* Clip wrapper — video with rounded bottom + offset */}
        <motion.div
          className="relative w-full overflow-hidden"
          style={{
            height: "100%",
            clipPath,
          }}
        >
          {/* Parallax video layer */}
          <motion.div
            className="absolute inset-0 w-full"
            style={{ height: "130%", top: "-15%", y: videoY }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-b from-black/25 via-transparent to-black/60" />

            <video
              ref={videoRef}
              onLoadedData={handleVideoLoad}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source
                src="/media/Travel-Armenia_Hero-video-edit_08142025-2-15.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </motion.div>

        {/* ── Hero text — OUTSIDE the clip, sits in the 132px gap below video ── */}
        {/* As user scrolls the video expands (bottom offset → 0) and covers this text */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-20 flex items-center px-8 sm:px-12 md:px-16 lg:px-20 pointer-events-none"
          style={{ height: 132 }}
        >
          <div className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-20">
            {/* Title & Subtitle */}
            <div className="flex items-center justify-between w-full gap-2">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: isVideoLoaded ? 0 : "110%" }}
                  transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.9,
                  }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-geologica), sans-serif",
                    color: textColor,
                  }}
                >
                  The Hidden Track
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "110%" }}
                  animate={{ y: isVideoLoaded ? 0 : "110%" }}
                  transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 1.1,
                  }}
                  className="text-sm sm:text-base font-light max-w-md"
                  style={{ color: subtitleColor }}
                >
                  Dreaming about a captivating destination with hidden wonders?
                  You&apos;ve hit the spot!
                </motion.p>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVideoLoaded ? 1 : 0 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="overflow-hidden">
                <motion.p
                  className="text-[9px] font-bold uppercase tracking-[0.35em] rotate-180 [writing-mode:vertical-rl]"
                  style={{ color: scrollTextColor }}
                >
                  SCROLL
                </motion.p>
              </div>
              <ScrollArrow />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Animated Scroll Arrow ────────────────────────────────────────────────────
// Vertical travelling-light line + bouncing chevron
const ScrollArrow: React.FC = () => (
  <div className="flex flex-col items-center gap-1">
    {/* Line with travelling white light */}
    <div
      className="relative overflow-hidden"
      style={{ width: 1, height: 56, background: "rgba(255,255,255,0.2)" }}
    >
      <motion.div
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent, white, transparent)",
        }}
      />
    </div>

    {/* Chevron that bounces downward */}
    <motion.svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  </div>
);

export default Hero;
