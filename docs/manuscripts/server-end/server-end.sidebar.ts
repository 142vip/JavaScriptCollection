
export const ServerEndSidebar = [
  {
    text: '基础知识',
    link: 'base/restful.html'
  },
  {
    text: 'Node.js',
    link: 'node-learn/npm-package.md'
  },
  {
    text: 'ES6',
    // collapsible: true,
    link: 'es6'
  },
  {
    text: 'TypeScript',
    link: 'typescript/简介.md'
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
    text: '常用框架',
    // collapsible: true,
    prefix: 'framework',
    children: [
    // {
    //   text: 'Express',
    //   link: 'express-learn.md'
    // },
      {
        text: 'Koa',
        link: 'koa-tutorial/base-introduce.html'
      },
      {
        text: 'Egg.js',
        link: 'egg-tutorial/introduce.html'
      }
    // {
    //   text: 'Nest.js',
    //   link: 'nest-learn.md'
    // },
    // {
    //   text: 'Midway.js',
    //   link: 'midway-learn.md'
    // }
    ]
  },
  {
    text: '数据库',
    // collapsible: true,
    prefix: 'database',
    children: [
      {
        text: 'Redis',
        link: 'redis/base-install.html'
      },
      {
        text: 'MySQL',
        link: 'mysql/base-install.html'
      },
      {
        text: 'MongoDB',
        link: 'mongo/base-install.html'
      }
    ]
  },
  {
    text: '服务部署',
    // collapsible: true,
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
    link: 'linux/base-install.md'
  },
  {
    text: '建站技能',
    // collapsible: true,
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
