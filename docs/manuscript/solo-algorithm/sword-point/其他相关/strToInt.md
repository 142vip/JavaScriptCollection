/**
 * 【较难】把字符串转换成整数
 * @param str
 * @returns {number|number|number}
 */
function StrToInt (str) {
  if (!str) return 0
  let bool = false; const firstLetter = str[0]
  if (firstLetter === '-') bool = true
  if (firstLetter === '-' || firstLetter === '+') str = str.substring(1)
  const n = Number(str)
  if (n === 0) return 0
  return bool ? -n : n
}
# 算法相关文档格式模版




### 题目链接

- [牛客网]()
- [欢迎讨论]()

### 题目描述


### 思路


### 代码实现

@[code js](@code/algorithm/剑指/栈队列堆/firstAppearingOnce.js)

### 一些建议
