/** @type {import('next').NextConfig} */
const nextConfig = {
  //experimental: {
  //  appDir: true
  //},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com'
      }
    ]
               
  }
};

export default nextConfig;
//module.exports = nextConfig;
