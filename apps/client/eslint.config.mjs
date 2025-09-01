import { nextJsConfig } from '@team-up/eslint-config/next-js';

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  {
    ignores: ['next-env.d.ts', '.next/**'],
  },
];
