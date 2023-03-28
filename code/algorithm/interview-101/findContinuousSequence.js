// 指针矛盾了
function FindContinuousSequence(sum) {
  // 首先，序列最少包含两位数，则 x+(x+1)<=sum ===> x<sum/2 暂且向上取整吧
  let left = 1; const right = 2
  let tempSum = 3
  const result = []
  // < 确保序列不断，跳出玄幻时候，left ==right
  while (left < right) {
    // 求和
    if (tempSum === sum) {
      tempSum -= left
    } else if (tempSum < sum) {
      // 向右
      tempSum -= left
      left++
    } else if (tempSum > sum) {
      // 向左
    }
  }

  // 跳出循环
  return result
}

console.log(FindContinuousSequence(9))
