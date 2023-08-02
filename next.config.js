/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    rewrites () {
        return [
            {
                source: '/v1/:path*',
                destination: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-rapcp/endpoint/data/v1/:path*'
            }
        ]
    },
    env: {
        API_URL:"https://ap-south-1.aws.data.mongodb-api.com/app/data-rapcp/endpoint/data/v1",
        API_KEY:"XFDxtZpDKUJGOa15FnKp2CwUskfLUDpGSJ3xYGUu0eCB0wEmzbENwk3cnoEth7PL",
        DATABASE:"keep_notes_app",
        DATASOURCE:"Cluster0",
    },
}



module.exports = nextConfig
