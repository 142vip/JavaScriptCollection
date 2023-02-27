export const serverEndSidebar = [
  {
    text: 'Node.js',
    collapsible: true,
    link: '/server-end/node-learn/'
  },
  {
    text: 'ES6',
    collapsible: true,
    link: '/server-end/es6'
  },
  {
    text: 'TypeScript',
    link: '/server-end/typescript'
  },
  {
    text: '开发知识',
    collapsible: true,
    children: [
      {
        text: 'RestFul风格',
        collapsible: true,
        link: '/server-end/framework/express-learn'
      },
      {
        text: '接口规范',
        collapsible: true,
        link: '/server-end/framework/koa-learn'
      },
      {
        text: 'OAuth2.0协议',
        collapsible: true,
        link: '/server-end/framework/koa-learn'
      },
      {
        text: '会话信息',
        link: '/server-end/framework/nest-learn'
      },
      {
        text: '远程调用',
        link: '/server-end/framework/midway-learn'
      }
    ]
  },
  {
    text: '应用框架',
    collapsible: true,
    children: [
      {
        text: 'Express',
        collapsible: true,
        link: '/server-end/framework/express-learn'
      },
      {
        text: 'Koa',
        collapsible: true,
        link: '/server-end/framework/koa-learn'
      },
      {
        text: 'Egg',
        collapsible: true,
        children: [
          {
            text: '简介',
            link: '/server-end/framework/egg/简介.md'
          },
          {
            text: '快速入门',
            link: '/server-end/framework/egg/快速入门.md'
          },
          {
            text: '目录结构',
            link: '/server-end/framework/egg/目录结构.md'
          },
          {
            text: '框架对象',
            link: '/server-end/framework/egg/框架对象.md'
          },
          {
            text: '配置和运行环境',
            link: '/server-end/framework/egg/配置和运行环境.md'
          },
          {
            text: '中间件',
            link: '/server-end/framework/egg/中间件.md'
          },
          {
            text: '路由的使用',
            link: '/server-end/framework/egg/路由的使用.md'
          },
          {
            text: '控制器和服务',
            link: '/server-end/framework/egg/控制器和服务.md'
          },
          {
            text: '定时任务',
            link: '/server-end/framework/egg/定时任务.md'
          },
          {
            text: '框架拓展',
            link: '/server-end/framework/egg/框架拓展.md'
          },
          {
            text: 'egg-mysql',
            link: '/server-end/framework/egg/egg-mysql.md'
          },
          {
            text: '最佳实践',
            link: '/server-end/framework/egg/最佳实践.md'
          }
        ]
      },
      {
        text: 'Nest.js',
        link: '/server-end/framework/nest-learn'
      },
      {
        text: 'Midway.js',
        link: '/server-end/framework/midway-learn'
      }
    ]
  },
  {
    text: 'ORM框架',
    collapsible: true,
    children: [
      {
        text: 'Sequelize',
        link: '/server-end/framework/orm/sequelize'
      },
      {
        text: 'TypeOrm',
        link: '/server-end/framework/orm/typeorm'
      }
    ]
  },

  {
    text: '数据库',
    collapsible: true,
    children: [
      {
        text: 'Redis',
        link: '/server-end/database/redis'
      },
      {
        text: 'MySQL',
        link: '/server-end/database/mysql'
      },
      {
        text: 'MongoDB',
        link: '/server-end/database/mongo'
      }
    ]
  },
  {
    text: '容器部署',
    collapsible: true,
    children: [
      {
        text: '安装',
        link: '/server-end/docker-cluster/docker.md'
      },
      {
        text: 'Docker',
        link: '/server-end/docker-cluster/docker.md'
      },
      {
        text: '集群管理',
        link: '/server-end/docker-cluster/docker-compose.md'
      },
      {
        text: 'Dockerfile详解',
        link: '/server-end/docker-cluster/dockerfile.md'
      }
    ]
  }

]
