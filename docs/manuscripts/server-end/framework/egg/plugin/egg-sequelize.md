---
title: egg-sequelize
---



## 安装

```bash

## egg-sequelize插件安装
npm install egg-sequelize --save

## mysql或者mariadb数据库，安装mysql2
npm install mysql2 --save

## postgreSQL数据库，安装pghe pg-hstore
npm install pg pg-hstore --save

## msSQL数据库，安装
npm install tedious --save

```

需要提示的是：

- msSQL是微软的SQLServer数据库
- egg-sequelize在处理mysql的业务中使用非常频繁

另外，这里除了下载`egg-sequelize`插件外，至于需要下载其他什么数据库支撑模块(eg:mysql2/pg-hstore/tedious)是根据`config.js`文件中`dialect: 'mysql'`的配置来进行选择的。


## 配置


### 开启插件

```js
// config/plugin.js

exports.sequelize={
    enable:true,
    package:'egg-sequelize'
}

```

### 数据库配置

众所周知，mysql数据库的连接需要进行用户名/密码/端口/主机等相关配置，在`egg-sequelize`插件中也不例外

```js
// config/config.{env}.js

exports.sequelize = {
  dialect: 'mysql', // 支持 mysql, mariadb, postgres, mssql等数据库
  database: 'test', // 数据库名称
  host: 'localhost',    // 服务主机地址
  port: 3306,   // 端口
  username: 'root', // 用户名
  password: '', // 密码
  delegate: 'myModel', // 【可选】加载所有的模型models到 `app[delegate]` and `ctx[delegate]`对象中，进行委托, 默认是model
  baseDir: 'my_model', // 【可选】加载 `app/${baseDir}`文件夹下的所有js文件作为models,默认为 `model`
  exclude: 'index.js', // 【可选】加载所有模型models时，忽略 `app/${baseDir}/index.js` 文件，支持文件路径和数组
  
  
  // 其他默认配置参数
};

```

除了上面列举的常用的`sequelize`配置参数，`egg-sequelize`插件还有一些默认的配置，如下：

```js
module.exports = {
    delegate: 'model',
    baseDir:'model',
    logging(...args) {
      // if benchmark enabled, log used
      const used = typeof args[1] === 'number' ? `[${args[1]}ms]` : '';
      app.logger.info('[egg-sequelize]%s %s', used, args[0]);
    },
    host: 'localhost',
    port: 3306,
    username: 'root',
    benchmark: true,
    define: {
      freezeTableName: false, // 表名是否和model的js文件名一致
      underscored: true,
    },
};
```


## 模板文件

默认情况下，将与数据库表字段对应的mode文件放在`app/model`下，`egg-sequelize`插件会自动加载和处理。


### 默认约定

model文件 | 加载后类名 |
- | :-: |
  `user.js` | `app.model.User` |
  `person.js` | `app.model.Person`|
  `user_group.js`|`app.model.UserGroup`|
  `user/profile.js`|`app.model.User.Profile`|

另外：

- 默认情况下，model生成的表中存在`timestamp`类型的时间字段：`create_at-->datetime`、`update_at-->datetime`

- 列名使用下划线风格进行命名，例如：`user_id`、`create_time`



### 使用示例


#### 基础

定义model文件

```js
// app/model/user.js

module.exports = app => {
  // 字段数据类型
  const { STRING, INTEGER, DATE } = app.Sequelize;

  // model定义
  const User = app.model.define('user', {
    login: STRING,
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  // 定义findByLogin()方法，框架里一般放在service层
  User.findByLogin = async function(login) {
      // 注意this对象为当前model实例
    return await this.findOne({
      where: {
        login: login
      }
    });
  }

  //  不能使用箭头函数
  User.prototype.logSignIn = async function() {
    return await this.update({ last_sign_in_at: new Date() });
  }

  return User;
};
```

由于在默认配置`options.delegate`设置的是`model`进行委托，所以`app.model`对象就是一个`sequelize`实例，可以很轻松的使用其内置函数，例如：

- `app.model.sync()`: 数据库model与字段同步
- `app.model.query()`: 执行自定义sql语句


现在可以在`controller`层中，使用封装的方法来操作数据库了

