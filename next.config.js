/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const images = {
  domains: ["links.papareact.com", "image.tmdb.org"],
};
module.exports = {
  images,
  nextConfig,
};

