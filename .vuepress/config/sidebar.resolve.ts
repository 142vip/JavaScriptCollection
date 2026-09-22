import type { AutoLinkOptions, SidebarItemOptions } from 'vuepress-theme-hope'
import { VipNodeJS } from '@142vip/utils'

/** 侧边栏直链项 */
export interface DocsSidebarLink {
  text: string
  link: string
}

/** 侧边栏分组项 */
export interface DocsSidebarGroup {
  text: string
  prefix?: string
  link?: string
  collapsible?: boolean
  expanded?: boolean
  children: DocsSidebarItem[]
}

export type DocsSidebarItem = DocsSidebarLink | DocsSidebarGroup

export type DocsSidebarConfig = DocsSidebarItem[]

function isSidebarGroup(item: DocsSidebarItem): item is DocsSidebarGroup {
  return Array.isArray((item as DocsSidebarGroup).children)
}

function readPermalink(mdFilePath: string): string | null {
  if (!VipNodeJS.existPath(mdFilePath)) {
    return null
  }

  for (const line of VipNodeJS.readFileToStrByUTF8(mdFilePath).split('\n')) {
    if (line.startsWith('permalink:')) {
      return line.slice('permalink:'.length).trim()
    }
  }

  return null
}

function resolveMdLink(
  link: string,
  docsBasePath: string,
  groupPrefix: string,
): string {
  const mdRelativePath = groupPrefix
    ? `${groupPrefix}/${link}`
    : link
  const permalink = readPermalink(
    VipNodeJS.pathJoin(VipNodeJS.getProcessCwd(), 'docs', docsBasePath, mdRelativePath),
  )

  return permalink ?? link
}

/**
 * Hope 手动 sidebar 的 `.md` 链接按「prefix + 文件名」推断路由，**不会**读取 frontmatter `permalink`。
 * 本仓库大量页面 permalink 与文件名不一致（如 `html.md` → `/front-end/base-begin/html-correlation.html`），
 * 故在配置阶段按文件解析并替换 `link`；无法单靠 `vuepress.config.ts` 原生选项完成。
 *
 * @param sidebar 模块侧边栏原始配置（可含 `.md` 链接）
 * @param docsBasePath `docs/` 下的相对目录，如 `server-end/framework/egg`
 */
export function resolveSidebarPermalinks(
  sidebar: DocsSidebarConfig,
  docsBasePath: string,
): SidebarItemOptions[] {
  const walk = (items: DocsSidebarItem[], groupPrefix = ''): SidebarItemOptions[] =>
    items.map((item) => {
      if (isSidebarGroup(item)) {
        return {
          ...item,
          children: walk(item.children, item.prefix ?? ''),
        }
      }

      if (!item.link.endsWith('.md')) {
        return item as AutoLinkOptions
      }

      return {
        ...item,
        link: resolveMdLink(item.link, docsBasePath, groupPrefix),
      }
    })

  return walk(sidebar)
}
