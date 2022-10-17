/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  if (t1 && !t2) return t1;
  if (!t1 && t2) return t2;
  let root = new TreeNode(t1.val + t2.val);
  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);
  return root;
};
// @lc code=end
