/**
 * 【简单】不用加减乘除做加法
 * @param num1
 * @param num2
 */
function Add (num1, num2) {
  let count = num1

  if (num2 === 0) {
    return count
  }

  if (num2 > 0) {
    for (let index = 0; index < num2; index++) {
      count++
    }
    return count
  }

  const temp = Math.abs(num2)
  for (let index = 0; index < temp; index++) {
    count--
  }
  return count
}
