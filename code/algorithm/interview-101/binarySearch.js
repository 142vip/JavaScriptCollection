// 参考：https://github.com/labuladong/fucking-algorithm/blob/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E8%AF%A6%E8%A7%A3.md

/**
 *
 */
function search(nums, target) {
  // 投机
  // return nums.indexOf(target)

  // 二分查找
  return binarySearch(nums, target)
}

/**
 * 二分查找
 */
function binarySearch(nums, target) {
  let left = 0
  let right = nums.length
  while (left < right) {
    // 注意js取整问题；
    const mid = left + Number.parseInt((right - left) / 2)
    console.log(mid, nums)
    if (nums[mid] === target) {
      return mid
    }
    else if (nums[mid] > target) {
      // 左侧
      right = mid
    }
    else if (nums[mid] < target) {
      // 右侧
      left = mid + 1
    }
  }
  return -1
}

/**
 * 左侧部分【第一个相同元素】
 */
function leftBound(nums, target) {
  let left = 0
  let right = nums.length - 1

  // [left,right]
  while (left <= right) {
    // 取中间元素
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      right = mid - 1
    }
    else if (nums[mid] < target) {
      // 右侧
      left = mid + 1
    }
    else if (nums[mid] > target) {
      // 左侧
      right = mid - 1
    }
  }
  // 跳出循环，left=right+1 索引
  return left === nums.length ? left : -1
}

/**
 * 右侧部分【最后一个相同元素】，[left,right) 情况
 */
function rightBound(nums, target) {
  let left = 0
  let right = nums.length

  // [left,right) 情况
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      // 往右
      left = mid + 1
    }
    else if (nums[mid] < target) {
      // 右侧
      left = mid + 1
    }
    else if (nums[mid] > target) {
      // 左侧
      right = mid
    }
  }
  console.log(left, right)

  // left===right 跳出循环
  return nums[left - 1] === target ? left - 1 : -1
}

const nums = [5, 7, 7, 8, 8, 8, 10]
const target = 8
search(nums, target)
leftBound(nums, target)
rightBound(nums, target)
