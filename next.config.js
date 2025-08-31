/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.collegedunia.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "play-lh.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.geeksforgeeks.org",
      },
      {
        protocol: "https",
        hostname: "www.peppyocean.com",
      },
      {
        protocol: "https",
        hostname: "play.google.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "www.mediadost.com",
      },
      {
        protocol: "https",
        hostname: "nitmz.ac.in",
      },
    ],
  },
};

module.exports = nextConfig;
