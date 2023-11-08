# ES6

> 全称是：ECMAAScript，是由ECMA国际标准组织制定一项脚本语言的标准化规范

**ES6实际上是一个泛指，指ES2015及后续的版本**

## let关键字

> 新增的，用于声明变量的关键字

- let声明的变量只在所处于的块级有效

注意：使用let关键字声明的变量才具有块级作用域，使用var声明的变量不具备块级作用域特性；

- 不存在变量提升（先定义再使用）
- 具有暂时性死区【let声明，会和当前的块级进行绑定】

```js
var num=10;
if(true){
  // 此时输出会出现无定义，只会在块级里面查找num是否定义，不会查找外面
  console.log(num)
  let num=20;
}

```

## let面试题

```js
var arr=[];

for(var i=0;i<2;i++){
  arr[i]=function(){
    console.log(i)
  }
}

arr[0](); // 输出2 
arr[1](); // 输出2



```

```js
let arr=[];

// 每次循环let都会产生块级作用域
for(let i=0;i<2;i++){
  arr[i]=function(){
    console.log(i)
  }
}

arr[0](); // 输出0
arr[1](); // 输出1

```

## const关键字

> 作用：声明常量，常量就是值（内存地址）不能变化的量

- 使用const声明的常量，具有块级作用域
- 声明常量时，必须赋初始值
- 常量赋值后，内存地址值不可以改

```js
const PI=3.14
PI=100 // 出错

const arr=[10,11];

arr[0]=12
arr[1]=13

console.log(arr) // 输出 [12,13]

// 注意：这种修改不行，不要试图去修改内存地址
arr=[12,13]
```

## let const var的区别

- var声明的变量，作用域为该语句所在的函数内，存在变量提升
- let声明的变量，作用域为该语句的代码块内，不存在变量提升
- const声明的是常量，在后面出现的代码中，不能在修改常量的内存地址值

## 解构赋值

> 允许从数组中提取值，按照对应位置，对变量赋值。对象也可以实现解构

```js

// 数组解构
let [a,b,c]=[1,2,3]
console.log(a,b,c) // 1,2,3


// 对象解构
let person = {
  name:'leo',
  age:20
}
let {name:name,age:age}=person  // 或者 let {name,age}=person
console.log(name,age) // leo  20


// 解构并赋变量
let {name:my_name,age:my_age}=person
console.log(my_name,my_age); // leo 20

```

## 箭头函数

> 新增的定义函数的方式

```js
()=>{}
const fn=()=>{
  console.log(123)
}

const sum =(a,b)=>a+b

const sum = a=>a
```

## 箭头函数的this关键字

**箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this**

```js
const obj={name:'leo'}

function fn(){
  console.log('fn-->:',this);

  return ()=>{
    console.log('箭头-->:',this)
  }
}

// 注意call方法调用，将fn的this关键字指向obj对象
const resFn=fn.call(obj)

resFn();

// fn--> {name:'leo'}
// 箭头--> {name:'leo'}
```

## 箭头函数面试题

```js

let obj={
  age:20,
  say:()=>{
    return this.age;
  }
}

// 此时thi指向的是window，没有age定义，所以为undefined
obj.say();

// 定义一个age变量
let age=30
// 此时this指向的是window中的age变量，所以为 30
obj.say();

```

## 剩余参数

```js
function sum(first,...args){
  console.log(first);
  console.log(args);
}

const result=(...args)=>{
  // ...
}

```

## Array扩展方法

```js

// ## 扩展运算符合并数组 ##
let arr1=[1,2,3];
let arr2=[4,5,6];
// 合并
let arr3=[...arr1,...arr2]
let arr4=arr1.push(...arr2)


// ## 构造函数方法：Array.from() 将类数组或可遍历对象转换为真正的数组 ##

// 伪数组
let arrayLike={
  '0':1,
  '1':2,
  '2':3,
  length:3
}

// 伪数组转换为数组
let arr2=Array.from(arrayLike) // ['a',''b,'c']

// 函数统一处理每一项
let arr3=Array.from(arrayLike,item=>{
  return item + 100
}) // 101,102,103 

```

## find()

数组中用来查找第一个符合条件的数组成员，如果没有找到就返回undefined

## findIndex()

数组中用来找出第一个符合条件的数组成员的索引位置，如果没有就返回-1

## includes()

表示某个数组是否包含给定的值，返回布尔值

```js
[1,2,3].includes(2); // true

[1,2,3].includes(4); // false

```

## startsWith()和endsWith()

- startsWith: 表示参数字符串是否在原字符串的头部，返回布尔值
- endsWith(): 表示参数字符串是否在原字符串的尾部，返回布尔值

```js
let str = 'hello world!';

str.startsWith('Hello'); // true
str.endsWith('!') // true
```

## repeat()

repeat()方法表示将原字符串重复n次，返回一个新的字符串；

## 参考资料

- <https://www.w3schools.com/js/js_es6.asp>
