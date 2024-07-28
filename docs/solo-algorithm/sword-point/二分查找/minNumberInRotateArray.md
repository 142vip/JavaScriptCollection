---
title: 旋转数组的最小数字
permalink: /solo-algorithm/sword-point/min-rotate-number.html
---
# 旋转数组的最小数字

## 题目链接

- [牛客网](https://www.nowcoder.com/practice/9f3231a991af4f55b95579b44b7a01ba)

## 题目描述

有一个长度为 n 的非降序数组，比如[1,2,3,4,5]，将它进行旋转，即把一个数组最开始的若干个元素搬到数组的末尾，变成一个旋转数组，比如变成了[3,4,5,1,2]，或者[4,5,1,2,3]这样的。请问，给定这样一个旋转数组，求数组中的最小值。

数据范围：1≤n≤10000，数组中任意元素的值:0≤val≤10000

要求：空间复杂度：O(1) ，时间复杂度：O(logn)

示例：

```bash
#输入：
[3,4,5,1,2]
#返回值：
1
```

## 刷题思路

## 代码实现

@[code js](@algorithm/sword-point/二分查找/minNumberInRotateArray.js)

## 一些建议
