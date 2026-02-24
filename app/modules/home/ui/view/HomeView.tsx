"use client";

import React, { useEffect } from "react";

import Hero from "../components/Hero";
import ScalableImageSection from "../components/ScalableImageSection";
import ThingsToDoSection from "../components/ThingsToDoSection";
import DestinationsSection from "../components/DestinationsSection";
import FactsSection from "../components/FactsSection";
import ArticlesSection from "../components/ArticlesSection";
import InteractiveMapCTA from "../components/InteractiveMapCTA";
import EventsSection from "../components/EventsSection";
import BookingWidget from "../components/BookingWidget";

import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../../../../../components/LoadingScreen";
import { HOME_DATA } from "@/constants";
import CircularCarousel from "../components/CircularCarousel";

const HomeView = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Artificial delay to ensure all assets/animations are ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <main className="relative">
        <Hero />

        <ScalableImageSection
          title={HOME_DATA.scalable_image.title}
          imageUrls={HOME_DATA.scalable_image.imageUrls}
        />

        <ThingsToDoSection categories={HOME_DATA.things_to_do} />

        <DestinationsSection destinations={HOME_DATA.destinations} />

        <CircularCarousel radius={2200} slides={HOME_DATA.carousel} />

        <FactsSection facts={HOME_DATA.facts} />

        <ArticlesSection articles={HOME_DATA.articles} />

        <InteractiveMapCTA
          title={HOME_DATA.map_cta.title}
          description={HOME_DATA.map_cta.description}
        />

        <EventsSection events={HOME_DATA.events} />

        <BookingWidget
          title={HOME_DATA.booking.title}
          text={HOME_DATA.booking.text}
          image={HOME_DATA.booking.image}
          locations={HOME_DATA.booking_locations}
        />
      </main>
    </div>
  );
};

export default HomeView;
