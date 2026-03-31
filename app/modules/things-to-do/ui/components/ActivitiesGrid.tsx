"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Activity {
  title: string;
  description: string;
  image: string;
}

interface ActivitiesGridProps {
  activities: Activity[];
}

const ActivitiesGrid = ({ activities }: ActivitiesGridProps) => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-2/2 rounded-2xl overflow-hidden shadow-md mb-6">
              <Image
                src={activity.image}
                alt={activity.title}
                width={500}
                height={500}
                loading="lazy"
                className="object-cover h-full w-full transition-transform duration-700 group-hover:scale-110 object-center"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
            </div>

            {/* Text Content */}
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
              {activity.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {activity.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesGrid;
