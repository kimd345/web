/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // for NextJS Image component if we use them later
  images: {
    domains: ['i.pravatar.cc'],
  },
}

module.exports = nextConfig
