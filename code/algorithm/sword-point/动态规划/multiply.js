/**
 * 【简单】构建乘积数组
 */
function multiply(array) {
  const result = []

  for (let index = 0; index < array.length; index++) {
    // result
    //   .push(
    //     array
    //       .slice(0, index)
    //       .reduce((res, item) => res * item, 1) * array.slice(index + 1)
    //       .reduce((res, item) => res * item, 1)
    //   )
    result.push(
      [
        ...array.slice(0, index),
        ...array.slice(index + 1),
      ].reduce((res, item) => res * item, 1),
    ) // 给res的初始值为1
  }
  return result
}

console.log(multiply([1, 2, 3, 4, 5]))
