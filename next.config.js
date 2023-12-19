/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["res.cloudinary.com"] },
  async rewrites() {
    return [
      {
        source: "/argocoin(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/argoCoin"
      },
      {
        source: "/about(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/about"
      },
      {
        source: "/technology(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/technology"
      },
      {
        source: "/community(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/community"
      },
      {
        source: "/contact(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/contact"
      },
      {
        source: "/terms-and-conditions(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/terms-and-conditions"
      },
      {
        source: "/privacy-policy(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/privacy-policy"
      },
      {
        source: "/notarized-identity-statement.pdf(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/notarized-identity-statement.pdf"
      },
      {
        source: "/usdc-giveaway(.*)",
        destination: "https://devolved-ai-landing-page-ktq6-git-tanvir-test-shafinul98.vercel.app/usdc-giveaway"
      },
    ];
  },
};

module.exports = nextConfig;
