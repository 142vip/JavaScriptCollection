const nums = [12, 14, 33, 25, 28]

// 判断数组中的值是否存在超过15的
const over15 = nums.some((num) => {
  return num > 15
})

// 输出 true
console.log(over15)
