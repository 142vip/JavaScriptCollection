/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-01-19 08:04:19
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-10 01:03:59
 */
module.exports = {
  title: "JavaScriptCollection",
  description: "A lightweight creator for VuePress project.",
  base: "/",
  port: 4000,
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }]
  ],
  // markdown: {
  //   lineNumbers: false,
  // },
  themeConfig: {
    // logo: '/assets/img/logo.png',
    navbar: require("./config/navbar"),  // 注意这个关键字有所改变
    sidebar: require("./config/sidebar"),
    // sidebar: 'auto',
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
    displayAllHeaders: false,// 默认值：false 显示所有页面的标题链接

  },
};