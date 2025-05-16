import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* your existing config options */
  typescript: {
    ignoreBuildErrors: true,
  },

  // Rewrites so that requests to /robots.txt and /sitemap.xml
  // get routed to your dynamic API endpoints
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
