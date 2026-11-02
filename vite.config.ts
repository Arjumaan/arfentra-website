import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: false,
  },
});
