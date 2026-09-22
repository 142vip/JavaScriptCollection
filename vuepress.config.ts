import {
  copyrightHtmlStr,
  footerHtmlStr,
  navbarConfig,
  pkg,
  sidebarConfig,
  siteBase,
  siteDescription,
  siteDevPort,
  siteHead,
  siteLogo,
  siteOrigin,
  siteTitle,
  viteBuildPlugin,
} from '.vuepress/config'
import { OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR } from '@142vip/open-source'
import { GitGeneralBranch } from '@142vip/utils'
import {
  defineVipVuepressConfig,
  getVipHopeTheme,
  handleImportCodePath,
} from '@142vip/vuepress'

/**
 * VuePress 站点配置
 *
 * 注意：
 * - 环境变量 `NEED_PROXY=true` 时，base 为 `/{pkg.name}/`，否则为 `/`
 * - `locales` / `lang` / `bundler` 等由 `defineVipVuepressConfig` 默认注入
 * - 导航、SEO、页脚等拆分见 `.vuepress/config/`
 * - 文档路由依赖各 md 的 frontmatter `permalink`（当前 docs 下均已声明，无需再做 docs/ 路径剥离）
 * - 侧边栏 `.md` 链接在 `sidebar.ts` 中通过 `resolveSidebarPermalinks` 对齐 permalink
 */
export default defineVipVuepressConfig({
  base: siteBase,
  title: siteTitle,
  description: siteDescription,
  port: siteDevPort,
  pagePatterns: [
    'docs/**/*.md',
    '!node_modules',
    '!.vuepress',
    '!code/**',
  ],
  head: siteHead,
  plugins: [
    // chunk 告警阈值：theme-hope 默认可被覆盖，须用插件 extendsBundlerOptions 合并
    viteBuildPlugin(),
  ],
  markdown: {
    importCode: {
      handleImportPath: handleImportCodePath([
        ['@code', 'code'],
        ['@algorithm', 'code/algorithm'],
        ['~', ''],
      ]),
    },
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
    navbarLayout: {
      start: ['Brand'],
      center: ['Links'],
      end: ['Language', 'Outlook', 'Repo', 'Search'],
    },
    logo: siteLogo,
    hostname: siteOrigin,
    // 页脚
    footer: footerHtmlStr,
    // 版权
    copyright: copyrightHtmlStr,
    // 仓库 142vip/JavaScriptCollection
    repo: `${OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME}/${pkg.name}`,
    // 作者信息
    author: OPEN_SOURCE_AUTHOR,
    // 文档路径，开启编辑功能
    docsDir: 'docs',
    docsBranch: GitGeneralBranch.NEXT,
    // 主题布局选项
    docsRepo: OPEN_SOURCE_ADDRESS.GITHUB_REPO_JSC,
    contributors: true,
    // 插件
    plugins: {
      // 水印
      watermark: {
        enabled: true,
        watermarkOptions: {
          content: OPEN_SOURCE_AUTHOR.name,
        },
      },
    },
  }),
}, {
  // 浏览器控制台打印版本与构建时间
  appBuildLog: { version: pkg.version },
})
