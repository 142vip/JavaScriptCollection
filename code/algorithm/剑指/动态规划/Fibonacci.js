/**
 * 斐波拉契数列，递归调用
 * 难度：入门
 * @param n
 * @returns {*}
 * @constructor
 */
function Fibonacci (n) {
  return n < 2 ? n : Fibonacci(n - 1) + Fibonacci(n - 2)
}

/**
 * 斐波拉契数列，非递归调用
 * 难度：入门
 * @param n
 */
function Fibonacci01 (n) {
  let a = 0; let b = 1

  if (n < 2) {
    return n
  }
  let result = 0
  for (let index = 2; index <= n; index++) {
    // 求和
    result = a + b
    a = b
    b = result
  }
  return result
}
