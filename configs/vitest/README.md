# @repo/vitest-config

Turborepo用の共有Vitest設定パッケージです。

## インストール

このパッケージはワークスペース内のパッケージから参照できます。

```json
{
  "devDependencies": {
    "@repo/vitest-config": "workspace:*",
    "vitest": "4.0.15"
  }
}
```

## 使用方法

### 基本設定（Base）

汎用的な基本設定です：

```ts
// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config'
import { baseConfig } from '@repo/vitest-config/base'

export default mergeConfig(
  baseConfig,
  defineConfig({
    // カスタム設定
  }),
)
```

### React設定

jsdom環境を使用したReactプロジェクト用の設定：

```ts
// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config'
import { reactConfig } from '@repo/vitest-config/react'

export default mergeConfig(
  reactConfig,
  defineConfig({
    // カスタム設定
  }),
)
```

### Node.js設定

Node.js環境を使用したサーバーサイド用の設定：

```ts
// vitest.config.ts
import { defineConfig, mergeConfig } from 'vitest/config'
import { nodeConfig } from '@repo/vitest-config/node'

export default mergeConfig(
  nodeConfig,
  defineConfig({
    // カスタム設定
  }),
)
```

### すべての設定をインポート

```ts
import { baseConfig, reactConfig, nodeConfig } from '@repo/vitest-config'
```

## 含まれる機能

- **base**: 基本的なテスト設定（カバレッジ、タイムアウトなど）
- **react**: jsdom環境、CSS対応
- **node**: Node.js環境

## ビルド

```bash
pnpm build
```

## テストの実行

パッケージに以下のスクリプトを追加してください：

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```
