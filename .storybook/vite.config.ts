import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import compress from "vite-plugin-compression";
import linaria from "@linaria/vite";

export default defineConfig(async ({ mode }) => {
  return {
    build: {
      minify: "terser",
    },
    plugins: [
      react(),
      linaria(),
      compress({ algorithm: "brotliCompress", ext: ".br" }),
    ],
  };
});
