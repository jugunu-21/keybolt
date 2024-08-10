/** @type {import('next').NextConfig} */
const nextConfig = {};

// Assuming you want to add the images configuration to nextConfig
Object.assign(nextConfig, {
  images: {
    domains: ['example.com', 'anotherdomain.com', 'aceternity.com','www.shutterstock.com'],
  },
});

export default nextConfig;