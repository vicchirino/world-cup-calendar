/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
}

module.exports = nextConfig
