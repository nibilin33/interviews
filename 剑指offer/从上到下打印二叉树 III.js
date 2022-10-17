// 请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  let que = [root];
  let result = [];
  let visited = [];
  let level = 0;
  while (que.length > 0) {
    let node = que.shift();
    if (typeof result[level] === "undefined") {
      result[level] = [];
    }
    if (level % 2 === 0) {
      result[level].push(node.val);
    } else {
      result[level].unshift(node.val);
    }
    if (node.left) {
      visited.push(node.left);
    }
    if (node.right) {
      visited.push(node.right);
    }
    if (que.length === 0) {
      level++;
      que = que.concat(visited);
      visited = [];
    }
  }
  return result;
};
