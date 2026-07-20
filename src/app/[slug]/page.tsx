import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrekDetailLayout from "@/components/TrekDetailLayout";
import { getCategory, getTour, getTourMetadata, tours } from "@/lib/tours";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tour = getTour((await params).slug);
  return tour ? getTourMetadata(tour) : {};
}

export default async function TourPage({ params }: Props) {
  const tour = getTour((await params).slug);
  if (!tour) notFound();
  const category = getCategory(tour.category);

  return (
    <TrekDetailLayout
      path={tour.path}
      title={tour.title}
      subtitle={tour.subtitle}
      bannerImage={tour.image}
      duration={tour.duration}
      difficulty={tour.difficulty}
      maxAltitude={tour.maxAltitude}
      bestSeason={tour.bestSeason}
      groupSize={tour.groupSize}
      tourType={tour.tourType}
      price={tour.price}
      sectionHeadings={tour.sectionHeadings}
      detailLabels={tour.detailLabels}
      description={tour.description}
      highlights={tour.highlights}
      itinerary={tour.itinerary}
      included={tour.included}
      notIncluded={tour.notIncluded}
      faqs={tour.faqs}
      categoryPath={category?.path ?? "/circuits"}
      categoryTitle={category?.eyebrow ?? "Tous les circuits"}
    />
  );
}
