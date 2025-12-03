import { defineConfig, mergeConfig } from 'vitest/config'
import { baseConfig } from './base.js'

/**
 * Vitest configuration for Node.js projects.
 * Uses Node.js environment for server-side testing.
 */
export const nodeConfig = mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      // Use Node.js environment
      environment: 'node',

      // Global test utilities
      globals: true,
    },
  }),
)

export default nodeConfig
