JavaScript 的设计是一个简单的基于对象的范式。一个对象就是一系列属性的集合，一个属性包含一个名和一个值。一个属性的值可以是函数，这种情况下属性也被称为**方法**。**除了浏览器里面预定义的那些对象之外，也可以定义自己的对象。**

### 简单概述

javascript 中的对象(物体)，和其它编程语言中的对象一样，可以比照现实生活中的对象(物体)来理解它。 javascript 中对象(物体)的概念可以比照着现实生活中实实在在的物体来理解。在javascript中，一个对象可以是一个单独的拥有属性和类型的实体。我们拿它和一个杯子做下类比。一个杯子是一个对象(物体)，拥有属性。杯子有颜色，图案，重量，由什么材质构成等等。同样，javascript对象也有属性来定义它的特征。

### 基本属性

一个 javascript 对象有很多属性。**一个对象的属性可以被解释成一个附加到对象上的变量**。对象的属性和普通的 javascript 变量基本没什么区别，仅仅是属性属于某个对象。属性定义了对象的特征(译注：动态语言面向对象的鸭子类型)。可以通过点符号来访问一个对象的属性。

```js
// 对象名去访问对象属性
objectName.propertyName
```

和其他 javascript 变量一样，对象的名字(可以是普通的变量)和属性的名字都是大小写敏感的。可以在定义一个属性的时候就给它赋值。

```js
// 创建一个myCar的对象然后给他三个属性，make，model，year
var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969; 
```

对象中未赋值的属性的值为`undefined`（而不是`null`）

```js
// 访问没被赋值的属性，返回undefined
myCar.noProperty; 
```

**JavaScript 对象的属性也可以通过方括号访问或者设置. 对象有时也被叫作关联数组, 因为每个属性都有一个用于访问它的字符串值**。

```js
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

一个对象的属性名可以是任何有效的 JavaScript 字符串，或者可以被转换为字符串的任何类型，包括空字符串。然而，一个属性的名称如果不是一个有效的 JavaScript 标识符（例如，一个由空格或连字符，或者以数字开头的属性名），就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用。例如：

```js
// 同时创建四个变量，用逗号分隔
var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);
```

**方括号中的所有键都将转换为字符串类型，因为JavaScript中的对象只能使用String类型作为键类型。 例如，在上面的代码中，当将键obj添加到myObj时，JavaScript将调用obj.toString()方法，并将此结果字符串用作新键。**

也可以通过存储在变量中的字符串来访问属性：

```js
var propertyName = "make";
myCar[propertyName] = "Ford";

propertyName = "model";
myCar[propertyName] = "Mustang";
```

### 枚举对象的所有属性

从 ECMAScript 5开始，有三种原生的方法用于列出或枚举对象的属性：

- for...in 循环
  该方法依次访问一个对象及其原型链中所有可枚举的属性。
- Object.keys(o)
  该方法返回对象 `o` 自身包含（不包括原型中）的所有可枚举属性的名称的数组。
- Object.getOwnPropertyNames(o)
  该方法返回对象 `o` 自身包含（不包括原型中）的所有属性(无论是否可枚举)的名称的数组。

```js
// 在 ECMAScript 5 之前，没有原生的方法枚举一个对象的所有属性。然而，可以通过以下函数完成
function listAllProperties(o){     
    var objectToInspect;     
    // 定义结果数组
    var result = [];

    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
        // 循环遍历，通过getOwnPropertyNames访问属性
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
    }
	// 返回结果
    return result; 
}
```

**这在展示 “隐藏”（在原型中的不能通过对象访问的属性，因为另一个同名的属性存在于原型链的早期）的属性时很有用。如果只想列出可访问的属性，那么只需要去除数组中的重复元素即可。**

### 创建新对象

JavaScript 拥有一系列预定义的对象。另外，可以创建自己的对象。从  JavaScript 1.2 之后，可以通过对象初始化器（Object Initializer）创建对象。或者可以创建一个构造函数并使用该函数和 `new` 操作符初始化对象。

#### 使用对象初始化器

除了通过构造函数创建对象之外，也可以通过对象初始化器创建对象。使用对象初始化器也被称作通过字面值创建对象。

通过对象初始化器创建对象的语法如下：

```js
var obj = { property_1:   value_1,   // property_# 可以是一个标识符...
            2:            value_2,   // 或一个数字...
           ["property" +3]: value_3,  //  或一个可计算的key名... 
            // ...,
            "property n": value_n }; // 或一个字符串
