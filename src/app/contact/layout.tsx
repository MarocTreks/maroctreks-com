import type { ReactNode } from "react";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Réserver un trek au Maroc : contact et devis",
  description: "Contactez directement Maroc Treks pour organiser votre trek privé, ascension du Toubkal ou excursion depuis Marrakech et recevoir un devis personnalisé.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
