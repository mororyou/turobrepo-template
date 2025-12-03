import react from '@vitejs/plugin-react'
import { defineConfig, mergeConfig } from 'vitest/config'
import { baseConfig } from './base.js'

/**
 * Vitest configuration for React projects.
 * Uses happy-dom for DOM simulation.
 */
export const reactConfig = mergeConfig(
  baseConfig,
  defineConfig({
    plugins: [react()],
    test: {
      // Use happy-dom for React component testing
      environment: 'happy-dom',

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
