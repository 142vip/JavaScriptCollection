/**
 * 【中等】调整数组顺序使奇数位于偶数前面
 */

// 利用空间
function reOrderArray(array) {
  // 奇数,偶数；
  const oddArr = []; const evenArr = []
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 !== 0) {
      // 奇数
      oddArr.push(array[index])
    } else {
      // 偶数
      evenArr.push(array[index])
    }
  }

  // 拼接
  return oddArr.concat(evenArr)
}

// 利用冒泡，遇见偶数往最后放，统一前移
