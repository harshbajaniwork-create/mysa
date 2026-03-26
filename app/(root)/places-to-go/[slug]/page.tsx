import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PlacesView from "@/app/modules/places-to-go/ui/view/PlacesView";
import { PLACES_TO_GO } from "@/app/modules/places-to-go/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PLACES_TO_GO.map((place) => ({
    slug: place.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const place = PLACES_TO_GO.find((p) => p.slug === slug);

  if (!place) {
    return { title: "Place Not Found — Mysa" };
  }

  return {
    title: `${place.name} — Places to Go | Mysa`,
    description: place.tagline,
  };
}

export default async function PlacesPage({ params }: PageProps) {
  const { slug } = await params;
  const place = PLACES_TO_GO.find((p) => p.slug === slug);

  if (!place) {
    notFound();
  }

  return <PlacesView place={place} />;
}
