export class ListNode {
  constructor(val, next) {
    this.val = (val == null ? 0 : val)
    this.next = (next == null ? null : next)
  }
}

export function reverseBetween(head, m, n) {
  let start = head
  let pre

  // 找到起点
  while (--m > 0) {
    pre = start
    start = start.next
  }

  // 找到终点
  let end = head
  while (--n > 0) {
    end = end.next
  }

  // 翻转中间部分
  let last = end.next
  end.next = null
  while (start != null) {
    const next = start.next
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
