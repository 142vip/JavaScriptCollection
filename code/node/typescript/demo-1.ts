/**
 * 基础类型
 */

export default {}

// 布尔类型
const isSuccess: boolean = true
console.log(isSuccess)

// number类型
const a: number = 123
console.log(a)

// string类型
const name = 'chufan'
console.log(name)

// 模板字符串
const sister: string = `hello,${name}`
console.log(sister)

/* 数组 */
const list: number[] = [1, 2, 3, 4]
const arrayList: Array<number> = [1, 2, 3, 4]
console.log(list, arrayList)

const tupleResult: [string, number] = ['chufan', 23]
console.log(tupleResult)

/* 枚举 */
enum COLOR {
  RED = 0,
  GREEN = 1,
  BLUE = 3,
}

enum NAME {
  zhangSan = 'zhangSan',
  liSi = 'liSi',
}

console.log(COLOR.BLUE, NAME.zhangSan)

/**
 * 函数返回值为空
 * @param a
 */
function testVoid(a: number) {
  console.log(a)
}

const aVoid = null
const bVoid = undefined
console.log(aVoid, bVoid)

// 调用
testVoid(11)
