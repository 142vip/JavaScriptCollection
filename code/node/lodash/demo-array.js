/**
 * Lodash数组相关操作
 */

const _ = require('lodash')


// chunk: 分片 ，指定长度切割
console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
// => [['a', 'b'], ['c', 'd']]
console.log(_.chunk(['a', 'b', 'c', 'd'], 3))
// => [['a', 'b', 'c'], ['d']]


// compact: 过滤假值（false, null,0, "", undefined，NaN）
// concat: 拼接
// difference: 过滤给定数组中的值（来源于数组）
// drop:  创建切片数组
// fill:  指定元素填充
// head: 获取头部元素
// last：获取尾部元素
// indexOf：查找目标元素第一个索引
// lastIndexOf： 查找目标元素最后一个索引
// initial：排除最后一个元素
// intersection： 查找多数组的交集元素
// join： 指定符号连接数组元素
// nth:  返回数组的第n个元素
// pull：移除数组中所有和给定值相等的元素
// remove：移除元素
// reverse：元素反转
// slice： 指定索引裁剪元素
// sortedIndex：排序插入返回索引
// tail：去除第一个元素
// take：提取元素（指定个数）
// union: 创建一个按顺序排列的唯一值的数组
// uniq: 数组去重，第一次出现的元素保留
// without: 提出所有给定值，返回新数组
// xor: 创建给点数组唯一值的数组
// zip: 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推
