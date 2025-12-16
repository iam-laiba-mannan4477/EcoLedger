import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    test: {
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'lcov'], // for console & SonarCloud
        reportsDirectory: 'coverage',
        include: ['src/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
      },
      include: ['**/*.test.ts', '**/*.test.tsx'],
    },
  };
});
