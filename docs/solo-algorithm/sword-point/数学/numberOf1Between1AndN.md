---
title: 从1到n整数中1出现的次数
permalink: /solo-algorithm/sword-point/number-count-in-n.html
---
# 从1到n整数中1出现的次数

## 题目链接

- [牛客网](https://www.nowcoder.com/practice/bd7f978302044eee894445e244c7eee6)

## 题目描述

输入一个整数 n ，求 1～n 这 n 个整数的十进制表示中 1 出现的次数
例如， 1~13 中包含 1 的数字有 1 、 10 、 11 、 12 、 13 因此共出现 6 次

注意：11 这种情况算两次

数据范围：1≤n≤30000
进阶：空间复杂度O(1)  ，时间复杂度O(lognn)

## 刷题思路

方案一：

- 转化为字符串，再遍历计数，属于投机方法

方案二：

- 数学方法，对进位、余数进行处理

## 代码实现

@[code js](@algorithm/sword-point/数组和矩阵/firstNotRepeatingChar.js)

## 一些建议

- 需要特别注意Math的一些操作方法

```js
// 取整，丢弃小数部分,保留整数部分
parseInt(5/2)　　// 2
 

// 向上取整,有小数就整数部分加1
Math.ceil(5/2)　　// 3

// 向下取整,丢弃小数部分
Math.floor(5/2)　　// 2
 
// 四舍五入
Math.round(5/2)　　// 3
 
// 取余
6%4　　// 2
```

- 参考： <https://es6.ruanyifeng.com/#docs/number>
