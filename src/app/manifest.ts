import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maroc Treks", short_name: "Maroc Treks", description: "Treks et randonnées guidés au Maroc.",
    start_url: "/", display: "standalone", background_color: "#f7f1e7", theme_color: "#e9762b", lang: "fr",
  };
}

