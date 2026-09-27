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
  webpack: (config) => {
    // Disable webpack cache to prevent AI file-editing from crashing Fast Refresh
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;
