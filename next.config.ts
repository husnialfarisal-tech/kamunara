import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
};

export default nextConfig;