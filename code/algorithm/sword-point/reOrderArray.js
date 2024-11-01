/**
 * odd 奇数  even: 偶数
 * 借用临时变量 遍历  【可通过测试】
 */
function reOrderArray(array) {
  // 奇数,偶数；
  const oddArr = []
  const evenArr = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 !== 0) {
      // 奇数
      oddArr.push(array[index])
    }
    else {
      // 偶数
      evenArr.push(array[index])
    }
  }

  // 拼接
  return oddArr.concat(evenArr)
}

console.log(reOrderArray([2, 4, 6, 5, 7]))
