/**
 * 链表结点
 */
function ListNode(x) {
  this.val = x
  this.next = null
}
/**
 *【简单】 链表中倒数最后k个结点
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function findKthToTail(pHead, k) {
  // 结点不存在返回空
  if (!pHead) {
    return null
  }
  const arr = []
  // 结点遍历,将结点存放在数组中
  while (pHead) {
    arr.push(pHead)
    pHead = pHead.next
  }
  return arr[arr.length - k]
}

// 调用用例
console.log(findKthToTail([1, 2, 3], 2))
