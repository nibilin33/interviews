/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 对于当前节点，如果其左子节点不为空，
// 则在其左子树中找到最右边的节点，作为前驱节点，
// 将当前节点的右子节点赋给前驱节点的右子节点，
// 然后将当前节点的左子节点赋给当前节点的右子节点，并将当前节点的左子节点设为空。
// 对当前节点处理结束后，继续处理链表中的下一个节点，直到所有节点都处理结束。

var flatten = function(root) {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      const next = curr.left;
      let predecessor = next;
      while (predecessor.right !== null) {
        predecessor = predecessor.right;
      }
      predecessor.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};
// @lc code=end
