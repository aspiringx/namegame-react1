/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
        port: '',
        pathname: '/300/**',
      }, 
    ], 
  }
}

module.exports = nextConfig
