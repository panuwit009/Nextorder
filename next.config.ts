import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
  output: "export",
  basePath: "/nextorder",
  assetPrefix: "/nextorder/"
};

export default nextConfig;
