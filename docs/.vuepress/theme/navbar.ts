import { navbar } from 'vuepress-theme-hope'
import { RepoAddress } from '@142vip/vuepress'
import { soloAlgorithmSidebar } from '../../solo-algorithm/solo-algorithm.sidebar'

export default navbar([
  {
    text: '🌐 首页',
    link: '/',
  },
  {
    text: '🧠 SOLO算法',
    children: soloAlgorithmSidebar,
  },
  {
    text: '💡 Battle面试官',
    link: '/battle-interview/',
  },
  {
    text: '💻 全栈开发',
    children: [
      {
        text: '👩🏻‍💻 前端',
        link: '/front-end/',
      },
      {
        text: '👨🏻‍💻 后端',
        link: '/server-end/',
      },
      {
        text: '💫 开发技巧',
        link: '/develop-skill/',
      },
      {
        text: '🕸️ 微服务架构',
        link: '/microservice/',
      },
    ],
  },
  {
    text: '📖 读书整理',
    link: '/read-books/',
  },
  {
    text: '👉 了解更多',
    children: [
      {
        text: '📄 更新日志',
        link: '/changelog',
      },
      {
        text: '📣 网站动态',
        link: '/big-event-history',
      },
      {
        text: '外链',
        children: [
          {
            text: '🎉 历史版本',
            link: `${RepoAddress}/releases`,
          },
          {
            text: '🎯 开发计划',
            link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnuuRDWBoHLmYaknXWFuhR4d',
          },
          {
            text: '🔗 技术&平台',
            link: '/frequent-site-link',
          },
          {
            text: '💥 公众号文章',
            link: '/wechat-list',
          },
        ],
      },

    ],
  },
])
