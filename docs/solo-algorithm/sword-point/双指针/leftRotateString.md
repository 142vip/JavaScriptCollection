---
title: 左旋转字符串
permalink: /solo-algorithm/sword-point/left-rotate-str.html
---

# 左旋转字符串

## 题目链接

- [牛客网]()

## 题目描述

## 刷题思路

## 代码实现

@[code js](@algorithm/sword-point/双指针/leftRotateString.js)

```js
/*
 * @Description: 【中等】左旋转字符串
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-30 22:00:13
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-30 22:16:13
 */

function LeftRotateString(str, n) {
  // 临界条件
  if (!str || str.length < n) {
    return ''
  }
  // 对k以前的进行翻转
  const firstStr = str.slice(0, n)
  // 对k以后的字符串进行翻转
  const secondStr = str.slice(n)
  // 对拼接后的字符串进行翻转
  return reverseStr(`${reverseStr(firstStr)}${reverseStr(secondStr)}`)
}

// 偷懒做法
function LeftRotateString01(str, n) {
  // 两两翻转后，在统一翻转
  return `${str.slice(0, n).split('').reverse().join('')}${str.slice(n).split('').reverse().join('')}`.split('').reverse().join('')
}

/**
 * 旋转数组，交换
 * @param {string} str
 * @returns
 */
function reverseStr(str) {
  const result = str.split('')
  let left = 0; let right = result.length - 1
  while (left <= right) {
    // 临时值 元素交换
    [result[left], result[right]] = [result[right], result[left]]
    left++
    right--
  }
  return result.join('')
}
console.log(LeftRotateString('', 6))
```

## 一些建议
