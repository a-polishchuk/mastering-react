import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react() as any, tsconfigPaths()],
  test: {
    globals: true,
    css: false,
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
  },
});
