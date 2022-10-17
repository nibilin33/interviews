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
 * @return {number}
 */
// 只有一个节点深度为1，有左子树没有右子树，深度为左子树+1，相反，右子树+1
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  function loopTree(node) {
    return node
      ? Math.max(loopTree(node.right) + 1, loopTree(node.left) + 1)
      : 0;
  }
  let height = loopTree(root);
  return height;
};
