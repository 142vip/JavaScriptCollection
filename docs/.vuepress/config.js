/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-19 08:04:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-10 16:10:17
 */
module.exports = {
  title: "JavaScriptCollection",
  description: "一本有趣的JavaScript合集",
  base: "/",
  port: 4000,
  head: [
    ["link", { rel: "icon", href: "./favicon.ico" }]
  ],
  themeConfig: {
    logo: "./favicon.ico",
    navbar: require("./config/navbar"),  // 注意这个关键字有所改变
    sidebar: require("./config/sidebar"),
    smoothScroll: true,
    lastUpdated: true,
    lastUpdatedText:"最近更新",
    contributorsText:'鸣谢',
    notFound:['not exist'],// 自定义404页面提示语，数组
    backToHome:'返回首页', // 返回首页
    repo: "https://github.com/mmdapl/JavaScriptCollection",
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    displayAllHeaders: true,// 默认值：false 显示所有页面的标题链接
    search:true,
    searchMaxSuggestions: 10
  },
  // plugins:[
  //   [
  //     '@vuepress/plugin-search',
  //     {
  //       locales: {
  //         '/': {
  //           placeholder: 'Search',
  //         },
  //       },
  //     },
  //   ],
  // ]
};