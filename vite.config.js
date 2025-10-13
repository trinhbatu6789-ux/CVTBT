import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // BUILD CONFIGURATION - CẤU HÌNH BUILD
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate source maps for debugging
    sourcemap: true,
    
    // Minify for production (use esbuild for better performance)
    minify: 'esbuild',
    
    // ESBuild options for better compression
    esbuild: {
      drop: ['console', 'debugger'], // Remove console.log and debugger in production
    },
    
    // Chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Rollup options
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
          antd: ['antd'],
          icons: ['@ant-design/icons'],
        },
        
        // Asset file naming
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  
  // SERVER CONFIGURATION - CẤU HÌNH SERVER
  server: {
    port: 3000,
    open: true,
    host: true, // Allow external access
  },
  
  // PREVIEW CONFIGURATION - CẤU HÌNH PREVIEW
  preview: {
    port: 4173,
    open: true,
    host: true,
  },
  
  // BASE CONFIGURATION - CẤU HÌNH BASE
  base: process.env.NODE_ENV === 'production' ? '/cv-project/' : '/',
  
  // CSS CONFIGURATION - CẤU HÌNH CSS
  css: {
    devSourcemap: true,
  },
  
  // OPTIMIZE DEPENDENCIES - TỐI ƯU DEPENDENCIES
  optimizeDeps: {
    include: ['react', 'react-dom', 'antd', '@ant-design/icons'],
  },
});
