/*
 * @Description: 最小的K个数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-28 23:12:33
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-28 23:35:30
 */

/**
 * 先排序，后截取（偷懒做法）
 *
 * @param input
 * @param k
 * @returns {*}
 */
function getLeastNumbersOne(input, k) {
  // 直接基于快排，最快速的拿到排序结果也行
  return input.sort((a, b) => a - b).slice(0, k)
}

/**
 * 基于冒泡排序，跑K趟即可
  * @param input
 * @param k
 * @returns {*[]|*}
 */
function getLeastNumbersTwo(input, k) {
  const len = input.length
  // 添加参数校验
  if (k > len) {
    return []
  }
  // 先将输入的数组进行排序从小到大  只排前面几个即可
  // 这里首先想到的是冒泡或者插入排序里面的特性 --- 每次都有一个元素在最终的位置上

  // 循环k次，跑k趟
  for (let index = 0; index < k; index++) {
    // 从后往前找
    for (let j = len - 1; j > index; j--) {
      if (input[index] > input[j]) {
        // 找到比它小的，位置交换
        [input[index], input[j]] = [input[j], input[index]]
      }
    }
  }
  // 排序完毕，输入前k个
  return input.slice(0, k)
}

/**
 * 基于选择排序
 * @param input
 * @param k
 */
function getLeastNumbersThree(input, k) {
  const len = input.length
  for (let i = 0; i < k; i++) {
    // 从前往后找
    for (let j = i; j < len; j++) {
      if (input[i] > input[j]) {
        // 位置互换，从小到大
        [input[i], input[j]] = [input[j], input[i]]
      }
    }
  }

  // 找出前k个
  return input.slice(0, k)
}


/**
 * 基于堆排序
 * @param input
 * @param k
 */
function getLeastNumbersFour(input, k) {
  // todo 构建树 维护小根堆
}


console.log(getLeastNumbersOne([4, 5, 1, 6, 2, 7, 3, 8], 4))
console.log(getLeastNumbersTwo([4, 5, 1, 6, 2, 7, 3, 8], 4))
console.log(getLeastNumbersThree([4, 5, 1, 6, 2, 7, 3, 8], 4))
