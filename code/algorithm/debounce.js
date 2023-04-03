/**
 * 防抖
 * @param func
 * @param time
 */
function debounce(func, time) {
  let timeout
  return () => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      // 执行函数
      func.apply(this, arguments)
      // func()
    }, time)
  }
}

function test() {
  console.log(new Date().getTime())
}

const debounceTest = debounce(test, 1000)
debounceTest()
