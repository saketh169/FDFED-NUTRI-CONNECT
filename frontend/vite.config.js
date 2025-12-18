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
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'http-client': ['axios'],
          'ui-library': ['antd'],
          'form-libs': ['formik', 'yup'],
          'state': ['zustand', 'redux'],
          'crypto': ['crypto-js']
        }
      }
    }
  }
})
