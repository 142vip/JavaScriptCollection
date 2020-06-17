## 函数整理

函数是 JavaScript 中的基本组件之一。 一个函数是 JavaScript 过程 — 一组执行任务或计算值的语句。要使用一个函数，必须将其定义在你希望调用它的作用域内。

一个JavaScript 函数用`function`关键字定义，后面跟着函数名和圆括号。

### 定义函数

#### 函数声明

一个**函数定义**（也称为**函数声明**，或**函数语句**）由一系列的[`function`](https://developer.mozilla.org/zh-CN/docs/JavaScript/Reference/Statements/function)关键字组成，依次为：

- 函数的名称。
- 函数参数列表，包围在括号中并由逗号分隔。
- 定义函数的 JavaScript 语句，用大括号`{}`括起来。

例如，以下的代码定义了一个简单的`square`函数：

```js
// 两个数相乘
function square(number) {
  return number * number;
}
```

函数`square`使用了一个参数，叫作`number`。这个函数只有一个语句，它说明该函数将函数的参数（即`number`）自乘后返回。函数的[`return`](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Statements/return)语句确定了函数的返回值：

```js
return number * number;
```

原始参数（比如一个具体的数字）被作为**值**传递给函数；**值被传递给函数，如果被调用函数改变了这个参数的值，这样的改变不会影响到全局或调用函数。**

#### 函数表达式

虽然上面的函数声明在语法上是一个语句，但函数也可以由函数表达式创建。这样的函数可以是**匿名**的；它不必有一个名称。例如，函数`square`也可这样来定义：

```js
// 匿名函数定义赋值给变量
var square = function(number) { 
    return number * number;
};
// 调用并赋值
var x = square(4);
// 此时x的值为16
```

然而，函数表达式也可以提供函数名，并且可以用于在函数内部代指其本身

```js
var factorial = function fac(n) {
    // 实现阶乘功能
    return n<2 ? 1 : n*fac(n-1)
};
// 调用
console.log(factorial(3));
```

当将函数作为参数传递给另一个函数时，函数表达式很方便。下面演示`map`函数如何被定义，而后使用一个表达式函数作为其第一个参数进行调用：

```js
//  定义map函数，第一个参数为回调函数；
function map(f, a) {
    // 创建一个数组
  	var result = []; 
    // 声明一个值，用来循环
  	var i; 
    // 循环，单行可以省略
  	for (i = 0; i != a.length; i++)
    	result[i] = f(a[i]);
  	// 返回
 	return result;
}
// 定义匿名函数，实现3次方功能
var f = function(x) {
   return x * x * x; 
}
var numbers = [0,1, 2, 5,10];
var cube = map(f,numbers);
// 返回 [0, 1, 8, 125, 1000]。
console.log(cube);
```

在 JavaScript 中，也可以根据条件来定义一个函数。例如：：

```js
// 当`num` 等于 0 的时候才会定义 `myFunc` 
var myFunc;
if (num === 0){
  myFunc = function(theObject) {
    theObject.make = "Toyota"
  }
}
```

除了上述的定义函数方法外，你也可以在运行时用 [`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Function) 构造器由一个字符串来创建一个函数 ，很像 [`eval()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval) 函数。**当一个函数是一个对象的属性时，称之为方法。**

### 调用函数

**定义一个函数并不会自动的执行它**。定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。**调用**函数才会以给定的参数真正执行这些动作。

```js
// 一旦你定义了函数`square`，你可以如下这样调用它
square(5);
```

上述语句通过提供参数 5 来调用函数。函数执行完它的语句会返回值25。

**函数一定要处于调用它们的域中，但是函数的声明可以被提升(出现在调用语句之后)**，

```js
console.log(square(5));
// 利用函数的提升
function square(n) { 
    return n*n
} 
// 后面学习了语法糖，可以直接完成函数定义
function sequare(n=>n*n)
```

函数域是指函数声明时的所在的地方，或者函数在顶层被声明时指整个程序。

**提示：**注意只有使用如上的语法形式（即 `function funcName(){}`）才可以。而下面的代码是无效的。就是说，函数提升仅适用于函数声明，而不适用于函数表达式。

```js
console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function (n) { 
  return n * n; 
}
```

函数的参数并不局限于字符串或数字。也可以将整个对象传递给函数。

**函数可以被递归，就是说函数可以调用其本身。**

```js
// 阶乘的实现
function factorial(n){
   // 增加校验
  if ((n == 0) || (n == 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
// 也可以用三目运算符实现
function factorial(n){
    if(n<0){
        return '负数无法计算阶乘'
    }else{
        return n<2?n:n*factorial(n-1)
    }
}
// 调用，计算1-5的阶乘
var a, b, c, d, e;
// 1赋值给a
a = factorial(1); 
// 2赋值给b
b = factorial(2); 
// 6赋值给c
c = factorial(3); 
// 24赋值给d
d = factorial(4);
// 120赋值给e
e = factorial(5); 

```

还有其它的方式来调用函数。常见的一些情形是某些地方需要动态调用函数，或者函数的实参数量是变化的，或者调用函数的上下文需要指定为在运行时确定的特定对象。**显然，函数本身就是对象，因此这些对象也有方法。**

### 函数作用域

**在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。**相对应的，一个函数可以访问定义在其范围内的任何变量和函数。换言之，**定义在全局域中的函数可以访问所有定义在全局域中的变量**。在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。

```js
// 变量定义在全局作用域(global scope)中
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// 函数定义在全局作用域
function multiply() {
  return num1 * num2;
}
// 调用返回 60
multiply(); 

// 嵌套函数的例子
function getScore() {
    var num1 = 2,
        num2 = 3;
    //定义在函数内部，即：函数嵌套
    function add() {
        return name + " scored " + (num1 + num2);
    }
	// 执行函数内部函数
    return add();
}
getScore(); // 返回 "Chamahk scored 5"
```

### 作用域和函数堆栈

#### 递归

函数指向并调用自身可以通过三种方法可以达到目的：

- 函数名
- `arguments.callee`
- 作用域下的一个指向该函数的变量名

```js
// 简单的函数定义
var foo = function bar() {
   // statements go here
};
```

在这个函数体内，以下的语句是等价的：

1. `bar()`
2. `arguments.callee()` **（译者注：ES5禁止在严格模式下使用此属性）**
3. `foo()`

调用自身的函数我们称之为*递归函数*。**在某种意义上说，递归近似于循环**。两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环或者无限递归）。**循环可以被转化成一个递归函数和对其的调用**

**不过，学过数据结构的都知道，有些算法并不能简单的用迭代来实现，两者不能一概而论**。例如，获取树结构中所有的节点时，使用递归实现要容易得多：

```js
function walkTree(node) {
    // 判断结点是否为空
    if (node == null) 
        return;
    // do something with node
    for (var i = 0; i < node.childNodes.length; i++) {
        // 单行可以省略{}
        walkTree(node.childNodes[i]);
    }
}
```

**跟`loop`函数相比，这里每个递归调用都产生了更多的递归。**

**将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用堆栈。事实上，递归函数就使用了堆栈：函数堆栈。**

### 嵌套函数

**可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的表达式（通常是函数）。**

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以”继承“容器函数的参数和变量。换句话说，**内部函数包含外部函数的作用域。**

可以总结如下：

- 内部函数只可以在外部函数中访问。
- 内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

下面的例子展示了嵌套函数：

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
```

由于内部函数形成了闭包，因此你可以调用外部函数并为外部函数和内部函数指定参数：

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
// 可以这样想：给一个函数，使它的值加3
fn_inside = outside(3); 
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```

#### 保存变量

上例中 `inside` 被返回时 `x` 是怎么被保留下来的。一个闭包必须保存它可见作用域中所有参数和变量。**因为每一次调用传入的参数都可能不同，每一次对外部函数的调用实际上重新创建了一遍这个闭包。只有当返回的 `inside` 没有再被引用时，内存才会被释放。**

这与在其他对象中存储引用没什么不同，但是通常不太明显，因为并不能直接设置引用，也不能检查它们。

#### 多层嵌套函数

函数可以被多层嵌套。例如，函数A可以包含函数B，函数B可以再包含函数C。B和C都形成了闭包，所以B可以访问A，C可以访问B和A。因此，闭包可以包含多个作用域；他们递归式的包含了所有包含它的函数作用域。这个称之为作用**域链**

思考一下下面的例子：

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
```

在这个例子里面，C可以访问B的y和A的x。这是因为：

1. B形成了一个包含A的闭包，B可以访问A的参数和变量
2. C形成了一个包含B的闭包
3. B包含A，所以C也包含A，C可以访问B和A的参数和变量。换言之，C用这个顺序链接了B和A的作用域

反过来却不是这样。A不能访问C，因为A看不到B中的参数和变量，C是B中的一个变量，所以C是B私有的。

#### 命名冲突

当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。**更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链**。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。

```js
function outside() {
  var x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

outside()(10); // returns 20 instead of 10
```

命名冲突发生在`return x`上，`inside`的参数`x`和`outside`变量`x`发生了冲突。这里的作用链域是{`inside`, `outside`, 全局对象}。因此`inside`的`x`具有最高优先权，返回了20（`inside`的`x`）而不是10（`outside`的`x`）。

### 闭包

**闭包是 JavaScript 中最强大的特性之一**。JavaScript 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。

但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。

此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数的生存周期将比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。

```js
//外部函数定义了一个变量"name"
var pet = function(name) {          
  var getName = function() {            
    //内部函数可以访问 外部函数定义的"name"
    return name; 
  }
  //返回这个内部函数，从而将其暴露在外部函数作用域
  return getName;               
};
myPet = pet("Vivie");
// 返回结果 "Vivie"   
myPet();                            
```

### 使用 arguments 对象

**函数的实际参数会被保存在一个类似数组的arguments对象中。**在函数内，你可以按如下方式找出传入的参数：

```js
arguments[i]
```

其中`i`是参数的序数编号（译注：数组索引），以0开始。所以第一个传来的参数会是`arguments[0]`。参数的数量由`arguments.length`表示。

使用arguments对象，可以处理比声明的更多的参数来调用函数。这在你事先不知道会需要将多少参数传递给函数时十分有用。**可以用`arguments.length`来获得实际传递给函数的参数的数量**，然后用`arguments`对象来取得每个参数。

例如，设想有一个用来连接字符串的函数。唯一事先确定的参数是在连接后的字符串中用来分隔各个连接部分的字符（译注：比如例子里的分号“；”）。该函数定义如下：

```js
function myConcat(separator) {
   var result = ''; // 把值初始化成一个字符串，这样就可以用来保存字符串了！！
   var i;
   // 通过参数循环
   for (i = 1; i < arguments.length; i++) {
       // 拼接
      result += arguments[i] + separator;
   }
    // 返回结果
   return result;
}
```

你可以给这个函数传递任意数量的参数，它会将各个参数连接成一个字符串“列表”：

```js
// 返回 "red, orange, blue, "
myConcat(", ", "red", "orange", "blue");

// 返回 "elephant; giraffe; lion; cheetah; "
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// 返回 "sage. basil. oregano. pepper. parsley. "
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

`arguments`变量只是 *”***类数组对象**“，并不是一个数组。称其为类数组对象是说它有一个索引编号和`length`属性。尽管如此，**`arguments`变量并不拥有全部的Array对象的操作方法。**

### 函数参数

**从ECMAScript 6开始，有两个新的类型的参数：默认参数，剩余参数。**

#### 默认参数

在JavaScript中，函数参数的默认值是`undefined`。然而，在某些情况下设置不同的默认值是有用的。这时默认参数可以提供帮助。

在过去，用于设定默认参数的一般策略是在函数的主体中测试参数值是否为`undefined`，如果是则赋予这个参数一个默认值。如果在下面的例子中，调用函数时没有实参传递给`b`，那么它的值就是`undefined`，于是计算`a*b`得到、函数返回的是 `NaN`。

```js
function multiply(a, b) {
    // 处理，避免返回NaN
    b = (typeof b !== 'undefined') ?  b : 1;
    return a*b;
}
// 调用执行，返回5
multiply(5);
```

使用默认参数，在函数体的检查就不再需要了。可以在函数头简单地把1设定为`b`的默认值：

```js
// 给参数b一个默认值
function multiply(a, b = 1) {
  return a*b;
}
multiply(5); // 5
```

#### 剩余参数

允许将不确定数量的参数表示为数组。下面的例子中，**使用剩余参数收集从第二个到最后参数。然后，我们将这个数组的每一个数与第一个参数相乘。**

```js
function multiply(multiplier, ...theArgs) {
    // 箭头函数处理，返回
    return theArgs.map(x => multiplier * x);
}
// 调用并赋值
var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

### 箭头函数

箭头函数表达式（也称胖箭头函数）相比函数表达式具有较短的语法并以词法的方式绑定 `this`。**箭头函数总是匿名的。**

有两个因素会影响引入箭头函数：更简洁的函数和 `this`。

#### 更简洁的函数

在一些函数模式中，更简洁的函数很受欢迎。对比一下：

```js
var a = [
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium"
];

// 匿名函数作为参数,返回
var a2 = a.map(function(s){ return s.length });

console.log(a2); // logs [ 8, 6, 7, 9 ]
// a3 与 a2可以简写转化，功能相同；
var a3 = a.map( s => s.length );

console.log(a3); // logs [ 8, 6, 7, 9 ]
```

#### this的词法

在箭头函数出现之前，每一个新函数都重新定义了自己的 [this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this) 值（**在构造函数中是一个新的对象**；在严格模式下是未定义的；在作为“对象方法”调用的函数中指向这个对象；等等）

```js
function Person() {
    // 构造函数Person()将`this`定义为自身
    this.age = 0;
    setInterval(function growUp() {
        // 在非严格模式下，growUp()函数将`this`定义为“全局对象”，
        // 这与Person()定义的`this`不同，
        // 所以下面的语句不会起到预期的效果。
        this.age++;
    }, 1000);
}

var p = new Person();
```

在ECMAScript 3/5里，通过把`this`的值赋值给一个变量可以修复这个问题。

```js
function Person() {
    // 有的人习惯用`that`而不是`self`，避免改变全局对象
    var self = this; 
    self.age = 0;

    setInterval(function growUp() {
        // 以下语句可以实现预期的功能
        self.age++;
    }, 1000);
}
```

另外，创建一个[约束函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)可以使得 `this`值被正确传递给 `growUp()` 函数。

箭头函数捕捉闭包上下文的`this`值，所以下面的代码工作正常。

```js
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // 这里的`this`正确地指向person对象
  }, 1000);
}

