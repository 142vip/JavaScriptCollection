module.exports=  {
    text: "前端【Web】",
    children: [
        {
            text: "基础入门",
            children: [
                {
                    text: "html相关",
                    link: "/front-end/base-begin/html",
                },
                {
                    text: "js相关",
                    link: "/front-end/base-begin/javascript",
                },
                {
                    text: "css相关",
                    link: "/front-end/base-begin/css",
                },
            ],
        },
        {
            text: "前端框架",
            children: [
                {
                    text: "JQuery.js",
                    link: "/front-end/front-framework/jquery",
                },
                {
                    text: "Vue.js",
                    link: "/front-end/front-framework/vue",
                },
                {
                    text: "Nuxt.js",
                    link: "/css",
                },
            ],
        },
        {
            text: "UI相关",
            link: "/ui-framework",
            // children: [{
            //   text: 'Bootstrap',
            //   link: '/html'
            // }, {
            //   text: 'LayerUI',
            //   link: '/js'
            // }, {
            //   text: 'iView-UI',
            //   link: '/css'
            // }, {
            //   text: 'VantUI',
            //   link: '/css'
            // }, {
            //   text: 'Element-UI',
            //   link: '/css'
            // }, {
            //   text: 'Ant-design-vue',
            //   link: '/css'
            // }]
        },
        // {
        //   text: '常用工具',
        //   children: [{
        //     text: '包管理器',
        //     link: '/front-end/server-deploy/static-nginx'
        //   }, {
        //     text: '服务端渲染',
        //     link: '/front-end/server-deploy/front-end-server'
        //   }]
        // },
        {
            text: "常见部署",
            children: [
                {
                    text: "前端分离【nginx】",
                    link: "/front-end/server-deploy/static-nginx",
                },
                {
                    text: "服务端渲染",
                    link: "/front-end/server-deploy/front-end-server",
                },
            ],
        },
    ],
}