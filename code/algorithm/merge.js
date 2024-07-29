/**
 * @param A int整型一维数组
 * @param B int整型一维数组
 */
function merge(A, m, B, n) {
  let pre = 0
  let next = 0
  let result = []
  while (pre < m && next < n) {
    if (A[pre] < B[next]) {
      result.push(A[pre])
      pre++
    }
    else if (A[pre] >= B[next]) {
      result.push(B[next])
      next++
    }
  }
  // A的元素都遍历完了，B没有遍历完，next<n,将后面的元素都追加到result后面
  if (pre === m) {
    // 连接后要重新赋值
    result = result.concat(B.slice(next))
  }
  // B的元素都遍历完了
  if (next === n) {
    result = result.concat(A.slice(pre))
  }
  return result
}
console.log(merge([], 0, [1], 1))
