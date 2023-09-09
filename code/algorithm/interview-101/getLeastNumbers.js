/**
 * 给定一个数组，找出其中最小的K个数。
 * 例如：
 * - 数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。
 * - 如果K>数组的长度，那么返回一个空的数组
 */
/**
 * 基于冒泡排序
 * @param input
 * @param k
 */
function GetLeastNumbersSolution(input, k) {
  const len = input.length

  if (k > len) {
    return []
  }
  // 冒泡，跑k趟,每趟就有一个元素在位置上 需要输出前k，就跑k趟
  for (let i = 0; i < k; i++) {
    for (let j = len; j > i; j--) {
      if (input[i] >= input[j]) {
        // 元素换位置
        const temp = input[j]
        input[j] = input[i]
        input[i] = temp
      }
    }
  }

  return input.slice(0, k)
}

/**
 * 基于简单选择排序
 * @param input
 * @param k
 */
function GetLeastNumbersSolution02(input, k) {
  const len = input.length

  if (k > len) {
    return []
  }

  // 冒简单选择排序，每趟就有一个元素在位置上 需要输出前k，就跑k趟
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < len; j++) {
      if (input[i] >= input[j]) {
        // 元素换位置
        const temp = input[j]
        input[j] = input[i]
        input[i] = temp
      }
    }
  }
  return input.slice(0, k)
}

/**
 * 基于sort函数
 * @param input
 * @param k
 */
function GetLeastNumbersSolution03(input, k) {
  // if (k > input.length) return []
  // // 排序
  // input.sort((a,b)=>a-b)
  // return input.slice(0, k)

  return k > input.length ? [] : input.sort((a, b) => a - b).slice(0, k)
}

console.log(GetLeastNumbersSolution([4, 5, 1, 6, 2, 7, 3, 8], 4))
console.log(GetLeastNumbersSolution02([4, 5, 1, 6, 2, 7, 3, 8], 4))
console.log(GetLeastNumbersSolution03([4, 5, 1, 6, 2, 7, 3, 8], 4))
