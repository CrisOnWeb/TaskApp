import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Modificar el nombre para cada repositorio con el nombre del repositorio de GitHub al que vas hacer GitHub Pages
  base: './',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
  server: {
    open: true,
    watch: {
      usePolling: true,
    },
  },
});
