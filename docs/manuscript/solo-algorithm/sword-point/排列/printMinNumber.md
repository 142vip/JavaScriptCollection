

# 把数组排成最小的数




### 题目链接

- [牛客网]()
- [欢迎讨论]()

### 题目描述


### 思路


### 代码实现

@[code js](@code/algorithm/剑指/排列/printMinNumber.js)

```js

// 比较s1,s2的时候，注意比较s1+s2<s2+s1的拼接大小
function PrintMinNumber(numbers) {
  let len = numbers.length
  // 冒泡每次都将最小的放在最前面
  while (len > 0) {
    for (let index = 0; index < numbers.length - 1; index++) {
      if (parseInt(`${numbers[index]}${numbers[index + 1]}`) >= parseInt(`${numbers[index + 1]}${numbers[index]}`)) {
        // 元素交换
        [numbers[index], numbers[index + 1]] = [numbers[index + 1], numbers[index]]
      }
    }
    len--
  }
  return numbers.join('')
}

```

### 一些建议