```js
// app/controller/user.js
class UserController extends Controller {
  async index() {
    const users = await this.ctx.model.User.findAll();
    this.ctx.body = users;
  }

  async show() {
    const user = await this.ctx.model.User.findByLogin(this.ctx.params.login);
    await user.logSignIn();
    this.ctx.body = user;
  }
}


```


### 关联

可以通过`Model.associate()`来定义表之间的关联关系，`egg-sequelize`将会在模块model加载完毕后执行`associate()`,创建关联



### 多数据源

`egg-sequelize`支持加载多个独立的数据库配置，连接多个数据库数据源。可以使用`config.sequelize.datasources`来配置和加载多个数据源

```js
// config/config.default.js
exports.sequelize = {
  datasources: [
    {
      delegate: 'model', // 加载所有的model文件到ctx.model和app.model中进行委托
      baseDir: 'model', // 从 `app/model/*.js`中加载model文件
      database: 'biz',
      ...
      // 关于sequelize的其他配置
    },
    {
      delegate: 'admninModel', // 加载所有的model文件到ctx.admninModel和app.admninModel中进行委托
      baseDir: 'admin_model', // 从 `app/admin_model/*.js`中加载model文件
      database: 'admin',
      ...
       // 关于sequelize的其他配置
    },
  ],
};

```

按照上面的示例，配置多数据源后，model可以像下面一样定义：

```js

// app/model/user.js 【对应model】
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    login: STRING,
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};

// app/admin_model/user.js 【对应adminModel】
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.adminModel.define('user', {
    login: STRING,
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};

```

如果按照上面的配置，对不同的数据源定义了相同的model，相同的model文件将会在不同的数据库中执行多次，因此可以使用第二个参数去获取`sequelize`实例对象。

```js

// app/model/user.js

// 如果model下的js文件将在不同的数据源中被加载多次。可以使用第二个参数(app,model),去获取到sequelize实例 
module.exports = (app, model) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = model.define('user', {
    login: STRING,
    name: STRING(30),
    password: STRING(32),
    age: INTEGER,
    last_sign_in_at: DATE,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};

```


### 自定义sequelize

默认情况下，`egg-sequelize`将会使用`sequelize@5`,也就是V5版本.可以通过配置`config.sequelize.Sequelize`来自定义`sequelize`的对象版本。

```js
// config/config.default.js
exports.sequelize = {

  // require引入的是项目中自己下载的sequelize版本
  Sequelize: require('sequelize'),
};

```


### 完整的示例


```js
// app/model/post.js
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Post = app.model.define('Post', {
    name: STRING(30),
    user_id: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  // 建立表之间的关联
  Post.associate = function() {
    app.model.Post.belongsTo(app.model.User, { as: 'user' });
  }

  return Post;
};
```

在`controller`层中使用model，来操作数据库

```js
// app/controller/post.js
class PostController extends Controller {
  async index() {
    const posts = await this.ctx.model.Post.findAll({
      // 查询指定字段
      attributes: [ 'id', 'user_id' ],
      // 关联查询
      include: { model: this.ctx.model.User, as: 'user' },
      // 条件查询
      where: { status: 'publish' },
      // 排序
      order: 'id desc',
    });

    this.ctx.body = posts;
  }

  async show() {
    const post = await this.ctx.model.Post.findByPk(this.params.id);
    const user = await post.getUser();
    post.setDataValue('user', user);
    this.ctx.body = post;
  }

  async destroy() {
    // params路由传参
    const post = await this.ctx.model.Post.findByPk(this.params.id);
    await post.destroy();
    this.ctx.body = { success: true };
  }
}

```


### 同步model到数据库中

强烈建议使用[sequelize-migrations](https://sequelize.org/master/manual/migrations.html)来创建或者迁移数据

**当然在开发环境中，可以使用sync()方法进行数据库同步。**


### 迁移

使用[sequelize-cli]可以帮助管理数据库，数据结构和原始数据，这个也是基于[sequelize-migrations](https://sequelize.org/master/manual/migrations.html)来的



### 扩展

个人在[egg-sequelize](https://www.npmjs.com/package/egg-sequelize)插件的基础上，开发了[egg-sequelize-plus](https://www.npmjs.com/package/egg-sequelize-plus)插件，来解决生产环境中自动创建数据库的问题，同时优化sequelize对象加载；