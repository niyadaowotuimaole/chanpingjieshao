import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Treat @google/genai as external so Rollup doesn't try to bundle it.
      // It will be resolved at runtime via the importmap in index.html.
      external: ['@google/genai'],
    },
  },
});