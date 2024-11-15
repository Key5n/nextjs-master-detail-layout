import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http.cat",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
