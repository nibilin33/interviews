/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
  function loopTree(node1, node2) {
    if (node1 === null && node2 === null) {
      return null;
    }
    let node = new TreeNode();
    node.val = (node1 ? node1.val : 0) + (node2 ? node2.val : 0);
    node.left = loopTree(node1 ? node1.left : null, node2 ? node2.left : null);
    node.right = loopTree(
      node1 ? node1.right : null,
      node2 ? node2.right : null
    );
    return node;
  }
  return loopTree(root1, root2);
};
// @lc code=end
