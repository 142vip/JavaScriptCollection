/**
 * 创建学生-年龄关系映射
 * - 存储键值对
 */
const studentAgeMap = new Map([
  ['Tom', 20],
  ['Lisa', 18],
])

/**
 * 往集合中增加映射关系
 */
studentAgeMap.set('fairy', 24)

/**
 * 根据映射关键字获取值
 */
const age = studentAgeMap.get('fairy')

/**
 * 返回集合中元素个数
 */
const size = studentAgeMap.size

/**
 * 根据键删除映射关系
 */
studentAgeMap.delete('fairy')
/**
 * 判断键是否存在
 */
studentAgeMap.has('fairy')

/**
 * 清空Map
 */
studentAgeMap.clear()

/**
 * 判断类型，返回对象object
 */
const mapType = typeof studentAgeMap

/**
 * 判断实例，返回true
 */
const isMap = studentAgeMap instanceof Map

/**
 * 循环处理
 */
studentAgeMap.forEach((value, key, originMap) => {
  console.log(key, value, JSON.stringify(originMap))
})

/**
 * 获取所有的键
 */
studentAgeMap.keys()

/**
 * 获取所有的键、值
 */
studentAgeMap.entries()

/**
 * 获取所有的值
 */
studentAgeMap.values()
