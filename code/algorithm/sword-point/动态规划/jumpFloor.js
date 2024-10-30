/**
 * 【简单】跳台阶  递归，要么跳一阶，要么跳两阶
 * 思路： 对于第number台阶，只能从第number-1或者number-2上跳上来
 * 记作： G(number)=G(number-1)+G(number-2)
 * 即： 从第number-1跳上来的次数+从第number-2上跳上来的次数
 *
 */

/**
 * 递归实现
 */
function jumpFloorOne(number) {
  // 递归，要么跳一阶，要么跳两阶
  return number < 3 ? number : jumpFloorOne(number - 1) + jumpFloorOne(number - 2)
}

/**
 * 非递归调用
 */
function jumpFloorTwo(number) {
  let a = 1
  let b = 2
  let result = 1

  for (let index = 3; index <= number; index++) {
    result = a + b
    a = b
    b = result
  }
  return result
}

console.log(jumpFloorOne(7))
console.log(jumpFloorTwo(7))
