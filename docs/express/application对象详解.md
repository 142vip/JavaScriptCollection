<!--
 * @Description: 
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-19 23:51:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-20 23:14:27
-->


## application对象详解

当你学习express框架时，一定要学会先易后难、纵观大局；从了解express基础概念到对象属性，从中间件方法到代码封装，都是一步一个脚印，慢慢的吸收、获取知识，切忌求快、盲目，要知道`有时候，慢下来才能走的更快`

我们先来看这段代码：
```javascript
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

// 监听端口
app.listen(3000)
```
这是一段在express项目中再常见不过的代码了，一般会放在`app.js`中，上面的app对象通常指的express框架的application对象，通过调用express框架中express()高层函数来创建它，并且进行模块导出；这里的app对象提供以下方面的内置方法：

- 定义http请求路由
- 配置中间件
- 转发到html页面视图中
- 注册模板引擎

当然也可以通过设置属性来影响application应用的效果；

这篇文档将详细介绍application对象，默认你已经了解过express()函数和内置中间件；将会从application对象的属性、事件、方法三个方面来详细整理、讲解application对象；不多说，开始下面的学习：

### 属性(properties)

> app对象有locals和mountpath两个属性；

#### app.locals

在application中的本地变量将会成为app.locals的属性

```javascript
// title属性
console.dir(app.locals.title)
// => 'My App'

// email 属性
console.dir(app.locals.email)
// => 'me@myapp.com'
```
特别注意的是：一旦设置属性，`app.locals`属性的值在application生命周期内将不会发生改变，即：不能改变；和`res.locals`的属性不同的是，`res.locals`的属性只在请求的生命周期内有效

你可以在应用程序被渲染的模板页面中使用本地变量，这对于模板中提供一些`helper`方法代码封装是非常实用的；和应用层的数据一样， **`app.locals`的属性可以通过中间件在`req.app.locals`中获取**

```javascript
// 定义title属性
app.locals.title = 'My App'
app.locals.strftime = require('strftime')
app.locals.email = 'me@myapp.com'

// 在中间件中可以通过req.app.locals获取

app.use((req,res,next)=>{
    // req中获取
    console.log(req.app.locals.title)
    // res响应，或者通过next()方法，到下一个中间件中处理；
})
```


#### app.mountpath

### 事件(events)

### 方法(methods)
