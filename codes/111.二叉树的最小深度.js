/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root == null) return 0;
  if (root.left == null && root.right == null) {
    return 1;
  }
  let min = Number.MAX_VALUE;
  if (root.left != null) {
    min = Math.min(minDepth(root.left), min);
  }
  if (root.right != null) {
    min = Math.min(minDepth(root.right), min);
  }
  return min + 1;
};
// @lc code=end
