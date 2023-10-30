# 算法相关文档格式模版

## 题目链接

- [牛客网]()

## 题目描述

## 刷题思路

## 代码实现

@[code js](@code/algorithm/sword-point/双指针/findContinuousSequence.js)

```js

// 注意是连续递增数列，间距为1 那么可以将序列开始、结束元素看做 a 、 b
// 按照数列求和公式sum=（首项+尾项）* 项数 /2 即可
function FindContinuousSequence(sum) {
  // 按照sum值，先预估大概最多满足条件的序列
  // sum=(b+a)(b-a+1)/2
  let left = 1
  let right = 2

  const result = []
  while (left < right) {
    // 从left....right的序列求和
    const tempSum = (right + left) * (right - left + 1)
    if (2 * sum === tempSum) {
      // 满足条件
      let count = left
      const tempArr = []
      while (count <= right) {
        tempArr.push(count)
        count++
      }
      result.push(tempArr)
      // 向前寻找
      left++
    } else if (2 * sum > tempSum) {
      // 右边向右
      right++
    } else {
      // 左边向右
      left++
    }
  }

  return result
}


```

## 一些建议
