import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
/// <reference types="vitest" />
import { defineConfig } from "vite";
import visualizer from "rollup-plugin-visualizer";
import compress from "vite-plugin-compression";
import tsconfig from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      minify: "terser",
    },
    plugins: [
      react(),
      ssr({ prerender: true }),
      vanillaExtractPlugin(),
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
