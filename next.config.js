/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  /**
   * Default: site is served from your domain root (upload `out/` into public_html).
   * If the site must live under a subfolder (e.g. blackrocks.in/demo), build with:
   *   NEXT_PUBLIC_BASE_PATH=demo npm run build
   */
  ...(process.env.NEXT_PUBLIC_BASE_PATH
    ? {
        basePath: `/${String(process.env.NEXT_PUBLIC_BASE_PATH).replace(/^\/+|\/+$/g, '')}`,
      }
    : {}),
  /** Folder-style pages (`jobs/index.html`) — friendlier for Apache/cPanel. */
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
