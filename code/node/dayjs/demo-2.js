/**
 * dayjs 的取值|赋值操作
 */
const dayjs = require('dayjs')

// 获取或设置毫秒
console.log(dayjs().millisecond())
console.log(dayjs().millisecond(1))

// 获取或设置秒
console.log(dayjs().second())
console.log(dayjs().second(1))

// 获取或设置小时
console.log(dayjs().hour())
console.log(dayjs().hour(12))

/**
 * dayjs.date 是该月的日期。 dayjs.day 是星期几
 */

// 获取或设置月份里的日期
console.log(dayjs().date())
console.log(dayjs().date(10))

// 获取或设置星期几
console.log(dayjs().day())
console.log(dayjs().day(3))


// 获取或设置月份
console.log(dayjs().month())
console.log(dayjs().month(0))

// 获取或设置年份
console.log(dayjs().year())
console.log(dayjs().year(2023))


// get方法获取
console.log(dayjs().get('year'))
console.log(dayjs().get('month'))
console.log(dayjs().get('date'))
console.log(dayjs().get('hour'))
console.log(dayjs().get('minute'))
console.log(dayjs().get('second'))
console.log(dayjs().get('millisecond'))

// set方法设置
console.log(dayjs().set('date', 1))
console.log(dayjs().set('month', 6)) // 5月
console.log(dayjs().set('second', 30))
// 支持链式调用
console.log(dayjs().set('hour', 8).set('minute', 35).set('second', 15))
