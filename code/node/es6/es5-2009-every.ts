const nums = [12, 14, 33, 25, 28]


// 判断数组中的值是否全部超过15的
const over15 = nums.every(num => {
  return num > 15
})

// 输出 false
console.log(over15)
