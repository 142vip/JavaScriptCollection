/**
 * dayjs 解析操作
 */

const dayjs = require('dayjs')

console.log(dayjs().format())
// 输出： 2023-03-13T22:28:34+08:00

// 解析
console.log(dayjs('2018-04-04T16:00:00.000Z'))
// 输出：
// {
//     '$L': 'en',
//         '$d': 2018-04-04T16:00:00.000Z,
//         '$x': {},
//     '$y': 2018,
//         '$M': 3,
//         '$D': 5,
//         '$W': 4,
//         '$H': 0,
//         '$m': 0,
//         '$s': 0,
//         '$ms': 0
// }

// 解析毫秒级时间戳，返回解析后的对象
console.log(dayjs(1318781876406))

// 解析秒级时间戳，返回解析后的对象
console.log(dayjs.unix(1318781876))
console.log(dayjs.unix(1318781876.721))

// Date对象
const date = new Date(2022, 8, 18)
console.log(dayjs(date))

// 对象复制
const a = dayjs()
const b = a.clone()
console.log(a, b)
// a 和 b 是两个独立的 Day.js 对象
// 在 dayjs() 里传入一个 Day.js 对象也会返回一个复制的对象。
const c = dayjs()
const d = dayjs(c)
console.log(c, d)

// 校验是否为日期
console.log(dayjs('2022-01-33').isValid())
// true, parsed to 2022-02-02
console.log(dayjs('some invalid string').isValid())
// false
