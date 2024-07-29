---
title: OP运算符
permalink: /server-end/orm/sequelize/op.html
---

# OP运算符

## 使用

```js
const { Op } = require('sequelize')
```

## API关键字

`Sequelize`框架提供了`Op`操作符来简化一些查询逻辑，例如

```js
const { Op } = require('sequelize')

// 模型查询
User.findAll({
  where: {
    // 且运算(a = 5) AND (b = 6)
    [Op.and]: [{ a: 5 }, { b: 6 }],

    // 或运算 (a = 5) OR (b = 6)
    [Op.or]: [{ a: 5 }, { b: 6 }],

    // 等于
    [Op.eq]: 3,
    // 不等于
    [Op.ne]: 20,
    // 为空
    [Op.is]: null,
    // 不等于true
    [Op.not]: true,
    // 可能等于的值范围
    [Op.or]: [5, 6],

    // 指定数据库列名
    [Op.col]: 'user.organization_id',

    // 大于
    [Op.gt]: 6,
    // 大于等于
    [Op.gte]: 6,
    // 小于
    [Op.lt]: 10,
    // 小于等于
    [Op.lte]: 10,
    // 在范围内
    [Op.between]: [6, 10],
    // 不在范围内
    [Op.notBetween]: [11, 15],

    //
    [Op.all]: sequelize.literal('SELECT 1'), // > ALL (SELECT 1)

    // 在数组范围内
    [Op.in]: [1, 2],
    // 不存在数组范围内
    [Op.notIn]: [1, 2],

    // 满足模糊查询条件
    [Op.like]: '%142vip',
    // 不满足模糊查询条件
    [Op.notLike]: '%142vip',
    // 模糊查询，以什么开始
    [Op.startsWith]: '142vip',
    // 模糊查询，以什么结束
    [Op.endsWith]: '142vip',
    // 模糊查询，条件在中间
    [Op.substring]: '142vip',
    // 只支持PG数据库，模糊查询，以什么结束
    [Op.iLike]: '%142vip',
    // 只支持PG数据库，模糊查询，以什么结束，和上面相反
    [Op.notILike]: '%142vip',
  }
})
```

更多丰富的API关键字定义可以参考[源码类型声明](https://github.com/sequelize/sequelize/blob/main/packages/core/src/operators.ts)

## 一些例子

### 查询范围类型

> 仅限 Postgres数据库 的范围类型

```js
const { Op } = require('sequelize')

// 仅限 Postgres数据库 的范围类型
User.findAll({
  where: {
    // @> '2'::integer
    [Op.contains]: 2,
    // @> [1, 2)
    [Op.contains]: [1, 2],
    // <@ [1, 2)
    [Op.contained]: [1, 2],
    // && [1, 2)
    [Op.overlap]: [1, 2],
    // -|- [1, 2)
    [Op.adjacent]: [1, 2],
    // << [1, 2)
    [Op.strictLeft]: [1, 2],
    // >> [1, 2)
    [Op.strictRight]: [1, 2],
    // &< [1, 2)
    [Op.noExtendRight]: [1, 2],
    // &> [1, 2)
    [Op.noExtendLeft]: [1, 2],
  }
})
```

详细信息，参考[Postgres的范围类型](https://sequelize.org/docs/v6/other-topics/other-data-types/#ranges-postgresql-only)

### 或条件

可以利用`Op.or`运算符实现查询条件的`或运算`，例如：

```js
const { Op } = require('sequelize')

// 查询age小于18或者age等于30的用户
User.findAll({
  where: {
    age: {
      [Op.or]: {
        [Op.lt]: 18,
        [Op.eq]: 30
      }
    },
  }
})
```

### 且条件

可以利用`Op.and`运算符实现查询条件的`且运算`，例如：

```js
const { Op } = require('sequelize')

// 查询name为`142vip.cn`并且age为18的用户信息
User.findAll({
  where: {
    [Op.and]: [
      { name: '142vip.cn' },
      { age: 18 }
    ]
  }
})
```

### 数字比较

对于查询条件中可能需要的数字比较查询，`Op`也提供了丰富的`API`运算符，例如：

```js
const { Op } = require('sequelize')

// 查询age大于18的用户信息
User.findAll({
  where: {
    age: {
      // 大于
      [Op.gt]: 18,
    }
  }
})
```

还可以实现一些更为灵活的`比较查询`，相关`Op`运算符如下：

```js
const { Op } = require('sequelize')

// 模糊查询 支持或运算
User.findAll({
  where: {
    age: {
      // 大于
      [Op.gt]: 18,
      // 大于等于
      [Op.gte]: 18,
      // 小于
      [Op.lt]: 18,
      // 小于等于
      [Op.lte]: 18,
    }
  }
})
```

### 模糊查询

可以利用`Op.like`运算符实现模糊查询，例如：

```js
const { Op } = require('sequelize')

// 对name字段进行模糊查询
User.findAll({
  where: {
    name: {
      [Op.like]: '%142vip%'
    }
  }
})
```

还可以实现一些更为灵活的模糊查询，相关`Op`运算符如下：

```js
const { Op } = require('sequelize')

User.findAll({
  where: {
    name: {
      // 满足模糊查询条件
      [Op.like]: '%142vip',
      // 不满足模糊查询条件
      [Op.notLike]: '%142vip',
      // 模糊查询，以什么开始
      [Op.startsWith]: '142vip',
      // 模糊查询，以什么结束
      [Op.endsWith]: '142vip',
      // 模糊查询，条件在中间
      [Op.substring]: '142vip',
      // 只支持PG数据库，模糊查询，以什么结束
      [Op.iLike]: '%142vip',
      // 只支持PG数据库，模糊查询，以什么结束，和上面相反
      [Op.notILike]: '%142vip',
    }
  }
})
```

### 范围查询

在查询条件中，如果需要进行对一些字段做范围查询，Op也提供了类似 `Op.in` 、 `Op.between` 等运算符，例如：

```js
const { Op } = require('sequelize')

// 查询id等于1或2或3的用户信息
User.findAll({
  where: {
    id: [1, 2, 3]
  }
})
```

上面的代码实现的是基于`id`的条件查询，需要`id`字段命中数组中的值，转换为`SQL`原生语句等价于：

```text
SELECT * FROM tbl_user WHERE id" IN (1, 2, 3);
```

除了在数组范围进行查询，支持 `between` 关键字进行查询，例如：

```js
const { Op } = require('sequelize')

// 丰富的API运算符
User.findAll({
  where: {
    age: {
      // 在范围内
      [Op.between]: [18, 30],
      // 不在范围内
      [Op.notBetween]: [18, 15],
      // 在数组范围内
      [Op.in]: [1, 2],
      // 不存在数组范围内
      [Op.notIn]: [1, 2],
    }
  }
})
```
