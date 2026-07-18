import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const appRoot = path.dirname(fileURLToPath(import.meta.url));
const monorepoRoot = path.join(appRoot, "../..");

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
    ];
  },
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
        hostname: "pwa-shields.richardtaylordawson.com",
        pathname: "/images/social-share.png",
        search: "",
      },
      {
        protocol: "https",
        hostname: "bruner-dynamics.richardtaylordawson.com",
        pathname: "/images/social-share.png",
        search: "",
      },
      {
        protocol: "https",
        hostname: "button-creator.richardtaylordawson.com",
        pathname: "/images/social-share.png",
        search: "",
      },
      {
        protocol: "https",
        hostname: "snake.richardtaylordawson.com",
        pathname: "/images/social-share.png",
        search: "",
      },
      {
        protocol: "https",
        hostname: "giphy-search.richardtaylordawson.com",
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
    root: monorepoRoot,
  },
};

export default nextConfig;
