/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
// 递归左边变右边
var invertTree = function(root) {
    function invert(node) {
        if(node == null){
            return;
        }
        let tmp = node.left;
        node.left = node.right;
        node.right = tmp;
        invert(node.left);
        invert(node.right);
    } 
    invert(root)
    return root;
};
// @lc code=end

