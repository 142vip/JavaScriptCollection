import { OPEN_SOURCE_ADDRESS } from '@142vip/open-source'
import { defineVipNavbarConfig, defineVipSidebarConfig } from '@142vip/vuepress'
import { BattleInterviewSidebar } from './battle-interview/battle-interview.sidebar'
import { DevelopSkillSidebar } from './develop-skill/develop-skill.sidebar'
import { FrontEndSidebar } from './front-end/front-end.sidebar'
import { JobChanceSidebar } from './job-chance/job-chance.sidebar'
import { MicroserviceSidebar } from './microservice/microserviceSidebar'
import { ReadBooksSidebar } from './read-books/read-books.sidebar'
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
} from './server-end'
import { soloAlgorithmSidebar } from './solo-algorithm/solo-algorithm.sidebar'

/**
 * 导航栏
 */
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
      { text: '📄 变更记录', link: '/changelog' },
      { text: '📣 网站动态', link: '/big-event-history' },
      {
        text: '外链',
        children: [
          { text: '🎉 历史版本', link: `${OPEN_SOURCE_ADDRESS.GITHUB_REPO_JSC}/releases` },
          { text: '🎯 开发计划', link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnuuRDWBoHLmYaknXWFuhR4d' },
          { text: '🔗 技术&平台', link: '/frequent-site-link' },
          { text: '💥 公众号文章', link: '/wechat-list' },
        ],
      },

    ],
  },
])

/**
 * 侧边栏
 */
export const sidebarConfig = defineVipSidebarConfig({
  '/front-end': FrontEndSidebar,
  '/server-end': ServerEndSidebar,
  '/server-end/framework/egg-tutorial': EggSidebar,
  '/server-end/framework/koa-tutorial': KoaSidebar,
  '/server-end/framework/express-tutorial': ExpressSidebar,
  '/server-end/database/redis': RedisSidebar,
  '/server-end/database/mysql': MySqlSideBar,
  '/server-end/database/mongo': MongoSideBar,
  '/server-end/linux': LinuxSidebar,
  '/server-end/design-patterns': DesignPatternsSidebar,
  '/server-end/typescript': TypescriptSidebar,
  '/server-end/base': BaseSidebar,
  '/server-end/node-learn': NodeLearnSidebar,
  '/server-end/orm/sequelize': SequelizeOrmSidebar,
  '/server-end/orm/typeorm': TypeormSidebar,
  '/develop-skill': DevelopSkillSidebar,
  '/solo-algorithm': soloAlgorithmSidebar,
  '/read-books': ReadBooksSidebar,
  '/job-chance': JobChanceSidebar,
  '/microservice': MicroserviceSidebar,
  '/battle-interview': BattleInterviewSidebar,
})

/**
 * 主题相关配置【备份】
 * 参考：https://theme-hope.vuejs.press/zh/config/intro.html#%E9%85%8D%E7%BD%AE%E6%A6%82%E5%BF%B5
 */
