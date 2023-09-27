
# 包含min函数的栈


### 题目链接

- [牛客网]()
- [欢迎讨论]()

### 题目描述


### 思路


### 代码实现

@[code js](@code/algorithm/剑指/栈队列堆/getMinInJSStack.js)

```javascript
/*
 * @Description: 
 * @Version: Beta1.0
 * @Author: 【B站&公众号】储凡
 * @Date: 2021-04-29 22:04:17
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-29 22:04:36
 */

const result = []
function push(node) {
  if (result) {
    return result.push(node)
  }
}
function pop() {
  if (result.length > 0) {
    return result.pop()
  }
}
function top() {
  if (result.length > 0) {
    return result[result.length - 1]
  }
}
function min() {
  // 对result数组进行排序
  return Math.min(...result)
}


```

### 一些建议