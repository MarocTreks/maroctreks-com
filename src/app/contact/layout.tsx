import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact et réservation de votre trek au Maroc",
  description: "Contactez Maroc Treks pour un devis personnalisé : trek dans l’Atlas ou le Sahara, ascension du Toubkal, excursion ou circuit sur mesure.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}

