import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@layout": path.resolve(__dirname, "./src/layout"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@site": path.resolve(__dirname, "./src/site"),
    },
  },
})
