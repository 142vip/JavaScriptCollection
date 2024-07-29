class ListNode {
  val: number

  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param m int整型
 * @param n int整型
 * @return ListNode类
 */
export function reverseBetween(head: ListNode, m: number, n: number): ListNode {
  let start: ListNode = head
  let pre: ListNode = null

  // 找到起点
  while (--m > 0) {
    pre = start
    start = start.next
  }

  // 找到终点
  let end: ListNode = head
  while (--n > 0) {
    end = end.next
  }

  // 翻转中间部分
  let last: ListNode = end.next
  end.next = null
  while (start != null) {
    const next: ListNode = start.next
    start.next = last
    last = start
    start = next
  }
  // 将起点前的节点与终点相连
  if (pre == null)
    return end
  pre.next = end
  return head
}
