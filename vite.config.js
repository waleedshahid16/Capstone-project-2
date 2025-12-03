import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable React Fast Refresh optimizations
      fastRefresh: true,
    }),
    tailwindcss()
  ],
  build: {
    // Enable minification with esbuild (faster than terser)
    minify: 'esbuild',
    // Optimize chunk splitting using function syntax for Rolldown
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'mui-vendor';
            }
            if (id.includes('redux')) {
              return 'redux-vendor';
            }
            if (id.includes('react-hook-form') || id.includes('yup') || id.includes('hookform')) {
              return 'form-vendor';
            }
            // Other node_modules go to vendor chunk
            return 'vendor';
          }
        },
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Generate source maps for production debugging (optional)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@mui/material',
      '@mui/icons-material',
      '@reduxjs/toolkit',
      'react-redux'
    ],
  },
  // Performance optimizations
  server: {
    // Enable HMR
    hmr: true,
  },
})
