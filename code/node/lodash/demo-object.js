/**
 * Lodash对象相关操作
 * @private
 */


const _ = require('lodash')


// assign：拷贝
// merge:  深拷贝
// at:  创建数组，值来源于对象路径相应的值
// create: 创建对象，继承prototype
// defaults: 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上【不覆盖】
// findKey： 返回存在值对应的key
// forIn: 迭代器遍历对象的自身和继承的可枚举属性
// forOwn:迭代器遍历对象的自身的可枚举属性
// functions: 创建一个函数属性名称的数组，函数属性名称来自object对象自身可枚举属性
// get： 指定路径获取对象值
// result: 累死get ，指定属性值操作
// has:  检查直接属性是否存在
// invert: 键值互换
// invoke: 调用对象中属性值函数（支持传参）
// keys: 对象属性组成的数组
// mapKeys: 自定义属性，生成新对象
// mapValues: 自定义值，生成新对象
// pick：指定属性，返回新对象
// omit: 指定属性反选，返回新对象
// set:  设置对象属性和值
// update: 类似set操作
// unset: 移除对象属性
// toPairs:  创建可枚举属性的对象键值数组（二维），与fromPairs操作相反
// transform: reduce替代方法，值、键转换
// values:  创建对象可枚举属性值的数组
