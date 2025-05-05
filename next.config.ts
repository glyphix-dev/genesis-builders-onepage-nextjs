import type { NextConfig } from "next";

const cspHeader = `
    frame-src 'self' share-na2.hsforms.com;
    frame-ancestors 'self' share-na2.hsforms.com;
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ]
  },
};

export default nextConfig;
