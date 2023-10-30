/*
 * @Description:
 * @Version: Beta1.0
 * @Author: 【B站&公众号】储凡
 * @Date: 2021-05-12 21:37:07
 * @LastEditors: 【B站&公众号】储凡
 * @LastEditTime: 2021-05-12 21:40:15
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  // 层序遍历的 进阶

  // 处理空树的情况
  if (pRoot === null) {
    return []
  }

  // 临时队列 存放二叉树
  const tempQueue = [pRoot]
  // 存放结果
  const result = []

  while (tempQueue.length > 0) {
    // 记录当前层有几个子结点 ---> 子树
    let count = tempQueue.length

    //  记录一层的数据，先不考虑从左到右还是从右到左
    const levelArr = []
    while (count > 0) {
      const currentTree = tempQueue.shift()

      // 根结点存在
      if (currentTree !== null) {
        // 直接放入根结点
        levelArr.push(currentTree.val)
        // 处理左子树
        if (currentTree.left !== null) {
          // 当前层的结点，进入队列
          tempQueue.push(currentTree.left)
          //                     level_arr.push(currentTree.left.val)
        }

        if (currentTree.right !== null) {
          tempQueue.push(currentTree.right)
          //                     level_arr.push(currentTree.right.val)
        }
        // 每次只能处理一个
        count--
      }
    }
    result.push(levelArr)
  }

  // 这里已经按照层序遍历输出了，后面可以对数组进行奇数|偶数处理
  // 当然，也可以在数组push的时候进行奇数|偶数计数处理
  result.map((item, index) => {
    return (index + 1) % 2 === 1 ? item : item.reverse()
  })
  return result
}
