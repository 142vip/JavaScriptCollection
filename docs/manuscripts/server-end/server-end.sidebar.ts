import { redisSidebar } from './database/redis/redis.sidebar'
import { mySqlSideBar } from './database/mysql/mysql.sidebar'
import { mongoSideBar } from './database/mongo/mongo.sidebar'

export const serverEndSidebar = [{
  text: 'Node.js',
  // collapsible: true,
  prefix: 'node-learn',
  children: [
    {
      text: '常用模块包',
      collapsible: true,
      link: 'npm-package.md'
    },
    {
      text: 'stream',
      collapsible: true,
      link: 'stream.md'
    },
    {
      text: 'dayjs',
      link: 'dayjs.md'
    },
    {
      text: 'lodash',
      link: 'lodash.md'
    },
    {
      text: 'rxjs',
      link: 'rxjs.md'
    },
    {
      text: 'axios',
      link: 'axios.md'
    }
  ]
},
{
  text: 'ES6',
  // collapsible: true,
  link: 'es6'
},
{
  text: 'TypeScript',
  link: 'typescript'
},
{
  text: '开发知识',
  collapsible: true,
  prefix: 'base',
  children: [
    {
      text: 'RestFul风格',
      link: 'restFul.md'
    },
    {
      text: '接口规范',
      link: '接口规范.md'
    },
    {
      text: 'OAuth2.0协议',
      link: 'OAuth2.0协议.md'
    },
    {
      text: '会话信息',
      link: '会话信息.md'
    },
    {
      text: '远程调用',
      link: '远程调用.md'
    }
  ]
},
{
  text: '常用框架',
  // collapsible: true,
  prefix: 'framework',
  children: [
    {
      text: 'Express',
      link: 'express-learn.md'
    },
    {
      text: 'Koa',
      link: 'koa-learn.md'
    },
    {
      text: 'Egg.js',
      link: 'egg'
    },
    {
      text: 'Nest.js',
      link: 'nest-learn.md'
    },
    {
      text: 'Midway.js',
      link: 'midway-learn.md'
    }
  ]
},
{
  text: 'ORM框架',
  // collapsible: true,
  children: [
    {
      text: 'Sequelize',
      link: 'orm/sequelize'
    },
    {
      text: 'TypeOrm',
      link: 'orm/typeorm'
    }
  ]
},

{
  text: '数据库',
  // collapsible: true,
  prefix: 'database',
  children: [
    {
      text: 'Redis',
      prefix: 'redis',
      collapsible: true,
      children: redisSidebar
    },
    {
      text: 'MySQL',
      prefix: 'mysql',
      collapsible: true,
      children: mySqlSideBar
    },
    {
      text: 'MongoDB',
      prefix: 'mongo',
      collapsible: true,
      children: mongoSideBar
    }
  ]
},
{
  text: '服务部署',
  collapsible: true,
  prefix: 'server-deploy',
  children: [
    {
      text: '基础安装',
      link: 'install.md'
    },
    {
      text: 'PM2部署',
      link: 'pm2.md'
    },
    {
      text: 'Docker部署',
      link: 'docker.md'
    },
    {
      text: '集群部署',
      link: 'docker-compose.md'
    }
  ]
},
{
  text: 'Linux操作',
  collapsible: true,
  prefix: 'linux',
  children: [
    {
      text: '基本指令',
      link: 'base-shell.md'
    },
    {
      text: '软件安装',
      link: 'soft-install.md'
    },
    {
      text: '包管理器',
      link: 'package-manage.md'
    },
    {
      text: '常用软件',
      collapsible: true,
      children: [
        {
          text: 'vim',
          link: 'vim.md'
        },
        {
          text: 'curl',
          link: 'curl.md'
        }
      ]
    }
  ]
},
{
  text: '建站技能',
  collapsible: true,
  prefix: 'build-website',
  children: [
    {
      text: 'SSL证书配置',
      link: 'ssl-install.md'
    },
    {
      text: '镜像托管',
      link: 'store-image.md'
    },
    {
      text: '二级域名',
      link: 'web-domain.md'
    },
    {
      text: '反向代理',
      link: 'proxy.md'
    },
    {
      text: '配置gzip',
      link: 'nginx-gzip.md'
    }
  ]
}

]
