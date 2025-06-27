/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picture-base.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
      // 如果未来有其他图片域名，也需要在这里添加
      // {
      //   protocol: 'https',
      //   hostname: 'another-image-domain.com',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

module.exports = nextConfig;
