/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    rewrites () {
        return [
            {
                source: '/api/:path*',
                destination: 'http://127.0.0.1:8090/api/:path*',
            },
        ]
    }
}



module.exports = nextConfig
