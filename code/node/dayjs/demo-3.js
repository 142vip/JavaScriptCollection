/**
 * 操作dayjs对象
 */
const dayjs = require('dayjs')

// 支持链式调用
console.log(dayjs('2019-01-25').add(1, 'day').subtract(1, 'year').year(2009).toString())

// 增加一定时间 参考：https://dayjs.gitee.io/docs/zh-CN/manipulate/add
console.log(dayjs().add(7, 'day'))
console.log(dayjs().add(10, 'hour'))

// 减去一定时间 , 同上
console.log(dayjs().subtract(7, 'year'))
console.log(dayjs().subtract(2, 'month'))


// 设置到一个时间的开始
console.log(dayjs().startOf('year'))
// 设置到一个时间的末尾
console.log(dayjs().endOf('month'))
