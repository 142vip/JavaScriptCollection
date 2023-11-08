/**
 * 浅拷贝
 * @type {{msg: {name: string}, test: string, name: string}}
 */
const obj = {
  name: 'xxxx',
  test: 'xxx',
  // 浅拷贝中，这一层只能拷贝引用
  msg: {
    name: 'xxx'
  }
}

const obj_test = {

}

// 循环拷贝一层
for (const key in obj) {
  // key 对象的属性名  obj[key] 对象的属性值
  obj_test[key] = obj[key]
}

console.log(obj_test)
// 修改obj_test对象中的msg属性的值
obj_test.msg.name = '2332'
// 但是原来的obj对象中的msg属性对应的值也会变
console.log(obj)


// ES6中实现浅拷贝的语法糖  效果和上面一样
Object.assign(obj_test, obj)

