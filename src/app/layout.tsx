import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maroc Treks - Randonnées & Treks au Maroc",
  description:
    "Votre guide pour le trekking dans l'Atlas et le désert. Vivez l'aventure au Sahara et partez pour un trekking inoubliable dans les montagnes de l'Atlas marocain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col bg-brand-sand text-brand-slate">
        {children}
      </body>
    </html>
  );
}
