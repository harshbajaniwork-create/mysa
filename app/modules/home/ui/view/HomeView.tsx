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
import GoogleReviews from "../components/GoogleReviews";

import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../../../../../components/LoadingScreen";
import { HOME_DATA, THINGS_TO_DO } from "@/constants";
import CircularCarousel from "../components/CircularCarousel";
import { PLACES_TO_GO } from "@/app/modules/places-to-go/constants";

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

        <ThingsToDoSection 
          categories={THINGS_TO_DO.map((category, idx) => ({
            id: idx,
            name: category.name,
            children: category.activities.slice(0, 3).map((act) => ({
              name: act.title,
              featured_description: act.description,
              featured_image: { url: act.image },
              slug: category.slug
            }))
          }))} 
        />

        <DestinationsSection 
          destinations={PLACES_TO_GO.slice(0, 5).map((place, idx) => ({
            id: idx,
            name: place.name,
            slug: place.slug,
            featured_image: { url: place.previewImage || place.heroImage }
          }))} 
        />

        <CircularCarousel radius={2200} slides={HOME_DATA.carousel} />

        <FactsSection facts={HOME_DATA.facts} />

        <ArticlesSection articles={HOME_DATA.articles} />

        <InteractiveMapCTA
          title={HOME_DATA.map_cta.title}
          description={HOME_DATA.map_cta.description}
        />

        <EventsSection events={HOME_DATA.events} />

        <GoogleReviews />

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
