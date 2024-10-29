/**
 * 检测是否为USD字符
 * @param str
 */
function isUSD(str) {
  if (!str.startsWith('$')) {
    return false
  }
  if (str.indexOf('.')) {
    // 小数
    const arr = str.split('.')
    if (arr[1].length !== 2) {
      return false
    }
    const strArr = arr[0].split(',')

    for (let index = 0; index < strArr.length; index++) {
      if (strArr[index].length !== 3) {
        return false
      }
    }
    return true
  }

  const strArr = str.split(',')

  for (let index = 0; index < strArr.length; index++) {
    if (strArr[index].length !== 3) {
      return false
    }
  }

  return true
}

isUSD('$20,933,209.93')
