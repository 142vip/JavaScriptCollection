const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const http = require('http')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const app = express()
const server = http.createServer(app)

// 配置渲染引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

/**
 * 访问不存在的路由，直接抛出 404 错误
 */
app.use(function(req, res, next) {
  next(createError(404))
})

/**
 * 错误处理中间件
 */
app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // 渲染异常页面
  res.status(err.status || 500)
  res.render('error')
})


// 启动服务，监听端口：3000
server.listen(3000)
server.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port


  // 分类输出错误信息
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
})

/**
 * 监听服务启动
 */
server.on('listening', () => {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port

  console.log('listening on:', bind)
})