```

这里 `obj` 是新对象的名称，每一个 `property_*i*` 是一个标识符（可以是一个名称、数字或字符串字面量），并且每个 `value_*i*` 是一个其值将被赋予 property_*i* 的表达式。`obj` 与赋值是可选的；如果不需要在其他地方引用对象，就不需要将它赋给一个变量。（注意在接受一条语句的地方，可能需要将对象字面量括在括号里，从而避免将字面量与块语句相混淆）

如果一个对象是通过在顶级脚本的对象初始化器创建的，则 JavaScript 在每次遇到包含该对象字面量的表达式时都会创建对象。同样的，在函数中的初始化器在每次函数调用时也会被创建。

下面的语句只有当 `cond` 表达式的值为 `true` 时创建对象并将其赋给变量 `x`。

```js
if (cond) {
    var x = {hi: "there"};
}
```

下例创建了有三个属性的 `myHonda` 对象。注意它的 `engine` 属性也是一个拥有自己属性的对象。

```js
var myHonda = {
    color: "red", 
    wheels: 4, 
    engine: {
        cylinders: 4,
        size: 2.2
    }
};
```

也可以用对象初始化器来创建数组。

#### 使用构造函数

作为另一种方式，可以通过两步来创建对象：

1. 通过创建一个构造函数来定义对象的类型。首字母大写是非常普遍而且很恰当的惯用法。
2. 通过 `new` 创建对象实例。

为了定义对象类型，为对象类型创建一个函数以声明类型的名称、属性和方法。例如，想为汽车创建一个类型，并且将这类对象称为 `car` ，并且拥有属性 make, model, 和 year，可以创建如下的函数：

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

注意通过使用 this 将传入函数的值赋给对象的属性。

现在可以象这样创建一个 `mycar` 对象：

```js
var mycar = new Car("Eagle", "Talon TSi", 1993);
```

该创建了 `mycar` 并且将指定的值赋给它的属性。因而 `mycar.make` 的值是字符串 "Eagle"， `mycar.year` 的值是整数 1993，依此类推。

可以通过调用 `new` 创建任意数量的 `car` 对象。例如：

```js
var kenscar = new Car("Nissan", "300ZX", 1992);
var vpgscar = new Car("Mazda", "Miata", 1990);
```

一个对象的属性值可以是另一个对象。例如，假设按如下方式定义了 `person` 对象:

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

然后按如下方式创建了两个 `person` 实例:

```js
var rand = new Person("Rand McKinnon", 33, "M");
var ken = new Person("Ken Jones", 39, "M");
```

那么，可以重写 `car` 的定义以包含一个拥有它的 `owner` 属性，如：

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

可以按如下方式创建新对象：

```js
var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);
```

注意在创建新对象时，上面的语句将 `rand` 和 `ken` 作为 `owner` 的参数值，而不是传入字符串字面量或整数值。接下来如果想找出 car2 的拥有者的姓名，可以访问如下属性：

```js
car2.owner.name
```

注意总是可以为之前定义的对象增加新的属性。例如，语句

```js
car1.color = "black";
```

为 `car1` 增加了 `color` 属性，并将其值设为 "black." 然而，这并不影响其他的对象。想要为某个类型的所有对象增加新属性，必须将属性加入到 `car `对象类型的定义中。

#### 使用 Object.create 方法

对象也可以用 `Object.create()` 方法创建。该方法非常有用，因为它允许为创建的对象选择一个原型对象，而不用定义构造函数。

```js
var Animal = {
    // 属性默认值
    type: "Invertebrates", 
    // 用于显示type属性的方法
    displayType : function() {  
        console.log(this.type);
    }
}

