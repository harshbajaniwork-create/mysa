"use client";

import React from "react";
import { motion } from "framer-motion";

interface Fact {
  id: number;
  title: string;
  description: string;
  image: { url: string };
  bgColor: string;
}

interface FactsSectionProps {
  facts: Fact[];
}

const colorMap: Record<string, string> = {
  GreenPea: "bg-[#1B5E3C]",
  WineBerry: "bg-[#5D2233]",
  BigStone: "bg-[#162B44]",
  CowBoy: "bg-[#4D3A2F]",
  Cobalt: "bg-[#1E4A9E]",
};

const FactsSection: React.FC<FactsSectionProps> = ({ facts }) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interesting facts
          </h2>
          <p className="text-gray-500 text-lg">
            A few awesome facts about The Hidden Track!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, idx) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-3xl overflow-hidden flex flex-col h-full ${
                colorMap[fact.bgColor] || "bg-primary"
              }`}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={fact.image.url}
                  alt={fact.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 text-white">
                <h3 className="text-2xl font-bold mb-4">{fact.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">
                  {fact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
