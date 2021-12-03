/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: process.env.NEXT_BASE_PATH ? process.env.NEXT_BASE_PATH : "",
};

module.exports = nextConfig;
