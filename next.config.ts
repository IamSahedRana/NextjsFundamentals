import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // https://i.ibb.co.com/4n23KRYk/1500x500.jpg
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '/4n23KRYk/**',
        search: '',
      },
    ],
  }
};

export default nextConfig;
