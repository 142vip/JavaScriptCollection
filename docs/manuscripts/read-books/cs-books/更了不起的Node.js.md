---
title: 狼书（卷1） - 更了不起的Node.js
permalink: /manuscripts/read-books/cs-books/better-nodejs.html
---

# 更了不起的Node.js

![](../images/better-nodejs.png)

《狼书（卷1）：更了不起的Node.js》以`Node.js`为主，讲解了`Node.js`的基础知识、开发调试方法、源码原理和应用场景，
旨在向读者展示如何通过最新的`Node.js`和`npm`编写出更具前端特色、更具工程化优势的代码。

`Node.js`开发简单，性能极好，一经发布便成了明星级项目。随着大前端领域的蓬勃发展，跨平台开发、`API`构建、`Web`应用开发等场景愈加常见，`Node.js`也成为大前端开发的必备“神器”。

## Node.js初识

### 核心命令

- npm run dev

> 利用Node.js编写的模块辅助开发命令，常用于本地开发，不会产生最终文件

- npm run build

> 打包，生成最终可在浏览器中运行的代码

最小功效原则：
> 选择最合适的解决方案而不是最强的，语言的功效越弱，对于存储在该语言中的数据，我们能做的事情就越多

Atwood定律：

>任何能够用Javascript实现的应用系统，最终都必将用Javascript实现

### Node.js早期架构

- Chrome V8引擎：Google发布的开源Javascript引擎，采用`C/C++`编写，在Google的Chrome浏览器中被使用，Chrome V8引擎可以独立运行，也可以嵌入到`C/C++`应用程序中被执行。
- Node.js内置了Chrome V8引擎，所以使用的Javascript语法
- **Javascript语言的一大特点就是单线程**，即同一时间只能做一件事。单线程就意味着所有的任务都需要排队，前一个任务结束才会执行后一个任务。如果前一个任务耗时很久，后一个任务就不得不一直等待；
- 一般情况下，排队的时候CPU总是闲着。其实CPU完全可以不管I/O设备而直接挂起处于等待中的任务，先运行排在后面的任务。
- 将等待中的I/O任务放在事件循环中，**事件由libuv提供**
- 事件循环负责将文件I/O任务放入到线程池中，线程池由libuv提供。网络I/O任务不通过线程池完成；
- **只要有CPU资源，就应该尽力执行**，榨干硬件性能；

### Node.js特点
>
>Node.js是可扩展的适合用于构建高性能Web应用的最简单的解决方案（**适合构建Web应用、高性能、简单、可拓展**）

##### 适合构建Web应用

- 构建网站：用Node.js做入门开发和传统的Java、PHP开发并没有什么区别。构建成功的应用是典型的单体式应用。
- 构建API：后端API接口开发用于数据库访问，将返回的数据进行包裹，以HTTP形式返回；API Proxy针对前端使用的API进行优化，使前端开发更人性化。

```js
// 常见接口返回格式：

{
    status:{
        code:100,
        message:'success'
    },
    response:{
        ...result...
    }
}

// 个人常用

{
    code:200,
    message:'操作成功',
    result:...result... // 常见false true [] {} 等结构
}

```

- 构建RPC服务：Node.js是非常适合用于网络应用开发，其中Socket编程就是一种典型的网络应用开发场景，也就是说："Node.js一样适合用于Socket编程，使用Node.js开发RPC服务是非常合适的"

> RPC: Remote Procedure Call 远程过程调用，协议服务，常见的作法是将数据库访问返回的数据，以TCP形式传输给调用方；eg：Dubbo、gRPC

- 前后端分离场景

1. 前端页面静态化（Page Static）
2. 前端页面服务化（PAAS，Page As Service）
3. 服务端渲染（SSR，Server Side Render）
4. 渐进式Web应用（PWA，Progressive Web App）

- 适用于Serverless--------->istio

#### 高性能

- 执行速度快：构建在ChromeV8引擎之上，执行速度可能是动态语言运行时环境里最快的

- 天生异步：事件驱动和非阻塞I/O特性决定了Node.js必须采用异步机制，每个I/O任务都是异步的

- 适用于I/O密集的网络应用开发，不是很适合CPU密集型应用，合理的采用技术栈，利用Node.js的优势，不仅能够加快开发迭代的速度，对系统的稳定性也是非常有帮助的；

#### 简单

- 语法简单：Javascript简单易学，深入比较难

- 并发编程简单：完美应对实时及I/O密集型应用等高并发场景

- 部署运维简单：很简单的利用docker或者pm2甚至node指令即可部署

- 开发简单：遵寻“小而美”的设计哲学

#### 可拓展

- npm上有大量模块可以使用
- 通过编写C/C++实现CPU密集型任务开发
- 可以轻松搭配Java、Rust等语言使用
- 架构互补：以业务边界来进行服务拆分，可以让合适的轮子出现在合适的位置上

