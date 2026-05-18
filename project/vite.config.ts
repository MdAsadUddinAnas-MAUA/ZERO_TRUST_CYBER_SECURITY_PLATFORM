import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5173,
    cors: true,
    strictPort: true,
    hmr: {
      overlay: false,
    },
    allowedHosts: ['.trycloudflare.com'],
  },
  preview: {
    host: true,
    port: 5173,
  },
});
