/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
    ],
  },
  env: {
    ALCHEMY_ID: "",
  },
}

module.exports = nextConfig
