import type { NextConfig } from "next";

const { CLOCK, TEST } = process.env;

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => [
    {
      source: "/blog",
      destination: `${CLOCK}`,
    },
    {
      source: "/assets/:path+",
      destination: `${CLOCK}/assets/:path+`,
    },
    {
      source: "/test",
      destination: `${TEST}`,
    },
    {
      source: "/maboong/_next/static/:path+",
      destination: `${TEST}/maboong/_next/static/:path+`,
    },
  ],
};

export default nextConfig;
