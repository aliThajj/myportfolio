import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "stats.html"
    })
  ],
  optimizeDeps: {
    include: [
      '@lottiefiles/dotlottie-react',
      'framer-motion',
      'aos',
      'lucide-react',
      'react-icons'
    ]
  },
  server: { 
    port: 5173, 
    host: true 
  },
  base: '/myportfolio/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          framer: ['framer-motion'],
          animations: ['aos', '@lottiefiles/dotlottie-react'],
          icons: ['lucide-react', 'react-icons'],
          // Removed the duplicate vendor chunk that was causing conflicts
        }
      }
    }
  }
});