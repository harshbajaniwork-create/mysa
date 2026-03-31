"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

interface AboutHeroProps {
  title: string;
  quote: string;
  image: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ title, quote, image }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for parallax and reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring for motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transformations
  const imageScale = useTransform(smoothProgress, [0, 1], [1.1, 1.3]);
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);
  const cardY = useTransform(smoothProgress, [0, 1], ["0%", "-50px"]);
  const cardOpacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const textScale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[120svh] bg-primary overflow-hidden"
    >
      {/* 1. Cinematic Background Image — Monolithic Scale */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale: imageScale, y: imageY }}
      >
         {/* Subtle Tonal Overlay (Mist Effect) */}
         <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-primary/80 z-10" />
         <Image 
           src={image} 
           alt="Himalayan Majesty" 
           fill 
           className="object-cover" 
           priority 
         />
      </motion.div>

      {/* 2. Asymmetric Floating Card (Architectural Sanctuary) */}
      <div className="relative z-20 h-full w-full flex items-end justify-start px-6 md:px-16 lg:px-24 pb-24 md:pb-32">
        <motion.div
           style={{ y: cardY, opacity: cardOpacity, scale: textScale }}
           className="max-w-3xl bg-primary/20 backdrop-blur-2xl p-10 md:p-16 border-t border-l border-white/10 relative overflow-hidden"
        >
           {/* Glass Sheen Effect */}
           <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
           
           <motion.span 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="text-accent uppercase tracking-[0.4em] text-sm mb-6 block font-medium"
           >
             The Narrative
           </motion.span>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.7 }}
             className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-10 leading-[0.85]"
           >
             {title}
           </motion.h1>
           
           <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
             className="w-24 h-1 bg-accent mb-10 origin-left"
           />
           
           <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1.2 }}
             className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed max-w-xl"
           >
             {quote}
           </motion.p>
        </motion.div>
      </div>

      {/* 3. Bottom Gradient Edge (Tonal Carving) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent z-30" />
    </section>
  );
};

export default AboutHero;
