const Koa = require('koa')

const app = new Koa()
app.use(async (ctx, next) => {
  // Context对象
  console.log(ctx)
  // Koa的Request对象
  console.log(ctx.request)
  // Koa的Response对象
  console.log(ctx.response)

  await next()
})

app.use((ctx) => {
  // ctx.app是对app的引用
  console.log(ctx.app === app)
  ctx.cookies.set()
  ctx.throw(400)
  ctx.throw(400, '参数错误')
  ctx.throw(400, '参数错误', { message: '缺少必要参数' })

  ctx.assert()
})

app.use(async (ctx, _next) => {
  ctx.body = 'hello world'
  ctx.status = 200
  ctx.res.statusCode = 500
})

app.listen(8000)
console.log('listening on port 8000')
