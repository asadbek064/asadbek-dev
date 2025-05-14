const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.scdn.co',
      'pbs.twimg.com',
      'cdn.sanity.io',
      'git.sheetjs.com'
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'asadk.dev'],
    },
  },
};

module.exports = withContentlayer(nextConfig);