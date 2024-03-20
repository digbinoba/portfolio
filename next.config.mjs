/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  //basePath:'/portfolio',
  distDir: 'dir',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
      },
    ],
    unoptimized: true,
  },
};

// module.exports = nextConfig;
export default nextConfig;
