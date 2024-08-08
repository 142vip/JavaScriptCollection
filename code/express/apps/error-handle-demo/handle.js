const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const port = 4000
app.use(bodyParser.urlencoded({
  extended: true,
}))
app.use(bodyParser.json())
app.use(methodOverride())

/**
 * 定义一些路由逻辑
 */

app.get('/get', async (_req, _res) => {
  console.log('处理业务逻辑')
})

/**
 * 最后自定义错误处理
 *
 */
app.use((err, _req, _res, _next) => {
  console.log('捕获到的错误信息')
  console.log(err)
})

app.listen(port, () => {
  console.log('app listen on：', port)
})
