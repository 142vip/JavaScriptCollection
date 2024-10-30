/**
 * 先转化为数组，再进行拼接
 */
function replaceSpaceOne(s) {
  return s.split(' ').join('%20')
}

/**
 * 利用循环拼接，然后slice剪切多余部分
 */
function replaceSpaceTwo(s) {
  const arr = s.split(' ')
  let str = ''
  for (let index = 0; index < arr.length; index++) {
    str = str.concat('%20').concat(arr[index])
  }
  return str.slice(3)
}

console.log(replaceSpaceOne('We Are Happy'))
console.log(replaceSpaceTwo('We Are Happy'))
