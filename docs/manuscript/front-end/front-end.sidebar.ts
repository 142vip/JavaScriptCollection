export const frontEndSidebar = [
  {
    text: 'HTML',
    link: 'base-begin/html.md'
  },
  {
    text: 'CSS',
    link: 'base-begin/css.md'
  },
  {
    text: 'JavaScript',
    link: 'base-begin/javascript.md'
  },
  {
    text: '前端框架',
    collapsible: true,
    children: [
      {
        text: 'Vue',
        children: [{
          text: '安装',
          link: 'front-framework/vue'
        }]
      },
      {
        text: 'Nuxt',
        link: 'front-framework/nuxt'
      },
      {
        text: 'Vuepress',
        link: 'front-framework/nuxt'
      },
      {
        text: 'JQuery',
        link: 'front-framework/jquery'
      }
    ]
  },
  {
    text: 'UI框架',
    children: [
      {
        text: 'Ant-Design-Vue',
        link: 'ui-framework/ant-design-vue'
      },
      {
        text: 'Element-UI',
        link: 'ui-framework/element-ui'
      },
      {
        text: 'IView-Design',
        link: 'ui-framework/iview-design'
      },

      {
        text: 'VAnt-UI',
        link: 'ui-framework/vant-ui'
      },
      {
        text: 'Layer-UI',
        link: 'ui-framework/layer-ui'
      },
      {
        text: 'Bootstrap',
        link: 'ui-framework/bootstrap'
      }
    ]
  },
  {
    text: '服务部署',
    children: [
      {
        text: '静态文件部署',
        link: 'server-deploy/static-nginx'
      },
      {
        text: '服务端渲染',
        link: 'server-deploy/front-end-server'
      },
      {
        text: 'SSR优化',
        link: 'server-deploy/ssr'
      }
    ]
  }
]
