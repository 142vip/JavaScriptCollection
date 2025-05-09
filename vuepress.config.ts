import { getDocSiteBase, GitGeneralBranch, OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR, VipPackageJSON } from '@142vip/utils'
import {
  defineVipVuepressConfig,
  getCopyRightText,
  getFooterHtml,
  getVipHopeTheme,
  handleImportCodePath,
  JSCHeaders,
} from '@142vip/vuepress'
import { navbarConfig, sidebarConfig } from './docs/theme.config'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

export default defineVipVuepressConfig({
  base: getDocSiteBase(pkg.name),
  title: '凡是过往、皆为序章',
  description: pkg.description,
  port: 5000,
  head: JSCHeaders,
  source: '',
  markdown: {
    importCode: {
      handleImportPath: handleImportCodePath([
        ['@code', 'code'],
        ['@algorithm', 'code/algorithm'],
        ['~', ''],
      ]),
    },
    // md doc formatter  headerDepth
    headers: {
      level: [2, 3, 4],
    },
  },
  // 主题配置
  theme: getVipHopeTheme({
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
    docsBranch: GitGeneralBranch.NEXT,
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
  shouldPrefetch: false,
})
