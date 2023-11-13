/*
 * @Description: 【简单】从尾到头打印链表
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-01 20:49:28
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-01 21:24:40
 */

/**
 * 单链表数据结构
 * @param x
 * @constructor
 */
function ListNode(x) {
  this.val = x
  this.next = null
}

/**
 * 从头出链表，按序放入数组，最后翻转数组
 * 偷懒写法
 * @param head
 * @returns {*[]}
 */
function printListFromTailToHeadOne(head) {
  const result = []
  while (head !== null) {
    result.push(head.val)
    // 下一个元素
    head = head.next
  }
  // 翻转并返回
  return result.reverse()
}


/**
 * 相比链表的头插，对数组array进行头插unshift()即可
 * @param head
 * @returns {*[]}
 */
function printListFromTailToHeadTwo(head) {
  const result = []
  while (head !== null) {
    // 头插
    result.unshift(head.val)
    // 下一个结点
    head = head.next
  }
  return result
}


/**
 * 先翻转链表【采用头插法】，再按序输出到数组中
 * @param head
 * @returns {*[]}
 */
function printListFromTailToHeadThree(head) {
  let reverseHead = new ListNode(-1)
  // 翻转链表
  while (head !== null) {
    const pre = head
    // 下一个结点
    head = head.next
    pre.next = reverseHead.next
    reverseHead.next = pre
  }
  // 重新整理 去掉val=-1的点
  reverseHead = reverseHead.next

  const result = []
  // 遍历链表
  while (reverseHead !== null) {
    result.push(reverseHead.val)
    // 下一个结点
    reverseHead = reverseHead.next
  }
  return result
}
