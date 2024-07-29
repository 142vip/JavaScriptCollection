/**
 * dayjs的查询操作
 * api参考：https://dayjs.gitee.io/docs/zh-CN/query/query
 */

const dayjs = require('dayjs')

// 是否在一个日期之前
console.log(dayjs().isBefore(dayjs('2021-01-01')))
// 比较年份
console.log(dayjs().isBefore('2024-01-01', 'year'))

// 日期是否相同
console.log(dayjs().isSame(dayjs('2011-01-01')))
console.log(dayjs().isSame('2023-3-13', 'year'))

// 是否在一个日期之后面
console.log(dayjs().isAfter(dayjs('2021-01-01')))
// 比较年份
console.log(dayjs().isAfter('2024-01-01', 'year'))

// 是否为dayjs对象
console.log(dayjs.isDayjs(dayjs()))
console.log(dayjs.isDayjs(new Date()))
