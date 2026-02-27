"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, MapPin, ArrowUpRight, BedDouble, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/constants/properties";

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1],
      }}
      viewport={{ once: true }}
      className="group relative bg-white overflow-hidden rounded-4xl border border-border/50 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl"
    >
      {/* Funky Floating Badge */}
      <div className="absolute top-6 left-6 z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="bg-accent text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-sm"
        >
          <Star size={14} fill="currentColor" />
          {property.rating} ({property.reviews})
        </motion.div>
      </div>

      {/* Image Container with Organic Border Radius Effect */}
      <div className="relative h-[300px] overflow-hidden m-3 rounded-3xl">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="h-full w-full"
        >
          <Image
            src={property.image}
            alt={property.name}
            fill
            className="object-cover transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-white"
          >
            <p className="text-sm font-medium opacity-90">{property.tagline}</p>
          </motion.div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 pt-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
              {property.name}
            </h3>
            <p className="text-muted-foreground flex items-center gap-1 text-sm mt-1">
              <MapPin size={14} /> Manali, Himachal Pradesh
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-secondary">
              ₹{property.price.toLocaleString()}
            </div>
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">
              Per Night
            </div>
          </div>
        </div>

        {/* Quick Specs */}
        <div className="flex gap-4 mb-8">
          <div className="flex items-center gap-1.5 text-xs font-medium bg-secondary/5 px-3 py-1.5 rounded-lg text-secondary">
            <BedDouble size={14} /> {property.type.split(" ")[0]}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium bg-primary/5 px-3 py-1.5 rounded-lg text-primary">
            <Users size={14} /> {property.capacity}
          </div>
        </div>

        {/* Buttons - Unique Interaction */}
        <div className="flex gap-3">
          <Link
            href={`/properties/${property.id}`}
            className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-secondary transition-all duration-300 group/btn"
          >
            View Details
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowUpRight size={18} />
            </motion.span>
          </Link>
          <button className="px-6 border-2 border-primary/20 text-primary py-4 rounded-2xl font-bold text-sm hover:border-primary hover:bg-primary/5 transition-all">
            Book Now
          </button>
        </div>
      </div>

      {/* Funky Background Shape Decor */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500" />
    </motion.div>
  );
};

export default PropertyCard;
