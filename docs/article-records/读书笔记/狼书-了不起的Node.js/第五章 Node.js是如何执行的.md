## Node.js是如何执行的

> Rong姐姐好可爱，整理于2020年11月18日

这一章主要讲解Nodejs的执行流程、原理，建议看书，我这里只是总结认为重要且必须掌握的内容

- process的用法
- 宏任务和微任务


### process的用法


1. 统计信息(CPU、内存等)

> 可以参考对应的[官方api文档](http://nodejs.cn/api/process.html#process_process_cpuusage_previousvalue)

```javascript

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

```javascript
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


3. uncaughtException事件

> 当Nodejs发现一个没有被捕获的异常时候，会触发这个事件。如果这个事件中存在回调函数，Node.js不会强制结束进程。

```javascript
process.on('uncaughtException',err=>{
    // 处理错误
    ....
})
```

4. 其他用途

-  进程管理：exit、kill
-  I/O相关：stdout、stderr、stdin
-  路径处理：cwd、chdir等


### 宏任务和微任务

在libuv事件编程模型中，应用程序只负责监视特定的事件，并在事件发生后进行响应。


当前调用栈执行完毕时，会分两种情况进行处理。首先处理microtask(微任务)队列里的事件，然后再从macrotask(宏任务)里中取出一个执行事件并执行。

**在同一次事件循环中，微任务永远在宏任务前执行**


```
graph LR

microtask(微任务)-->macrotask(宏任务)

```

#### microtask（微任务）：

- process.nextTick()

- promise对象

#### macrotask（宏任务）：

- setTimeout()

- setInterval()

- setImmediate()

- I/O操作


### process.nextTick(callback)

**process.nextTick(callback)是用于事件循环的下一次循环中调用回调函数的，即：控制入队列，和setTimeout(fn,0)函数的功能类似，但效率更高。**

process.nextTick(callback)将一个函数推迟到代码执行的下一个同步方法执行完毕或异步事件回调函数开始执行时再执行


> 原理： 可以基于Node.js的事件循环进行分析，每次循环就是一次tick,每次tick时，Chrome V8引擎都会从事件队列中取出所有事件依次进行处理，如果遇到nextTick()事件，则将其加入事件队尾，等待下一次tick到来时执行。这样直接导致nextTick()事件将会被延迟执行。



