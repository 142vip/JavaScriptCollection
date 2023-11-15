const express = require('express')
const app = express()

express.raw({
  // 可选参数，布尔类型
  // 是否禁用压缩的请求体数据，默认为true，false时拒绝请求数据
  inflate: undefined,
  // 可选参数，数字或字符
  // 限制请求体的大小，默认100kb
  limit: undefined,
  // 可选参数，字符或字符数组
  // 约定什么类型的数据会被该中间件处理，默认值："application/octet-stream"
  type: [],
  // 可选参数，函数包含req、res、buffer、encoding四个参数
  // 提供原始的请求正文Buffer数据、编码等信息，可以通过抛错来终止解析
  verify(req, res, buf, encoding) {
  }
})

express.json({
  // ... 除raw函数包含的参数外，还额外包含

  // 可选参数，布尔类型
  // 设置是否使用严格模式，默认为true，只接收对象和数组
  // 设置false时，接收一切可以JSON.parse()处理的数据
  strict: true,
  // 可选参数，函数类型
  // 设置的这个函数，将直接放在JSON.parse()的第二个参数中使用
  // 参考JSON.parse()的API：
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Example.3A_Using_the_reviver_parameter
  reviver(key, value) {
  }
})

express.text({
  // ... 除raw函数包含的参数外，还额外包含

  // 可选参数，字符串
  // 如果请求的header中没有指定Content-Type类型，指定文本内容的编码类型， 默认utf-8
  defaultCharset: undefined
})

express.urlencoded({
  // ... 除raw函数包含的参数外，还额外包含

  // 可选参数，布尔类型
  // 运行定制模块类解析URL地址中的参数
  // false时，使用querystring模块解析
  // true时，使用qs模块解析
  extended: undefined,
  // 可选参数，数字类型
  // 允许URL地址中传递的参数最大字段个数，默认为1000
  // 当参数个数超出时，返回客户端 413 状态码，表示请求体过大
  parameterLimit: undefined
})