### 应用场景

- 网站： Express 、 Koa

- API: Restify 、 Hapi

- Api代理：Express、Koa

- IM即时聊天：Socket.io、SockJS

- 反向代理：AnyProxy、node-http-proxy、hiproxy

- 前端构建工具：Grunt、Gulp、Bower、Webpack、FIS3、Ykit

- 命令行工具：Cordova、Shell.js

- 操作系统：NodeOS（能实现，估计不会有人用了，鸡肋）

- 跨平台打包工具：Electron、NW.js

- P2P:WebTorrent、IPFS

- 编辑器：Electron

- 物联网硬件：Ruff、Rokid、Node-RED

## Nodejs安装与入门

3m安装Node.js

- nvm（node version manager）：用于开发阶段，解决多版本共存、切换、测试等问题；

- npm（node package manager）：解决Node.js模块安装问题，自身也是个Node.js模块，每次安装都会内置某个版本的npm；

- nrm（node registry manager）：解决npm镜像访问慢的问题，提供测速、切换下载源仓库（registry）功能；

### npm

```bash
## node版本
node -v

## npm版本
npm -v

## 安装指定版本npm
sudo npm install -g npm@2.9

## 安装在node_module下，不保存在package.json中
npm install  

## 安装在node_module目录下，同时保存到package.json的dependencies，在安装模块时必须安装
npm install --save-prod 或 npm install -P

## 安装在node_module下，保存在package的devDependencies中，供开发时使用
npm install --save-dev 或 npm install -D

## 安装的模块为全局模块，如果时命令行模块，会直接链接到环境变量中
npm install --global 或 npm install -g 
```

### nrm

```bash
## 安装
sudo npm install -global nrm 或者 npm install -g nrm

## 测速
nrm test

## 查看源
nrm ls

## 切换源(cnpm 淘宝源)
nrm use cnpm

## 查看nrm的帮助信息
nrm -h

```

### Hello Node.js

Node.js是基于CommonJS规范的实现，即每个文件都是一个模块，每个模块内代码的写法都必须遵守CommonJS规范，**多文件调用的核心基于模块对外暴露接口和相互引用；**

- 使用module.exports定义模块
- 通过require关键字引用模块

**编程的三等境界：**

1. 测试驱动开发，在写代码之前先写测试
2. 断点调试，直观的跟踪代码执行逻辑、调用栈、变量等。
3. 打日志；

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

```js

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

**如果你能够在开源博客、论坛上坚持写博客和开源项目两年，一定能轻松进入BAT，不用你找他们，他们自然会找你**

## 更好的Node.js

### 选择

#### 面向过程

>Express框架就是典型的面向过程的代码，整个框架大体上感觉只需要用心、专注了解中间件，就可以无障碍的开发和编写了；

```js
// express模块
const express =require('express')
// 实例化对象
const app=express();

// 简单路由接口

app.get('/index',(req,res)=>{
    // 返回数据
    res.send('hello express!!!')
})

// 启动服务，监听端口

app.listen(3000,()=>{
    console.log('express server is running on port 3000')
})

```

如上，一个简单的web服务就跑起来了，当我在实习第一次接触到Node.js的时候，就被这种快速的方式所吸引，记得还感慨过Spring的那一套

#### 面向对象

> 在早期的node.js语法中，更多的时候面向过程，随着对Node.js学习和使用的深入，就会了解到ES6语法也借鉴了Java这种面向对象语言的特性，添加class和extends这些关键字，来实现类的封装和继承，这样就可以很简单的写面向对象的程序（当然也是有局限的）

```js
// 定义学生类Student
class Student{
    // 构造函数
    constructor(name){
        this.name=name
    }

    // 定义函数
    speak(){
        console.log('my name is ',this.name)
    }
}

// 实例化

const student=new Student('Tom')

// 调用类方法
student.speak()


// 类的继承
class Boy extends Student{
    speak(){
        console.log(this.name,'is good~')
    }
}

// 实例化
const boy=new Boy('Tim')
```

对于了解Java那一套的开发者，看到这里的类、继承、static方法的时候，其实会感觉比较简单，对于控制反转、切面编程那些Javascript目前还不能实现，不过有TypeScript实现了类似的功能，值得学习；

#### 函数式编程

> Javascript式典型的多范式编程语言，而函数式编程的概念是从React框架流行起来的。

```js
// 类似箭头函数 可读性不强
const map=fn=>array=>array.map(fn)

