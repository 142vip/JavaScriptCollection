/**
 * 使用数组创建Set集合
 */
const stuSet = new Set([1, 2, 3])

/**
 * 利用add()方法创建Set集合
 */
const studentSet = new Set()
studentSet.add(1)
studentSet.add(2)
studentSet.add(3)

/**
 * 列出集合中所有值
 */
let res = ''
studentSet.forEach((value) => {
  res += value
})
console.log(res)

/**
 * Set集合中没有Key的概念
 * keys()方法和values()方法效果一样
 */
studentSet.values()
