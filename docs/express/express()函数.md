<!--
 * @Description: express()函数及常用api整理
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-16 23:17:41
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-20 22:47:00
-->
> 本文已发表于个人公众号：**Rong姐姐好可爱**，若仓库访问速度受限，可以直接访问公众号文章：https://mp.weixin.qq.com/s/uo0xb60lZ_quxj8aPRPbKQ


## express()函数

当你使用express框架的时候，一定会见过如下的引入：
```javascript
const express=require('express')
```
跟koa框架中，引入koa到方式是一样的，例如：
```javascript
const koa=require('koa')
```

而express官方提供express()函数来创建一个express应用；按照官方文档：
>The express() function is a top-level function exported by the express module.
>
> 翻译：express()函数是express模块的顶级（最高级）函数的导出


express框架除了提供express()函数来创建一个express应用，也提供了一些内置方法：

- express.json()
- express.raw()
- express.Router()
- express.static()
- express.text()
- express.unlencoded()

一个个来讲解、整理吧~

### express.json(options)

这是express框架内置的中间件函数，以`body-parser`为基础解析输入的请求为json格式；作为输入请求的解析器，支持body参数为Unicode的编码方式

当有接口请求过来时，会将body传递的参数，解析成一个object对象，可以通过req.body的方式进行获取；当出现以下情况，解析的对象会为空；

- 没有以`body`的方式进行传参
- `content-type`不匹配
- 发生错误，没有执行解析的中间件

这里的`body`传参，可以了解下`restful`风格，其中请求类型为GET时，是不支持`body`传参的；

> 正如，`body`的参数结构是由用户控制的，对象中的所有属性和值是不可信的，在使用也就是信赖对象之前，需要先进行参数校验；

例如：在使用`req.body.foot.toString()`这段代码将出现错误；因为不通过校验，你不能确定用户在做接口请求的时候，一定会通过`body`来传递属性为`foot`的值，也有可能传递的不是`string`类型，这样的话，`toString()`方法调用也就没有意义了，所以强烈建议在使用之前进行**参数校验**


使用的时候，传递有效的参数
```javascript
const express =require('express')
// 这里的options为属性组合的对象，支持对重属性定义；
const options={
    // inflate定义是否可能调整、压缩body参数对象，如果为false，调整body参数对象将会被拒绝，默认true，默认类型：Bloolean
    inflate:true, 
    // limit：控制请求体的最大容量，如果是数字，值将会被指定为数字的字节类型（100-->100byte）,如果是字符串，将会依赖`bytes`库解析，按照kb、mb等方式解析，默认100kb，默认类型Mixed
    limit:'100kb',
    // revier:直接按照JSON.parse()解析为第二参数，默认为null，类型为Function
    reviver:null,
    // strict: 严格模式，是否允许只接受数组和对象作为参数，如果false将接受任何格式参数进行JSON.parse进行反序列化，获得对象，默认true，默认类型:Boolean
    strict:true,
    // type:请求数据的类型，可以参数content-type的设计，默认'application/json',默认类型Mixed
    type:'application/json',
    // verify: 当verify属性被应用时，将会以verify(req,res,buf,encoding)函数的方式，buf是原生request请求body参数的buffer结果，encoding是：request的编码，同样verify方法可能会执行失败，并且抛出错误异常 默认类型Funciton  默认值verify:undefined
}
// 使用json
express.json(options)

```

上面options的参数，可以充分自定义，没有特殊要求建议走默认


### express.raw(options)

同样，express.raw()也是express框架的内置中间件，也是用来解析request请求体中body传参的，不过返回结果与
express.json()不同，这个中间件解析器将会返回buffer流，当`Content-Type`请求头类型匹配时只关注`requests`请求体；
和express.json()相同，接受任何类型的编码，并且能够自动进行gzip压缩；

