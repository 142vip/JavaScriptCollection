/**
 * 先排序，利用出现一次特性
 */
function findNumsAppearOnceOne(array) {
  // 数组中元素要么出现一次，要么出现两次，可以先对元素进行排序有点偷懒的样子
  array = array.sort((a, b) => a - b)
  const len = array.length
  // 此时的 数组已经进过排序
  const onceResult = []

  // 在开头
  if (array[0] !== array[1]) {
    onceResult.push(array[0])
  }
  // 在中间
  for (let index = 1; index < len - 1; index++) {
    if (array[index - 1] !== array[index] && array[index] !== array[index + 1]) {
      onceResult.push(array[index])
    }
  }
  // 在结尾
  if (array[array.length - 1] !== array[array.length - 2]) {
    onceResult.push(array[array.length - 1])
  }
  return onceResult
}

/**
 * 利用Map统计出现次数
 */
function findNumsAppearOnceTwo(array) {
  const resMap = new Map()
  // 统计
  for (const value of array) {
    if (resMap.has(value)) {
      resMap.set(value, resMap.get(value) + 1)
    }
    else {
      resMap.set(value, 1)
    }
  }

  const onceResult = []
  // 找出出现一次的
  for (const [key, value] of resMap) {
    if (value === 1) {
      onceResult.push(key)
    }
  }
  // 按从小到大输出
  return onceResult.sort((a, b) => a - b)
}

/**
 * 利用异或运算
 */
function findNumsAppearOnceThree(array) {
  let res1 = 0
  let res2 = 0
  let temp = 0
  // 遍历数组得到a^b
  for (let i = 0; i < array.length; i++) { temp ^= array[i] }
  let k = 1

  // 找到两个数不相同的第一位
  while ((k & temp) === 0) { k <<= 1 }
  for (let i = 0; i < array.length; i++) {
    // 遍历数组，对每个数分类
    if ((k & array[i]) === 0) { res1 ^= array[i] }
    else { res2 ^= array[i] }
  }

  // 升序
  return res1 > res2 ? [res2, res1] : [res1, res2]
}

console.log(findNumsAppearOnceOne([1, 2, 3, 3, 2, 9]))
console.log(findNumsAppearOnceTwo([1, 2, 3, 3, 2, 9]))
console.log(findNumsAppearOnceThree([1, 2, 3, 3, 2, 9]))
