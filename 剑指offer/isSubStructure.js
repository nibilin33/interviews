/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
// 找到相同的点，递归遍历子节点是否相同，同为null ，true, 两个都不为null,值一样true,
function isSame(a, b) {
  if (b === null) {
    return true;
  }
  if (a === null) {
    return false;
  }
  if (a.val !== b.val) {
    return false;
  }
  return isSame(a.left, b.left) && isSame(a.right, b.right);
}
var isSubStructure = function(A, B) {
  if (!A || !B) {
    return false;
  }
  //  判断A树和B树是否完全相等 或 左边的树包含B树 或 右边的树包含B树
  return (
    isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  );
};
