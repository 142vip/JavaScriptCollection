## 更了不起的Node.js

这一章节我看完，主要是对于架构和技术演进的说明，对了解技术方向、扩展技术思路还是很有帮助的，建议直接看书或者pdf文档，这里只简单总结

### 前后端分离

- 表现层： 处理Http请求，直接返回HTML渲染，或者返回API结果。对于一个复杂的应用系统，表现层通常是代码中比较重要的部分
  
- 业务逻辑层：完成具体的业务逻辑， 是应用的核心组成部分。

- 数据访问层：访问基础数据，例如数据库、缓存和消息队列等

看到这里就已经有MVC的味道了，而在Java后端中，这样的分层更加清晰：

- Model层：先定义模型层(Model)，数据库操作一般采用ORM库来简化操作，模型会和数据库里的表进行关联映射

- DAO（Data　Access Object）：对单个模型进行操作，即：数据库的增删改查
  
- Service层就是业务逻辑层，通常组合多个DAO对象进行某项具体业务处理
  
- Controller里组装了多个Service对象，可以是想具体功能。



按照传统分类方式，表现层即前端，而业务层和数据访问层都属于后端。

**最常见的模式：前端+API+后端服务**

> 处于负载均衡、请求转发、反向代理、静态资源托管、防跨域等原因，往往需要搭配Nginx做代理使用

- 请求--->Nginx--->前端
- 请求--->Nginx--->Nodejs（前端）

其实Nodejs也可以实现反向代理这样的功能，例如vue中的proxy代理，其实依赖的就是http-proxy-middleware模块来实现的，我们自己在开发的时候，其实也可以利用该模块扩展更多的功能，不过这样就显得有些麻烦

- 修改本地DNS解析配置
- 搭建Nginx服务，配置代理
- 使用脚手架提供好的proxy代理服务


### 贯穿开发全过程

> Node.js天生就是为了解决后端并发编程而生的，目前在前端应用中也越来越火了。能够优化各个开发环节，明显提高开发效率。

### API网关

> Node.js擅长I/O操作，其http模块和stream模块组合使用时非常适合作为代理软件，可以通过恨少的代码来实现一个功能强大的代理

例如：

```javascript

// 相关模块

const http=require('http')
const fs=require('fs')

// 实例化对象

const app=http.createServer((req,res)=>{
    // 路由白名单
    if('/remote'===req.url){
        res.writeHead(200,{'Content-Type':'text/plain'});
        return res.end('hello remote page')
    }else{
        // 代理
        proxy(req,res)
    }
})

function proxy(req,res){
    // 基础配置
    let options={
        host:req.host,
        port:3000,
        headers:req.headers,
        path:'/remote',
        agent:false,
        method:'GET'
    }

    // 初始化代理
    let httpProxy=http.request(options,response=>{
        // 将res放到response流里面，进行代理
        response.pipe(res)
    })
    // 
    req.pipe(httpProxy)
}

// 监听端口

app.listen(3000,()=>{
    // 获取端口
    const port=app.address().port
    console.log(`server is running at http://127.0.0.1:${port}`)
})

```

http.request方法的返回值是http.ClientRequest，它继承自OutgoingMessage,所以：http.request方法的返回值和res是一致的

> http.request==>http.ClientRequest==>OutgoingMessage==>Stream



### 关于学习

> 这里其实书上有，但是我觉得讲的非常有道理，就单独拎出来，学习的三个层次

- 跟人学（最快）
  
- 跟书本和博客学
  
- 自悟（最慢）

> 牛人不容易遇到，遇到了也未必有精力教你

> 书本或者博客上的只是也有限

> 如果没有深厚的基础知识作为支撑，自我领悟的难度是相当大的

**编程是没有捷径的，代码是一切的基础，能够做到每日精进自然是极好的**


#### 如果你能够在开源博客、论坛上坚持写博客和开源项目两年，一定能轻松进入BAT，不用你找他们，他们自然会找你