// 等价于
const map=fn=>{
    return array=>{
        return array.map(fn)
    }
}
```

- 第一等公民式函数
- 函数柯里化（curry）:传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
- 为了解决函数嵌套问题，代码中使用了“函数组合”

### 开发大型软件

- 具备开发大型软件应用的基础
- 所有云计算公司都爱使用Node.js
- 名企（阿里、百度、Uber等）都在大量应用Node.js
- 生态完善，性能调优有node-clinic和ali-node助力

### 特定场景下的快速开发

- 在写法上，可易可难，满足各类人群，是有助于团队成长的选择
- 可以开发大型软件，开源生态已相当成熟
- 可快可慢，可以满足特定场景下快速开发的需求

### 单线程

> Javascript是单线程的，但是Node.js由于事件循环和libuv的助理，能够以单线程来实现多线程的处理，因此Node.js本身是单线程的；

常见单线程实例：

```js
const fs=require('fs');
const Koa=require('koa')

// 实例化koa对象

const app=new Koa()


// 中间件拦截

app.user(ctx=>{
    ctx.body='hello world'
})

// 监听端口
app.listen(3000)
```

在koa框架里面，我们可以很熟悉的使用`node app.js`来启动，然而按照这样的代码启动只能初始化一个Node.js进程，往往单进程很容易崩溃，当流量大了、服务过载单线程启动就存在问题，因此可以使用`uncaughtException`捕获异常

```js
const fs=require('fs');
const Koa=require('koa')

// 实例化koa对象

const app=new Koa()


// 中间件拦截

app.user(ctx=>{
    ctx.body='hello world'
})

// 代码优化 
process.on('uncaughtException',err=>{
    console.log('catch err :',err)
})

// 监听端口
app.listen(3000)
```

通过上面的process进行捕获后，就不会出现接口崩溃了

### 异常捕获

> 异常捕获是一中安全的分支处理技术，一旦应用程序出现状况来不及处理，程序会中断执行，从而产生异常。产生异常的语句以及之后的语句将不会执行。默认情况下会进行异常信息的输出，然后自动结束程序的执行。

当时对于开发人员来说，有时候在及时程序出现异常的情况下，也要让程序执正常执行。**错误和异常还是有明显区别的**

#### 特别注意

- Node.js里约定，**同步代码才能捕获异常**，异步代码不能直接使用try/catch（当然也不是绝对，例如Promise实现的异步流程就可以使用resolve、reject来捕获异常，一般放在回调函数之后）

- 频繁使用try/catch存在弊端。

- 使用try/catch成本较高，除非需要，一般不建议使用，基本全局捕获统一处理就可以了

### Yarn-npm的替代品

> Yarn是开源的Javascript包管理器，FaceBook在使用npm进行内部扩展使用时遇到大小、性能、安全等方面的问题，就打造了Yarn，尽可能的适用于多人开发

yarn的特点：

- 本地缓存文件的性能更好
- 可以并执行一些操作，加速了对新模块的安装处理
- 使用lockfile，并且能够用确定的算法创建一个跨所有机器的一致文件
- 处于安全考虑，在安装进程里不允许编写包的开发者执行其他代码

可以看到的是，Yarn和Ruby的Gem机制类似，都会生成lockfile，在提升速度上算是非常不错的改进，当然npm也有对应的提高模块下载速度的机制cnpm

```bash
## 安装cnpm源
npm install cnpm -g --registry=https://registry.npm.taobao.org
```

#### 安装Yarn

```bash
## 脚本安装
curl -o- -L https://yarnpkg.com/install.sh | bash

## npm安装
npm install yarn --global

## 初始化工程
yarn init

## 添加依赖模块
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]

## 依赖更新
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

## 移除依赖
yarn remove [package]

## 项目里安装
yarn 
## 或者
yarn install
```

看到上面的指令，使用过npm的应该会感觉很熟悉，至少我个人上手很快，但对于初学者推荐使用npm，因为npm是绕不开的核心

## Node.js是如何执行的

这一章主要讲解Nodejs的执行流程、原理，建议看书，我这里只是总结认为重要且必须掌握的内容

- process的用法
- 宏任务和微任务

### process的用法

1. 统计信息(CPU、内存等)

> 可以参考对应的[官方api文档](http://nodejs.cn/api/process.html#process_process_cpuusage_previousvalue)

```js

const startUsage = process.cpuUsage();
// { user: 38579, system: 6986 }

// 将 CPU 旋转 500 毫秒。
const now = Date.now();
while (Date.now() - now < 500);

console.log(process.cpuUsage(startUsage));
// { user: 514883, system: 11226 }

```

2.事件循环机制：process.nextTick

> process.nextTick() 方法将 callback 添加到下一个时间点的队列。 在 JavaScript 堆栈上的当前操作运行完成之后以及允许事件循环继续之前，此队列会被完全耗尽。 如果要递归地调用 process.nextTick()，则可以创建无限的循环。

在上述循环队列中，会设置到`nextTick`和`_tickCallback`两个方法

```js
// 
function lateCallback(){
    console.log('print me later')
}

process.nextTick(laterCallback)
console.log('print me first')

