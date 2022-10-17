/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const deep = node => {
    if (!node) return;
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    deep(node.left);
    deep(node.right);
  };
  deep(root);
  return root;
};
// @lc code=end
