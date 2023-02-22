/**
 * 删除指定元素
 * @param nums
 * @param val
 */
const removeElement = function (nums, val) {
  // 等于val值的个数
  return nums.filter(item => item !== val)
}

console.log(removeElement([3, 2, 2, 3], 3))
