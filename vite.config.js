/// <reference types="vitest" />

import strip from "@rollup/plugin-strip";
import vue from "@vitejs/plugin-vue";
import { terser } from "rollup-plugin-terser";
import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

import subresourceIntegrity from "./rollup-plugin-subresource-integrity";

export default defineConfig({
  plugins: [
    vue(),
    strip(),
    terser({
      module: true,
      compress: { drop_console: true, keep_infinity: true },
      format: { comments: false, ecma: 2023 },
    }),
  ],
  define: {
    "import.meta.vitest": "undefined",
  },
  build: {
    target: "esnext",
    sourcemap: true,
    manifest: true,
    ssrManifest: true,
    rollupOptions: {
      plugins: [subresourceIntegrity()],
    },
  },
  test: {
    globals: true,
    passWithNoTests: true,
    css: false,
    environment: "happy-dom",
    include: ["**/*.{vitest,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
  sever: { port: 3006, open: true, cors: true },
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
