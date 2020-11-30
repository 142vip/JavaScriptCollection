## 第一章 Node.js初识

#### 核心命令

- npm run dev
> 利用Node.js编写的模块辅助开发命令，常用于本地开发，不会产生最终文件

- npm run build
> 打包，生成最终可在浏览器中运行的代码

最小功效原则：
> 选择最合适的解决方案而不是最强的，语言的功效越弱，对于存储在该语言中的数据，我们能做的事情就越多

Atwood定律：

>任何能够用Javascript实现的应用系统，最终都必将用Javascript实现


#### Node.js早期架构

- Chrome V8引擎：Google发布的开源Javascript引擎，采用`C/C++`编写，在Google的Chrome浏览器中被使用，Chrome V8引擎可以独立运行，也可以嵌入到`C/C++`应用程序中被执行。
- Node.js内置了Chrome V8引擎，所以使用的Javascript语法
- **Javascript语言的一大特点就是单线程**，即同一时间只能做一件事。单线程就意味着所有的任务都需要排队，前一个任务结束才会执行后一个任务。如果前一个任务耗时很久，后一个任务就不得不一直等待；
- 一般情况下，排队的时候CPU总是闲着。其实CPU完全可以不管I/O设备而直接挂起处于等待中的任务，先运行排在后面的任务。
- 将等待中的I/O任务放在事件循环中，**事件由libuv提供**
- 事件循环负责将文件I/O任务放入到线程池中，线程池由libuv提供。网络I/O任务不通过线程池完成；
- **只要有CPU资源，就应该尽力执行**，榨干硬件性能；


#### Node.js特点
>Node.js是可扩展的适合用于构建高性能Web应用的最简单的解决方案（**适合构建Web应用、高性能、简单、可拓展**）

##### 适合构建Web应用

- 构建网站：用Node.js做入门开发和传统的Java、PHP开发并没有什么区别。构建成功的应用是典型的单体式应用。
- 构建API：后端API接口开发用于数据库访问，将返回的数据进行包裹，以HTTP形式返回；API Proxy针对前端使用的API进行优化，使前端开发更人性化。
```javascript
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


##### 高性能

- 执行速度快：构建在ChromeV8引擎之上，执行速度可能是动态语言运行时环境里最快的

- 天生异步：事件驱动和非阻塞I/O特性决定了Node.js必须采用异步机制，每个I/O任务都是异步的

- 适用于I/O密集的网络应用开发，不是很适合CPU密集型应用，合理的采用技术栈，利用Node.js的优势，不仅能够加快开发迭代的速度，对系统的稳定性也是非常有帮助的；

##### 简单

- 语法简单：Javascript简单易学，深入比较难

- 并发编程简单：完美应对实时及I/O密集型应用等高并发场景

- 部署运维简单：很简单的利用docker或者pm2甚至node指令即可部署

- 开发简单：遵寻“小而美”的设计哲学

##### 可拓展

- npm上有大量模块可以使用
- 通过编写C/C++实现CPU密集型任务开发
- 可以轻松搭配Java、Rust等语言使用
- 架构互补：以业务边界来进行服务拆分，可以让合适的轮子出现在合适的位置上

#### 应用场景

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






---