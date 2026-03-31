"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/shared/HeroSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { CardSlider } from "@/components/CardSlider";
import ActivitiesGrid from "../components/ActivitiesGrid";

interface Activity {
  title: string;
  description: string;
  image: string;
}

interface SliderImage {
  image: string;
  title: string;
  subtitle: string;
}

interface ThingsToDoData {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  sliderImages: SliderImage[];
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

        {/* Bottom: side-by-side layout for slider and text */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <CardSlider
              images={data.sliderImages.map(s => s.image)}
              onIndexChange={setCurrentSlideIndex}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 flex flex-col items-start justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {data.sliderImages[currentSlideIndex]?.title}
                </h3>
                <p className="text-xl text-gray-600 font-light">
                  {data.sliderImages[currentSlideIndex]?.subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <ActivitiesGrid activities={data.activities} />
    </main>
  );
};

export default ThingsToDoView;
