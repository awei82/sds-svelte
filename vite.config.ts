import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      compositions: path.resolve(__dirname, './src/lib/ui/compositions'),
      data: path.resolve(__dirname, './src/lib/data'),
      hooks: path.resolve(__dirname, './src/lib/ui/hooks'),
      icons: path.resolve(__dirname, './src/lib/ui/icons'),
      images: path.resolve(__dirname, './src/lib/ui/images'),
      layout: path.resolve(__dirname, './src/lib/ui/layout'),
      primitives: path.resolve(__dirname, './src/lib/ui/primitives'),
      utils: path.resolve(__dirname, './src/lib/ui/utils'),
    },
  },
  server: {
    port: 8000,
  },
});
