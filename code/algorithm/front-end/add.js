/**
 * 累加
 */
function add(...inputs) {
  const args = Array.prototype.slice.call(inputs)
  const _add = function () {
    console.log('add', inputs)
    args.push(...inputs)
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

add(1, 6)(2)(3)
add(1)(2)(3)
add(1)(2, 3, 4)
