---
title: 剪绳子
permalink: /solo-algorithm/sword-point/cut-rope.html
---
# 剪绳子

## 题目链接

- [牛客网](https://www.nowcoder.com/practice/57d85990ba5b440ab888fc72b0751bf8)

## 题目描述

给你一根长度为 n 的绳子，请把绳子剪成整数长的 m 段（ m 、 n 都是整数， n > 1 并且 m > 1 ， m <= n ），每段绳子的长度记为 k[1],...,k[m] 。请问 k[1]*k[2]*...*k[m] 可能的最大乘积是多少？例如，当绳子的长度是 8 时，我们把它剪成长度分别为 2、3、3 的三段，此时得到的最大乘积是 18 。

数据范围：2≤n≤60
进阶：空间复杂度O(1) ，时间复杂度O(n)

示例：

```bash
#输入：
8
#返回值：
18
#说明：
8 = 2 +3 +3 , 2*3*3=18
```

## 刷题思路

- 贪心思想

## 代码实现

@[code js](@algorithm/sword-point/贪心思想/cutRope.js)

## 一些建议
