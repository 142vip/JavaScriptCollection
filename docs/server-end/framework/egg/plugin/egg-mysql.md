---
title: egg-mysql
permalink: /server-end/framework/egg-plugin/egg-mysql.html
---

# egg-mysql

时间：2020年10月27日

从基础的Node.js开发开始，当你使用`Egg`框架后，框架一般都会值吃ORM来操作数据库，在`Egg.js`的世界里，操作`MySQL`可选的方案有：

- egg-mysql(**依赖ali-rds模块**)
- egg-sequelize(依赖sequelize模块，非常推荐)

**除了上面的两种之外，还有`Node.js`中常用的`mysql`或者`mysql2`模块，
这里单纯从`egg-mysql`插件和`ali-rds`模块出发，进行使用总结和整理。**

## 安装插件

```bash
## 下载
npm install egg-mysql --save
```

## 配置

模块下载完成后，按照egg.js框架规则，需要先后配置`plugin.js`和对应的`config.js`文件。这样做的目的：

- 配置`plugin.js`: 申明需要使用插件；
- 修改`config.js`: 配置数据库连接相关参数；

```js
// config/plugin.js
// 开启egg-mysql插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
}
```

在开启插件的同时，项目中使用外部数据库就需要进行相关的连接参数配置，值得一提的是：`egg-mysql` 和 `egg-sequelize`
一样，支持多数据库连接。

### 连接单个数据库

```js
// config/xxxx.js
exports.mysql = {
  client: {
    // 主机host
    host: 'mysql.com',
    // 端口
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库
    database: 'test',
  },
  // 加载到app对象中，默认开启
  app: true,
  // 加载到agent对象中，默认关闭
  agent: false,
}
```

获取mysql对象：

```js
// 通过app对象获取mysql单个默认实例【前提：mysql加载到app对象中，即配置中app:true】
// 执行自定义sql语句
app.mysql.query(sql, values)
```

### 连接多个数据库

```js
// config/xxxx.js
exports.mysql = {
  clients: {
    mysql_slave_01: {
      // 主机host
      host: 'mysql.com',
      // 端口
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库
      database: 'test',
    },
    // ... mysql_slave_02
  },
  // default对象，是对所有数据库的默认配置
  default: {},

  // 加载到app对象中，默认开启
  app: true,
  // 加载到agent对象中，默认关闭
  agent: false,
}
```

获取mysql对象：

```js
// 获取mysql_salve_01 实例
const mysqlSlaveClient01 = app.mysql.get('mysql_slave_01')
// 执行自定义sql语句
mysqlSlaveClient01.query(sql, values)

// 获取mysql_salve_02 实例
const mysqlSlaveClient02 = app.mysql.get('mysql_slave_02')
mysqlSlaveClient02.query(sql, values)
```

## 操作教程

