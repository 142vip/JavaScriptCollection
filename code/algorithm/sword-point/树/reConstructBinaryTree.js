/*
 * @Description: 【中等】重建二叉树
 * @Version: Beta1.0
 * @Author: 【B站&公众号】储凡
 * @Date: 2021-05-11 12:57:40
 * @LastEditors: 【B站&公众号】储凡
 * @LastEditTime: 2021-05-11 12:58:33
 */

/**
 * 二叉树结点定义
 * @param x
 */
function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}

/**
 * 重建二叉树
 * @param pre
 * @param vin
 * @returns {TreeNode|null}
 */
function reConstructBinaryTree(pre, vin) {
  if (pre.length === 0) {
    return null
  }
  // 获取根节点 ,新建二叉树结点
  const rootNode = new TreeNode(pre[0])

  const rootIndex = vin.indexOf(pre[0])
  console.log(rootIndex, pre[0], vin.slice(0, rootIndex), vin.slice(rootIndex + 1))
  console.log(rootIndex, pre[0], pre.slice(1, rootIndex), pre.slice(rootIndex + 1))
  // 注意，找中序结点的时候，需要去除根结点，先序的时候，
  rootNode.left = reConstructBinaryTree(pre.slice(1, rootIndex + 1), vin.slice(0, rootIndex))
  rootNode.right = reConstructBinaryTree(pre.slice(rootIndex + 1), vin.slice(rootIndex + 1))
  return rootNode
}
