/**
 * 【中等】矩形覆盖
 * @param number
 * @returns {number|*}
 */
function rectCover(number) {
  // 应该也是个递归  斐波拉契变形
  // n=1 ---> 1
  // n=2 ---> 2
  // n=3 ---> 3 <---- 1+2
  // n=4 ---> 5 <---- 2+3

  let a = 1 // n=1的情况
  let b = 2 // n=2的情况

  if (number < 3) {
    return number
  }

  let result = 0
  for (let index = 3; index <= number; index++) {
    result = a + b
    a = b
    b = result
  }
  return result
}
