/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
var isUnivalTree = function(root) {
  const deep = node => {
    if (!node) return true;
    if (node.val !== root.val) {
      return false;
    }
    return deep(node.left) && deep(node.right);
  };
  return deep(root);
};
// @lc code=end
