const arr = [1, 2, 3]

const result: number[] = []
arr.forEach(a => {
  result.push(a * a)
})
// 返回 [1,4,9]
console.log(result)
