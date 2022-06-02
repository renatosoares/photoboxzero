/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    styledComponents: true,
    images: { layoutRaw: true }
  },
  images: {
    domains: [process.env.DOMAIN_API],
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/dashboard',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
