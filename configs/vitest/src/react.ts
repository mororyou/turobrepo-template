import { defineConfig, mergeConfig } from 'vitest/config'
import { baseConfig } from './base.js'

/**
 * Vitest configuration for React projects.
 * Uses jsdom for DOM simulation.
 */
export const reactConfig = mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      // Use jsdom for React component testing
      environment: 'jsdom',

      // Setup files for React testing
      setupFiles: [],

      // Global test utilities
      globals: true,

      // CSS handling
      css: true,
    },
  }),
)

export default reactConfig
