
### 快速入门

Sequelize 是一个基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, MariaDB, SQLite 以及 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 预读和延迟加载,读取复制等功能.


### 安装

`Sequelize` 的使用可以通过 npm (或 yarn)模块包管理器进行下载.

```bash
## 下载模块包，默认最新
npm install --save sequelize
```

除了需要`sequelize`模块包，还需要下载数据库驱动（就跟JDBC）一样

```bash
# 选择以下之一:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```


### 数据库连接

要连接到数据库,必须创建一个 `Sequelize` 实例. 这可以通过将连接参数分别传递到 `Sequelize` 构造函数或通过传递一个连接 `URI` 来完成：

```javascript
const { Sequelize } = require('sequelize');

// 方法 1: 传递一个连接 URI
const sequelize = new Sequelize('sqlite::memory:') // Sqlite 示例
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Postgres 示例

// 方法 2: 分别传递参数 (sqlite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
});

// 方法 2: 分别传递参数 (其它数据库)
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  dialect: 'mysql'
});
```

注意在分别传递数据库参数的时候，`sqlite`数据库与其他数据库不一致。



### 测试连接

可以使用 `.authenticate()` 函数测试连接是否正常，**无法连接数据库时，会抛出异常**

```js
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

```


### 关闭连接

默认情况下,`Sequelize` 将保持连接打开状态,并对所有查询使用相同的连接. 如果需要关闭连接,请调用 `sequelize.close()`(这方法异步的并返回一个 Promise对象).



### 新旧数据库

如果你是从0开始一个项目,且你的数据库尚不存在,那么一开始就可以使用 `Sequelize`,以便自动创建数据库中的每个表（糟糕的是，`egg-sequelize`插件由于加载的约束，只能连接存在的数据库）.

除此之外,如果你想使用 `Sequelize` 连接到已经充满了表和数据的数据库,那也可以正常工作！

在两种情况下,`Sequelize` 都能满足使用要求.



### 模型基础概念

模型是通过官方文档中Model一词，直接翻译过来，在使用ORM框架去操作数据库的时候，**模型是 Sequelize 的本质. 模型是代表数据库中表的抽象. 在 Sequelize 中,它是一个 Model 的扩展类.** 模型往往和表字段是一一对应的，这样非常利于封装，类似于Java中的MyBatis。

这部分主要包含：

- 模型基础
- 模型实例

相比官方文档的详细、全面，这里主要从实用出发，总记一套完整、基础、易于上手的模型笔记文档，开始吧~


### 模型定义

在 `Sequelize` 中可以用两种等效的方式定义模型：

* 调用 `sequelize.define(modelName, attributes, options)`
* 扩展 `Model` 并调用 `init(attributes, options)`

**在内部,`sequelize.define` 调用 `Model.init`,因此两种方法本质上是等效的.**

定义模型后,可通过其模型名称在 `sequelize.models` 中使用该模型.

例如，创建一个代表用户的模型,该模型具有一个 `firstName` 和一个 `lastName`. 我们希望将模型称为 `User`,并将其表示的表在数据库中称为 `Users`.

定义该模型的两种：



### 使用`sequelize.define`

```js
// 直接使用sequelize缓存封装，方便举例
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // 在这里定义模型属性
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull 默认为 true
  }
}, {
  // 这是其他模型参数
});

// `sequelize.define` 会返回模型
console.log(User === sequelize.models.User); // true
```

### 扩展 `Model`

```js
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory');

class User extends Model {}

User.init({
  // 在这里定义模型属性
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull 默认为 true
  }
}, {
  // 这是其他模型参数
  sequelize, // 我们需要传递连接实例
  modelName: 'User' // 我们需要选择模型名称
});

// 定义的模型是类本身
console.log(User === sequelize.models.User); // true
```

定义后,我们可以使用 `sequelize.models.User` 访问模型.



## 表名规则


上面两种方法的模型定义中,都未明确定义表名(`Users`). 但是,给出了模型名称(`User`).

