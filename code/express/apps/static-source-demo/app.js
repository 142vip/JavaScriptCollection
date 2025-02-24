const express = require('express')

const app = express()

const path = require('node:path')
// 服务启动端口
const port = 3000

// 指定接口的根路径映射到资源的根目录
app.use(express.static('public'))

// 设置不同的路径映射
app.use('/static', express.static('public'))

// 使用绝对路径
app.use('/static-back', express.static(path.join(__dirname, 'public')))

/**
 * 服务启动，监听端口
 */
app.listen(port, () => {
  console.log(`quick-start app listening on port ${port}`)
})
