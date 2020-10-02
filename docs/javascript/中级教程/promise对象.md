## Promise对象

### 概念

Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。

**Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果**。

### 特点

1. 对象的状态不受外界影响。
2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

### 状态

Promise对象代表一个异步操作，有三种状态：

- pending（进行中）

- fulfilled（已成功）
- rejected（已失败）。

**只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。**

### 缺点

1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
3. 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

### 用法

写js必然不会对异步事件陌生。

```js
settimeout(()=>{
    console.log("123")
},0)

console.log("abc")
//先输出abc，再输出123
```

如果abc需要在123执行结束后再输出怎么办？

当然，可以使用callback，但是callback使用起来是一件很让人绝望的事情。**Promise这个为异步编程而生的对象站了出来....**

```js
let p = new Promise((resolve,reject)=>{
    //一些异步操作
    setTimeout(()=>{
        console.log("123")
        resolve("abc");
        reject("我是错误信息")
    },0)
}).then(function(data){
    //resolve状态
    console.log(data)
},function(err){
    //reject状态
    console.log(err)
})
// '123'
// 'abc'
// 我是错误信息
```

这时候你应该有两个疑问：

1.包装这么一个函数有毛线用？

2.resolve('123');这是干毛的？

Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

也就是说，状态由实例化时的参数（函数）执行来决定的，根据不同的状态，看看需要走then的第一个参数还是第二个。

resolve()和reject()的参数会传递到对应的回调函数的data或err

**then返回的是一个新的Promise实例，也就是说可以继续then**

### 链式操作

从表面上看，Promise只是能够简化层层回调的写法，而实质上，Promise的精髓是“状态”，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递callback函数要简单、灵活的多。所以使用Promise的正确场景是这样的：

```js
runAsync1()
    .then(function(data){
    console.log(data);
    return runAsync2();
})
    .then(function(data){
    console.log(data);
    return runAsync3();
})
    .then(function(data){
    console.log(data);
});
//异步任务1执行完成
//随便什么数据1
//异步任务2执行完成
//随便什么数据2
//异步任务3执行完成
//随便什么数据3
```

runAsync1、runAsync2、runAsync3长这样↓

```js
function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务1执行完成');
            resolve('随便什么数据1');
        }, 1000);
    });
    return p;            
}
function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务2执行完成');
            resolve('随便什么数据2');
        }, 2000);
    });
    return p;            
}
function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('异步任务3执行完成');
            resolve('随便什么数据3');
        }, 2000);
    });
    return p;            
}
```

在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中也可以接收到数据：

```js
runAsync1()
    .then(function(data){
    console.log(data);
    return runAsync2();
}).then(function(data){
    console.log(data);
    return '直接返回数据';  //这里直接返回数据
}).then(function(data){
    console.log(data);
});
//异步任务1执行完成
//随便什么数据1
//异步任务2执行完成
//随便什么数据2
//直接返回数据
```

### reject的用法

前面的例子都是只有“执行成功”的回调，还没有“失败”的情况，reject的作用就是把Promise的状态置为rejected，这样我们在then中就能捕捉到，然后执行“失败”情况的回调。

```js
let num = 10;
let p1 = function() {
    return new Promise((resolve,reject)=>{
        if (num <= 5) {
            resolve("<=5，走resolce")
            console.log('resolce不能结束Promise')
        }else{
            reject(">5，走reject")
            console.log('reject不能结束Promise')
        }
    }) 
}

p1()
    .then(function(data){
    console.log(data)
},function(err){
    console.log(err)
})
// reject不能结束Promise
// >5，走reject
```

**resolve和reject永远会在当前环境的最后执行，所以后面的同步代码会先执行。**

如果resolve和reject之后还有代码需要执行，最好放在then里。

然后在resolve和reject前面写上return。

### Promise.prototype.catch()

Promise.prototype.catch方法是.**then(null, rejection)的别名**，用于指定发生错误时的回调函数。

```js
// 接着上面的例子
p1().then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err)
})
// reject不能结束Promise
// >5，走reject 	
```

### Promise.all()

Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.all([p1, p2, p3]);
```

p的状态由p1、p2、p3决定，分成两种情况。

1. 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled。 此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
2. 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

promises是包含 3 个 Promise 实例的数组，只有这 3 个实例的状态都变成fulfilled，或者其中有一个变为rejected，才会调用Promise.all方法后面的回调函数。

如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法，如果没有参数没有定义自己的catch，就会调用Promise.all()的catch方法。

### Promise.race()

Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.race([p1, p2, p3]);
// 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
// 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
```

### Promise.resolve()

有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。

```js
const jsPromise = Promise.resolve('123');
```

上面代码将123转为一个 Promise 对象。

Promise.resolve等价于下面的写法。

```js
Promise.resolve('123')
// 等价于
new Promise(resolve => resolve('123'))
```

#### 参数的四种情况

- 参数是一个 Promise 实例
- 参数是一个thenable对象

thenable对象指的是具有then方法的对象，比如下面这个对象。

```js
let thenable = {
    then: function(resolve, reject) {
        resolve(42);
    }
};

```

Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。

```js
let thenable = {
    then: function(resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
    //调用，输出42
    console.log(value); 
});
```

上面代码中，thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出 42。

- 参数不是具有then方法的对象，或根本就不是对象

如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的 Promise 对象，状态为resolved。

```js
const p = Promise.resolve('Hello');

p.then(function (s){
    console.log(s)
});
// Hello

```

上面代码生成一个新的 Promise 对象的实例p。由于字符串Hello不属于异步操作（判断方法是字符串对象不具有 then 方法），返回 Promise 实例的状态从一生成就是resolved，所以回调函数会立即执行。Promise.resolve方法的参数，会同时传给回调函数。

- 不带有任何参数

Promise.resolve方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。

所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve方法。

```js
const p = Promise.resolve();

p.then(function () {
    // ...
});
```

上面代码的变量p就是一个 Promise 对象。

需要注意的是，立即resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。

```js
setTimeout(function () {
    console.log('three');
}, 0);

Promise.resolve().then(function () {
    console.log('two');
});

console.log('one');

// one
// two
// three
```

上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，因此最先输出。

### Promise.reject()

Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。

```js
const p = Promise.reject('出错了');
// 等同于
const p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
    console.log(s)
});
// 出错了

```

上面代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行。

注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。

```js
const thenable = {
  then(resolve, reject) {
    reject('出错了');
  }
};

Promise.reject(thenable)
.catch(e => {
  console.log(e === thenable)
})
// true
```

上面代码中，Promise.reject方法的参数是一个thenable对象，执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象。


