/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      images: {
         domains: ["github.com"],
         domains: ['lh3.googleusercontent.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            hostname: 'lh3.googleusercontent.com',
            hostname: 'github.com',
            port: '',
            pathname: '/u/**',
          }
        ]
      }
};

export default nextConfig;
