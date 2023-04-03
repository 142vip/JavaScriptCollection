/*
 * @Description:数组中出现次数超过一半的数字
 * 难度：简单
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-28 22:23:51
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-28 22:24:20
 */


/**
 * Map计数
 * @param numbers
 * @returns {number}
 */
function moreThanHalfNumOne(numbers) {
  const resMap = new Map()
  // 计数
  numbers.forEach(item => {
    if (resMap.has(item)) {
      resMap.set(item, resMap.get(item) + 1)
    } else {
      resMap.set(item, 1)
    }
  })

  // 数组去重
  const arr = [...new Set(numbers)]
  // 找出出现一半的数字
  let result = 0
  arr.forEach(item => {
    if (2 * resMap.get(item) > numbers.length) {
      result = item
    }
  })
  return result
}


/**
 * 借助数组排序
 * @param numbers
 * @returns {*}
 */
function moreThanHalfNumTwo(numbers) {
  // 排序 升序或降序都行
  numbers = numbers.sort()

  const len = numbers.length
  // 注意：数组长度为1
  if (len === 1) {
    return numbers[0]
  }
  for (let i = 0; i < len; i++) {
    const firstIndex = numbers.indexOf(numbers[i])
    const lastIndex = numbers.lastIndexOf(numbers[i])

    if (firstIndex > -1 && lastIndex > -1 && firstIndex !== lastIndex && 2 * (lastIndex - firstIndex + 1) > len) {
      return numbers[i]
    }
  }

  return 0
}

/**
 * 选举出重复最多，再判断是否超过半数
 * @param numbers
 * @returns {number|*}
 */
function moreThanHalfNumThree(numbers) {
  let cond = -1
  let cnt = 0
  // 选举
  for (let i = 0; i < numbers.length; ++i) {
    if (cnt === 0) {
      cond = numbers[i]
      ++cnt
    } else {
      if (cond === numbers[i]) ++cnt
      else --cnt
    }
  }
  cnt = 0

  // 计数
  for (const k of numbers) {
    if (cond === k) ++cnt
  }
  if (cnt > numbers.length / 2) return cond
  return 0
}


console.log(moreThanHalfNumOne([1, 2, 3, 2, 2, 2, 5, 4, 2]))
console.log(moreThanHalfNumTwo([1, 2, 3, 2, 2, 2, 5, 4, 2]))
console.log(moreThanHalfNumTwo([1, 1]))
console.log(moreThanHalfNumThree([1, 2, 3, 2, 2, 2, 5, 4, 2]))
