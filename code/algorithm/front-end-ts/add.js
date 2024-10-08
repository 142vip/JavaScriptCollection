/**
 * 累加
 */
function add() {
  // eslint-disable-next-line prefer-rest-params
  const args = Array.prototype.slice.call(arguments)
  const _add = function () {
    // eslint-disable-next-line prefer-rest-params
    console.log('add', arguments)
    // eslint-disable-next-line prefer-rest-params
    args.push(...arguments)

    // 返回函数
    return _add
  }
  // 对参数数组做求和处理
  _add.toString = function () {
    // 设置sum的起始值为0
    return args.reduce((sum, item) => {
      console.log(sum, item)
      return sum + item
    })
  }
  // 返回函数
  return _add
}

const str = add(1, 6)(2)(3)
console.log(str)
// console.log(String(add(1,6)(2)(3)) )
// console.log(add(1)(2)(3))
// console.log(add(1)(2,3,4))
