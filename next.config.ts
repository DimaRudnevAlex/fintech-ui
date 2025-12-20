import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactStrictMode: false,
};

const withNextIntl = createNextIntlPlugin('./app/(shared)/lib/i18n/request.ts');
export default withNextIntl(nextConfig);
