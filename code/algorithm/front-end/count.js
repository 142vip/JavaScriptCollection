/**
 * 计数
 */
function count(str) {
  // 转换为数组后去重
  const originArr = str.split('')
  const arr = [...new Set(originArr)]
  const result = {}
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index]
    let count = 0
    if (value !== ' ') {
      originArr.forEach((item) => {
        if (item === value) {
          count++
        }
      })
      // 对象计数
      result[value] = count
    }
  }
  return result
}

// 调用
count('abTT')
