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
      {
        source: "/randonnee-dans-le-moyen-atlas-8-jours",
        destination: "/randonnee-moyen-atlas",
        permanent: true,
      },
      { source: "/:locale(en|es|nl)", destination: "/", permanent: true },
      { source: "/:locale(en|es|nl)/:path*", destination: "/:path*", permanent: true },
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
