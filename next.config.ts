import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Отключает оптимизацию изображений (иначе нужен сервер)
  },
  /* config options here */
};

export default nextConfig;
