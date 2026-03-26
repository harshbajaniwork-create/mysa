"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Section {
  title: string;
  text: string;
  image: string;
}

interface ContentSectionProps {
  sections: Section[];
  introDescription: string;
}

const ContentSection = ({
  sections,
  introDescription,
}: ContentSectionProps) => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 md:py-20">
      {/* Intro description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mb-16 md:mb-24"
      >
        <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-light">
          {introDescription}
        </p>
      </motion.div>

      {/* Alternating content blocks */}
      <div className="space-y-20 md:space-y-32">
        {sections.map((section, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {section.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentSection;
