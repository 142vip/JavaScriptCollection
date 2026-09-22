import type { Plugin } from '@vuepress/core'
import { addViteConfig } from '@vuepress/helper'

/**
 * 调整 Vite 构建参数。
 * theme-hope 会通过 extendsBundlerOptions 将 chunkSizeWarningLimit 设为 1024，
 * 文档站点含 md-enhance / mermaid 等依赖，单 chunk 可达 4MB+，
 * 此处将阈值提高到 8192 以消除构建告警（theme-hope 默认为 1024）。
 */
export function viteBuildPlugin(): Plugin {
  return {
    name: 'vip-vite-build',
    extendsBundlerOptions(bundlerOptions, app) {
      addViteConfig(bundlerOptions, app, {
        build: {
          chunkSizeWarningLimit: 8192,
        },
      })
    },
  }
}
