const Koa = require('koa')

// 利用构造函数修改属性
const app1 = new Koa({ proxy: true })
console.log(app1)


// 定义创建完动态修改属性
const app2 = new Koa()
app2.proxy = true
console.log(app2)
