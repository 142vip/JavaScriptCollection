---
title: 替换空格
permalink: /solo-algorithm/sword-point/replace-space.html
---

# 替换空格

## 题目链接

- [牛客网](https://www.nowcoder.com/practice/0e26e5551f2b489b9f58bc83aa4b6c68)

## 题目描述

请实现一个函数，将一个字符串s中的每个空格替换成“%20”。
例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。

数据范围: 0≤len(s)≤1000 。保证字符串中的字符为大写英文字母、小写英文字母和空格中的一种。

示例：

```js
// 输入：
'We Are Happy'
// 返回值：
'We%20Are%20Happy'
```

## 刷题思路

- 方案一： 使用字符串、数组的api方法，先split进行``切割，在使用join进行`%20`连接成字符串

- 方案二： 利用循环进行拼接，对于多拼的`%20`进行切割

## 代码实现

@[code js](@algorithm/sword-point/数组和矩阵/replaceSpace.js)

## 一些建议

- 熟练使用字符串和数组的api方法
