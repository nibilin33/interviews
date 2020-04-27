/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    const deep = (node)=>{
        if(!node){
            return;
        }
        deep(node.left);
        result.push(node.val);
        deep(node.right);
    }
    deep(root);
    return result;
};
// @lc code=end

