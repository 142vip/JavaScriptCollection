const Koa = require('koa')
const app = new Koa()
// 监听服务端端口3000
app.listen(3000)


// 语法糖实现
const http = require('http')
const server = http.createServer(app.callback())
// 监听端口
server.listen(3000)

const https = require('https')
const httpsServer = https.createServer(app.callback())
httpsServer.listen(6000)
