import { OPEN_SOURCE_ADDRESS, OPEN_SOURCE_AUTHOR } from '@142vip/open-source'
import { GitGeneralBranch, vipDocSite, VipPackageJSON } from '@142vip/utils'
import {
  defineVipVuepressConfig,
  getVipHopeTheme,
  handleImportCodePath,
  VUEPRESS_DEFAULT_DOCS_DIR,
} from '@142vip/vuepress'
import { navbarConfig, sidebarConfig } from './docs/theme.config'

const pkg = VipPackageJSON.getPackageJSON<{ description: string }>()

/**
 * 页脚
 */
const footerHtmlStr = `
<div>
    All Rights Reserved
    <a href="${OPEN_SOURCE_ADDRESS.HOME_PAGE_GITHUB_VIP}" target="_blank">@${OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME}</a> | 
    <strong>${pkg.name}@v${pkg.version} </strong>
</div>
<div style="margin-top: 5px">
  <a href="${OPEN_SOURCE_ADDRESS.BAIDU_STATISTICS_URL}" target="_blank">${OPEN_SOURCE_ADDRESS.BAIDU_STATISTICS_NAME}</a> 
  <span style="margin: 0 5px;">|</span>
  <a href="${OPEN_SOURCE_ADDRESS.BEI_AN_URL}" target="_blank">${OPEN_SOURCE_ADDRESS.BEI_AN_NAME}</a>
</div>
`

/**
 * 版权信息
 */
const copyrightHtmlStr = `
<strong>MIT 协议</strong> | 版权所有 © 2015-${new Date().getFullYear()} ${OPEN_SOURCE_AUTHOR.name}
<div style="margin-top: 10px">
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_JavaScriptCollection_GITHUB}"
      target="_blank"
      style="padding: 5px"
    >
        <img
          alt="408CSFamily Deploy In Github Pages"
          src="https://img.shields.io/badge/github-success-green?logo=github&color=bef9c6"
        >
    </a>
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_JavaScriptCollection_NETLIFY}"
      target="_blank"
      style="padding: 5px"
    >
        <img
          alt="408CSFamily Deploy In Netlify"
          src="https://img.shields.io/badge/netlify-success-green?logo=netlify&color=bef9c6"
        >
    </a>
    <a
      href="${OPEN_SOURCE_ADDRESS.SITE_DEPLOY_JavaScriptCollection_VERCEL}"
      target="_blank"
      style="padding: 5px"
    >
        <img
          src="https://img.shields.io/badge/vercel-success-green?logo=vercel&color=bef9c6"
          alt="408CSFamily Deploy In Vercel"
        >
    </a>
</div>
`

/**
 * 站点配置
 */
export default defineVipVuepressConfig({
  base: vipDocSite.getBase(pkg.name),
  /** 生成与站内链接统一为无尾斜杠 URL */
  trailingSlash: false,
  title: '凡是过往、皆为序章',
  description: pkg.description,
  port: 5000,
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    // vercel统计 相关配置
    ['script', { type: 'text/javascript', src: '/_vercel/insights/script.js' }],
    // 百度统计
    [
      'script',
      {},
      `var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?613c9d7af9e1c9a7f9eef6a55aa2399d";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();`,
    ],
  ],
  source: '',
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
    // 页脚
    footer: footerHtmlStr,
    // logo: '/logo.png',
    // logoDark: '/logo.png',
    // 版权
    copyright: copyrightHtmlStr,
    // 仓库 142vip/JavaScriptCollection
    repo: `${OPEN_SOURCE_ADDRESS.GITHUB_ORGANIZATION_NAME}/${pkg.name}`,

    // 作者信息
    author: OPEN_SOURCE_AUTHOR,

    // 文档路径，开启编辑功能
    docsDir: VUEPRESS_DEFAULT_DOCS_DIR,
    docsBranch: GitGeneralBranch.NEXT,
    // 主题布局选项
    docsRepo: OPEN_SOURCE_ADDRESS.GITHUB_REPO_JSC,

    contributors: true,

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
})
