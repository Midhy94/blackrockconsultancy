/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  /**
   * Build produces `out/` for upload to cPanel (HTML + `_next` + PHP in `forms/`).
   * Subpath: NEXT_PUBLIC_BASE_PATH=demo npm run build
   */
  ...(process.env.NEXT_PUBLIC_BASE_PATH
    ? {
        basePath: `/${String(process.env.NEXT_PUBLIC_BASE_PATH).replace(/^\/+|\/+$/g, '')}`,
      }
    : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