```

- nextTick的作用是把laterCallback放到下一个循环事件中去执行
- _tickCallback则是一个非公开的方法，是在当前循环事件结束之后调用，以进行下一个事件循环的入口函数。

**Node.js为事件循环维持了一个队列,nextTick负责入队列操作，_tickCallback负责出队列操作；**

3.uncaughtException事件

> 当Nodejs发现一个没有被捕获的异常时候，会触发这个事件。如果这个事件中存在回调函数，Node.js不会强制结束进程。

```js
process.on('uncaughtException',err=>{
    // 处理错误
    ....
})
```

4.其他用途

- 进程管理：exit、kill
- I/O相关：stdout、stderr、stdin
- 路径处理：cwd、chdir等

### 宏任务和微任务

在`libuv`事件编程模型中，应用程序只负责监视特定的事件，并在事件发生后进行响应。

当前调用栈执行完毕时，会分两种情况进行处理。首先处理microtask(微任务)队列里的事件，然后再从macrotask(宏任务)里中取出一个执行事件并执行。

**在同一次事件循环中，微任务永远在宏任务前执行**

```state

microtask(微任务)-->macrotask(宏任务)

```

#### microtask（微任务）

- process.nextTick()

- promise对象

#### macrotask（宏任务）

- setTimeout()

- setInterval()

- setImmediate()

- I/O操作

### process.nextTick(callback)

**process.nextTick(callback)是用于事件循环的下一次循环中调用回调函数的，即：控制入队列，和setTimeout(fn,0)函数的功能类似，但效率更高。**

process.nextTick(callback)将一个函数推迟到代码执行的下一个同步方法执行完毕或异步事件回调函数开始执行时再执行

> 原理： 可以基于Node.js的事件循环进行分析，每次循环就是一次tick,每次tick时，Chrome V8引擎都会从事件队列中取出所有事件依次进行处理，如果遇到nextTick()事件，则将其加入事件队尾，等待下一次tick到来时执行。这样直接导致nextTick()事件将会被延迟执行。

## 模块与核心

Node.js和CommonJS的区别(主要体现在module.exports)：

- Node.js中，module.exports是真正的特殊对象，是真正的对外暴露出口，而exports只有一个变量，是被默认的module.exports版绑定的
- CommonJS规范里灭有module.exports对象。

exports是一个特殊的对象，它的任何输出都将作为一个对外暴露的公共API

```js
// 导出演示

const PI=Math.PI

exports.PI=PI


// 引入演示

const PI=require('XXX')

```

特别注意的是：当module.exports和exports对象同时存在时，以module.exports为准

```js
exports=()=>{
    return {
        a:123
    }
}

module.exports=()=>{
    return {
        a:123
    }
}

// 此时，只有module.exports有效

```

总结来说，在CommonJs规范里面没有module.exports对象，一般用exports对象和required来处理模块的导出和引入

在Node.js中exports、module.exports、require是都存在的，exports对象和module.exports对象都能实现模块导出，但是module.exports优先级更高；模块的导入都用require进行处理；

### 核心技术

Node.js对模块的定义非常简单，主要分为模块应用、模块定义和模块标识三个部分。

##### require

> 用来引用模块

##### export
>
> 用来导出模块，包括标识符(identifier)和模块内容(contents)

- module.exports 对外导出的对象只能有一个
- exports.XXX  对外导出的值可以有多个，并且两者同时存在时，exports无效，module.exports的优先级更高；

#### 模块定义

> 可以将关联代码封装到一个代码单元中，创建一个模块可以理解为全部有关联的函数放在一个文件中

```js
const sayHelloEnglish=function(){
    return 'hello'
}

module.exports={
    sayHelloEnglish
}
```

#### 模块导出

```state
exports-->module.exports

module.exports-->exports
```

**核心是module.exports，exports对象只是module.exports的一个引用**

```js

// 变量引用
const exports=module.exports={}

```

```js
exports.sayHelloInChinese=()=>{
    return '你好'
}


exports.sayHelloInEnglish=()=>{
    return 'Hello'
}
```

```js  
module.exports={
    sayHelloInEnglish:()=>{
        return 'Hello';
    },
    sayHelloInChinese:()=>{
        return '你好'
    }
}

```

从上面可以看到:

- exports可以用飙血多个对外暴露的API工具类代码
- module.exports用于比那些对外暴露同一个对象API的代码

**核心是module.exports，exports对象只是module.exports的一个引用**

#### 模块引用

直接用require进行引用，对结果进行赋值，对于module.exports导出的结果对象，引用的时候可以解构赋值给新对象

module.exports不一定非要返回实例化对象

```js

module.exports=1
module.exports=NaN
// 导出字符串
module.exports='foo'
// 导出对象
module.exports={foo:'bar'}
// 导出数组
module.exports=['foot','bar']
// 导出函数方法
module.exports=()=>{
    
}
...

