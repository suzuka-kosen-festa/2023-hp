import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { defineConfig } from "vite";
import visualizer from "rollup-plugin-visualizer";
import compress from "vite-plugin-compression";
import linaria from "@linaria/vite";

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      minify: "terser",
    },
    plugins: [
      react(),
      ssr({ prerender: true }),
      linaria(),
      mode === "analyze" &&
        visualizer({
          open: true,
          filename: "dist/stats.html",
          gzipSize: true,
          brotliSize: true,
        }),
      compress({ algorithm: "brotliCompress", ext: ".br" }),
    ],
  };
});
