const { lstat } = require('fs-extra')

function isUSD (str) {
  if (!str.startsWith('$')) {
    return false
  }
  str = str.slice(1)
  if (str.indexOf('.') !== -1) {
    // 小数
    const arr = str.split('.')
    if (arr[1].length !== 2) {
      return false
    }

    const strArr = arr[0].split(',')
    if (strArr[0].length > 3) {
      return false
    }
    for (let index = 1; index < strArr.length; index++) {
      if (strArr[index].length !== 3) {
        return false
      }
    }
    return true
  }

  const strArr = str.split(',')
  if (strArr[0].length > 3) {
    return false
  }
  for (let index = 1; index < strArr.length; index++) {
    if (strArr[index].length !== 3) {
      return false
    }
  }

  return true
}

console.log(isUSD('$,344.34'))
