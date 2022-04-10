/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2022-04-10 00:50:30
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2022-04-10 15:11:50
 */


module.exports=[
  {
    title: 'Group 1',   // 必要的
    path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: false, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
      '/'
    ]
  },
  {
    title: 'Group 2',
    children: [ /* ... */ ],
    initialOpenGroupIndex: -1 // 可选的, 默认值是 0
  }
]