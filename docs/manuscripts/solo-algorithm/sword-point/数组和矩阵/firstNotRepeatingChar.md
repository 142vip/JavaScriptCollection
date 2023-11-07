---
title: 第一个只出现一次的字符
permalink: /manuscripts/solo-algorithm/sword-point/first-not-repeating-char.html
---
# 第一个只出现一次的字符

## 题目链接

- [牛客网](https://www.nowcoder.com/practice/1c82e8cf713b4bbeb2a5b31cf5b0417c)

## 题目描述

在一个长为 字符串中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）

数据范围：0≤n≤10000，且字符串只有字母组成。
要求：空间复杂度O(n)，时间复杂度O(n)

## 刷题思路

方法一：

- 使用hashMap数据不重复特性，来标记字母出现的位置，存在则返回角标index

方案二：

- 利用indexOf()和lastIndexOf()方法，如果索引角标不一致，则多次出现

## 代码实现

@[code js](@algorithm/sword-point/数组和矩阵/firstNotRepeatingChar.js)

## 一些建议

- 熟练使用split、lastIndexOf、indexOf方法
- 熟练操作Map对象
