const minify = require('html-minifier')
const Koa = require('koa')
const app = new Koa()
app.use(async(ctx, next) => {
  await next()

  if (!ctx.response.is('html')) return

  let body = ctx.body
  if (!body || body.pipe) return

  if (Buffer.isBuffer(body)) body = body.toString()
  ctx.body = minify(body)
})

app.listen(7000)
console.log('listening on port 7000')
