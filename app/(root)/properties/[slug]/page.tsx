import PropertyDetailsView from "@/app/modules/properties/ui/views/PropertyDetailsView";
import { PROPERTIES } from "@/constants/properties";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.id === slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.name} | Mysa - Himalayan Sanctuaries`,
    description: property.tagline,
  };
}

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.id === slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = PROPERTIES.filter((p) => p.id !== slug).slice(0, 3);

  return (
    <PropertyDetailsView
      property={property}
      relatedProperties={relatedProperties}
    />
  );
}

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.id,
  }));
}
