import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Lets you open `npm run dev` from another device on the same Wi-Fi (e.g. http://192.168.x.x:3000).
  // Without this, Next blocks the dev scripts from that address and the page never becomes interactive.
  allowedDevOrigins: ['192.168.*.*', '10.*.*.*', '172.*.*.*', '*.local'],
};

export default nextConfig;
