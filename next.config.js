/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:["images.pexels.com","lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/sue-gallery/image/upload/**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false,
      aws4: false,
    };

    return config;
  },
};

module.exports = nextConfig;
