import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'build',
  // TODO: remove next line in production
  images: { unoptimized: true },
};

export default nextConfig;
