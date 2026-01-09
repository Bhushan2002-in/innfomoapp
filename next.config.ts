import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Enable static export so GitHub Pages can host the build output
  output: "export",
  images: {
    unoptimized: true,
  },
  // Serve assets from the repo subpath when deployed to Pages
  basePath: isProd ? "/innfomoapp" : undefined,
  assetPrefix: isProd ? "/innfomoapp/" : undefined,
};

export default nextConfig;
