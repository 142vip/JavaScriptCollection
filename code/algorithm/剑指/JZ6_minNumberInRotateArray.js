/**
 * 数组中最小的
 * @param rotateArray
 * @returns {number}
 */
function minNumberInRotateArray (rotateArray) {
  const len = rotateArray.length
  if (rotateArray.length < 0) {
    return 0
  }
  // 重新整理思路 旋转数组： 非递减  基于分治的思路，对数组进行切割；
  const index = 0
  // 直接二分查找
  if (index < len) {
    console.log(index, len)
  }
}

/**
 * 排序数组
 * @param arr
 * @returns {boolean}
 */
function isSortArr (arr) {
  for (let index = 0; index < arr.length - 1; index++) {
    if (arr[index] > arr[index + 1]) {
      return true
    }
  }
  return false
}

console.log(minNumberInRotateArray([3, 4, 5, 1, 2]))
