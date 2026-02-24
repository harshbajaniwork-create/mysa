"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "About Manali",
    image: "/images/4.png",
    description: "History, culture and soul",
  },
  {
    title: "Places to Go",
    image: "/images/5.png",
    description: "Breathtaking landscapes",
  },
  {
    title: "Things to Do",
    image: "/images/6.png",
    description: "Adventures and experiences",
  },
];

const CategorySection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <span className="text-accent uppercase tracking-[0.2em] font-bold text-sm mb-4 block">
              Destination
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Explore Manali
            </h2>
          </div>
          <button className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-accent hover:border-accent transition-all">
            VIEW ALL
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {cat.title}
                </h3>
                <p className="text-white/70 text-sm overflow-hidden h-0 group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
