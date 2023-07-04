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
};

module.exports = nextConfig;
