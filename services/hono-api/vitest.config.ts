import { baseConfig, nodeConfig } from '@repo/vitest-config'
import { defineConfig, mergeConfig } from 'vitest/config'

export default defineConfig(mergeConfig(baseConfig, nodeConfig))
