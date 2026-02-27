"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { PROPERTIES } from "@/constants/properties";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";
import { Trees, Mountain, Wind } from "lucide-react";

const PropertiesView = () => {
  const [sortBy, setSortBy] = useState<"price-low" | "price-high" | "rating">(
    "price-low",
  );

  const sortedProperties = useMemo(() => {
    return [...PROPERTIES].sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [sortBy]);

  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#FAFAFA] relative overflow-hidden">
      {/* Dark Top Section for Navbar Contrast */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-primary rounded-b-[4rem] -z-10" />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-black/20 to-transparent -z-10" />

      {/* Dynamic Background Decorations */}
      <motion.div
        animate={{
          rotate: 360,
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-6">
        {/* Funky Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border/50 px-4 py-2 rounded-2xl mb-6 shadow-sm"
            >
              <div className="flex gap-1 text-secondary">
                <Trees size={16} />
                <Mountain size={16} />
                <Wind size={16} />
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-primary">
                Discover Mysa Spaces
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-primary leading-[0.9] tracking-tighter"
            >
              OUR <br />
              <span className="text-accent underline decoration-secondary/30 decoration-wavy underline-offset-8">
                STAYS.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl text-muted-foreground font-medium max-w-lg leading-relaxed"
            >
              Handpicked Himalayan sanctuaries designed for the modern wanderer.
              Not just a room, but a rebirth.
            </motion.p>
          </div>

          <div className="hidden lg:block relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-48 h-48 rounded-[3rem] border-2 border-dashed border-primary/20 flex items-center justify-center p-8 text-center"
            >
              <p className="text-xs font-bold text-primary/60 uppercase tracking-widest leading-loose">
                Curated for <br />
                Conscious <br />
                Comfort
              </p>
            </motion.div>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar sortBy={sortBy} setSortBy={setSortBy} />

        {/* Property Grid - Staggered/Asymmetrical feel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 xl:gap-14">
          {sortedProperties.map((property, idx) => (
            <motion.div
              layout
              key={property.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                layout: { duration: 0.4, ease: "easeInOut" },
              }}
              className={idx % 2 !== 0 ? "md:translate-y-24" : ""}
            >
              <PropertyCard property={property} index={idx} />
            </motion.div>
          ))}
        </div>

        {/* Funky Footer CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-32 p-12 md:p-20 rounded-[4rem] bg-primary text-white overflow-hidden relative"
        >
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Can&apos;t find what you&apos;re{" "}
              <span className="text-accent italic">vibing</span> with?
            </h2>
            <p className="text-lg opacity-80 mb-10 font-medium">
              Our concierge can curate a private Himalayan experience just for
              you and your crew.
            </p>
            <button className="bg-accent text-primary px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white transition-all shadow-xl hover:shadow-accent/20">
              Text Our Concierge
            </button>
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] z-0 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] z-0 -translate-x-1/2 translate-y-1/2" />
        </motion.div>
      </div>
    </section>
  );
};

export default PropertiesView;
