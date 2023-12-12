---
title: ES6标准入门
permalink: /manuscripts/read-books/cs-books/standard-es6.html
headerDepth: 2
---

# ES6标准入门

![](../images/es6-standard.png)

ES6是下一代JavaScript语言标准的统称，每年6月发布一次修订版，迄今为止已经发布了3个版本，分别是ES2015、ES2016、ES2017。
本书根据ES2017标准，详尽介绍了所有新增的语法，对基本概念、设计目的和用法进行了清晰的讲解，给出了大量简单易懂的示例。
本书为中级难度，适合那些已经对JavaScript语言有一定了解的读者，可以作为学习这门语言最新进展的工具书，也可以作为参考手册供大家随时查阅新语法。
第3版增加了超过30%的内容，完全覆盖了ES2017标准，相比第2版介绍了更多的语法点，还调整了原有章节的文字表达，充实了示例，论述更准确，更易懂易学。

## 简介

### ECMAScript VS JavaScript

前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。

### ECMAScript2015 VS ES6

ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015
则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代
JavaScript 语言”

### Babel转码器

Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6
的方式编写程序，又不用担心现有环境是否支持。

```js
// 转码前的箭头函数
input.map(item => item + 1)

// 转码后
input.map(function (item) {
  return item + 1
})
```

#### 安装Babel

```bash
## 本地安装
npm install --save-dev @babel/core
```

#### 配置文件.babelrc

Babel 的配置文件是.babelrc，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。

```json
{
  "presets": [],
  "plugins": []
}
```

presets字段设定转码规则

```bash
# 最新转码规则
$ npm install --save-dev @babel/preset-env

# react 转码规则
$ npm install --save-dev @babel/preset-react
```

下载完成后，可以将规则键入到`.babelrc`文件中

```json
{
  "presets": [
    "@babel/env",
    "@babel/preset-react"
  ],
  "plugins": []
}
```

## let和const命令

### let命令

ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，**只在let命令所在的代码块内有效。**

```js

// 函数内部定义变量
function test() {
  let a = 10
  var b = 1
}

//输出报错，let块级作用域
console.log(a)

// 输出1
console.log(b) 
```

不存在变量提升:

> var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined

let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

```js
// var
console.log(test) // 输出undefined
var test = 2

// let
console.log(err) // 输出ReferenceError错误
let err = 1
```

暂时性死区:

> 只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。

ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，**从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错
**。

> 代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

```js
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

**ES6 规定暂时性死区和let、const语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。这样的错误在
ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。**

总之，暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。

不允许重复声明:

> let不允许在相同作用域内，重复声明同一个变量。

```js
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

```js

function func(arg) {
  {
    let arg;
  }
}

func() // 不报错
```

### 块级作用域

ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。

```js
// 循环结束后，变量i并没有消失，泄露成了全局变量。
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

// 输出5
console.log(i); 
```

let为 JavaScript 新增了块级作用域。ES6 允许块级作用域的任意嵌套。

```js
// 报错情况
{
  {
    {
      let instance = 'test'
    }
    // 此时并没有变量名instance,输出会报错
    console.log(instance)
  }
}

// 正常情况
{
  {
    let instance = 'test'
    {
      // 与上面的instance互不影响
      let instance = 'test'
    }
  }
}
```

块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。

```js
// IIFE 写法
(function () {
  var tmp =
...
  ;
...
}());

// 块级作用域写法
{
  let tmp =
...
  ;
...
}

```

块级作用域和函数声明：ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。

```js
// 按照 ES5 的规定以下情况都是非法的。
// 情况一
if (true) {
  function f() {

  }
}

// 情况二
try {
  function f() {

  }
} catch (e) {
  // ...
}
```

ES6 引入了块级作用域，明确允许在块级作用域之中声明函数

> ES6 规定，块级作用域之中，**函数声明语句的行为类似于let，在块级作用域之外不可引用。**

```js
function f() {
  console.log('outside')
}

(function () {
  if (false) {
    // 重复声明函数f
    function f() {
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

ES6 就完全不一样了，理论上会得到“I am outside!”。因为块级作用域内声明的函数类似于let，对作用域之外没有影响。但是，如果你真的在
ES6 浏览器中运行一下上面的代码，是会报错的，这是为什么呢？

```js
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

原来，如果改变了块级作用域内声明的函数的处理规则，显然会对老代码产生很大影响。为了减轻因此产生的不兼容问题，ES6 在附录
B里面规定，浏览器的实现可以不遵守上面的规定，有自己的行为方式。

允许在块级作用域内声明函数。
函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
同时，函数声明还会提升到所在的块级作用域的头部。
注意，上面三条规则只对 ES6 的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当作let处理。

根据这三条规则，浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于var声明的变量。上面的例子实际运行的代码如下。

```js
// 浏览器的 ES6 环境
function f() {
  console.log('outside')
}

(function () {
  var f = undefined;
  if (false) {
    function f() {
      console.log('inside')
    }
  }
  // 执行函数
  f();
}());
// Uncaught TypeError: f is not a function
```

考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。

```js
// 块级作用域内部的函数声明语句，建议不要使用
{
  let a = 'secret';

  function f() {
    return a;
  }
}

// 块级作用域内部，优先使用函数表达式
{
  let a = 'secret';
  let f = function () {
    return a;
  };
}
```

另外，还有一个需要注意的地方。ES6 的块级作用域必须有大括号，如果没有大括号，JavaScript 引擎就认为不存在块级作用域。

```js
// 第一种写法，报错
if (true) let x = 1;

// 第二种写法，不报错
if (true) {
  let x = 1;
}

```

上面代码中，第一种写法没有大括号，所以不存在块级作用域，而let只能出现在当前作用域的顶层，所以报错。第二种写法有大括号，所以块级作用域成立。

函数声明也是如此，严格模式下，函数只能声明在当前作用域的顶层。

```js
// 不报错
'use strict';
if (true) {
  function f() {

  }
}

// 报错
'use strict';
if (true)
  function f() {
  }

```

### const命令

**const声明一个只读的常量。一旦声明，常量的值就不能改变。**

```js
const test = 2323

console.log(test) // 输出：2323

// 重新赋值会报错:Assignment to constant variable
test = 4567
```

**const声明的变量不得改变值**，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。

```js
// 只声明、不赋值会报错
const test;
```

**const的作用域与let命令相同：只在声明所在的块级作用域内有效。**

```js
if (true) {
  const max = 5
}

// 输出报错：max is not defined
console.log(max)
```

const命令声明的常量也是不提升的，同样存在暂时性死区，**只能在声明的位置后面使用**

```js
// 存在暂时性死区
if (true) {
  // 调用报错
  console.log(max)
  const max = 34;
}
```

**const声明的常量，也与let一样不可重复声明。**

```js
var student = 'tom'
let gender = 'girl'

// 已声明的变量，重复声明会报错
const message = 'go go go'

const gender = 'boy'
```

**const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。**

对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，const只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心

```js
// 定义对象
const student = {}

// 添加属性
student.age = 18

// 正常输出 18
console.log(student.age)

// 此时指针地址发生了变化，报错
student = {}
```

> 常量student储存的是一个地址，这个地址指向一个对象。不可变的只是这个地址，即不能把student指向另一个地址，但对象本身是可变的，所以依然可以为其添加新属性

对象值确保不变，可以考虑使用`Object.freeze()`函数将其冻结

```js

const student = Object.freeze({})

// 常规模式： 赋值不起作用
// 严格模式： 报错
student.age = 18
```

当然，出了冻结对象本身，对象可能存在的属性也需要冻结

```js
// 冻结对象和属性
function objectConstant(obj) {
  // 冻结对象
  Object.freeze(obj)
  // 冻结属性
  Object.keys(obj).forEach((key, index) => {
    // 属性值为对象
    if (typeof obj[key] === 'object') {
      // 递归调用冻结方法
      constantize(obj[key])
    }
  })
}
```

### 变量声明方法

- var定义
- function命令
- let
- const
- import
- class

### globalThis 对象

JavaScript 语言存在一个顶层对象，它提供全局环境（即全局作用域），所有代码都是在这个环境中运行。但是，顶层对象在各种实现里面是不统一的。

- 浏览器里面，顶层对象是window，但 Node 和 Web Worker 没有window。

- 浏览器和 Web Worker 里面，self也指向顶层对象，但是 Node 没有self。

- 在Node 里面，顶层对象是global，但其他环境都不支持。

同一段代码为了能够在各种环境，都能取到顶层对象，现在一般是使用this变量，但是有局限性。

- 全局环境中，this会返回顶层对象。但是，Node.js 模块中this返回的是当前模块，ES6 模块中this返回的是undefined。
- 函数里面的this，如果函数不是作为对象的方法运行，而是单纯作为函数运行，this会指向顶层对象。但是，严格模式下，这时this会返回undefined。
- 不管是严格模式，还是普通模式，new Function('return this')()，总是会返回全局对象。但是，如果浏览器用了 CSP（Content Security
  Policy，内容安全策略），那么eval、new Function这些方法都可能无法使用。

**很难找到一种方法，可以在所有情况下，都取到顶层对象。下面是两种勉强可以使用的方法。**

```js
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

## 解构赋值

### 数组

#### 基本用法

> ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

```js
// 变量赋值
let a = 1;
let b = 2;
let c = 3;

// ES6中可以从数组中提取值，按照对应位置，对变量赋值。：

let [a, b, c] = [1, 2, 3]

```

本质上，这种写法属于“**模式匹配**”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。

```js
// 嵌套解构
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [, , third] = ["foo", "bar", "baz"];
console.log(third) // "baz"


let [x, , y] = [1, 2, 3];
console.log(x) // 1
console.log(y) // 3

let [head, ...tail] = [1, 2, 3, 4];
console.log(head) // 1
console.log(tail) // [2, 3, 4]

let [x, y, ...z] = ['a'];
console.log(x) // "a"
console.log(y) // undefined
console.log(z) // []

```

**解构不成功，变量值等于undefined**

```js
// 不完全解构, 只匹配部分
let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

```

如果等号的右边不是数组（正确的说：不属于可以遍历的结构）,就会报错

```js
// 解构时会报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};

// 因为等号右边的值，要么转为对象以后不具备 Iterator 接口（前五个表达式），
// 要么本身就不具备 Iterator 接口（最后一个表达式）。
```

Set结构的数据明显存在递归迭代、遍历的接口，也是可以使用数组的解构赋值的

```js
let [x, y, z] = new Set(['a', 'b', 'c']);
x // "a"
```

**只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值**

#### 默认值

解构赋值允许指定默认值。

```js
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

```

**ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。**

```js
// undefined情况
let [x = 1] = [undefined];
x // 1

// null情况
let [x = 1] = [null];
x // null
```

**如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。**

```js

// 定义函数
function f() {
  console.log('aaa');
}

// 解构赋值
let [x = f()] = [1];

```

此时x明显可以拿到值，所以函数f()是不会执行的。

```js

let x;

// 数组[1]中的第一个元素，不严格等于undefined的时候，才会解构成功
if ([1][0] === undefined) {
  x = f();
} else {
  x = [1][0]
}

```

默认值可以引用解构赋值的其他变量，但该变量必须已经声明

```js
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2

// 变量y没有声明
let [x = y, y = 1] = [];     // ReferenceError: y is not defined

```

### 对象

同样，解构赋值可以适用数组，也可以适用于对象

```js
let {foo, bar} = {foo: 'aaa', bar: 'bbb'};
foo // "aaa"
bar // "bbb"
```

**数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。**

```js
let {bar, foo} = {foo: 'aaa', bar: 'bbb'};
foo // "aaa"
bar // "bbb"

// 变量没有对应的同名属性，导致取不到值，最后等于undefined。
let {baz} = {foo: 'aaa', bar: 'bbb'};
baz // undefined

