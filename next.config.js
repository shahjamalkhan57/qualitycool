/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable image optimization to reduce build complexity
  images: {
    unoptimized: true,
  },
  // Disable font optimization
  optimizeFonts: false,
  webpack: (config) => {
    // Disable webpack file system cache
    config.cache = false;
    // Increase chunk size limit
    config.performance = {
      maxAssetSize: 1000000,
      maxEntrypointSize: 1000000,
    };
    return config;
  },
  // Increase static page generation timeout
  staticPageGenerationTimeout: 2000,
  experimental: {
    // Improve chunk loading reliability
    optimizePackageImports: ['@/components'],
    // Disable React strict mode temporarily to help with hydration
    strictMode: false,
  },
  // Ensure proper static file serving
  poweredByHeader: false,
  generateEtags: false,
  // Disable compression to prevent chunk loading issues
  compress: false,
  // Increase buffer size for asset processing
  assetPrefix: undefined,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

module.exports = nextConfig;