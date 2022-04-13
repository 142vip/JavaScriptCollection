/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2022-04-09 23:17:29
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-13 08:52:00
 */
module.exports = [
  {
    text: "前端【Web】",
    children: [{
      text: '基础入门',
      children: [{
        text: 'html相关',
        link: '/html'
      }, {
        text: 'js相关',
        link: '/js'
      }, {
        text: 'css相关',
        link: '/css'
      }]
    }, {
      text: '前端框架',
      children: [{
        text: 'JQuery.js',
        link: '/html'
      }, {
        text: 'Vue.js',
        link: '/js'
      },
      {
        text: 'Nuxt.js',
        link: '/css'
      }
      ]
    }, {
      text: 'UI框架',
      children: [{
        text: 'Bootstrap',
        link: '/html'
      }, {
        text: 'LayerUI',
        link: '/js'
      }, {
        text: 'iView-UI',
        link: '/css'
      }, {
        text: 'VantUI',
        link: '/css'
      }, {
        text: 'Element-UI',
        link: '/css'
      }, {
        text: 'Ant-design-vue',
        link: '/css'
      }]
    }, {
      text: '常见部署',
      children: [{
        text: '静态资源',
        link: '/test'
      }, {
        text: '前后端分离',
        link: '/fix'
      }]
    }
    ]
  },
  {
    text: "后端【Node.js】",
    children: [{
      text: 'Node.js', link: '/school',
    }, {
      text: 'TypeScript', link: '/ts'
    },
    {
      text: '常用框架',
      children: [{
        text: 'Express和Koa', link: '/',
      },
      // {
      //   text: 'Koa', link: '/'
      // },
      {
        text: 'Egg.js', link: '/'
      },
      {
        text: 'Nest.js', link: '/'
      },
      {
        text: 'Midway', link: '/'
      }
      ]
    },
    {
      text: '数据库',
      children: [{
        text: 'Redis', link: '/database/redis',
      },
      {
        text: 'MySQL', link: '/database/mysql'
      },
      {
        text: 'Mongo', link: '/database/mongo'
      }]
    },
    {
      text: '消息中间件',
      children: [{
        text: 'RabbitMQ', link: '/mq',
      },
        // {
        //   text: 'Kafka', link: '/'
        // },
        // {
        //   text: 'RocketMQ', link: '/'
        // }
      ]
    },
    {
      text: '容器相关',
      children: [{
        text: 'Docker', link: '/',
      },
      {
        text: '', link: '/'
      },
      {
        text: '服务部署', link: '/'
      }]
    },
    {
      text: '测试',
      children: [{
        text: '校招', link: '/',
      },
      {
        text: '社招', link: '/'
      }]
    }
    ]
  },
  {
    text: "Solo算法",
    children: [{
      text: '刷题整理', link: '/solo_algorithm'
    }, {
      text: '刷题平台',
      // C语言网(https://www.dotcpp.com)
      // 杭电OJ(http://acm.hdu.edu.cn/)
      children: [
        {
          text: '杭电OJ', link: 'http://acm.hdu.edu.cn/'
        },
        {
          text: '牛客网', link: 'https://www.nowcoder.com/'
        }, {
          text: 'LeetCode', link: 'https://leetcode-cn.com/'
        }
      ]
    },
      // {
      //   text: '刷题平台',
      //   children: [
      //     {
      //       text: '牛客网', link: 'https://www.nowcoder.com/'
      //     }, {
      //       text: 'LeetCode', link: 'https://leetcode-cn.com/'
      //     }
      //   ]
      // },
    ]
  },
  {
    text: "Battle面试官",
    children: [{
      text: '常见面试题',
      link: '/battle_interview/interview_problems'
    }, {
      text: '面经分享',
      link: '/battle_interview/introduce_share'
    }, {
      text: '工作机会',
      children: [{
        text: '校招', link: '/battle_interview/school_recruit',
      },
      {
        text: '社招', link: '/battle_interview/social_recruit'
      }]
    },
    {
      text: '小技巧',
      children: [{
        text: '校招', link: '/',
      },
      {
        text: '社招', link: '/'
      }]
    }]
  },
  {
    text: "读书整理",
    children: [
      {
        text: '技术类',
        children: [{
          text: 'ES6标准入门', link: '/school',
        },
        {
          text: '了不起的Node.js', link: '/'
        },
        {
          text: '深入浅出Node.js', link: '/go'
        }]
      },
      {
        text: '非技术类',
        children: [{
          text: '你好，孤独', link: '/',
        },
        {
          text: '测试', link: '/f111'
        }]
      }
    ]
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
    text: '常用网站',
    children: [{
      text: '平台汇总', link: '/sum_links'
    }, {
      text: '技术文档',
      children: [{
        text: '百度', link: 'http://www.baidu.com'
      }]
    }]
  },
  {
    text: '工作机会',
    link: '/2332323'
  },
];