```

如果变量名与属性名不一致

```js
let {foo: baz} = {foo: 'aaa', bar: 'bbb'};
baz // "aaa"

let obj = {first: 'hello', last: 'world'};
let {first: f, last: l} = obj;
f // 'hello'
l // 'world'
```

```js
// 对象的解构赋值是下面形式的简写
let {foo: foo, bar: bar} = {foo: 'aaa', bar: 'bbb'};

// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者

// 前者为：匹配的模式，后者为变量
```

**与数组一样，解构也可以用于嵌套结构的对象**

```js
let obj = {
  p: [
    'Hello',
    {y: 'World'}
  ]
};

let {p: [x, {y}]} = obj;
x // "Hello"
y // "World"

```

这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。

```js
let obj = {
  p: [
    'Hello',
    {y: 'World'}
  ]
};

// 此时p作为了变量进行赋值
let {p, p: [x, {y}]} = obj;
x // "Hello"
y // "World"
p // ["Hello", {y: "World"}]

```

#### 默认值

同样，对象的解构也是可以指定默认值的

```js
var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x: y = 3} = {};
y // 3

var {x: y = 3} = {x: 5};
y // 5

var {message: msg = 'Something went wrong'} = {};
msg // "Something went wrong"

```

**和数组的解构赋值一样，默认值生效的条件是，对象的属性值严格等于undefined**

```js

let {x = 3} = {x: undefined}
x //3

// 属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。
let {x = 3} = {x: null};
x // null

```

需要注意：

- 如果要将一个已经声明的变量用于解构赋值，必须非常小心。

```js

// 错误的写法
let x;
{
  x
}
= {x: 1};
// SyntaxError: syntax error

// JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。

// 正确的写法
let x;
({x} = {x: 1});
x //1
```

- 解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。

```js
// 表达式虽然毫无意义，但是语法是合法的，可以执行
({} = [true, false]);
({} = 'abc');
({} = []);
```

- 由于**数组本质是特殊的对象**，因此可以对数组进行对象属性的解构

```js
// 注意将数组理解为特殊的对象
let arr = [1, 2, 3];
let {0: first, [arr.length - 1]: last} = arr;
first // 1
last // 3
```

### 字符串

**字符串也可以解构赋值**。这是因为此时，字符串被转换成了一个类似数组的对象。

```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

```

类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。

```js
// length长度属性
let {length: len} = 'hello';
len // 5
```

### 数值和布尔值

**解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。**

```js
// 数值和布尔值的包装对象都有toString属性
let {toString: s} = 123;
s === Number.prototype.toString // true

let {toString: s} = true;
s === Boolean.prototype.toString // true

```

解构赋值的规则是，**只要等号右边的值不是对象或数组，就先将其转为对象**。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

```js

// undefined和null无法转为对象
let {prop: x} = undefined; // TypeError
let {prop: y} = null; // TypeError

```

### 函数参数

函数也是可以使用解构赋值的

```js
function add([x, y]) {
  return x + y;
}

add([1, 2]); // 3

```

函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。

```js
[[1, 2], [3, 4]].map(([a, b]) => a + b);
// [ 3, 7 ]

// undefined就会触发函数参数的默认值。
[1, undefined, 3].map((x = 'yes') => x);
// [ 1, 'yes', 3 ]

```

#### 圆括号问题

**解构赋值虽然很方便，但是解析起来并不容易**对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。

由此带来的问题是，如果模式中出现圆括号怎么处理。ES6 的规则是，**只要有可能导致解构的歧义，就不得使用圆括号**。

但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。

##### 不能使用圆括号的情况

- 变量声明语句

```js
// 全部报错 都是变量声明语句，模式不能使用圆括号。
let [(a)] = [1];

let {x:
(c)
}
= {};
let ({x: c})
= {};
let {
(x: c)
}
= {};
let {
(x)
:
c
}
= {};

let {o:
({p: p})
}
= {o: {p: 2}};

```

- 函数参数

```js
// 函数参数也属于变量声明，因此不能带有圆括号。
// 报错
function f([(z)]) {
  return z;
}

// 报错
function f([z, (x)]) {
  return x;
}


```

- 赋值语句的模式

```js
// 全部报错  整个模式都放在圆括号之中
({p: a}) = {p: 42};
([a]) = [5];

// 报错 一部分模式放在圆括号之中
[({p: a}), {x: c}] = [{}, {}];

```

##### 可以使用圆括号的情况

**赋值语句的非模式部分，可以使用圆括号**

```js
// 都是赋值语句，而不是声明语句
// 圆括号都不属于模式的一部分
[(b)] = [3]; // 正确
({p: (d)} = {}); // 正确
[(parseInt.prop)] = [3]; // 正确

```

### 实际用途

- 交换变量的值

> 这里简单易读，语义非常清晰

```js
let x = 1;
let y = 2;

// 两值交换
[x, y] = [y, x]

```

- 从函数返回多个值

> 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回

```js
// 返回一个数组
function example() {
  return [1, 2, 3];
}

// 解构
let [a, b, c] = example();

// 返回一个对象
function example() {
  return {
    foo: 1,
    bar: 2
  };
}

// 解构
let {foo, bar} = example();

```

- 函数参数的定义

> 解构赋值可以方便地将一组参数与变量名对应起来。

```js
// 参数是一组有次序的值
function f([x, y, z]) {
...
}

// 调用
f([1, 2, 3]);

// 参数是一组无次序的值
function f({x, y, z}) {
...
}

// 调用
f({z: 3, y: 2, x: 1});

```

- 提取 JSON 数据

> 解构赋值对提取 JSON 对象中的数据，尤其有用。

```js
// 定义数据
let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

// 解构
let {id, status, data: number} = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]

```

- 函数参数的默认值

```js
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {
  },
  cache = true,
  complete = function () {
  },
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
};

```

避免了在函数体内部再写`var foo = config.foo || 'default foo'`;这样的语句。

- 遍历 `Map` 结构

> 任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。`Map` 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。

```js

const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
  console.log(key + " is " + value);
}
// first is hello
// second is world

// 获取键名
for (let [key] of map) {
  // ...
}

// 获取键值 注意此处的逗号
for (let [, value] of map) {
  // ...
}

```

- 输入模块的指定方法

> 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。

```js

// CommonJs写法
const {SourceMapConsumer, SourceNode} = require("source-map");

```

## 字符串

### 遍历器接口

ES6 为字符串添加了遍历器接口,使得字符串可以被for...of循环遍历。

```js
// of遍历 依次输出
for (let codePoint of 'foo') {
  console.log(codePoint)
}

```

### 模板字符串

传统的 JavaScript 语言，输出模板通常采用`+`拼接

```js
// jquery 输出模板
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
```

非常明显，写法相当繁琐且不方便，我最开始写的时候，真的'和"傻傻分不清楚，总觉得多了一个或者少了一个;

```js
// ES6模板字符串
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);

```

**模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
**

```js
// 普通字符串
`In JavaScript '\n' is a line-feed.`

// 多行字符串
  `In JavaScript this is
 not legal.`

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入变量
let name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

```

都是用反引号表示。**如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。**

```js
let greeting = `\`Yo\` World!`;
```

如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。模板字符串的空格和换行，都是被保留的，如果不想要这个换行，可以使用trim方法消除它。

- trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。

- trim() 方法不会改变原始字符串。

- trim() 方法不适用于 null, undefined, Number 类型。

**模板字符串中嵌入变量，需要将变量名写在${}之中。**

```js
// 方式比较
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
    throw new Error(
      // 传统写法:
      // 'User '
      // + user.name
      // + ' is not authorized to do '
      // + action
      // + '.'

      // ES6模板语法
      `User ${user.name} is not authorized to do ${action}.`);
  }
}

```

**大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。**

```js
let x = 1;
let y = 2;

`${x} + ${y} = ${x + y}`
// "1 + 2 = 3"

  `${x} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

// 定义对象
let obj = {x: 1, y: 2};
// 运算
`${obj.x + obj.y}`
// "3"

```

在模板字符串中也是可以调用函数的：

```js
function fn() {
  return "Hello World";
}

// 调用函数
`foo ${fn()} bar`
// foo Hello World bar

```

**如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。**

```js
// 变量place没有声明,报错
let msg = `Hello, ${place}`;

```

由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。

```js
// 输出："Hello World"
`Hello ${'World'}`
```

如果需要引用模板字符串本身，在需要时执行，可以写成函数。

```js
// 函数定义，箭头函数
let func = (name) => `Hello ${name}!`;

// 执行
func('Jack')
// "Hello Jack!"
```

模板字符串写成了一个函数的返回值。执行这个函数，就相当于执行这个模板字符串了。

### 新增方法

- String.fromCodePoint()
- **String.raw()**
- codePointAt()
- normalize()
- **includes()、startsWith()、endsWith()**
- **repeat()**
- **padStart()、padEnd()**
- **trimStart()、trimEnd()**
- **matchAll()**
- **replaceAll()**

### String.fromCodePoint()

ES5 提供`String.fromCharCode()`方法，用于从 Unicode 码点返回对应字符，但是这个方法不能识别码点大于`0xFFFF`的字符

**ES6 提供了String.fromCodePoint()方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode()
方法的不足。在作用上，正好与下面的codePointAt()方法相反。**

```js

String.fromCodePoint(0x20BB7)
// 输出： "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// 输出： true

```

**如果String.fromCodePoint方法有多个参数，则它们会被合并成一个字符串返回。**

注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。

### String.raw()

raw方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，往往用于模板字符串的处理方法。

```js
String.raw`Hi\n${2 + 3}!`
// 实际返回 "Hi\\n5!"，显示的是转义后的结果 "Hi\n5!"

String.raw`Hi\u000A!`;
// 实际返回 "Hi\\u000A!"，显示的是转义后的结果 "Hi\u000A!"
```

**如果原字符串的斜杠已经转义，那么String.raw()会进行再次转义**

```js
String.raw`Hi\\n`
// 返回 "Hi\\\\n"

String.raw`Hi\\n` === "Hi\\\\n" // true

```

- String.raw()方法可以作为处理模板字符串的基本方法，它会将所有变量替换，而且对斜杠进行转义，方便下一步作为字符串来使用。

- String.raw()本质上是一个正常的函数，只是专用于模板字符串的标签函数。如果写成正常函数的形式，它的第一个参数，应该是一个具有raw属性的对象，且raw属性的值应该是一个数组，对应模板字符串解析后的值。

```js
// `foo${1 + 2}bar`
// 等同于
String.raw({raw: ['foo', 'bar']}, 1 + 2) // "foo3bar"

```

**String.raw()方法的第一个参数是一个对象，它的raw属性等同于原始的模板字符串解析后得到的数组。**

作为函数，String.raw()的代码实现:

```js
// 定义函数，绑定到raw属性上
String.raw = function (strings, ...values) {
  let output = '';
  let index;
  for (index = 0; index < values.length; index++) {
    output += strings.raw[index] + values[index];
  }

  // 递归
  output += strings.raw[index]
  return output;
}

```

### codePointAt()

JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode
码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符。

```js
let s = "𠮷";

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271

```

ES6 提供了codePointAt()方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。

```js
let s = '𠮷a';

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97

```

**codePointAt()方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。**

```js
function is32Bit(c) {
  return c.codePointAt(0) > 0xFFFF;
}

is32Bit("𠮷") // true
is32Bit("a") // false
```

### normalize()

ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。

```js
'\u01D1'.normalize() === '\u004F\u030C'.normalize()
// true

```

normalize方法可以接受一个参数来指定normalize的方式，参数的四个可选值如下。

- NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
- NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
- NFKC，表示“兼容等价合成”（Normalization Form Compatibility
  Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）
- NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。

### includes(), startsWith(), endsWith()

传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中;

ES6 又提供了三种新方法:

- includes() 返回布尔值，表示是否找到了参数字符串。

