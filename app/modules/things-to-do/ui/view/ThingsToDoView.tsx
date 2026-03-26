"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/shared/HeroSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { CardSlider } from "@/components/CardSlider";
import ActivitiesGrid from "../components/ActivitiesGrid";

interface Activity {
  title: string;
  description: string;
  image: string;
}

interface ThingsToDoData {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  sliderImages: string[];
  activities: Activity[];
}

interface ThingsToDoViewProps {
  data: ThingsToDoData;
}

const ThingsToDoView = ({ data }: ThingsToDoViewProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <HeroSection name={data.name} heroImage={data.heroImage} />

      {/* Breadcrumb */}
      <Breadcrumb category="Things to Do" categoryUrl="#" title={data.name} />

      {/* Visual Marvels Section — stacked: text top, slider bottom */}
      <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
        {/* Top: heading + description + counter */}
        <div className="px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Heading + inline counter */}
            <div className="flex items-start gap-4 mb-5">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Visual Marvels of{" "}
                <span className="text-accent">{data.name}</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>

        {/* Bottom: full-width large card slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CardSlider
            images={data.sliderImages}
            onIndexChange={setCurrentSlideIndex}
          />
        </motion.div>
      </section>

      {/* Activities Grid */}
      <ActivitiesGrid activities={data.activities} />
    </main>
  );
};

export default ThingsToDoView;
