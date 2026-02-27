"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  MapPin,
  BedDouble,
  Users,
  Wifi,
  Flame,
  Utensils,
  Car,
  Waves,
  ArrowLeft,
  Mountain,
  Wind,
  Stars,
  Trees,
  Heart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/constants/properties";
import PropertyCard from "../components/PropertyCard";

interface PropertyDetailsViewProps {
  property: Property;
  relatedProperties: Property[];
}

const amenityIcons: Record<string, any> = {
  Fireplace: Flame,
  "High-speed Wi-Fi": Wifi,
  "Private Deck": Mountain,
  Kitchenette: Utensils,
  "Heated Bathroom": Waves,
  "Riverside Balcony": Waves,
  Jacuzzi: Waves,
  "King-size Bed": BedDouble,
  "Smart TV": Wind,
  "Room Service": Utensils,
  "Floor-to-ceiling glass": Wind,
  "Star-gazing Telescope": Stars,
  "Underfloor Heating": Flame,
  "Mini Bar": Utensils,
  "En-suite Spa": Waves,
  "Orchard Walk": Trees,
  "Traditional Himachali Food": Utensils,
  "Family Lounge": Users,
  "Pet Friendly": Heart,
  Parking: Car,
};

const PropertyDetailsView = ({
  property,
  relatedProperties,
}: PropertyDetailsViewProps) => {
  return (
    <section className="min-h-screen bg-white">
      {/* Immersive Top Header */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-white" />

        <Link
          href="/properties"
          className="absolute top-32 left-8 z-20 flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-2xl font-bold hover:bg-white hover:text-primary transition-all group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Stays
        </Link>
      </div>

      <div className="container mx-auto px-6 -mt-32 relative z-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT COLUMN: Gallery & Story */}
          <div className="lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-border/50"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-accent/20 text-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  {property.type}
                </span>
                <div className="flex items-center gap-1 text-primary font-bold text-sm">
                  <Star
                    size={16}
                    fill="currentColor"
                    className="text-secondary"
                  />
                  {property.rating} ({property.reviews} Reviews)
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-primary leading-[0.9] tracking-tighter mb-8 italic">
                {property.name.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    {i === 0 ? <br /> : " "}
                  </span>
                ))}
              </h1>

              <p className="text-2xl font-medium text-muted-foreground leading-relaxed mb-12">
                &ldquo;{property.tagline}&rdquo;
              </p>

              <div className="space-y-8 text-lg text-primary/80 leading-relaxed font-medium">
                <p>{property.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {property.gallery.slice(1).map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                    className="relative h-64 rounded-4xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={img}
                      alt={`${property.name} gallery ${i}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Details & Actions */}
          <div className="lg:w-5/12">
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Pricing & Booking Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-primary text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="text-accent text-sm font-black uppercase tracking-widest mb-2">
                        Price Per Night
                      </div>
                      <div className="text-5xl font-black">
                        ₹{property.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm text-center">
                      <div className="text-2xl font-black">100%</div>
                      <div className="text-[10px] font-bold uppercase tracking-tighter">
                        Organic
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-accent text-primary py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-white transition-all shadow-xl">
                    Request Booking
                  </button>
                  <p className="text-center mt-4 text-sm font-medium opacity-60">
                    No payment required now. Flexible cancellation.
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-full blur-[80px] z-0" />
              </motion.div>

              {/* Amenities & Specs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-secondary/5 border border-secondary/10 p-10 rounded-[3rem]"
              >
                <h3 className="text-2xl font-black text-primary mb-8 flex items-center gap-3">
                  <Wind className="text-secondary" /> Features
                </h3>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  {property.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity] || Stars;
                    return (
                      <div key={amenity} className="flex items-center gap-3">
                        <div className="p-3 bg-white rounded-xl text-secondary shadow-sm">
                          <Icon size={18} />
                        </div>
                        <span className="text-sm font-bold text-primary/80 leading-tight">
                          {amenity}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12 pt-12 border-t border-secondary/10 grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                      Capacity
                    </span>
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <Users size={18} /> {property.capacity}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-muted-foreground">
                      Type
                    </span>
                    <div className="flex items-center gap-2 font-bold text-primary">
                      <BedDouble size={18} /> {property.type}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Nearby Locations */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="p-10"
              >
                <h3 className="text-2xl font-black text-primary mb-6">
                  Nearby Gems
                </h3>
                <div className="space-y-4">
                  {property.nearby.map((loc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-white border border-border/50 rounded-2xl hover:border-secondary/30 transition-all cursor-default group"
                    >
                      <div className="flex items-center gap-3 font-bold text-primary">
                        <MapPin
                          size={18}
                          className="text-accent group-hover:scale-125 transition-transform"
                        />
                        {loc.name}
                      </div>
                      <span className="text-xs font-black text-secondary bg-secondary/5 px-2 py-1 rounded-lg">
                        {loc.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RELATED CONTENT: Other Rooms */}
        <div className="mt-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
              YOU MIGHT ALSO <br />
              <span className="text-secondary underline decoration-accent decoration-wavy underline-offset-8">
                VIBE WITH
              </span>
            </h2>
            <Link
              href="/properties"
              className="font-bold text-primary hover:text-accent transition-colors flex items-center gap-2 group"
            >
              View all stays
              <ArrowLeft
                size={18}
                className="rotate-180 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProperties.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetailsView;
