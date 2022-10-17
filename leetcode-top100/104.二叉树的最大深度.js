/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
// 递归遍历左右，取最大一个
var maxDepth = function(root) {
  function loopTree(node, dep) {
    if (node === null) {
      return dep;
    }
    dep++;
    return Math.max(loopTree(node.left, dep), loopTree(node.right, dep));
  }

  return loopTree(root, 0);
};
// @lc code=end
