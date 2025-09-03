import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'bagociunas.lt',
      'www.bagociunas.lt',
      'aidas.giize.com',
      'localhost'
    ],
    watch: {
      usePolling: true
    }
  },
  preview: {
    port: 5173,
    host: true,
    allowedHosts: [
      'bagociunas.lt',
      'www.bagociunas.lt', 
      'aidas.giize.com',
      'localhost'
    ]
  }
})
