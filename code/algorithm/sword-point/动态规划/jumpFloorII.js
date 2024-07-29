/**
 * 利用Math函数计算幂
 * @param number
 * @returns {number}
 */
function jumpFloorIIOne(number) {
  return 2 ** (number - 1)
}

/**
 * 利用左移运算
 * @param number
 * @returns {number}
 */
function jumpFloorIITwo(number) {
  //     return 1<<(number-1)
  return 1 << --number
}

console.log(jumpFloorIIOne(2))
console.log(jumpFloorIITwo(4))
