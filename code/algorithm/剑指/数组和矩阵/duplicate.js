/**
 * 方案一：将所有数据排序（升序或者降序都行），如果存在左右相等的情况就是重复了，输出一个即可；
 * 存在问题：时间复杂度依赖sort()函数
 * @param numbers
 * @returns {number|*}
 */
function duplicateOne (numbers) {
  // 升序
  numbers = numbers.sort((a, b) => a - b)
  // 降序
  // numbers = numbers.sort((a, b) => b - a)

  for (let index = 0; index < numbers.length - 1; index++) {
    if (numbers[index] === numbers[index + 1]) {
      // 存在两个元素重复
      return numbers[index]
    }
  }
  return -1
}

/**
 * 方案二：借助空数组，循环遍历目标数组按照index的值放入 如果存在则重复
 * @param numbers
 * @returns {number|*}
 */
function duplicateTwo (numbers) {
  const arr = []
  for (let i = 0; i < numbers.length; i++) {
    // 这部分依赖的是排序后，如果不重复理想情况下：numbers[index]===index的情况
    if (!arr[numbers[i]]) {
      arr[numbers[i]] = 1
    } else {
      // 存在则重复
      return numbers[i]
    }
  }
  return -1
}

/**
 * 方案三： 利用Set集合值唯一的特性
 * @param numbers
 * @returns {number|*}
 */
function duplicateThree (numbers) {
  const set = new Set()
  for (const number of numbers) {
    if (set.has(number)) {
      return number
    }
    set.add(number)
  }
  return -1
}

console.log(duplicateOne([2, 3, 1, 0, 2, 5, 3]))
console.log(duplicateTwo([2, 3, 1, 0, 2, 5, 3]))
console.log(duplicateThree([2, 3, 1, 0, 2, 5, 3]))
