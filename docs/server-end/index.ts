export * from './base/base.sidebar'
export * from './database/mongo/mongoSideBar'
export * from './database/mysql/mySqlSideBar'
export * from './database/redis/redisSidebar'
export * from './design-patterns/designPatterns.sidebar'
export * from './framework/egg/eggSidebar'
export * from './framework/express/express.sidebar'
export * from './framework/koa/koa.sidebar'
export * from './linux/linuxSidebar'
export * from './node-learn/nodeLearnSidebar'
export * from './orm/sequelize/sequelizeOrm.sidebar'
export * from './orm/typeorm/typeorm.sidebar'
export * from './typescript/typescript.sidebar'

/**
 * 后端服务-侧边栏
 */
export const ServerEndSidebar = [
  {
    text: '基础知识',
    link: 'base/restful.html',
  },
  {
    text: 'Node.js',
    link: 'node-learn/npm-package.md',
  },
  {
    text: 'ECMAScript版本',
    prefix: 'es-version',
    children: [
      {
        text: 'ES5-2009',
        link: 'ES5-2009.md',
      },

      {
        text: 'ES6-2015',
        link: 'ES6-2015.md',
      },
      // {
      //   text: 'ES7-2016',
      //   link: 'ES7-2016.md'
      // },
      // {
      //   text: 'ES8-2017',
      //   link: 'ES8-2017.md'
      // }
    ],
  },
  {
    text: 'TypeScript',
    link: 'typescript/quick-start.html',
  },
  {
    text: 'ORM框架',
    // collapsible: true,
    prefix: 'orm',
    children: [
      {
        text: 'Sequelize',
        link: 'sequelize/quick-start.html',
      },
      {
        text: 'TypeOrm',
        link: 'typeorm/quick-start.html',
      },
    ],
  },
  {
    text: '后端框架',
    // collapsible: true,
    prefix: 'framework',
    children: [
      {
        text: 'Express',
        link: 'express-tutorial/quick-start.html',
      },
      {
        text: 'Koa',
        link: 'koa-tutorial/base-introduce.html',
      },
      {
        text: 'Egg.js',
        link: 'egg-tutorial/introduce.html',
      },
      // {
      //   text: 'Nest.js',
      //   link: 'nest-learn.md'
      // },
      // {
      //   text: 'Midway.js',
      //   link: 'midway-learn.md'
      // }
    ],
  },
  {
    text: '数据库',
    // collapsible: true,
    prefix: 'database',
    children: [
      {
        text: 'Redis',
        link: 'redis/base-install.html',
      },
      {
        text: 'MySQL',
        link: 'mysql/base-install.html',
      },
      {
        text: 'MongoDB',
        link: 'mongo/base-install.html',
      },
    ],
  },
  {
    text: '设计模式',
    link: 'design-patterns/Readme.md',
  },
  {
    text: 'Linux系统',
    link: 'linux/base-install.md',
  },
  {
    text: '服务部署',
    collapsible: true,
    prefix: 'server-deploy',
    children: [
      {
        text: '基础安装',
        link: 'install.md',
      },
      {
        text: 'PM2部署',
        link: 'pm2.md',
      },
      {
        text: 'Docker部署',
        link: 'docker.md',
      },
      {
        text: '集群部署',
        link: 'docker-compose.md',
      },
    ],
  },

  {
    text: '建站技能',
    collapsible: true,
    prefix: 'build-website',
    children: [
      {
        text: 'SSL证书配置',
        link: 'ssl-install.md',
      },
      {
        text: '镜像托管',
        link: 'store-image.md',
      },
      {
        text: '二级域名',
        link: 'web-domain.md',
      },
      {
        text: '反向代理',
        link: 'nginx-proxy.md',
      },
      {
        text: '配置gzip',
        link: 'nginx-gzip.md',
      },
    ],
  },
]
