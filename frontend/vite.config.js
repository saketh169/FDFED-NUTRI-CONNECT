import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins:
   [react(),
    tailwindcss()
  ],
  server: {
    proxy: {
      '/api': 'https://nutriconnect-backend-1tc3.onrender.com'
    }
  },
  build: {
    chunkSizeWarningLimit: Infinity // Disable chunk size warnings
  }
})
