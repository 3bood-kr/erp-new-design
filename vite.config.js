// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        vacations: resolve(__dirname, 'vacations.html'),
        attendace: resolve(__dirname, 'attendace-report.html'),
      },
    },
  },
});
