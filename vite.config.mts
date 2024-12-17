import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import * as tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/mastering-react/',
  plugins: [react() as any, tsconfigPaths.default()],
  server: {
    open: true,
    port: 3000,
  },
  test: {
    globals: true,
    css: false,
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
  },
});
