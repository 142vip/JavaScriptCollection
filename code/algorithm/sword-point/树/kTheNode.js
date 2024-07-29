/**
 * 链表结点
 * @param x
 * @constructor
 */
function ListNode(x) {
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

function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}

/**
 * 注意，是返回结点
 * @param pRoot
 * @param k
 */
function KTheNode(pRoot, k) {
  return inOrder(pRoot)[k - 1]
}

/**
 * 中序遍历
 * @param root
 */
function inOrder(root) {
  if (root === null) {
    return []
  }
  return inOrder(root.left).concat([root]).concat(inOrder(root.right))
}