var p = new Person();
```

### 预定义函数

JavaScript语言有很多顶级的内建函数：

- eval()

  会对一串字符串形式的JavaScript代码字符求值。

- uneval()

  创建的一个Object的源代码的字符串表示。

- isFinite()

  判断传入的值是否是有限的数值。 如果需要的话，其参数首先被转换为一个数值。

- isNaN()

  判断一个值是否是NaN。注意：`isNaN`函数内部的`强制转换规则`十分有趣； 另一个可供选择的是ECMAScript 6 中定义Number.isNaN() , 或者使用 `typeof`来判断数值类型。

- parseFloat()

  函数解析字符串参数，并返回一个浮点数。

- parseInt()

  函数解析字符串参数，并返回指定的基数（基础数学中的数制）的整数。

- decodeURI()

  函数对先前经过encodeURI函数或者其他类似方法编码过的字符串进行解码。

- decodeURIComponent()

  对先前经过encodeURIComponent函数或者其他类似方法编码过的字符串进行解码。

- encodeURI()

  通过用以一个，两个，三个或四个转义序列表示字符的UTF-8编码替换统一资源标识符（URI）的某些字符来进行编码（每个字符对应四个转义序列，这四个序列组了两个”替代“字符）。

- encodeURIComponent()

  通过用以一个，两个，三个或四个转义序列表示字符的UTF-8编码替换统一资源标识符（URI）的每个字符来进行编码（每个字符对应四个转义序列，这四个序列组了两个”替代“字符）。

- escape()

  计算生成一个新的字符串，其中的某些字符已被替换为十六进制转义序列。使用 encodeURI或者encodeURIComponent替代本方法。

- unescape()

  计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像`escape`里介绍的一样。因为 `unescape` 已经废弃，建议使用`decodeURI()`或者`decodeURIComponent`) 替代本方法。

