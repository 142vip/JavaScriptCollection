/*
 * @Description: 【简单】二叉树的镜像
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-11 16:42:42
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-11 16:43:17
 */

export function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}

export function Mirror(pRoot) {
  // 空树
  if (pRoot === null) {
    return pRoot
  }

  // 处理根节点，交换左右子树【建议封装函数】
  [pRoot.left, pRoot.right] = [pRoot.right, pRoot.left]

  // 左子树镜像
  Mirror(pRoot.left)
  // 右子树镜像
  Mirror(pRoot.right)

  return pRoot
}
