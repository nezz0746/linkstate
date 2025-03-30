/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@cryptoresume/ui"],
  images: {
    remotePatterns: [
      {
        hostname: "*",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
