/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thesvg.org",
        pathname: "/icons/**",
      },
    ],
  },
};

export default nextConfig;
