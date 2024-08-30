/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  // exportTrailingSlash: true,
  images: {
    unoptimized: true,
    // loader: "akamai",
    // path: "*",
    // loaderFile: "./my-loader.ts",
  },
};

export default nextConfig;
