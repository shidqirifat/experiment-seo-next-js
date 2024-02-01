/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www2-api.bkkbn.go.id',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
