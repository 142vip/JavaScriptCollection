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
    prefix: 'front-framework',
    children: [
      {
        text: 'Vue',
        link: 'vue.md'
      },
      {
        text: 'Nuxt',
        link: 'nuxt.md'
      },
      {
        text: 'Vuepress',
        link: 'vuepress.md'
      },
      {
        text: 'JQuery',
        link: 'jquery'
      }
    ]
  },
  {
    text: 'UI框架',
    // collapsible: true,
    prefix: 'ui-framework',
    children: [
      {
        text: 'Ant-Design-Vue',
        link: 'ant-design-vue'
      },
      {
        text: 'Element-UI',
        link: 'element-ui'
      },
      {
        text: 'IView-Design',
        link: 'iview-design'
      },

      {
        text: 'VAnt-UI',
        link: 'vant-ui'
      },
      {
        text: 'Layer-UI',
        link: 'layer-ui'
      },
      {
        text: 'Bootstrap',
        link: 'bootstrap'
      }
    ]
  },
  {
    text: '服务部署',
    prefix: 'server-deploy',
    children: [
      {
        text: '静态文件部署',
        link: '静态文件部署.md'
      },
      {
        text: '服务端渲染',
        link: '服务端渲染.md'
      },
      {
        text: 'SSR优化',
        link: 'SSR优化.md'
      }
    ]
  }
]
