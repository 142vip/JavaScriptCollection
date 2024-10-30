/**
 * 除法计算
 * @param base
 * @param exponent
 */
export function Power(base, exponent) {
  let result = 1
  if (exponent === 0) {
    return result
  }
  if (exponent > 0) {
    // 正数
    while (exponent > 0) {
      result *= base
      exponent--
    }
    return result
  }

  // 负数 取反 绝对值 abs
  // let abs=Math.abs(exponent)
  let abs = -exponent
  while (abs > 0) {
    result *= base
    abs--
  }
  // 分数处理
  return 1 / result
}