// 创建一种新的动物——animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// 创建一种新的动物——Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
// Output:Fishes
fish.displayType(); 
```

### **继承**

所有的 JavaScript 对象至少继承于一个对象。被继承的对象被称作原型，并且继承的属性可通过构造函数的 `prototype` 对象找到。

#### **对象属性索引**

在 JavaScript 1.0 中，可以通过名称或序号访问一个属性。但是在 JavaScript 1.1 及之后版本中，如果最初使用名称定义了一个属性，则必须通过名称来访问它；而如果最初使用序号来定义一个属性，则必须通过索引来访问它。

这个限制发生在通过构造函数创建一个对象和它的属性（就象我们之前通过 `Car` 对象类型所做的那样）并且显式地定义了单独的属性（如 `m`yCar.color = "red"）之时。如果最初使用索引定义了一个对象属性，例如 `myCar[5] = "25"`，则只可能通过 `myCar[5]` 引用它。

这条规则的例外是从与HTML对应的对象，例如 `forms` 数组。对于这些数组的元素，总是既可以通过其序号（依据其在文档中出现的顺序），也可以按照其名称（如果有的话）访问它。举例而言，如果文档中的第二个 `<form>` 标签有一个 `NAME` 属性且值为` "myForm"，访问该 form 的方式可以是 document.forms[1]，document.forms["myForm"]或 document.myForm。`

为对象类型定义属性

可以通过 `prototype `属性为之前定义的对象类型增加属性。这为该类型的所有对象，而不是仅仅一个对象增加了一个属性。下面的代码为所有类型为 `car `的对象增加了 `color` 属性，然后为对象 `car1` 的 `color` 属性赋值：

```js
Car.prototype.color = null;
car1.color = "black";
```

#### 定义方法

**方法是关联到某个对象的函数**，或者简单地说，一个方法是一个值为某个函数的对象属性。定义方法就像定义普通的函数，除了它们必须被赋给对象的某个属性

```js
objectName.methodname = function_name;

var myObj = {
    myMethod: function(params) {
        // ...do something
    }

    // 或者 这样写也可以
    myOtherMethod(params) {
        // ...do something else
    }
};
```

这里 `objectName` 是一个已经存在的对象，`methodname` 是方法的名称，而 `function_name` 是函数的名称。

可以在对象的上下文中象这样调用方法：

```js
object.methodname(params);
```

可以在对象的构造函数中包含方法定义来为某个对象类型定义方法。

```js
// 定义的 car对象定义一个函数格式化并显示其属性
function displayCar() {
  var result = `A Beautiful ${this.year} ${this.make} ${this.model}`;
  pretty_print(result);
}
```

这里 `pretty_print` 是一个显示横线和一个字符串的函数。注意使用 this 指代方法所属的对象。

可以在对象定义中通过增加下述语句将这个函数变成 `Car` 的方法：

```js
this.displayCar = displayCar;
```

因此，`Car` 的完整定义看上去将是：

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}
// 为每个对象调用 displayCar 方法
car1.displayCar();
car2.displayCar();
```

#### 通过 `this` 引用对象

JavaScript 有一个特殊的关键字 `this`，它可以在方法中使用以指代当前对象。例如，假设有一个名为 `validate` 的函数，它根据给出的最大与最小值检查某个对象的 `value` 属性：

```
function validate(obj, lowval, hival) {
  if ((obj.value < lowval) || (obj.value > hival)) {
    alert("Invalid Value!");
  }
}
```

然后，可以在每个元素的 `onchange` 事件处理器中调用 `validate`，并通过 `this` 传入相应元素，代码如下：

```
<input type="text" name="age" size="3"
  onChange="validate(this, 18, 99)">
```

总的说来， `this` 在一个方法中指调用的对象。

当与 `form` 属性一起使用时，`this `可以指代当前对象的父窗体。在下面的例子中，窗体 `myForm` 包含一个 `Text `对象和一个按钮，当用户点击按键，`Text` 对象的值被设为窗体的名称。按钮的 `onclick` 事件处理器使用 `this.form` 以指代其父窗体，即 `myForm`。

```
<form name="myForm">
<p><label>Form name:<input type="text" name="text1" value="Beluga"></label>
<p><input name="button1" type="button" value="Show Form Name"
     onclick="this.form.text1.value = this.form.name">
</p>
</form>
```

### **定义 getters 与 setters**

**getter**是一个获取某个特定属性的值的方法。**setter**是一个设定某个属性的值的方法。可以为预定义的或用户定义的对象定义 getter 和 setter 以支持新增的属性。定义 getter 和 setter 的语法采用对象字面量语法。

