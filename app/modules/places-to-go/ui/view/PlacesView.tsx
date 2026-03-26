"use client";

import React from "react";
import HeroSection from "@/components/shared/HeroSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ContentSection from "../components/ContentSection";
import RelatedPlaces from "../components/RelatedPlaces";
import { PLACES_TO_GO } from "../../constants";

interface PlaceData {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  heroImage: string;
  previewImage: string;
  sections: {
    title: string;
    text: string;
    image: string;
  }[];
}

interface PlacesViewProps {
  place: PlaceData;
}

const PlacesView = ({ place }: PlacesViewProps) => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection name={place.name} heroImage={place.heroImage} />
      <Breadcrumb
        category="Places to Go"
        categoryUrl="/places-to-go"
        title={place.name}
      />
      <ContentSection
        sections={place.sections}
        introDescription={place.description}
      />
      <RelatedPlaces places={PLACES_TO_GO} currentSlug={place.slug} />
    </main>
  );
};

export default PlacesView;
