import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { BattleInterviewSidebar } from '../../docs/battle-interview/battle-interview.sidebar'
import { DevelopSkillSidebar } from '../../docs/develop-skill/develop-skill.sidebar'
import { FrontEndSidebar } from '../../docs/front-end/front-end.sidebar'
import { JobChanceSidebar } from '../../docs/job-chance/job-chance.sidebar'
import { MicroserviceSidebar } from '../../docs/microservice/microserviceSidebar'
import { ReadBooksSidebar } from '../../docs/read-books/read-books.sidebar'
import { architectSidebar } from '../../docs/ruan-kao/architect/architect.sidebar'
import { softDesignSidebar } from '../../docs/ruan-kao/soft-design/soft-design.sidebar'
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
  {
    text: '📖 能力提升',
    children: [
      { text: '® 软著', link: '/copyright/' },
      {
        text: '考试',
        link: '/ruan-kao.html',
        children: [
          { text: '👨🏻‍💻 软件设计师', link: '/ruan-kao/soft-design.html' },
          { text: '💫 系统架构师', link: '/ruan-kao/architect.html' },
        ],
      },
      {
        text: '读书',
        children: [
          { text: '🕸️ 技术类', link: '/read-books/cs-books/' },
          { text: '💫 文学类', link: '/read-books/not-cs-book/' },
        ],
      },
    ],
  },
  {
    text: '👉 了解更多',
    children: [
      { text: '📄 变更记录', link: '/changelog.html' },
      { text: '📣 网站动态', link: '/big-event-history.html' },
      {
        text: '外链',
        children: [
          { text: '🎉 历史版本', link: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_JSC}/releases` },
          { text: '🎯 开发计划', link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnuuRDWBoHLmYaknXWFuhR4d' },
          { text: '🔗 技术&平台', link: '/frequent-site-link.html' },
          { text: '💥 公众号文章', link: '/wechat-list.html' },
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
  '/copyright': [
    { text: '软件著作权', link: '/copyright/' },
  ],
  '/ruan-kao/': [
    { text: '👨🏻‍💻 软件设计师', link: '/ruan-kao/soft-design.html' },
    { text: '💫 系统架构师', link: '/ruan-kao/architect.html' },
  ],
  // softDesignSidebar 已为 permalink；architect 含 `.md` 需解析
  '/ruan-kao/soft-design': softDesignSidebar,
  '/ruan-kao/architect': resolveSidebarPermalinks(architectSidebar, 'ruan-kao/architect'),
})
