## 表达式与运算符

### 运算符

JavaScript 拥有如下类型的运算符。本节描述了运算符和运算符的优先级。

- 赋值运算符(Assignment operators)
- 比较运算符(Comparison operators)
- 算数运算符(Arithmetic operators)
- 位运算符(Bitwise operators)
- 逻辑运算符(Logical operators)
- 字符串运算符(String operators)
- 条件（三元）运算符(Conditional operator)
- 逗号运算符(Comma operator）
- 一元运算符(Unary operators）
- 关系运算符(Relational operator）

JavaScript 拥有二元和一元运算符， 和一个特殊的三元运算符（条件运算符）

```js
// 操作数1 运算符 操作数2
3+4
// 运算符 操作数
++x
// 操作数 运算符
x++
```

#### 赋值运算符

将它右边操作数的值赋给它左边的操作数。最简单的赋值运算符是等于（`=`），它将右边的操作数值赋给左边的操作数。那么 `x = y` 就是将 y 的值赋给 x。

| 名字                                              | 简写的操作符 | 含义          |
| :------------------------------------------------ | :----------- | :------------ |
| 赋值(Assignment)                                  | `x = y`      | `x = y`       |
| 加法赋值(Addition assignment)                     | `x += y`     | `x = x + y`   |
| 减法赋值(Subtraction assignment)                  | `x -= y`     | `x = x - y`   |
| 乘法赋值(Multiplication assignment)               | `x *= y`     | `x = x * y`   |
| 除法赋值(Division assignment)                     | `x /= y`     | `x = x / y`   |
| 求余赋值(Remainder assignment)                    | `x %= y`     | `x = x % y`   |
| 求幂赋值(Exponentiation assignment)               | `x **= y`    | `x = x ** y`  |
| 左移位赋值(Left shift assignment)                 | `x <<= y`    | `x = x << y`  |
| 右移位赋值(Right shift assignment)                | `x >>= y`    | `x = x >> y`  |
| 无符号右移位赋值(Unsigned right shift assignment) | `x >>>= y`   | `x = x >>> y` |
| 按位与赋值(Bitwise AND assignment)                | `x &= y`     | `x = x & y`   |
| 按位异或赋值(Bitwise XOR assignment)              | `x ^= y`     | `x = x ^ y`   |
| 按位或赋值(Bitwise OR assignment)                 | `x |= y`     | `x = x | y`   |

##### 解构赋值

对于更复杂的赋值，[解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)语法是一个能从**数组或对象对应的数组结构或对象字面量里**提取数据的 Javascript 表达式。

```js
var foo = ["one", "two", "three"];

// 不使用解构
var one   = foo[0];
var two   = foo[1];
var three = foo[2];

// 使用解构
var [one, two, three] = foo;
```

#### 比较运算符

**比较操作数并返回一个基于表达式是否为真的逻辑值**。操作数可以是数字，字符串，逻辑，对象值。字符串比较是基于标准的字典顺序，使用Unicode值。在多数情况下，如果两个操作数不是相同的类型， JavaScript 会尝试转换它们为恰当的类型来比较。这种行为通常发生在数字作为操作数的比较。类型转换的例外是使用 `===` 和 `!==` 操作符，它们会执行严格的相等和不相等比较。这些运算符不会在检查相等之前转换操作数的类型。下面的表格描述了该示例代码中的各比较运算符

```js
var var1 = 3;
var var2 = 4;
```

| 运算符                             | 描述                                                         | 返回true的示例                     |
| :--------------------------------- | :----------------------------------------------------------- | :--------------------------------- |
| 等于 Equal`==`                     | 如果两边操作数相等时返回true。                               | `3 == var1``"3" == var1``3 == '3'` |
| 不等于 Not equal`!=`               | 如果两边操作数不相等时返回true                               | `var1 != 4var2 != "3"`             |
| 全等 Strict equal `===`            | 两边操作数相等且类型相同时返回true。 参见 [`Object.is`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is) and [sameness in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness). | `3 === var1`                       |
| 不全等 Strict not equal`!==`       | 两边操作数不相等或类型不同时返回true。                       | `var1 !== "3"3 !== '3'`            |
| 大于 Greater than `>`              | 左边的操作数大于右边的操作数返回true                         | `var2 > var1"12" > 2`              |
| 大于等于 Greater than or equal`>=` | 左边的操作数大于或等于右边的操作数返回true                   | `var2 >= var1var1 >= 3`            |
| 小于 Less than`<`                  | 左边的操作数小于右边的操作数返回true                         | `var1 < var2"2" < 12`              |
| 小于等于 Less than or equal`<=`    | 左边的操作数小于或等于右边的操作数返回true                   | `var1 <= var2var2 <= 5`            |

**注意: （=>） 不是运算符，而是箭头函数的标记符号 。**

#### 算术运算符

算术运算符使用数值(字面量或者变量)作为操作数并返回一个数值.标准的算术运算符就是加减乘除(+ - * /)。当操作数是浮点数时，这些运算符表现得跟它们在大多数编程语言中一样（特殊要注意的是，除零会产生无限。

```js
1 / 2;  // 0.5
1 / 2 == 1.0 / 2.0; // true 
```

除了标准的算术运算符（+， - ，* /），JavaScript还提供了下表中的算术运算符。

| 操作            | 描述                                                         |
| :-------------- | :----------------------------------------------------------- |
| 求余(`%`)       | 二元运算符. 返回相除之后的余数.                              |
| 自增(`++`)      | 一元运算符. 将操作数的值加一. 如果放在操作数前面 (`++x`), 则返回加一后的值; 如果放在操作数后面 (`x++`), 则返回操作数原值,然后再将操作数加一. |
| 自减(`--`)      | 一元运算符. 将操作数的值减一. 前后缀两种用法的返回值类似自增运算符. |
| 一元负值符(`-`) | 一元运算符,返回操作数的负值.                                 |
| 一元正值符(+)   | 一元运算符, 如果操作数在之前不是number，试图将其转换为number |
| 指数运算符(**)  | 计算 `base(底数)` 的 `exponent(`指数`)次方`, 表示为`baseexponent` |

#### 位运算符

位运算符将它的操作数视为32位元的二进制串（0和1组成）而非十进制八进制或十六进制数。例如：十进制数字9用二进制表示为1001，位运算符就是在这个二进制表示上执行运算，但是返回结果是标准的JavaScript数值。

| 操作                                                         | 使用      | 描述                                                         |
| :----------------------------------------------------------- | :-------- | :----------------------------------------------------------- |
| 按位与[ AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_AND) | `a & b`   | 在a,b的位表示中，每一个对应的位都为1则返回1， 否则返回0.     |
| 按位或[ OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_OR) | `a | b`   | 在a,b的位表示中，每一个对应的位，只要有一个为1则返回1， 否则返回0. |
| 按位异或[ XOR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR) | `a ^ b`   | 在a,b的位表示中，每一个对应的位，两个不相同则返回1，相同则返回0. |
| 按位非[ NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_NOT) | `~ a`     | 反转被操作数的位。                                           |
| 左移[ shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Left_shift) | `a << b`  | 将a的二进制串向左移动b位,右边移入0.                          |
| 算术右移                                                     | `a >> b`  | 把a的二进制表示向右移动b位，丢弃被移出的所有位.(译注:算术右移左边空出的位是根据最高位是0和1来进行填充的) |
| 无符号右移(左边空出位用0填充)                                | `a >>> b` | 把a的二进制表示向右移动b位，丢弃被移出的所有位，并把左边空出的位都填充为0 |

##### 位逻辑运算符

概念上来讲, 位逻辑运算符工作流程：

- 操作数被转换为32bit整數，以位序列（0和1组成）表示.若超過32bits，則取低位32bit，如下所示：

```js
// 取位之前
11100110111110100000000000000110000000000001 
// 取位之后 
10100000000000000110000000000001
```

- 第一个操作数的每一位都与第二个操作数的对应位组对: 第一位对应第一位,第二位对应第二位,以此类推.
- 运算符被应用到每一对"位"上, 最终的运算结果由每一对“位”的运算结果组合起来.

例如,十进制数9的二进制表示是1001,十进制数15的二进制表示是1111.因此,当位运算符应用到这两个值时,结果如下:

| 表达式   | 结果  | 二进制描述                                                   |
| :------- | :---- | :----------------------------------------------------------- |
| `15 & 9` | `9`   | `1111 & 1001 = 1001`                                         |
| `15 | 9` | `15`  | `1111 | 1001 = 1111`                                         |
| `15 ^ 9` | `6`   | `1111 ^ 1001 = 0110`                                         |
| `~15`    | `-16` | `~``00000000...``00001111 = ``1111``1111``...``11110000`     |
| `~9`     | `-10` | `~``00000000``...``0000``1001 = ``1111``1111``...``1111``0110` |

**注意位运算符“非”将所有的32位取反，而值的最高位(最左边的一位)为1则表示负数(2-补码表示法)。**

##### 移位运算符

移位运算符带两个操作数：第一个是待移位的数，第二个是指定第一个数要被移多少位的数。移位的方向由运算符来控制.

移位运算符把操作数转为32bit整数，然后得出一个与待移位数相同种类的值。

移位运算符列表如下。

**移位运算符**

| 运算符            | 描述                                                         | 范例                                                         |
| :---------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `<<` (左移位)     | 将第一个操作数向左移动指定数量的位. 左边移出位被抛弃. 左边移出的几位被丢弃.右边多出的空位由0补齐 | `9<<2产生36，因为1001移位2比特向左变为100100，它是36。`      |
| `>>` (带符号右移) | 将第一个操作数向右移动指定数量的位. 右边移出位被抛弃. 左边多出的空位由原值的最左边数字补齐. | `9>>2产生2，因为1001移位2位向右变为10，其是2。同样，-9>>2产生-3，由于符号被保留。` |
| `>>>` (补零右移)  | 将第一个操作数向右移动指定数量的位. 右边移出位被抛弃. 左边多出的空位由0补齐. | `19>>>2`产生4，因为10011移位2位向右变为100，它是4。对非负数值，补零右移和带符号右移产生相同结果。 |

#### 逻辑运算符

逻辑运算符常用于布尔（逻辑）值之间; 当操作数都是布尔值时，返回值也是布尔值。 不过实际上`&&`和`||`返回的是一个特定的操作数的值，所以用于非布尔值的时候，**返回值就可能是非布尔值**。 逻辑运算符的描述如下。

**逻辑运算符**

| 运算符                                                       | 范例             | 描述                                                         |
| :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- |
| [逻辑与](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND)` (&&`) | `expr1 && expr2` | (逻辑与) 如果expr1能被转换为false，那么返回expr1；否则，返回`expr2`。因此`，&&`用于布尔值时，当操作数都为true时返回true；否则返回false. |
| [逻辑或 ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR)(`||`) | `expr1 || expr2` | (逻辑或) 如果expr1能被转换为true，那么返回expr1；否则，返回`expr2`。因此，\|\|用于布尔值时，当任何一个操作数为true则返回true；如果操作数都是false则返回false。 |
| [逻辑非](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_NOT)` (!)` | `!expr`          | (逻辑非) 如果操作数能够转换为true则返回false；否则返回true。 |

能被转换为`false`的值有`null`, `0`, `NaN`, 空字符串("")和`undefined`。（译者注：也可以称作”falsy“）

&&（逻辑"与"）操作符的示例。

```js
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false
var a5 = "Cat" && "Dog";    // t && t returns Dog
var a6 = false && "Cat";    // f && t returns false
var a7 = "Cat" && false;    // t && f returns false
```

||（逻辑"或"）操作符的示例。

```js
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false
var o5 = "Cat" || "Dog";    // t || t returns Cat
var o6 = false || "Cat";    // f || t returns Cat
var o7 = "Cat" || false;    // t || f returns Cat
```

!（逻辑"非"）操作符的示例。

```js
var n1 = !true;  // !t returns false
var n2 = !false; // !f returns true
var n3 = !"Cat"; // !t returns false
```

##### 短路求值

作为逻辑表达式进行求值是从左到右，它们是为可能的“短路”的出现而使用以下规则进行测试：

```js
// 被短路求值为false,即结果一定是false
false && anything 
// 被短路求值为true,即结果一定是true    
true || anything
```

逻辑的规则，保证这些评估是总是正确的。请注意，**上述的`anything`部分不会被求值**，所以这样做不会产生任何副作用。

#### 字符串运算符

除了比较操作符，它可以在字符串值中使用，连接操作符（+）连接两个字符串值相连接，返回另一个字符串，它是两个操作数串的结合。

```js
// console logs the string "my string".
console.log("my " + "string"); 

// 简写操作符 `+=` 也可以用来拼接字符串
var myString = "alpha";
myString += "bet"; // 返回 "alphabet"  
```

#### 条件（三元）运算符

**条件运算符是JavaScript中唯一需要三个操作数的运算符。**运算的结果根据给定条件在两个值中取其一。语法为：

```bash
条件 ? 值1 : 值2
```

如果`条件`为真，则结果取`值1`。否则为`值2`。你能够在任何允许使用标准运算符的地方使用条件运算符。

```js
// 当 `age` 大于等于18的时候，将“adult”赋值给` status`；否则将“minor”赋值给 `status`。
var status = (age >= 18) ? "adult" : "minor";
```

#### 逗号操作符

逗号操作符对两个操作数进行求值并返回最终操作数的值。常常用在 `for` 循环中，在每次循环时对多个变量进行更新。

`a` 是一个二维数组，每个维度各有10个元素，以下代码利用逗号操作符来同时改变两个变量的值

```js
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
```

#### 一元操作符

一元操作符仅对应一个操作数。

##### delete删除

`delete`操作符，删除一个对象或一个对象的属性或者一个数组中某一个键值。语法:

```js
delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // 只在with声明的状态下是合法的， 从对象中删除一个属性
```

`objectName`是一个对象名，`property` 是一个已经存在的属性，`index`是数组中的一个已经存在的键值的索引值。

**可以使用 `delete` 删除各种各样的隐式声明， 但是被`var`声明的除外**。

如果 `delete` 操作成功，属性或者元素会变成 `undefined`。如果 `delete`可行会返回`true`，如果不成功返回`false`。

```js
x = 42;
var y = 43;
myobj = new Number();
myobj.h = 4;    // create property h
delete x;       // returns true (can delete if declared implicitly)
delete y;       // returns false (cannot delete if declared with var)
delete Math.PI; // returns false (cannot delete predefined properties)
delete myobj.h; // returns true (can delete user-defined properties)
delete myobj;   // returns true (can delete if declared implicitly)
```

##### 删除数组元素

**删除数组中的元素时，数组的长度是不变的，**例如删除`a[3]`, `a[4]`，`a[4]``和a[3]` 仍然存在变成了`undefined`。

`delete` 删除数组中的一个元素，这个元素就不在数组中了。例如，`trees[3]`被删除，`trees[3]` 仍然可寻址并返回`undefined`。

```js
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
if (3 in trees) {
  // 不会被执行
}
```

**如果想让数组中存在一个元素但是是`undefined`值，使用`undefined`关键字而不是`delete`操作**. 如下： `trees[3]分配一个undefined`,但是这个数组元素仍然存在:

```js
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
if (3 in trees) {
  // 会被执行
}
```

##### typeof操作符

typeof操作符的两种使用方式：

```js
typeof operand
typeof (operand)
```

**typeof 操作符返回一个表示 operand 类型的字符串值。**operand 可为字符串、变量、关键词或对象，其类型将被返回。operand 两侧的括号为可选。

假设你定义了如下的变量：

```js
// 变量定义
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();
// typeof结果
typeof myFun;     // returns "function"
typeof shape;     // returns "string"
typeof size;      // returns "number"
typeof today;     // returns "object"
typeof dontExist; // returns "undefined"
// 对于关键词为true 和null的结果
typeof true; // returns "boolean"
typeof null; // returns "object"
// 对于数值或者字符串
typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"
// 对于属性值
typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number
// 对于方法和函数
typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"
// 对于预定义对象
typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"
```

##### void运算符

void 运算符运用方法如下：

```js
void (expression)
void expression
```

**void运算符,表明一个运算没有返回值。**expression是javaScript表达式，括号中的表达式是一个可选项，当然使用该方式是一种好的形式。

可以使用void运算符指明一个超文本链接。该表达式是有效的，但是并不会在当前文档中进行加载。

如下伪协议应用。

```html
<!-- 创建了一个超链接文本，当用户单击该文本时，不会有任何效果 --->
<a href="javascript:void(0)">Click here to do nothing</a>
<!-- 创建了一个超链接，当用户单击它时，提交一个表单 --->
<a href="javascript:void(document.form.submit())">Click </a>
```

#### 关系操作符

关系操作符对操作数进行比较，根据比较结果真或假，返回相应的布尔值。

##### in操作符

**`in`操作符，如果所指定的属性确实存在于所指定的对象中，则会返回`true`**，语法如下：

```js
propNameOrNumber in objectName
```

在这里 `propNameOrNumber`可以是一个代表着属性名的字符串或者是一个代表着数组索引的数值表达式，而`objectName`则是一个对象名。

```js
// Arrays
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
"bay" in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
"length" in trees; // returns true (length is an Array property)

// Predefined objects
"PI" in Math;          // returns true
var myString = new String("coral");
"length" in myString;  // returns true

// Custom objects
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar;  // returns true
"model" in mycar; // returns true
```

##### instanceof操作符

**如果所判别的对象确实是所指定的类型，则返回`true`。**其语法如下：

```js
objectName instanceof objectType
```

`objectName` 是需要做判别的对象的名称,而`objectType`是假定的对象的类型, 例如[`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Date)或 [`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Array).

当你需要确认一个对象在运行时的类型时，可使用`instanceof`. 例如，需要 catch 异常时，你可以针对抛出异常的类型，来做不同的异常处理。

```js
// 使用instanceof去判断 theDay是否是一个 Date 对象.
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
	// 执行theDay为Date类型的操作
}
```

#### 运算符优先级

运算符的优先级，用于确定一个表达式的计算顺序。在你不能确定优先级时，可以通过使用括号显式声明运算符的优先级。

下表列出了描述符的优先级，从最高到最低。

**运算符优先级**

| 操作类型               | 对应的操作运算符                         |
| :--------------------- | :--------------------------------------- |
| member                 | `. []`                                   |
| call / create instance | `() new`                                 |
| negation/increment     | `! ~ - + ++ -- typeof void delete`       |
| multiply/divide        | `* / %`                                  |
| addition/subtraction   | `+ -`                                    |
| bitwise shift          | `<< >> >>>`                              |
| relational             | `< <= > >= in instanceof`                |
| equality               | `== != === !==`                          |
| bitwise-and            | `&`                                      |
| bitwise-xor            | `^`                                      |
| bitwise-or             | `|`                                      |
| logical-and            | `&&`                                     |
| logical-or             | `||`                                     |
| conditional            | `?:`                                     |
| assignment             | `= += -= *= /= %= <<= >>= >>>= &= ^= |=` |
| comma                  | `,`                                      |

## 表达式

表达式是一组代码的集合，它返回一个值。（译注：定义比较不好理解，看下面的举例就很好懂了。）

每一个合法的表达式都能计算成某个值，但从概念上讲，有两种类型的表达式：有副作用的（比如赋值）和单纯计算求值的。

表达式x=7是第一类型的一个例子。该表达式使用=运算符将值7赋予变量x。这个表达式自己的值等于7。

代码3 + 4是第二个表达式类型的一个例子。该表达式使用+运算符把3和4加到一起但并没有把结果（7）赋值给一个变量。

JavaScript有以下表达式类型：

- 算数: 得出一个数字, 例如 3.14159. (通常使用 [arithmetic operators](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators).)
- 字符串: 得出一个字符串, 例如, "Fred" 或 "234". (通常使用 [string operators](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#String_operators).)
- 逻辑值: 得出true或者false. (经常涉及到 [logical operators](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators#Logical_operators).)
- 基本表达式: javascript中基本的关键字和一般表达式。
- 左值表达式: 分配给左值。

### 基本表达式

#### this关键字

**this关键字被用于指代当前的对象**，通常，`this`指代的是方法中正在被调用的对象

```js
this["propertyName"]
this.propertyName
```

```js
// 用于验证对象`value`属性的函数，传参有对象，最高值和最低值
function validate(obj, lowval, hival){
  if ((obj.value < lowval) || (obj.value > hival))
    console.log("Invalid Value!");
}
```

可以在任何表单元素的`onchange`事件处理中调用`validat`函数，**用`this`来指代当前的表单元素**，用例如下：

```html
<p>Enter a number between 18 and 99:</p>
<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">
```

#### 分组操作符

分组操作符（）控制了表达式中计算的优先级. 举例来说, 你可以改变先乘除后加减的顺序，转而先计算加法。

```js
var a = 1;
var b = 2;
var c = 3;

// 默认优先级
a + b * c     // 7
// 默认是这样计算的
a + (b * c)   // 7

// 现在使加法优先于乘法
(a + b) * c   // 9

// 这等价于
a * c + b * c // 9
```

### 左值表达式

**左值可以作为赋值的目标。**

#### new

可以使用new operator 创建一个自定义类型或者是`预置类型`的对象实例。用法如下：

```js
var objectName = new objectType([param1, param2, ..., paramN]);
```

#### super关键字

**super关键字可以用来调用一个对象父类的函数，它在用来调用一个类的父类的构造函数时非常有用**，比如：

```html
super([arguments]);
```

