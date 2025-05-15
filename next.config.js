const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      { hostname: 'i.scdn.co' },
      { hostname: 'pbs.twimg.com' },
      { hostname: 'cdn.sanity.io' },
      { hostname: 'git.sheetjs.com' },
      { hostname: 'pub-1ee15f86c7e94066bcff56e6e7ce5c02.r2.dev' }
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'asadk.dev'],
    },
  },
};

module.exports = withContentlayer(nextConfig);