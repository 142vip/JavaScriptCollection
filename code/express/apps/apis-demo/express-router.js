const express = require('express')

const router = express.Router()

// 当前路由配置中间件
router.use(async (req, res, next) => {
  console.log('打印req对象', req)
  console.log('打印res对象', res)
  // 只有执行next()函数，请求才会继续向下走处理逻辑
  await next()
})

// 设置该路由管理的路径
router.get('/get-request', async (req, res, _next) => {
  console.log('完成接口的一些业务逻辑')

  res.json({
    code: 200,
    message: '响应成功',
  })
})
