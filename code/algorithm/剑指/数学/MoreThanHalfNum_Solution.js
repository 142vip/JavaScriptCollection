
/**
 * 数组中出现次数超过一半的数字
 * 借助map计数即可
 * 难度：简单
 * @param numbers
 * @returns {number}
 * @constructor
 */
function MoreThanHalfNumSolution (numbers) {
  const map = new Map()

  numbers.forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })

  const arr = [...new Set(numbers)]

  let result = 0

  arr.forEach(item => {
    if (2 * map.get(item) > numbers.length) {
      result = item
    }
  })

  return result
}
