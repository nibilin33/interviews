/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
// 层序遍历，返回当前层的最后一位
var rightSideView = function(root) {
  if (root === null) {
    return [];
  }
  let que = [root];
  let visited = [];
  let result = [root.val];
  while (que.length > 0) {
    let node = que.shift();
    if (node.left) {
      visited.push(node.left);
    }
    if (node.right) {
      visited.push(node.right);
    }
    if (que.length === 0) {
      if (visited.length > 0) {
        que = que.concat(visited);
        const v = visited.pop();
        result.push(v.val);
      }
      visited = [];
    }
  }
  return result;
};
// @lc code=end
