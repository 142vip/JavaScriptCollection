## 语法与数据结构

### 基础

JavaScript 借鉴了 Java 的大部分语法，但同时也受到 *Awk，Perl* 和 *Python*的影响。 

JavaScript 是**区分大小写**的，并使用 **Unicode** 字符集。

在 JavaScript 中，指令被称为语句 （[Statement](https://developer.mozilla.org/zh-CN/docs/Glossary/Statement)），并用分号（;）进行分隔。

**如果一条语句独占一行的话，那么分号是可以省略的（并不建议这么做）但如果一行中有多条语句，那么这些语句必须以分号分开。**

### 注释

**Javascript 注释**的语法和 C++ 或许多其他语言类似：

```javascript
// 单行注释

/* 这是一个更长的,
   多行注释
*/

/* 然而, 你不能, /* 嵌套注释 */ 语法错误 */
```

在代码执行过程中，注释将被自动跳过（不执行）。

### 声明

JavaScript有三种声明方式。

- [`var`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/var)

  声明一个变量，可选初始化一个值。

- [`let`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let)

  声明一个块作用域的局部变量，可选初始化一个值。

- [`const`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const)

  声明一个块作用域的只读常量。

#### 变量

在应用程序中，使用变量来作为值的符号名。变量的名字又叫做[标识符](https://developer.mozilla.org/zh-CN/docs/Glossary/Identifier)，其需要遵守一定的规则。

一个 JavaScript 标识符必须以字母、下划线（_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，所以字母可以是从“A”到“Z”的大写字母和从“a”到“z”的小写字母。

#### 声明变量

你可以用以下三种方式声明变量：

- 使用关键词 `var` 。例如 `var x = 42`。这个语法可以用来声明局部变量和全局变量。
- 直接赋值。例如`x = 42`。在函数外使用这种形式赋值，会产生一个全局变量。在严格模式下会产生错误。因此你不应该使用这种方式来声明变量。
- 使用关键词 `let` 。例如 `let y = 13`。这个语法可以用来声明块作用域的局部变量。

#### 变量求值

用 `var` 或 `let` 语句声明的变量，如果没有赋初始值，则其值为 `undefined` 。

如果访问一个未声明的变量会导致抛出一个引用错误（ReferenceError）异常：

```js
var a;
console.log("The value of a is " + a); // a 的值是 undefined

console.log("The value of b is " + b);// b 的值是 undefined 
var b;
// 在你阅读下面的‘变量声明提升’前你可能会疑惑

console.log("The value of c is " + c); // 未捕获的引用错误： c 未被定义

let x;
console.log("The value of x is " + x); // x 的值是 undefined

console.log("The value of y is " + y);// 未捕获的引用错误： y 未被定义
let y;
```

你可以使用 `undefined` 来判断一个变量是否已赋值。在以下的代码中，变量`input`未被赋值，因此 `if` 条件语句的求值结果是 `true` 。

```js
var input;
if(input === undefined){
  doThis();
} else {
  doThat();
}
```

`undefined` 值在布尔类型环境中会被当作 `false` 。例如，下面的代码将会执行函数 `myFunction`，因为数组 `myArray` 中的元素未被赋值：

```js
var myArray = [];
if (!myArray[0])   myFunction(); 
```

数值类型环境中 `undefined` 值会被转换为 `NaN`。

```js
var a;
a + 2;    // 计算为 NaN
```

当你对一个 `null` 变量求值时，空值 `null` 在数值类型环境中会被当作0来对待，而布尔类型环境中会被当作 `false`。例如：

```js
var n = null;
console.log(n * 32); // 在控制台中会显示 0
```

#### 变量的作用域

在函数之外声明的变量，叫做*全局*变量，因为它可被当前文档中的任何其他代码所访问。在函数内部声明的变量，叫做**局部变量**，因为它只能在当前函数的内部访问。

ECMAScript 6 之前的 JavaScript 没有 [语句块](https://developer.mozilla.org/zh-CN/docs/JavaScript/Guide/Statements#Block_Statement) 作用域；相反，语句块中声明的变量将成为语句块所在函数（或全局作用域）的局部变量。例如，如下的代码将在控制台输出 5，因为 `x` 的作用域是声明了 `x` 的那个函数（或全局范围），而不是 `if` 语句块。

```js
if (true) {
  var x = 5;
}
console.log(x); // 5
```

如果使用 ECMAScript 6 中的 `let` 声明，上述行为将发生变化。

```js
if (true) {
  let y = 5;
}
console.log(y); // ReferenceError: y 没有被声明
```

#### 变量提升

JavaScript 变量的另一个不同寻常的地方是，你可以先使用变量稍后再声明变量而不会引发异常。这一概念称为变量提升；JavaScript 变量感觉上是被“提升”或移到了函数或语句的最前面。但是，提升后的变量将返回 undefined 值。因此在使用或引用某个变量之后进行声明和初始化操作，这个被提升的变量仍将返回 undefined 值。

```js
/**
 * 例子1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * 例子2
 */
// will return a value of undefined
var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```

上面的例子，也可写作：

```js
/**
 * 例子1
 */
var x;
console.log(x === undefined); // true
x = 3;
 
/**
 * 例子2
 */
var myvar = "my value";
 
(function() {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
})();
```

由于存在变量提升，一个函数中所有的`var`语句应尽可能地放在接近函数顶部的地方。这个习惯将大大提升代码的清晰度。

在 ECMAScript 6 中，let（const）将**不会提升**变量到代码块的顶部。因此，在变量声明之前引用这个变量，将抛出引用错误（ReferenceError）。这个变量将从代码块一开始的时候就处在一个“暂时性死区”，直到这个变量被声明为止。

```js
console.log(x); // ReferenceError
let x = 3;
```

#### 函数提升

对于函数来说，只有函数声明会被提升到顶部，而函数表达式不会被提升。

```js
/* 函数声明 */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* 函数表达式 */

baz(); // 类型错误：baz 不是一个函数

var baz = function() {
  console.log("bar2");
};
```

#### 全局变量

实际上，全局变量是*全局对象*的属性。在网页中全局对象是 `window` ，所以你可以用形如 `window.`*variable* 的语法来设置和访问全局变量。

因此，你可以通过指定 window 或 frame 的名字，在当前 window 或 frame 访问另一个 window 或 frame 中声明的变量。例如，在文档里声明一个叫 `phoneNumber` 的变量，那么你就可以在子框架里使用 `parent.phoneNumber` 的方式来引用它。

#### 常量(Constants)

你可以用关键字 `const` 创建一个只读的常量。常量标识符的命名规则和变量相同：必须以字母、下划线（_）或美元符号（$）开头并可以包含有字母、数字或下划线。

```js
const PI = 3.14;
```

常量不可以通过重新赋值改变其值，也不可以在代码运行时重新声明。它必须被初始化为某个值。

常量的作用域规则与 `let` 块级作用域变量相同。若省略`const`关键字，则该标识符将被视为变量。

在同一作用域中，不能使用与变量名或函数名相同的名字来命名常量。例如：

```js
// 这会造成错误
function f() {};
const f = 5;

// 这也会造成错误
function f() {
  const g = 5;
  var g;
  //语句
}
```

然而，对象属性被赋值为常量是不受保护的，所以下面的语句执行时不会产生错误。

```js
const MY_OBJECT = {"key": "value"};
MY_OBJECT.key = "otherValue";
```

同样的，数组的被定义为常量也是不受保护的，所以下面的语句执行时也不会产生错误。

```js
const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
```

### 数据结构和类型

最新的 ECMAScript 标准定义了8种数据类型：

- 七种基本数据类型:
  - 布尔值（Boolean），有2个值分别是：`true` 和 `false`.
  - null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 `null` 与 `Null`、`NULL`或变体完全不同。
  - undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未定义时的属性。
  - 数字（Number），整数或浮点数，例如： `42` 或者 `3.14159`。
  - 任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
  - 字符串（String），字符串是一串表示文本值的字符序列，例如："Howdy" 。
  - 代表（Symbol） ( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。
- 以及对象（Object）

#### 数据类型的转换

JavaScript是一种动态类型语言(dynamically typed language)。这意味着你在声明变量时可以不必指定数据类型，而数据类型会在代码执行时会根据需要自动转换。因此，可以按照如下方式来定义变量：

```js
var answer = 42;
```

然后，你还可以给同一个变量赋予一个字符串值，例如：

```js
answer = "Thanks for all the fish...";
```

因为 JavaScript 是动态类型的，这种赋值方式并不会提示出错。

在包含的数字和字符串的表达式中使用加法运算符（+），JavaScript 会把数字转换成字符串。例如，观察以下语句：

```js
x = "The answer is " + 42 // "The answer is 42"
y = 42 + " is the answer" // "42 is the answer"
```

在涉及其它运算符（译注：如下面的减号'-'）时，JavaScript语言不会把数字变为字符串。例如（译注：第一例是数学运算，第二例是字符串运算）：

```js
"37" - 7 // 30
"37" + 7 // "377"
```

#### 字符串转换为数字

有一些方法可以将内存中表示一个数字的字符串转换为对应的数字。

`parseInt()`和`parseFloat()`

` parseInt `方法只能返回整数，所以使用它会丢失小数部分。

另外，调用 parseInt 时最好总是带上进制(radix) 参数，这个参数用于指定使用哪一种进制。

将字符串转换为数字的另一种方法是使用一元**加法运算符**。

```js
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2   
// 注意：加入括号为清楚起见，不是必需的。
```

#### 整数 (Integers)

整数可以用十进制（基数为10）、十六进制（基数为16）、八进制（基数为8）以及二进制（基数为2）表示。

- 十进制整数字面量由一串数字序列组成，且没有前缀0。
- 八进制的整数以 0（或0O、0o）开头，只能包括数字0-7。
- 十六进制整数以0x（或0X）开头，可以包含数字（0-9）和字母 a~f 或 A~F。
- 二进制整数以0b（或0B）开头，只能包含数字0和1。

严格模式下，八进制整数字面量必须以0o或0O开头，而不能以0开头。

整数字面量举例：

```
0, 117 and -345 (十进制, 基数为10)
015, 0001 and -0o77 (八进制, 基数为8) 
0x1123, 0x00111 and -0xF1A7 (十六进制, 基数为16或"hex")
0b11, 0b0011 and -0b11 (二进制, 基数为2)
```
