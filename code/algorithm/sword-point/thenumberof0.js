function theNumberOf0(n) {
  let result = 1
  let count = 0
  for (let index = 1; index <= n; index++) {
    result *= index
    if (result % 10 === 0) {
      count++
      // 避免溢出
      result /= 10
    }
  }

  return count
}
console.log(theNumberOf0(10000000))
