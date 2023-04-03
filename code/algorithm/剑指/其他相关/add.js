/**
 * 【简单】不用加减乘除做加法
 */


/**
 * 利用自增
 * @param num1
 * @param num2
 */
function addOne(num1, num2) {
  // 整数递增
  if (num2 > 0) {
    while (num2 > 0) {
      num2--
      num1++
    }
  }

  // 负数递减
  if (num2 < 0) {
    while (num2 < 0) {
      num2++
      num1--
    }
  }
  return num1
}

/**
 * 利用位运算【递归】
 * @param num1
 * @param num2
 */
function addTwo(num1, num2) {
  return num2 ? addTwo(num1 ^ num2, (num1 & num2) << 1) : num1
}


/**
 * 利用位运算【循环】
 * @param num1
 * @param num2
 * @returns {number}
 */
function addThree(num1, num2) {
  let result = 0
  let carry = 0
  do {
    // 不带进位的加法
    result = num1 ^ num2
    // 进位
    carry = (num1 & num2) << 1
    num1 = result
    num2 = carry
  } while (carry !== 0) // 进位不为0则继续执行加法处理进位
  return result
}

console.log(addOne(1, 2))
console.log(addTwo(3, 4))
console.log(addThree(3, 4))