```

这里总结一下：

- 如果希望模块是一个特定的类型，可以用module.exports
- 如果希望模块是典型的实例化类型，可以用exports

给module.exports添加属性类似给exports添加属性，exports可以看作是module.exports的一个引用；

```js
module.exports.name=()=>{
    console.log('My name is Lemmy Kilmister ')
}

exports.name=()=>{
    console.log('My name is Lemmy Kilmister ')
}
```

**上面的结果并不相同**，module.exports是真正的接口，exports只是module.exports的辅助辅助工具；

在默认情况下，module.exports的返回值是空对象，如果只是添加方法和属性，只要操作具体的exports即可；只有当你不希望返回值是对象就可以用module.exports对他的属性进行处理；

**exports是形参数，只能在作用域内改变，出了作用域就会被还原，所以想要覆盖对外导出返回值时需要使用module.exports**

推荐最佳写法

```js
exports=module.exports=opts=>{
    // 除了工具类用exports.xxxx 其他都建议用module.exports
    ....
}

```

#### 理解模块的引用

Node.js模块分为：

- 核心模块
- 文件模块

引入模块，使用require()方法，它可以接受的参数有：

- 像http、fs、path等Node.js的内置模块
- ./mod或者../file.js：类似采用相对路径的文件模块
- /path/file.js: 类似采用绝对路劲引入的模块
- mod ：非原生模块的文件模块

#### 加载方式

- 直接使用名字加载
- 查找node_module目录来加载
- 使用全局安装的模块来加载

### 全局对象

模块的两种写法：

- 基于CommonJS规范来实现，也就是常说的module.exports
- 全局对象写法，不需要引入，直接通过全局对象进行使用；

#### 内置对象

在Nodejs中有一批内置对象，无需安装即可使用的模块，不需要依赖global关键字

##### 为模块包装提供的全局对象

- exports： CommonJS关键字
- require： CommonJS关键字
- module： CommonJS关键字
- _filename： 当前文件名称
- _dirname：当前文件目录

##### 内置process对象

> process为核心模块，可以在当前Nodejs的各种信息进行绑定,Java8中也有类似的思想

##### 控制台Console模块

> 比如：console.log(),console.info()... 跟JavaScript里面不一样的是，Nodejs里面的可以在终端中输出，而Javascript中的会在浏览器的控制台进行输出

##### Event Loop相关Api的实现

- setImmediate(callback[,...args])
- setInterval(callback,delay[,...args])

- setTimeout(callback,delay[,...args])
- clearImmediate(immediateObject)
- clearInterval(intervalObject)
- clearTimeout(timeoutObject)

Event Loop用全局对象来实现是非常方便的;

##### Buffer对象

- new Buffer()
- Buffer.from() ： 推荐使用
- Buffer.alloc() ：推荐使用
- Buffer.allocUnsafe()： 存在内存泄漏
- Buffer.allocUnsafeSlow()： 存在内存泄漏

Nodejs中的全局对象和Javascript里的普通对象是一样的，主要是用来拓展变量和方法的；

扩展变量：

```js

// 扩展debug变量，并进行加载
global.debug=true;

// 使用扩展的debug变量
if(debug===true){
    .....
    
}

```

扩展方法：

```js
// log方法扩展
global.log=console.log

// 等价使用console.log('something')
log('something')
```

#### ES模块

> ES模块的新特性往往引人入胜，ES模块的目标是创建一个同时兼容CommonJS和AMD的格式，使语法更加的紧凑，通过编译时加载，在编译时就能够确定模块的依赖关系，比CommonJS模块的加载效率更高。而在异步加载和配置模块加载方面，从执行效率、灵活度来看都优于CommonJS语法

ES模块的优势：

- 语法紧凑

- 解构更加适用于静态编译（例如：静态类型检查、优化）
- 对循环引用的支持更好
- 用法简单，不需要关注实现细节
- 采用声明式语法：模块中导入用import关键字，导出用export关键字，没有require关键字。
- 程式化加载API：可以设置模块如何加载，并按需加载

##### 模块导入

```ts
// 直接导入，并取名fs 与CommonJS中的const fs=require('fs')类似
import * as fs from 'fs'

// 按需导入
import {readFile} from 'fs'

```

**此时按需导入只加载readFile方法，不加载其他，这种加载叫做编译时加载或者静态加载能够让ES6在编译时完成模块加载，效率更高**

##### 模块导出

```js

// 对所有内容进行导出
export * from 'XXXXX'

// 按照需要进行导出
export {foot as foot_copy,bar} from 'XXXX'

```

注意as的使用，有时候为了代码方便，别名是非常有必要的

###### 具名导出
>
> 导出对象的指定别名的过程叫做具名导出

```js
export {MY_CONST as FOO,myFunc};

