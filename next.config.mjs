/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.igdb.com',
            },
        ],
    },
    experimental : {
        instrumentationHook: true,
    }
};


export default nextConfig;
