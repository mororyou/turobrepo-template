import honoEslintConfig from '@hono/eslint-config'
import { config as baseConfig } from './base.js'

export const honoConfig = [
  ...baseConfig,
  ...honoEslintConfig,
  {
    ignores: ['wrangler.jsonc', 'wrangler.toml', 'eslint.config.mjs'],
  },
]
