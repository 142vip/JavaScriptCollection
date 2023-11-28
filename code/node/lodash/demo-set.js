/**
 * Lodash集合相关操作
 */

const _ = require('lodash')

// countBy:  计数
console.log(_.countBy([6.1, 4.2, 6.3], Math.floor))
// => { '4': 1, '6': 2 }
// The `_.property` iteratee shorthand.
console.log(_.countBy(['one', 'two', 'three'], 'length'))
// => { '3': 2, '5': 1 }


// each: 遍历
// forEach: 遍历
_([1, 2]).forEach(function(value) {
  console.log(value)
})
// => Logs `1` then `2`.
_.forEach({ a: 1, b: 2 }, function(value, key) {
  console.log(key)
})
// => Logs 'a' then 'b' (iteration order is not guaranteed).


// every:断言，返回true|false
_.every([true, 1, null, 'yes'], Boolean)
// => false
const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: false }
]
// The `_.matches` iteratee shorthand.
console.log(_.every(users, { user: 'barney', active: false }))
// => false
// The `_.matchesProperty` iteratee shorthand.
console.log(_.every(users, ['active', false]))
// => true
// The `_.property` iteratee shorthand.
console.log(_.every(users, 'active'))
// => false


// filter: 过滤
const userList = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false }
]
console.log(_.filter(userList, function(o) { return !o.active }))
// => objects for ['fred']
// The `_.matches` iteratee shorthand.
console.log(_.filter(userList, { age: 36, active: true }))
// => objects for ['barney']
// The `_.matchesProperty` iteratee shorthand.
console.log(_.filter(userList, ['active', false]))
// => objects for ['fred']
// The `_.property` iteratee shorthand.
console.log(_.filter(userList, 'active'))
// => objects for ['barney']

// reject: filter反方法，过滤非真值


// find: 查询
// groupBy : 分组
// includes: 包含
// keyBy：迭代函数遍历，创建一个对象组成
// map:  迭代函数遍历，返回数组
// orderBy: 指定迭代函数进行排序
// partition：创建一个分成两组的元素数组
// reduce:   通过迭代函数遍历
// sample:  集合中获取随机值
// shuffle: 集合元素随机打乱
// size: 返回集合的长度，支持类数组、字符串、对象
// some: 筛选，判断是否存在，返回true|false
// sortBy: 创建元素数组，迭代函数处理结果升序排序
