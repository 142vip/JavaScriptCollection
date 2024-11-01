/**
 * 链表结点
 */
export function ListNode(x) {
  this.val = x
  this.left = null
  this.right = null
}

const root = {
  val: 8,
  left: {
    val: 6,
    left: { val: 5, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
  right: {
    val: 10,
    left: { val: 9, left: null, right: null },
    right: {
      val: 11,
      left: null,
      right: {
        val: 12,
        left: null,
        right: null,
      },
    },
  },
}

console.log(root)

/**
 * 注意，是返回结点
 */
export function KTheNode(pRoot, k) {
  return inOrder(pRoot)[k - 1]
}

/**
 * 中序遍历
 */
export function inOrder(root) {
  if (root === null) {
    return []
  }
  return inOrder(root.left).concat([root]).concat(inOrder(root.right))
}
