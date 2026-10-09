import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  images: { unoptimized: true },
  redirects() {
    return [
      { source: '/version-a', destination: '/', permanent: true },
      { source: '/version-b', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
