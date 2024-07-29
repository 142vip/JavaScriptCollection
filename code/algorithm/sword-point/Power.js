/**
 * Math.power(base,exponent)
 * 保证base和exponent不同时为0。不得使用库函数，同时不需要考虑大数问题，也不用考虑小数点后面0的位数。
 * @param {double} base
 * @param {int} exponent
 */
function Power(base, exponent) {
  let result = 1

  if (exponent > 0) {
    // 正数
    while (exponent > 0) {
      result *= base
      exponent--
    }
    return result
  }
  else if (exponent < 0) {
    // 负数 取反 绝对值 abs
    let abs = Math.abs(exponent)
    while (abs > 0) {
      result *= base
      abs--
    }
    return 1 / result
  }
  else {
    // 0 返回1
    return result
  }
}

console.log(Power(2.10000, 3))
