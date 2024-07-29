const Koa = require('koa')

const app = new Koa()

/**
 * logger
 * 第一个中间件，记录日志
 */
app.use(async (ctx, next) => {
  const middleRes1 = await next()
  console.log('middleware1===>', middleRes1)
  const rt = ctx.response.get('X-Response-Time')
  const { method } = ctx
  // 也可以从ctx中获取url对象
  console.log(`请求信息：${method} - ${rt}`)
  return 'back middleware1 result'
})

/**
 * x-response-time
 * 第二个中间件，记录响应时间
 */

app.use(async (ctx, next) => {
  const start = Date.now()
  const middleRes2 = await next()
  console.log('middleware2===>', middleRes2)
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  return 'back middleware2 result'
})

/**
 * response
 * 最后一个中间件，处理响应
 */
app.use(async (ctx) => {
  ctx.body = 'Hello World'
  console.log('middleware3===>')

  return 'back middleware3 result'
})
app.listen(3000)
