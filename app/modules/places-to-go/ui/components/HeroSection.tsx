"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name: string;
  heroImage: string;
}

const HeroSection = ({ name, heroImage }: HeroSectionProps) => {
  // Split name into words — first part goes top-left, last word(s) go bottom-right large
  const words = name.split(" ");
  const lastWord = words.length > 1 ? words[words.length - 1] : "";
  const firstPart = words.length > 1 ? words.slice(0, -1).join(" ") : name;

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={heroImage}
        alt={name}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/20" />

      {/* Title — top-left portion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-[35%] left-0 px-6 md:px-16 lg:px-24"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
          {firstPart}
        </h1>
      </motion.div>

      {/* Large decorative text — bottom-right */}
      {lastWord && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-0 right-0 pointer-events-none overflow-hidden"
        >
          <span className="block text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-white uppercase leading-none tracking-tighter translate-y-[15%]">
            {lastWord}
          </span>
        </motion.div>
      )}

      {/* Full name shown on smaller text for readability */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-12 left-0 px-6 md:px-16 lg:px-24"
      >
        <span className="text-lg md:text-xl text-white/80 font-light tracking-wide">
          {name}
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
