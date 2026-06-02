import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(
        __dirname,
        "./src/components"
      ),
      "@services": path.resolve(
        __dirname,
        "./src/services"
      ),
      "@contexts": path.resolve(
        __dirname,
        "./src/contexts"
      ),
      "@hooks": path.resolve(
        __dirname,
        "./src/hooks"
      ),
      "@pages": path.resolve(
        __dirname,
        "./src/pages"
      ),
      "@utils": path.resolve(
        __dirname,
        "./src/utils"
      ),
    },
  },

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api/, ""),
      },
    },
  },
});