export {foot as test}

```

###### 内联具名导出

> 变量的声明有多种，在内联具名导出时不会受到限制

```js

// 导出var定义的foo变量
export var foo;
// 导出const定义的woo变量
export const woo;
// 导出let定义的test变量
export let test;

```

函数也可以类似变量进行导出

```js
export function myFunc(){
    // 处理逻辑
    ....
}

export function* myGenFunc(){
    // 处理逻辑
    ....
}

// function* 这种声明方式(function关键字后跟一个星号）会定义一个
// 生成器函数 (generator function)，它返回一个  Generator  对象。

```

```js

export class MyClass{
    // 类实现
    ...
}

```

###### 默认导出

> 即用default关键字，在引用时默认返回导出对象
>
> 值得注意的是：

```js

export default function myFunc(){
    // 
    ...
}

export default function(){
    //
    ...
}

// 默认导出生成器函数，返回generator函数
export default function* myGenFunc(){
    
    ...
}

export default function* (){
    // 
    ...
}

// 默认导出MyClass类
export default class MyClass{
    // 类实现
    ...
}

// 默认导出匿名类
export default class{
    //
    ...
}


// 当然，其他的也是可以的

export default foo;
export default 'Hello World';
export default 3*7;
// 匿名函数
export default (function(){});

```

### export default和export的区别

- **export default 向外暴露的成员，可以使用任意的变量来接收**
- **在一个模块中，export default 只允许向外暴露1次**
- 在一个模块中，可以同时使用 export default 和 export 向外暴露成员
- 使用 export 向外暴露的成员，只能使用 { } 的形式来接收;
- export 可以向外暴露多个成员， 同时，如果某些成员，我们在 import 的时候，不需要，则可以 不在 {} 中定义
- 使用 export 导出的成员，必须严格按照导出时候的名称，来使用 {} 按需接收；
- 使用 export 导出的成员，如果就想换个名称来接收，可以使用 as 来起别名；

## 异步写法与流程控制

**流程控制是程序中的逻辑控制的统称，** Node.js中每个函数都是异步的，性能虽然会更好，但容易造成**callback hell（回调地狱）**，因此为了解决API级别的回调地狱问题，就需要使用的到流程控制的部分——异步流程控制

**可以这样说，掌握了Nodejs里的异步流程控制，就基本掌握了Nodejs一半以上的内容**

### 异步与同步

> 异步执行效率更高，但结果却不一定是我们想要的，异步执行的结果具有一定的不确定性

- 异步

> 在操作中，不需要等待服务器的回复，该忙什么忙什么，不耽误事件，合理利用时间高效做事，即：充分利用服务器执行并行操作；

- 同步

> 操作必须要等待回复后才能去做其他的事情，有种至死方休的感觉。每一步都需要等待上一步完成才能进行；

例如JQuery中的ajax异步请求

```js
//  存在于浏览器中的异步
$.ajax({
    url:'XXXXX',
    type:'get',
    data:{
        
    },
    success:ret=>{
        // 回调函数的方式，返回结果
        console.log(ret)
    }
})
```

**Ajax的核心是XHR，即：XMLHttpRequest；Nodejs的核心是EventLoop，即：事件循环**，异步请求不需要取刷新页面就可以获取数据；

EventLoop是维护一个回调函数的**队列**，当回调函数执行时，回调函数就会被放入到这个队列中。Javascript引擎直到异步函数执行完成后，才会开始处理EventLoop，也就是说Javascript代码不是多线程的，虽然表现出来的效果是跟多线程很相似的。**EventLoop维护的是先进先出（First in First out）的队列，说明回调函数在队列中是顺序执行的**；

EventLoop依赖libuv库，而libuv库采用的是异步和事件驱动的风格，主要功能是为开发人员提供一套基于I/O通知的回调函数；

### API介绍

API:Application Programming Interface简称，异步的核心在于Nodejs SDK的API调用，然后交由EventLoop（libuv）去执行。**因此Nodejs的API操作非常重要**； [Nodejs Api官网](http://nodejs.cn/api/)

```js
const fs=require('fs');
// 文件路劲
const path='.'

// 异步读取

fs.readdir(path,funtion(err,files){
    if(err){
        // 出现异常
    }
    // 读取结果
    console.log(files)
})
// 也可以转换为箭头函数

fs.readdir(path,(err,files)=>{
    if(err){
        // 出现异常
    }
    // 读取结果
    console.log(files)
})


// 同步写法

