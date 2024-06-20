import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://30.165.1.167:8080", // 目标服务器
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/external_oioweb/api": {
        target: "https://api.oioweb.cn",
        // changeOrigin: true,
        rewrite:(path) => path.replace(/^\/external_oioweb/, ""),
      },
    },
  },
});
