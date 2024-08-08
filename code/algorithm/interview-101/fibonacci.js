/**
 * 斐波那契数列，递归调用
 * 难度：入门
 * @param n
 * @returns {*}
 */
function fibonacciOne(n) {
  return n < 2 ? n : fibonacciOne(n - 1) + fibonacciOne(n - 2)
}

/**
 * 斐波那契数列，迭代
 * 难度：入门
 */
function fibonacciTwo(n) {
  // 数列初始化
  let firstValue = 0
  let secondValue = 1

  let result = 1

  for (let index = 3; index <= n; index++) {
    result = firstValue + secondValue
    // 前面两列重新赋值
    firstValue = secondValue
    secondValue = result
  }

  return result
}

console.log(fibonacciOne(4))
console.log(fibonacciTwo(4))
