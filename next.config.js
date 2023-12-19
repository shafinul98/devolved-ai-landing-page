/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ["res.cloudinary.com"] },
  async rewrites() {
    return [
      {
        source: "/argocoin(.*)",
        destination: "/argoCoin"
      },
      {
        source: "/about(.*)",
        destination: "/about"
      },
      {
        source: "/technology(.*)",
        destination: "/technology"
      },
      {
        source: "/community(.*)",
        destination: "/community"
      },
      {
        source: "/contact(.*)",
        destination: "/contact"
      },
      {
        source: "/terms-and-conditions(.*)",
        destination: "/terms-and-conditions"
      },
      {
        source: "/privacy-policy(.*)",
        destination: "/privacy-policy"
      },
      {
        source: "/notarized-identity-statement.pdf(.*)",
        destination: "/notarized-identity-statement.pdf"
      },
      {
        source: "/usdc-giveaway(.*)",
        destination: "/usdc-giveaway"
      },
    ];
  },
};

module.exports = nextConfig;
