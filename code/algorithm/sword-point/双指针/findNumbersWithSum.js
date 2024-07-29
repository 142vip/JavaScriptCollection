/**
 * 【中等】和为S的两个数字
 */

/**
 * 利用双指针
 * @param array
 * @param sum
 * @returns {*[]}
 */
function findNumbersWithSumOne(array, sum) {
  let left = 0; let right = array.length - 1
  while (left < right) {
    if (array[left] + array[right] === sum) {
      // 第一个就返回
      return [array[left], array[right]]
    }
    else if (array[left] + array[right] > sum) {
      // 向左逼近
      right--
    }
    else {
      // 向右逼近
      left++
    }
  }
  return []
}

/**
 * 注意数组array是递增的
 * 利用二分查找
 * @param array
 * @param sum
 * @returns {*[]}
 */
function findNumbersWithSumTwo(array, sum) {
  let left = 0
  let right = array.length - 1
  // 将最小值标记设置成最大
  let min = array[right] * array[right]
  let result = []
  while (left < right) {
    if (array[left] + array[right] === sum) {
      // 符合条件
      if (min > array[left] * array[right]) {
        // 最小值
        min = array[left] * array[right]
        result = [array[left], array[right]]
      }
      left++
      right--
    }
    else if (array[left] + array[right] < sum) {
      // 左边向右逼近
      left++
    }
    else {
      // 右边向左逼近
      right--
    }
  }
  return result
}

/**
 * 利用map来存放数据，便于查找
 * @param array
 * @param sum
 */
function findNumbersWithSumThree(array, sum) {
  const resultMap = new Map()
  for (const a of array) {
    resultMap.set(a, true)
  }
  for (const a of array) {
    if (resultMap.has(sum - a)) {
      return [a, sum - a]
    }
  }
  return []
}

/**
 * 暴力方案
 * @param array
 * @param sum
 */
function findNumbersWithSumFour(array, sum) {
  const len = array.length
  for (let index = 0; index < len; index++) {
    const firstValue = array[index]
    for (let j = index + 1; j < len; j++) {
      if (array[j] === sum - firstValue) {
        return [firstValue, array[j]]
      }
    }
  }
  return []
}

console.log(findNumbersWithSumOne([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21))
console.log(findNumbersWithSumTwo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21))
console.log(findNumbersWithSumThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21))
console.log(findNumbersWithSumFour([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21))
