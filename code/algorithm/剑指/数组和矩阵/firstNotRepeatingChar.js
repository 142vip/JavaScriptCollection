/*
 * @Description:第一个只出现一次的字符
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-28 22:23:51
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-04-28 22:24:20
 */

/**
 * 利用indexOf和lastIndexOf角标不一致
 * @param str
 * @returns {number}
 */
function firstNotRepeatingCharOne(str) {
  const arr = str.split('')
  for (let index = 0; index < arr.length; index++) {
    if (arr.indexOf(arr[index]) === arr.lastIndexOf(arr[index])) {
      return index
    }
  }
  return -1
}


/**
 * 数组按字母查找
 * @param str
 * @returns {number}
 */
function firstNotRepeatingCharTwo(str) {
  const len = str.length
  for (let index = 0; index < len - 1; index++) {
    const s = str.slice(index, index + 1)
    const remainStr = `${str.slice(0, index)}${str.slice(index + 1)}`
    if (remainStr.indexOf(s) === -1) {
      return index
    }
  }
  return -1
}


/**
 * 使用Map结构计数
 * @param str
 * @returns {number|*}
 */
function firstNotRepeatingCharThree(str) {
  const resMap = new Map()
  const resArr = str.split('')

  // 计数操作
  resArr.forEach((r, index) => {
    if (resMap.has(r)) {
      resMap.set(r, resMap.get(r) + 1)
    } else {
      resMap.set(r, 1)
    }
  })

  for (const [key, value] of resMap) {
    if (value === 1) {
      return str.indexOf(key)
    }
  }

  return -1
}


console.log(firstNotRepeatingCharOne('google'))
console.log(firstNotRepeatingCharTwo('google'))
console.log(firstNotRepeatingCharThree('google'))
