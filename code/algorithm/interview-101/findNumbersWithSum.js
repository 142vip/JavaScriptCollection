/**
 * 注意array是递增的
 * @param array
 * @param sum
 */
function FindNumbersWithSum(array, sum) {
  let left = 0
  let right = array.length - 1

  let sumResult = []
  // 定义无穷大Infinity 或者直接sum值的平方
  let min = sum ** 2
  // let min=Infinity
  while (left < right) {
    const tempSum = array[left] + array[right]
    if (tempSum < sum) {
      // 向右
      left++
    }

    if (tempSum > sum) {
      // 向左
      right--
    }

    if (tempSum === sum) {
      // 已找到符合条件的元素，需要对齐进行乘积比较
      if (min > array[left] * array[right]) {
        // 假定为最小值
        min = array[left] * array[right]
        sumResult = [array[left], array[right]]
      }
      // left向右
      left++
      // right向左
      right--
    }
  }

  // left===right 退出
  return sumResult
}

console.log(FindNumbersWithSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 21))
