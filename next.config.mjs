/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/6037_book_session" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/6037_book_session/" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
