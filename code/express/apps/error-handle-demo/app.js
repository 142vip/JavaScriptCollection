const express = require('express')
const app = express()
const port = 4000
const appName = require('./package.json').name
app.get('/', async(req, res) => {
  console.log('请求进来了...')
  throw new Error('手动抛错了！！')
})

app.listen(port, () => {
  console.log(`${appName} listening on port ${port}`)
})
