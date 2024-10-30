/**
 * 翻转单词顺序列
 */

/**
 * 偷懒做法
 */
export function ReverseSentence(str) {
  return str.split(' ').reverse().join(' ')
}

// 先将每个字符翻转 再将所有翻转
// nowcoder. a am I ---> .redocwon a ma I -----> I am a nowcoder.
function ReverseSentence01(str) {
  const arr = str.split(' ')

  for (let index = 0; index < arr.length; index++) {
    // 翻转字符串
    arr[index] = reverseStr(arr[index])
  }
  // 翻转数组 拼接
  return reverseArr(arr).join(' ')
}

function reverseStr(str) {
  let result = ''
  for (let index = str.length - 1; index >= 0; index--) {
    result += str[index]
  }
  return result
}

function reverseArr(arr) {
  const result = []
  for (let index = arr.length - 1; index >= 0; index--) {
    result.push(reverseStr(arr[index]))
  }

  return result
}

console.log(ReverseSentence01('nowcoder. a am I'))
