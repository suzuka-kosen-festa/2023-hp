import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
/// <reference types="vitest" />
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import compress from "vite-plugin-compression";
import tsconfig from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      minify: "terser",
    },
    plugins: [
      react(),
      ssr({ prerender: true }),
      vanillaExtractPlugin(),
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          inlineWorkboxRuntime: true,
        },
        manifest: {
          name: "第58回鈴鹿高専祭",
          short_name: "第58回鈴鹿高専祭",
          icons: [
            {
              src: "/android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
          theme_color: "#ffffff",
          background_color: "#ffffff",
          start_url: "https://snct-fes.info",
          display: "standalone",
          description: "未視感、視たことのない高専祭を。",
          lang: "ja",
        },
      }),
      mode === "analyze" &&
        visualizer({
          open: true,
          filename: "dist/stats.html",
          gzipSize: true,
          brotliSize: true,
        }),
      compress({ algorithm: "brotliCompress", ext: ".br" }),
      tsconfig(),
    ],
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: "./test/setup.ts",
    },
  };
});
