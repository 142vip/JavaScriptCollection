---
title: 数值的整数次方
permalink: /solo-algorithm/sword-point/power.html
---

# 数值的整数次方

## 题目链接

- [牛客网]()

## 题目描述

## 刷题思路

## 代码实现

@[code js](@algorithm/sword-point/分治/power.js)

```js
/**
 * 除法计算
 * @param base
 * @param exponent
 */
function Power(base, exponent) {
  let result = 1
  if (exponent === 0) {
    return result
  }
  if (exponent > 0) {
    // 正数
    while (exponent > 0) {
      result *= base
      exponent--
    }
    return result
  }

  // 负数 取反 绝对值 abs
  // let abs=Math.abs(exponent)
  let abs = -exponent
  while (abs > 0) {
    result *= base
    abs--
  }
  // 分数处理
  return 1 / result
}
```

## 一些建议
