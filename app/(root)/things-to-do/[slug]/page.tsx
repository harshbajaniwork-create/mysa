import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { THINGS_TO_DO } from "@/constants";
import ThingsToDoView from "@/app/modules/things-to-do/ui/view/ThingsToDoView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return THINGS_TO_DO.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = THINGS_TO_DO.find((item) => item.slug === slug);

  if (!data) {
    return { title: "Not Found — Mysa" };
  }

  return {
    title: `${data.name} — Things to Do | Mysa`,
    description: data.tagline,
  };
}

export default async function ThingsToDoPage({ params }: PageProps) {
  const { slug } = await params;
  const data = THINGS_TO_DO.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return <ThingsToDoView data={data} />;
}
