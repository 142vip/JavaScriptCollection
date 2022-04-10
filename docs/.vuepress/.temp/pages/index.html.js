export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "https://cdn.142vip.cn/article-notes/img/image-20200605224832237.png",
    "heroText": "JavaScriptCollection",
    "tagline": "一本有趣的JavaScript合集",
    "actions": [
      {
        "text": "快速上手",
        "link": "/zh/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "项目简介",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "基础概览",
        "details": "与官网同步的Egg.js框架基础知识整理，有效地降低日常开发和复习巩固的查询、学习时间。"
      },
      {
        "title": "整理强化",
        "details": "官方插件的基础上，抽象、封装出适合自己功能的plus插件，能够快速集成、使用在新的项目中。"
      },
      {
        "title": "反复反复",
        "details": "通过以项目Demo示例的方式，对框架常用的功能进行Code编写和整理，提供有效且易用的代码封装。"
      }
    ],
    "footer": "Copyrights © 2019-2022 妍荣姑娘网络工作室",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "联系我",
      "slug": "联系我",
      "children": []
    },
    {
      "level": 2,
      "title": "鸣谢",
      "slug": "鸣谢",
      "children": []
    },
    {
      "level": 2,
      "title": "赞助列表",
      "slug": "赞助列表",
      "children": []
    },
    {
      "level": 2,
      "title": "公众号",
      "slug": "公众号",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1649524205000,
    "contributors": [
      {
        "name": "mmdapl",
        "email": "2237221210@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
