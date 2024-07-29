/**
 * 展示 Day.js 对象的操作
 * api参考：https://dayjs.gitee.io/docs/zh-CN/display/format
 */

const dayjs = require('dayjs')

// 将字符串格式化为日期
console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'))
// 默认返回的是 ISO8601 格式字符串 '2020-04-02T08:02:17-05:00'
console.log(dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'))
// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
console.log(dayjs('2019-01-25').format('DD/MM/YYYY')) // '25/01/2019'

// 时间戳 毫秒 13位
console.log(dayjs('2022-01-25').valueOf())
// 时间戳 秒 10位
console.log(dayjs('2022-01-25').unix())

// 获取当前月份包含的天数
console.log(dayjs('2019-01-25').daysInMonth())

// 原生Date对象
console.log(dayjs('2019-01-25').toDate())
