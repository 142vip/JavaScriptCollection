// eslint-disable-next-line import/order
const Koa = require('koa')

const app = new Koa()
// 监听服务端端口3000
app.listen(3000)

// 语法糖实现
const http = require('node:http')

const server = http.createServer(app.callback())
// 监听端口
server.listen(3000)

const https = require('node:https')

const httpsServer = https.createServer(app.callback())
httpsServer.listen(6000)
