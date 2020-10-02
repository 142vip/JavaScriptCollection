<!--
 * @Description: 
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-19 23:51:48
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-21 22:56:12
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

谈到这个属性，我就不得不用我的四六级英语翻译这么一段话了；

 > A sub-app is an instance of express that may be used for handling the request to a route.

 翻译：sub-app是express的一个实例，可以用来处理路由请求

 了解sub-app的定义后，就来介绍下app.mountpath了，app.mountpath包含一个或者多个可以被装载的sub-app；

 ```javascript

 // express moudle
const express = require('express')

// main app
const app = express() // the main app

// sub app
const admin = express() // the sub app

admin.get('/', function (req, res) {
  console.log(admin.mountpath) // admin
  res.send('Admin Homepage')
})


// 装载sub app
app.use('/admin', admin) 
 ```

 从上面的代码可以发现：这和req对象中的baseUrl属性相似；除了req.baseUrl返回的是匹配的path路径，而不是匹配到的pattern模式；


 ```javascript
 const admin = express()

admin.get('/', function (req, res) {
  console.dir(admin.mountpath) // [ '/adm*n', '/manager' ]
  res.send('Admin Homepage')
})

const secret = express()
secret.get('/', function (req, res) {
  console.log(secret.mountpath) // /secr*t
  res.send('Admin Secret')
})

admin.use('/secr*t', secret) // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin) // load the 'admin' router on '/adm*n' and '/manager', on the parent app
 ```
 从上面可以看到，app.mountpath打印的值其实就是app.use(array,object)中的array数组；

### 事件(events)

#### app.on('mount', callback(parent))

这个`mount`事件在`sub-app`上被激活（触发），当它装载在到父级应用对象时，父级应用对象通过回调函数进行传递；

- 当application settings存在默认值时，sub-app将不会继承默认值，可以在sub-app中进行设置；
- 当application settings不存在默认值时，sub-app会继承默认值；

例如：

```javascript
// 定义application对象
const  admin = express()

// mount事件监听，从回调中获取parent
admin.on('mount', function (parent) {
  console.log('Admin Mounted')
  console.log(parent) // refers to the parent app
})

admin.get('/', function (req, res) {
  res.send('Admin Homepage')
})

// 使用中间件
app.use('/admin', admin)
```

### 方法(methods)

#### app.all(path, callback [, callback ...])

其实谈到这个方法，就有必要和`app.METHOD(path, callback [, callback ...])`进行对比学习；因为将后者理解为前者的子集；

#### app.METHOD(path, callback [, callback ...])

#### app.delete(path, callback [, callback ...])

#### app.disable(name)

#### app.disabled(name)

#### app.enable(name)

#### app.enabled(name)

#### app.engine(ext, callback)

#### app.get(name)

#### app.get(path, callback [, callback ...])

#### app.listen([port[, host[, backlog]]][, callback])

#### app.METHOD(path, callback [, callback ...])

#### app.param([name], callback)

#### app.path()

#### app.post(path, callback [, callback ...])

#### app.put(path, callback [, callback ...])

#### app.render(view, [locals], callback)

#### app.route(path)

#### app.set(name, value)

#### app.use([path,] callback [, callback...])