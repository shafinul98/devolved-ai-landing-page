/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["res.cloudinary.com"] },
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: "/:slug",
      }
    ];
  },
};

module.exports = nextConfig;
