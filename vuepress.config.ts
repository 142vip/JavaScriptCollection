import process from 'node:process'
import { defineUserConfig } from '@vuepress/cli'
import { getDirname, path } from '@vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import { name } from './package.json'
import { headers } from './docs/.vuepress/theme/headers'
import { themeConfig } from './docs/.vuepress/theme/theme'
// import {pluginConfig} from "./theme/plugins";

// 当前目录名
const __dirname = getDirname(import.meta.url)

/**
 * 用于区分base路径，是否nginx代理
 */
function getSiteBase(): '/' | `/${string}/` {
  // 用于区分base路径，是否nginx代理
  const PROXY_DOMAIN = process.env.PROXY_DOMAIN || false
  return PROXY_DOMAIN ? `/${name}/` : '/'
}

export default defineUserConfig({
  title: '凡是过往、皆为序章',
  description: '一本有趣的JavaScript合集',
  base: getSiteBase(),
  port: 5000,
  head: headers,
  source: '',
  markdown: {
    // todo 引入代码文件时的路径替换 https://vuejs.press/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97
    importCode: {
      handleImportPath: (str) => {
        if (str.includes('@code')) {
          return str.replace(/^@code/, path.resolve(__dirname, 'code/'))
        }
        if (str.includes('@algorithm')) {
          return str.replace(/^@algorithm/, path.resolve(__dirname, 'code/algorithm/'))
        }
        if (str.includes('~')) {
          return str.replace(/^~/, path.resolve(__dirname, ''))
        }
        return str
      },
    },
    // md doc formatter  headerDepth
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  ...themeConfig,
  // // 插件配置
  // ...pluginConfig,
  // 编译
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  shouldPrefetch: false,
})