使用的时候，传递有效的参数
```javascript
const express =require('express')
// 这里的options为属性组合的对象，支持对重属性定义；
const options={
    // inflate定义是否可能调整、压缩body参数对象，如果为false，调整body参数对象将会被拒绝，默认true，默认类型：Bloolean
    inflate:true, 
    // limit：控制请求体的最大容量，如果是数字，值将会被指定为数字的字节类型（100-->100byte）,如果是字符串，将会依赖`bytes`库解析，按照kb、mb等方式解析，默认100kb，默认类型Mixed
    limit:'100kb',
    // strict: 严格模式，是否允许只接受数组和对象作为参数，如果false将接受任何格式参数进行JSON.parse进行反序列化，获得对象，默认true，默认类型:Boolean
    strict:true,
    // type:请求数据的类型，可以参数content-type的设计，默认'application/json',默认类型Mixed
    type:'application/json',
    // verify: 当verify属性被应用时，将会以verify(req,res,buf,encoding)函数的方式，buf是原生request请求body参数的buffer结果，encoding是：request的编码，同样verify方法可能会执行失败，并且抛出错误异常 默认类型Funciton  默认值verify:undefined
}
// 使用json
express.raw(options)

```
可以看到express.raw(options)和express.json(options)的参数比较相似，功能也大同小异，相对来说，express.json(options)会用会多一些，建议根据[api文档](https://www.expressjs.com.cn/4x/api.html)综合理解


### express.Router(options)

注意，这里`express.Router(options)`中的Router是大写的，比较特殊；可能是为了区分touer路由吧。主要是用来**创建一个新的路由对象**

```javascript
// 获取express模块的导入
const express=require('express')
const options={
    // caseSensitive: 是否大小写敏感，默认不敏感。即：路由'/Foot'与’/foot‘一致
    caseSensitive:false,
    // mergeParams；保护上级路由的路由参数req.params，如果父与子路由的路由参数冲突，子路由的params值将会优先  默认false
    mergeParams:false,
    // strict:是否支持路由严格模式，默认false。即：路由'/foot'与'/foot/'效果是一样的
    strict:false
}
// 定义路由对象
const router =express.Router(options)
```

当然，你也可以像application对象那样，在router中增加处理不同类型（get、post、delete、put等）的http请求的中间件

可以看到，`express.Router(options)`的options的属性在实际开发中用的比较少，严格区分路由，区分大小写这些无疑是增加了前后端对接和服务测试的成本，
可能你不会想到就可调用不成功，是路由大小写的问题；

### express.static(root, [options])

> 最好的方式：通过使用反向代理缓存来提供服务端静态资源的访问；


express框架内置中间件函数，基于`serve-static`模块在服务端提供静态资源；
在express.static(root,options)中，第一个单数root是静态资源根目录地址。而函数本身则提供了通过url地址来访问服务端静态资源的方式（绑定），当文件不存在或者找不到时，将会返回404状态码，**并不是调用next()函数在下一个中间件中处理** 允许对目录进行渲染；

简单实例方式：

```javascript

// 引入express 
const express=require('express')
// 创建应用入口
const app=express();
// 定义属性
const options = {
  // 决定文件或者目录是否从.(当前路径，相对地址)开始处理，默认类型：string，默认值：ignore
  dotfiles: 'ignore',
  // 是否产生实体标签（etag），默认值false，默认类型：Boolean
  etag: false,
  // 设置文件后缀，如果没有找到则搜索指定的后缀文件，默认false，默认类型Mixed
  extensions: ['htm', 'html'],
  // 
  index: false,
  maxAge: '1d',
  // 当路劲名是目录时，是否重定向到`/`目录中，默认值：true，默认类型：Boolean
  redirect: false,
  // 设置请求头
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

// 简单使用
app.use(express.static('public', options))

```

注意，`express.static(root,options)`,实质是一个中间件


### express.text([options])

express框架内置中间件，借助`body-parser`将接口请求参数解析为字符串，并且返回中间件；当请求的请求头`Content-Type`满足匹配时，把body中所有参数解析成字符串，支持gzip压缩；

### express.urlencoded([options])

这是`Express`中内置的中间件功能。它使用`urlencoded`有效负载分析传入请求，并基于`body-parser`。
返回仅分析`urlencoded`主体的中间件，并仅查看`Content-Type`标题与`type`选项匹配的请求。该解析器只接受身体的UTF-8编码，并支持自动膨胀gzip和deflate编码。

body包含解析数据的新对象request在中间件（ie req.body）之后被填充到对象上，或者{}如果没有要解析的主体，`Content-Type`则不匹配或发生错误，则会填充空对象（）。该对象将包含键-值对，其中该值可以是一个字符串或阵列（时extended是false），或任何类型的（当extended是true）。

- extended

此选项允许选择使用查询字符串库（如果为false）或qs库（如果为true）解析URL编码数据。“扩展”语法允许将丰富的对象和数组编码为URL编码格式，从而允许使用URL编码的类似JSON的体验。有关更多信息，请参阅qs资料库。

默认类型：Boolean

默认值：true

- inflate

启用或禁用处理放气（压缩）的物体; 当禁用时，放气的身体被拒绝。

默认类型：Boolean

默认值：true

- limit

控制最大请求主体大小。如果这是一个数字，那么该值指定字节数; 如果它是一个字符串，则将该值传递给字节库以供解析。

默认类型：Mixed

默认值：“100kb”

- parameterLimit

该选项控制URL编码数据中允许的最大参数数量。如果请求包含的参数多于此值，则会引发错误。

默认类型：Number

默认值：1000

- type

这用于确定中间件将解析的媒体类型。该选项可以是字符串，字符串数组或函数。如果不是函数，则type选项将直接传递到type-is库，这可以是扩展名（如urlencoded），MIME类型（如application / x-www-form-urlencoded）或带MIME类型的MIME类型通配符（如* / x-www-form-urlencoded）。如果一个函数，类型选项被称为fn（req），并且如果它返回一个真值，则请求被解析。

默认类型：Mixed

默认值： "application/x-www-form-urlencoded" 

- verify

如果提供此选项，则称为verify（req，res，buf，encoding），其中buf是原始请求主体的缓冲区，编码是请求的编码。解析可以通过抛出错误来中止。

类型类型：Function

默认值：undefined

至此，express框架中，通过引入`express`模块，使用express()函数和中间件方法，可以局部或者全局处理路由请求，在开发中针对不同的需求合理的选择中间件，并配置好`options`对象参数；

### 参考资料

- [express官网](https://www.expressjs.com.cn/4x/api.html#express.static)
- [腾讯云资料](https://cloud.tencent.com/developer/section/1489347#stage-100050793)
- [express中文资料](https://cloud.tencent.com/developer/section/1489347#stage-100050793)