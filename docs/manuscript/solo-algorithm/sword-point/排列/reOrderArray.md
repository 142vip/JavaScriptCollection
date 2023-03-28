/*
 * @Description: 【中等】调整数组顺序使奇数位于偶数前面
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-05-03 15:56:06
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 07:54:38
 */

// 利用空间
function reOrderArray(array) {
  // 奇数,偶数；
  const oddArr = []; const evenArr = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 !== 0) {
      // 奇数
      oddArr.push(array[index])
    } else {
      // 偶数
      evenArr.push(array[index])
    }
  }

  // 拼接
  return oddArr.concat(evenArr)
}

// 利用冒泡，遇见偶数往最后放，统一前移



# 算法相关文档格式模版




### 题目链接

- [牛客网]()
- [欢迎讨论]()

### 题目描述


### 思路


### 代码实现

@[code js](@code/algorithm/剑指/栈队列堆/firstAppearingOnce.js)

### 一些建议