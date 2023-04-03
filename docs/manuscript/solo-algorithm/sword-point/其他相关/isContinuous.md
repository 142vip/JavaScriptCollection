/**
 * 【中等】扑克牌顺子
 * @param numbers
 * @returns {boolean}
 */
function IsContinuous (numbers) {
  numbers = numbers.sort((a, b) => a - b)

  // 判断0的个数
  let count = 0
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === 0) {
      count++
    }
  }
  // 不允许5个0
  if (count > 4) {
    return false
  }

  // 4个0的时候，一定成立
  if (count === 4) {
    return true
  }

  // 判断每个的间隔
  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] !== 0 && numbers[index + 1] - numbers[index] > 1) {
      //             console.log(count,(numbers[index+1]-numbers[index]))
      count -= (numbers[index + 1] - numbers[index] - 1)
      //             console.log(count)
    }
  }

  if (count === 0) {
    return true
  }
  return false
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
