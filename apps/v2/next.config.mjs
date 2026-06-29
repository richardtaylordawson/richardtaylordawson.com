/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.pwa-shields.com', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'calculator.richardtaylordawson.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gaming-trivia.richardtaylordawson.com',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'www.simplyrootedspa.com', pathname: '/**' },
      { protocol: 'https', hostname: 'simplyrootedspa.com', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'www.balancedtaxsolutions.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'balancedtaxsolutions.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'giphy-search.richardtaylordawson.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
