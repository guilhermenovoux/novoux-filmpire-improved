/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fontmeme.com',
        port: '',
        pathname: '/permalink/**',
      },
    ],
  },
}