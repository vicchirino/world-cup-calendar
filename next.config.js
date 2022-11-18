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
}

module.exports = nextConfig
