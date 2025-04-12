import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: 'https://kweizh.com',
  output: 'export',
  images: {
    unoptimized: true
  }
  /* config options here */
};

export default nextConfig;
