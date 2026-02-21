"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useSmoothedTransform } from "../../hooks/use-smooth-transform";
import { useUnit } from "../../hooks/use-unit";

interface ScalableImageSectionProps {
  title: string;
  /**
   * 7 images in order:
   * [0] left small tall
   * [1] left-stack top
   * [2] left-stack bottom
   * [3] CENTER (the expanding hero image)
   * [4] right-stack top
   * [5] right-stack bottom
   * [6] right small tall
   */
  imageUrls: string[];
}

const ScalableImageSection: React.FC<ScalableImageSectionProps> = ({
  title,
  imageUrls,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across the full 280svh section height
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ── Title: fades up and out early ──────────────────────────────────────
  const titleOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.18], [0, -30]);

  // ── Center image: 35vw → 100vw, 78vh → 100vh, radius 24px → 0px ───────
  const centerWidth = useUnit(
    useSmoothedTransform(scrollYProgress, [0.35, 0.85], [35, 100]),
    "vw",
  );
  const centerHeight = useUnit(
    useSmoothedTransform(scrollYProgress, [0.35, 0.85], [78, 100]),
    "vh",
  );
  const centerRadius = useUnit(
    useSmoothedTransform(scrollYProgress, [0.35, 0.75], [24, 0]),
    "px",
  );

  // ── Side columns: fade and slide outward ───────────────────────────────
  const sideOpacity = useSpring(
    useTransform(scrollYProgress, [0.4, 0.6], [1, 0]),
    { stiffness: 75, damping: 22 },
  );
  const leftX = useUnit(
    useSmoothedTransform(scrollYProgress, [0.35, 0.8], [0, -60]),
    "vw",
  );
  const rightX = useUnit(
    useSmoothedTransform(scrollYProgress, [0.35, 0.8], [0, 60]),
    "vw",
  );

  return (
    /**
     * 280svh tall section:
     *   - first 100svh = sticky hero visible
     *   - extra 180svh = scroll runway that drives the animation
     */
    <section
      ref={sectionRef}
      className="relative w-full bg-primary"
      style={{ height: "300svh" }}
    >
      {/* ── Phase 1: Normal Scrolling Title ── */}
      <div className="w-full flex justify-center pt-32 px-8">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="z-20 text-center pointer-events-none"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-accent leading-snug max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-geologica), sans-serif" }}
          >
            {title}
          </h2>
        </motion.div>
      </div>

      {/* ── Phase 2: Sticky Expanding Gallery ── */}
      {/* The container will pin when it reaches the top (or navbar height) */}
      <div
        className="sticky top-0 w-full overflow-hidden flex items-center justify-center"
        style={{ height: "100svh" }}
      >
        {/* Gallery Container */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* ── LEFT small tall ── */}
          <motion.div
            style={{ opacity: sideOpacity, x: leftX }}
            className="absolute left-[1vw] top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden z-0"
            aria-hidden
          >
            <div style={{ width: "10vw", height: "52vh" }}>
              <Image
                src={imageUrls[0] || "/images/1.png"}
                alt=""
                width={400}
                height={600}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* ── LEFT double stack ── */}
          <motion.div
            style={{ opacity: sideOpacity, x: leftX }}
            className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none z-0"
            aria-hidden
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ width: "16vw", height: "26vh", marginLeft: "12vw" }}
            >
              <Image
                src={imageUrls[1] || "/images/2.png"}
                alt=""
                width={500}
                height={350}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ width: "16vw", height: "26vh", marginLeft: "12vw" }}
            >
              <Image
                src={imageUrls[2] || "/images/3.png"}
                alt=""
                width={500}
                height={350}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* ── CENTER expanding image ── */}
          <motion.div
            className="absolute z-10 overflow-hidden"
            style={{
              width: centerWidth,
              height: centerHeight,
              borderRadius: centerRadius,
            }}
          >
            <Image
              src={imageUrls[3] || "/images/4.png"}
              alt="Feature"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>

          {/* ── RIGHT double stack ── */}
          <motion.div
            style={{ opacity: sideOpacity, x: rightX }}
            className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col gap-3 pointer-events-none z-0"
            aria-hidden
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ width: "16vw", height: "26vh", marginRight: "12vw" }}
            >
              <Image
                src={imageUrls[4] || "/images/5.png"}
                alt=""
                width={500}
                height={350}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{ width: "16vw", height: "26vh", marginRight: "12vw" }}
            >
              <Image
                src={imageUrls[5] || "/images/6.png"}
                alt=""
                width={500}
                height={350}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* ── RIGHT small tall ── */}
          <motion.div
            style={{ opacity: sideOpacity, x: rightX }}
            className="absolute right-[1vw] top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden z-0"
            aria-hidden
          >
            <div style={{ width: "10vw", height: "52vh" }}>
              <Image
                src={imageUrls[6] || "/images/7.png"}
                alt=""
                width={400}
                height={600}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScalableImageSection;
