const Koa = require('koa')
const app = new Koa()

app.use(async(ctx, next) => {
  ctx.request.header = {
    reference: 'https://code.142vip.cn'
  }
  await next()
})

app.listen(6000)
console.log('listening on port 6000')