前面可以看到，不论是多数据库还是单个数据库，在获取到mysql的连接实例后，都可以通过`query(sql,value)`
来执行自定义的sql语句，有一定基础的一定能够此次展开，完成对数据库的增删改查操作。但是`egg-mysql`
插件是提供了一系列的[语法糖](https://blog.csdn.net/wofreeo/article/details/80679290)

### IO查询

- `query(sql[, values)`
- `queryOne(sql[, values)`
- `select(table, options)`
- `get(table, where, options)`
- `insert(table, row[s], options)`
- `update(table, row, options)`
- `updateRows(table, options)`
- `delete(table, where)`
- `count(table, where)`

### 事务操作(Transactions)

- `beginTransaction()`
- `beginTransactionScope(scope)`

事务众所周知，要么同时成功，要么同时失败；这里提供`beginTransaction()`和`beginTransactionScope(scope)`来实现事务操作

#### Transaction()函数

```js
// 创建事务对象
const tran = await db.beginTransaction()

try {
  // 同步执行，异步无法捕获
  await tran.insert(table, insert_data)
  await tran.update(table, update_data)
  // 提交事务
  await tran.commit()
}
catch (err) {
  // 出现错误进行捕获、操作回滚
  await tran.rollback()
  // 抛出异常，供外部捕获
  throw err
}
```

提供两个方法：

- 事务提交 ：`commit()`
- 事务回滚 ：`rollback()`

#### 指定范围内开启事务

这用到的是beginTransactionScope(scope)分布式事务，自动提交、自动回滚操作；

```js
const result = await db.beginTransactionScope((conn) {
  // 不需要手动进行事务的提交和回滚
  await conn.insert(table, row1);
  await conn.update(table, row2);
  return {success: true};
});
// 如果在scope里抛出异常，将会自动进行回滚
```

#### Koa中开启事务

**在koa框架中使用Transaction事务，但需要确保在koa的context上下文对象中，仅仅存在一个活跃的transaction对象；**

```js

/**
 * @description
 * @param {Object} ctx context上下文
 * @param {Object|Array|String..} data 参数
 *
 **/
async function foo(ctx, data) {
  return await db.beginTransactionScope(async (conn) {
    await conn.insert('user', data);
    return {success: true};
  }, ctx);
}

/**
 * @description
 * @param {Object} ctx context上下文
 * @param {Object|Array|String..} data 参数
 *
 **/
async function bar(ctx, data) {
  return await db.beginTransactionScope(async  (conn) {
    // 使用相同的transaction scope执行foo设置
    await foo(ctx, {foo: 'bar'});
    // 数据插入
    await conn.insert('post', data);
    return {success: true};
  }, ctx);
}
```

### egg-mysql中的事务

从上面的简单例子中可以很容易的学会关于事务(Transaction)的相关操作，这里重点来说一下在`egg-mysql`插件中，`Transaction`
的`api`定义：

#### 手动控制事务

##### 优点

- `beginTraction`,能够在开发者的控制下，完成事务的提交和回滚；

##### 缺点

- 需要写更多的逻辑代码，主要包含`commit()`、`rollback()`、`try...catch()`等
- 当忘记异常捕获或者清除的时候，将可能导致严重的`Bug`

手动控制的事务操作，更上面基础的`Transaction`使用基本一致.

#### 自动控制事务

##### API方法 beginTransactionScope(scope,ctx)

- `scope参数`：将会执行这个事务中所有`sql`语句的生成器函数.

- `ctx参数`：当前请求的上下文对象，即使出现嵌套`Transaction`事务的情况，`ctx`参数也是必须的。在相同时间的请求里仅仅只有一个活跃的事务对象。

##### 优点

- 非常容易使用，不容易犯错，就跟代码里面没有transaction操作一样。
- 不需要手动的进行事务提交和回滚

##### 缺点

- 所有的事务只有成功或者失败两个状态，无法做细粒度控制。

### 工具方法(Utils)

- `escape(value, stringifyObjects, timeZone)`
- `escapeId(value, forbidQualified)`
- `format(sql, values, stringifyObjects, timeZone)`

在`egg-mysql`插件的`Readme.md`说明文档中有很多内容没有提及到，但是前面有说过，`egg-mysql`是依赖于`ali-rds`(有点旧)
,因此关于上面的一些，都是可以从`ali-rds`的[`Readme.md`](https://github.com/ali-sdk/ali-rds#io-queries)
文档中找到的,[参考资料](https://github.com/ali-sdk/ali-rds#io-queries)

现在，我结合`ali-rds`和`egg-mysql`文档整理egg-mysql插件的一些常用操作

### 添加（insert）

```js
// user表中插入单条数据，
const result = await app.mysql.insert('user', { name: 'tom' })

// 判断插入结果
const insertSuccess = result.affectedRows === 1
```

从上面可以看到，利用的`insert`的操作，当然也是能够支持多条数据同时添加的

```js
const users = [{ name: 'dog' }, { name: 'cat' }]

const result = await app.mysql.insert('user', users)
```

值得思考的是：`ali-rds`中也有关于插入操作的详细示例：

**注意ES6中讲yield换为await操作，避免异步无法拿到返回结果**

```js
// 插入单条数据

const row = {
  name: 'fengmk2',
  otherField: 'other field value',
  createdAt: db.literals.now, // `now()` on db server
  // ...
}
const result = await db.insert('user', row)
//  打印结果
console.log(result)

// 插入多条示例

const rows = [
  {
    name: 'tom',
    otherField: 'other field value',
    createdAt: db.literals.now, // 使用mysql数据库中的now()内置方法
    // ...
  },
  {
    name: 'lisa',
    otherField: 'other field value',
    createdAt: db.literals.now, // 使用mysql数据库中的now()内置方法
    // ...
  },
  // ...
]

const results = await db.insert('user', rows)

// 插入结果
console.log(result)
```

### 查询（select）

查询分为多种，较为简单的查询操作可以直接借助get()和select(),凡是复杂一点（聚合、分组、排序等...)的操作，就需要借助query()
来自定义sql执行；

#### 获取一行

```js
// 根据查询对象，类似sequelize的findOne()
const row = await db.get('user', { name: 'tom' })
```

转化成SQL是：

```text
SELECT * FROM `user` WHERE `name` = 'tom'
```

#### 获取多行

```js
//  查询user表中所有数据
const rows = await db.select('user')

  == > SELECT * FROM`user`

// 查询user表中符合查询条件的所有数据
let rows = await db.select('user', {
  where: {
    type: 'javascript'
  },
  columns: ['author', 'title'],
  orders: [['id', 'desc']]
});
```

转化为SQL是：

```text
SELECT`author`, `title` FROM`user` WHERE`type` = 'javascript' ORDER BY`id` DESC
```

上面可以在where对象中通过特定的key来指定匹配条件，`columns`指定获取的数据列，`orders`指定排序方式。

### 删除（delete）

```js
// 根据查询条件删除
const result = await db.delete('user', {
  name: 'tom'
})
```

转换为SQL：

```text
DELETE FROM `user` WHERE `name` = 'tom'
```

### 更新（update）

更新操作分为很多种，但是基本都是根据特定条件更新部分数据，或者更新多条数据

#### 根据主键更新一行数据

```js
// 单行数据
const row = {
  id: 123,
  name: 'tom',
  otherField: 'other field value',
  modifiedAt: db.literals.now, // 对应数据库中的now()函数
}

// 根据主键id更新一行数据row
const result = await db.update('user', row)
```

#### 根据特定条件和指定字段列更新一行数据

```js
// 单行数据
const row = {
  name: 'tom',
  otherField: 'other field value',
  modifiedAt: db.literals.now, // 对应数据库中的now()函数
}
// 满足where条件，更新columns指定理额
const result = await db.update('user', row, {
  where: { name: row.name },
  columns: ['otherField', 'modifiedAt']
})
```

### 根据主键更新多行数据

**这里主要注意：使用的是updateRows()函数**

```js
// 多行数据
const options = [{
  id: 123,
  name: 'tom',
  email: 'tom@161.com',
  otherField: 'other field value',
  modifiedAt: db.literals.now, // 对应数据库中的now()函数
}, {
  id: 124,
  name: 'lisa',
  email: 'lisa@161.com',
  otherField: 'other field value 2',
  modifiedAt: db.literals.now, // 对应数据库中的now()函数
}]

// 更新多行
const result = await db.updateRows('user', options)

// 返回结果
```

### 根据row和where属性更新多行

**这里主要注意：使用的是updateRows()函数**

```js
let options = [{
  row: {
    email: 'tom@161.com',
    otherField: 'other field value',
    modifiedAt: db.literals.now, // 对应数据库中的now()函数
  },
  where: {
    id: 123,
    name: 'tom',
  }
}, {
  row: {
    email: 'lisa@161.com',
    otherField: 'other field value2',
    modifiedAt: db.literals.now, // 对应数据库中的now()函数
  },
  where: {
    id: 124,
    name: 'lisa',
  }
}]

// 更新多行
let result = yield db.updateRows('user', options);

// 返回结果
```

这里需要补充一句：**虽然这里列举了四种常见的更新方法，但实际情况基本的update()
方法可以满足需求。特殊的情况可以考虑直接通过query()执行sql语句实现。**

### 计数（count）

像MySQL等数据库中count()函数计数，统计数据量条数使用是非常频繁的，当然这里也是支持按照条件统计计数

```js
// 查询数量
const count = await db.count('user', {
  type: 'javascript'
});

// sql语句
=>
SELECT
COUNT( *
)
AS
count
FROM`user`
WHERE`type` = 'javascript';
```

### 自定义SQL拼接

```js
// 将数组中的数据与 ? 进行匹配替换
const querySql = 'update posts set hits = (hits + ?) where id = ?'
const results = await app.mysql.query(querySql, [1, postId])
```

### 表达式(Literal)

如果需要调用mysql内置的函数（或表达式），可以使用Literal。

#### 内置表达式

**NOW(): 数据库当前系统时间，通过app.mysql.literals.now获取**。

```js
await app.mysql.insert(table, {
  create_time: app.mysql.literals.now
});

===>
INSERT
INTO`$table`(`create_time`)
VALUES(NOW())
```

#### 自定义表达式

调用mysql内置的CONCAT(s1, ...sn)函数，做字符串拼接。

```js
const Literal = app.mysql.literals.Literal
const first_name = 'lisa'
const last_name = 'marry'

// 添加数据
await app.mysql.insert(table, {
  id: 123,
  full_name: new Literal(`CONCAT("${first_name}", "${last_name}"`),
})

// INSERT INTO `$table`(`id`, `full_name`) VALUES(123, CONCAT("lisa", "marry"))
```

## 最后总结

以上基本整理在项目中可能会使用到的
`mysql`基础操作，但是纵观官方文档和日常使用体验就能看出，`egg-mysql`插件只是抽象出egg.js框架下`mysql`
的简单应用，更多操作还是需要我们去手写`sql`
像关联表操作等还是无法满足，因此基于egg.js框架开发的项目，更多的会推荐使用`sequelize`模块，即：`egg-sequelize`
插件，有兴趣可以很好了解学习一下我的相关笔记文档或者[官网文档](https://www.npmjs.com/package/egg-sequelize)

## 参考文档

- `egg-mysql插件文档`:<https://www.npmjs.com/package/egg-mysql>

- `ali-rds模块文档`:<https://github.com/ali-sdk/ali-rds#io-queries>)
