import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/s0d4bpze/image/upload/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/acceuil", destination: "/", permanent: true },
      { source: "/tous-les-circuits", destination: "/circuits", permanent: true },
      { source: "/privacy-policy", destination: "/politique-confidentialite", permanent: true },
      { source: "/terms-of-use", destination: "/mentions-legales", permanent: true },
      { source: "/terms-conditions", destination: "/conditions-reservation", permanent: true },
      { source: "/terms-and-conditions", destination: "/conditions-reservation", permanent: true },
      { source: "/galleries", destination: "/qui-sommes-nous", permanent: true },
      { source: "/galeries", destination: "/qui-sommes-nous", permanent: true },
      {
        source: "/randonnee-dans-le-moyen-atlas-8-jours",
        destination: "/randonnee-moyen-atlas",
        permanent: true,
      },
      { source: "/:locale(fr|en|es|nl)", destination: "/", permanent: true },
      { source: "/:locale(fr|en|es|nl)/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