- startsWith() 返回布尔值，表示参数字符串是否在原字符串的头部。

- endsWith() 返回布尔值，表示参数字符串是否在原字符串的尾部。

例如：

```js

let s = 'Hello world!';

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

```

**这三个方法都支持第二个参数，表示开始搜索的位置。**

```js
let s = 'Hello world!';

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false

```

**使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。**

### repeat()

repeat方法返回一个新字符串，表示将原字符串重复n次。

```js

'x'.repeat(3) // "xxx"
'hello'.repeat(2) // "hellohello"
'na'.repeat(0) // ""

```

- 参数如果是小数，会被取整(向下取整)

```js
'test'.repeat(2.9) // "testtest"
```

- 如果repeat的参数是负数或者Infinity，会报错。

```js
// Infinity 无穷
'na'.repeat(Infinity)
// RangeError
'na'.repeat(-1)
// RangeError
```

- **如果参数是 0 到-1 之间的小数，则等同于 0**，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。

```js
'na'.repeat(-0.9) // ""

// 参数NaN等同于 0。
'na'.repeat(NaN) // ""

```

- 如果repeat的参数是字符串，则会先转换成数字。

```js

'na'.repeat('na') // ""
'na'.repeat('3') // "nanana"

```

### padStart()、padEnd()

ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。

- padStart()用于头部补全
- padEnd()用于尾部补全

```js
// 头部补齐
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

// 尾部补齐
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

```

padStart()和padEnd()一共接受两个参数：

- 第一个参数是字符串补全生效的最大长度

- 第二个参数是用来补全的字符串。

在实际使用过程中，会存在如下情况：

- **如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串**

```js
'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx

```

- **如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。**

```js
'abc'.padStart(10, '0123456789')
// '0123456abc'
```

- **如果省略第二个参数，默认使用空格补全长度。**

```js

'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '
```

**padStart()的常见用途是为数值补全指定位数** ，下面代码生成 10 位的数值字符串。

```js
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"
```

另一个用途是提示字符串格式。

```js
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12

```

### trimStart()、trimEnd()

ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与trim()一致。

- trimStart()消除字符串头部的空格
- trimEnd()消除尾部的空格

它们返回的都是新字符串，不会修改原始字符串。

```js
// 定义
const s = '  abc  ';

s.trim() // "abc"
s.trimStart() // "abc  "
s.trimEnd() // "  abc

// 原始字符串不变
console.log(s)  // "  abc  " 

```

**除了空格键，这两个方法对字符串头部（或尾部）的 tab 键、换行符等不可见的空白符号也有效。**

浏览器还部署了额外的两个方法：

- trimLeft()是trimStart()的别名
- trimRight()是trimEnd()的别名

### matchAll()

matchAll()方法返回一个正则表达式在当前字符串的**所有匹配**

### replaceAll()

**字符串的实例方法replace()只能替换第一个匹配。**

```js
'aabbcc'.replace('b', '_')
// 'aa_bcc

```

如果要替换所有的匹配，不得不使用正则表达式的g修饰符。

```js
// 全部匹配
'aabbcc'.replace(/b/g, '_')
// 'aa__cc'
```

正则表达式毕竟不是那么方便和直观，**ES2021 引入了replaceAll()方法**，可以一次性替换所有匹配。

```js
// 全局匹配
'aabbcc'.replaceAll('b', '_')
// 'aa__cc'
```

用法与replace()相同，返回一个新字符串，不会改变原字符串。

```js
String.prototype.replaceAll(searchValue, replacement)

```

**`searchValue`是搜索模式，可以是一个字符串，也可以是一个全局的正则表达式（带有`g`修饰符）。
如果`searchValue`是一个不带有`g`修饰符的正则表达式，`replaceAll()`会报错。与`replace()`不同。**

```js
// 不报错
'aabbcc'.replace(/b/, '_')

// /b/不带有g修饰符，会导致replaceAll()报错。
'aabbcc'.replaceAll(/b/, '_')
```

**replaceAll()的第二个参数replacement是一个字符串，表示替换的文本，其中可以使用一些特殊字符串。**

- $&：匹配的子字符串。
- $`：匹配结果前面的文本。
- $'：匹配结果后面的文本。
- $n：匹配成功的第n组内容，n是从1开始的自然数。这个参数生效的前提是，第一个参数必须是正则表达式。
- $$：指代美元符号$。

```js
// $& 表示匹配的字符串，即`b`本身
// 所以返回结果与原字符串一致
'abbc'.replaceAll('b', '$&')
// 'abbc'

// $` 表示匹配结果之前的字符串
// 对于第一个`b`，$` 指代`a`
// 对于第二个`b`，$` 指代`ab`
'abbc'.replaceAll('b', '$`')
// 'aaabc'

// $' 表示匹配结果之后的字符串
// 对于第一个`b`，$' 指代`bc`
// 对于第二个`b`，$' 指代`c`
'abbc'.replaceAll('b', `$'`)
// 'abccc'

// $1 表示正则表达式的第一个组匹配，指代`ab`
// $2 表示正则表达式的第二个组匹配，指代`bc`
'abbc'.replaceAll(/(ab)(bc)/g, '$2$1')
// 'bcab'

// $$ 指代 $
'abc'.replaceAll('b', '$$')
// 'a$c'

```

**replaceAll()的第二个参数replacement也可以是一个函数，该函数的返回值将替换掉第一个参数searchValue匹配的文本。**

```js
// 第二个参数是一个函数，该函数的返回值会替换掉所有b的匹配。
'aabbcc'.replaceAll('b', () => '_')
// 'aa__cc'
```

**这个替换函数可以接受多个参数**

- 第一个参数是捕捉到的匹配内容
- 第二个参数捕捉到是组匹配（有多少个组匹配，就有多少个对应的参数）
- 最后还可以添加两个参数，倒数第二个参数是捕捉到的内容在整个字符串中的位置，最后一个参数是原字符串。

```js
const str = '123abc456';
const regex = /(\d+)([a-z]+)(\d+)/g;

function replacer(match, p1, p2, p3, offset, string) {
  return [p1, p2, p3].join(' - ');
}

str.replaceAll(regex, replacer)
// 123 - abc - 456


```

上面例子中，正则表达式有三个组匹配，所以replacer()函数的第一个参数match是捕捉到的匹配内容（即字符串123abc456），后面三个参数p1、p2、p3则依次为三个组匹配。

## 数值

### Number.isFinite() VS Number.isNaN()

ES6 在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法

`Number.isFinite()`用来检查一个数值是否为有限的（`finite`），即不是Infinity。

```js
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false
```

**如果参数类型不是数值，Number.isFinite一律返回false**

`Number.isNaN()`用来检查一个值是否为`NaN`(Not A Number)。

```js
Number.isNaN(NaN) // true
Number.isNaN(15) // false
Number.isNaN('15') // false
Number.isNaN(true) // false
Number.isNaN(9 / NaN) // true
Number.isNaN('true' / 0) // true
Number.isNaN('true' / 'true') // true
```

如果参数类型不是`NaN`，`Number.isNaN`一律返回`false`。

#### 重要区别

> 与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()
> 将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()
> 只有对于NaN才返回true，非NaN一律返回false。

```js

isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false
Number.isNaN(1) // false

```

### Number.parseInt() VS Number.parseFloat()

ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。

```js
// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45
```

**逐步减少全局性方法，使得语言逐步模块化。**

```js
Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true
```

### Number.isInteger()

`Number.isInteger()`用来判断一个数值是否为整数。

```js
Number.isInteger(25) // true
Number.isInteger(25.1) // false

// 整数和浮点数采用的是同样的储存方法
Number.isInteger(25) // true
Number.isInteger(25.0) // true
```

**JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。**

如果参数不是数值，`Number.isInteger`返回`false`。

```js
Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false
```

### Math 对象的扩展

#### Math.trunc()

`Math.trunc()`方法用于去除一个数的小数部分，返回整数部分

```js
Math.trunc(4.1) // 4
Math.trunc(4.9) // 4
Math.trunc(-4.1) // -4
Math.trunc(-4.9) // -4
Math.trunc(-0.1234) // -0
```

对于非数值，`Math.trunc`内部使用`Number`方法将其先转为数值

```js
Math.trunc('123.456') // 123
Math.trunc(true) //1
Math.trunc(false) // 0
Math.trunc(null) // 0
```

对于空值和无法截取整数的值，返回`NaN`。

```js
Math.trunc(NaN);      // NaN
Math.trunc('foo');    // NaN
Math.trunc();         // NaN
Math.trunc(undefined) // NaN
```

`Math.trunc()`的类似实现：

```js
Math.trunc = Math.trunc || function (x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};

