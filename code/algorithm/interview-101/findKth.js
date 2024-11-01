/**
 * 寻找最大K数
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型
 * @return int整型
 */
function findKth(a, n, K) {
  const result = quickSort(a, 0, n - 1)
  console.log(result)
  return result[K - 1]
}

/**
 * 快排
 * @param arr
 * @param low
 * @param high
 */
function quickSort(arr, low, high) {
  if (low < high) {
    // 中间区分值
    const pivot = getPivot(arr, low, high)
    // 左侧
    quickSort(arr, low, pivot - 1)
    // 右侧
    quickSort(arr, pivot + 1, high)
  }
  return arr
}

/**
 * 获取节点
 */
function getPivot(arr, low, high) {
  const pivot = arr[low]
  while (low < high) {
    // pivot右侧元素都比arr[pivot]值大
    while (low < high && pivot <= arr[high]) {
      --high
    }
    arr[low] = arr[high]

    // pivot左侧元素都比arr[pivot]值小
    while (low < high && pivot >= arr[low]) {
      ++low
    }
    arr[high] = arr[low]
  }
  arr[low] = pivot

  return low
}

console.log(findKth([1, 3, 5, 2, 2], 5, 3))
