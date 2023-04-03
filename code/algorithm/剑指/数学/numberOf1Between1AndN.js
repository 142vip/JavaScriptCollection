/*
 * @Description: 【中等】从1到n整数中1出现的次数
 * @Version: Beta1.0
 * @Author: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2021-04-26 22:23:17
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2021-05-05 15:15:56
 */

/**
 * 转化为字符串，切割成数组后计数
 * @param n
 * @returns {number}
 */
function numberOf1Between1AndNOne(n) {
  let count = 0
  while (n > 0) {
    count += n.toString()
      .split('')
      .reduce((sum, item) => item === '1' ? sum + 1 : sum, 0)
    n--
  }
  return count
}


/**
 * 数学方法
 * @param n
 * @returns {number}
 */
function numberOf1Between1AndNTwo(n) {
  let count = 0
  let bitNum = 1
  // 高位值
  let high = Math.trunc(n / 10)
  // 当前位值
  let cur = n % 10
  let low = 0
  // cur遍历n每一数位
  while (cur !== 0 || high !== 0) {
    if (cur < 1) {
      // case 1: cur == 0
      // cur=0时，高位需要减去一位用于低位进行计算
      // 相当于 count = (high - 1) * bitNum + (99 + 1)
      count += Math.imul(high, bitNum)
    } else if (cur === 1) {
      // case 2: cur == 1
      // 相当于高位+低位计算结果，即(high * bitNum) + (low + 1)
      count += (high * bitNum + low + 1)
    } else {
      // case3: cur > 1
      // 相对于cur=0的情况，就不需要高位减去一位来计算低位的结果数了
      // 相当于(high * bitNum) + (低位数结果数)
      count += (high + 1) * bitNum
    }
    // low、cur、high都像左偏移一个位
    // bitNum表示cur的数位
    low += cur * bitNum
    cur = high % 10

    // 取高位
    high = Math.trunc(high / 10)
    bitNum = bitNum * 10
  }
  return count
}

console.log(numberOf1Between1AndNOne(13))
console.log(numberOf1Between1AndNTwo(13))

