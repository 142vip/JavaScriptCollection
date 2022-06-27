/*
 * @Description:
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2022-04-10 00:50:30
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-10 16:37:52
 */

module.exports = [
  {
    text: "Foo",
    link: "/foo/",
    children: [
      // SidebarItem
      {
        text: "github",
        link: "https://github.com",
        children: [],
      },
      // 字符串 - 页面文件路径
      "/foo/bar.md",
    ],
  },
  // 字符串 - 页面文件路径
  "/bar/README.md",
];
