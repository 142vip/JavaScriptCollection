/**
 * 旋转数组的最小数字
 * 找出前者大于后者的数，立即返回
 * 难度：简单
 * @param rotateArray
 */
function minNumberInRotateArray(rotateArray) {
  if (rotateArray.length < 0) {
    return 0
  }
  for (let index = 0; index < rotateArray.length - 1; index++) {
    if (rotateArray[index] > rotateArray[index + 1]) {
      return rotateArray[index + 1]
    }
  }
  return rotateArray[0]
}

