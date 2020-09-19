<!--
 * @Description: express()函数及常用api整理
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-09-16 23:17:41
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-09-19 23:46:18
-->
> 本文已发表于个人公众号：**Rong姐姐好可爱**，若仓库访问速度受限，可以直接访问公众号文章：（未发表）


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

### express.urlencoded([options])