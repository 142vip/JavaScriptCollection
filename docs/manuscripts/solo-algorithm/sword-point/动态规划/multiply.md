# 矩形覆盖




### 题目链接

- [牛客网]()
- [欢迎讨论]()

### 题目描述


### 思路

### 代码实现

@[code js](@code/algorithm/剑指/动态规划/multiply.js)

```js

/**
 * 【简单】构建乘积数组
 * @param array
 * @returns {*[]}
 */
function multiply(array) {
  const result = []

  for (let index = 0; index < array.length; index++) {
    // result.push(array.slice(0, index).reduce((res, item) => res * item, 1) * array.slice(index + 1).reduce((res, item) => res * item, 1))
    result.push([...array.slice(0, index), ...array.slice(index + 1)].reduce((res, item) => {
      return res * item
    }, 1)) // 给res的初始值为1
  }
  return result
}

console.log(multiply([1, 2, 3, 4, 5]))



```


### 一些建议