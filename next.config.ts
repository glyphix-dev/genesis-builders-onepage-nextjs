import type { NextConfig } from "next";

const cspHeader = `
    frame-src 'self' https://share-na2.hsforms.com https://*.hsforms.com;
    frame-ancestors 'self' https://share-na2.hsforms.com https://*.hsforms.com;
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
