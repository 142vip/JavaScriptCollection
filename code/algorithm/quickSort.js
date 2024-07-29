/**
 * 非递归实现快速排序
 * @param data
 * @param low
 * @param high
 */
function quickSort(data, low, high) {
  console.log(data, low, high)
  const pivot = partition(data, low, high)
  const result = []

  if (pivot + 1 < high) {
    result.push(pivot + 1, high)
  }
  else if (pivot > low + 1) {
    result.push(low, pivot - 1)
  }
  // 数组不为空
  while (result.length > 0) {
    const tempHigh = result.pop()
    const tempLow = result.pop()
    if (tempLow >= tempHigh) {
      break
    }
    const tempPivot = partition(data, tempLow, tempHigh)

    if (tempPivot + 1 < high) {
      result.push(tempPivot + 1, tempHigh)
    }
    else if (tempPivot - 1 > low) {
      result.push(tempLow, tempPivot - 1)
    }
  }

  return data
}

/**
 * 严版获取快排pivot
 * @param data
 * @param low
 * @param high
 */
function partition(data, low, high) {
  const pivot = data[low]

  while (low < high) {
    // 高位
    while (low < high && pivot <= data[high]) --high
    data[low] = data[high]
    // 低位
    while (low < high && pivot >= data[low]) ++low
    data[high] = data[low]
  }
  data[low] = pivot

  return low
}

console.log(quickSort([1, 8, 9, 2], 0, 3))
