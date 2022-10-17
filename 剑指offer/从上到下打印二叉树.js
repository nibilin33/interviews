/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let que = [root];
  while (que.length > 0) {
    let node = que.shift();
    if (node.left) {
      que.push(node.left);
    }
    if (node.right) {
      que.push(node.right);
    }
    result.push(node.val);
  }
  return result;
};
