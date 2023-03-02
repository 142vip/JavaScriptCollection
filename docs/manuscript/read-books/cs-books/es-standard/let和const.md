---
title: let和const命令
headerDepth: 4
---

### let命令
>ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，**只在let命令所在的代码块内有效。**

```javascript

// 函数内部定义变量
function test(){
    let a=10
    var b=1
}

console.log(a) //输出报错，let块级作用域

console.log(b) // 输出1

```
#### 不存在变量提升

> var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined

let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

```javascript
// var
console.log(test) // 输出undefined
var test=2

// let
console.log(err) // 输出ReferenceError错误
let err=1
```

#### 暂时性死区

>只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，**从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错**。

> 代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

```javascript
// 在let命令声明变量tmp之前，都属于变量tmp的“死区”。
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}

```

**ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。**

总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

#### 不允许重复声明

> let不允许在相同作用域内，重复声明同一个变量。

```javascript
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}

```

当然这样写是不报错的，但不建议
```javascript

function func(arg) {
  {
    let arg;
  }
}
func() // 不报错
```

### 块级作用域

ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

```javascript
// 循环结束后，变量i并没有消失，泄露成了全局变量。
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i); // 5
```

#### ES6的块级作用域

let为 JavaScript 新增了块级作用域。

ES6 允许块级作用域的任意嵌套。

```javascript
// 报错情况
{
    {
        {
            let instance='test'
        }
        // 此时并没有变量名instance,输出会报错
        console.log(instance)
    }
}

// 正常情况
{
    {
        let instance='test'
        {
            // 与上面的instance互不影响
            let instance='test'
        }
    }
}
```

块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。

```javascript
// IIFE 写法
(function () {
  var tmp = ...;
  ...
}());

// 块级作用域写法
{
  let tmp = ...;
  ...
}

```

#### 块级作用域和函数声明

ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。

```javascript
// 按照 ES5 的规定以下情况都是非法的。
// 情况一
if (true) {
  function f(){

  }
}

// 情况二
try {
  function f(){

  }
} catch(e) {
  // ...
}
```

ES6 引入了块级作用域，明确允许在块级作用域之中声明函数

> ES6 规定，块级作用域之中，**函数声明语句的行为类似于let，在块级作用域之外不可引用。**

```javascript
function f(){
    console.log('outside')
}

(function(){
    if(false){
        // 重复声明函数f
        function f(){
            console.log('inside')
        }
    }
})

// 运行会得到“inside”，因为在if内声明的函数f会被提升到函数头部，实际运行的代码如下。
// ES5 环境
function f() {
        console.log('outside')
    }

(function () {
  function f() {
        console.log('inside')
      }
  if (false) {

    }
  f();
}());
```

ES6 就完全不一样了，理论上会得到“I am outside!”。因为块级作用域内声明的函数类似于let，对作用域之外没有影响。但是，如果你真的在 ES6 浏览器中运行一下上面的代码，是会报错的，这是为什么呢？

```javascript
// 浏览器的 ES6 环境
function f() {
    console.log('outside')
}

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() {
        console.log('inside')
    }
  }
  f();
}());
// Uncaught TypeError: f is not a function

```
上面的代码在 ES6 浏览器中，都会报错。

原来，如果改变了块级作用域内声明的函数的处理规则，显然会对老代码产生很大影响。为了减轻因此产生的不兼容问题，ES6 在附录 B里面规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式。

允许在块级作用域内声明函数。
函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
同时，函数声明还会提升到所在的块级作用域的头部。
注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。

根据这三条规则，浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于var声明的变量。上面的例子实际运行的代码如下。

```javascript
// 浏览器的 ES6 环境
function f(){
    console.log('outside')
}
(function () {
  var f = undefined;
  if (false) {
    function f(){
        console.log('inside')
    }
  }
  // 执行函数
  f();
}());
// Uncaught TypeError: f is not a function
```
考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

```javascript
// 块级作用域内部的函数声明语句，建议不要使用
{
  let a = 'secret';
  function f(){
    return a;
  }
}

// 块级作用域内部，优先使用函数表达式
{
  let a = 'secret';
  let f = function(){
    return a;
  };
}
```
另外，还有一个需要注意的地方。ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。

```javascript
// 第一种写法，报错
if (true) let x = 1;

// 第二种写法，不报错
if (true) {
  let x = 1;
}

```
上面代码中，第一种写法没有大括号，所以不存在块级作用域，而let只能出现在当前作用域的顶层，所以报错。第二种写法有大括号，所以块级作用域成立。

函数声明也是如此，严格模式下，函数只能声明在当前作用域的顶层。

```javascript
// 不报错
'use strict';
if (true) {
  function f(){

  }
}

// 报错
'use strict';
if (true)
  function f(){}

```


### const命令

**const声明一个只读的常量。一旦声明，常量的值就不能改变。**


```javascript

const test=2323

console.log(test) // 输出：2323

// 重新赋值会报错:Assignment to constant variable

test=4567

```
**const声明的变量不得改变值**，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

```javascript

// 只声明、不赋值会报错
const test;

```
**const的作用域与let命令相同：只在声明所在的块级作用域内有效。**

```javascript
if(true){
    const max=5
}

// 输出报错：max is not defined
console.log(max)

```

const命令声明的常量也是不提升的，同样存在暂时性死区，**只能在声明的位置后面使用**

```javascript
// 存在暂时性死区
if(true){
    // 调用报错
    console.log(max)
    const max=34;
}

```

**const声明的常量，也与let一样不可重复声明。**

```javascript
var student='tom'
let gender='girl'

// 已声明的变量，重复声明会报错
const message='go go go'

const gender='boy'

```

### 重要

**const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。**

对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心

```javascript
// 定义对象
const student={}

// 添加属性
student.age=18

// 正常输出 18
console.log(student.age)

// 此时指针地址发生了变化，报错
student={}

```

> 常量student储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把student指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性


对象值确保不变，可以考虑使用`Object.freeze()`函数将其冻结

```javascript

const student=Object.freeze({})

// 常规模式： 赋值不起作用
// 严格模式： 报错
student.age=18

```

当然，出了冻结对象本身，对象可能存在的属性也需要冻结

```javascript
// 冻结对象和属性
function objectConstant(obj){
    // 冻结对象
    Object.freeze(obj)
    // 冻结属性
    Object.keys(obj).forEach((key,index)=>{
        // 属性值为对象
        if(typeof obj[key]==='object'){
            // 递归调用冻结方法
            constantize(obj[key])
        }
    })
}
```

#### ES6声明变量的6中方法

- var定义
- function命令
- let
- const
- import
- class

#### globalThis 对象


JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。

- 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。

- 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。

- 在Node 里面，顶层对象是global，但其他环境都不支持。

 同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。

- 全局环境中，this会返回顶层对象。但是，Node.js 模块中this返回的是当前模块，ES6 模块中this返回的是undefined。
- 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
- 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。



**很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。**
```javascript
// 方法一
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);

// 方法二
var getGlobal = function () {
  if (typeof self !== 'undefined') {
      return self;
  }
  if (typeof window !== 'undefined') {
     return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('unable to locate global object');
};
```