const result=fs.readdirSync(path);
// 输出结果
console.log(result)
```

#### 同步和异步的简单区别

- 同步方式更容易理解，但会造成线程阻塞，无法最大限度利用系统资源；
- 异步方式需要嵌套回调，即使代码编写得非常规范也不容易理解和维护，但它能够并行执行，同时处理更多的任务，**效率更高**

**Nodejs实现了高的效率，至于是如何提升可控性则是开发人员要解决的问题，也是Nodejs体系中最难的点**

### 自带的异步写法

Nodejs中事件的处理方式：

- 回调函数(callback function)
- 事件发射器(eventEmitter)

callback function采用错误优先(error-first)的回调方式，而EventEmitter则是事件驱动里的事件发射器

错误优先回调方式的写法:

- 回调函数的第一个参数返回的是error对象（程序出错抛出来的异常），如果发生错误，该对象会作为第一个参数返回，**如果正常执行，一般返回是null，方便在下文进行if(error)判错处理**（其实只要返回是的非ture，应该不影响后续判断，不过约定俗成吧~）

- 回调函数的第二个参数返回的是所有成功响应的结果数据，如果结果正常，则没有发生错误，参数err就会被设置成null，并在第二个参数处返回成功响应的结果；

```js
/**
* err ：错误对象
* data ： 成功时返回的数据
*/
function (err,data){
    if(err){
        // 存在错误
    }
    // 正常，则输出结果data
    console.log(data)
}
```

但从代码语义上来说，非空的err属于程序异常，而空的err相当于能够正常返回结果，不存在异常。

##### API写法约定

- 模块应该暴露错误优先的回调接口

```js
module.exports=function(dragonName,callback){
    // 逻辑处理
    const dragon=createDragon(dragonName);
    
    // 注意第一个参数时error,如果没有错误，则它的默认值时null
    return callback(null,dragon);
}
```

**只有同步代码才能使用try-catch，在回调函数中不能随意使用！**经典异常捕获方法：

```js
const fs=require('fs');
function readJSON(filePath,callback){
    fs.readFile(filePath,function(err,data){
        const parsedJSON;
        // 错误处理
        if(err){
            return callback(err);
        }
        // 解析
        try{
            parsedJSON=JSON.parse(data)
        }catch(exception){
            return callback(exception)
        }
        
        // 无异常，返回数据
        return callback(null,parsedJSON)
    })
}

```

### EventEmitter

> 事件模块是Node.js内置的对观察者模式的实现，通过EventEmitter属性提供一个构造函数。该构造函数的实例中具有两个常用的方法，其中on方法可以用来监听指定事件，并触发回调函数，另外一个emit方法可以用来发布事件。可以通过发布订阅模型来理解；

```state
订阅-->发布
on-->emit
```

EventEmitter是Node.js的基础模块，通过EventEmitter属性建立了一个EventEmitter对象实例，即：消息中心

```js
const EventEmitter=require('events')
// 初始化消息中心实例
const observer=new EventEmitter();


// 订阅
observer.on('topic',()=>{
    console.log('订阅执行的方法')
})

// 发布 可以传参
observer.emit('topic')

// 声明方法调用

function main(){
    console.log('main() function start:')
    observer.emit('topic')
    console.log('main() function ending')
}

// 执行
main()

```

可以简单理解为“发布/订阅”模式，当observer调用emit方法时，所有通过on注册该topic事件的回调函数都会被调用；

EventEmitter对象的事件触发和监听时同步的，这里和前端的事件机制很类似,Vue的父组件传值，也有对应的$emit和$on的机制

```js
// jquery

$('#footer').on('click',function(){
    console.log('点击后的效果')
})

// 此处的trigger类似于emit，事件的触发器
$('#footer').trigger('click');


// click事件，也可以支持简写

$('#footer').click(()=>{
    console.log('点击后触发')
})

```

emit()方法用于触发事件，on()方法用于注册事件。对于on()方法而言，默认情况下，Node.js允许同一个事件最多指定10个回调函数

```js
event.on('someEvent',()=>{
    console.log('event 1')
})
event.on('someEvent',()=>{
    console.log('event 2')
})

......// 更多

```

当超过10个回调函数时会发出警告⚠，当然也可以通过`setMaxListeners`方法来改变

```js
event.setMaxListeners(100)
```

也可以用`Infinity`来设置最大值（**Infinity用来表示无穷大**）

事件传参举例：

```js
const eventEmitter=require('events')
const myEmitter=new EventEmitter();

function testConnection(param){
    console.log('传递的参数'，param)
}

myEmitter.on('test',testConnection)

