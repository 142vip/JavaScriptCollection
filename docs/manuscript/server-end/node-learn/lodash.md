
# Lodash

- 官网：<https://www.lodashjs.com>

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库， 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Lodash 的模块化方法 非常适用于：

- 遍历 array、object 和 string
- 对值进行操作和检测
- 创建符合功能的函数

### 安装

```bash
## 全局安装
npm i -g npm
## 生产环境安装
npm i --save lodash

```

### 使用

```js
const _ =require('lodash')

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]


```

### 数组

#### 分片(chunk)

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

格式：` _.chunk(array, [size=1])`

参数：

- array (Array): 需要处理的数组
- [size=1] (number): 每个数组区块的长度

返回：返回一个包含拆分区块的新数组（即：二维数组）

实际使用：

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

```

