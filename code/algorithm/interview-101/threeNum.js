/**
 * 暴力枚举，无法通过
 */
function threeSum(num) {
  // 从小排序
  num = num.sort((a, b) => a - b)
  const len = num.length
  const result = []
  for (let mid = 1; mid < len - 1; mid++) {
    // 查找左边
    for (let left = 0; left < mid; left++) {
      // 查找右边
      for (let right = mid + 1; right < len; right++) {
        if (num[left] + num[mid] + num[right] === 0) {
          result.push([num[left], num[mid], num[right]])
        }
      }
    }
  }
  return result
}

console.log(threeSum([-2, 0, 1, 1, 2]))
