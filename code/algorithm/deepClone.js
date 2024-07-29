/**
 * 基于Json序列化的深拷贝【不能处理函数】
 * @param target
 */
function DeepCloneByJSON(target) {
  return JSON.parse(JSON.stringify(target))
}

/**
 * 基于递归思想的深拷贝
 * @param target
 * @returns {{}|*}
 * @constructor
 */
function DeepClone(target) {
  let result
  const targetType = checkType(target)
  if (targetType === 'object') {
    // 处理对象
    result = {}
  }
  if (targetType === 'Array') {
    result = []
  }

  // 遍历目标数据
  for (const key in target) {
    // 获取每一项值
    const value = target[key]
    // 递归处理
    result[key] = DeepClone(value)
  }
  return result
}

/**
 * 判断数据类型
 * @param target
 */
function checkType(target) {
  // typeof -instanceof -toString.call()  -Array.isArray()
  return Object.prototype.toString.call(target).slice(8, -1)
}
