import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "calculator.richardtaylordawson.com",
        pathname: "/images/social-share.png",
        search: "",
      },
      {
        protocol: "https",
        hostname: "gaming-trivia.richardtaylordawson.com",
        pathname: "/images/social-share.png",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.simplyrootedspa.com",
        pathname: "/images/social-share.png",
        search: "",
      },
      {
        protocol: "https",
        hostname: "www.balancedtaxsolutions.com",
        pathname: "/images/social-share.png",
        search: "",
      },
    ],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
