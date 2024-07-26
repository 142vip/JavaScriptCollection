import {soloAlgorithmSidebar} from "../../docs/manuscripts/solo-algorithm/solo-algorithm.sidebar";

export const navbar =[
  {
    text: "首页",
    link: "/",
  },
  {
    text: "SOLO算法",
    children: soloAlgorithmSidebar
  },
  {
    text: "Battle面试官",
    link: "/manuscripts/battle-interview/",
  },
  {
    text: "前端",
    link: "/manuscripts/front-end/",
  },
  {
    text: "Node后端",
    link: "/manuscripts/server-end/",
  },
  {
    text: '微服务',
    link: "/manuscripts/microservice/",
  },
  {
    text: "开发技巧",
    link: "/manuscripts/develop-skill/",
  },
  {
    text: "读书整理",
    link: "/manuscripts/read-books/",
  },
  {
    text: "了解更多",
    children: [
      {
        text: '变更记录',
        link: '/manuscripts/changelog.md'
      },
      {
        text: '网站动态',
        link: '/manuscripts/big-event-history.md'
      },
      {
        text: "自媒体",
        children: [
          {
            text: "公众号文章",
            link: "/manuscripts/wechat-list.md"
          },
        ]
      },
      {
        text: "外链",
        children: [
          {
            text: '常用网站',
            link: '/manuscripts/frequent-site-link.md'
          },
          {
            text: "RoadMap计划",
            link: "https://142vip-cn.feishu.cn/share/base/view/shrcnxtFKV2JfBZbqFh0GUxzTOg"
          }
        ]
      },
    ],
  },
];
