
const result = []
function push (node) {
  if (result) {
    return result.push(node)
  }
}
function pop () {
  if (result.length > 0) {
    return result.pop()
  }
}
function top () {
  if (result.length > 0) {
    return result[result.length - 1]
  }
}

// 对数组排序
function min () {
  // 对result数组进行排序
  return Math.min(...result)
}
