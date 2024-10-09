const { get } = require('@vercel/edge-config');
const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'assets.aceternity.com',
      'repository-images.githubusercontent.com',
      'sheetjs.com'
    ],
    formats: ['image/avif', 'image/webp'],
    // Twitter Profile Picture
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  redirects() {
    try {
      return get('redirects');
    } catch {
      return [];
    }
  },
};


module.exports = withContentlayer(nextConfig);
