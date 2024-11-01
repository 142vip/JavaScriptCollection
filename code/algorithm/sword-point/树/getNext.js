/*
 * @Description: 【中等】二叉树的下一个结点
 * @Version: Beta1.0
 * @Author: 微信公众号：储凡
 * @Date: 2021-05-11 15:38:02
 * @LastEditors: 微信公众号：储凡
 * @LastEditTime: 2021-05-11 15:40:20
 */

/* function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
} */
function getNext(pNode) {
  // 中序遍历 ---> 左-根(pNode)-右
  // 所以这里pNode的下一个结点，要么是pNode右子树的第一个最左结点（左边的叶子结点）
  // 但是如果pNode的右子树为空，则pNode的下个结点，则为第一个左子树指向pNode的祖先结点

  if (pNode.right !== null) {
    // 存在右子树，寻找右子树的最左结点
    let rightNode = pNode.right
    while (rightNode.left !== null) {
      // 一直向左找
      rightNode = rightNode.left
    }
    // 跳出循环的时候，right_node.left==null；即:right_node为叶子结点
    return rightNode
  }
  else {
    // 右子树为空,则向上找
    while (pNode.next !== null) {
      const parentNode = pNode.next
      if (parentNode.left === pNode) {
        return parentNode
      }
      // 父结点的左子树不是指向给定的结点的话，则继续往上寻找父结点
      pNode = pNode.next
    }
  }

  // 都找不到，则返回null
  return null
}
