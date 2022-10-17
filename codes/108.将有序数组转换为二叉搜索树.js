/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 二叉搜索树的中序遍历是一个升序序列,根据中序遍历得二叉树
var sortedArrayToBST = function(nums) {
  const createTree = (left, right) => {
    if (left > right) {
      return null;
    }
    let p = Math.round((left + right) / 2);
    let root = new TreeNode(nums[p]);
    root.left = createTree(left, p - 1);
    root.right = createTree(p + 1, right);
    return root;
  };
  return createTree(0, nums.length - 1);
};
// @lc code=end
