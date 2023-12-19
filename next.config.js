/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["res.cloudinary.com"] },
  async rewrites() {
    return [
      {
        source: "/:slug*",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/:slug",
      }
    ];
  },
};

module.exports = nextConfig;
