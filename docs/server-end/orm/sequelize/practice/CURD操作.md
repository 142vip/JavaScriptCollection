---
title: CURD操作
permalink: /server-end/orm/sequelize/db-curd.html
---

# CURD操作

`CURD`操作是对于数据库的数据执行创建、更新、查询、删除的四种基本操作

## 创建数据

可以利用`create()`方法和`bulkCreate()`方法创建一条或多条数据

### 单条

使用Sequelize框架提供的`create()`方法来实现数据插入，每次最多插入一条，例如：

```js
// 插入1条数据
await User.bulkCreate({
  name: '142vip.cn'
},);
```

### 批量

Sequelize框架提供`bulkCreate()`方法来支持数据批量操作，`bulkCreate()`方法和`create()`
方法用法非常类似，只不过`bulkCreate()`方法接收的是数组，实现多条数据的插入，例如：

```js
// 批量插入2条数据
await User.bulkCreate([
  {name: '142vip.cn'},
  {name: '微信公众号：储凡'}
]);
```

## 更新数据

### 按添加更新

```js
// 
await User.update({
  age: 18
}, {
  where: {
    name: "142vip.cn"
  }
});
```

### 递增&递减

```js
// 递增，对满足条件的数组age字段加5
await User.increment({age: 5}, {where: {id: 1}}) // Will increase age to 

// 递减，对满足条件的数组age字段减5
await User.increment({age: -5}, {where: {id: 1}}) 
```

## 删除数据

按照条件删除信息

```js
// 按条件删除用户
await User.destroy({
  where: {
    name: "微信公众号：储凡"
  }
});
```

如果需要删除表中所有的数据，可以利用`truncate`参数，例如：

```js
// 删除表中所有数据
await User.destroy({
  truncate: true
});
```

## 查询操作

前面介绍过基于Sequelize框架的基础查询，包含：`原始查询`、`模型查询`、`查找器查询`、`子查询`，默认已经了解过这些知识和API方法的使用。
因此，这里主要围绕着常见查询业务，进行代码封装、整理

### 分页

### 排序

### 分组

### 最大、最小值

### 求和

### 计数
