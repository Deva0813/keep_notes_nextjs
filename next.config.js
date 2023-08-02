/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    rewrites () {
        return [
            {
                source: '/v1/:path*',
                destination: process.env.API_URL+'/:path*'
            }
        ]
    },
    env: {
        //MONGO DB DATA API URL and API KEY
        API_URL:process.env.API_URL,
        API_KEY:process.env.API_KEY,
        DATABASE:process.env.DATABASE,
        DATASOURCE:process.env.DATASOURCE,
    },
}

module.exports = nextConfig
