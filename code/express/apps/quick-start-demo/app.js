const express = require('express')
const app = express()
const port = 3000

/**
 * 基础API服务，Get类型
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`quick-start app listening on port ${port}`)
})
