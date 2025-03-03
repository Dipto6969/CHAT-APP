import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Vite frontend runs on 3001
    proxy: {
      "/api": {
        target: "http://localhost:5002", // ✅ CORRECT (Backend is on 5002)
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
