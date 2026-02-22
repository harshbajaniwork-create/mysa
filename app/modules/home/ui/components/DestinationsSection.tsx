"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Destination {
  id: number;
  name: string;
  slug: string;
  featured_image: { url: string };
}

interface DestinationsSectionProps {
  destinations: Destination[];
}

const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  destinations,
}) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Destinations
            </h2>
            <p className="text-gray-500 text-lg">
              Don&apos;t miss these must-see hotspots!
            </p>
          </div>
          <button className="text-primary font-bold hover:underline mb-2">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative aspect-3/4 rounded-2xl overflow-hidden cursor-pointer"
            >
              <Image
                src={dest.featured_image.url}
                alt={dest.name}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-xl leading-tight">
                  {dest.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
