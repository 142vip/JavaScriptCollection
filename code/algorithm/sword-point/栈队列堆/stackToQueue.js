/*
 * @Description: 【简单】用两个栈实现队列
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-29 22:06:51
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-29 22:07:22
 */

const result = []

/**
 * 模拟进队列操作
 * @param node
 * @returns {*[]}
 */
function push(node) {
  // 尾部进栈
  result.push(node)
  return result
}

/**
 * 模拟出队列操作
 * @returns {*}
 */
function pop() {
  // 队列 先进先出 头部出去
  return result.shift()
}

console.log(push(1), push(2))
console.log(pop(), pop())
