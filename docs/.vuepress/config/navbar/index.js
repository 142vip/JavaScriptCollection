/*
 * @Description: 首页目录
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2022-04-09 23:17:29
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-24 09:23:17
 */
module.exports = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "前端【Web】",
    children: [
      {
        text: "基础入门",
        children: [
          {
            text: "html相关",
            link: "/front-end/base-begin/html",
          },
          {
            text: "js相关",
            link: "/front-end/base-begin/javascript",
          },
          {
            text: "css相关",
            link: "/front-end/base-begin/css",
          },
        ],
      },
      {
        text: "前端框架",
        children: [
          {
            text: "JQuery.js",
            link: "/front-end/front-framework/jquery",
          },
          {
            text: "Vue.js",
            link: "/front-end/front-framework/vue",
          },
          {
            text: "Nuxt.js",
            link: "/css",
          },
        ],
      },
      {
        text: "UI相关",
        link: "/ui-framework",
        // children: [{
        //   text: 'Bootstrap',
        //   link: '/html'
        // }, {
        //   text: 'LayerUI',
        //   link: '/js'
        // }, {
        //   text: 'iView-UI',
        //   link: '/css'
        // }, {
        //   text: 'VantUI',
        //   link: '/css'
        // }, {
        //   text: 'Element-UI',
        //   link: '/css'
        // }, {
        //   text: 'Ant-design-vue',
        //   link: '/css'
        // }]
      },
      // {
      //   text: '常用工具',
      //   children: [{
      //     text: '包管理器',
      //     link: '/front-end/server-deploy/static-nginx'
      //   }, {
      //     text: '服务端渲染',
      //     link: '/front-end/server-deploy/front-end-server'
      //   }]
      // },
      {
        text: "常见部署",
        children: [
          {
            text: "前端分离【nginx】",
            link: "/front-end/server-deploy/static-nginx",
          },
          {
            text: "服务端渲染",
            link: "/front-end/server-deploy/front-end-server",
          },
        ],
      },
    ],
  },
  {
    text: "后端【Node.js】",
    children: [
      {
        text: "Node.js",
        link: "/server-end/node",
      },
      {
        text: "TypeScript",
        link: "/server-end/typescript",
      },
      {
        text: "常用框架",
        children: [
          {
            text: "Express",
            link: "/server-end/framework/express-learn",
          },
          {
            text: 'Koa', link: '/server-end/framework/koa-learn'
          },
          {
            text: "Egg.js",
            link: "/server-end/framework/egg-learn",
          },
          {
            text: "Nest.js",
            link: "/server-end/framework/nest-learn",
          },
          {
            text: "Midway",
            link: "/server-end/framework/midway-learn",
          },
        ],
      },
      {
        text: "数据库",
        children: [
          {
            text: "Redis",
            link: "/server-end/database/redis",
          },
          {
            text: "MySQL",
            link: "/server-end/database/mysql",
          },
          {
            text: "Mongo",
            link: "/server-end/database/mongo",
          },
        ],
      },
      {
        text: "消息中间件",
        children: [
          {
            text: "RabbitMQ",
            link: "/mq",
          },
          {
            text: 'Kafka', link: '/'
          },
          {
            text: 'RocketMQ', link: '/'
          }
        ],
      },
      {
        text: "容器相关",
        children: [
          {
            text: "Docker基础",
            link: "/server-end/container-learn/docker-base",
          },

          {
            text: "服务部署",
            link: "/server-end/container-learn/server-deploy",
          },
          {
            text: "服务集群编排",
            link: "/server-end/container-learn/docker-layout",
          },
        ],
      }
    ],
  },
  {
    text: "开发工具",
    children: [
      {
        text: "包管理器",
        link: "/front-end/server-deploy/static-nginx",
      },
      {
        text: "服务端渲染",
        link: "/front-end/server-deploy/front-end-server",
      },
    ],
  },
  {
    text: "Solo算法",
    children: [
      {
        text: "刷题整理",
        link: "/solo-algorithm/question-collections",
      },
      {
        text: "刷题平台",
        children: [
          {
            text: "杭电OJ",
            link: "http://acm.hdu.edu.cn/",
          },
          {
            text: "牛客网",
            link: "https://www.nowcoder.com/",
          },
          {
            text: "LeetCode",
            link: "https://leetcode-cn.com/",
          },
        ],
      },
    ],
  },
  {
    text: "Battle面试官",
    children: [
      {
        text: "常见面试题",
        link: "/battle-interview/interview-problems",
      },
      {
        text: "面经分享",
        link: "/battle-interview/introduce-share",
      },
      {
        text: "工作机会",
        children: [
          {
            text: "校招",
            link: "/battle-interview/school-recruit",
          },
          {
            text: "社招",
            link: "/battle-interview/social-recruit",
          },
        ],
      },
      {
        text: "小技巧",
        children: [
          {
            text: "校招",
            link: "/",
          },
          {
            text: "社招",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    text: "读书整理",
    children: [
      {
        text: "技术类",
        children: [
          {
            text: "ES6标准入门",
            link: "/school",
          },
          {
            text: "了不起的Node.js",
            link: "/",
          },
          {
            text: "深入浅出Node.js",
            link: "/go",
          },
          {
            text: "高性能Web服务器详解【Nginx】",
            link: "/nginx",
          },
        ],
      },
      {
        text: "非技术类",
        children: [
          {
            text: "你好，孤独",
            link: "/",
          },
          {
            text: "测试",
            link: "/f111",
          },
        ],
      },
    ],
  },
  // {
  //   text: '其他',
  //   children: [{
  //     text: '面试突击', link: '/',
  //   },
  //   {
  //     text: '日常学习', link: '/'
  //   },
  //   {
  //     text:'历史版本',link:'ddd'
  //   }
  // ]
  // },
  {
    text: "常用网站",
    children: [
      {
        text: "平台汇总",
        link: "/sum-links",
      },
      {
        text: "技术文档",
        children: [
          {
            text: "百度",
            link: "http://www.baidu.com",
          },
        ],
      },
    ],
  },
];
