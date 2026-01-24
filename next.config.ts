import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  // PENTING: Agar saat build, dia bikin folder (home/index.html)
  // Hasilnya URL di browser jadi bersih: kamunara.com/home/ (tanpa .html)
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