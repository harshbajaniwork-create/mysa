"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Hiking in Dilijan",
    image: "/images/7.png",
    tag: "Adventure",
  },
  { id: 2, title: "Vineyard Tours", image: "/images/8.png", tag: "Gastro" },
  { id: 3, title: "Lake Sevan", image: "/images/9.png", tag: "Nature" },
];

const FeaturedExperiences = () => {
  return (
    <section className="py-24 px-6 bg-[#f9f9f9]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Featured Experiences
            </h2>
            <p className="text-primary/60">
              From the highest peaks to the deepest valleys, Himalaya offers a
              wealth of experiences for every traveler.
            </p>
          </div>
          <div className="flex space-x-4">
            {/* Carousel controls could go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-primary">
                  {exp.tag}
                </div>
              </div>
              <div className="px-2 pb-4">
                <h3 className="text-xl font-bold mb-4">{exp.title}</h3>
                <button className="text-primary/40 group-hover:text-primary transition-colors flex items-center font-bold text-sm uppercase tracking-wider">
                  Learn More
                  <span className="ml-2 transform translate-x-0 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;
