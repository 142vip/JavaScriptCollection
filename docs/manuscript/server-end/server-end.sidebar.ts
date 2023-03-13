import { redisSidebar } from './database/redis/redis.sidebar'

export const serverEndSidebar = [
  {
    text: 'Node.js',
    collapsible: true,
    link: 'node-learn/',
    children: [
      {
        text: '常用模块包',
        collapsible: true,
        link: 'node-learn/npm-package'
      },
      {
        text: 'stream',
        collapsible: true,
        link: 'node-learn/stream'
      },
      {
        text: 'dayjs',
        link: 'node-learn/dayjs.md'
      }

    ]
  },
  {
    text: 'ES6',
    collapsible: true,
    link: 'es6'
  },
  {
    text: 'TypeScript',
    link: 'typescript'
  },
  {
    text: '开发知识',
    collapsible: true,
    children: [
      {
        text: 'RestFul风格',
        collapsible: true,
        link: 'framework/express-learn'
      },
      {
        text: '接口规范',
        collapsible: true,
        link: 'framework/koa-learn'
      },
      {
        text: 'OAuth2.0协议',
        collapsible: true,
        link: 'framework/koa-learn'
      },
      {
        text: '会话信息',
        link: 'framework/nest-learn'
      },
      {
        text: '远程调用',
        link: 'framework/midway-learn'
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
        link: 'framework/express-learn'
      },
      {
        text: 'Koa',
        collapsible: true,
        link: 'framework/koa-learn'
      },
      {
        text: 'Egg.js',
        link: 'framework/egg'
      },
      {
        text: 'Nest.js',
        link: 'framework/nest-learn'
      },
      {
        text: 'Midway.js',
        link: 'framework/midway-learn'
      }
    ]
  },
  {
    text: 'ORM框架',
    collapsible: true,
    children: [
      {
        text: 'Sequelize',
        link: 'orm/sequelize'
      },
      {
        text: 'TypeOrm',
        link: 'framework/orm/typeorm'
      }
    ]
  },

  {
    text: '数据库',
    collapsible: true,
    children: [
      {
        text: 'Redis',
        prefix: 'database/redis',
        children: redisSidebar
      },
      {
        text: 'MySQL',
        link: 'database/mysql'
      },
      {
        text: 'MongoDB',
        link: 'database/mongo/install.md'
      }
    ]
  },
  {
    text: '服务部署',
    collapsible: true,
    children: [
      {
        text: '基础安装',
        link: 'docker-cluster/docker.md'
      },
      {
        text: 'PM2管理',
        link: 'docker-cluster/docker.md'
      },
      {
        text: 'egg-cluster',
        link: 'docker-cluster/docker.md'
      },
      {
        text: 'Docker',
        link: 'docker-cluster/docker.md'
      },
      {
        text: '集群管理',
        link: 'docker-cluster/docker-compose.md'
      },
      {
        text: 'Dockerfile详解',
        link: 'docker-cluster/dockerfile.md'
      }

    ]
  },
  {
    text: 'Linux操作',
    collapsible: true,
    children: [
      {
        text: '软件安装',
        link: 'linux/soft-install.md'
      },
      {
        text: 'vim',
        link: 'linux/vim.md'
      },
      {
        text: 'curl',
        link: 'linux/vim.md'
      },
      {
        text: '基本指令',
        link: 'linux/vim.md'
      }
    ]
  },
  {
    text: '建站技能',
    collapsible: true,
    children: [
      {
        text: '配置gzip',
        link: 'build-website/ssl-install.md'
      },
      {
        text: 'SSL证书配置',
        link: 'build-website/ssl-install.md'
      },
      {
        text: '镜像托管',
        link: 'build-website/ssl-install.md'
      },
      {
        text: '二级域名',
        link: 'build-website/ssl-install.md'
      },
      {
        text: '反向代理',
        link: 'build-website/ssl-install.md'
      }
    ]
  }

]