```

#### Math.sign()

Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

- 参数为正数，返回+1；
- 参数为负数，返回-1；
- 参数为 0，返回0；
- 参数为-0，返回-0;
- 其他值，返回NaN。

如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。

```js
Math.sign('')  // 0
Math.sign(true)  // +1
Math.sign(false)  // 0
Math.sign(null)  // 0
Math.sign('9')  // +1
Math.sign('foo')  // NaN
Math.sign()  // NaN
Math.sign(undefined)  // NaN
```

Math.sign()的类似实现：

```js
// 判断正数、负数、还是零
Math.sign = Math.sign || function (x) {
  x = +x; // convert to a number
  if (x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};
```

#### Math.cbrt()

Math.cbrt()方法用于计算一个数的立方根。

```js
Math.cbrt(-1) // -1
Math.cbrt(0)  // 0
Math.cbrt(1)  // 1
Math.cbrt(2)  // 1.2599210498948732
```

对于非数值，Math.cbrt()方法内部也是先使用Number()方法将其转为数值。

```js
Math.cbrt('8') // 2
Math.cbrt('hello') // NaN
```

`Math.cbrt()`类似实现：

```js
// 计算一个数的立方根
Math.cbrt = Math.cbrt || function (x) {
  var y = Math.pow(Math.abs(x), 1 / 3);
  return x < 0 ? -y : y;
};
```

#### Math.hypot()

Math.hypot方法返回所有参数的平方和的平方根。

```js

// 3 的平方加上 4 的平方，等于 5 的平方。
Math.hypot(3, 4);        // 5
Math.hypot(3, 4, 5);     // 7.0710678118654755
Math.hypot();            // 0
Math.hypot(NaN);         // NaN
Math.hypot(3, 4, 'foo'); // NaN
Math.hypot(3, 4, '5');   // 7.0710678118654755
Math.hypot(-3);          // 3
```

如果参数不是数值，Math.hypot方法会将其转为数值。只要有一个参数无法转为数值，就会返回 NaN。

#### 指数运算符

ES2016 新增了一个指数运算符（**）。

```js
2 ** 2 // 4
2 ** 3 // 8
```

**这个运算符是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。**

```js

// 首先计算的是第二个指数运算符，而不是第一个
// 相当于 2 ** (3 ** 2)
2 ** 3 ** 2
// 512
```

指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。

```js
let a = 1.5;
a **= 2;
// 等同于 a = a * a;

let b = 4;
b **= 3;
// 等同于 b = b * b * b;
```

## 函数

### 参数的默认值

ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。

```js
function log(x, y) {
  y = y || 'World';
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World

// ES6中可以
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

```

通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。

```js

if (typeof y === 'undefined') {
  y = 'World';
}

```

**参数变量是默认声明的，不能用let或const再次声明，否则会报错。**

使用参数默认值时，函数不能有同名参数

```js
// 不报错
function test(x, x, y) {
  // ...
}

// 函数同名报错
function test(x, x, y = 1) {
  // ...
}
```

另外，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。**也就是说，参数默认值是惰性求值的。**

```js
let x = 99;

function add(p = x + 1) {
  console.log(p);
}

add() // 100

// 修改变量值
x = 100;
add() // 101
```

注意：默认p不是等于100

#### 与解构赋值默认值结合使用

参数默认值可以与解构赋值的默认值，结合起来使用。

```js
function add({x, y = 5}) {
  console.log(x, y);
}

add({}) // undefined 5
add({x: 1}) // 1 5
add({x: 1, y: 2}) // 1 2
add() // TypeError: Cannot read property 'x' of undefined
```

如果函数`add`调用时没提供参数，变量x和y就不会生成，从而报错。通过提供函数参数的默认值，就可以避免这种情况。

```js

// 提供默认值进行解构
function add({x, y = 5} = {}) {
  console.log(x, y);
}

add() // undefined 5

```

#### 参数默认值的位置

通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。*
*如果非尾部的参数设置默认值，实际上这个参数是没法省略的。**

```js
// 存在默认值不是尾参数
function test(x = 1, y) {
  return [x, y];
}

test() // [1, undefined]
test(2) // [2, undefined]
test(, 1) // 报错
test(undefined, 1) // [1, 1]

```

显式输入`undefined`,配合解构的原理，可以省略有默认值的参数

**如果传入`undefined`，将触发该参数等于默认值，`null`则没有触发默认值。**

```js
function test(x = 5, y = 6) {
  console.log(x, y);
}

test(undefined, null)
// 5 null
```

### length 属性

指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

```js

(function (a) {
}).length // 1
  (function (a = 5) {
  }).length // 0
  (function (a, b, c = 5) {
  }).length // 2

```

`length`属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。比如，上面最后一个函数，定义了 `3`
个参数，其中有一个参数c指定了默认值，因此`length`属性等于`3`减去`1`，最后得到`2`

```js
(function (...args) {
}).length // 0
```

`length`属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。

**如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。**

```js
(function (a = 0, b, c) {
}).length // 0
  (function (a, b = 1, c) {
  }).length // 1
```

#### 作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。*
*这种语法行为，在不设置参数默认值时，是不会出现的。**

```js
var x = 1;

function add(x, y = x) {
  // 默认值变量x指向第一个参数x，而不是全局变量x
  console.log(y);
}

add(2) // 2
```

上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。

```js
let x = 1;

function f(y = x) {
  let x = 2;
  console.log(y);
}

f() // 1
```

上面代码中，函数f调用时，参数y = x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。函数调用时，函数体内部的局部变量x影响不到默认值变量x。

```js

// 此时全局变量x不存在，就会报错。
function f(y = x) {
  let x = 2;
  console.log(y);
}

f() // ReferenceError: x is not defined
```

上面代码中，参数`x = x`形成一个单独作用域。实际执行的是`let x = x`，由于暂时性死区的原因，这行代码会报错`x未定义`。

**如果参数的默认值是一个函数，该函数的作用域也遵守这个规则**

```js
let foo = 'outer';

function bar(func = () => foo) {
  let foo = 'inner';
  console.log(func());
}

bar(); // outer
```

上面代码中，函数`bar`的参数`func`的默认值是一个匿名函数，返回值为变量`foo`
。函数参数形成的单独作用域里面，并没有定义变量`foo`，所以`foo`指向外层的全局变量`foo`，因此输出`outer`。

```js

function bar(func = () => foo) {
  let foo = 'inner';
  console.log(func());
}

bar() // ReferenceError: foo is not defined

```

上面代码中，匿名函数里面的`foo`指向函数外层，但是函数外层并没有声明变量`foo`，所以就报错了。

```js
var x = 1;

function foo(x, y = function () {
  x = 2;
}) {
  var x = 3;
  y();
  console.log(x);
}

foo() // 3
x // 1

```

上面代码中，函数`foo`的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量`y`，`y`
的默认值是一个匿名函数。这个匿名函数内部的变量`x`，指向同一个作用域的第一个参数x。函数`foo`内部又声明了一个内部变量`x`
，该变量与第一个参数`x`由于不是同一个作用域，所以不是同一个变量，因此执行`y`后，内部变量`x`和外部全局变量x的值都没变。

```js
var x = 1;

function foo(x, y = function () {
  x = 2;
}) {
  x = 3;
  y();
  console.log(x);
}

foo() // 2
x // 1
```

如果将`var x = 3`的`var`去除，函数`foo`的内部变量`x`就指向第一个参数`x`，与匿名函数内部的`x`是一致的，所以最后输出的就是`2`
，而外层的全局变量`x`依然不受影响

### rest 参数

`ES6` 引入 `rest` 参数（形式为`...`变量名），用于获取函数的多余参数，这样就不需要使用`arguments`对象了。`rest`
参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

```js
// 利用 rest 参数，可以向该函数传入任意数目的参数。
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```

rest 参数代替arguments变量

 ```js
 // arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
 ```

**rest 参数的写法更自然也更简洁。**

`arguments`对象不是数组，而是一个类似数组的对象。所以为了使用数组的方法，必须使用`Array.prototype.slice.call`先将其转为数组。rest
参数就不存在这个问题，它就是一个真正的数组，数组特有的方法都可以使用。

```js

function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
    console.log(item);
  });
}

var a = [];
push(a, 1, 2, 3)

```

**注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。**

```js
(function (a) {
}).length  // 1
  (function (...a) {
  }).length  // 0
  (function (a, ...b) {
  }).length  // 1
```

**函数的length属性，不包括 rest 参数。**

### 严格模式

从 ES5 开始，函数内部可以设定为严格模式。

```js
function doSomething(a, b) {
  'use strict';
  // code  ES5中是被允许的
}
```

ES2016 做了一点修改，**ES2016中规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。
**

```js

// 报错
function doSomething(a, b = a) {
  'use strict';
  // code
}

// 报错
const doSomething = function ({a, b}) {
  'use strict';
  // code
};

// 报错
const doSomething = (...a) => {
  'use strict';
  // code
};

const obj = {
  // 报错
  doSomething({a, b}) {
    'use strict';
    // code
  }
```

函数内部的严格模式，同时适用于函数体和函数参数。但是，函数执行的时候，先执行函数参数，然后再执行函数体。这样就有一个不合理的地方，只有从函数体之中，才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。

### name 属性

函数的name属性，返回该函数的函数名。

```js
//  函数
function test() {
  // ...code
}

test.name // “test”

```

ES6 对这个属性的行为做出了一些修改，如果将一个匿名函数赋值给一个变量：

- ES5 的name属性，会返回空字符串

- ES6 的name属性会返回实际的函数名。

```js
// 匿名函数
var f = function () {
};

// ES5
f.name // ""

// ES6
f.name // "f"
```

如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。

```js
const bar = function test() {
};

// ES5
bar.name // "test"

// ES6
bar.name // "test"
```

**Function构造函数返回的函数实例，name属性的值为anonymous。**

```js
(new Function).name // "anonymous"
```

bind返回的函数，name属性值会加上bound前缀。

```js
// 定义函数
function foo() {

};

foo.bind({}).name // "bound foo"

  (function () {
  }).bind({}).name // "bound "
```

### 箭头函数

ES6 允许使用“箭头”（=>）定义函数。

```js
var f = v => v;

// 等同于
var f = function (v) {
  return v;
};

```

如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

```js
var f = () => 5;

// 等同于
var f = function () {
  return 5
};

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function (num1, num2) {
  return num1 + num2;
};
```

由于**大括号被解释为代码块**，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

```js
// 报错
let getItem = id => {
  id: id, name
:
  "tom"
};

// 不报错
let getItem = id => ({id: id, name: "tom"});

```

下面是一种特殊情况，虽然可以运行，但会得到错误的结果。

```js
let foo = () => {
  a: 1
};
foo() // undefined
```

原始意图是返回一个对象`{ a: 1 }`，但是由于引擎认为大括号是代码块，所以执行了一行语句`a: 1`。这时，`a`
可以被解释为语句的标签，因此实际执行的语句是`1`;，然后函数就结束了，没有返回值。

如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。

```js

// void运算符
let fn = () => void doesNotReturn();
```

**`void` 是一元运算符，它可以出现在任意类型的操作数之前执行操作数，却忽略操作数的返回值，返回一个 `undefined`**

箭头函数可以与变量解构结合使用。

```js
const full = ({first, last}) => first + ' ' + last;

// 等同于
function full(person) {
  return person.first + ' ' + person.last;
}

// 模式字符串
const full = ({first, last}) => `${first}${last}`
```

**箭头函数的一个用处是简化回调函数。**

```js
// 正常函数写法
[1, 2, 3].map(function (x) {
  return x * x;
});

// 箭头函数写法
[1, 2, 3].map(x => x * x);


// 正常函数写法
var result = values.sort(function (a, b) {
  return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);


// rest 参数与箭头函数结合
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5)
// [1,2,3,4,5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5)
// [1,[2,3,4,5]]

```

箭头函数使用需要注意:

- 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。

- 不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

- 不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

- 不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数。

**`this`对象的指向是可变的，但是在箭头函数中，this对象的指向是固定的。**

```js
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

// call()函数修改this指向
foo.call({id: 42});
// id: 42
```

`setTimeout()`的参数是一个箭头函数，这个箭头函数的定义生效是在`foo`函数生成时，而它的真正执行要等到 `100`
毫秒后。如果是普通函数，执行时`this`应该指向全局对象`window`，这时应该输出`21`。但是，**箭头函数导致this总是指向函数定义生效时所在的对象
**（本例是`{id: 42}`），所以打印出来的是`42`。

**箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域。**

```js
function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);
// s1: 3
// s2: 0

```

`Timer`函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的`this`绑定定义时所在的作用域（即`Timer`
函数），后者的`this`指向运行时所在的作用域（即全局对象）。所以，`3100` 毫秒之后，`timer.s1`被更新了 `3` 次，而`timer.s2`一次都没更新。

**箭头函数可以让this指向固定化，这种特性很有利于封装回调函数**

```js
var handler = {
  id: '123456',

  init: function () {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },

  doSomething: function (type) {
    console.log('Handling ' + type + ' for ' + this.id);
  }
};
```

`init`方法中，使用了箭头函数，这导致这个箭头函数里面的this，总是指向handler对象。否则，回调函数运行时，this.doSomething这一行会报错，因为此时this指向document对象。

**`this`指向的固定化，并不是因为箭头函数内部有绑定`this`的机制，实际原因是箭头函数根本没有自己的`this`，导致内部的`this`
就是外层代码块的`this`。正是因为它没有`this`，所以也就不能用作构造函数。**

```js
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

```

只有一个`this`，就是函数`foo`的`this`，所以`t1`、`t2`、`t3`
都输出同样的结果。因为所有的内层函数都是箭头函数，都没有自己的`this`，它们的this其实都是最外层`foo`函数的`this`。

除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：

- arguments
- super
- new.target

```js
function foo() {
  setTimeout(() => {
    console.log('args:', arguments);
  }, 100);
}

foo(2, 4, 6, 8)
// args: [2, 4, 6, 8]
```

上面代码中，箭头函数内部的变量`arguments`，其实是函数`foo`的`arguments`变量。

由于箭头函数没有自己的`this`，所以当然也就不能用`call()`、`apply()`、`bind()`这些方法去改变`this`的指向。

```js
// 箭头函数没有自己的this
// bind方法无效，内部的this指向外部的this。

(function () {
  return [
    (() => this.x).bind({x: 'inner'})()
  ];
}).call({x: 'outer'});
// ['outer']
```

### Function.prototype.toString()

`ES2019` 对函数实例的`toString()`方法做出了修改

`toString()`方法返回函数代码本身，以前会省略注释和空格。

```js
// 定义函数【注意注释】
function /* foo comment */ foo() {
}

foo.toString()
// function foo() {}

```

函数`foo`的原始代码包含注释，函数名`foo`和圆括号之间有空格，但是`toString()`方法都把它们省略了。

**修改后的`toString()`方法，明确要求返回一模一样的原始代码。**

```js
function /* foo comment */ foo() {
}

