"use client";

import React from "react";
import { motion } from "framer-motion";

interface InteractiveMapCTAProps {
  title: string;
  description: string;
}

const InteractiveMapCTA: React.FC<InteractiveMapCTAProps> = ({
  title,
  description,
}) => {
  return (
    <section className="py-24 bg-[#1B5E3C] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/80 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#1B5E3C] px-12 py-5 rounded-full font-bold text-lg shadow-xl shrink-0"
          >
            Open Interactive Map
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapCTA;
