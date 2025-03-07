/**
 *
 * 每一行都按照从左到右递增的顺序排序
 * 每一列都按照从上到下递增的顺序排序
 *
 * 直接循环找 选取右上或者左下元素为起点
 */

/**
 * 右上角元素为起点，确保每个元素都能遍历到，都能按照方向走即可
 */
function findOne(target, array) {
  // 行数
  const row = array.length
  if (row === 0) {
    return false
  }

  // 列数
  const col = array[0].length
  // 此时选择右上为起点
  let r = 0
  let c = col - 1
  while (r < row && c >= 0) {
    if (target === array[r][c]) {
      // 命中目标，返回
      return true
    }
    // 目标元素比右上小，target往左找
    if (target < array[r][c]) {
      c--
    }
    // 目标元素比当前元素大，target往下找
    if (target > array[r][c]) {
      r++
    }
  }
  return false
}

/**
 * - 比较蠢的方法，通过遍历二维数组进行比较
 * - 这里可以将第二层循环改成二分查找【用到从左到右递增的特点】；降低时间复杂度
 */
function findTwo(target, array) {
  const row = array.length
  if (row === 0) {
    return false
  }
  // 列数
  const col = array[0].length

  // 从第0行开始
  for (let r = 0; r < row; r++) {
    let low = 0
    let high = col - 1
    // 注意这个二分查找区间是 []
    while (low <= high) {
      const mid = low + Math.floor((high - low) / 2)
      if (array[r][mid] === target) {
        return true
      }
      // 在左侧，从左边找
      if (array[r][mid] > target) {
        high = mid - 1
      }
      // 在右侧
      if (array[r][mid] < target) {
        low = mid + 1
      }
    }
  }
  return false
}

/**
 * 利用一些api
 * - every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true
 * - some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true
 */
function findThree(target, array) {
  return array.some(arr => arr.includes(target))
}

const targetArr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15],
]

console.log(findOne(19, targetArr))

console.log(findTwo(19, targetArr))

console.log(findThree(19, targetArr))