foo.toString()
// "function /* foo comment */ foo () {}"
```

### catch 命令的参数省略

JavaScript 语言的`try...catch`结构，以前明确要求`catch`命令后面必须跟参数，接受try代码块抛出的错误对象。

```js
try {
  // ...
} catch (err) {
  // 处理错误
}
```

catch命令后面带有参数err。

但是，很多时候，catch代码块可能用不到这个参数。但是，为了保证语法正确，还是必须写。**ES2019 做出了改变，允许catch语句省略参数。
**

```js

try {
  // ...
} catch {
  // ...
}
```

## 数组

### 扩展运算符的使用

扩展运算符（`spread`）是三个点（`...`）。它好比 `rest` 参数的逆运算，**将一个数组转为用逗号分隔的参数序列**。

```js
console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5
```

主要用于函数调用。

```js
// 将数组转化为逗号分隔的参数序列
function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42

```

扩展运算符与正常的函数参数可以结合使用，非常灵活。

```js
function test(v, w, x, y, z) {
}

const args = [0, 1];

// 调用
test(-1, ...args, 2, ...[3]);
```

扩展运算符后面还可以放置表达式。

```js

// 结合三目运算
const arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];
```

**如果扩展运算符后面是一个空数组，则不产生任何效果。**

```js
[...[], 1]
// [1]
```

**只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。**

```text

// 扩展运算符所在的括号不是函数调用。

(...[1, 2])
// Uncaught SyntaxError: Unexpected number

console.log((...[1, 2]))
// Uncaught SyntaxError: Unexpected number


// 正常函数调用情况
console.log(...[1, 2])
// 1 2

```

#### 替代函数的 apply 方法

由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。

```js
// ES5 的写法
function test(x, y, z) {
  // ...
}

// 实际调用
var args = [0, 1, 2];
test.apply(null, args);


// ES6的写法
function test(x, y, z) {
  // ...
}

// 实际调用
let args = [0, 1, 2];
test(...args);


// 应用Math.max方法的简化应用

// ES5 的写法
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])

// 等同于
Math.max(14, 3, 77);
```

由于 JavaScript 不提供求数组最大元素的函数，所以只能**套用`Math.max`函数，将数组转为一个参数序列，然后求最大值。**
有了扩展运算符以后，就可以直接用`Math.max`了。

```js
// ES5的 写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6 的写法
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1.push(...arr2);


// ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]))
// ES6
new Date(...[2015, 1, 1]);
```

#### 扩展运算符的应用

- 复制数组
- 合并数组
- 与解构赋值结合
- 字符串
- 实现了 Iterator 接口的对象
- `Map` 和 Set 结构，Generator 函数

##### 复制数组

**数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组**

```js
const a1 = [1, 2];
const a2 = a1;


a2[0] = 2;
a1 // [2, 2]
```

a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。

```js
// ES5 只能用变通方法来复制数组。
const a1 = [1, 2];
const a2 = a1.concat();

a2[0] = 2;
a1 // [1, 2]

```

a1会返回原数组的克隆，再修改a2就不会对a1产生影响。

```js
// 扩展运算符提供了复制数组的简便写法【都是克隆】。
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
// 写法二
const [...a2] = a1;
```

##### 合并数组

扩展运算符提供了数组合并的新写法。

```js
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

// ES5 的合并数组
arr1.concat(arr2, arr3);
// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 的合并数组
[...arr1, ...arr2, ...arr3]
// [ 'a', 'b', 'c', 'd', 'e' ]
```

不过，这两种方法都是浅拷贝，使用的时候需要注意。

```js
const a1 = [{foo: 1}];
const a2 = [{bar: 2}];

const a3 = a1.concat(a2);
const a4 = [...a1, ...a2];

a3[0] === a1[0] // true
a4[0] === a1[0] // true
```

a3和a4是用两种不同方法合并而成的新数组，但是它们的成员都是对原数组成员的引用，这就是浅拷贝。**如果修改了引用指向的值，会同步反映到新数组。
**

#### 与解构赋值结合

扩展运算符可以与解构赋值结合起来，用于生成数组。

```text
// ES5
a = list[0], rest = list.slice(1)
// ES6
[a, ...rest] = list

const [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest  // [2, 3, 4, 5]

const [first, ...rest] = [];
first // undefined
rest  // []

const [first, ...rest] = ["foo"];
first  // "foo"
rest   // []
```

如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

```text
const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错
```

#### 字符串

扩展运算符还可以将字符串转为真正的数组。

```js
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```

#### 实现了 Iterator 接口的对象

任何定义了遍历器（Iterator）接口的对象（参阅 Iterator 一章），都可以用扩展运算符转为真正的数组

```js
let nodeList = document.querySelectorAll('div');
let array = [...nodeList];
```

`querySelectorAll`方法返回的是一个`NodeList`对象。**它不是数组，而是一个类似数组的对象**
。这时，扩展运算符可以将其转为真正的数组，原因就在于`NodeList`对象实现了`Iterator` 。

```js
// arrayLike是一个类似数组的对象，但是没有部署 Iterator 接口
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// TypeError: Cannot spread non-iterable object.
let arr = [...arrayLike];

```

对于那些没有部署 Iterator 接口的类似数组的对象，扩展运算符就无法将其转为真正的数组。

#### `Map` 和 Set 结构，Generator 函数

**扩展运算符内部调用的是数据结构的 Iterator 接口**，因此只要具有 Iterator 接口的对象，都可以使用扩展运算符，比如 `Map` 结构。

```js
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]
```

**Generator 函数运行后，返回一个遍历器对象，因此也可以使用扩展运算符。**

```js
const go = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...go()] // [1, 2, 3]
```

如果对没有 Iterator 接口的对象，使用扩展运算符，将会报错。

```js
const obj = {a: 1, b: 2};
// TypeError: Cannot spread non-iterable object
let arr = [...obj]; 
```

### Array.from()

`Array.from`方法用于将两类对象转为真正的数组:

- 类似数组的对象（array-like object）
- 可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 `Map`）

```js
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

实际应用中，常见的类似数组的对象是 `DOM` 操作返回的 `NodeList` 集合，以及函数内部的`arguments`对象。`Array.from`
都可以将它们转为真正的数组

```js
// NodeList对象
let ps = document.querySelectorAll('p');
Array.from(ps).filter(p => {
  return p.textContent.length > 100;
});

// arguments对象
function foo() {
  // 转化成数组
  var args = Array.from(arguments);
  // ...
}

```

**只要是部署了 `Iterator` 接口的数据结构，`Array.from`都能将其转为数组。**

```js
// 字符串和 Set 结构都具有 Iterator 接口
Array.from('hello')
// ['h', 'e', 'l', 'l', 'o']

let namesSet = new Set(['a', 'b'])
Array.from(namesSet) // ['a', 'b']
```

**如果参数是一个真正的数组，Array.from会返回一个一模一样的新数组。**

```js
Array.from([1, 2, 3])
// [1, 2, 3]
```

**扩展运算符（...）也可以将某些数据结构转为数组。**

```js
// arguments对象
function foo() {
  // 扩展运算符，效果和Array.from一样
  const args = [...arguments];
}

```

**`Array.from`方法还支持类似数组的对象。所谓类似数组的对象，本质特征只有一点，即必须有`length`属性。因此，任何有`length`
属性的对象，都可以通过`Array.from`方法转为数组，而此时扩展运算符就无法转换。**

```js
Array.from({length: 3});
// [ undefined, undefined, undefined ]
```

`Array.from`返回了一个具有三个成员的数组，每个位置的值都是`undefined`。扩展运算符转换不了这个对象

对于还没有部署该方法的浏览器，可以用`Array.prototype.slice`方法替代。

```js

// 兼容存在Array.from情况
const toArray = (() =>
    Array.from ? Array.from : obj => [].slice.call(obj)
)();
```

**`Array.from`还可以接受第二个参数，作用类似于数组的`map`方法，用来对每个元素进行处理，将处理后的值放入返回的数组。**

```js
Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]
```

`Array.from()`可以将各种值转为真正的数组，并且还提供`map`
功能。这实际上意味着，只要有一个原始的数据结构，你就可以先对它的值进行处理，然后转成规范的数组结构，进而就可以使用数量众多的数组方法。

```js
Array.from({length: 2}, () => 'jack')
// ['jack', 'jack']
```

上面代码中，Array.from的第一个参数指定了第二个参数运行的次数。这种特性可以让该方法的用法变得非常灵活。

`Array.from()`的另一个应用是，将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种 `Unicode` 字符，可以避免
JavaScript 将大于`\uFFFF`的 `Unicode` 字符，算作两个字符的 `bug`。

```js
function countSymbols(string) {
  return Array.from(string).length;
}

```

### Array.of()

**`Array.of()`方法用于将一组值，转换为数组。**

```js
Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1
```

弥补数组构造函数`Array()`的不足。因为参数个数的不同，会导致`Array()`的行为有差异。

```js
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```

`Array()`方法没有参数、一个参数、三个参数时，返回的结果都不一样。

- 只有当参数个数不少于 2 个时，`Array()`才会返回由参数组成的新数组。
- 参数只有一个正整数时，实际上是指定数组的长度。

`Array.of()`基本上可以用来替代`Array()`或`new Array()`，并且不存在由于参数不同而导致的重载,行为非常统一。

```js
Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]
```

**`Array.of()`总是返回参数值组成的数组。如果没有参数，就返回一个空数组。**

`Array.of()`方法可以用下面的代码模拟实现。

```js
function ArrayOf() {
  // arguments 参数数组
  return [].slice.call(arguments);
}
```

### copyWithin()

数组实例的`copyWithin()`方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。

```js
Array.prototype.copyWithin(target, start = 0, end = this.length)
```

接受三个参数:

- target（必需）：从该位置开始替换数据。如果为负值，表示倒数。
- start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。
- end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。

```text
[1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]

// 将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1)
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
[].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署 TypedArray 的 copyWithin 方法的平台
// 需要采用下面的写法
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]
```

### find() VS findIndex()

数组实例的`find`
方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为`true`
的成员，然后返回该成员。如果没有符合条件的成员，则返回`undefined`。

```js
[1, 4, -5, 10].find((n) => n < 0)
// -5

  [1, 5, 10, 15].find(function (value, index, arr) {
  return value > 9;
}) // 10
```

**find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。**

数组实例的findIndex方法的用法与find方法非常类似，**返回第一个符合条件的数组成员的位置**
，如果所有成员都不符合条件，则返回`-1`。

```js
// 返回第一个符合条件的数组成员的位置
[1, 5, 10, 15].findIndex(function (value, index, arr) {
  return value > 9;
}) // 2
```

两个方法都可以接受第二个参数，用来绑定回调函数的this对象。

```js
// 回调函数中的this对象指向person对象。
function f(v) {
  return v > this.age;
}

let person = {name: 'John', age: 20};
[10, 12, 26, 15].find(f, person);    // 26
```

另外，两个方法都可以发现NaN，弥补了数组的indexOf方法的不足

```js
[NaN].indexOf(NaN)
// -1

  [NaN].findIndex(y => Object.is(NaN, y))
// 0
```

**indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。**

### fill()

`fill`方法使用给定值，填充一个数组。

```js
['a', 'b', 'c'].fill(7)
// [7, 7, 7]

new Array(3).fill(7)
// [7, 7, 7]

```

数组中已有的元素，会被全部抹去。

```js
// fill方法还可以接受第二个和第三个参数
// startIndex指定填充的起始位置
// endIndex指定填充的结束位置
fill(value, startIndex, endIndex)

  ['a', 'b', 'c'].fill(7, 1, 2)
// ['a', 7, 'c']
```

**如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。**

```js
let arr = new Array(3).fill({name: "Mike"});
arr[0].name = "Ben";
arr
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

let arr = new Array(3).fill([]);
arr[0].push(5);
arr
// [[5], [5], [5]]
```

