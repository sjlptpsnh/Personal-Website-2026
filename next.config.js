/** @type {import('next').NextConfig} */
const nextConfig = {
  // Trigger restart to fix 404
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
