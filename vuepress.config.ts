import { defineUserConfig } from '@vuepress/cli'
import { getDirname, path } from '@vuepress/utils'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'
import {
  JSCHeaders,
  getCopyRightText,
  getFooterHtml,
  getThemeConfig,
  getViteBundler,
} from '@142vip/vuepress'
import {
  OPEN_SOURCE_ADDRESS,
  OPEN_SOURCE_AUTHOR,
  getDocSiteBase,
} from '@142vip/utils'
import pkg from './package.json'
import { navbarConfig, sidebarConfig } from './docs/theme.config'

export default defineUserConfig({
  base: getDocSiteBase('JavaScriptCollection'),
  title: '凡是过往、皆为序章',
  description: pkg.description,
  port: 5000,
  head: JSCHeaders,
  source: '',
  markdown: {
    // todo 引入代码文件时的路径替换 https://vuejs.press/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E5%9D%97
    importCode: {
      handleImportPath: (str) => {
        // 当前目录名
        const __dirname = getDirname(import.meta.url)

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
  theme: hopeTheme({
    ...getThemeConfig({
      // 导航栏
      navbar: navbarConfig,
      // 侧边栏
      sidebar: sidebarConfig,
      // 页脚
      footer: getFooterHtml({
        name: pkg.name,
        version: pkg.version,
      }),
      // 版权
      copyright: getCopyRightText(OPEN_SOURCE_AUTHOR.name),
      // 仓库
      repo: '142vip/JavaScriptCollection',
      repoLabel: 'GitHub',

      // 作者信息
      author: OPEN_SOURCE_AUTHOR,

      // 文档路径，开启编辑功能
      docsDir: 'docs',
      docsBranch: 'next',
      // 主题布局选项
      docsRepo: OPEN_SOURCE_ADDRESS.GITHUB_REPO_JSC,

      // 插件
      plugins: {
        // 水印
        watermark: {
          enabled: false,
          watermarkOptions: {
            content: OPEN_SOURCE_AUTHOR.name,
          },
        },
      },
    }),
  }),
  // 编译
  bundler: viteBundler(getViteBundler()),
  shouldPrefetch: false,
})
