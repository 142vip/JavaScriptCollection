**class跟let、const一样：不存在变量提升、不能重复声明**

es5面向对象写法跟传统的面向对象语言（比如 C++ 和 Java）差异很大，很容易让新学习这门语言的程序员感到困惑。

ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。通过class关键字，可以定义类。

ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

```js
// es5写法
function Fn(x, y) {
    this.x = x;
    this.y = y;
}

Fn.prototype.add = function () {
    return this.x + this.y;
};
// 等价于
// es6写法
class Fn{
    // 构造函数
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
	// 添加方法
    add(){
        return this.x + this.y;
    }
}

var F = new Fn(1, 2);
// 调用函数，输出3
console.log(F.add())
```

构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。

```js
class Fn {
    constructor() {
        // add code here
    }

    add() {
        // add code here
    }

    sub() {
        // add code here
    }
}

// 等同于
Fn.prototype = {
    constructor() {},
    add() {},
    sub() {},
};
```

**类的内部所有定义的方法，都是不可枚举的（non-enumerable）**，这与es5不同。

```js
// es5写法
var Fn = function (x, y) {
    // add code here
};

Point.prototype.add = function() {
    // add code here
};
// 调用，输出["toString"]
Object.keys(Fn.prototype)
// 调用，输出["constructor","add"]
Object.getOwnPropertyNames(Fn.prototype)

// es6写法
class Fn {
    constructor(x, y) {
        // add code here
    }

    add() {
        // add code here
    }
}
// 调用，输出[]
Object.keys(Fn.prototype)
// 调用，输出["constructor","add"]
Object.getOwnPropertyNames(Fn.prototype)
```

#### 严格模式

**类和模块的内部，默认就是严格模式**，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。

考虑到未来所有的代码，其实都是运行在模块之中，所以 **ES6 实际上把整个语言升级到了严格模式。** 严格模式主要有以下限制;

- 变量必须声明后在使用
- 函数的参数不能有同名属性, 否则报错
- 不能使用with语句 (说实话我基本没用过)
- 不能对只读属性赋值, 否则报错
- 不能使用前缀0表示八进制数,否则报错 (说实话我基本没用过)
- 不能删除不可删除的数据, 否则报错
- 不能删除变量delete prop, 会报错, 只能删除属性delete global[prop]
- eval不会在它的外层作用域引入变量
- eval和arguments不能被重新赋值
- arguments不会自动反映函数参数的变化
- 不能使用arguments.caller (说实话我基本没用过)
- 不能使用arguments.callee (说实话我基本没用过)
- 禁止this指向全局对象
- 不能使用fn.caller和fn.arguments获取函数调用的堆栈 (说实话我基本没用过)
- 增加了保留字（比如protected、static和interface



#### constructor

onstructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

```js
class Fn {
}

// 等同于
class Fn {
  constructor() {}
}
```

constructor方法默认返回实例对象（即this），完全可以指定返回另外一个对象。

```js
class Foo {
  constructor() {
    return Object.create(null);
  }
}
// false
new Foo() instanceof Foo

// constructor函数返回一个全新的对象，结果导致实例对象不是Foo类的实例。
```

#### 类必须使用new调用

类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

```js
class Foo {
    // 构造函数，返回空对象创建
    constructor() {
        return Object.create(null);
    }
}

// TypeError: Class constructor Foo cannot be invoked without 'new'
Foo()
```

#### Class 表达式

与函数一样，类也可以使用表达式的形式定义。

```js
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};
```

上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是MyClass而不是Me，**Me只在 Class 的内部代码可用，指代当前类。**

```js
let inst = new MyClass();
// Me
inst.getClassName() 
// ReferenceError: Me is not defined
Me.name 
```

如果类的内部没用到的话，可以省略Me，也就是可以写成下面的形式。

```js
const MyClass = class { /* ... */ };
```

采用 Class 表达式，可以写出立即执行的 Class。

```js
let person = new class {
    // 构造函数赋值
    constructor(name) {
        this.name = name;
    }

    sayName() {
        // 打印参数
        console.log(this.name);
    }
}('张三');
// 打印，输出“张三”
person.sayName();
```

上面代码中，person是一个立即执行的类的实例。

#### 私有方法和私有属性

私有方法/私有属性是常见需求，但 ES6 不提供，只能通过变通方法模拟实现。（以后会实现）

通常是在命名上加以区别。

```js
class Fn {
    // 公有方法
    foo () {
        //....
    }
    // 假装是私有方法（其实外部还是可以访问）
    _bar() {
        //....
    }
}
```

#### 原型的属性

class定义类时，只能在constructor里定义属性，在其他位置会报错。

如果需要在原型上定义方法可以使用：

1. Fn.prototype.prop = value;
2. Object.getPrototypeOf()获取原型，再来扩展;
3. Object.assign(Fn.prototype,{在这里面写扩展的属性或者方法});

#### Class 的静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。

如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

ES6 明确规定，Class 内部只有静态方法，没有静态属性。

```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

// 'hello'
Foo.classMethod()

var foo = new Foo();

// TypeError: foo.classMethod is not a function
foo.classMethod()


//静态属性只能手动设置
class Foo {
}
Foo.prop = 1;
// 调用， 输出1
Foo.prop 
```

#### get、set

```js
// 定义类，实现get、set方法
class Fn{
    constructor(){
        this.arr = []
    }
    get bar(){
        return this.arr;
    }
    set bar(value){
        this.arr.push(value)
    }
}


let obj = new Fn();

obj.menu = 1;
obj.menu = 2;
// 调用 输出[1,2]
console.log(obj.menu)
// 调用 输出[1,2]
console.log(obj.arr)
```

#### 类的继承

- 用法

```js
class Fn {
}

class Fn2 extends Fn {
}
```

- 注意

子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。**如果不调用super方法，子类就得不到this对象。**

```js
class Point { /* ... */ }

class ColorPoint extends Point {
    constructor() {
        //必须调用
        super()
    }
}

// ReferenceError
let cp = new ColorPoint(); 

```

**父类的静态方法也会被继承。**

#### Object.getPrototypeOf()

Object.getPrototypeOf() 方法可以用来从子类上获取父类。

```js
Object.getPrototypeOf(Fn2) === Fn
// true
```

**因此，可以使用这个方法判断，一个类是否继承了另一个类。**

#### super 关键字

super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。

作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错。

```js
class A {}

class B extends A {
    constructor() {
        super();
    }
}
```

上面代码中，子类B的构造函数之中的super()，代表调用父类的构造函数。这是必须的，否则 JavaScript 引擎会报错。

注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此**super()在这里相当于A.prototype.constructor.call(this)。**

第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

```js
class A {
    p() {
        return 2;
    }
}

class B extends A {
    constructor() {
        super();
        console.log(super.p()); // 2
    }
}

let b = new B();

```

上面代码中，子类B当中的super.p()，就是将super当作一个对象使用。这时，super在普通方法之中，指向A.prototype，所以super.p()就相当于A.prototype.p()。

由于this指向子类，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。

```js
class A {
    constructor() {
        this.x = 1;
    }
}

class B extends A {
    constructor() {
        super();
        this.x = 2;
        super.x = 3;
        // 调用，输出undefined
        console.log(super.x); 
        // 调用，输出3
        console.log(this.x); 
    }
}

let b = new B();

```

上面代码中，super.x赋值为3，这时等同于对this.x赋值为3。而当读取super.x的时候，读的是A.prototype.x，所以返回undefined。