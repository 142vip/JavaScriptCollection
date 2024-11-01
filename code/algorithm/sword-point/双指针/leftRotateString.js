/**
 * 【中等】左旋转字符串
 */
function LeftRotateString(str, n) {
  // 临界条件
  if (!str || str.length < n) {
    return ''
  }
  // 对k以前的进行翻转
  const firstStr = str.slice(0, n)
  // 对k以后的字符串进行翻转
  const secondStr = str.slice(n)
  // 对拼接后的字符串进行翻转
  return reverseStr(`${reverseStr(firstStr)}${reverseStr(secondStr)}`)
}

/**
 * 偷懒做法
 */
export function LeftRotateString01(str, n) {
  // 两两翻转后，在统一翻转
  return `${str.slice(0, n).split('').reverse().join('')}${str.slice(n).split('').reverse().join('')}`.split('').reverse().join('')
}

/**
 * 旋转数组，交换
 */
function reverseStr(str) {
  const result = str.split('')
  let left = 0
  let right = result.length - 1
  while (left <= right) {
    // 临时值 元素交换
    [result[left], result[right]] = [result[right], result[left]]
    left++
    right--
  }
  return result.join('')
}

LeftRotateString('', 6)
