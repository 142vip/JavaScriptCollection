/*
 * @Description: 【较难】删除链表中重复的结点
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-02 09:02:18
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-02 09:15:24
 */

function ListNode(x) {
  this.val = x
  this.next = null
}

// 注意是排序的结点
// 这种先遍历，再借用临时变量 也可以考虑用递归
export function deleteDuplication(pHead) {
  // 定义map
  const map = new Map()
  while (pHead) {
    const value = map.has(pHead.val) ? map.get(pHead.val) + 1 : 1
    map.set(pHead.val, value)

    // 下一个元素
    pHead = pHead.next
  }
  // 遍历map 找出值为1的
  let result = new ListNode(-1)
  const pre = result
  for (const m of map) {
    const [key, count] = m
    // 尾插法
    if (count === 1) {
      result.next = new ListNode(key)

      // 指针后移
      result = result.next
    }
  }
  // pre为结果链表的头结点 ，去除-1；
  return pre.next
}

/**
 * 基于递归
 */
export function deleteDuplication01(head) {
  if (head === null || head.next === null) {
    return head
  }

  // 前后结点都不为空，比较val值
  let nextNode = head.next
  if (head.val === nextNode.val) {
    while (nextNode !== null && head.val === nextNode.val) {
      // 值相同的情况 移动到下一个结点
      nextNode = nextNode.next
    }
    // 过滤掉值相同的，递归
    return deleteDuplication01(nextNode)
  }
  else {
    // 值不同,将头结点的下一个位置指向
    head.next = deleteDuplication01(head.next)
    // 返回头结点
    return head
  }
}
