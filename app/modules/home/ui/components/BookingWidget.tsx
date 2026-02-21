"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookingWidgetProps {
  title: string;
  text: string;
  image: { url: string };
  locations: { id: number; name: string }[];
}

const BookingWidget: React.FC<BookingWidgetProps> = ({
  title,
  text,
  image,
  locations,
}) => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <img
        src={image.url}
        alt="Booking Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 mb-10 leading-relaxed"
          >
            {text}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <div className="bg-white rounded-full p-2 flex items-center shadow-lg w-full max-w-sm">
              <select className="flex-1 bg-transparent px-4 py-2 text-gray-900 font-medium focus:outline-none">
                <option value="">Where to stay?</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))}
              </select>
              <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors">
                Search
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
