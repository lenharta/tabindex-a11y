/// <reference types='vitest'/>

/** @type {import('vite').UserConfig} */

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '');

  if (command === 'serve') {
    return {
      plugins: [react()],
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.ts',
        css: true,
      },
      server: {
        port: 3000,
        proxy: {
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
      resolve: {
        alias: {
          '@/*': path.resolve(__dirname, 'src'),
          '@/components': path.resolve(__dirname, 'src/components'),
          '@/layout': path.resolve(__dirname, 'src/layout'),
          '@/routes': path.resolve(__dirname, 'src/routes'),
          '@/styles': path.resolve(__dirname, 'src/styles'),
          '@/store': path.resolve(__dirname, 'src/store'),
          '@/shiki': path.resolve(__dirname, 'src/shiki'),
          '@/types': path.resolve(__dirname, 'src/types'),
          '@/utils': path.resolve(__dirname, 'src/utils'),
        },
      },
      define: {
        __APP_ENV__: env.APP_ENV,
      },
    };
  } else {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          '@/*': path.resolve(__dirname, 'src'),
          '@/components': path.resolve(__dirname, 'src/components'),
          '@/routes': path.resolve(__dirname, 'src/routes'),
          '@/layout': path.resolve(__dirname, 'src/layout'),
          '@/styles': path.resolve(__dirname, 'src/styles'),
          '@/store': path.resolve(__dirname, 'src/store'),
          '@/shiki': path.resolve(__dirname, 'src/shiki'),
          '@/types': path.resolve(__dirname, 'src/types'),
          '@/utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    };
  }
});
