/*
 * @Description: 【困难】对称的二叉树
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-11 17:52:52
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-11 17:53:26
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
export function isSymmetrical(pRoot) {
  if (pRoot === null) {
    // 子树为空，判断子树为对称
    return true
  }

  // 不为空则判断左右子树是否对称，依据：左右子树位置互换，依旧对称 【调用一次】
  return isSameTree(pRoot.left, pRoot.right)
}

/**
 * 判断左右子树是是否对称
 */
export function isSameTree(leftTree, rightTree) {
  if (leftTree === null && rightTree === null) {
    return true
  }
  else if (leftTree !== null && rightTree !== null) {
    // 左右子树不为空，则分别比对左右子树
    if (leftTree.val === rightTree.val) {
      // 根结点相同，比对左右子树
      return isSameTree(leftTree.left, rightTree.right) && isSameTree(rightTree.left, leftTree.right)
    }
  }
  else {
    return false
  }
}
