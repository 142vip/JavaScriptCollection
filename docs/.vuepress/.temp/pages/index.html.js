export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "https://static01.imgkr.com/temp/f0108d7c178b4ce196e43ebec14fbf23.png",
    "actionText": "一起开始→",
    "actionLink": "/category/",
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
    "footer": "Copyrights © 2019-2022 妍荣姑娘网络工作室"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": null,
    "contributors": []
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
