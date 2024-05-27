/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allows deploy to github pages path.
  basePath: "/namegame-react1",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/seed/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/public/**',
      },
    ], 
  }
}

module.exports = nextConfig
