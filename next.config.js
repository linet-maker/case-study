/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { urlImports: ['https://themer.sanity.build/'] },
    images: {
        formats: ["image/avif", "image/webp"],
        dangerouslyAllowSVG: true,
        remotePatterns: [{ hostname: "cdn.sanity.io" }]
    },
    eslint: {
        /// Set this to false if you want production builds to abort if there's lint errors
        ignoreDuringBuilds: process.env.VERCEL_ENV === "production"
    }
}


module.exports = nextConfig
