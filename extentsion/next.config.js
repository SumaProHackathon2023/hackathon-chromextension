/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    distDir: "dist",
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    assetPrefix: "./",
    pageExtensions: ["tsx","ts","js","jsx"]
}

module.exports = nextConfig
