/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // loader: "akamai",
    // path: "*",
    // loaderFile: "./my-loader.ts",
  },
};

export default nextConfig;
