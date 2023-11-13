/*
 * @Description: 【较难】包含min函数的栈
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-04-29 22:04:17
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-04-29 22:04:36
 */

const result = []
function push(node) {
  if (result) {
    return result.push(node)
  }
}
function pop() {
  if (result.length > 0) {
    return result.pop()
  }
}
function top() {
  if (result.length > 0) {
    return result[result.length - 1]
  }
}
function min() {
  // 对result数组进行排序
  return Math.min(...result)
}
