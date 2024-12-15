import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    distDir: 'docs',
    output: 'export',
    assetPrefix: '/next14_demo/', // 設定靜態資源的基礎路徑
    basePath: '/next14_demo',
};

export default nextConfig;
