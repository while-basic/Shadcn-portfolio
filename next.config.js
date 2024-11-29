/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  sassOptions: {
    logger: {
      warn: function(message) {
        // Ignore deprecation warnings
        if (message.includes('Deprecation')) return;
        console.warn(message);
      }
    }
  }
};

module.exports = nextConfig;