### entries()、keys() 、 values()

ES6 提供三个新的方法,用于遍历数组

- `entries()` 对键值对的遍历。
- `keys()`  对键名的遍历
- `values()`  对键值的遍历

都返回一个遍历器对象【Iterator】，可以用`for...of`循环进行遍历

```js
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。

```js
let letter = ['a', 'b', 'c'];
let entries = letter.entries();
console.log(entries.next().value); // [0, 'a']
console.log(entries.next().value); // [1, 'b']
console.log(entries.next().value); // [2, 'c']
```

### includes()

`Array.prototype.includes`方法返回一个布尔值，表示某个数组是否包含给定的值.

```js
[1, 2, 3].includes(2)     // true
  [1, 2, 3].includes(4)     // false
  [1, 2, NaN].includes(NaN) // true
```

与字符串的includes方法类似。ES2016 引入了该方法。

```js

[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true

```

**第二个参数表示搜索的起始位置，默认为0**。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。

通常使用数组的`indexOf`法，也能检查是否包含某个值。

```js
if (arr.indexOf(el) !== -1) {
  // ...
}
```

`indexOf`方法有两个缺点:

- 不够语义化，它的含义是找到参数值的第一个出现位置，要去比较是否不等于-1，表达起来不够直观
- 内部使用严格相等运算符（`===`）进行判断，这会导致对NaN的误判。

```js

// indexof存在NaN误判
[NaN].indexOf(NaN)
// -1

// includes正常
  [NaN].includes(NaN)
// true
```

类似功能替代方案：

```js
const contains = (() =>
    Array.prototype.includes
      ? (arr, value) => arr.includes(value)
      : (arr, value) => arr.some(el => el === value)
)();
contains(['foo', 'bar'], 'baz'); // => false
```

`Map` 和 `Set` 数据结构有一个`has`方法，需要注意与`includes`区分。

- **`Map` 结构的has方法，是用来查找键名的**，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target,
  propertyKey)。
- **Set 结构的has方法，是用来查找值的**，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。

### flat()、flatMap()

数组的成员有时还是数组，`Array.prototype.flat()`用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```js

// flat()方法将子数组的成员取出来，添加在原来的位置。
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]
```

**flat()默认只会“拉平”一层**，如果想要“拉平”多层的嵌套数组，可以将flat()方法的参数写成一个整数，表示想要拉平的层数，默认为1。

```js

// 默认拉平一层
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]

// 拉平嵌套两层得嵌套数组
  [1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]

```

如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。

```js
// 不管有多少层嵌套，都要转成一维数组
[1, [2, [3]]].flat(Infinity)
// [1, 2, 3]

```

如果原数组有空位，flat()方法会跳过空位。

```js
[1, 2, , 4, 5].flat()
// [1, 2, 4, 5]
```

**flatMap()方法对原数组的每个成员执行一个函数**（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()
方法。该方法返回一个新数组，不改变原数组。

```js
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

`flatMap()`只能展开一层数组

```js
// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
[1, 2, 3, 4].flatMap(x => [[x * 2]])
// [[2], [4], [6], [8]]
```

上面代码中，遍历函数返回的是一个双层的数组，但是默认只能展开一层，因此flatMap()返回的还是一个嵌套数组。

**`flatMap()`方法的参数是一个遍历函数，可以接受三个参数**

- 当前数组成员
- 当前数组成员的位置（从零开始）
- 原数组

```text

arr.flatMap(function callback(currentValue[, index[, array]]) {
  // ...
}[, thisArg])
```

**`flatMap()`方法还可以有第二个参数，用来绑定遍历函数里面的`this`。**

### 数组的空位

**数组的空位指，数组的某一个位置没有任何值**。比如，Array构造函数返回的数组都是空位。

```js
// 返回具有 3 个空位的数组。
Array(3) // [, , ,]
```

空位不是`undefined`，一个位置的值等于`undefined`，依然是有值的。**空位是没有任何值**，in运算符可以说明这一点。

```js
// 数组的 0 号位置是有值的
0 in [undefined, undefined, undefined] // true

// 数组的 0 号位置没有值
0 in [, , ,] // false
```

ES5和ES6中空位的区别比较可以参考：
<https://es6.ruanyifeng.com/#docs/array#%E6%95%B0%E7%BB%84%E7%9A%84%E7%A9%BA%E4%BD%8D>

### 扩展运算符

扩展运算符（spread）是三个点（...）,可以将数组转为用逗号分隔的参数序列

```js
console.log(...[1, 2, 3])
// 输出 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 输出 1 2 3 4 5

```

可以用在函数调用这样的场景下

```js

function push(arr, ...items) {
  // 数组中添加元素
  arr.push(...items)
}

function add(x, y) {
  return x + y;
}

// 定于参数
const num = [4, 22]

// 调用

add(...num)

// 输出26

```

从上面的代码例子中可以看出，arr.push(...items)和add(...num)都是函数的调用，也都可以使用扩展运算符，**将数组变为参数序列**

```js
// 表达式
const arr = [
  ...(x > 0 ? ['a'] : []),
  'b'
]

// 如上，扩展运算符是空数组，则不产生任何效果
console.log([...[], 1])
// [1]

```

### 替代数组的apply()方法

> apply()方法可以将数组转为函数的参数

```js

// ES5
function f(x, y, z) {
  // ...
}

const arg = [0, 1, 2]

// 利用apply方法

f.apply(null, args)

// 而ES6中可以

f(...arg)

```

类似的也可以

```js
// ES5

Math.max.apply(null, [1, 2, 3])

// ES6 
Math.max(...[1, 2, 3])

// 上面个两个等价于

Math.max(1, 2, 3)

```

类似也可以实现元素添加数组到尾部

```js
const arr1 = [0, 1, 2]
const arr2 = [3, 4, 5]

// ES5 (apply()劫持属性)
Array.prototype.push.apply(arr1, arr2)

// 特别注意：Array的原型链上的push方法不能直接使用数组，需要用apply方法劫持变通

// ES6
arr1.push(...arr2)
```

### 简单应用

#### 合并数组

```text
let arr1=['a','b']
let arr2=['c']
let arr3=['d','e']
// ES5
[1,2].concat(more)
// eg
arr1.concat(arr2,arr3)
// 输出 ['a','b','c','d','e']

// ES6
[1,2,...more]
// eg:
[...arr1,...arr2,...arr3]
// 输出 ['a','b','c','d','e']

```

#### 解构赋值

> 与解构赋值的结合，可以帮助生成数组

```js
// ES5
const a = list[0]
const rest = list.slice(1)

// ES6
  [a,
...
rest
]
= list

const [first, ...rest] = [1, 2, 3, 4, 5]

first // 1
rest // [2,3,4,5]
```

#### 函数的返回值

> 在Javascript中，函数只能返回一个值，如果需要返回多个值，就通过返回对象或者数组来实现，拓展运算符提供了相对应的变通方法

```js
const fields = readDateFields(database);

// 间数据构造传入构造函数Date(),获取新值
const d = new Date(...fields)

```

#### 字符串

```js
[..."hello"]
// ['h','e','l','l','o']
```

## 对象

> 对象（object）是 JavaScript 最重要的数据结构

### 属性的简洁表示法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法

```js
// 属性名就是变量名, 属性值就是变量值
const foo = 'bar';
const baz = {foo};
baz // {foo: "bar"}

// 等同于
const baz = {foo: foo};
```

除了属性简写，方法也可以简写。

```js
function test(x, y) {
  return {x, y};
}

// 等同于
function test(x, y) {
  return {x: x, y: y};
}

test(1, 2) // Object {x: 1, y: 2}


const fc = {
  method() {
    return "Hello!";
  }
};

// 等同于
const fc = {
  method: function () {
    return "Hello!";
  }
};
```

CommonJS 模块输出一组变量，就非常合适使用简洁写法。

```js
let ms = {};

function getItem(key) {
  return key in ms ? ms[key] : null;
}

function setItem(key, value) {
  ms[key] = value;
}

function clear() {
  ms = {};
}

module.exports = {getItem, setItem, clear};
// 等同于
module.exports = {
  getItem: getItem,
  setItem: setItem,
  clear: clear
};
```

属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。

```js
const cart = {
  // 属性
  _wheels: 4,

  // 取值器
  get wheels() {
    return this._wheels;
  },
  // 赋值器
  set wheels(value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}
```

**注意，简写的对象方法不能用作构造函数，会报错**

```js
const obj = {
  test() {
    this.foo = 'bar';
  }
};
new obj.test() // 报错
```

上面代码中，`test`是一个简写的对象方法，所以`obj.test`不能当作构造函数使用。

### 属性名表达式

JavaScript 定义对象属性的两种方法

```js
// 方法一:直接用标识符作为属性名
obj.foo = true;

// 方法二:用表达式作为属性名
obj['a' + 'bc'] = 123;

```

如果使用字面量方式定义对象（使用大括号），在 ES5 中只能使用方法一（标识符）定义属性。

```js
var obj = {
  foo: true,
  abc: 123
};
```

ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

```js
let propKey = 'foo';

let obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
```

**表达式还可以用于定义方法名。**

```js
let obj = {
  ['h' + 'ello']() {
    return 'hi';
  }
};

obj.hello() // hi

```

注意，属性名表达式与简洁表示法，不能同时使用，会报错。

```js
// 报错
const foo = 'bar';
const bar = 'abc';
const baz = {[foo]};

// 正确
const foo = 'bar';
const baz = {[foo]: 'abc'};

```

注意，属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串`[object Object]`

```js
const keyA = {a: 1};
const keyB = {b: 2};

const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};

myObject // Object {[object Object]: "valueB"}
```

### 方法的 name 属性

函数的`name`属性，返回函数名。对象方法也是函数，因此也有`name`属性。

```js
const person = {
  sayName() {
    console.log('hello!');
  },
};

// 方法的name属性返回函数名（即方法名）
person.sayName.name   // "sayName"
```

如果对象的方法使用了取值函数（`getter`）和存值函数（`setter`），则name属性不是在该方法上面，而是该方法的属性的描述对象的`get`
和`set`属性上面，返回值是方法名前加上`get`和`set`

```js
const obj = {
  get foo() {
  },
  set foo(x) {
  }
};

obj.foo.name
// TypeError: Cannot read property 'name' of undefined


const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

descriptor.get.name // "get foo"
descriptor.set.name // "set foo"
```

**`Object.getOwnPropertyDescriptor`方法，返回某个对象属性的描述对象（ `descriptor` ）。**

有两种特殊情况:

- `bind`方法创造的函数，`name`属性返回`bound`加上原函数的名字

- `Function`构造函数创造的函数，`name`属性返回`anonymous`。

```js
(new Function()).name // "anonymous"

var doSomething = function () {
  // ...
};
doSomething.bind().name // "bound doSomething"
```

如果对象的方法是一个 `Symbol` 值，那么`name`属性返回的是这个 `Symbol` 值的描述。

```js
const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
  [key1]() {
  },
  [key2]() {
  },
};
obj[key1].name // "[description]"

// 没有Symbol描述，为空字符串
obj[key2].name // ""

```

### 属性的可枚举性和遍历

#### 可枚举性

对象的每个属性都有一个描述对象（`Descriptor`），用来控制该属性的行为。`Object.getOwnPropertyDescriptor`方法可以获取该属性的描述对象。

```js
let obj = {foo: 123};
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }

```

描述对象的`enumerable`属性，称为“可枚举性”，**如果该属性为`false`，就表示某些操作会忽略当前属性。**

目前，有四个操作会忽略`enumerable`为`false`的属性

- `for...in循环`：只遍历对象自身的和继承的可枚举的属性。
- `Object.keys()`：返回对象自身的所有可枚举的属性的键名。
- `JSON.stringify()`：只串行化对象自身的可枚举的属性。
- `Object.assign()`： 忽略`enumerable`为`false`的属性，只拷贝对象自身的可枚举的属性。【ES6新增】

