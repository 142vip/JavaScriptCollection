function NumberOf1(n) {
  // 记录1的个数
  let count = 0
  // 循环验证
  while (n !== 0) {
    // 加+1 记录
    count++
    // 取与
    n = n & (n - 1)
  }
  return count
}
