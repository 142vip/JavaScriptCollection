/**
 * Lodash数字相关操作
 */

const _ = require('lodash')

// inRange： 判断是否在范围中
console.log(_.inRange(3, 2, 4))
// => true
console.log(_.inRange(4, 8))
// => true
console.log(_.inRange(4, 2))
// => false
console.log(_.inRange(2, 2))
// => false
console.log(_.inRange(1.2, 2))
// => true
console.log(_.inRange(5.2, 4))
// => false
console.log(_.inRange(-3, -2, -6))
// => true

// random: 返回指定范围随机值
console.log(_.random(0, 5))
// => an integer between 0 and 5
console.log(_.random(5))
// => also an integer between 0 and 5
console.log(_.random(5, true))
// => a floating-point number between 0 and 5
console.log(_.random(1.2, 5.2))
// => a floating-point number between 1.2 and 5.2

// add : 相加
console.log(_.add(6, 4))
// => 10

// divide: 相除
console.log(_.divide(6, 4))
// => 1.5

// multiply: 相乘
console.log(_.multiply(6, 4))
// => 24

// subtract: 相减
_.subtract(6, 4)
// => 2

// sum:  求和
_.sum([4, 2, 8, 6])
// => 20

// ceil:  向上取整
console.log(_.ceil(4.006))
// => 5
console.log(_.ceil(6.004, 2))
// => 6.01
console.log(_.ceil(6040, -2))
// => 6100

// floor: 向下取整
console.log(_.floor(4.006))
// => 4
console.log(_.floor(0.046, 2))
// => 0.04
console.log(_.floor(4060, -2))
// => 4000

// round: 四舍五入
console.log(_.round(4.006))
// => 4
console.log(_.round(4.006, 2))
// => 4.01
console.log(_.round(4060, -2))
// => 4100

// max: 最大值
console.log(_.max([4, 2, 8, 6]))
// => 8
console.log(_.max([]))
// => undefined

// mean: 求平均值
console.log(_.mean([4, 2, 8, 6]))
// => 5

// min: 最小值
console.log(_.min([4, 2, 8, 6]))
// => 2
console.log(_.min([]))
// => undefined
