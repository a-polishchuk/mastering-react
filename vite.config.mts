import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import * as tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
    base: '/mastering-react/',
    plugins: [
        react(),
        tsconfigPaths.default(),
        visualizer({
            filename: 'stats.html',
            open: false,
            gzipSize: true,
            brotliSize: true,
            emitFile: true,
        }),
    ],
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
