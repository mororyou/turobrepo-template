import { defineConfig } from 'vitest/config'

/**
 * Base Vitest configuration for the repository.
 * This can be extended by individual packages.
 */
export const baseConfig = defineConfig({
  test: {
    // Test file patterns
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/build/**'],

    // Reporter configuration
    reporters: ['default'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        '**/*.d.ts',
        '**/*.config.{js,ts,mjs,mts}',
        '**/index.ts',
      ],
    },

    // Watch mode configuration
    watch: false,

    // Timeouts
    testTimeout: 10000,
    hookTimeout: 10000,
  },
})

export default baseConfig
