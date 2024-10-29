import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  /* Allow static hosting */
  output: "export",

  /* Image Optimization using the default loader is not compatible with export. */
  images: {
    unoptimized: true, // Disables Image Optimization for static exports
  },
};

export default nextConfig;
``;
