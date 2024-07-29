/**
 * 深拷贝实现
 */

const obj = {
  name: 'xxxx',
  test: 'xxx',
  // 浅拷贝中，这一层只能拷贝引用
  msg: {
    name: 'xxx',
  },
  color: ['pink', 'red'],
}

const obj_test = {

}

// 利用函数递归来实现深拷贝
function deepCopy(newObj, oldObj) {
  for (const key in oldObj) {
    // 判断我们的属性值属于那种数据类型
    const item = oldObj[key]
    // 判断item是否为数组
    if (Array.isArray(item)) {
      newObj[key] = []
      deepCopy(newObj[key], item)
      // 注意 Array instanceof Object 数组是属于对象的 先过滤
    }
    else if (item instanceof Object) {
      // 判断item是否为对象
      newObj[key] = {}
      deepCopy(newObj[key], item)
    }
    else {
      // 判断是否为简单数据类型
      newObj[key] = item
    }
  }
}

deepCopy(obj_test, obj)
// 输出对比
console.log(obj_test, obj)
