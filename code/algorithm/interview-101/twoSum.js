/**
 * 给出一个整数数组，请在数组中找出两个加起来等于目标值的数
 */

/**
 * 利用左右双指针
 */
function twoSum(numbers, target) {
  const len = numbers.length

  for (let left = 0; left < len; left++) {
    for (let right = len - 1; right > left; right--) {
      if (numbers[left] + numbers[right] === target) {
        return [left + 1, right + 1]
      }
    }
  }
}

/**
 * 利用map对象来存储已经遍历的数据
 */
function twoSumByMap(numbers, target) {
  // 从左到右循环，进入map
  const map = new Map()

  for (let left = 0; left < numbers.length; left++) {
    if (map.has(target - numbers[left]) && map.get(target - numbers[left]) !== (left + 1)) {
      // 则在左边找到元素
      const right = map.get(target - numbers[left])
      return [right, left + 1]
    }
    // 有点倒排索引的意思
    map.set(numbers[left], left + 1)
  }
}

console.log(twoSum([3, 2, 4], 6))
console.log(twoSumByMap([0, 4, 3, 0], 0))
