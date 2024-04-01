/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    FONT_URL: process.env.FONT_URL,
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    API_ENDPOINT: process.env.API_ENDPOINT
  },
  experimental : {
    outputStandalone: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_ENDPOINT}/:path*`,
      },
      {
        source: '/otp/:path*',
        destination: `${process.env.OTP_ENDPOINT}/:path*`,
      }

    ];
  },
};


module.exports = nextConfig
