function NumberOf1 (n) {
  // 记录1的个数
  let count = 0

  // 循环验证
  while (n !== 0) {
    // 加+1 记录
    count++
    // 取与
    n = n & (n - 1)
  }
  return count
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
