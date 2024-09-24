import { hopeTheme } from 'vuepress-theme-hope'
import { markdownImagePlugin } from '@vuepress/plugin-markdown-image'
import { AUTHOR_INFO, COPYRIGHT, FOOTER_HTML_INFO, RepoAddress } from './constant'
import { i18n, searchProCNLocals } from './i18n'
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
    darkmode: 'toggle',
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
      end: ['Links', 'Language', 'Search', 'Outlook', 'Repo'],
    },
    sidebar,
    pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
    // 主题布局选项
    docsRepo: RepoAddress,
    docsDir: 'docs',
    docsBranch: 'next',
    repo: '142vip/JavaScriptCollection',
    repoLabel: 'GitHub',
    // 是否在导航栏内显示仓库链接，默认为 `true`
    repoDisplay: true,
    // 设置页脚
    displayFooter: true,
    footer: FOOTER_HTML_INFO,
    copyright: COPYRIGHT,
    // 主题色选择器
    themeColor: true,
    // 是否显示外部链接图标
    externalLinkIcon: false,
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
    plugins: {
      // comment:{
      //   provider: "Artalk",
      //   server:"https://test.142vip.cn/",
      //   site:'JavaScriptCollection',
      // },
      // 公告 参考：https://theme-hope.vuejs.press/zh/guide/feature/notice.html
      // notice: [
      //   {
      //     path: '/',
      //     title: '在线浏览',
      //     content: '网站无法访问时，建议通过科学上网访问备用网络',
      //     actions: [
      //       {
      //         text: '尝鲜版',
      //         link: 'https://142vip.github.io/JavaScriptCollection',
      //         type: 'default',
      //       },
      //       {
      //         text: '稳定版',
      //         link: 'https://code.142vip.cn',
      //         type: 'primary',
      //       },
      //     ],
      //     fullscreen: false,
      //   },
      // ],
      readingTime: {
        wordPerMinute: 100,
      },
      // 水印
      // watermark: {
      //   enabled: true,
      //   watermarkOptions: {
      //     content: '微信公众号：储凡',
      //   },
      // },
      copyright: false,
      // 开启博客功能
      blog: false,
      // 图片增强，参考：https://ecosystem.vuejs.press/zh/plugins/markdown/markdown-image.html
      markdownImage: markdownImagePlugin({
        // 启用 figure
        figure: true,
        // 启用图片懒加载
        lazyload: true,
        // 启用图片标记
        mark: true,
        // 启用图片大小
        size: true,
      }),
      // 代码块
      mdEnhance: {
        // card:true,
        codetabs: true,
        // 支持任务列表
        tasklist: true,
        playground: {
          presets: ['ts', 'vue'],
        },
        // revealjs: ["highlight", "math", "search", "notes", "zoom"],
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({ tag }) => {
              if (tag === 'em') {
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
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
      },
      searchPro: {
        // 参考：https://plugin-search-pro.vuejs.press/zh/config.html#locales
        locales: {
          '/': searchProCNLocals,
        },
      },
      // 代码高亮：https://theme-hope.vuejs.press/zh/guide/feature/code-block.html
      shiki: {
        langs: ['ts', 'js', 'json', 'vue', 'json5', 'bash', 'diff', 'c', 'c++', 'dockerfile', 'nginx', 'proto', 'java', 'javascript', 'typescript'],
        // 你想要使用的主题
        themes: {
          light: 'one-light',
          dark: 'one-dark-pro',
        },
      },
      // shiki: shikiPlugin({
      //   // 配置项
      //   langs: [
      //     'java',
      //     'javascript',
      //     'typescript',
      //     'html',
      //     'css',
      //     'json',
      //     'yaml',
      //     'markdown',
      //     'xml',
      //     'bat',
      //     'shell',
      //     'powershell',
      //     'sql',
      //     'properties',
      //     'md',
      //     'vue',
      //     'tsx',
      //     'jsx',
      //     'scss',
      //     'less',
      //     'sass',
      //     'vue-html',
      //     'nginx',
      //     'tex',
      //   ],
      //   themes: {
      //     // light: 'one-light',
      //     // dark: 'one-dark-pro',
      //     dark: 'dark-plus',
      //     light: 'light-plus',
      //   },
      // }),
    },
  }),
}
