/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let result = [];
  function loopTree(node) {
    if (!node) {
      return;
    }
    loopTree(node.left);
    result.push(node.val);
    loopTree(node.right);
  }
  loopTree(root);
  return result;
};
// @lc code=end
