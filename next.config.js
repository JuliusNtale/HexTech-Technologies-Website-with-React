/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages static export configuration
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Image optimization disabled for static export
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP'],
  },
  
  // React strict mode
  reactStrictMode: true,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Remove powered by header
  poweredByHeader: false,
  
  // Turbopack configuration
  turbopack: {},
};

module.exports = nextConfig;
