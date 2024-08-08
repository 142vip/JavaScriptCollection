/**
 * 求给定字符的最大回文字符串
 * @param str
 * @param len
 */
function getLongestPalindrome(str, len) {
  let max = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const currentStr = str.slice(i, j)
      const reverseStr = str.slice(i, j).split('').reverse().join()

      if (currentStr === reverseStr) {
        // 可以
        max = Math.max(max, j - i + 1)
      }
      else {
        // 不可能是回文
        break
      }
    }
  }
  return max
}

// 测试用例
console.log(getLongestPalindrome('sbcc', 2))
