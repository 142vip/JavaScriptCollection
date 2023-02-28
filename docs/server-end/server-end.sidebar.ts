export const serverEndSidebar = [
  {
    text: 'Node.js',
    collapsible: true,
    link: '/server-end/node-learn/',
    children: [
      {
        text: 'Stream',
        collapsible: true,
        link: '/server-end/node-learn/stream'
      },
      {
        text: '常用模块包',
        collapsible: true,
        link: '/server-end/node-learn/npm-package'
      }
    ]
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
        text: 'Egg.js',
        link: '/server-end/framework/egg'
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
        link: '/server-end/orm/sequelize'
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
    text: '服务部署',
    collapsible: true,
    children: [
      {
        text: '基础安装',
        link: '/server-end/docker-cluster/docker.md'
      },
      {
        text: 'PM2管理',
        link: '/server-end/docker-cluster/docker.md'
      },
      {
        text: 'egg-cluster',
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
  },
  {
    text: 'Linux操作',
    collapsible: true,
    children: [
      {
        text: '软件安装',
        link: '/server-end/linux/soft-install.md'
      },
      {
        text: 'vim',
        link: '/server-end/linux/vim.md'
      },
      {
        text: 'curl',
        link: '/server-end/linux/vim.md'
      },
      {
        text: '基本指令',
        link: '/server-end/linux/vim.md'
      }
    ]
  },
  {
    text: '建站技能',
    collapsible: true,
    children: [
      {
        text: 'SSL证书配置',
        link: '/server-end/build-website/ssl-install.md'
      },
      {
        text: '镜像托管',
        link: '/server-end/build-website/ssl-install.md'
      },
      {
        text: '二级域名',
        link: '/server-end/build-website/ssl-install.md'
      },
      {
        text: '反向代理',
        link: '/server-end/build-website/ssl-install.md'
      }
    ]
  }

]
