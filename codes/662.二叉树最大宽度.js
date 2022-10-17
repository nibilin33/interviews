/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 每层最左侧节点到最右侧节点的宽度
// 广度优先遍历，将二叉树的下标存储到数组中，根节点下标为 1，左子树结点为 2 * i，右子树下标为 2 * i+1。
// 然后遍历层,同一层的宽度等于最右坐标减去最左
// 测试用例中有一种极端情况，即树的层次很深和树的子节点只有一个且沿着一个方向，导致上述使用i2和i2+1的方式更新索引会超过数的边界；
// 解决方法是如果某一层的节点只有一个，可以将该层节点的索引改为1，因为后续的节点都是以这个索引为1的节点开始扩展的，可以把这个节点想象成root作类比。
var widthOfBinaryTree = function(root) {
  if (root === null) {
    return 0;
  }
  let que = [root];
  let nodeIndex = [1];
  let max = 0;
  while (que.length > 0) {
    let size = que.length;
    let left, right;
    if (size === 1) {
      nodeIndex = [1];
    }
    for (let i = 0; i < size; i++) {
      let node = que.shift();
      let rootIndex = nodeIndex.shift();
      if (i === 0) {
        left = rootIndex;
      }
      if (i == size - 1) {
        right = rootIndex;
      }
      if (node.left) {
        que.push(node.left);
        nodeIndex.push(2 * rootIndex);
      }
      if (node.right) {
        que.push(node.right);
        nodeIndex.push(2 * rootIndex + 1);
      }
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};
// @lc code=end
