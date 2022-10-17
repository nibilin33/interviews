/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function loopTree(left, right) {
    if (left == null && right == null) {
      return true;
    }
    if (!left || !right || left.val !== right.val) {
      return false;
    }
    return loopTree(left.left, right.right) && loopTree(left.right, right.left);
  }
  const result = loopTree(root.left, root.right);
  return result;
};
// @lc code=end

// [1,2,2,null,3,null,3]