**只有`for...in`会返回继承的属性，其他三个方法都会忽略继承的属性，只处理对象自身的属性。**

> 实际上，引入“可枚举”（`enumerable`）这个概念的最初目的，就是让某些属性可以规避掉for...in操作，不然所有内部属性和方法都会被遍历到。

```js
Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
// false

Object.getOwnPropertyDescriptor([], 'length').enumerable
// false
```

对象原型的toString方法，以及数组的length属性，就通过“可枚举性”，从而避免被for...in遍历到。

**ES6 规定，所有 Class 的原型的方法都是不可枚举的。**

```js
Object.getOwnPropertyDescriptor(class {
  foo() {
  }
}.prototype, 'foo').enumerable
// false
```

总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，只关心对象自身的属性。所以，**尽量不要用`for...in`
循环，而用`Object.keys()`代替。**

#### 属性的遍历

ES6 一共有 5 种方法可以遍历对象的属性

- `for...in`
- `Object.keys(obj)`
- `Object.getOwnPropertyNames(Obj)`
- `Object.getOwnPropertySymbols(obj)`
- `Reflect.ownKeys(obj)`

##### for...in

`for...in`循环遍历对象自身的和继承的可枚举属性（不含 `Symbol`属性）。

##### Object.keys(obj)

`Object.keys`返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

##### Object.getOwnPropertyNames(obj)

`Object.getOwnPropertyNames`返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

##### Object.getOwnPropertySymbols(obj)

`Object.getOwnPropertySymbols`返回一个数组，包含对象自身的所有 `Symbol` 属性的键名。

##### Reflect.ownKeys(obj)

`Reflect.ownKeys`返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 `Symbol` 或字符串，也不管是否可枚举。

**以上的 5 种方法遍历对象的键名，都遵守同样的属性遍历的次序规则。**

- 首先遍历所有数值键，按照数值升序排列。
- 其次遍历所有字符串键，按照加入时间升序排列。
- 最后遍历所有 `Symbol` 键，按照加入时间升序排列。

```js

// 排序规则：首先是数值属性2和10，其次是字符串属性b和a，最后是 Symbol 属性。
Reflect.ownKeys({[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0})
// ['2', '10', 'b', 'a', Symbol()]
```

### super 关键字

`this`关键字总是指向函数所在的当前对象，`ES6` 新增了另一个类似的关键字`super`，**指向当前对象的原型对象**。

```js

const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};


Object.setPrototypeOf(obj, proto);

// 对象obj.find()方法之中，通过super.foo引用了原型对象proto的foo属性。
obj.find() // "hello"

```

注意：Object.setPrototypeOf()，为现有对象设置原型，返回一个新对象，接收两个参数：

- 第一个是现有对象
- 第二是原型对象。

**注意，super关键字表示原型对象时，只能用在对象的方法之中，用在其他地方都会报错。**

```js
// 报错
const obj = {
  foo: super.foo
}

// 报错
const obj = {
  foo: () => super.foo
}

// 报错
const obj = {
  foo: function () {
    return super.foo
  }
}
```

上面三种`super`的用法都会报错，因为对于 `JavaScript` 引擎来说，这里的super都没有用在对象的方法之中。第一种写法是`super`
用在属性里面，第二种和第三种写法是super用在一个函数里面，然后赋值给`foo`属性。目前，只有对象方法的简写法可以让 `JavaScript`
引擎确认，定义的是对象的方法。

`JavaScript` 引擎内部，`super.foo`等同于`Object.getPrototypeOf(this).foo（属性）`
或`Object.getPrototypeOf(this).foo.call(this)`（方法）。

```js
const proto = {
  x: 'hello',
  foo() {
    console.log(this.x);
  },
};

const obj = {
  x: 'world',
  foo() {
    super.foo();
  }
}

Object.setPrototypeOf(obj, proto);

obj.foo() // "world"
```

上面代码中，`super.foo`指向原型对象`proto`的`foo`方法，但是绑定的`this`却还是当前对象`obj`，因此输出的就是`world`。

### 链判断运算符

如果读取对象内部的某个属性，往往需要判断一下该对象是否存在

```js
// 错误的写法
const firstName = message.body.user.firstName;

// 正确的写法
const firstName = (message
  && message.body
  && message.body.user
  && message.body.user.firstName) || 'default';
```

上面例子中，`firstName`属性在对象的第四层，所以需要判断四次，每一层是否有值。

**三元运算符?:也常用于判断对象是否存在。**

```js
const fooInput = myForm.querySelector('input[name=foo]')
const fooValue = fooInput ? fooInput.value : undefined
```

这样的层层判断非常麻烦,ES2020 引入了“链判断运算符”（optional chaining operator）`?.`，简化上面的写法。

```js
const firstName = message?.body?.user?.firstName || 'default';
const fooValue = myForm.querySelector('input[name=foo]')?.value
```

上面代码使用了`?.`运算符，直接在链式调用的时候判断，左侧的对象是否为`null`或`undefined`
。如果是的，就不再往下运算，而是返回`undefined`。

```js
// 判断对象方法是否存在，如果存在就立即执行
iterator.return?.()
```

`iterator.return`如果有定义，就会调用该方法，否则`iterator.return`直接返回`undefined`，不再执行`?.`后面的部分。

```js
if (myForm.checkValidity?.() === false) {
  // 表单校验失败
  return;
}
```

链判断运算符有三种用法:

- `obj?.prop` : 对象属性
- `obj?.[expr]` : 同上
- `func?.(...args)` : 函数或对象方法的调用

```js
a?.b
// 等同于
a == null ? undefined : a.b

a?.[x]
// 等同于
a == null ? undefined : a[x]

a?.b()
// 等同于
a == null ? undefined : a.b()

a?.()
// 等同于
a == null ? undefined : a()
```

特别注意后两种形式，如果`a?.b()`里面的`a.b`不是函数，不可调用，那么`a?.b()`是会报错的。`a?.()`也是如此，如果`a`不是`null`
或`undefined`，但也不是函数，那么`a?.()`会报错。

使用链判断运算符，有几个注意点：

- 短路机制
- delete运算符
- 括号的影响
- 报错场合
- 右侧不得为十进制数值

#### 短路机制

`?.`运算符相当于一种短路机制，只要不满足条件，就不再往下执行。**链判断运算符一旦为真，右侧的表达式就不再求值。**

#### delete 运算符

```js
delete a?.b
// 等同于
a == null ? undefined : delete a.b
```

如果a是`undefined`或`null`，会直接返回`undefined`，而不会进行`delete运算`。

#### 括号的影响

如果属性链有圆括号，链判断运算符对圆括号外部没有影响，只对圆括号内部有影响。

```js
(a?.b).c
  // 等价于
  (a == null ? undefined : a.b).c
```

**一般来说，使用`?.`运算符的场合，不应该使用圆括号。**

#### 报错场合

以下写法是禁止的，会报错。

```js
// 构造函数
new a?.()
new a?.b()

// 链判断运算符的右侧有模板字符串
a?.`{b}`
a?.b`{c}`

// 链判断运算符的左侧是 super
super?.()
super?.foo

// 链运算符用于赋值运算符左侧
a?.b = c
```

#### 右侧不得为十进制数值

为了保证兼容以前的代码，允许`foo?.3:0`被解析成`foo ? .3 : 0`，因此规定如果`?.`后面紧跟一个十进制数字，那么`?.`
不再被看成是一个完整的运算符，而会按照`三元运算符`进行处理，**也就是说，那个小数点会归属于后面的十进制数字，形成一个小数。**

### Null 判断运算符

读取对象属性的时候，如果某个属性的值是`null`或`undefined`，有时候需要为它们指定默认值。常见做法是通过`||`运算符指定默认值。

```js
const headerText = response.settings.headerText || 'Hello, world!';
const animationDuration = response.settings.animationDuration || 300;
const showSplashScreen = response.settings.showSplashScreen || true;
```

开发者的原意是，只要属性的值为null或undefined，默认值就会生效，**但是属性的值如果为空字符串或false或0，默认值也会生效。**

为了避免这种情况，ES2020 引入了一个新的 `Null` 判断运算符`??`。

行为类似`||`，但是**只有运算符左侧的值为`null`或`undefined`时，才会返回右侧的值。**

这个运算符的一个目的，就是跟链判断运算符?.配合使用，为null或undefined的值设置默认值。

```js
const animationDuration = response.settings?.animationDuration ?? 300;
```

这个运算符很适合判断函数参数是否赋值。

```js
function Component(props) {
  const enable = props.enabled ?? true;
  // …
}

```

## 对象新增方法

- `Object.is()`
- `Object.assign()`
- `Object.getOwnPropertyDescriptors()`
- `__proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()`
- `Object.keys()，Object.values()，Object.entries()`
- `Object.fromEntries()`

### `Object.is()`

ES5 比较两个值是否相等，只有两个运算符：相等运算符（`==`）和严格相等运算符（`===`）

- 相等运算符（`==`）会自动转换数据类型
- 严格相等运算符（`===`）的NaN不等于自身

> ES6 提出“Same-value equality”（同值相等）算法,**在所有环境中，只要两个值是一样的，它们就应该相等。**

**`Object.is()`用来比较两个值是否严格相等，与严格比较运算符（`===`）的行为基本一致。**

```js
Object.is('foo', 'foo')
// true
Object.is({}, {})
// false
```

不同之处只有两个：

- `Object.is()`的`+0`不等于`-0`
- `Object.is()`的`NaN`等于自身

```js
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

类似功能实现：

```js

