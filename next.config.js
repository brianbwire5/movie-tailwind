/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"], // Add the hostname for your images
  },
};

module.exports = nextConfig;
