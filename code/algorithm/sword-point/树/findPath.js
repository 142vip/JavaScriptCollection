/*
 * @Description: 【中等】二叉树中和为某一值的路径(二)
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-12 22:01:00
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-12 22:01:45
 */

export function TreeNode(x) {
  this.val = x
  this.left = null
  this.right = null
}

export function findPath(root, expectNumber) {
  const result = []
  function dfs(root, target, tempRes) {
    // 处理空树
    if (root === null) {
      return
    }
    // 根结点，进数组
    tempRes.push(root.val)

    // 当前结点为叶子结点
    if (root.left === null && root.right === null && target === root.val) {
      result.push(tempRes)
    }

    // 不是叶子结点，向左向右子树递归
    dfs(root.left, target - root.val, [...tempRes])
    dfs(root.right, target - root.val, [...tempRes])
  }
  dfs(root, expectNumber, [])
  return result
}
