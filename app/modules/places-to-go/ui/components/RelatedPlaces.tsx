"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Place {
  name: string;
  slug: string;
  previewImage: string;
  tagline: string;
}

interface RelatedPlacesProps {
  places: Place[];
  currentSlug: string;
}

const RelatedPlaces = ({ places, currentSlug }: RelatedPlacesProps) => {
  // Get 4 related places (exclude current)
  const relatedPlaces = places
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
          You might also be interested in
        </h2>
        <p className="text-gray-600 mb-10">
          Explore more beautiful destinations near Manali
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedPlaces.map((place, index) => (
          <motion.div
            key={place.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/places-to-go/${place.slug}`} className="group block">
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={place.previewImage}
                  alt={place.name}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {place.name}
                  </h3>
                  <p className="text-white/70 text-sm line-clamp-2">
                    {place.tagline}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RelatedPlaces;
