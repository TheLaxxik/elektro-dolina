import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statický export do out/ pre GitHub Pages (elektrikar.esticode.sk, bez basePath)
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
