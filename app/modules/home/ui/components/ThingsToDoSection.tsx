"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SubCategory {
  name: string;
  featured_description: string;
  featured_image: { url: string };
  slug: string;
}

interface Category {
  id: number;
  name: string;
  children: SubCategory[];
}

interface ThingsToDoSectionProps {
  categories: Category[];
}

const ThingsToDoSection: React.FC<ThingsToDoSectionProps> = ({
  categories,
}) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = categories[activeCategoryIndex];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Things to Do
        </h2>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-8 border-b border-gray-100 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryIndex(index)}
              className={`pb-4 text-sm font-bold tracking-widest uppercase transition-all relative ${
                activeCategoryIndex === index
                  ? "text-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {category.name}
              {activeCategoryIndex === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid / Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activeCategory?.children.map((child, idx) => (
              <motion.div
                key={`${activeCategory.id}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={child.featured_image.url}
                    alt={child.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {child.name}
                </h3>
                <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed">
                  {child.featured_description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ThingsToDoSection;