默认情况下,当**未提供表名时,Sequelize 会自动将模型名复数并将其用作表名.** 这种复数是通过称为 [inflection](https://www.npmjs.com/package/inflection) 的库在后台完成的,因此可以正确计算不规则的复数(例如 `person -> people`).


### 强制表名称等于模型名称

可以使用 `freezeTableName: true` 参数停止 Sequelize 执行自动复数化. 这样,Sequelize 将推断表名称等于模型名称,而无需进行任何修改：

```js
sequelize.define('User', {
  // ... (属性)
}, {
  freezeTableName: true
});
```

上面的示例将创建一个名为 `User` 的模型,该模型指向一个也名为 `User` 的表.


```js
// sequelize 实例全局定义 强制表名称等于模型名称
const sequelize = new Sequelize('sqlite::memory:', {
  define: {
    freezeTableName: true
  }
});
```

这样全局定义后,所有表将使用与模型名称相同的名称.

### 直接提供表名

直接告诉 Sequelize 表名称：

> 建议数据库表名以tbl开头，例如： tbl_user_list


```js
// tableName指定表名
sequelize.define('User', {
  // ... (属性)
}, {
  tableName: 'Employees'
});
```


## 同步模型

定义模型时,要告诉 `Sequelize` 有关数据库中表的一些信息. 但是:

- 如果该表实际上不存在于数据库中怎么办？

- 如果存在,但具有不同的列,较少的列或任何其他差异,该怎么办？

这两种情况，都是预期情况与实际情况产生差异时，会经常存在的。同时，这也是模型同步的来源.

可以通过调用一个异步函数(返回一个Promise)`model.sync(options)`.  **Sequelize 将自动对数据库执行 SQL 查询.**

特别注意：**这仅更改数据库中的表,而不更改 JavaScript 端的模型.**+

* `User.sync()` - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
* `User.sync({ force: true })` - 将创建表,如果表已经存在,则将其首先删除
* `User.sync({ alter: true })` - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.


```javascript

await User.sync({ force: true });

await User.sync({force:false,alter:true})

```


### 一次同步所有模型

可以使用 `sequelize.sync()` 自动同步所有模型. 示例：

```js
await sequelize.sync({ force: true });
console.log("所有模型均已成功同步.");
```

`sync({ force: true })` 和 `sync({ alter: true })` 可能是破坏性操作（**一旦输出数据库，只能通过数据库日志进行恢复**）. 因此,不建议将它们用于生产级环境中.

### 删除表

```javascript
// 删除单个表，例如：User
await User.drop();

// 删除所有表
await sequelize.drop();

```

注意：

- 删除单个表时，是对应表的模型对象调用drop()方法实现。

- 删除所有表时，是当前连接的sequelize实例调用drop()方法实现。



## 时间戳的使用

**默认情况下,Sequelize 使用数据类型 `DataTypes.DATE` 自动向每个模型添加 `createdAt` 和 `updatedAt` 字段.**

使用`Sequelize` 创建或更新内容时,字段都会被自动设置.

- `createdAt` 字段将包含代表创建时刻的时间戳

- `updatedAt` 字段将包含最新更新的时间戳.


**特别需要注意的是：上面的字段自动管理实在在 Sequelize 级别完成的(即未使用 *SQL触发器* 完成)**.

**直接 SQL 查询(例如,通过任何其他方式在不使用 Sequelize 的情况下执行的查询)将不会导致这些字段自动更新.**

```javascript
// 配置单个表的字段自动管理
sequelize.define('User', {
  // ... (属性)
}, {
  // 是否禁用字段自动管理
  timestamps: false
});
```

也可以只启用 `createdAt`/`updatedAt` 之一,并为这些列提供自定义名称：

```javascript
class Foo extends Model {}
Foo.init({ 
   // ... (属性)
}, {
  sequelize,

  // 这里时间戳必须启用true
  timestamps: true,

  // 不使用createdAt字段
  createdAt: false,

  // 使用 updatedAt字段 但是希望名称叫做 create_time
  updatedAt: 'create_time'
});
```


## 表字段简写

如果关于列的唯一指定内容是其数据类型,可以缩短语法：

```js
// 指定字段name的数据类型
sequelize.define('User', {
  name: {
    type: DataTypes.STRING
  }
});

// 简写
sequelize.define('User', { name: DataTypes.STRING });

```


## 默认值

默认情况下,`Sequelize` 假定列的默认值为 `NULL`. 可以通过将特定的 `defaultValue` 传递给列定义来更改此行为：

```js
sequelize.define('User', {
  name: {
    // string类型
    type: DataTypes.STRING,
    defaultValue: "lisa"
  }
});
```

一些特殊的值,例如 `Sequelize.NOW`,也可以正常使用：

```js
sequelize.define('Foo', {
  bar: {
    // datatime类型
    type: DataTypes.DATETIME,
    // 当前日期/时间
    defaultValue: Sequelize.NOW
  }
});
```


## 数据类型

**在模型中定义的每一列都必须具有数据类型.** `Sequelize` 提供[很多内置数据类型](https://github.com/sequelize/sequelize/blob/master/lib/data-types.js).

要访问内置数据类型,必须导入 `DataTypes`：

```js
// 引入模块，解构出 DataTypes
const { DataTypes } = require("sequelize"); 

```


### 字符串

```js
DataTypes.STRING             // VARCHAR(255)
DataTypes.STRING(1234)       // VARCHAR(1234)
DataTypes.STRING.BINARY      // VARCHAR BINARY
DataTypes.TEXT               // TEXT
DataTypes.TEXT('tiny')       // TINYTEXT

// 仅支持 PostgreSQL 和 SQLite.
DataTypes.CITEXT             // CITEXT          
```

### 布尔

```js
DataTypes.BOOLEAN            // TINYINT(1)
```

### 数字

```js

DataTypes.INTEGER            // INTEGER
DataTypes.BIGINT             // BIGINT
DataTypes.BIGINT(11)         // BIGINT(11)

DataTypes.FLOAT              // FLOAT
DataTypes.FLOAT(11)          // FLOAT(11)
DataTypes.FLOAT(11, 10)      // FLOAT(11,10)

DataTypes.REAL               // REAL            仅支持 PostgreSQL.
DataTypes.REAL(11)           // REAL(11)        仅支持 PostgreSQL.
DataTypes.REAL(11, 12)       // REAL(11,12)     仅支持 PostgreSQL.

DataTypes.DOUBLE             // DOUBLE
DataTypes.DOUBLE(11)         // DOUBLE(11)
DataTypes.DOUBLE(11, 10)     // DOUBLE(11,10)

DataTypes.DECIMAL            // DECIMAL
DataTypes.DECIMAL(10, 2)     // DECIMAL(10,2)

```

#### 无符号和零填充整数

> 仅仅支持MySQL/MariaDB数据库

在 MySQL 和 MariaDB 中,可以将数据类型`INTEGER`, `BIGINT`, `FLOAT` 和 `DOUBLE` 设置为无符号或零填充(或两者),如下所示：

```js

DataTypes.INTEGER.UNSIGNED
DataTypes.INTEGER.ZEROFILL
DataTypes.INTEGER.UNSIGNED.ZEROFILL

```

- 可以指定大小,即INTEGER(10)而不是简单的INTEGER
- 同样适用于 BIGINT, FLOAT 和 DOUBLE


### 日期

```js
// DATETIME 适用于 mysql / sqlite, 带时区的TIMESTAMP 适用于 postgres
DataTypes.DATE

// DATETIME(6) 适用于 mysql 5.6.4+. 支持6位精度的小数秒
DataTypes.DATE(6)

// 不带时间的 DATE
DataTypes.DATEONLY   
```


### UUID

可以通过 `DataTypes.UUID`使用UUID.

- 对于 PostgreSQL 和 SQLite,它会是 `UUID` 数据类型;

- 对于 MySQL,它则变成`CHAR(36)`.

`Sequelize` 可以自动为这些字段生成 `UUID`,只需使用 `Sequelize.UUIDV1` 或 `Sequelize.UUIDV4` 作为默认值即可：

```js
{
  type: DataTypes.UUID
  // 或 Sequelize.UUIDV1
  defaultValue:  Sequelize.UUIDV4
}
```


## 列参数

在定义列时,除了指定列的 `type`、`allowNull` 和 `defaultValue` 参数外,还有很多可用的参数. 下面是一些示例.

```js

// 引入模块并解构
const { Model, DataTypes, Deferrable } = require("sequelize");

class Foo extends Model {}
Foo.init({
  // 实例化将自动将 flag 设置为 true (如果未设置)
  flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

  // 日期的默认值 => 当前时间
  myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

  // 将 allowNull 设置为 false 将为该列添加 NOT NULL,
  // 这意味着如果该列为 null,则在执行查询时将从数据库引发错误.
  // 如果要在查询数据库之前检查值是否不为 null,请查看下面的验证部分.
  title: { type: DataTypes.STRING, allowNull: false },

  // 创建两个具有相同值的对象将引发错误.
  // unique 属性可以是布尔值或字符串.
  // 如果为多个列提供相同的字符串,则它们将形成一个复合唯一键.
  uniqueOne: { type: DataTypes.STRING,  unique: 'compositeIndex' },
  uniqueTwo: { type: DataTypes.INTEGER, unique: 'compositeIndex' },

  // unique 属性是创建唯一约束的简写.
  someUnique: { type: DataTypes.STRING, unique: true },

  // 继续阅读有关主键的更多信息
  identifier: { type: DataTypes.STRING, primaryKey: true },

  // autoIncrement 可用于创建 auto_incrementing 整数列
  incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

  // 你可以通过 'field' 属性指定自定义列名称：
  fieldWithUnderscores: { type: DataTypes.STRING, field: 'field_with_underscores' },

  // 可以创建外键：
  bar_id: {
    type: DataTypes.INTEGER,

    references: {
      // 这是对另一个模型的参考
      model: Bar,

      // 这是引用模型的列名
      key: 'id',

      // 使用 PostgreSQL,可以通过 Deferrable 类型声明何时检查外键约束.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // 参数:
      // - `Deferrable.INITIALLY_IMMEDIATE` - 立即检查外键约束
      // - `Deferrable.INITIALLY_DEFERRED` - 将所有外键约束检查推迟到事务结束
      // - `Deferrable.NOT` - 完全不推迟检查(默认) - 这将不允许你动态更改事务中的规则
    }
  },

  // 注释只能添加到 MySQL,MariaDB,PostgreSQL 和 MSSQL 的列中
  commentMe: {
    type: DataTypes.INTEGER,
    comment: '这是带有注释的列'
  }
}, {
  sequelize,
  modelName: 'foo',

  // 在上面的属性中使用 `unique: true` 与在模型的参数中创建索引完全相同：
  indexes: [{ unique: true, fields: ['someUnique'] }]
});
```


# 模型实例

模型是 [ES6 类](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

类的实例表示该模型中的一个对象(该对象映射到数据库中表的一行). 这样,模型实例就是 [DAOs](https://en.wikipedia.org/wiki/Data_access_object)

```js
// 引入模块，解构
const { Sequelize, Model, DataTypes } = require("sequelize");
// sqlite数据库
const sequelize = new Sequelize("sqlite::memory:");

// 定义user表
const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    // 默认值
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

(async () => {
  // 自动执行同步
  await sequelize.sync({ force: true });
  // 这里是代码
})();
```

## 创建实例

尽管模型是一个类,不应该直接使用 `new` 运算符来创建实例. 相反,应该使用 [`build`](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-build) 方法：

```js
const user = User.build({ name: "Lisa" });

// 判断实例
console.log(user instanceof User); // true
console.log(user.name); // "Lisa"
```

**以上代码根本无法与数据库通信(请注意,它甚至不是异步的)！**

因为 [`build`](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-build) 方法仅创建一个对象,**表示可以映射到数据库的数据**.

为了将这个实例真正保存(**即持久保存**)在数据库中,应使用 [`save`](https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-save) 方法：

```js

// 进行实例对象保存
await user.save();

```

**从`await` 用法来看,`save` 是一种异步方法. 实际上,几乎每个 Sequelize 方法都是异步的. `build` 是极少数例外之一.**

### `create` 方法

Sequelize提供了 [`create`](https://sequelize.org/master/class/lib/model.js~Model.html#static-method-create) 方法,该方法将上述的 `build` 方法和 `save` 方法合并为一个方法：

```js
// 创建持久化对象
const user = await User.create({ name: "Lisa" });

// Lisa 现在存在于数据库中！
console.log(user instanceof User); // true
console.log(user.name); // "Lisa"
```

## 实例记录

将模型实例直接记录到控制台`console.log` 会产生很多问题

因为 `Sequelize` 实例具有很多附加条件. 相反,可以使用 `.toJSON()` 方法(顺便说一句,它会自动保证实例被 `JSON.stringify` 编辑好).

```js

const user = await User.create({ name: "Lisa" });

// 不建议这样输出
console.log(user); 

// 推荐转化为JSON字符串输出
console.log(jane.toJSON()); 
// 当然也推荐序列化后输出
console.log(JSON.stringify(jane, null, 4)); 
```

注意：`JSON.stringify(jane, null, 4)`中，三个参数的使用情况；

## 默认值

当字段未赋值时，内置实例将自动获得默认值：

```js
const user = User.build({ name: "Lisa" });

// favoriteColor字段的默认值为：green
console.log(user.favoriteColor); // "green"
```

## 更新实例

如果需要更改实例的某个字段的值,则再次调用 `save` 将相应地对其进行更新：

```js

const user = await User.create({ name: "Lisa" });

// 当前实例name字段的值
console.log(user.name); // "Lisa"

// 实例对象重新赋值
user.name = "Tom";
// 数据库中的名称仍然是 "Lisa"

// 执行save()更新
await user.save();
// 现在该名称已在数据库中更新为 "Tom"！

```

## 删除实例

可以通过调用 [`destroy`](https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-destroy) 来删除实例:

```js
// 创建实例
const user = await User.create({ name: "Lisa" });

// 获取实例对象属性
console.log(user.name); // "Lisa"

// 删除实例，即：从数据库中删除数据
await user.destroy();

```

## 实例重载

可以通过调用 [`reload`](https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-reload) 从数据库中重新加载实例:

```js
// 创建实例
const user = await User.create({ name: "Lisa" });

// 获取实例对象属性
console.log(user.name); // "Lisa"

// 实例对象重新赋值
user.name = "Tom";
// 数据库中的名称依然是 "Lisa"

// 实例对象重载【不会save()更新数据库】
await jane.reload();
console.log(user.name); // "Lisa"
```

**注意：reload() 调用生成一个 `SELECT` 查询,以从数据库中获取最新数据.**

## 保存部分字段

通过传递一个列名数组,可以定义在调用 `save()` 时应该保存哪些属性.

基于先前定义的对象设置属性时,例如,当你通过 Web 应用程序的形式获取对象的值,这非常有用.

此外,这在 `update` 实现中内部使用. 它是这样的：

```js
// 创建实例对象
const user = await User.create({ name: "Lisa" });

// 获取实例属性
console.log(user.name); // "Jane"
// 属性未初始化赋值，则采用默认值
console.log(user.favoriteColor); // "green"

// 实例对象对象重新赋值
user.name = "Tom;
user.favoriteColor = "blue";

// 保存数据,只更新name属性
await user.save({ fields: ['name'] });

// name属性已更新为Tom
console.log(user.name); // "Tom"
// 显示为 "blue",因为本地对象将其设置为 "blue",在数据库中仍然是 "green"，该字段未作更新
console.log(user.favoriteColor); // "blue"

// 实例对象重载后，获取最新的数据库数据
await user.reload();

// 检查到name属性已改为Tom 其他属性未作更改
console.log(user.name); // "Tome"
console.log(user.favoriteColor); // "green"
```

## 改变对save()的原有认知



`save()`方法在内部进行了优化，只更新真正更改的字段。这意味着，如果不更改任何内容并调用`save()`方法，`Sequelize`将知道`save()`方法是多余的，并且不执行任何操作，即不会生成任何查询（仍返回一个Promise对象，但会立即解决）。


另外，如果在调用`save()`方法时只有几个属性发生了更改，那么在UPDATE操作时，将只发送这些更改字段，以提高性能

## 递增和递减整数值

为了`递增/递减`实例的值而不会遇到并发问题,`Sequelize`提供了 [`increment`](https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-increment) 和 [`decrement`](https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-decrement) 实例方法.

- `increment` 递增
- `decrement` 递减

```js
// 创建实例对象
const user = await User.create({ name: "Lisa", age: 100 });

// age属性+1
const incrementResult = await user.increment('age', { by: 2 });
```

**注意: 如只增加 1, 你可以省略 'by' 参数, 只需执行 `user.increment('age')`**

- 在 PostgreSQL 中, 除非设置了 `{returning：false}` 参数(不然它将是 `undefined`), 否则 `incrementResult` 将是更新后的 user.

- 在其它数据库方言中, `incrementResult` 将会是 `undefined`. 如果你需要更新的实例, 你需要调用 `user.reload()`.


也可以一次递增多个字段：

```js
// 创建实例对象
const user = await User.create({ name: "Lisa", age: 100,cash: 5000 });
await user.increment({
  'age': 2,
  'cash': 100
});

// 如果值增加相同的数量,则也可以使用以下其他语法：
await user.increment(['age', 'cash'], { by: 2 });
```

**递减的工作原理完全相同.**

### 参考资料

- 官方api: https://sequelize.org/master/class/lib/model.js~Model.html