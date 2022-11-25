const { config } = require("dotenv")

/** @type {import('next').NextConfig} */
require("dotenv").config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_FOOTBALL_URL: process.env.API_FOOTBALL_URL,
    API_FOOTBALL_KEY: process.env.API_FOOTBALL_KEY,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/calendar",
        permanent: true,
      },
    ]
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "es",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}

module.exports = nextConfig
