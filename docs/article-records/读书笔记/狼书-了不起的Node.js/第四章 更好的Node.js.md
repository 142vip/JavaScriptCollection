## 更好的Node.js

> 作者Rong姐姐好可爱，整理于2020年11月17日


### 选择

#### 面向过程

>Express框架就是典型的面向过程的代码，整个框架大体上感觉只需要用心、专注了解中间件，就可以无障碍的开发和编写了；

```javascript
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

```javascript
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

```javascript   
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

```javascript
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

```javascript
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


#### 特别注意：

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