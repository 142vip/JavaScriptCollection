export const frontEndSidebar = [
  {
    text: 'HTML',
    link: '/front-end/base-begin/html'
  },
  {
    text: 'CSS',
    link: '/front-end/base-begin/css'
  },
  {
    text: 'JavaScript',
    link: '/front-end/base-begin/javascript'
  },
  {
    text: '前端框架',
    children: [
      {
        text: 'Vue',
        link: '/front-end/front-framework/vue'
      },
      {
        text: 'Nuxt',
        link: '/front-end/front-framework/nuxt'
      },
      {
        text: 'JQuery',
        link: '/front-end/front-framework/jquery'
      }
    ]
  },
  {
    text: 'UI框架',
    children: [
      {
        text: 'Ant-Design-Vue',
        link: '/front-end/ui-framework/ant-design-vue'
      },
      {
        text: 'Element-UI',
        link: '/front-end/ui-framework/element-ui'
      },
      {
        text: 'IView-Design',
        link: '/front-end/ui-framework/iview-design'
      },

      {
        text: 'Vant-UI',
        link: '/front-end/ui-framework/vant-ui'
      },
      {
        text: 'Layer-UI',
        link: '/front-end/ui-framework/layer-ui'
      },
      {
        text: 'Bootstrap',
        link: '/front-end/ui-framework/bootstrap'
      }
    ]
  },
  {
    text: '服务部署',
    children: [
      {
        text: '前端分离【nginx】',
        link: '/front-end/server-deploy/static-nginx'
      },
      {
        text: '服务端渲染',
        link: '/front-end/server-deploy/front-end-server'
      },
      {
        text: 'SSR优化',
        link: '/ssr'
      }
    ]
  }
]
