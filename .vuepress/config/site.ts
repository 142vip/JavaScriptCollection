import { vipDocSite, VipPackageJSON } from '@142vip/utils'

interface PackageMeta {
  description: string
  authorInfo: {
    homePage: string
  }
}

export const pkg = VipPackageJSON.getPackageJSON<PackageMeta>()

/** 站点标题 */
export const siteTitle = '凡是过往、皆为序章'

/** 站点描述（与 package.json 保持一致） */
export const siteDescription = pkg.description

/** 站点域名（无尾部斜杠） */
export const siteOrigin = pkg.authorInfo.homePage.replace(/\/$/, '')

/**
 * 站点 base 路径
 * - `NEED_PROXY=true` 时为 `/{pkg.name}/`
 * - 否则为 `/`
 */
export const siteBase = vipDocSite.getBase(pkg.name)

/** 站点首页绝对地址 */
export const homeUrl = new URL(siteBase || '/', `${siteOrigin}/`).href

/** 本地开发端口 */
export const siteDevPort = 5200

/**
 * 站点 Logo（深浅色导航栏通用，圆角外透明 PNG）
 * - 构图参考 408 图标：渐变底、四角点缀、上下符号、中央主字
 * - 中央「卷」，上方 `{}`、下方笔记、四角代码符号
 * - 暗色编程风：深蓝紫渐变 + 语法高亮色（蓝/紫/橙），无外圈白边
 */
export const siteLogo = '/logo.png'

/** Open Graph / 社交平台分享图绝对地址 */
export const siteLogoUrl = new URL(siteLogo, homeUrl).href
