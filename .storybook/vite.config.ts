import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import compress from "vite-plugin-compression";
import tsconfig from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig(async () => {
  return {
    build: {
      minify: "terser",
    },
    plugins: [
      react(),
      vanillaExtractPlugin(),
      compress({ algorithm: "brotliCompress", ext: ".br" }),
      tsconfig(),
    ],
  };
});
