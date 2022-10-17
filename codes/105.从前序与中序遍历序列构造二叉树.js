/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 根据前序遍历确定根节点（第一个）i=0
// 在中序遍历中找到root的index，区分出左右子数
// 0-index 左子树，index - length,右子树
var buildTree = function(preorder, inorder) {
  if (!inorder.length) return null;
  let temp = preorder[0],
    mid = inorder.indexOf(temp);
  let root = new TreeNode(temp);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};
// @lc code=end
