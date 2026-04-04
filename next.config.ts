import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: false,

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:pathname*',
          destination: 'https://arckat.com/:pathname*',
        },
      ];
    }
    return [
      {
        source: '/api/:pathname*',
        destination: 'https://arckat.com/:pathname*',
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin('./app/(shared)/lib/i18n/request.ts');
export default withNextIntl(nextConfig);