// export const themeConfig = {
//   theme: hopeTheme({
//     // locales: i18n,
//     // navbarIcon: false,
//     // 在深色模式和浅色模式之间切换
//     darkmode: 'toggle',
//     // 支持全屏
//     // fullscreen: true,
//     // 纯净模式
//     // pure: true,
//     // 打印按钮
//     print: false,
//     hostname: 'https://142vip.cn',
//     // author: AUTHOR_INFO,
//     favicon: '/favicon.ico',
//     logo: '/favicon.icon',
//
//     // 导航栏
//     navbar: navbarConfig,
//     // 导航栏布局
//     navbarLayout: {
//       start: ['Brand'],
//       center: [],
//       end: ['Links', 'Language', 'Search', 'Outlook', 'Repo'],
//     },
//     // 侧边栏
//     sidebar: sidebarConfig,
//     pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
//     // 主题布局选项
//     // docsRepo: RepoAddress,
//     docsDir: 'docs',
//     docsBranch: 'next',
//     repo: '142vip/JavaScriptCollection',
//     repoLabel: 'GitHub',
//     // 是否在导航栏内显示仓库链接，默认为 `true`
//     repoDisplay: true,
//     // 设置页脚
//     displayFooter: true,
//     // footer: FOOTER_HTML_INFO,
//     // copyright: COPYRIGHT,
//     // 主题色选择器
//     themeColor: true,
//     // 是否显示外部链接图标
//     externalLinkIcon: false,
//     // 博客配置
//     // blog: {
//     //     name: '测试',
//     //     avatar: '',
//     //     description: '',
//     //     intro: '',
//     //     roundAvatar: true,
//     //     timeline: "时间轴的顶部文字",
//     //     // articleInfo: "",
//     //     medias: {
//     //         "BiliBili": "https://space.bilibili.com/350937042?spm_id_from=333.1007.0.0"
//     //     }
//     // },
//     plugins: {
//       // comment:{
//       //   provider: "Artalk",
//       //   server:"https://test.142vip.cn/",
//       //   site:'JavaScriptCollection',
//       // },
//       // 公告 参考：https://theme-hope.vuejs.press/zh/guide/feature/notice.html
//       // notice: [
//       //   {
//       //     path: '/',
//       //     title: '在线浏览',
//       //     content: '网站无法访问时，建议通过科学上网访问备用网络',
//       //     actions: [
//       //       {
//       //         text: '尝鲜版',
//       //         link: 'https://142vip.github.io/JavaScriptCollection',
//       //         type: 'default',
//       //       },
//       //       {
//       //         text: '稳定版',
//       //         link: 'https://code.142vip.cn',
//       //         type: 'primary',
//       //       },
//       //     ],
//       //     fullscreen: false,
//       //   },
//       // ],
//       readingTime: {
//         wordPerMinute: 100,
//       },
//       // 水印
//       // watermark: {
//       //   enabled: true,
//       //   watermarkOptions: {
//       //     content: '微信公众号：储凡',
//       //   },
//       // },
//       copyright: false,
//       // 开启博客功能
//       blog: false,
//       // 图片增强，参考：https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-image.html
//       markdownImage: markdownImagePlugin({
//         // 启用 figure
//         figure: true,
//         // 启用图片懒加载
//         lazyload: true,
//         // 启用图片标记
//         mark: true,
//         // 启用图片大小
//         size: true,
//       }),
//       // 代码块
//       mdEnhance: {
//         // card:true,
//         // codetabs: true,
//         // tabs: true,
//         // 支持任务列表
//         tasklist: true,
//         playground: {
//           presets: ['ts', 'vue'],
//         },
//         // revealjs: ["highlight", "math", "search", "notes", "zoom"],
//         stylize: [
//           {
//             matcher: 'Recommended',
//             replacer: ({ tag }) => {
//               if (tag === 'em') {
//                 return {
//                   tag: 'Badge',
//                   attrs: { type: 'tip' },
//                   content: 'Recommended',
//                 }
//               }
//             },
//           },
//         ],
//         sub: true,
//         sup: true,
//         vPre: true,
//         vuePlayground: true,
//         // 文件导入，配置别名
//         include: true,
//         // mermaid
//         mermaid: true,
//         // 自定义对齐
//         align: true,
//       },
//       copyCode: {
//         showInMobile: true,
//       },
//       // 不自动生成README目录
//       catalog: false,
//       // 参考：https://theme-hope.vuejs.press/zh/guide/markdown/components.html
//       components: {
//         components: [
//           'Badge',
//           'BiliBili',
//           'CodePen',
//           'PDF',
//           'StackBlitz',
//           'VidStack',
//           'Share',
//           'XiGua',
//         ],
//       },
//       // searchPro: {
//       //   // 参考：https://plugin-search-pro.vuejs.press/zh/config.html#locales
//       //   locales: {
//       //     '/': searchProCNLocals,
//       //   },
//       // },
//       // 代码高亮：https://theme-hope.vuejs.press/zh/guide/feature/code-block.html
//       shiki: {
//         langs: [
//           'ts',
//           'js',
//           'json',
//           'vue',
//           'json5',
//           'bash',
//           'diff',
//           'c',
//           'c++',
//           'dockerfile',
//           'nginx',
//           'proto',
//           'java',
//           'javascript',
//           'typescript',
//           'yaml',
//         ],
//         // 你想要使用的主题
//         themes: {
//           light: 'one-light',
//           dark: 'one-dark-pro',
//         },
//       },
//       // shiki: shikiPlugin({
//       //   // 配置项
//       //   langs: [
//       //     'java',
//       //     'javascript',
//       //     'typescript',
//       //     'html',
//       //     'css',
//       //     'json',
//       //     'yaml',
//       //     'markdown',
//       //     'xml',
//       //     'bat',
//       //     'shell',
//       //     'powershell',
//       //     'sql',
//       //     'properties',
//       //     'md',
//       //     'vue',
//       //     'tsx',
//       //     'jsx',
//       //     'scss',
//       //     'less',
//       //     'sass',
//       //     'vue-html',
//       //     'nginx',
//       //     'tex',
//       //   ],
//       //   themes: {
//       //     // light: 'one-light',
//       //     // dark: 'one-dark-pro',
//       //     dark: 'dark-plus',
//       //     light: 'light-plus',
//       //   },
//       // }),
//     },
//   }),
// }
