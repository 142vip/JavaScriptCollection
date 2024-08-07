import { navbar } from 'vuepress-theme-hope'
import { soloAlgorithmSidebar } from '../../solo-algorithm/solo-algorithm.sidebar'

export default navbar([
  {
    text: '首页',
    link: '/',
  },
  {
    text: 'SOLO算法',
    children: soloAlgorithmSidebar,
  },
  {
    text: 'Battle面试官',
    link: '/battle-interview/',
  },
  {
    text: '前端工程化',
    link: '/front-end/',
  },
  {
    text: '后端开发',
    link: '/server-end/',
  },
  {
    text: '微服务',
    link: '/microservice/',
  },
  {
    text: '开发技巧',
    link: '/develop-skill/',
  },
  {
    text: '读书整理',
    link: '/read-books/',
  },
  {
    text: '了解更多',
    children: [
      {
        text: '变更记录',
        link: '/changelog',
      },
      {
        text: '网站动态',
        link: '/big-event-history',
      },
      {
        text: '自媒体',
        children: [
          {
            text: '公众号文章',
            link: '/wechat-list',
          },
        ],
      },
      {
        text: '外链',
        children: [
          {
            text: '常用网站',
            link: '/frequent-site-link',
          },
          {
            text: 'RoadMap计划',
            link: 'https://142vip-cn.feishu.cn/share/base/view/shrcnxtFKV2JfBZbqFh0GUxzTOg',
          },
        ],
      },
    ],
  },
])