```js
// 简单介绍getters 和 setters 是如何为用户定义的对象object 工作
var object = {
    a: 7,
    get b() { 
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2
    }
};
// 7
console.log(object.a); 
// 8
console.log(object.b); 
o.c = 50;
// 25
console.log(object.a); 
```

object 对象的属性如下：

- `object.a` — 数字
- `object.b` — 返回 `object.a` + 1 的 getter
- `object.c` — 由  `object.c` 的值所设置 `object.a` 值的 setter

**请注意在一个对象字面量语法中定义getter和setter使用"[gs]et property()"的方式（相比较于define[GS]etter)时，并不是获取和设置某个属性自身，容易让人误以为是"[gs]et propertyName(){ }"这样错误的使用方法。定义一个getter或setter函数使用语法"[gs]et property()"，定义一个已经声明的函数作为的getter和setter方法，使用`Object.defineProperty`(或者 `Object.prototype.__defineGetter__` 旧语法回退)**

定义属性year的getter和setter：

```js
// 使用getter和setter方法扩展 Date
var d = Date.prototype;
// 定义属性year的getter和setter方法用到了Date类中已存在的getFullYear和setFullYear方法。
Object.defineProperty(d, "year", {
    get: function() { 
        return this.getFullYear()
    },
    set: function(y) {
        this.setFullYear(y)
    }
});
```

通过一个Date对象使用getter和setter:

```js
var now = new Date();
// 2000
console.log(now.year);
// 987617605170
now.year = 2001; 
console.log(now);
```

原则上，getter 和 setter 既可以：

- 使用 **使用对象初始化器**定义
- 也可以之后随时使用 getter 和 setter 添加方法添加到任何对象

当使用 **使用对象初始化器**的方式定义getter和setter时，只需要在getter方法前加get，在setter方法前加set，当然，getter方法必须是无参数的，setter方法只接受一个参数(设置为新值）

```js
var o = {
    a: 7,
    get b() { 
        return this.a + 1;
    },
    set c(x) { 
        this.a = x / 2;
    }
};
```

使用**Object.defineProperties**的方法，同样也可以对一个已创建的对象在任何时候为其添加getter或setter方法。这个方法的第一个参数是想定义getter或setter方法的对象，第二个参数是一个对象，这个对象的属性名用作getter或setter的名字，属性名对应的属性值用作定义getter或setter方法的函数;

下面是一个例子定义了和前面例子一样的getter和setter方法：

```js
var o = { a:0 }

Object.defineProperties(o, {
    "b": { get: function () { return this.a + 1; } },
    "c": { set: function (x) { this.a = x / 2; } }
});

o.c = 10 // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b) // Runs the getter, which yields a + 1 or 6
```

**这两种定义方式的选择取决于的编程风格和手头的工作量。当定义一个原型准备进行初始化时，可以选择第一种方式，这种方式更简洁和自然。但是，当需要添加getter和setter方法 —— 因为并没有编写原型或者特定的对象 ——使用第二种方式更好。第二种方式可能更能表现JavaScript语法的动态特性——但也会使代码变得难以阅读和理解。**

### 删除属性

可以用 delete 操作符删除一个**不是继承而来**的属性。

```js
//创建一个对象
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

//删除对象的一个属性
delete myobj.a;
```

**如果一个全局变量不是用 `var` 关键字声明的话，也可以用 `delete` 删除它：**

```js
g = 17;
delete g;
```

### 比较对象

**在 JavaScript 中 objects 是一种引用类型。两个独立声明的对象永远也不会相等，即使他们有相同的属性，只有在比较一个对象和这个对象的引用时，才会返回true.**

```js
// 两个变量, 两个具有同样的属性、但不相同的对象
var fruit = {
    name: "apple"
};
var fruitbear = {
    name: "apple"
};
// 返回false
fruit == fruitbear 
// 返回false 全等于
fruit === fruitbear // return false
```

**注意:** "===" 运算符用来检查数值是否相等: 1 === "1"返回false，而1 == "1" 返回true

```js
// 两个变量, 同一个对象
var fruit = {name: "apple"};
// 将fruit的对象引用(reference)赋值给 fruitbear
var fruitbear = fruit;  
// 也称为将fruitbear“指向”fruit对象
// fruit与fruitbear都指向同样的对象
// 返回true
fruit == fruitbear
// 返回true
fruit === fruitbear 
```