// 参数传递10
myEmitter.emit('test',10)
```

### 事件

- 事件操作接口

> 常见有removeListener事件和newListener事件，用来移除和添加

- once方法

> 类似于on()方法，**但是对应的回调函数只能被调用一次**，而on()中的回调函数会被触发多次；

- 获取监听器信息

> 利用EventEmitter对象中的listeners()方法

- 事件错误处理

### Promise对象

**每个Promise对象都有then()方法，也就是说，then()方法是定义在原型对象Promise.protype上的，作用是为Promise实例添加状态改变时的回调函数**

```js
Promise.protype.then=function(success,fail){
    this.done(success);
    this.fail(fail);
    // 返回this
    return this
}
```

由于这里每个then都会**返回this对象**，因此可以一直then()下去，形成链式写法

- success: fulfilled状态的回调函数
- fail:rejected状态的回调函数

一般情况下，只需要传success回调函数即可，fail函数可选，使用catch来捕获异常比通过fail函数，请示更加好控制（这里越总结，越向jquery的ajax写法）

**任何Promise对象都必须处于pending、fulfilled、rejected其中之一的状态**

- pending：初始状态，独立于fulfilled和rejected的状态
- fulfilled: 完成（成功）状态
- rejected:拒绝（失败）状态

#### 状态切换

```state
pending-->fulfilled
```

```state
pending-->rejected
```

以上两种状态的转换都是单向的，而且fulfilled和rejected两个状态之间是不能互相转换的,最重要的是：**只有异步操作有结果的手，可能决定当前Promise处于那种状态，任何其他操作都没法改变这个状态**

### Promise的API方法
>
> Promise规范非常简单，只包含一个构造函数和六个方法

```js
// 构造函数
new Promise((resolve,reject)=>{
    
})
// 所有Promise都要通过这种方式创建， resolve和reject是唯一可以改变Promise对象状态的接口
```

- resolve可以让状态从pending切换到fulfilled
- reject可以让状态从pending切换到rejected(当然，reject是可选参数)

```js
// 捕获当前操作的resolve结果
Promise.protype.then()

// 捕获全局操作的reject异常
Promise.protype.catch() 
```

**特别值得注意的是：resolve相当于Promise.resolve的别名，reject相当于Promise.reject的别名**。

```js
new Promise(resolve=>{
    resolve(1)
}).then(ret=>{
    console.log('resolve传递值：',ret)
})
// 类似于别名
Promise.resolve(1).then(ret=>{
    console.log('resolve传递值：',ret)
})
```

总结一下，6个内置方法：

- Promise.resolve()

> 可以看作：Promise.protype.resolve(),方法后面可以跟then()方法

- Promise.reject()

> 可以看作：Promise.protype.reject()，方法后面可以跟catch()方法

- Promise.protype.then()

> 语法：
p.then(onFilfilled,onRejected) 或者p.then(value=>{.............})。
此处onRejected一般省略

- Promise.protype.catch()

> 语法：
p.catch(onRejected) 或者p.catch(error=>{.............})

- Promise.all()

> 在所有接收到的Promise对象都变为fulfilled或者rejected状态之后才会继续进行后面的处理【**多个方法之间并行处理**】

- Promise.race()

> 只要有一个Promise对象进入fulfilled或者rejected状态，就会继续后面的处理【**多个方法之间并行处理**】

#### Promise化

在Javascript中，不是所有的异步函数和库都支持开箱即用的Promise,在大多数情况下，必须将一个典型的基于回调的函数转换成一个返回Promise的函数，这个过程为**promisification**

- promisefy
- promisefyAll

以上两个api都是基于`bulebird`模块的

```js
const Promise =require('bluebird')

const fs=Promise.promisifyAll(require('fs'))

const obj={
    a:()=>{
        console.log('function a')
    },
    b:()=>{
        console.log('function b')
    },
    c:()=>{
        console.log('function c')
    }
}
// 全部转化为同步

Promise.promisifyAll(obj)

// 调用
obj.aAsync().then(obj.bAsync()).then(obj.cAsync()).catch(err=>{
    // 处理
})
```

说一点：promisifyAll可能有性能问题

**当然，这里来源于`bluebird`模块的Promise对象，其实是具备Nodejs的Promise对象的所有构造函数和属性，兼容所有原生所有版本的**

### 异常处理

异常处理是异步流程控制里最难的部分，异常主要分为两种，系统错误和程序员错误。系统错误有：

- 请求超时
- 内存不足
- 连接远程服务失败等

一般需要搭配系统监控等辅助软件解决。

程序员错误即程序的Bug，产生的原因很多，比如：

- 在调用异步方法时没有使用回调
- 无法读取undefined的属性
- 在高并发的场景下使用了同步阻塞代码
- 没有及时处理异常
- 内存泄漏

这类错误是可以避免的，应对的主要方法是启动服务，通过日志记录一切；

开发者都遵守一样的约定能够有效的降低沟通成本，写法越底层，使用者越有可发挥的空间；

在Nodejs的世界里，http是最常用的模块，它简单且效率非常高，是被应用最广泛的模块。如果说http是Node.js的核心模块，那么Stream就是核心中的核心，是保证http高效的秘密武器。相比之下，events显得极为底层，是为核心模块服务的；

**function* 这种声明方式(function关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个  Generator  对象。**
