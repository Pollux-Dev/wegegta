/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'localhost',
      'https://wegegta-backend.onrender.com',
      'wegegta-backend.onrender.com',
      'res.cloudinary.com',
      '172.20.10.5',
      '172.20.10.4',
    ],
  },
  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },

  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['am'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'am',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".

  },



};

module.exports = nextConfig;
