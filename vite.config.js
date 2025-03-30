import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    hmr: true,
  },
  build: {
    outDir: './dist/client',
  },
  resolve: {
    alias: {
      '@': path.resolve('./client/src'),
      '/src': path.resolve('./client/src'),
    },
  },
  root: './client',
});