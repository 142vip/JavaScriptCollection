import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { BattleInterviewSidebar } from '../../docs/battle-interview/battle-interview.sidebar'
import { DevelopSkillSidebar } from '../../docs/develop-skill/develop-skill.sidebar'
import { FrontEndSidebar } from '../../docs/front-end/front-end.sidebar'
import { JobChanceSidebar } from '../../docs/job-chance/job-chance.sidebar'
import { MicroserviceSidebar } from '../../docs/microservice/microserviceSidebar'
import { ReadBooksSidebar } from '../../docs/read-books/read-books.sidebar'
import {
  BaseSidebar,
  DesignPatternsSidebar,
  EggSidebar,
  ExpressSidebar,
  KoaSidebar,
  LinuxSidebar,
  MongoSideBar,
  MySqlSideBar,
  NodeLearnSidebar,
  RedisSidebar,
  SequelizeOrmSidebar,
  ServerEndSidebar,
  TypeormSidebar,
  TypescriptSidebar,
} from '../../docs/server-end'
import { soloAlgorithmSidebar } from '../../docs/solo-algorithm/solo-algorithm.sidebar'
import { resolveSidebarPermalinks } from './sidebar.resolve'

/** 顶部导航栏 */
export const navbarConfig = defineVipNavbarConfig([
  { text: '🔥 首页', link: '/' },
  { text: '🧠 SOLO算法', children: soloAlgorithmSidebar },
  { text: '💡 Battle面试官', link: '/battle-interview/' },
  {
    text: '💻 全栈开发',
    children: [
      { text: '👩🏻‍💻 前端', link: '/front-end/' },
      { text: '👨🏻‍💻 后端', link: '/server-end/' },
      { text: '💫 开发技巧', link: '/develop-skill/' },
      { text: '🕸️ 微服务架构', link: '/microservice/' },
    ],
  },
  { text: '📖 读书整理', link: '/read-books/' },
  {
    text: '👉 了解更多',
    children: [
      { text: '📄 变更记录', link: '/changelog.md' },
      { text: '📣 网站动态', link: '/big-event-history.md' },
      {
        text: '外链',
        children: [
          { text: '🎉 历史版本', link: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_JSC}/releases` },
          { text: '🎯 开发计划', link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnuuRDWBoHLmYaknXWFuhR4d' },
          { text: '🔗 技术&平台', link: '/frequent-site-link.html' },
          { text: '💥 公众号文章', link: '/wechat-list.md' },
        ],
      },
    ],
  },
])

/**
 * 各模块侧边栏
 * - 路径键与 Hope 路由前缀一致
 * - `.md` 链接通过 `resolveSidebarPermalinks` 自动对齐 frontmatter `permalink`
 */
export const sidebarConfig = defineVipSidebarConfig({
  '/front-end': resolveSidebarPermalinks(FrontEndSidebar, 'front-end'),
  '/server-end': resolveSidebarPermalinks(ServerEndSidebar, 'server-end'),
  '/server-end/framework/egg-tutorial': resolveSidebarPermalinks(EggSidebar, 'server-end/framework/egg'),
  '/server-end/framework/koa-tutorial': resolveSidebarPermalinks(KoaSidebar, 'server-end/framework/koa'),
  '/server-end/framework/express-tutorial': resolveSidebarPermalinks(ExpressSidebar, 'server-end/framework/express'),
  '/server-end/database/redis': resolveSidebarPermalinks(RedisSidebar, 'server-end/database/redis'),
  '/server-end/database/mysql': resolveSidebarPermalinks(MySqlSideBar, 'server-end/database/mysql'),
  '/server-end/database/mongo': resolveSidebarPermalinks(MongoSideBar, 'server-end/database/mongo'),
  '/server-end/linux': resolveSidebarPermalinks(LinuxSidebar, 'server-end/linux'),
  '/server-end/design-patterns': resolveSidebarPermalinks(DesignPatternsSidebar, 'server-end/design-patterns'),
  '/server-end/typescript': resolveSidebarPermalinks(TypescriptSidebar, 'server-end/typescript'),
  '/server-end/base': resolveSidebarPermalinks(BaseSidebar, 'server-end/base'),
  '/server-end/node-learn': resolveSidebarPermalinks(NodeLearnSidebar, 'server-end/node-learn'),
  '/server-end/orm/sequelize': resolveSidebarPermalinks(SequelizeOrmSidebar, 'server-end/orm/sequelize'),
  '/server-end/orm/typeorm': resolveSidebarPermalinks(TypeormSidebar, 'server-end/orm/typeorm'),
  '/develop-skill': resolveSidebarPermalinks(DevelopSkillSidebar, 'develop-skill'),
  '/solo-algorithm': resolveSidebarPermalinks(soloAlgorithmSidebar, 'solo-algorithm'),
  '/read-books': resolveSidebarPermalinks(ReadBooksSidebar, 'read-books'),
  '/job-chance': resolveSidebarPermalinks(JobChanceSidebar, 'job-chance'),
  '/microservice': resolveSidebarPermalinks(MicroserviceSidebar, 'microservice'),
  '/battle-interview': resolveSidebarPermalinks(BattleInterviewSidebar, 'battle-interview'),
})
