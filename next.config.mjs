/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      staticPageGenerationTimeout: 60, // Increase the timeout to 60 seconds
    },
  };
  
  module.exports = nextConfig;
  