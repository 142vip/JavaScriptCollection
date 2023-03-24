/**
 * 连续子数组的最大和 时间复杂度O(n)
 * 难度：简单
 * @param array
 * @returns {number|*}
 * @constructor
 */
function FindGreatestSumOfSubArray(array) {
  // 标记指针
  let index = 0
  // 子串的累计结果
  let sum = 0
  // 子串的累加和最大值，当标记位从
  let max = array[index]

  // 循环
  while (index < array.length) {
    sum += array[index]
    max = sum > max ? sum : max

    // 注意，重新计数,累计求和，从0开始
    sum = sum > 0 ? sum : 0
    index++
  }
  return max
}


# 连续子数组的最大和




### 题目链接

- [牛客网]()
- [欢迎讨论]()

### 题目描述


### 思路

### 代码实现

@[code js](@code/algorithm/剑指/数组和矩阵/FirstNotRepeatingChar.js)


### 一些建议
