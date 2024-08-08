import {hopeTheme} from 'vuepress-theme-hope'
import {AUTHOR_INFO, COPYRIGHT, FOOTER_HTML_INFO} from './constant'
import {i18n, searchProCNLocals} from './i18n'
import navbar from './navbar'
import sidebar from './sidebar'

/**
 * 主题相关配置
 * 参考主题：https://theme-hope.vuejs.press/zh/config/intro.html#%E9%85%8D%E7%BD%AE%E6%A6%82%E5%BF%B5
 */
export const themeConfig = {
  theme: hopeTheme({
    locales: i18n,
    // navbarIcon: false,
    // 禁用深色模式
    darkmode: 'disable',
    // 支持全屏
    // fullscreen: true,
    // 纯净模式
    // pure: true,
    print: false, // 打印按钮
    hostname: 'https://142vip.cn',
    author: AUTHOR_INFO,
    favicon: '/favicon.ico',
    logo: '/favicon.icon',

    navbar,
    // 导航栏布局
    navbarLayout: {
      start: ['Brand'],
      center: [],
      end: ['Links', 'Language', 'Outlook', 'Search', 'Repo'],
    },
    sidebar,
    pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
    // 主题布局选项
    docsRepo: 'https://github.com/142vip/JavaScriptCollection',
    docsDir: 'docs',
    docsBranch: 'main',
    repo: 'https://github.com/142vip/JavaScriptCollection.git',

    // 博客配置
    // blog: {
    //     name: '测试',
    //     avatar: '',
    //     description: '',
    //     intro: '',
    //     roundAvatar: true,
    //     timeline: "时间轴的顶部文字",
    //     // articleInfo: "",
    //     medias: {
    //         "BiliBili": "https://space.bilibili.com/350937042?spm_id_from=333.1007.0.0"
    //     }
    // },
    // 设置页脚
    displayFooter: true,
    footer: FOOTER_HTML_INFO,
    copyright: COPYRIGHT,
    // 主题色选择器
    themeColor: true,

    // 是否显示外部链接图标
    externalLinkIcon: false,

    plugins: {
      // comment:{
      //   provider: "Artalk",
      //   server:"https://test.142vip.cn/",
      //   site:'JavaScriptCollection',
      // },
      readingTime: {
        wordPerMinute: 100,
      },
      copyright: false,
      // 开启博客功能
      blog: false,
      // 代码块
      mdEnhance: {
        // card:true,
        codetabs: true,
        tasklist: true, // 支持任务列表
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        imgLazyload: true,
        // 启用图片标记
        imgMark: true,
        // 启用图片大小
        imgSize: true,
        playground: {
          presets: ['ts', 'vue'],
        },
        // revealjs: ["highlight", "math", "search", "notes", "zoom"],
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({tag}) => {
              if (tag === 'em') {
                return {
                  tag: 'Badge',
                  attrs: {type: 'tip'},
                  content: 'Recommended',
                }
              }
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
        vuePlayground: true,
        // 文件导入，配置别名
        include: true,
        // 容器
        // container: true,
        // mermaid
        mermaid: true,
        // 自定义对齐
        align: true,
      },
      copyCode: {
        showInMobile: true,
      },
      // 不自动生成README目录
      catalog: false,
      // 参考：https://theme-hope.vuejs.press/zh/guide/markdown/components.html
      components: {
        components: [
          'Badge',
          'BiliBili',
          'CodePen',
          'PDF',
          'StackBlitz',
          'VidStack',
          'Share',
          'XiGua',
        ],
        rootComponents: {
          // 公告 参考：https://plugin-components.vuejs.press/zh/guide/notice.html
          // notice: [
          //     {
          //         path: "/",
          //         title: "在线浏览",
          //         content: "网站无法访问时，建议通过科学上网访问备用网络",
          //         actions: [
          //             {
          //                 text: "尝鲜版",
          //                 link: "https://142vip.github.io/JavaScriptCollection",
          //                 type: "default",
          //             },
          //             {
          //                 text: "稳定版",
          //                 link: "https://code.142vip.cn",
          //                 type: "primary",
          //             },
          //         ],
          //         fullscreen: false,
          //     },
          // ],
        },
      },
      searchPro: {
        // 参考：https://plugin-search-pro.vuejs.press/zh/config.html#locales
        locales: {
          '/': searchProCNLocals,
        },
      },
      // 代码高亮：https://theme-hope.vuejs.press/zh/guide/feature/code-block.html
      shiki: {
        langs: ['ts', 'js', 'json', 'vue', 'json5', 'bash', 'diff', 'c', 'c++', 'dockerfile', 'nginx', 'proto'],
        // 你想要使用的主题
        themes: {
          light: 'one-light',
          dark: 'one-dark-pro',
        },
      },
    },
  }),
}
