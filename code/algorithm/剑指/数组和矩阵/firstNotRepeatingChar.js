

/**
 *
 * @param str
 * @returns {number}
 */
function firstNotRepeatingCharOne(str) {
  // 转换为数组
  const arr = str.split('')
  // 数组里面去去重
  for (let index = 0; index < arr.length; index++) {
    if (arr.indexOf(arr[index]) === arr.lastIndexOf(arr[index])) {
      return index
    }
  }
  return -1
}


/**
 *
 * @param str
 */
function firstNotRepeatingCharTwo(str) {
  const len = str.length
  for (let index = 0; index < len - 1; index++) {
    const s = str.slice(index, index + 1)
    if (`${str.slice(0, index)}${str.slice(index + 1)}`.indexOf(s) === -1) {
      return index
    }
  }
  return -1
}
