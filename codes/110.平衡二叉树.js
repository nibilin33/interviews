/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;
  const height = node => {
    if (!node) {
      return -1;
    }
    return 1 + Math.max(height(node.left), height(node.right));
  };
  return (
    Math.abs(height(root.left) - height(root.right)) < 2 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  );
};
// @lc code=end
