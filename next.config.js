/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com', 'rickandmortyapi.com'],
  },
  swcMinify: true,
}

module.exports = nextConfig
