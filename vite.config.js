import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import path from 'node:path';
import ejsPlugin from 'vite-plugin-ejs'; // Importeer de ejs-plugin
import fs from 'node:fs/promises';

const __dirname = import.meta.url.replace(/^file:\/\/\//, '');

export default defineConfig({
  plugins: [
    eslint({ exclude: ['**/node_modules/**', '**/dist/**', '**/*.min.*'] }),
    ejsPlugin(), // Gebruik de ejs-plugin
  ],
  build: {
    minify: false,
    emptyOutDir: false,
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'), // Je hoofdindex.html bestand
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});