// 实现 Object.is()功能
Object.defineProperty(Object, 'is', {
  value: function (x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});
```

### `Object.assign()`

`Object.assign()`方法用于对象的合并，将源对象（`source`）的所有可枚举属性，复制到目标对象（`target`）。

```js
const target = {a: 1};

const source1 = {b: 2};
const source2 = {c: 3};

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

**`Object.assign()`方法的第一个参数是目标对象，后面的参数都是源对象。**

注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

```js
const target = {a: 1, b: 1};

const source1 = {b: 2, c: 2};
const source2 = {c: 3};

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

如果只有一个参数，Object.assign()会直接返回该参数。

```js
const obj = {a: 1};
Object.assign(obj) === obj // true
```

如果该参数不是对象，则会先转成对象，然后返回。

```js
typeof Object.assign(2) // "object"
```

**由于`undefined`和`null`无法转成对象，所以如果它们作为参数，就会报错。**

```js
Object.assign(undefined) // 报错
Object.assign(null) // 报错
```

如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果`undefined`
和`null`不在首参数，就不会报错。

```js
let obj = {a: 1};
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true
```

**其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。**

除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。

```js
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。**因为只有字符串的包装对象，会产生可枚举属性。**

```js
Object(true) // {[[PrimitiveValue]]: true}
Object(10)  //  {[[PrimitiveValue]]: 10}
Object('abc') // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}

```

`布尔值`、`数值`、`字符串`分别转成对应的包装对象，可以看到它们的原始值都在包装对象的内部属性`[[PrimitiveValue]]`
上面，这个属性是不会被`Object.assign()`拷贝的。只有字符串的包装对象，会产生`可枚举的实义属性`，那些属性则会被拷贝。

Object.assign()拷贝的属性是有限制的

- 只拷贝源对象的自身属性
- 不拷贝继承属性
- 不拷贝不可枚举的属性（enumerable: false）。

```js

Object.assign({b: 'c'},
  Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
  })
)

// Object.assign()要拷贝的对象只有一个不可枚举属性invisible，这个属性没有被拷贝进去。
// { b: 'c' }
```

属性名为 Symbol 值的属性，也会被Object.assign()拷贝。

```js
Object.assign({a: 'b'}, {[Symbol('c')]: 'd'})
// { a: 'b', Symbol(c): 'd' }
```

#### 需要注意

- 浅拷贝

`Object.assign()`方法实行的是浅拷贝，而不是深拷贝。
**如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个`对象的引用`。**

```js
const obj1 = {a: {b: 1}};
const obj2 = Object.assign({}, obj1);

// obj1.a.b的任何变化，都会反映到obj2.a.b上面。
obj1.a.b = 2;
obj2.a.b // 2
```

- 同名属性的替换

对于这种嵌套的对象，一旦遇到同名属性，`Object.assign()`的处理方法是替换，而不是添加。

一些函数库提供`Object.assign()`的定制版本（比如 `Lodash` 的`_.defaultsDeep()`方法），可以得到深拷贝的合并。

- 数组的处理

`Object.assign()`可以用来处理数组，但是会把数组视为对象。

```js

Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

```

上面代码中，`Object.assign()`把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。

- 取值函数的处理

`Object.assign()`只能进行值的复制，如果要复制的值是一个取值函数，那么**将求值后再复制**。

```js
const source = {
  get foo() {
    return 1
  }
};
const target = {};

Object.assign(target, source)
// { foo: 1 }
```

上面代码中，`source`对象的`foo`属性是一个取值函数，`Object.assign()`不会复制这个取值函数，只会拿到值以后，将这个值复制过去。

#### 常见用途

- 为对象添加属性

```js
// 将x属性和y属性添加到Point类的对象实例。
class Point {
  constructor(x, y) {
    Object.assign(this, {x, y});
  }
}
```

- 为对象添加方法

```js
Object.assign(SomeClass.prototype, {
  someMethod(arg1, arg2) {
  ···
  },
  anotherMethod() {
  ···
  }
});

// 等同于下面的写法
SomeClass.prototype.someMethod = function (arg1, arg2) {
···
};
SomeClass.prototype.anotherMethod = function () {
···
};
```

- 克隆对象

```js
function clone(origin) {
  return Object.assign({}, origin);
}
```

**采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值**。

如果想要保持继承链，可以采用下面的代码。

```js
function clone(origin) {
  let originProto = Object.getPrototypeOf(origin);

  return Object.assign(Object.create(originProto), origin);
}
```

[Object.create()和new object()和{}的区别](https://www.cnblogs.com/leijee/p/7490822.html)

- 合并多个对象

```js
// 将多个对象合并到某个对象
const merge =
  (target, ...sources) => Object.assign(target, ...sources);

// 对一个空对象合并，合并后返回一个新对象
const merge =
  (...sources) => Object.assign({}, ...sources);
```

- 为属性指定默认值

```js
const DEFAULTS = {
  logLevel: 0,
  outputFormat: 'html'
};

function processContent(options) {
  options = Object.assign({}, DEFAULTS, options);
  console.log(options);
  // ...
}
```

上面代码中

- `DEFAULTS`对象是默认值
- `options`对象是用户提供的参数。

`Object.assign()`方法将`DEFAULTS`和`options`合并成一个新对象，如果两者有同名属性，则`options`的属性值会覆盖`DEFAULTS`的属性值。

**注意，由于存在浅拷贝的问题，`DEFAULTS`对象和`options`
对象的所有属性的值，最好都是简单类型，不要指向另一个对象。否则，`DEFAULTS`对象的该属性很可能不起作用。**

### Object.getOwnPropertyDescriptors()

`ES5`的`Object.getOwnPropertyDescriptor()`方法会返回某个对象属性的描述对象（`descriptor`）

`ES2017` 引入了`Object.getOwnPropertyDescriptors()`方法，返回指定对象所有自身属性（非继承属性）的描述对象。

```js

// 相关实现
function getOwnPropertyDescriptors(obj) {
  const result = {};
  for (let key of Reflect.ownKeys(obj)) {
    result[key] = Object.getOwnPropertyDescriptor(obj, key);
  }
  return result;
}
```

`getOwnPropertyDescriptors`该方法的引入目的，主要是为了解决`Object.assign()`无法正确拷贝`get`属性和`set`属性的问题。

```js
const source = {
  set foo(value) {
    console.log(value);
  }
};

const target1 = {};
Object.assign(target1, source);

Object.getOwnPropertyDescriptor(target1, 'foo')
// { value: undefined,
//   writable: true,
//   enumerable: true,
//   configurable: true }
```

上面代码中，`source`对象的`foo`属性的值是一个赋值函数，`Object.assign`方法将这个属性拷贝给`target1`
对象，结果该属性的值变成了`undefined`。
**这是因为`Object.assign`方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法。**

这时，`Object.getOwnPropertyDescriptors()`方法配合`Object.defineProperties()`方法，就可以实现正确拷贝。

```js
const source = {
  set foo(value) {
    console.log(value);
  }
};

const target2 = {};
Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
Object.getOwnPropertyDescriptor(target2, 'foo')
// { get: undefined,
//   set: [Function: set foo],
//   enumerable: true,
//   configurable: true }


// 抽象成函数
const shallowMerge = (target, source) => Object.defineProperties(
  target, Object.getOwnPropertyDescriptors(source)
);
```

### __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()

> JavaScript 语言的对象继承是通过原型链实现的。ES6 提供了更多原型对象的操作方法

#### __proto__属性

`__proto__`属性（前后各两个下划线），用来读取或设置当前对象的原型对象（`prototype`）。目前，所有浏览器（包括 `IE11`）都部署了这个属性。

```js
// es5 的写法
const obj = {
  method: function () { ...
  }
};
obj.__proto__ = someOtherObj;

// es6 的写法
var obj = Object.create(someOtherObj);
obj.method = function () { ...
};
```

可以使用

- `Object.setPrototypeOf()`（写操作）
- `Object.getPrototypeOf()`（读操作）
- `Object.create()`（生成操作）

代替实现。

实现上，`__proto__`调用的是`Object.prototype.__proto__`

```js

Object.defineProperty(Object.prototype, '__proto__', {
  get() {
    let _thisObj = Object(this);
    return Object.getPrototypeOf(_thisObj);
  },
  set(proto) {
    if (this === undefined || this === null) {
      throw new TypeError();
    }
    if (!isObject(this)) {
      return undefined;
    }
    if (!isObject(proto)) {
      return undefined;
    }
    let status = Reflect.setPrototypeOf(this, proto);
    if (!status) {
      throw new TypeError();
    }
  },
});

function isObject(value) {
  return Object(value) === value;
}

```

如果一个对象本身部署了`__proto__`属性，该属性的值就是对象的原型。

```js
Object.getPrototypeOf({__proto__: null})
// null
```

#### Object.setPrototypeOf()

`Object.setPrototypeOf`方法的作用与`__proto__`相同，用来设置一个对象的原型对象（`prototype`），返回参数对象本身,是 ES6
正式推荐的设置原型对象的方法。

```js
// 格式
Object.setPrototypeOf(object, prototype)

// 用法
const o = Object.setPrototypeOf({}, null);

// 等同于
function setPrototypeOf(obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

很经典的例子：

```js
let proto = {};
let obj = {x: 10};
Object.setPrototypeOf(obj, proto);

proto.y = 20;
proto.z = 40;

obj.x // 10
obj.y // 20
obj.z // 40
```

将`proto`对象设为`obj`对象的原型，所以从`obj`对象可以读取`proto`对象的属性。

**如果第一个参数不是对象，会自动转为对象**。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。

```js
Object.setPrototypeOf(1, {}) === 1 // true
Object.setPrototypeOf('foo', {}) === 'foo' // true
Object.setPrototypeOf(true, {}) === true // true
```

由于`undefined`和`null`无法转为对象，所以如果第一个参数是`undefined`或`null`，就会报错。

```js
Object.setPrototypeOf(undefined, {})
// TypeError: Object.setPrototypeOf called on null or undefined

Object.setPrototypeOf(null, {})
// TypeError: Object.setPrototypeOf called on null or undefined
```

#### Object.getPrototypeOf()

与`Object.setPrototypeOf`方法配套，用于读取一个对象的原型对象。

```js
// 基本使用
Object.getPrototypeOf(obj);

// 原型设置和获取
function User() {
  // ...
}

const user = new User();

Object.getPrototypeOf(user) === User.prototype
// true

Object.setPrototypeOf(user, Object.prototype);
Object.getPrototypeOf(user) === User.prototype
// false
```

如果参数不是对象，会被自动转为对象。

```js
// 等同于 Object.getPrototypeOf(Number(1))
Object.getPrototypeOf(1)
// Number {[[PrimitiveValue]]: 0}

// 等同于 Object.getPrototypeOf(String('foo'))
Object.getPrototypeOf('foo')
// String {length: 0, [[PrimitiveValue]]: ""}

// 等同于 Object.getPrototypeOf(Boolean(true))
Object.getPrototypeOf(true)
// Boolean {[[PrimitiveValue]]: false}

Object.getPrototypeOf(1) === Number.prototype // true
Object.getPrototypeOf('foo') === String.prototype // true
Object.getPrototypeOf(true) === Boolean.prototype // true
```

如果参数是`undefined`或`null`，它们无法转为对象，所以会报错。

```js
Object.getPrototypeOf(null)
// TypeError: Cannot convert undefined or null to object

Object.getPrototypeOf(undefined)
// TypeError: Cannot convert undefined or null to object
```

### Object.keys()，Object.values()，Object.entries()

#### Object.keys()

ES5 引入了`Object.keys`方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。

```js
const obj = {name: 'bob', age: 24};
Object.keys(obj)
// ["name", "age"]
```

#### Object.values()

`Object.values`方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（`enumerable`）属性的键值。

```js
const obj = {name: 'bob', age: 24};
Object.values(obj)
// ["bob", 24]
```

- `Object.values`只返回对象自身的可遍历属性。

- `Object.values`会过滤属性名为 Symbol 值的属性。

- 如果参数不是对象，`Object.values`会先将其转为对象。*
  *由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。`Object.values`会返回空数组。**

#### Object.entries()

`Object.entries()`方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（`enumerable`）属性的键值对数组。

`Object.entries`的基本用途是遍历对象的属性。

```js
let obj = {one: 1, two: 2};
for (let [k, v] of Object.entries(obj)) {
  console.log(
    `${JSON.stringify(k)}: ${JSON.stringify(v)}`
  );
}
// "one": 1
// "two": 2
```

`Object.entries`方法的另一个用处是，将对象转为真正的`Map`结构。

```js
const obj = {name: 'bob', age: 24};
const map = new Map(Object.entries(obj));
map // Map { name: "bob", age: 24 }
```

自己实现`Object.entries`方法，循环遍历

```js
// Generator函数的版本
function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

// 非Generator函数的版本
function entries(obj) {
  let arr = [];
  for (let key of Object.keys(obj)) {
    arr.push([key, obj[key]]);
  }
  return arr;
}
```

### Object.fromEntries()

`Object.fromEntries()`方法是`Object.entries()`的逆操作，用于将一个键值对数组转为对象。

```js
Object.fromEntries([
  ['name', 'bob'],
  ['age', 24]
])
// { name: "bob", age: 24 }
```

该方法的主要目的，是将键值对的数据结构还原为对象，**特别适合将 `Map` 结构转为对象**。

```js
// 例一
const entries = new Map([
  ['name', 'bob'],
  ['age', 24]
]);

Object.fromEntries(entries)
// { name: "bob", age: 24 }

// 例二
const map = new Map().set('foo', true).set('bar', false);
Object.fromEntries(map)
// { foo: true, bar: false }
```

该方法的一个用处是配合`URLSearchParams`对象，将查询字符串转为对象。

```js

// url模块中获取URLSearchParams
const {URLSearchParams} = require('url');
Object.fromEntries(new URLSearchParams('name=bob&age=24'))
// { name: "bob", age: 24 }
```

## 参考资料

- <https://es6.ruanyifeng.com/>
