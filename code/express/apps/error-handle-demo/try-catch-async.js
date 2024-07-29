const fs = require('node:fs');

(() => {
  try {
    fs.readFile('/not-exist-file', (err, data) => {
      console.log(1111)
      if (err) {
        console.log('出现错误啦..')
        throw new Error('出现错误啦。。。')
      }
      console.log('data:', data)
      console.log(222)
    })
  }
  catch (e) {
    console.log(3333)
    console.log('捕获到的错误:', e)
  }
})()
